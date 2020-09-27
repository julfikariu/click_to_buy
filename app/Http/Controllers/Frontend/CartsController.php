<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartsController extends Controller
{
    /**
     * Display a listing of the carts.
     *
     * @return string all carts view
     */
    public function index()
    {
        return view('frontend.pages.cart');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

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


        session()->flash('success','Product has added to cart');
        return back();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


        $cart = Cart::find($id);
        if (!is_null($cart)){
            $cart->product_quantity = $request->product_quantity;
            $cart->save();
        }else{
            return redirect()->route('carts');
        }

        session()->flash('success','Cart has been Updated Successfully');
        return back();

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
