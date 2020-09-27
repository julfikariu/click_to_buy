<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Image;

class ProductsController extends Controller
{
    /*public function __construct()
    {
        $this->middleware('auth:api');
    }*/
    public function index(){
        $products = Product::orderBy('id','asc')->get();
        return view('backend.pages.product.index',compact('products'));
    }

    public function create(){

        return view('backend.pages.product.create');
    }

    public function store(Request $request){

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'category_id' => 'required|numeric',
            'brand_id' => 'required|numeric',
        ]);


        $product = new Product;

        $product->title = $request->title;
        $product->description = $request->description;
        $product->price  = $request->price;
        $product->quantity = $request->quantity;

        $product->slug = Str::slug($product->title);
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->admin_id = 1;

        $product->save();

//         product add image

//        if($request->hasFile('product_image')){
//            $image = $request->file('product_image');
//            $main_Image = Image::make($image);
//
//            $imag_name = time().'.'.$image->getClientOriginalExtension();
//            $location = public_path('images/products/'.$imag_name);
//            $main_Image->save($location);
//
//            /*$thumlocation = public_path('images/products/thumbnil/'.$imag_name);
//            $main_Image->resize(150,150);
//            $main_Image->save($thumlocation);*/
//
//            $product_image = new ProductImage;
//
//            $product_image->product_id = $product->id;
//            $product_image->image = $imag_name;
//            $product_image->save();
//
//        }

        if (count($request->product_image) > 0){

            foreach ($request->product_image as $image){
                $main_Image = Image::make($image);

                $imag_name = time().$image->getClientOriginalName().'.'.$image->getClientOriginalExtension();
                $location = public_path('images/products/'.$imag_name);
                $main_Image->save($location);

                /*$thumlocation = public_path('images/products/thumbnil/'.$imag_name);
                $main_Image->resize(150,150);
                $main_Image->save($thumlocation);*/

                $product_image = new ProductImage;

                $product_image->product_id = $product->id;
                $product_image->image = $imag_name;
                $product_image->save();

            }

        }

        session()->flash('success','A new Product Added Successfully');

        return redirect()->route('admin.products');
    }



    public function edit($id){

        $product = Product::find($id);
        return view('backend.pages.product.edit', compact('product'));
    }


    public function update(Request $request, $id){

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric',
            'category_id' => 'required|numeric',
            'brand_id' => 'required|numeric',
        ]);


        $product = Product::find($id);

        $product->title = $request->title;
        $product->description = $request->description;
        $product->price  = $request->price;
        $product->quantity = $request->quantity;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;

        $product->save();
        session()->flash('success','Product has been Updated Successfully');
        return redirect()->route('admin.products');
    }


    public function delete($id){

        $product = Product::find($id);

        if(!is_null($product)){
            $product->delete();
        }
        session()->flash('success','Product has been Deleted Successfully');

        return back();

    }


}
