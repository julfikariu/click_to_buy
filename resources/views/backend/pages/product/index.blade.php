@extends('backend.layout.master')

@section('admin_content')

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-8 mx-auto">
                    @include('backend.partials.messages')
                    <div class="card card-navy">
                        <div class="card-header ">
                            <h3 class="card-title w-100 text-center">Here all Products</h3>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body">
                            <table class="table table-striped table-condensed table-hover" id="products_table">
                                <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Product Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th style="width: 40px">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                @foreach($products as $product)
                                    <tr>
                                        <td>{{ $product->id }}</td>
                                        <td>{{ $product->title }}</td>
                                        <td>{{ $product->price }}</td>
                                        <td>{{ $product->quantity }}</td>
                                        <td>
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <a href="{{ route('admin.product.edit', $product->id ) }}"
                                                   class="btn btn-success btn-sm">Edit</a>
                                                <a href="#deleteModal{{$product->id}}" class="btn btn-danger btn-sm"
                                                   data-toggle="modal">Delete</a>
                                                <!-- Delete Modal -->
                                                <div class="modal fade" id="deleteModal{{$product->id}}" tabindex="-1"
                                                     role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                <h4>Are You Sure to Delete ?</h4>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <form action="{{route('admin.product.delete', $product->id)}}"
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
            $('#products_table').DataTable();
        });

    </script>
@endsection