@extends('backend.layout.master')

@section('admin_content')

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-8 mx-auto">
                    <!-- general form elements -->
                    <div class="card card-navy">
                        <div class="card-header">
                            <h3 class="card-title w-100 text-center">Update a division</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" action="{{ route('admin.division.update', $division->id) }}" method="post"
                              enctype="multipart/form-data">
                            {{ csrf_field() }}

                            <!-- .card-body -->
                            <div class="card-body">
                                @include('backend.partials.messages')
                                <div class="form-group">
                                    <label for="name">Division Name</label>
                                    <input type="text" class="form-control @error('title') is-invalid @enderror" id="name" name="name" value="{!! $division->name !!}" placeholder="Enter Division Name">
                                </div>

                                <div class="form-group">
                                    <label for="name">Division Priority</label>
                                    <input type="number" class="form-control @error('title') is-invalid @enderror" id="name" name="priority" value="{!! $division->priority !!}" placeholder="Enter Division Priority">
                                </div>

                            </div>
                            <!-- /.card-body -->


                            <div class="card-footer">
                                <button type="submit" class="btn btn-success float-right">Update division</button>
                            </div>
                        </form>
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