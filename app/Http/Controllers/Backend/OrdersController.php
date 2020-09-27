<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use PDF;


class OrdersController extends Controller
{

    public function index(){
        $orders = Order::orderBy('id','desc')->get();
        return view('backend.pages.order.index', compact('orders'));
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($id){
        $order = Order::find($id);
        $order->is_seen_by_admin = 1;
        $order->save();
        return view('backend.pages.order.show', compact('order'));
    }

    public function complete($id){

        $order = Order::find($id);
        if($order->is_completed){
            $order->is_completed= 0;
        }else{
            $order->is_completed = 1;
        }
        $order->save();
        Session()->flash('success', 'Order Has been Changed by admin');
        return back();
    }



    public function paid($id){
        $order = Order::find($id);
        if($order->is_paid){
            $order->is_paid= 0;
        }else{
            $order->is_paid = 1;
        }
        $order->save();
        Session()->flash('success', 'Payment Has been Changed by admin');
        return back();
    }


    /**
     * Charge update when discount or add shipping cost
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function chargeUpdate(Request $request, $id){

        $order = Order::find($id);

        $order->shipping_charge = $request->shipping_charge;
        $order->custom_discount = $request->custom_discount;

        $order->save();
        Session()->flash('success', 'Order charge and discount has been updated');
        return back();
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function generateInvoice($id){

        $order = Order::find($id);
        return view('backend.pages.order.newinvoice',compact('order'));

//        $pdf = PDF::loadView('backend.pages.order.clickinvoice', compact('order'));
//        return $pdf->stream('ffinvoice.pdf');


    }




}
