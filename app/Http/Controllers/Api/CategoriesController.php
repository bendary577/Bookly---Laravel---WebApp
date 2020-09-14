<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Traits\GeneralTrait;


class CategoriesController extends Controller
{
    use GeneralTrait;

    public function index()
    {
        $categories = Categories::all();
            return $this -> returnData('categories',$categories);
    }

    
    
    public function showById($id)
    {
        //
    }

    public function showByName($name)
    {
        //
    }

    
}
