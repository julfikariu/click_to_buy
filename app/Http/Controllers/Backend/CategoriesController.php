<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Image;
use File;

class CategoriesController extends Controller
{


    public function index()
    {
        $categories = Category::orderBy('id', 'asc')->get();
        return view('backend.pages.category.index', compact('categories'));
    }


    public function create()
    {

        $main_category = Category::orderBy('name', 'asc')->where('parent_id', null)->get();
        return view('backend.pages.category.create', compact('main_category'));
    }

    public function store(Request $request)
    {

        $this->validate($request,
            [
                'name' => 'required',
                'image' => 'nullable|image',
            ],
            [
                'name.required' => 'You must provide category Name',
                'image.image' => 'Please provide a image with .jpg, .png, .jpeg  extension',
            ]);

        $category = new Category();

        $category->name = $request->name;
        $category->description = $request->description;
        $category->parent_id = $request->parent_id;

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $main_Image = Image::make($image);

            $imag_name = time() . '.' . $image->getClientOriginalExtension();
            $location = public_path('images/categories/' . $imag_name);
            $main_Image->save($location);
            $category->image = $imag_name;
        }


        $category->save();
        Session()->flash('success', 'A new category has been added');
        return redirect()->route('admin.categories');

    }


    public function edit($id)
    {
        $main_category = Category::orderBy('name', 'asc')->where('parent_id', null)->get();
        $category = Category::find($id);
        if (!is_null($category)) {
            return view('backend.pages.category.edit', compact('category', 'main_category'));
        } else {
            return redirect()->route('admin.categories');
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
                'name.required' => 'You must provide category Name',
                'image.image' => 'Please provide a image with .jpg, .png, .jpeg  extension',
            ]);

        $category = Category::find($id);

        $category->name = $request->name;
        $category->description = $request->description;
        $category->parent_id = $request->parent_id;

//   Insert Image also
        if ($request->hasFile('image')) {
//   Delete the old image from folder
            if (File::exists('images/categories/' . $category->image)) {
                File::delete('images/categories/'.$category->image);
            }

            $image = $request->file('image');
            $main_Image = Image::make($image);

            $imag_name = time() . '.' . $image->getClientOriginalExtension();
            $location = public_path('images/categories/' . $imag_name);
            $main_Image->save($location);
            $category->image = $imag_name;
        }


        $category->save();
        Session()->flash('success', 'Category has been updated successfully');
        return redirect()->route('admin.categories');
    }


    public function delete($id){

        $category = Category::find($id);

        if(!is_null($category)){
//            if it is primary category, then delete all it`s sub-category

            if ($category->parent_id == null){
                $sub_categories = Category::orderBy('name', 'asc')->where('parent_id', $category->id)->get();

                foreach ($sub_categories as $sub_category){
                    if (File::exists('images/categories/' . $sub_category->image)) {
                        File::delete('images/categories/'.$sub_category->image);
                    }

                    $sub_category->delete();
                }
            }

//       Delete reletated Image also
            if (File::exists('images/categories/' . $category->image)) {
                File::delete('images/categories/'.$category->image);
            }
            $category->delete();
        }
        session()->flash('success','Category Hasbeen Deleted Successfully');

        return back();
    }


}
