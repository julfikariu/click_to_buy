<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    {{--<link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'>--}}
    <link rel="stylesheet" href="{{ asset('admin/dist/css/adminlte.min.css') }}">
</head>
<body>
<div class="container-fluid">
    <div id="ui-view" data-select2-id="ui-view">
        <div>
            <div class="card">
                <div class="card-header">Invoice
                    <strong>#CLB{{ $order->id }}</strong>
                    <a class="btn btn-sm btn-secondary float-right mr-1 d-print-none" href="#" onclick="javascript:window.print();" data-abc="true">
                        <i class="fa fa-print"></i> Print</a>

                </div>
                <div class="card-body">
                    <div class="row mb-4">
                        <div class="col-sm-4 offset-1">
                            <h6 class="mb-3">From:</h6>
                            <div>
                                <strong>www.clicktobuy.com</strong>
                            </div>
                            <div>122, Shaeed Ziaur Rahman Hall</div>
                            <div>Islamic University, Kushtia</div>
                            <div>Email: admin@clicktobuy.com</div>
                            <div>Phone: +88 01947 642282</div>
                        </div>
                        <div class="col-sm-4">
                            <h6 class="mb-3">To:</h6>
                            <div>
                                <span>{{ $order->name }}</span>
                            </div>
                            <div>{{ $order->shipping_address }}</div>
                            <div>Email: {{ $order->email }}</div>
                            <div>Phone: {{ $order->phone_no }}</div>
                        </div>
                        <div class="col-sm-3">
                            <h6 class="mb-3">Details:</h6>
                            <div>Invoice
                                <strong> : #CLB{{ $order->id }}</strong>
                            </div>
                            <div> {{ $order->updated_at }}</div>

                            <div>
                                <strong>
                                    @if($order->is_paid)
                                        <span class="btn btn-success">Already Paid</span>
                                    @else
                                        <span class="">Not Paid</span>
                                    @endif
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-10 offset-1">
                    <div class="table-responsive-sm">
                        @if($order->carts->count() > 0)
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th class="center">#</th>
                                <th>Item</th>
                                <th class="center">Quantity</th>
                                <th class="right">Unit Cost</th>
                                <th class="right text-center">Sub Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $total_price =0;
                            @endphp
                            @foreach( $order->carts as $cart)

                                @php
                                    $total_price += $cart->product->price*$cart->product_quantity;
                                @endphp
                            <tr>
                                <td class="center">{{ $loop->index+1 }}</td>
                                <td class="left text-capitalize">{{ $cart->product->slug }}</td>
                                <td class="center">{{ $cart->product_quantity }}</td>
                                <td class="right">{{ $cart->product->price }}</td>
                                <td class="right text-center">{{ $cart->product->price*$cart->product_quantity }} ৳</td>
                            </tr>

                            @endforeach

                            </tbody>
                        </table>
                        @endif
                    </div>
                </div>
                        <div class="col-md-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-5 offset-1" >
                            <p></p>
                            <h4 class="text-info mt-3">Thanks for business with us.</h4>
                        </div>
                        <div class="col-lg-5 col-sm-5 ml-auto">
                            <table class="table ">
                                <tbody>
                                <tr>
                                    <td class="left">
                                        <strong>Subtotal</strong>
                                    </td>
                                    <td class="right text-primary text-center">{{ $total_price }} ৳</td>
                                </tr>
                                <tr>
                                    <td class="left">
                                        <strong>Shipping Charge</strong>
                                    </td>
                                    <td class="right text-warning text-center">+ {{ $order->shipping_charge }}  ৳</td>
                                </tr>
                                <tr>
                                    <td class="left">
                                        <strong>Discount (20%)</strong>
                                    </td>
                                    <td class="right text-success text-center">- {{ $order->custom_discount }} ৳</td>
                                </tr>

                                <tr>
                                    <td class="left">
                                        <strong>Total </strong>
                                    </td>
                                    <td class="right text-info text-center">
                                        <strong> {{ $total_price }} ৳</strong>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="col-lg-1 col-sm-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>