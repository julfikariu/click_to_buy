

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
                            <h3 class="card-title w-100 text-center">Add New Product</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" action="{{ route('admin.product.store') }}" method="post" enctype="multipart/form-data">
                            {{ csrf_field() }}

                            <div class="card-body">
                                @include('backend.partials.messages')
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Product Title</label>
                                    <input type="text" class="form-control @error('title') is-invalid @enderror" id="exampleInputEmail1" name="title" placeholder="Enter Product Name">
                                </div>

                                <!-- textarea -->
                                <div class="form-group">
                                    <label>Product Description</label>
                                    <textarea class="form-control" rows="3" name="description" placeholder="Enter description of product"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Product Price</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" name="price" placeholder="Enter Product Price">
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Product Quantity</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" name="quantity" placeholder="Enter product Quantity">
                                </div>

                                <div class="form-group">
                                    <label>Product Category</label>
                                    <select class="form-control" name="category_id">
                                        <option value="">Please select any category for this product</option>
                                        @foreach( App\Models\Category::orderBy('name','asc')->where('parent_id', null)->get() as $category)
                                            <option value="{{ $category->id }}">{{$category->name}}</option>
                                            @foreach( App\Models\Category::orderBy('name','asc')->where('parent_id', $category->id)->get() as $child)
                                                <option  value="{{ $child->id }}">-----------> {{$child->name}}</option>
                                            @endforeach
                                        @endforeach

                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Brand Name</label>
                                    <select class="form-control" name="brand_id">
                                        <option value="">Please select any brand for this product</option>
                                        @foreach( App\Models\Brand::orderBy('name','asc')->get() as $brand)
                                            <option value="{{ $brand->id }}">{{$brand->name}}</option>
                                        @endforeach

                                    </select>
                                </div>

                                    <!--input for image-->
                                <div class="form-group">
                                    <label for="exampleInputFile">Product Image (Optional All Image field)</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="product_image[]" id="exampleInputFile">
                                           <label class="custom-file-label" for="exampleInputFile">1. Choose file</label>
                                        </div>
                                    </div>

                                    <div class="input-group mt-1">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="product_image[]" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">2. Choose file</label>
                                        </div>
                                    </div>
                                    <div class="input-group mt-1">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="product_image[]" id="exampleInputFile">
                                             <label class="custom-file-label" for="exampleInputFile">3. Choose file</label>
                                        </div>
                                    </div>
                                    <div class="input-group mt-1">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="product_image[]" id="exampleInputFile">
                                             <label class="custom-file-label" for="exampleInputFile">4. Choose file</label>
                                        </div>
                                    </div>


                                </div>



                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-info float-right">Add Product</button>
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