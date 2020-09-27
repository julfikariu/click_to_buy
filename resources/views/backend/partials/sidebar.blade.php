<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-navy elevation-4 ">
    <!-- Brand Logo -->
    <a href="{!! route('home') !!}" class="brand-link">
        <img src="{{ asset('admin/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">Click To Buy</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{ asset('admin/dist/img/user2-160x160.jpg') }}" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">Md. Julfikar Ali</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                           Manage Products
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.products') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Products</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.product.create') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>Add Product</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-luggage-cart"></i>
                        <p>
                            Manage Orders
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.orders') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Orders</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-baby-carriage"></i>
                        <p>
                           Manage Categories
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.categories') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Categories</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.category.create') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>Add Category</p>
                            </a>
                        </li>
                    </ul>
                </li>


                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-band-aid"></i>
                        <p>
                            Manage Brands
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.brands') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Brands</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.brand.create') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>Add Brands</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-band-aid"></i>
                        <p>
                            Manage Divisions
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.divisions') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Divisions</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.division.create') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>Add Divisions</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-band-aid"></i>
                        <p>
                            Manage Districts
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview ">
                        <li class="nav-item">
                            <a href="{{ route('admin.districts') }}" class="nav-link {{ Route::currentRouteName() ? 'active':'' }}">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Districts</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.district.create') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>Add District</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a href="{{ route('admin.product.create') }}" class="nav-link">
                        <i class="nav-icon fas fa-calendar-times"></i>
                        <p>
                           Band
                        </p>
                    </a>
                </li>


                <li class="nav-item has-treeview ">
                    <a href="#" class="nav-link ">
                        <i class="nav-icon fas fa-luggage-cart"></i>
                        <p>
                            Header Sliders
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.sliders') }}" class="nav-link">
                                <i class="fas fa-caret-right nav-icon"></i>
                                <p>All Sliders</p>
                            </a>
                        </li>
                    </ul>
                </li>

                {{--for logout button--}}
                <li class="nav-item">

                        <form  method="post" action="{{ route('admin.logout') }}" class="form-inline">
                            @csrf
                            <i class="nav-icon fas fa-angle-left"></i>
                            <input type="submit" value="Logout Now" class="btn btn-primary"/>
                        </form>

                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
