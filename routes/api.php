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



//Get All Testimonies
Route::get('/testimony', [App\Http\Controllers\api\TestimonyController::class, 'index']);

//Delete A Testimony By ID
Route::delete('/testimony/{id}', [App\Http\Controllers\api\TestimonyController::class, 'destroy']);
//Update A Testimony to verified By ID
Route::put('/testimony/{id}', [App\Http\Controllers\api\TestimonyController::class, 'updateToVerified']);


//Show Verified Testimonials by numbers

Route::get('/testimony/verified/{num}', [App\Http\Controllers\api\TestimonyController::class, 'showVerifiedByNumber']);

//Get All Unverified Testimonies
Route::get('/testimony/unverified', [App\Http\Controllers\api\TestimonyController::class, 'showUnverified']);

//Create a Testimony
Route::post('/testimony', [App\Http\Controllers\api\TestimonyController::class, 'store']);
