<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Traits\GeneralTrait;
use Illuminate\Support\Facades\Validator;
//use Illuminate\Contracts\Routing\ResponseFactory;

class BookController extends Controller
{
    
    use GeneralTrait;
        //--------------------------------------------------------------------------------

        public function index(){
            
            $books = Book::all();
           // return response()->json($books);
            return $this -> returnData('books',$books);
        }   


        //--------------------------------------------------------------------------------

        public function store(Request $request){
            
            $this->validateBook($request);

            $book = Book::create([
                'title' => $request->title,
                'author' => $request->author,
                'publisher' => $request->publisher,
                'description' => $request->description,
                'price' => $request->price,
                'rating' => $request->rating,
                'isAvailable' => 1,
                'numberOfCopies' => $request->numberOfCopies,
                'user_id' => $request->user_id,
                'category_id' => $request->category_id
            ]);

            return $this->returnSuccessMessage("books saved successfully");
        }

        //--------------------------------------------------------------------------------

        public function show($id){
                $book = Book::findOrFail($id);
                return $book->toJson();
        }

        //--------------------------------------------------------------------------------

        public function showByCategory($category){
            $category_id = Category::where('categoryName', $category)->select('id')->limit(1)->get();
            $books = Book::where('category_id', $category_id)->orderBy('created_at', 'desc')->get();
            return $books->toJson();
        }
    

        //--------------------------------------------------------------------------------

        public function delete($id){

            $res = Book::where('id',$id)->delete();

            if ($res) {
                return $this->returnSuccessMessage("book deleted successfully");

            } else {
                return $this->returnError("book can't be deleted", 5000);
            }
        }

         
        //--------------------------------------------------------------------------------

        public function validateBook(Request $request){

            $rules =[
                 // bail :  stop running validation rules on an attribute after the first validation failure
                'title' => 'bail|required|max:255|unique:books',
                'author' => 'required',
                'publisher' => 'nullable',
                'description' => 'required',
                'price' => 'required',
                'rating' => 'nullable',
                'numberOfCopies' => 'required',
                'category' => 'required'
            ];


            $validation = Validator::make($request->all(), $rules);
            
            if ($validation->fails()) {
                $code = $this->returnCodeAccordingToInput($validation);
                return $this->returnValidationError($code, $validation);
            }
        }






}
