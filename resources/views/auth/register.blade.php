@extends('frontend.layout.master')

@section('content')
<div class="container pt-3 mt-2">
    <div class="row justify-content-center">
        <div class="col-md-8">

            <!-- Material form register -->
            <div class="card my-4 ">

                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Sign up</strong>
                </h5>

                <!--Card content-->
                <div class="card-body px-lg-5 pt-0">

                    <!-- Form -->
                    <form class="text-center"  method="post" action="{{ route('register') }}">
                        @csrf

                        <div class="form-row">
                            <div class="col">
                                <!-- First name -->
                                <div class="md-form">
                                    <label for="name">First name</label>
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="first_name" value="{{ old('name') }}" required autocomplete="name" >

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
                                    <input type="text" id="materialRegisterFormLastName" name="last_name" class="form-control">
                                    <label for="materialRegisterFormLastName">Last name</label>
                                </div>
                            </div>
                        </div>

                        <!-- E-mail -->
                        <div class="md-form mt-0">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>

                        <!-- Street_address -->
                        <div class="md-form mt-0">
                            <label for="email">Street Address</label>
                            <input id="name" type="text" class="form-control @error('street_address') is-invalid @enderror" name="street_address" value="{{ old('street_address') }}" required autocomplete="street_address" >

                            @error('street_address')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                        <!-- Division Name -->
                        <div class="form-group">
                            <select class="mdb-select md-form" name="division_id" id="division_id">
                                <option value="" disabled selected>Choose your Division</option>
                                @foreach($divisions as $division)
                                    <option value="{!! $division->id !!}">{!! $division->name !!}</option>
                                @endforeach
                            </select>
                        </div>


                        <!-- District Name -->
                        <div class="form-group">
                            <select class="mdb-select md-form " name="district_id" id="districts_area">
                                <option value="" disabled selected>Choose your District</option>

                            </select>
                        </div>

                        
                        <!-- Password -->
                        <div class="md-form">
                            <label for="password">Password</label>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                            <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                            </small>
                        </div>

                        <!-- Password Conforrmation -->
                        <div class="md-form">
                            <label for="password-confirm">Confirm Password</label>
                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                        </div>

                        <!-- Phone number -->
                        <div class="md-form">
                            <input type="text" id="materialRegisterFormPhone" class="form-control" name="phone_no" aria-describedby="materialRegisterFormPhoneHelpBlock">
                            <label for="materialRegisterFormPhone">Phone number</label>
                            <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                                Optional - for two step authentication
                            </small>
                        </div>

                        <!-- Newsletter -->
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter">
                            <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                        </div>

                        <!-- Sign up button -->
                        <button class="btn btn-success btn-rounded btn-block my-4 waves-effect " type="submit">Sign Up Now</button>

                        <!-- Social register -->
                        <p>or sign up with:</p>

                        <a type="button" class="btn-floating btn-fb btn-sm">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a type="button" class="btn-floating btn-tw btn-sm">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a type="button" class="btn-floating btn-li btn-sm">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a type="button" class="btn-floating btn-git btn-sm">
                            <i class="fab fa-github"></i>
                        </a>

                        <hr>

                        <!-- Terms of service -->
                        <p>By clicking
                            <em>Sign up</em> you agree to our
                            <a href="" target="_blank">terms of service</a>

                    </form>
                    <!-- Form -->

                </div>

            </div>
            <!-- Material form register -->




        </div>
    </div>
</div>
@endsection

@section('scripts')

    <script>
        $("#division_id").change(function () {
            var division = $("#division_id").val();
            // send an ajax request to  server with this division
            var option ="";

            $.get('http://localhost/click_to_buy/public/get-districts/'+division,function (data) {

                data.forEach(function (districts) {
                    option += "<option  value='"+districts.id+"'>" +districts.name + "</option>";
                });

                $("#districts_area").html(option);
            })

        });


    </script>

@endsection
