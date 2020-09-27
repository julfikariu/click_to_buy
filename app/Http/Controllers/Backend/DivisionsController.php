<?php /** @noinspection ALL */

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\Division;
use Illuminate\Http\Request;

class DivisionsController extends Controller
{


    public function index()
    {
        $divisions = Division::orderBy('priority', 'asc')->get();
        return view('backend.pages.division.index', compact('divisions'));
    }


    public function create()
    {
        return view('backend.pages.division.create');
    }

    public function store(Request $request)
    {

        $this->validate($request,
            [
                'name' => 'required',
                'priority' => 'required',
            ],
            [
                'name.required' => 'You must provide division Name',
                'priority.required' => 'Please provide a division Priority',
            ]);

        $division = new Division();

        $division->name = $request->input('name');
        $division->priority = $request->input('priority');

        $division->save();
        Session()->flash('success', 'A new division has been added Successfully');
        return redirect()->route('admin.divisions');

    }


    public function edit($id)
    {

        $division = Division::find($id);
        if (!is_null($division)) {
            return view('backend.pages.division.edit', compact('division'));
        } else {
            return redirect()->route('admin.divisions');
        }

    }


    public function update(Request $request, $id)
    {

        $this->validate($request,
            [
                'name' => 'required',
                'priority' => 'required',
            ],
            [
                'name.required' => 'You must provide division Name',
                'priority.required' => 'Please provide a division Priority',
            ]);

        $division = Division::find($id);

        $division->name = $request->input('name');
        $division->priority = $request->input('priority');

        $division->save();

        Session()->flash('success', 'Division has been updated successfully');
        return redirect()->route('admin.divisions');
    }


    public function delete($id)
    {

        $division = Division::find($id);

        if (!is_null($division)) {

    //   Delete all districts related to this division

            $districts = District::where('division_id', $division->id)->get();
            foreach ($districts as $district){
                $district->delete();
            }
            $division->delete();
        }
        session()->flash('success', 'Division Has been Deleted Successfully');
        return back();
    }


}
