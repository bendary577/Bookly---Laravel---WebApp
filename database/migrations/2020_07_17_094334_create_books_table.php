<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::dropIfExists('books');
            Schema::create('books', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('title');
                $table->string('author');
                $table->string('publisher')->nullable();
                $table->text('description');
                $table->integer('numberOfCopies');
                $table->boolean('isAvailable')->default(1);
                $table->double('price',8,2);
                $table->tinyInteger('rating')->nullable();
                $table->timestamps();
                $table->unsignedBigInteger('user_id')->nullable();
                $table->unsignedBigInteger('category_id')->nullable();

                //references the users related to each book
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            });

            //tables must migrate first, then reference the foreign keys
            // Schema::table('books', function($table){
                
                
            // });
    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
