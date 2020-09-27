@if ($errors->any())

    <div class="alert alert-warning alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h5><i class="icon fas fa-exclamation-triangle"></i> Warning!</h5>
        <ul>
            @foreach ($errors->all() as $error)
                <p>{{ $error }}</p>
            @endforeach
        </ul>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
   {{-- <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <ul>
            @foreach ($errors->all() as $error)
                <p>{{ $error }}</p>
            @endforeach
        </ul>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>--}}

@endif

@if(Session::has('mistake'))
    <div class="alert alert-danger" id="success-alert">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <strong>{{ Session::get('mistake') }} </strong>
    </div>
@endif

@if(Session::has('sticky_error'))
    <div class="alert alert-danger">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <strong>{{ Session::get('sticky_error') }} </strong>

    </div>
@endif

@if(Session::has('success'))
    <div class="alert alert-success" id="success-alert">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <strong>{{ Session::get('success') }} </strong>

    </div>
@endif

