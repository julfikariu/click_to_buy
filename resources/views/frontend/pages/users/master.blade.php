@extends('frontend.layout.master')

@section('content')
    <!--Main Layout-->
    <main>
        <div class="container-fluid mb-4">

            <!-- Section: Edit Account -->
            <section class="section">
                <!-- First row -->
                <div class="row">

                    <!-- First column -->
                    <div class="col-md-4 mb-md-0 mb-5">

                        <!-- Card -->
                        <div class="card ">

                            <!-- Avatar -->
                            <div class="avatar z-depth-1-half mb-4 d-block mx-auto">

                                <img src=" {{ App\Helpers\ImageHelper::getUserImage( Auth::user()->id) }} " alt="" class="img-fluid rounded-circle" >

                            </div>

                            <div class="card-body pt-0 mt-0">
                                <!-- Name -->
                                <div class="text-center">
                                    <h3 class="mb-3 font-weight-bold text-capitalize"><strong>{{ $user->first_name.' '.$user->last_name }}</strong></h3>
                                    <h6 class="font-weight-bold blue-text mb-4">Verified</h6>
                                </div>

                                <ul class="striped list-unstyled">
                                    <li><strong>Username:</strong> {{ $user->username }}</li>
                                    <hr class="my-1">
                                    <li><strong>E-mail address:</strong> {{ $user->email }}</li>
                                    <hr class="my-1">
                                    <li><strong>Phone number:</strong> {{ $user->phone_no }}</li>
                                    <hr class="my-1">
                                    <li><strong>Division Name:</strong>
                                        @foreach($divisions as $division)
                                            {!! $user->division_id ==  $division->id? $division->name:'' !!}
                                        @endforeach</li>
                                    <hr class="my-1">
                                    <li><strong>District Name:</strong>
                                        @foreach($districts as $district)
                                            {!! $user->district_id ==  $district->id? $district->name:'' !!}
                                        @endforeach</li>
                                    <hr class="my-1">
                                    <li><strong>Street Address:</strong>  {{ $user->street_address }}</li>
                                    <hr class="my-1">
                                    <li><strong>Shipping Address:</strong>  {{ $user->shipping_address==null?'No Address':$user->shipping_address }}</li>
                                    <hr class="my-1">
                                </ul>

                            </div>

                            <div class="card-footer">
                                <a href="{{ route('user.profile') }}" class="btn btn-cyan btn-rounded waves-effect waves-light mb-3 d-block"> Edit Profile</a>
                            </div>

                        </div>
                        <!-- Card -->

                    </div>
                    <!-- First column -->

                    <!-- Second column -->
                    <div class="col-md-8">

                        <div class="row">
                            <div class="col-md-12 mb-1">

                                 @yield('sub-content')
                            </div>
                        </div>

                    </div>
                    <!-- Second column -->

                </div>

            </section>
            <!-- Section: Edit Account -->

        </div>

    </main>
@endsection