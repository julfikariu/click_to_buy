<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title> @yield('title','Click To Buy') </title>

            @include('frontend.partials.styles')
            <style>
                #carousel-thumb {
                    width: 98%;
                }

                .carousel .carousel-control-prev-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
                }

                .carousel .carousel-control-next-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
                }


                .avatar {
                    max-width: 150px;
                    max-height: 150px;
                    margin-top: -70px;
                    margin-left: auto;
                    margin-right: auto;
                    -webkit-border-radius: 50%;
                    border-radius: 50%;
                    overflow: hidden;
                }
                .hidden{
                    display: none;
                }
            </style>
            </head>

<body class="homepage-v2 hidden-sn white-skin animated">

@include('frontend.partials.header')


<section>

    @include('frontend.partials.slider')

</section>



<!-- Mega menu -->
<div class="container">
    @include('frontend.partials.megamenu')
    {{--@yield('megamenu')--}}
</div>
<!-- Mega menu -->

<!-- /.Main Container -->
<div class="container">

    <!-- Grid row -->
    <div class="row">

        <!-- Content -->
        <div class="col-lg-12">

            <!-- Section: Intro -->
            <section class="section pt-4">
                    @include('frontend.partials.messages')
            </section>
        </div>
    </div>
</div>

@yield('content')


@include('frontend.partials.footer')

@include('frontend.partials.scripts')

<script>

    new WOW().init();
</script>
@yield('scripts')
</body>

</html>
