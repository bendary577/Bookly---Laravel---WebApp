<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


//--------------------------------------------------------------------------

//api end points 
//localhost:8000/Bookly/api/v1/books

Route::group(['middleware'=> ['api'], 'namespace'=>'Api'], function(){
    Route::prefix('books')->group(function(){  
        Route::get('/', 'BookController@index');
        //http get. to retrieve books by id and category
        Route::get('/{id}', 'BookController@show');
        // http://127.0.0.1:8000/api/v1/books?category=history
        Route::get('/{category}', 'BookController@showByCategory');
         //http post to insert a book
         // http://127.0.0.1:8000/api/v1/book?title='first book' .... 
        Route::post('book', 'BookController@store');
        //http get to edit book by id
        Route::get('edit/{id}', 'BookController@edit');
        //instead of http put "update"
        Route::post('update/{id}', 'BookController@update');
        //instead of http delete
        Route::get('delete/{id}', 'BookController@delete');
    });
});

