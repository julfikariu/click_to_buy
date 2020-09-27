<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('css/fontawesome.css') }}">

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Click To Buy Material Design Bootstrap -->
    <link href="{{ asset('css/myecommerce.css') }}" rel="stylesheet">

    <style>
        .md-form .prefix {
            top: .86rem;
            left: 0;
        }
    </style>
</head>
<body>




<div class="container mt-4 py-3">
        @include('frontend.partials.messages')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>{{ __('Admin Reset Password') }}</strong>
                </h5>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('admin.password.email') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Send Password Reset Link') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- SCRIPTS -->

<!-- JQuery -->
<script type="text/javascript" src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>

<!-- Bootstrap tooltips -->
<script type="text/javascript" src="{{ asset('js/popper.min.js') }}"></script>

<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="{{ asset('js/bootstrap.min.js') }}"></script>

<!-- MDB core JavaScript -->
<script type="text/javascript" src="{{ asset('js/clicktobuy.js') }}"></script>



</body>
</html>