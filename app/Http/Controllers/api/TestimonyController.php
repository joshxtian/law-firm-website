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

    //Query: SELECT * FROM 'testimony_models'

    public function index()
    {
        $data = TestimonyModel::all();
        return $data;
    }



    //CREATE A Testimonial

    //Query: INSERT INTO 'testimony_models' ('name','email','message','rating') VALUES ('value1','value2','value3','value4')

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

     //Query: SELECT * FROM 'testimony_models' WHERE 'isVerified' = 0

    public function showUnverified(){
        $data = TestimonyModel::where("isVerified","=",0)->get();
        return response()->json($data);
    }


    //GET Verified Testimonials By Number

     //Query: SELECT * FROM 'testimony_models' WHERE 'isVerified' = 1

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

    //Query: SELECT * FROM 'testimony_models' SET 'isVerified' = [1] WHERE id = request.ID

    public function updateToVerified($id)
    {
        $data = TestimonyModel::find($id);
        $data->isVerified = 1;
        $data->save();
    }

    //DELETE a testimonial by ID

    //Query: DELETE FROM 'testimony_models' WHERE id = request.ID

    public function destroy($id)
    {   
        $data = TestimonyModel::find($id);
        $data->delete();
    }
}
