<!-- Cart Modal -->
<div class="modal fade cart-modal" id="cart-modal-ex" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 660px">

        @if(App\Models\Cart::totalItems() > 0)
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">

                <h4 class="modal-title font-weight-bold dark-grey-text" id="myModalLabel">Your cart</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <!--Body-->
            <div class="modal-body">

                <table class="table product-table">

                    <!-- Table head -->
                    <thead class="mdb-color lighten-5">
                    <tr>
                        <th class="font-weight-bold">
                            <strong>No.</strong>
                        </th>
                        <th class="font-weight-bold">
                            <strong>Product Title</strong>
                        </th>
                        <th class="font-weight-bold">
                            <strong>Image</strong>
                        </th>

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
                    @php
                        $total_price =0;
                    @endphp
                    @foreach( App\Models\Cart::totalCarts() as $cart)
                        <!-- First row -->
                        <tr>
                            <th scope="row">
                                {{ $loop->index+1 }}
                            </th>
                            <td>
                                <h6 class="text-capitalize">
                                    <a href="{{ route('product.show',$cart->product->slug) }}" class="text-info"><strong> {{ $cart->product->title }}</strong></a>
                                </h6>
                                {{--<p class="text-muted">{{ $cart->product->brand->name }}</p>--}}
                            </td>
                            <td>
                                @if($cart->product->images->count() > 0)
                                    <img src="{{ asset('images/products/'. $cart->product->images->first()->image) }}" alt="" class="img-fluid z-depth-0 mx-auto" width="60" height="60">
                                @endif
                            </td>

                            <td class="text-center text-md-left">
                                <span class="qty"> {{ $cart->product_quantity }} </span>
                            </td>
                            <td class="font-weight-bold grey-text">
                                <strong>{{ $cart->product->price }} ৳</strong>
                            </td>
                                @php
                                    $total_price += $cart->product->price*$cart->product_quantity;
                                @endphp

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
                        <td colspan="2"></td>
                        <td colspan="2" class="text-uppercase font-weight-bold grey-text">Total Amount = </td>

                        <td colspan="" class="font-weight-bold text-primary " style="font-size: 16px">{{ $total_price }} ৳</td>
                        <td></td>
                    </tr>

                    </tbody>
                    <!-- /.Table body -->

                </table>



            </div>
            <!--Footer-->
            <div class="modal-footer">

                <div class="float-right">

                    <a href="{{ route('checkouts') }}" class="btn btn-warning ">Checkout</a>
                </div>
            </div>
        </div>
        <!--/.Content-->
        @else
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="">There is no item in your cart.</h3>
            </div>
            <div class="modal-body">
                <button  class="btn btn-info" data-dismiss="modal">Continue Shopping...</button>
            </div>
        </div>
        @endif

    </div>
</div>

<!-- /.Cart Modal -->