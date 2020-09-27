
@extends('frontend.layout.master')
@section('megamenu')
    @include('frontend.partials.megamenu')
@endsection

@section('content')
    <!-- /.Main Container -->
    <div class="container">
        <!-- Grid row -->
        <div class="row">

            <!-- Content -->
            <div class="col-lg-12">

                <!-- Section: Intro -->
                <section class="section pt-4">

                    <!-- Grid row -->
                    <div class="row">

                        <!--Grid column-->
                        <div class="col-lg-8 col-md-12 mb-3 pb-lg-2">
                            <!--Image -->
                            <div class="view zoom  z-depth-1">

                                <img src="images/others/product2.jpg" class="img-fluid" alt="sample image">
                                <div class="mask rgba-white-light">
                                    <div class="dark-grey-text d-flex align-items-center pt-3 pl-4">
                                        <div>
                                            <a><span class="badge badge-danger">bestseller</span></a>
                                            <h2 class="card-title font-weight-bold pt-2"><strong>This is news title</strong></h2>
                                            <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                            <a class="btn btn-danger btn-sm btn-rounded clearfix d-none d-md-inline-block">Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--Image -->
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-4 col-md-12 mb-4">

                            <!-- Section: Categories -->
                            <section class="section">

                                <ul class="list-group z-depth-1">

                                    @foreach( App\Models\Category::orderBy('name','asc')->where('parent_id', null)->get() as $parent)

                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <a class="dark-grey-text font-small">
                                                <img src="{{ asset('images/categories/'.$parent->image) }}" alt="" width="50" height="40">{{ $parent->name }}</a>
                                            <a href="#"></a><span class="badge badge-danger badge-pill">43</span></a>
                                        </li>
                                    @endforeach
                                </ul>
                            </section>
                            <!-- Section: Categories -->

                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                </section>
                <!-- Section: Intro -->

                <!--Section: Products-->
                <section>

                    @include('frontend.pages.product.partials.all_products')

                </section>
                <!--Section: Products-->

                <!--Section: Advertising-->
                <section>

                    <!--Grid row-->
                    <div class="row">

                        <!--Grid column-->
                        <div class="col-12">
                            <!--Image -->
                            <div class="view  z-depth-1">
                                <img src="images/others/ecommerce6.jpg" class="img-fluid" alt="sample image">
                                <div class="mask rgba-stylish-slight">
                                    <div class="dark-grey-text text-right pt-lg-5 pt-md-1 mr-5 pr-md-4 pr-0">
                                        <div>
                                            <a>
                                                <span class="badge badge-primary">SALE</span>
                                            </a>
                                            <h2 class="card-title font-weight-bold pt-md-3 pt-1">
                                                <strong>Sale 20% off on every smartphone!
                                                </strong>
                                            </h2>
                                            <p class="pb-lg-3 pb-md-1 clearfix d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                            <a class="btn mr-0 btn-primary btn-rounded clearfix d-none d-md-inline-block">Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--Image -->
                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <!-- Grid row -->
                    <div class="row mt-4 pt-1">

                        <!--Grid column-->
                        <div class="col-lg-8 col-md-12 mb-3 mb-md-4 pb-lg-2">
                            <!--Image -->
                            <div class="view zoom z-depth-1">
                                <img src="images/others/product1.jpg" class="img-fluid" alt="sample image">
                                <div class="mask rgba-white-light">
                                    <div class="dark-grey-text d-flex align-items-center pt-4 ml-lg-3 pl-lg-3 pl-md-5">
                                        <div>
                                            <a><span class="badge badge-danger">bestseller</span></a>
                                            <h2 class="card-title font-weight-bold pt-2"><strong>This is news title</strong></h2>
                                            <p class="hidden show-ud-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                            <a class="btn btn-danger btn-sm btn-rounded clearfix d-none d-md-inline-block"></i> Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--Image -->
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-4 col-md-12 mb-4">
                            <!--Image -->
                            <div class="view zoom z-depth-1 photo">
                                <img src="images/others/product3.jpg" class="img-fluid" alt="sample image">
                                <div class="mask rgba-stylish-strong">
                                    <div class="white-text center-elem text-center w-75">
                                        <div class="">
                                            <a><span class="badge badge-info">NEW</span></a>
                                            <h2 class="card-title font-weight-bold pt-2"><strong>This is news title</strong></h2>
                                            <p class="">Lorem ipsum dolor sit amet, consectetur. </p>
                                            <a class="btn btn-info btn-sm btn-rounded"></i> Read more</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--Image -->

                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                </section>
                <!--Section: Advertising-->

                <!--Section: product list-->
                <section class="mb-5">
                    <div class="row">
                        <!-- New Products-->
                        <div class="col-lg-4 col-md-12 col-12 pt-4">
                            <hr>
                            <h5 class="text-center font-weight-bold dark-grey-text"><strong>New Products</strong></h5>
                            <hr>
                            <!-- First row -->
                            <div class="row mt-5 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/1.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a class="pt-5"><strong>iPad</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$849</strong></h6>

                                </div>

                            </div>
                            <!-- /.First row -->

                            <!-- Second row -->
                            <div class="row mt-2 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/10.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Headphones</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$49</strong> <span class="grey-text"><small><s>$89</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.Second row -->

                            <!-- Third row -->
                            <div class="row mt-2 py-2 pb-1 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/3.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>iMac 27"</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$1449</strong> <span class="grey-text"><small><s>$2189</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.Third row -->

                        </div>
                        <!-- /.New Products-->

                        <!-- Top Sellers-->
                        <div class="col-lg-4 col-md-12 pt-4">

                            <hr>
                            <h5 class="text-center font-weight-bold dark-grey-text"><strong>Top Sellers</strong></h5>
                            <hr>

                            <!-- First row -->
                            <div class="row mt-5 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/4.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Dell V-964i</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$649</strong> <span class="grey-text"><small><s>$889</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.First row -->

                            <!-- Second row -->
                            <div class="row mt-2 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/5.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Asus GT67i</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$1249</strong> <span class="grey-text"><small><s>$1489</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.Second row -->

                            <!-- Third row -->
                            <div class="row mt-2 py-2 pb-1 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/6.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Headphones</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$49</strong> <span class="grey-text"><small><s>$89</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.Third row -->

                        </div>
                        <!-- /.Top Sellers -->

                        <!-- Random Products-->
                        <div class="col-lg-4 col-md-12 pt-4">

                            <hr>
                            <h5 class="text-center font-weight-bold dark-grey-text"><strong>Random products</strong></h5>
                            <hr>

                            <!-- First row -->
                            <div class="row mt-5 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/7.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Dell 786i</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$749</strong> <span class="grey-text"><small><s>$889</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.First row -->

                            <!-- Second row -->
                            <div class="row mt-2 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/8.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Samsung V54</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$249</strong> <span class="grey-text"><small><s>$489</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.Second row -->

                            <!-- Third row -->
                            <div class="row mt-2 py-2 mb-4 hoverable align-items-center">

                                <div class="col-6">
                                    <a><img src="images/Products/9.jpg" class="img-fluid"></a>
                                </div>
                                <div class="col-6">

                                    <!-- Title -->
                                    <a><strong>Canon 675-D</strong></a>

                                    <!-- Rating -->
                                    <ul class="rating inline-ul">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                    </ul>

                                    <!-- Price -->
                                    <h6 class="h6-responsive font-weight-bold dark-grey-text"><strong>$2149</strong> <span class="grey-text"><small><s>$2489</s></small></span></h6>

                                </div>

                            </div>
                            <!-- /.Third row -->

                        </div>
                        <!-- /.Random Products -->
                    </div>

                </section>
                <!--/Section: product list-->

                <!-- Section: Last items -->
                <section>

                    <h4 class="font-weight-bold mt-4 dark-grey-text"><strong>LAST ITEMS</strong></h4>
                    <hr class="mb-5">

                    <!-- Grid row -->
                    <div class="row">

                        <!--Grid column-->
                        <div class="col-lg-3 col-md-6 mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="images/products/12.jpg" class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1"><strong><a href="#" class="dark-grey-text">Headphones</a></strong></h5><span class="badge badge-danger mb-2">bestseller</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left"><strong>1439$</strong></span>
                                            <span class="float-right">

                                                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-shopping-cart ml-3"></i></a>
                                                    </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-3 col-md-6 mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="images/products/16.jpg" class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1"><strong><a href="#" class="dark-grey-text">Headphones</a></strong></h5><span class="badge badge-danger mb-2">bestseller</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left"><strong>1439$</strong></span>
                                            <span class="float-right">

                                                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-shopping-cart ml-3"></i></a>
                                                    </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-3 col-md-6 mb-4">
                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="images/products/11.jpg" class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1"><strong><a href="#" class="dark-grey-text">iPhone</a></strong></h5><span class="badge badge-info mb-2">new</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left"><strong>1439$</strong></span>
                                            <span class="float-right">

                                                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-shopping-cart ml-3"></i></a>
                                                    </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-3 col-md-6 mb-4">

                            <!--Card-->
                            <div class="card card-ecommerce">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img src="images/products/3.jpg" class="img-fluid" alt="">
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                                <!--Card image-->

                                <!--Card content-->
                                <div class="card-body">
                                    <!--Category & Title-->

                                    <h5 class="card-title mb-1"><strong><a href="#" class="dark-grey-text">iMac</a></strong></h5><span class="badge badge-danger mb-2">bestseller</span>
                                    <!-- Rating -->
                                    <ul class="rating">
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star blue-text"></i></li>
                                        <li><i class="fas fa-star grey-text"></i></li>
                                    </ul>

                                    <!--Card footer-->
                                    <div class="card-footer pb-0">
                                        <div class="row mb-0">
                                            <span class="float-left"><strong>1439$</strong></span>
                                            <span class="float-right">

                                                    <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fas fa-shopping-cart ml-3"></i></a>
                                                    </span>
                                        </div>
                                    </div>

                                </div>
                                <!--Card content-->

                            </div>
                            <!--Card-->

                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <!--Grid row-->
                    <div class="row justify-content-center mb-4">

                        <!--Pagination -->
                        <nav class="mb-4">
                            <ul class="pagination pagination-circle pg-blue mb-0">

                                <!--First-->
                                <li class="page-item disabled clearfix d-none d-md-block"><a class="page-link waves-effect waves-effect">First</a></li>

                                <!--Arrow left-->
                                <li class="page-item disabled">
                                    <a class="page-link waves-effect waves-effect" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>

                                <!--Numbers-->
                                <li class="page-item active"><a class="page-link waves-effect waves-effect">1</a></li>
                                <li class="page-item"><a class="page-link waves-effect waves-effect">2</a></li>
                                <li class="page-item"><a class="page-link waves-effect waves-effect">3</a></li>
                                <li class="page-item"><a class="page-link waves-effect waves-effect">4</a></li>
                                <li class="page-item"><a class="page-link waves-effect waves-effect">5</a></li>

                                <!--Arrow right-->
                                <li class="page-item">
                                    <a class="page-link waves-effect waves-effect" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>

                                <!--First-->
                                <li class="page-item clearfix d-none d-md-block"><a class="page-link waves-effect waves-effect">Last</a></li>

                            </ul>
                        </nav>
                        <!--/Pagination -->

                    </div>
                    <!--Grid row-->
                </section>
                <!-- /.Section: Last items -->

            </div>
            <!-- /.Content -->

        </div>
        <!-- Grid row -->
    </div>
    <!-- /.Main Container -->
@endsection