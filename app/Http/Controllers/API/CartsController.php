<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'product_id' => 'required'
        ],
        [
            'product_id.required'=>'Please give a product'
        ]);

        if(Auth::check()){
            $cart = Cart::Where('user_id','Auth::id()')
            ->Where('product_id', $request->product_id)
            ->Where('order_id', null)
            ->first();
        }else{
            $cart = Cart::Where('ip_address',request()->ip())
            ->Where('product_id', $request->product_id)
            ->Where('order_id', null)
            ->first();
        }


            if(!is_null($cart)){
                $cart->increment('product_quantity');

            }else{

                $cart = new Cart();

                if(Auth::check()){
                    $cart->user_id = Auth::id();
                }

                $cart->ip_address = request()->ip();
                $cart->product_id = $request->product_id;

                $cart->save();
            }


        return json_encode(['status'=>'success','message'=>'Item added to cart successfully','totalItems'=>Cart::totalItems()]);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $cart = Cart::find($id);
        if (!is_null($cart)){
            $cart->delete();
        }else{
            return redirect()->route('carts');
        }

        session()->flash('success','Cart one item Deleted Successfully');
        return back();
    }
}
