<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{

    public function index(){
        $products = Product::orderBy('id', 'asc')->paginate(8);
        return view('frontend.pages.product.index', compact('products'));
    }


    public function show($slug){

        $product = Product::where('slug',$slug)->first();

        if(!is_null($product)){

            return view('frontend.pages.product.show',compact('product'));
        }else{
            session()->flash('errors','Sorry there is no product by this url...');
            return redirect()->route('products');
        }


    }


}
