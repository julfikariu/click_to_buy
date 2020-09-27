@extends('backend.layout.master')


@section('admin_content')

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    @include('backend.partials.messages')

                    <div class="card card-navy">
                        <div class="card-header ">
                            <h3 class="card-title w-100 text-center">View Order #CLB{{ $order->id }}</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <h3>Order Informations</h3>
                            <div class="row">
                                <div class="col-md-6 border-right">
                                    <p><strong>Orderer Name : </strong> {{ $order->name }}</p>
                                    <p><strong>Orderer Phone : </strong> {{ $order->phone_no }}</p>
                                    <p><strong>Orderer Email : </strong> {{ $order->email }}</p>
                                    <p><strong>Shipping Address : </strong> {{ $order->shipping_address }}</p>
                                </div>

                                <div class="col-md-6 ">
                                   <div class="pl-3">
                                       <p><strong>Payment Method : </strong> {{ $order->payment->name }}</p>
                                       <p><strong>Transaction ID : </strong> {{ $order->transaction_id }}</p>
                                       <p><strong>
                                               @if($order->is_paid)
                                                   <span class="badge badge-success">Already Paid</span>
                                               @else
                                                   <span class="badge badge-warning">Not Paid</span>
                                               @endif
                                           </strong>
                                       </p>
                                   </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card mt-2">
                                        <div class="card-header bg-info">
                                            <h4 class="card-title">Ordered Items</h4>
                                        </div>
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
                                                            <th></th>
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
                                                                    {{--<span class="qty"> {{ $cart->product_quantity }} </span>--}}
                                                                    <form action="{{ route('cart.update',$cart->id) }}" method="post">
                                                                        @csrf
                                                                        <input type="number" value="{{ $cart->product_quantity }}" min="1" name="product_quantity" style="width: 80px">
                                                                        <button type="submit" class="btn-success btn-sm ml-1">Update</button>
                                                                    </form>
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
                                                                    @php
                                                                        $total_price += $cart->product->price*$cart->product_quantity;
                                                                    @endphp
                                                                    <strong class="text-warning">{{ $cart->product->price*$cart->product_quantity }} ৳</strong>
                                                                </td>
                                                                <td>
                                                                    <form id="cartdelete" action="{{route('cart.delete',$cart->id)}}" method="post" >
                                                                        @csrf
                                                                        <button type="submit"  class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item">X
                                                                        </button>
                                                                    </form>


                                                                </td>
                                                            </tr>
                                                            <!-- /.First row -->
                                                        @endforeach



                                                        <tr class="" >
                                                            <td colspan="4"></td>

                                                            <td colspan="5">
                                                                <form action="{{ route('admin.order.charge', $order->id) }}" method="post">
                                                                    @csrf
                                                                <label for="shipping_charge">shipping_charge</label>
                                                                <input type="number" value="{{ $order->shipping_charge }}"  name="shipping_charge" style="width: 80px">

                                                                <label for="custom_discount">custom_discount</label>
                                                                <input type="number" value="{{ $order->custom_discount }}"  name="custom_discount" style="width: 80px">

                                                                    <input type="submit" class=" btn btn-sm btn-success" value="Update Charge">
                                                                </form>
                                                            </td>

                                                        </tr>

                                                        </tbody>
                                                        <!-- /.Table body -->

                                                    </table>

                                                    <table class="table ">
                                                        <tbody>
                                                        <tr>
                                                            <td class="left">
                                                                <strong>Subtotal</strong>
                                                            </td>
                                                            <td class="right text-primary text-center">{{ $total_price }} ৳</td>
                                                        </tr>
                                                        @php
                                                            $newprice= $total_price - $order->custom_discount ;
                                                            $total_price = $newprice + $order->shipping_charge ;
                                                        @endphp
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
                                                                <strong>Give Total Amount </strong>
                                                            </td>
                                                            <td class="right text-info text-center">
                                                                <strong> {{ $total_price }} ৳</strong>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- /.Shopping Cart table -->

                                        @endif

                                        </div>


                                        <div class="card-footer clearfix">
                                            <div class="float-left">
                                                <form action="{{ route('admin.order.paid', $order->id) }}" method="post">
                                                    @csrf
                                                    @if($order->is_paid)
                                                        <input type="submit" class="btn btn-sm btn-warning" value="Cancel Payment">
                                                    @else
                                                    <input type="submit" class=" btn btn-sm btn-warning" value="Paid Order">
                                                    @endif
                                                </form>

                                            </div>
                                            <div class="float-right">
                                                <div class="d-flex justify-content-end">
                                                    <a href="{{ route('admin.order.invoice',$order->id) }}" target="_blank" class="btn btn-sm btn-primary mr-3"><i class="fas fa-download"></i> Generate Invoice</a>
                                                    <form action="{{ route('admin.order.completed', $order->id) }}" method="post">
                                                        @csrf
                                                        @if($order->is_completed)
                                                            <input type="submit" class="float-right btn btn-sm btn-danger" value="Camcel Order">
                                                        @else
                                                            <input type="submit" class="float-right btn btn-sm btn-primary " value="Order Complete Now">
                                                        @endif
                                                    </form>
                                                </div>

                                            </div>


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

@endsection