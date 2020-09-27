<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Image;
use File;

class SlidersController extends Controller
{


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $sliders = Slider::orderBy('priority', 'asc')->get();
        return view('backend.pages.slider.index', compact('sliders'));
    }



    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        $this->validate($request,
            [
                'title' => 'required',
                'image' => 'required|image',
                'priority' => 'required',
                'sub_title' => 'nullable',
                'button_text' => 'nullable',
                'button_link' => 'nullable|url',
            ],
            [
                'title.required' => 'You must provide slider title',
                'image.required' => 'Please provide slider image',
                'image.image' => 'Please provide a valid slider image',
                'priority.required' => 'Please provide slider priority',
                'button_link.url' => 'Please provide a valid slider button link',
            ]);

        $slider = new Slider();

        $slider->title = $request->input('title');
        $slider->title = $request->input('sub_title');

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $imag_name = time() . '.' . $image->getClientOriginalExtension();
            $location = public_path('images/slider/' . $imag_name);

            $main_Image = Image::make($image);
            $main_Image->resize(1000,350);
            $main_Image->save($location);
            $slider->image = $imag_name;
        }

        $slider->priority = $request->input('priority');
        $slider->button_text = $request->input('button_text');
        $slider->button_link = $request->input('button_link');


        $slider->save();
        Session()->flash('success', 'A new Slider has been Added Successfully');
        return redirect()->route('admin.sliders');

    }



    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {


        $this->validate($request,
            [
                'title' => 'required',
                'image' => 'nullable|image',
                'priority' => 'required',
                'sub_title' => 'nullable',
                'button_text' => 'nullable',
                'button_link' => 'nullable|url',
            ],
            [
                'title.required' => 'You must provide slider title',
                'image.image' => 'Please provide a valid slider image',
                'priority.required' => 'Please provide slider priority',
                'button_link.url' => 'Please provide a valid slider button link',
            ]);

        $slider = Slider::find($id);

       $slider->title = $request->input('title');
        $slider->priority = $request->input('priority');
        $slider->sub_title = $request->input('sub_title');
        $slider->button_text = $request->input('button_text');
        $slider->button_link = $request->input('button_link');

        //   Insert Image also
        if ($request->hasFile('image')) {
//   Delete the old image from folder
            if (File::exists('images/slider/' . $slider->image)) {
                File::delete('images/slider/'.$slider->image);
            }

            $image = $request->file('image');
            $main_Image = Image::make($image);

            $imag_name = time() . '.' . $image->getClientOriginalExtension();
            $location = public_path('images/slider/' . $imag_name);
            $main_Image->resize(1000,350);
            $main_Image->save($location);
            $slider->image = $imag_name;
        }

        $slider->save();


        Session()->flash('success', 'Slider has been updated successfully');
        return redirect()->route('admin.sliders');
    }


    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete($id)
    {

        $slider = Slider::find($id);

        if (!is_null($slider)) {
            $slider->delete();
        }
        session()->flash('success', 'Slider Has been Deleted Successfully');
        return back();
    }




}
