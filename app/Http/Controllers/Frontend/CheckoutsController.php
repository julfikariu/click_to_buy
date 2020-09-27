<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutsController extends Controller
{


    /**
     * Display a listing of the carts.
     *
     * @return string all carts view
     */
    public function index()
    {
        $payments = Payment::orderBy('priority','asc')->get();
        return view('frontend.pages.checkouts', compact('payments'));
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
            'name' => 'required',
            'phone_no' => 'required',
            'shipping_address' => 'required',
            'payment_method_id' => 'required',
        ]);

        $order = new Order();

//        Check the transaction Id given or not
        if($request->payment_method_id != 'cash_in'){


              if($request->transaction_id == null || empty($request->transaction_id)){
                  session()->flash('sticky_error','Please give your transaction id for your payment');
                  return back();
              }
        }

                $order->name = $request->name;
                 $order->email = $request->email;
                 $order->phone_no = $request->phone_no;
                 $order->message = $request->message;
                 $order->shipping_address = $request->shipping_address;
                 $order->transaction_id = $request->transaction_id;
                 $order->ip_address = request()->ip();

                 if(Auth::check()){
                     $order->user_id = Auth::id();
                 }

                 $order->payment_id  = Payment::where('short_name',$request->payment_method_id )->first()->id;

                 $order->save();

                 foreach (Cart::totalCarts() as $cart ){
                     $cart->order_id = $order->id;
                     $cart->save();
                 }

                 session()->flash('success','Your oredr has taken successfully | Please wait Admin will soon confirm it.');
                 return redirect()->route('home');

    }

}
