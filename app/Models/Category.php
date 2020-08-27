<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //

    protected $fillables = [
        'categoryName'
    ];

    protected $hidden = [

    ];

    public function book(){
        return $this->hasMany('App\Models\Book');
    }


}
