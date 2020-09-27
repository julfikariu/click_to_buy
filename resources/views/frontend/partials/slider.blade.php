
@if($sliders ?? '' != null)
    <!--Carousel Wrapper-->
    <div id="carousel-example-1z" class="carousel slide carousel-fade bg-dark" data-ride="carousel">
        <!--Indicators-->
        <ol class="carousel-indicators">
            @foreach($sliders ?? '' as $slider)
            <li data-target="#carousel-example-1z" data-slide-to="{{ $loop->index }}" class="{{ $loop->index == 0 ? 'active':'' }}"></li>
            @endforeach
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
            <!--First slide-->
            @foreach($sliders ?? '' as $slider)
            <div class="carousel-item carousel-item-next carousel-item-left {{ $loop->index ==0?'active':'' }}">
                <div class="view h-100">
                    <img class="d-block h-100 w-lg-100" src="{{ asset('images/slider/'.$slider->image) }}" alt="First slide">
                    <div class="mask" style="background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))">
                        <!-- Caption -->
                        <div class="full-bg-img flex-center white-text">
                            <ul class="animated fadeIn col-10 list-unstyled">
                                <li>
                                    <p class="h1 red-text mb-4 mt-5">
                                        <strong>{{$slider->title}}</strong>
                                    </p>
                                </li>
                                <li>
                                    <h5 class="h5-responsive dark-grey-text font-weight-bold mb-5">Tempora incidunt ut labore et dolore veritatis et quasi architecto beatae</h5>
                                </li>
                                <li>
                                    <a target="_blank" href="{{$slider->button_link}}" class="btn btn-danger btn-rounded waves-effect waves-light" rel="nofollow">{{$slider->button_text}}</a>
                                </li>
                            </ul>
                        </div>
                        <!-- /.Caption -->
                    </div>
                </div>
            </div>
            <!--/First slide-->

            @endforeach

        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->

@endif