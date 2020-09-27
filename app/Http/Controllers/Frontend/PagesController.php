<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth:api');
    }*/


    public function index(){
        $sliders = Slider::orderBy('priority', 'asc')->get();
        $products = Product::orderBy('id', 'asc')->get();
        return view('frontend.pages.index', compact('products','sliders'));
    }

    public function contact(){
        return view('frontend.pages.contact');
    }

    public function search(Request $request){

        $search = $request->search;
        $products = Product::orWhere('title','like', '%'.$search.'%')
            ->orWhere('title','like', '%'.$search.'%')
            ->orWhere('description','like', '%'.$search.'%')
            ->orWhere('price','like', '%'.$search.'%')
            ->orWhere('quantity','like', '%'.$search.'%')
            ->orderBy('id','desc')->paginate(9);

        return view('frontend.pages.product.search',compact('search','products'));
    }



}
