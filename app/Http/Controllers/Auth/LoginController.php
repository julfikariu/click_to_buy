<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Notifications\VerifyRegistration;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');
    }


    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

  //    find user by this email
        $user = User::where('email', $request->email)->first();


        if ($user->status == 1) {

            //     login the user
            if (Auth::guard('web')->attempt(['email' => $request->email, 'password' => $request->password], $request->remember_token)) {
                //   Login Now
                return redirect()->intended(route('home'));
            }else{
                session()->flash('mistake', 'Your Email or Password is incorrect.');
                return back();
            }

        } else {

            if (!is_null($user)) {
                $user->notify( new VerifyRegistration($user));
                session()->flash('success', 'A New notification mail has ben sent.Please check your email and confirm your mail.');

                return redirect()->route('home');
            } else {
                session()->flash('mistake', 'Please Login First.');
                return redirect()->route('login');
            }
        }


    }


}
