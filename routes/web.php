<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/





/*
 *  Frontend page route
 */

Route::get('/', 'Frontend\PagesController@index')->name('home');

Route::get('/contact', 'Frontend\PagesController@contact')->name('contact');
Route::get('/search', 'Frontend\PagesController@search')->name('search');





/*
 *  All the routes for product frontend page
 */
Route::get('/products', 'Frontend\ProductsController@index')->name('products');
Route::get('/products/{slug}', 'Frontend\ProductsController@show')->name('product.show');

/*
 *  All the routes for User frontend page
 */

Route::group(['prefix' => 'users','middleware' => 'web'], function () {
    Route::get('user/{token}', 'Frontend\VerificationController@verify')->name('user.verification');

    Route::get('/dashboard', 'Frontend\UsersController@dashboard')->name('user.dashboard');
    Route::get('/profile', 'Frontend\UsersController@profile')->name('user.profile');
    Route::post('/profile/update', 'Frontend\UsersController@profileUpdate')->name('user.profile.update');

});

/*
 *  All the routes for Cart
 */

Route::group(['prefix' => 'carts'], function () {

    Route::get('/', 'Frontend\CartsController@index')->name('carts');
    Route::post('/store', 'Frontend\CartsController@store')->name('cart.store');
    Route::post('/update/{id}', 'Frontend\CartsController@update')->name('cart.update');
    Route::post('/destroy/{id}', 'Frontend\CartsController@destroy')->name('cart.delete');


});


/*
 *  Checkouts cart
 */

Route::group(['prefix' => 'checkouts'], function () {

    Route::get('/', 'Frontend\CheckoutsController@index')->name('checkouts');
    Route::post('/store', 'Frontend\CheckoutsController@store')->name('checkout.store');



});





/*
 * Admin page route
 */

Route::group(['prefix' => 'myadmin'], function () {

    /*
     * Admin Front page route
     */
    Route::get('/', 'Backend\PagesController@index')->name('admin.dashboard');
    Route::get('/login', 'Auth\Admin\LoginController@showLoginForm')->name('admin.login');
    Route::post('/login/submit', 'Auth\Admin\LoginController@login')->name('admin.login.submit');
    Route::post('/logout', 'Auth\Admin\LoginController@logout')->name('admin.logout');

//    Admin  password reset send email
    Route::get('/password/reset', 'Auth\Admin\ForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/email', 'Auth\Admin\ForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');

    //    Admin  password reset form
    Route::get('/password/reset/{token}', 'Auth\Admin\ResetPasswordController@showResetForm')->name('admin.password.reset');
    Route::post('/password/reset/', 'Auth\Admin\ResetPasswordController@reset')->name('admin.password.update');


    /*
    *  Admin Products page route
    */
    Route::group(['prefix' => '/products','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\ProductsController@index')->name('admin.products');
        Route::get('/create', 'Backend\ProductsController@create')->name('admin.product.create');
        Route::get('/edit/{id}', 'Backend\ProductsController@edit')->name('admin.product.edit');
        Route::post('/store', 'Backend\ProductsController@store')->name('admin.product.store');
        Route::post('/edit/{id}', 'Backend\ProductsController@update')->name('admin.product.update');
        Route::post('/delete/{id}', 'Backend\ProductsController@delete')->name('admin.product.delete');
    });

    /*
        *  Admin Order Confirm route
        */
    Route::group(['prefix' => '/orders','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\OrdersController@index')->name('admin.orders');
        Route::get('/view/{id}', 'Backend\OrdersController@show')->name('admin.order.show');
        Route::post('/delete/{id}', 'Backend\OrdersController@delete')->name('admin.order.delete');

        Route::post('/completed/{id}', 'Backend\OrdersController@complete')->name('admin.order.completed');
        Route::post('/paid/{id}', 'Backend\OrdersController@paid')->name('admin.order.paid');

        Route::post('/charge-update/{id}', 'Backend\OrdersController@chargeUpdate')->name('admin.order.charge');

        Route::get('/invoice/{id}', 'Backend\OrdersController@generateInvoice')->name('admin.order.invoice');
    });


    /*
     *  Admin Categories page route
     */
    Route::group(['prefix' => '/categories','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\CategoriesController@index')->name('admin.categories');
        Route::get('/create', 'Backend\CategoriesController@create')->name('admin.category.create');
        Route::get('/edit/{id}', 'Backend\CategoriesController@edit')->name('admin.category.edit');
        Route::post('/store', 'Backend\CategoriesController@store')->name('admin.category.store');
        Route::post('/edit/{id}', 'Backend\CategoriesController@update')->name('admin.category.update');
        Route::post('/delete/{id}', 'Backend\CategoriesController@delete')->name('admin.category.delete');
    });


    /*
     *     Admin Brands page route
     */
    Route::group(['prefix' => '/brands','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\BrandsController@index')->name('admin.brands');
        Route::get('/create', 'Backend\BrandsController@create')->name('admin.brand.create');
        Route::get('/edit/{id}', 'Backend\BrandsController@edit')->name('admin.brand.edit');
        Route::post('/store', 'Backend\BrandsController@store')->name('admin.brand.store');
        Route::post('/edit/{id}', 'Backend\BrandsController@update')->name('admin.brand.update');
        Route::post('/delete/{id}', 'Backend\BrandsController@delete')->name('admin.brand.delete');
    });


    /*
    *     Admin Divisions page route
    */
    Route::group(['prefix' => '/divisions','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\DivisionsController@index')->name('admin.divisions');
        Route::get('/create', 'Backend\DivisionsController@create')->name('admin.division.create');
        Route::get('/edit/{id}', 'Backend\DivisionsController@edit')->name('admin.division.edit');
        Route::post('/store', 'Backend\DivisionsController@store')->name('admin.division.store');
        Route::post('/edit/{id}', 'Backend\DivisionsController@update')->name('admin.division.update');
        Route::post('/delete/{id}', 'Backend\DivisionsController@delete')->name('admin.division.delete');
    });

    /*
    *     Admin Districts page route
    */
    Route::group(['prefix' => '/districts','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\DistrictsController@index')->name('admin.districts');
        Route::get('/create', 'Backend\DistrictsController@create')->name('admin.district.create');
        Route::get('/edit/{id}', 'Backend\DistrictsController@edit')->name('admin.district.edit');
        Route::post('/store', 'Backend\DistrictsController@store')->name('admin.district.store');
        Route::post('/edit/{id}', 'Backend\DistrictsController@update')->name('admin.district.update');
        Route::post('/delete/{id}', 'Backend\DistrictsController@delete')->name('admin.district.delete');
    });

    /**
     *  Admin header slider
     */

    Route::group(['prefix' => '/sliders','middleware'=>'auth:admin'], function () {
        Route::get('/', 'Backend\SlidersController@index')->name('admin.sliders');
        Route::post('/store', 'Backend\SlidersController@store')->name('admin.slider.store');
        Route::post('/update/{id}', 'Backend\SlidersController@update')->name('admin.slider.update');
        Route::post('/delete/{id}', 'Backend\SlidersController@delete')->name('admin.slider.delete');
    });


});


Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

// Api Routes

Route::get('get-districts/{id}',function ($id){
    return App\Models\District::where('division_id',$id)->get();
});
