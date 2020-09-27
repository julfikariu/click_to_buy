@extends('frontend.layout.master')
@section('content')

    <style>
        .cart_summary_item th, .cart_summary_item td {
            padding: 8px 5px !important;
        }

        .summary_total li {
            color: #1a1c1d !important;
            padding: 8px 5px;
        }

        .summary_total li span, .summary_total li em {
            font-size: 14px;
        }
    </style>

    <!-- Main Container -->
    <div class="container mb-4 mt-4 ">

        <div class="row">
            <div class="col-md-8">
                <!-- Section cart -->
                <section class="section">

                    <div class="card card-ecommerce">
                        <div class="card-body">

                            <!-- Shopping Cart table -->
                            <div class="table-responsive">

                                <table class="table product-table">

                                    <!-- Table head -->
                                    <thead class="mdb-color lighten-5">
                                    <tr>
                                        <th></th>
                                        <th class="font-weight-bold">
                                            <strong>Product Title</strong>
                                        </th>
                                        <th class="font-weight-bold">
                                            <strong>Product Image</strong>
                                        </th>
                                        <th></th>
                                        <th class="font-weight-bold">
                                            <strong>Quantity</strong>
                                        </th>
                                        <th class="font-weight-bold">
                                            <strong>Unit Price</strong>
                                        </th>

                                        <th></th>
                                    </tr>
                                    </thead>
                                    <!-- /.Table head -->

                                    <!-- Table body -->
                                    <tbody>

                                    @foreach( App\Models\Cart::totalCarts() as $cart)
                                        <!-- First row -->
                                        <tr>
                                            <th></th>
                                            <td>
                                                <h6 class="text-capitalize">
                                                    <a href="{{ route('product.show',$cart->product->slug) }}"
                                                       class="text-info"><strong> {{ $cart->product->title }}</strong></a>
                                                </h6>
                                                <p class="text-muted"> {{ $cart->product->brand->name }}</p>
                                            </td>
                                            <td>
                                                @if($cart->product->images->count() > 0)
                                                    <img src="{{ asset('images/products/'. $cart->product->images->first()->image) }}"
                                                         alt="" class="img-fluid z-depth-0 mx-auto" width="60"
                                                         height="60">
                                                @endif
                                            </td>
                                            <td></td>

                                            <td class="text-center text-md-left">
                                                <span class="qty"> {{ $cart->product_quantity }} </span>
                                                {{--<div class="btn-group radio-group ml-2" data-toggle="buttons">
                                                    <label class="btn btn-sm btn-primary btn-rounded">
                                                        <input type="radio" name="options" id="option1">&mdash;
                                                    </label>
                                                    <label class="btn btn-sm btn-primary btn-rounded">
                                                        <input type="radio" name="options" id="option2">+
                                                    </label>
                                                </div>--}}
                                            </td>
                                            <td class="font-weight-bold grey-text">
                                                <strong>{{ $cart->product->price }} ৳</strong>
                                            </td>

                                            <td class="font-weight-bold">
                                                <form id="cartdelete" action="{{route('cart.delete',$cart->id)}}"
                                                      method="post">
                                                    @csrf
                                                    <button type="submit" class="btn btn-sm btn-primary"
                                                            data-toggle="tooltip" data-placement="top"
                                                            title="Remove item">X
                                                    </button>
                                                </form>
                                            </td>

                                        </tr>
                                        <!-- /.First row -->
                                    @endforeach


                                    </tbody>
                                    <!-- /.Table body -->

                                </table>
                            </div>
                            <!-- /.Shopping Cart table -->

                        </div>

                    </div>

                </section>
                <!-- /Section cart -->
            </div>
            <div class="col-md-4">
                <!-- Section: Checkout Summary -->
                <section class="section">
                    <div class="card">
                        <div class="card-header  d-flex justify-content-between" style="background-color: #e9ecef">
                            <h5>Order Summary</h5>
                            <h5 class="badge badge-info">{{ App\Models\Cart::totalItems() }} Items</h5>
                        </div>
                        <div class="card-body">
                            <table class="table ">
                                <thead>
                                <tr class="cart_summary_item">
                                    <th class="product-name">Product</th>
                                    <th class="product-total text-right">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                @php
                                    $total_price =0;
                                @endphp

                                @foreach( App\Models\Cart::totalCarts() as $cart)
                                    @php
                                        $total_price += $cart->product->price*$cart->product_quantity;
                                    @endphp
                                    <tr class="cart_summary_item">
                                        <td class="product-name">
                                            {{ $cart->product->title }}
                                            <strong class="product-quantity">× {{ $cart->product_quantity }}</strong>
                                        </td>
                                        <td class="product-total text-right">
                                            <span class="pl-4">{{ $cart->product->price*$cart->product_quantity }}
                                                ৳</span>
                                        </td>
                                    </tr>

                                @endforeach
                                </tbody>
                            </table>

                            <ul class="list-group list-group-flush summary_total pt-3">
                                <li class="list-group-item d-flex justify-content-between border-0">
                                    <span class="text-uppercase text-muted ">Subtotal</span>
                                    <em class="">{{ $total_price }} ৳</em>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span class="text-uppercase text-muted">Shipping Charge</span>
                                    <em class=""> {{ App\Models\Setting::first()->shipping_cost }} ৳</em>
                                </li>

                            </ul>
                            <div class="card-footer d-flex justify-content-between px-2 ">
                                <h6>Total Amount =</h6>
                                <h5>{{ $total_price + App\Models\Setting::first()->shipping_cost }} ৳</h5>
                            </div>
                        </div>

                    </div>
                </section>
                <!-- Section: Categories -->
            </div>
        </div>

        <section class="mt-3 pt-3">
            <div class="row">
                <div class="col-md-7 ">
                    <div class="card">
                        <div class="card-header mdb-color text-warning">
                            <h3>Shipping Information</h3>
                        </div>
                        <div class="card-body">
                            <!-- Form -->
                            <form class="text-center" method="post" action="{{ route('checkout.store') }}">
                                @csrf

                                <div class="form-row">
                                    <div class="col">
                                        <!-- First name -->
                                        <div class="md-form">
                                            <label for="name">Name</label>
                                            <input id="name" type="text"
                                                   class="form-control @error('name') is-invalid @enderror" name="name"
                                                   value="{{ Auth::check() ? Auth::user()->first_name.' '.Auth::user()->last_name :'' }}" required
                                                   autocomplete="name">

                                            @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>

                                <!-- E-mail -->
                                <div class="md-form">
                                    <label for="email">E-mail</label>
                                    <input id="email" type="email"
                                           class="form-control @error('email') is-invalid @enderror"
                                           name="email" value="{{ Auth::check() ? Auth::user()->email :'' }}"
                                           required
                                           autocomplete="email">

                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>


                                <!-- Phone number -->
                                <div class="md-form">
                                    <input type="text" id="materialRegisterFormPhone" class="form-control"
                                           value="{{ Auth::check() ? Auth::user()->phone_no:'' }}" name="phone_no"
                                           aria-describedby="materialRegisterFormPhoneHelpBlock">
                                    <label for="materialRegisterFormPhone">Phone number</label>
                                </div>

                                <!-- Shipping Address -->
                                <div class="md-form">
                                    <label for="form-contact-message" class="">Your shipping address</label>
                                    <textarea type="text" id="form-contact-message" name="shipping_address"
                                              class="form-control md-textarea" rows="2">
                                        {!!  Auth::check() ? Auth::user()->shipping_address == null ? 'You have no shipping_address' : Auth::user()->shipping_address : '' !!}
                                    </textarea>

                                </div>


                                <!-- Customer Message -->
                                <div class="row">

                                    <!-- Grid column -->
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <textarea type="text" id="form-contact-message" name="message" class="form-control md-textarea" rows="2"></textarea>
                                            <label for="form-contact-message" class="">Your message (If any)</label>
                                        </div>
                                    </div>
                                    <!-- Grid column -->

                                </div>

                                <div class="md-form">
                                    <div class="form-group">
                                        <!-- Division Name -->
                                        <div class="form-group ">
                                            <select class="mdb-select md-form" name="payment_method_id" id="payments">
                                                <option value="" disabled selected>Choose your Payment Option</option>
                                                @foreach($payments as $payment)
                                                    <option value="{!! $payment->short_name !!}"> {{ $payment->name }}</option>
                                                @endforeach
                                            </select>

                                            @foreach($payments as $payment)

                                                @if($payment->short_name == 'cash_in')
                                                    <div id="payment_{{ $payment->short_name }}" class="hidden">

                                                        <h3>For cash on delivery there is nothing necessary. Just
                                                            click on Order Now</h3>
                                                        <br>
                                                        <small>You will get your product in two or three business
                                                            days.
                                                        </small>
                                                    </div>

                                                @else
                                                    <div id="payment_{{ $payment->short_name }}" class="hidden">
                                                        <h3>{{ $payment->name }} Payment</h3>
                                                        <p>
                                                            <strong>{{  $payment->name }} No
                                                                : {{  $payment->no }}</strong>
                                                            <br>
                                                            <strong>Account Type : {{  $payment->type }}</strong>
                                                        </p>
                                                        <div class="alert alert-info">
                                                            please send the above money to this Bikash no and write
                                                            your Transaction ID below there.
                                                        </div>

                                                    </div>
                                                @endif

                                            @endforeach

                                            <div class="md-form hidden" id="transaction_id">
                                                <label for="name">Transaction Id</label>
                                                <input type="text" class="form-control" name="transaction_id">
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <button class="btn btn-info btn-rounded btn-block my-4 waves-effect" type="submit">
                                    Order Now
                                </button>

                            </form>
                            <!-- Form -->
                        </div>
                    </div>

            </div>
                <div class="col-md-5">

                </div>

            </div>
        </section>


    </div>
    <!-- /.Main Container -->


@endsection

@section('scripts')
    <script>
        $('#payments').change(function () {
            $payment_method = $('#payments').val();
            
            if ($payment_method == 'cash_in') {
                $('#payment_cash_in').removeClass('hidden');
                $('#payment_bkash').addClass('hidden');
                $('#payment_rocket').addClass('hidden');
                
            }else if ($payment_method == 'bkash') {
                $('#payment_bkash').removeClass('hidden');
                $('#payment_rocket').addClass('hidden');
                $('#payment_cash_in').addClass('hidden');
                $('#transaction_id').removeClass('hidden');

            }else if ($payment_method== 'rocket'){
                $('#payment_rocket').removeClass('hidden');
                $('#payment_bkash').addClass('hidden');
                $('#payment_cash_in').addClass('hidden');
                $('#transaction_id').removeClass('hidden');
            }
        })
    </script>

@endsection