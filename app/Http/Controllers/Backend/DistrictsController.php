<?php
/** @noinspection ALL */
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\Division;
use Illuminate\Http\Request;

class DistrictsController extends Controller
{

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $districts = District::orderBy('id', 'asc')->get();
        return view('backend.pages.district.index', compact('districts'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        $divisions = Division::orderBy('priority', 'asc')->get();
        return view('backend.pages.district.create', compact('divisions'));
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
                'name' => 'required',
                'division_id' => 'required',
            ],
            [
                'name.required' => 'You must provide division Name',
                'division_id.required' => 'Please select a division',
            ]);

        $district = new District();

        $district->name = $request->input('name');
        $district->division_id = $request->input('division_id');

        $district->save();
        Session()->flash('success', 'A new division has been added Successfully');
        return redirect()->route('admin.districts');

    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\View\View
     */
    public function edit($id)
    {
        $divisions = Division::orderBy('priority', 'asc')->get();
        $district = District::find($id);
        if (!is_null($district)) {
            return view('backend.pages.district.edit', compact('district','divisions'));
        } else {
            return redirect()->route('admin.districts');
        }

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
                'name' => 'required',
                'division_id' => 'required',
            ],
            [
                'name.required' => 'You must provide division Name',
                'division_id.required' => 'Please select a division',
            ]);

        $district = District::find($id);

        $district->name = $request->input('name');
        $district->division_id = $request->input('division_id');

        $division->save();


        Session()->flash('success', 'District has been updated successfully');
        return redirect()->route('admin.districts');
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete($id)
    {

        $district = District::find($id);

        if (!is_null($district)) {
            $district->delete();
        }
        session()->flash('success', 'District Has been Deleted Successfully');
        return back();
    }





}
