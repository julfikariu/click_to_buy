<!--Navigation-->
<header>

@include('frontend.partials.sidenav')

<!-- Navbar -->
    <nav class="navbar fixed-top navbar-expand-lg  navbar-light scrolling-navbar  white">
        <div class="container">
            <!-- SideNav slide-out button -->
            <div class="float-left mr-2">
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="fas fa-bars"></i></a>
            </div>
            <a class="navbar-brand font-weight-bold" href="{{ route('home') }}"><strong>Click To Buy</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <a class="nav-link dark-grey-text font-weight-bold" href="#" data-toggle="modal"
                           data-target="#cart-modal-ex">
                    <span class="badge danger-color" id="totalItems">
                        {{ App\Models\Cart::totalItems() }}
                    </span>
                            <i class="fas fa-shopping-cart blue-text" aria-hidden="true"></i>
                            <span class="clearfix d-none d-sm-inline-block">Cart</span>
                        </a>
                    </li>
                    @guest
                        <li class="nav-item dropdown ml-3">

                            <a class="nav-link dropdown-toggle dark-grey-text font-weight-bold"
                               id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false"><i class="fas fa-user blue-text"></i>
                                Dashboard
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                                <!-- Authentication Links -->

                                <a class="dropdown-item waves-effect waves-light" href="{{route('admin.dashboard')}}">My Admin</a>
                                <a class="dropdown-item waves-effect waves-light"
                                   href="{{ route('login') }}">{{ __('Login') }}</a>
                                @if (Route::has('register'))
                                    <a class="dropdown-item waves-effect waves-light"
                                       href="{{ route('register') }}">{{ __('Register') }}</a>
                                @endif
                            </div>
                        </li>
                    @else


                          <li class="nav-item dropdown ml-3">

                            <a class="nav-link dropdown-toggle dark-grey-text font-weight-bold text-capitalize"
                               id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">

                                <img src="{{ App\Helpers\ImageHelper::getUserImage(Auth::user()->id) }}" alt="" class="img-fluid rounded-circle mr-1" width="25" height="25">

                                {{ Auth::user()->username }}
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">

                                <a class="dropdown-item waves-effect waves-light" href="{{ route('user.dashboard') }}">
                                    {{ __('Dashboard') }}
                                </a>
                                <a class="dropdown-item waves-effect waves-light" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" class="hidden" method="POST">
                                    @csrf
                                </form>
                            </div>

                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
    <!-- /.Navbar -->

</header>
<!-- /.Navigation -->

@include('frontend.partials.cart_modal')
