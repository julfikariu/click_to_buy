
<!-- Sidebar navigation -->
<ul id="slide-out" class="side-nav custom-scrollbar">
    <!-- Logo -->
    <li>
        <div class="logo-wrapper waves-light">
            <a href="#"><img src="images/mdb-transparent.png" class="img-fluid flex-center"></a>
        </div>
    </li>
    <!--/. Logo -->
    <!--Social-->
    <li>
        <ul class="social">
            <li><a class="fb-ic"><i class="fab fa-facebook-f"> </i></a></li>
            <li><a class="pin-ic"><i class="fab fa-pinterest"> </i></a></li>
            <li><a class="gplus-ic"><i class="fab fa-google-plus-g"> </i></a></li>
            <li><a class="tw-ic"><i class="fab fa-twitter"> </i></a></li>
        </ul>
    </li>
    <!--/Social-->
    <!--Search Form-->
    <li>
        <form class="search-form" role="search">
            <div class="form-group md-form mt-0 pt-1 waves-light">
                <input type="text" class="form-control" placeholder="Search">
            </div>
        </form>
    </li>
    <!--/.Search Form-->
    <!-- Side navigation links -->
    <li>
        <ul class="collapsible collapsible-accordion">
            <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-shopping-cart"></i> Cart page<i class="fas fa-angle-down rotate-icon"></i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href="{{ route('carts') }}" class="waves-effect">My Cart</a></li>

                    </ul>
                </div>
            </li>
            <li><a class="collapsible-header waves-effect arrow-r"><i class="far fa-hand-pointer"></i> Category page<i class="fas fa-angle-down rotate-icon"></i></a>
                <div class="collapsible-body">
                    <ul>
                        <li><a href=" category-v1.html" class="waves-effect">Category V.1</a>
                        </li>
                        <li><a href=" category-v2.html" class="waves-effect">Category V.2</a>
                        </li>
                        <li><a href=" category-v3.html" class="waves-effect">Category V.3</a>
                        </li>
                        <li><a href=" category-v4.html" class="waves-effect">Category V.4</a>
                        </li>
                    </ul>
                </div>
            </li>


            <li><a href="{{ route('admin.dashboard') }}" class="collapsible-header waves-effect"><i class="fas fa-envelope"></i>My Admin</a></li>
            <li><a href="{{ route('products') }}" class="collapsible-header waves-effect"><i class="fas fa-envelope"></i>All Products</a></li>
            <li><a href="{{ route('contact') }}" class="collapsible-header waves-effect"><i class="fas fa-envelope"></i> Contact</a></li>

        </ul>
    </li>
    <!--/. Side navigation links -->
    <div class="sidenav-bg mask-strong"></div>
</ul>
<!--/. Sidebar navigation -->