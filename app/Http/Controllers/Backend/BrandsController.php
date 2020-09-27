<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Image;
use File;

class BrandsController extends Controller
{
    public function index()
    {
        $brands = Brand::orderBy('id', 'asc')->get();
        return view('backend.pages.brand.index', compact('brands'));
    }


    public function create()
    {
        return view('backend.pages.brand.create');
    }

    public function store(Request $request)
    {

        $this->validate($request,
            [
                'name.required' => 'You must provide brand Name',
                'image.image' => 'Please provide a image with .jpg, .png, .jpeg  extension',
            ],
            [

                'required',
                'image' => 'nullable|image',
            ]);

        $brand = new Brand();

        $brand->name = $request->name;
        $brand->description = $request->description;

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $main_Image = Image::make($image);

            $imag_name = time() . '.' . $image->getClientOriginalExtension();
            $location = public_path('images/brands/' . $imag_name);
            $main_Image->save($location);
            $brand->image = $imag_name;
        }


        $brand->save();
        Session()->flash('success', 'A new brand has been added');
        return redirect()->route('admin.brands');

    }


    public function edit($id)
    {

        $brand = Brand::find($id);
        if (!is_null($brand)) {
            return view('backend.pages.brand.edit', compact('brand'));
        } else {
            return redirect()->route('admin.brands');
        }

    }


    public function update(Request $request, $id)
    {

        $this->validate($request,
            [
                'name' => 'required',
                'image' => 'nullable|image',
            ],
            [
                'name.required' => 'You must provide brand Name',
                'image.image' => 'Please provide a image with .jpg, .png, .jpeg  extension',
            ]);

        $brand = Brand::find($id);

        $brand->name = $request->name;
        $brand->description = $request->description;

//   Insert Image also
        if ($request->hasFile('image')) {
//   Delete the old image from folder
            if (File::exists('images/brands/' . $brand->image)) {
                File::delete('images/brands/'.$brand->image);
            }

            $image = $request->file('image');
            $main_Image = Image::make($image);

            $imag_name = time() . '.' . $image->getClientOriginalExtension();
            $location = public_path('images/brands/' . $imag_name);
            $main_Image->save($location);
            $brand->image = $imag_name;
        }

        $brand->save();
        Session()->flash('success', 'Brand has been updated successfully');
        return redirect()->route('admin.brands');
    }


    public function delete($id){

        $brand = Brand::find($id);

        if(!is_null($brand)){

//       Delete reletated Image also
            if (File::exists('images/brands/' . $brand->image)) {
                File::delete('images/brands/'.$brand->image);
            }
            $brand->delete();
        }
        session()->flash('success','Brand Has been Deleted Successfully');
        return back();
    }
}
