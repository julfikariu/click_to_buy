@extends('frontend.layout.master')
@section('content')


    <!-- Main Container -->
    <div class="container">

        <!-- Section cart -->
        <section class="section">

            <div class="card card-ecommerce">
                <div class="card-body">

                    @if(App\Models\Cart::totalItems() > 0)

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
                            @foreach( App\Models\Cart::totalCarts() as $cart)

                            <!-- First row -->
                            <tr>
                                <th></th>
                                <th scope="row">
                                   {{ $loop->index +1 }}
                                </th>
                                <td>
                                    <h6 class="text-capitalize">
                                        <a href="{{ route('product.show',$cart->product->slug) }}" class="text-info"><strong> {{ $cart->product->title }}</strong></a>
                                    </h6>
                                    <p class="text-muted"> {{ $cart->product->brand->name ?? ''}}</p>
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
                                   {{-- <div class="btn-group radio-group ml-2" data-toggle="buttons">
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

                            <tr class="" style="background-color: #e9ecef">
                                <td colspan="5"></td>
                                <td></td>
                                <td class="text-uppercase font-weight-bold grey-text">Total Amount = </td>

                                <td colspan="2" class="font-weight-bold text-primary" style="font-size: 16px">{{ $total_price }} ৳</td>
                            </tr>

                            </tbody>
                            <!-- /.Table body -->

                        </table>
                        <div class="float-right">
                            <a href="{{ route('products') }}" class="btn btn-info btn-lg">Continue Shopping...</a>
                            <a href="{{ route('checkouts') }}" class="btn btn-warning btn-lg">Checkout</a>
                        </div>

                    </div>
                    <!-- /.Shopping Cart table -->

                    @else
                        <div class="alert alert-warning">
                            <div class="d-block mx-auto w-50">
                                <img src="{{ asset('images/shopping_cart_empty.jpg') }}" alt="" class="img-fluid img">
                            </div>

                            <div class="modal-body w-75 d-flex justify-content-end">
                                 <a href="{{ route('products') }}" class="btn btn-info btn-lg">Continue Shopping...</a>
                            </div>
                        </div>
                    @endif

                </div>

            </div>

        </section>
        <!-- /Section cart -->



    </div>
    <!-- /.Main Container -->

@endsection
