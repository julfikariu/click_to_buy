

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
                            <h3 class="card-title w-100 text-center">Add New District </h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" action="{{ route('admin.district.store') }}" method="post" enctype="multipart/form-data">
                            {{ csrf_field() }}

                            <!-- .card-body -->
                                <div class="card-body">
                                    @include('backend.partials.messages')
                                    <div class="form-group">
                                        <label for="name">District Name</label>
                                        <input type="text" class="form-control @error('title') is-invalid @enderror" id="name" name="name" placeholder="Enter Division Name">
                                    </div>


                                    <div class="form-group">
                                        <label>Division Name</label>
                                        <select class="form-control select2 select2-hidden-accessible" style="width: 100%;" tabindex="-1" aria-hidden="true" name="division_id">
                                            <option value="">Please Select Right Division</option>
                                            @foreach($divisions as $division)
                                                <option value="{!! $division->id !!}">{!! $division->name !!}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                </div>
                                <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-info float-right">Add District</button>
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