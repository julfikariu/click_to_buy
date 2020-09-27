@extends('frontend.layout.master')

@section('content')
    <!-- /.Main Container -->
    <div class="container">
        <!-- Grid row -->
        <div class="row pt-4">

            <!-- Content -->
            <div class="col-lg-12">
                <h2>Search Products for = <span class="badge badge-success">{{ $search }}</span></h2>

                <!--Section: Products-->
                <section>
                    @include('frontend.pages.product.partials.all_products')

                </section>
                <!--Section: Products-->


            </div>
            <!-- /.Content -->

        </div>
        <!-- Grid row -->
    </div>
    <!-- /.Main Container -->
@endsection
