<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Click To Buy Online Shopping</title>
    <link rel="stylesheet" href="{{ asset('admin/dist/css/adminlte.min.css') }}">
</head>
<body>

</body>
</html>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="card ">
                        <a class="btn btn-sm btn-secondary float-right mr-1 d-print-none" href="#" onclick="javascript:window.print();" data-abc="true">
                            <i class="fa fa-print"></i> Print</a>
                        <div class="card-header ">
                            <h3 class="card-title w-100 text-center font-weight-bold">Your Invoice : #CLB{{ $order->id }}</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 border-right offset-1">
                                    <h4 class="mb-3">From:</h4>
                                    <div>
                                        <strong>www.clicktobuy.com</strong>
                                    </div>
                                    <div>122, Shaeed Ziaur Rahman Hall</div>
                                    <div>Islamic University, Kushtia</div>
                                    <div>Email: admin@clicktobuy.com</div>
                                    <div>Phone: +88 01947 642282</div>
                                </div>

                                <div class="col-md-4 border-right">
                                    <div class="pl-3">
                                        <h4 class="mb-3">To :</h4>
                                        <p class="m-0"><strong> Name : </strong> {{ $order->name }}</p>
                                        <p class="m-0"><strong> Phone : </strong> {{ $order->phone_no }}</p>
                                        <p class="m-0"><strong> Email : </strong> {{ $order->email }}</p>
                                        <p class="m-0"><strong>Shipping Address : </strong> {{ $order->shipping_address }}</p>


                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <p class="m-0"><strong>
                                            @if($order->is_paid)
                                                <span class="btn btn-success">Already Paid</span>
                                            @else
                                                <span class="">Not Paid</span>
                                            @endif
                                        </strong>
                                    </p>
                                    <p>
                                        {{ $order->updated_at }}
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class=" ">

                                        <div class="card-body mt-2">

                                        @if($order->carts->count() > 0)

                                            <!-- Shopping Cart table -->
                                                <div class="table-responsive">

                                                    <table class="table product-table">

                                                        <!-- Table head -->
                                                        <thead class="mdb-color lighten-5">
                                                        <tr>
                                                            <th></th>
                                                            <th class="font-weight-bold">
                                                                <strong>No.</strong>
                                                            </th>
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
                                                            <th class="font-weight-bold">
                                                                <strong>Sub total Price</strong>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <!-- /.Table head -->

                                                        <!-- Table body -->
                                                        <tbody>
                                                        @php
                                                            $total_price =0;
                                                        @endphp
                                                        @foreach( $order->carts as $cart)
                                                            <!-- First row -->
                                                            <tr>
                                                                <th></th>
                                                                <th scope="row">
                                                                    {{ $loop->index +1 }}
                                                                </th>
                                                                <td>
                                                                    <h6 class="text-capitalize">
                                                                        <a href="{{ route('product.show',$cart->product->slug ) }}" class="text-info"><strong> {{ $cart->product->title }}</strong></a>
                                                                    </h6>
                                                                    <p class="text-muted"> {{ $cart->product->brand->name }}</p>
                                                                </td>
                                                                <td>
                                                                    @if($cart->product->images->count() > 0)
                                                                        <img src="{{ asset('images/products/'. $cart->product->images->first()->image) }}" alt="" class="img-fluid z-depth-0 mx-auto" width="60" height="60">
                                                                    @endif
                                                                </td>
                                                                <td></td>

                                                                <td class="text-center text-md-left">
                                                                    <span class="qty"> {{ $cart->product_quantity }} </span>

                                                                </td>
                                                                <td class="font-weight-bold grey-text">
                                                                    <strong>{{ $cart->product->price }} ৳</strong>
                                                                </td>
                                                                <td class="font-weight-bold">
                                                                    @php
                                                                        $total_price += $cart->product->price*$cart->product_quantity;
                                                                    @endphp
                                                                    <strong class="text-warning">{{ $cart->product->price*$cart->product_quantity }} ৳</strong>
                                                                </td>

                                                            </tr>
                                                            <!-- /.First row -->
                                                        @endforeach

                                                        @php
                                                            $newprice= $total_price - $order->custom_discount ;
                                                            $total_price = $newprice + $order->shipping_charge ;
                                                        @endphp


                                                        </tbody>
                                                        <!-- /.Table body -->

                                                    </table>


                                                </div>
                                                <!-- /.Shopping Cart table -->


                                                <div class="row">
                                                    <div class="col-lg-4 col-sm-5"></div>
                                                    <div class="col-lg-6 col-sm-5 ml-auto">
                                                        <table class="table table-clear">
                                                            <tbody>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Subtotal</strong>
                                                                </td>
                                                                <td class="right text-primary">{{ $total_price }} ৳</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Shipping Charge</strong>
                                                                </td>
                                                                <td class="right text-warning">+ {{ $order->shipping_charge }} ৳</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Discount (20%)</strong>
                                                                </td>
                                                                <td class="right text-success ">- {{ $order->custom_discount }} ৳</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Total</strong>
                                                                </td>
                                                                <td class="right text-info">
                                                                    <strong> {{ $total_price }} ৳</strong>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>

                                        @endif

                                        </div>

                                        <!-- /.card footer -->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>

