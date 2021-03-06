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
                            <h3 class="card-title w-100 text-center">Add New Category</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" action="{{ route('admin.category.update', $category->id) }}" method="post"
                              enctype="multipart/form-data">
                            {{ csrf_field() }}

                            <div class="card-body">
                                @include('backend.partials.messages')
                                <div class="form-group">
                                    <label for="name">Category Name</label>
                                    <input type="text" class="form-control @error('title') is-invalid @enderror"
                                           id="name" name="name" value="{{$category->name}}"
                                           placeholder="Enter Category Name">
                                </div>

                                <!-- textarea -->
                                <div class="form-group">
                                    <label>Category Description</label>
                                    <textarea class="form-control" rows="3" name="description"
                                              placeholder="Enter description of category">{{$category->description}}</textarea>
                                </div>

                                <div class="form-group">
                                    <label>Product Category</label>
                                    <select class="form-control" name="parent_id">
                                        <option value=" ">Please Select Category</option>
                                        @foreach($main_category as $cate)
                                            <option value="{{ $cate->id }}" {{ $cate->id == $category->parent_id ? 'selected':'' }}>{{ $cate->name }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <!--input for image-->
                                <div class="form-group">
                                    <label for="Image">Category Old Image</label> <br>
                                    <img src="{{ asset('images/categories/'.$category->image) }}" alt="" width="100"
                                         height="80">
                                    <br>

                                    <label for="Image">Category Image</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="image" id="Image">
                                            <label class="custom-file-label" for="Image">Choose file</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-success float-right">Update Category</button>
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