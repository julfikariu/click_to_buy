<form id="addtocart" action="{{ route('cart.store')}}" method="post">
    @csrf
    <input type="hidden" name="product_id" value="{{ $product->id }}">
  {{--  <button class="text-warning" type="submit" data-toggle="tooltip" data-placement="top" title="Add to Cart"
            style="background: none;border: none;">
        <i class="fas fa-shopping-cart ml-3"></i>
    </button>--}}

    <button class="text-warning" type="button" onclick="addTocart({{ $product->id }})" data-toggle="tooltip" data-placement="top" title="Add to Cart"
            style="background: none;border: none;">
        <i class="fas fa-shopping-cart ml-3"></i>
    </button>

</form>
