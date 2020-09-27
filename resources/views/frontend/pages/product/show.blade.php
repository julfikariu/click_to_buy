@extends('frontend.layout.master')

@section('title')
    {{ $product->title }} | ClickToBuy
@endsection

@section('content')
    <div class="container mt-1 pt-1">

        <!-- Section: product details -->
        <section id="productDetails" class="pb-5">

            <!--News card-->
            <div class="card mt-1 hoverable">
                <div class="row mt-5">
                    <!-- Product gallery part -->
                    <div class="col-md-6">
                        <div class=" mx-3">
                            @foreach($product->images as $image)
                                @if($product->images->first()==$image)
                                    <img src="{{ asset('images/products/'.$image->image) }}" alt="" class="img-fluid"  id="product_zoom" style="width: 100%;height: 320px; ">
                                @endif

                            @endforeach
                            <p><br></p>
                                <hr>
                            <div class="row">

                                @foreach($product->images as $image)
                                    <div class="col">
                                        <img src="{{ asset('images/products/'.$image->image) }}" class="thumb" alt="" style="width: 100%; height: 100px">
                                    </div>
                                @endforeach

                            </div>
                        </div>

                    </div>

                    <div class="col-md-5 mr-3 text-center text-md-left">
                        <div class="" id="pdroduct_zoom_area"></div>
                        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                            <strong>{{ $product->title }} </strong>
                        </h2>
                        <h6 style="font-size: 12px"><i class="fa fa-star grey-text"></i><i
                                    class="fa fa-star grey-text"></i><i class="fa fa-star grey-text"></i><i
                                    class="fa fa-star grey-text"></i><i class="fa fa-star grey-text"></i>
                            &nbsp;&nbsp;&nbsp; (0 customer reviews)
                        </h6>
                        <hr>
                        <p class="ml-xl-0 ml-4">
                            <strong>Brand : </strong> <span
                                    class="ml-2 text-capitalize">{{ $product->brand->name }}</span>
                        </p>
                        <hr>
                        <p class="ml-xl-0 ml-4">
                            <strong>Category : </strong> <span
                                    class="ml-2 text-capitalize">{{ $product->category->name }}</span></p>
                        <hr>
                        <p class="">
                            <strong>Price : </strong>
                            <span class="ml-4 pl-2 h3-responsive text-warning font-weight-bold">
                                <strong>{{ $product->price }}৳</strong>
                            </span>
                            <span class="grey-text">
                                <small>
                                    <s>125৳ </s>
                                </small>
                            </span>
                        </p>
                        <hr>
                        <p class="ml-xl-0 ml-4">
                            <strong>Availability: </strong>
                            <span class="ml-2 text-muted">{{ $product->quantity < 1 ?'No Item in Stock': $product->quantity.' item in stock' }}</span>
                        </p>


                        <!-- Add to Cart -->
                        <section class="color">
                            <div class="mt-5">
                                <p class="grey-text">Choose your color</p>
                                <div class="row text-center text-md-left">

                                    <div class="col-md-4 col-12 ">
                                        <!--Radio group-->
                                        <div class="form-group">
                                            <input class="form-check-input" name="group100" id="radio100"
                                                   checked="checked" type="radio">
                                            <label for="radio100" class="form-check-label dark-grey-text">White</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <!--Radio group-->
                                        <div class="form-group">
                                            <input class="form-check-input" name="group100" id="radio101" type="radio">
                                            <label for="radio101" class="form-check-label dark-grey-text">Silver</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <!--Radio group-->
                                        <div class="form-group">
                                            <input class="form-check-input" name="group100" id="radio102" type="radio">
                                            <label for="radio102" class="form-check-label dark-grey-text">Gold</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3 mb-4">
                                    <div class="col-md-12 text-center text-md-left text-md-right">
                                        <form id="addtocart" action="{{ route('cart.store')}}" method="post">
                                            @csrf
                                            <input type="hidden" name="product_id" value="{{ $product->id }}">
                                            <button class="btn btn-primary btn-rounded waves-effect waves-light">
                                                <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- /.Add to Cart -->
                    </div>


                </div>
            </div>
            <!--News card-->

        </section>
        <!-- Section: product details -->

        <section class="product_details">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">

                    </div>
                    <div class="col-md-9">
                        <div class="description-review">
                            <div class="d-flex justify-content-around">
                                <ul class="nav nav-tabs " id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                           role="tab" aria-controls="home" aria-selected="true">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                           role="tab" aria-controls="profile" aria-selected="false">Reviews</a>
                                    </li>

                                </ul>
                            </div>
                            <hr>
                            <div class="" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">{{ $product->description }}</div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row mb-5">
                                        <!--Image column-->
                                        <div class="col-sm-2 col-12 mb-3">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (8).jpg"
                                                 alt="sample image" class="avatar rounded-circle z-depth-1-half">
                                        </div>
                                        <!--/.Image column-->

                                        <!--Content column-->
                                        <div class="col-sm-10 col-12">
                                            <a>
                                                <h5 class="user-name font-weight-bold">John Doe</h5>
                                            </a>
                                            <!-- Rating -->
                                            <ul class="rating">
                                                <li>
                                                    <i class="fas fa-star blue-text"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star blue-text"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star blue-text"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star blue-text"></i>
                                                </li>
                                                <li>
                                                    <i class="fas fa-star blue-text"></i>
                                                </li>
                                            </ul>
                                            <div class="card-data">
                                                <ul class="list-unstyled mb-1">
                                                    <li class="comment-date font-small grey-text">
                                                        <i class="far fa-clock-o"></i> 05/10/2015
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class="dark-grey-text article">Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                        </div>
                                        <!--/.Content column-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!--Section: Products v.5-->
        <section id="products" class="pb-5 mt-4">

            <hr>
            <h4 class="h4-responsive dark-grey-text font-weight-bold my-5 text-center">
                <strong>Related Products</strong>
            </h4>
            <hr class="mb-5">

            <p class="text-center w-responsive mx-auto mb-5 dark-grey-text">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Fugit, error amet numquam iure provident voluptate
                esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

            <!--Carousel Wrapper-->
            <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                <!--Controls-->
                <div class="controls-top">
                    <a class="btn-floating primary-color waves-effect waves-light" href="#multi-item-example"
                       data-slide="prev">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a class="btn-floating primary-color waves-effect waves-light" href="#multi-item-example"
                       data-slide="next">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
                <!--Controls-->

                <!--Indicators-->
                <ol class="carousel-indicators">
                    <li class="primary-color" data-target="#multi-item-example" data-slide-to="0"></li>
                    <li class="primary-color active" data-target="#multi-item-example" data-slide-to="1"></li>
                    <li class="primary-color" data-target="#multi-item-example" data-slide-to="2"></li>
                </ol>
                <!--Indicators-->

                <!--Slides-->
                <div class="carousel-inner" role="listbox">

                    <!--First slide-->
                    <div class="carousel-item">

                        <div class="col-md-4 mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Sony TV-675i</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-danger mb-2">bestseller</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star grey-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">

                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Samsung 786i</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-info mb-2">new</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star grey-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">
                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/9.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Canon 675-D</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-danger mb-2">bestseller</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">
                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                    </div>
                    <!--First slide-->

                    <!--Second slide-->
                    <div class="carousel-item active">

                        <div class="col-md-4 mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/8.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Samsung V54</a>
                                        </strong>
                                    </h5>
                                    <span class="badge grey mb-2">best rated</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">
                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/5.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Dell V-964i</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-info mb-2">new</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">

                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">iPad PRO</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-danger mb-2">bestseller</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star grey-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">
                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                    </div>
                    <!--Second slide-->

                    <!--Third slide-->
                    <div class="carousel-item">

                        <div class="col-md-4 mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Asus CT-567</a>
                                        </strong>
                                    </h5>
                                    <span class="badge grey mb-2">best rated</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">
                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/7.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Dell 786i</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-info mb-2">new</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star grey-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">
                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/10.jpg"
                                         class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1">
                                        <strong>
                                            <a href="" class="dark-grey-text">Headphones</a>
                                        </strong>
                                    </h5>
                                    <span class="badge badge-info mb-2">new</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                        <li>
                                            <i class="fas fa-star blue-text"></i>
                                        </li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left">
                                                <strong>1439$</strong>
                                            </span>
                                            <span class="float-right">

                                                <a class="" data-toggle="tooltip" data-placement="top" title=""
                                                   data-original-title="Add to Cart">
                                                    <i class="fas fa-shopping-cart ml-3"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>

                    </div>
                    <!--Third slide-->

                </div>
                <!--Slides-->

            </div>
            <!--Carousel Wrapper-->

        </section>
        <!--Section: Products v.5-->

    </div>

@endsection

@section('scripts')
    <script>
        $('#product_zoom').imagezoomsl({
            descarea: '#pdroduct_zoom_area',

            zoomstart: 2,
            magnifiereffectanimate: 'fadeIn',
            magnifierborder: 'none',

        });

        $('.thumb').click(function () {
            var vm = this;
            $('#product_zoom').fadeOut(600, function () {
                $(this).attr("src", $(vm).attr("src")).fadeIn(1000);
            });
            return false;

        });

    </script>
@endsection