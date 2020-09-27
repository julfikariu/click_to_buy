@extends('frontend.layout.master')

@section('content')
    <style>
        .md-form .prefix {
            top: .86rem;
            left: 0;
        }
    </style>
<div class="container mt-2">
    <div class="row justify-content-center">
        <div class="col-md-8">

            <!-- Material form login -->
            <div class="card mb-4">

                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Sign in</strong>
                </h5>

                <!--Card content-->
                <div class="card-body px-lg-5 pt-0 ">

                    <!-- Form -->
                    <form method="post" class="text-center" action="{{ route('login') }}">
                        @csrf

                        <div class="md-form">
                            <i class="fas fa-envelope prefix text-info "></i>
                            <label for="email" class="">Your Email</label>

                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"  autocomplete="email">
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror

                        </div>

                        <div class="md-form">
                            <i class="fas fa-passport prefix text-info"></i>
                            <label for="password" class="">Your Password</label>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password"  autocomplete="current-password">
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>



                        <div class="d-flex justify-content-around">
                            <div>
                                <!-- Remember me -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                            <div>
                                <!-- Forgot password -->
                                @if (Route::has('password.request'))
                                    <a class="" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>

                        <!-- Sign in button -->
                        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

                        <!-- Register -->
                        <p>Not a member?
                            <a href="{!! route('register') !!}">Register</a>
                        </p>

                        <!-- Social login -->
                        <p>or sign in with:</p>
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

                    </form>
                    <!-- Form -->

                </div>

            </div>
            <!-- Material form login -->

        </div>

    </div>
</div>
@endsection
