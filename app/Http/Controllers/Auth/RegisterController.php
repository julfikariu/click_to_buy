<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\Division;
use App\Models\User;
use App\Notifications\VerifyRegistration;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }



    /**
     * @Override method for user registration
     *
     * Showing Registration form
     *
     * @return void view
     */
    public function showRegistrationForm()
    {
        $divisions = Division::orderBy('priority', 'asc')->get();
        $districts = District::orderBy('id', 'asc')->get();
        return view('auth.register', compact('divisions','districts'));
    }


    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:30'],
            'last_name' => ['nullable', 'string', 'max:10'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'division_id' => ['required','numeric'],
            'district_id' => ['required','numeric'],
            'phone_no' => ['required','max:15'],
            'street_address' => ['required','max:100'],
        ]);
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function register(Request $request)
    {

        $user = new User();

        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->username = Str::slug($request->first_name.' '.$request->last_name);
        $user->email = $request->email;
        $user->street_address = $request->street_address;
        $user->district_id = $request->district_id;
        $user->division_id = $request->division_id;
        $user->phone_no = $request->phone_no;
        $user->ip_address = request()->ip();
        $user->password = Hash::make($request->password);
        $user->remember_token = Str::random(50);
        $user->status = 0;

        $user->save();

        session()->flash('success','A notification mail has ben sent.Please check your email and confirm your mail.');
        return redirect()->route('home');

     /*User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => Str::slug($request->first_name.' '.$request->last_name),
            'email' => $request->email,
            'street_address' => $request->street_address,
            'district_id' => $request->district_id,
            'division_id' => $request->division_id,
            'phone_no' => $request->phone_no,
            'ip_address' => request()->ip(),

            'password' => Hash::make($request->password),
            'remember_token' => Str::random(50),
            'status' => 0,
        ]);
//
////       $user->notify( new VerifyRegistration($user));
//
//        session()->flash('success','A notification mail has ben sent.Please check your email and confirm your mail.');
        return redirect()->route('home');*/

    }
}
