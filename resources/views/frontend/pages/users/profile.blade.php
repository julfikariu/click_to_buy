@extends('frontend.pages.users.master')





@section('sub-content')

    <div class="card ">
        <div class="card-header bg-fuchsia"><h4 class="d-block text-center text-white">Edit Your Profile</h4></div>
        <div class="card-body">
            <!-- Edit Form -->
            <!-- Form -->
            <form class="text-center" method="post" action="{{ route('user.profile.update') }}">

                @csrf
                <div class="form-row">
                    <div class="col">
                        <!-- First name -->
                        <div class="md-form">
                            <label for="name">First name</label>
                            <input id="name" type="text" class="form-control @error('name') is-invalid @enderror"
                                   name="first_name" value="{{ $user->first_name }}" required autocomplete="name">

                            @error('name')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="col">
                        <!-- Last name -->
                        <div class="md-form">
                            <input type="text" id="materialRegisterFormLastName" name="last_name"
                                   value="{{ $user->last_name }}" class="form-control">
                            <label for="materialRegisterFormLastName">Last name</label>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <!-- User name -->
                        <div class="md-form mt-0">
                            <label for="username">Username</label>
                            <input id="username" type="text"
                                   class="form-control @error('username') is-invalid @enderror"
                                   name="username" value="{{ $user->username }}">

                            @error('email')
                            <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                            @enderror
                        </div>
                    </div>

                    <div class="col">
                        <!-- E-mail -->
                        <div class="md-form mt-0">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                                   name="email" value="{{ $user->email }}" required autocomplete="email">

                            @error('email')
                            <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                            @enderror
                        </div>
                    </div>
                </div>


                <!-- Street_address -->
                <div class="md-form mt-0">
                    <label for="email">Street Address</label>
                    <input id="name" type="text" class="form-control @error('street_address') is-invalid @enderror"
                           name="street_address" value="{{ $user->street_address }}" required
                           autocomplete="street_address">

                    @error('street_address')
                    <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-row">
                    <div class="col">
                        <!-- Division Name -->
                        <div class="form-group">
                            <select class="mdb-select md-form" name="division_id">
                                <option value="" disabled selected>Choose your Division</option>
                                @foreach($divisions as $division)
                                    <option value="{!! $division->id !!}" {!! $user->division_id ==  $division->id? 'selected':'' !!}>{!! $division->name !!}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="col">
                        <!-- District Name -->
                        <div class="form-group">
                            <select class="mdb-select md-form " name="district_id">
                                <option value="" disabled selected>Choose your District</option>
                                @foreach($districts as $district)
                                    <option value="{!! $district->id !!}" {!! $user->district_id ==  $district->id ? 'selected':'' !!}>{!! $district->name !!}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>


                <!-- Password -->
                <div class="md-form">
                    <label for="password">New Password</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                           name="password">

                    @error('password')
                    <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                    @enderror
                    <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                    </small>
                </div>


                <!-- Phone number -->
                <div class="md-form">
                    <input type="text" id="materialRegisterFormPhone" class="form-control"
                           value="{{ $user->phone_no }}" name="phone_no"
                           aria-describedby="materialRegisterFormPhoneHelpBlock">
                    <label for="materialRegisterFormPhone">Phone number</label>
                    <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                        Optional - for two step authentication
                    </small>
                </div>
                <!-- Shipping Address -->
                <div class="md-form">
                    <textarea type="text" id="form-contact-message" name="shipping_address" class="form-control md-textarea" rows="3">
                        {!! $user->shipping_address == null ?'You have no shipping_address':$user->shipping_address !!}
                    </textarea>
                    <label for="form-contact-message" class="">Your shipping address</label>

                </div>

                <button class="btn btn-info btn-rounded btn-block my-4 waves-effect " type="submit">Updated Now</button>

            </form>
            <!-- Form -->

            <!-- Edit Form -->
        </div>

    </div>
@endsection