<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TestimonyModel;
use Facade\FlareClient\Http\Response;
use Illuminate\Support\Facades\DB;

class TestimonyController extends Controller
{
    //GET All Testimonials
    public function index()
    {
        $data = TestimonyModel::all();
        return $data;
    }

    //CREATE A Testimonial
    public function store(Request $request)
    {
        $data = new TestimonyModel();
        $data->name = $request->name;
        $data->email = $request->email;
        $data->message = $request->message;
        $data->rating = $request->rating;
        $data->save();
    }


    //GET All Unverified Testimonial
    public function showUnverified(){
        $data = TestimonyModel::where("isVerified","=",0)->get();
        return response()->json($data);
    }


    //GET Verified Testimonials By Number
    public function showVerifiedByNumber($num){
        $count = TestimonyModel::where([["isVerified","=",1],["rating","=",5]])->count();

        if($count < $num){
            return;
        }
        else{
            $data = TestimonyModel::where([["isVerified","=",1],["rating","=",5]])->take($num)->get();
            return response()->json($data);
        }
       
    }

    //UPDATE isVerified to 1
    public function updateToVerified($id)
    {
        $data = TestimonyModel::find($id);
        $data->isVerified = 1;
        $data->save();
    }

    //DELETE a testimonial by ID
    public function destroy($id)
    {   
        $data = TestimonyModel::find($id);
        $data->delete();
    }
}
