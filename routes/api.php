<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/*
 *  All the routes for Cart
 */

Route::group(['prefix' => 'carts'], function () {

    Route::get('/', 'API\CartsController@index')->name('carts');
    Route::post('/store', 'API\CartsController@store')->name('cart.store');
    Route::post('/update/{id}', 'API\CartsController@update')->name('cart.update');
    Route::post('/destroy/{id}', 'API\CartsController@destroy')->name('cart.delete');


});
