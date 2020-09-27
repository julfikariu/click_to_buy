@extends('backend.layout.master')

@section('admin_content')

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-10 mx-auto">
                    @include('backend.partials.messages')
                    <div class="card card-navy">
                        <div class="card-header ">
                            <h3 class="card-title w-100 text-center">All Our Districts</h3>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body p-0">
                            <table class="table table-striped table-condensed table-hover mytable">
                                <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Districts Name</th>
                                    <th>Division Name</th>
                                    <th style="width: 40px">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                @foreach($districts as $district)
                                    <tr>
                                        <td>{{ $district->id }}</td>
                                        <td>{{ $district->name }}</td>
                                        <td>{{ $district->division->name }}</td>

                                        <td>
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <a href="{{ route('admin.district.edit', $district->id ) }}"
                                                   class="btn btn-success btn-sm">Edit</a>
                                                <a href="#deleteModal{{$district->id}}" class="btn btn-danger btn-sm"
                                                   data-toggle="modal">Delete</a>

                                                <!-- Delete Modal -->
                                                <div class="modal fade" id="deleteModal{{$district->id}}" tabindex="-1"
                                                     role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                <h4>Are You Sure to Delete ?</h4>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <form action="{{route('admin.district.delete', $district->id)}}"
                                                                      method="post">
                                                                    {{ csrf_field() }}
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
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>


    </section>

@endsection


@section('single_page_script')
    <!-- bs-custom-file-input -->
    <script src="{{ asset('admin/plugins/bs-custom-file-input/bs-custom-file-input.min.js') }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            bsCustomFileInput.init();
        });
    </script>
@endsection