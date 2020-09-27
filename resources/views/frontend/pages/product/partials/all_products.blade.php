<!--Grid row-->
<div class="row">
    <!--Grid column-->
    <div class="col-12">

        <!-- Grid row -->
        <div class="row">

        @foreach($products as $product)

            <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4">

                    <!--Card-->
                    <div class="card card-ecommerce">

                        <!--Card image-->
                        <div class="view overlay">
                            @php $i=1; @endphp
                            @foreach($product->images as $image)
                                @if($i > 0)
                                    <img src="{{ asset('images/products/'. $image->image) }}"
                                         class="img-fluid w-100 p-1" style="height: 170px;" alt="">
                                @endif
                                @php $i--; @endphp
                            @endforeach
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <!--Card image-->

                        <!--Card content-->
                        <div class="card-body">
                            <!--Category & Title-->

                            <h5 class="card-title mb-1"><strong><a href="{{ route('product.show',$product->slug) }}"
                                                                   class="dark-grey-text text-capitalize">{{ $product->title }}</a></strong>
                            </h5><span class="badge badge-danger mb-2">bestseller</span>
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
                                                        <span class="float-left"><strong>{{ $product->price }}
                                                                $</strong></span>
                                    <span class="float-right">
                                        @include('frontend.pages.product.partials.addtocart')
                                    </span>
                                </div>
                            </div>

                        </div>
                        <!--Card content-->

                    </div>
                    <!--Card-->

                </div>
                <!--Grid column-->

            @endforeach
        </div>
    </div>

</div>
<!--Grid row-->