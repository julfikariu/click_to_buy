<!-- Update slider Modal -->
<div class="modal fade" id="updateModal{{$slider->id}}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4>Update Slider</h4>

                <div class="card card-outline card-primary">
                    <form action="{{ route('admin.slider.update', $slider->id) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="card-body">
                            @include('backend.partials.messages')
                            <div class="form-group">
                                <label for="name">Slider Title</label>
                                <input type="text" class="form-control @error('title') is-invalid @enderror" id="name" name="title" value="{{ $slider->title}}" placeholder="Enter Slider Title">
                            </div>

                            <div class="form-group">
                                <label for="name">Slider sub_title</label>
                                <input type="text" class="form-control @error('sub_title') is-invalid @enderror" id="name" name="sub_title" value="{{ $slider->sub_title}}" placeholder="Enter Slider Title">
                            </div>


                            <div class="form-group">
                                <label for="priority">Slider Priority</label>
                                <input type="text" class="form-control @error('title') is-invalid @enderror" id="priority" name="priority" value="{{ $slider->priority}}" placeholder="Enter priority)">
                            </div>

                            <!--input for image-->
                            <div class="form-group">
                                <label for="Image">Old Image</label>
                                <img src="{{ asset('images/slider/'.$slider->image) }}" alt="" width="100" height="80">
                            </div>

                            <div class="form-group">
                                <label for="Image">Slider Image</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" name="image" id="Image">
                                        <label class="custom-file-label" for="Image">Choose file</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="name">Slider Button Text</label>
                                <input type="text" class="form-control @error('title') is-invalid @enderror" id="name" name="button_text" value="{{ $slider->button_text}}" placeholder="Enter Button Text(optional)">
                            </div>

                            <div class="form-group">
                                <label for="name">Slider Button Link</label>
                                <input type="text" class="form-control @error('title') is-invalid @enderror" id="name" name="button_link" value="{{ $slider->button_link}}" placeholder="Enter Button Link(optional)">
                            </div>

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-info float-right">Update Slider</button>
                            <button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>
</div>