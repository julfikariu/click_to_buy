@extends('backend.layout.master')

@section('admin_content')

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">


                <!-- Right column -->
                <div class="col-md-10 mx-auto">
                    <div class="d-flex justify-content-end">
                        <a href="#addnewslider" class="btn btn-info mb-2 " data-toggle="modal">Add New Slider</a>
                    </div>

                    {{--here we include the add slider Modal--}}
                  @include('backend.pages.slider.addslider')


                    @include('backend.partials.messages')
                    <div class="card card-navy">
                        <div class="card-header ">
                            <h3 class="card-title w-100 text-center">All Our Sliders</h3>
                        </div>

                        <!-- /.card-header -->
                        <div class="card-body p-0">
                            <table class="table table-striped table-condensed table-hover mytable">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Sliders title</th>
                                        <th>Sub title</th>
                                        <th>Slider Image</th>
                                        <th>Priority</th>
                                        <th>Button Text</th>
                                        <th>Button Link</th>
                                        <th style="width: 40px">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                @foreach($sliders as $slider)
                                    <tr>
                                        <td>{{ $loop->index+1 }}</td>
                                        <td>{{ $slider->title }}</td>
                                        <td>{{ $slider->sub_title }}</td>
                                        <td>
                                            <img src="{{ asset('images/slider/'.$slider->image) }}" alt="" width="100" height="80">
                                        </td>
                                        <td>{{ $slider->priority }}</td>
                                        <td>{{ $slider->button_text }}</td>
                                        <td>{{ $slider->button_link }}</td>

                                        <td>
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <a href="#updateModal{{$slider->id}}" class="btn btn-success btn-sm" data-toggle="modal">Edit</a>
                                                <a href="#deleteModal{{$slider->id}}" class="btn btn-danger btn-sm" data-toggle="modal">Delete</a>

                                                <!-- Delete Modal -->
                                                <div class="modal fade" id="deleteModal{{$slider->id}}" tabindex="-1"
                                                     role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                <h4>Are You Sure to Delete ?</h4>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <form action="{{route('admin.slider.delete', $slider->id)}}"
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

                                                {{--Here include the update modal--}}
                                                @include('backend.pages.slider.updatemodal')

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