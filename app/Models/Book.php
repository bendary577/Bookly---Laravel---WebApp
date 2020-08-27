<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    //

    protected $fillable = [
        'title',
        'author',
        'publisher',
        'description',
        'numberOfCopies',
        'isAvailable',
        'price',
        'rating',
        'user_id',
        'category_id'
    ];

    protected $hidden = [

    ];

    public function category()
    {
        return $this->belongsTo('App\Model\Category', 'category_id', 'category_id');
    }
    

    public function user()
    {
        return $this->belongsTo('App\Model\User', 'user_id', 'user_id');
    }

}
