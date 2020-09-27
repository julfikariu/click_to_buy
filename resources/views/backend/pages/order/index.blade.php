@extends('backend.layout.master')



@section('admin_content')

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-11 mx-auto">
                    @include('backend.partials.messages')

                    <div class="card card-navy">
                        <div class="card-header ">
                            <h3 class="card-title w-100 text-center">All Orders Here</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div id="example1_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">

                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="example1" class="table table-bordered table-striped dataTable"
                                               role="grid" aria-describedby="example1_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1"
                                                    colspan="1" style="width: 56.233px;"
                                                    aria-label="Rendering engine: activate to sort column ascending">
                                                    Id
                                                </th>
                                                <th class="sorting_desc" tabindex="0" aria-controls="example1"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Browser: activate to sort column ascending"
                                                    aria-sort="descending">
                                                    Order ID
                                                </th>
                                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1"
                                                    colspan="1"
                                                    aria-label="Platform(s): activate to sort column ascending">
                                                    Orderer Name
                                                </th>
                                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1"
                                                    colspan="1" style="width: 140.333px;"
                                                    aria-label="Engine version: activate to sort column ascending">
                                                    Phone No
                                                </th>
                                                <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1"
                                                    colspan="1" style="width: 250.1333px;"
                                                    aria-label="CSS grade: activate to sort column ascending">
                                                     Status
                                                </th>
                                                <th  rowspan="1" colspan="1" >
                                                    Action
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>

                                            @foreach($orders as $order)
                                            <tr role="row" >
                                                <td>{{ $loop->index +1 }}</td>
                                                <td><a href="{{ route('admin.order.show',$order->id) }}">#CLB{{ $order->id }}</a></td>
                                                <td>{{ $order->name }}</td>
                                                <td>{{ $order->phone_no }}</td>
                                                <td>
                                                   <span>
                                                      @if($order->is_seen_by_admin)
                                                           <span class="badge badge-success">Seen</span>
                                                       @else
                                                           <span class="badge badge-warning">Not Seen</span>
                                                       @endif
                                                     </span>
                                                    <span>
                                                         @if($order->is_completed)
                                                            <span class="badge badge-success">Completed</span>
                                                        @else
                                                            <span class="badge badge-danger">Not Completed</span>
                                                        @endif
                                                     </span>

                                                    <span>
                                                     @if($order->is_paid)
                                                            <span class="badge badge-success">Paid</span>
                                                        @else
                                                            <span class="badge badge-info">Unpaid</span>
                                                        @endif
                                                    </span>

                                                </td>
                                                <td>
                                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                                        <a href="#deleteModal{{$order->id}}" class="btn btn-danger btn-sm"
                                                           data-toggle="modal">Delete</a>

                                                        <!-- Delete Modal -->
                                                        <div class="modal fade" id="deleteModal{{$order->id}}" tabindex="-1"
                                                             role="dialog" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-body">
                                                                        <h4>Are You Sure to Delete ?</h4>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <form action="{{route('admin.order.delete', $order->id)}}"
                                                                              method="post">
                                                                            @csrf
                                                                            <button type="submit" class="btn btn-danger">Ok
                                                                            </button>
                                                                        </form>
                                                                        <button type="button" class="btn btn-warning"
                                                                                data-dismiss="modal">Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            @endforeach

                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>


    </section>

@endsection


@section('single_page_script')

    <!-- page script -->
    <script>
        $(function () {



            $('#example1').DataTable();
        });

    </script>
@endsection