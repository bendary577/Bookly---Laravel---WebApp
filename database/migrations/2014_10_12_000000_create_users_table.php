<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::dropIfExists('users');
            Schema::create('users', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->bigIncrements('id');;
                $table->char('firstName', 25);
                $table->char('secondName', 25);
                $table->string('email')->unique();
                $table->string('password');
                $table->string('address');
                $table->char('phoneNumber', 11);
                $table->string('gender');
                $table->timestamp('email_verified_at')->nullable();
                $table->rememberToken();
                $table->timestamps();
            });
         
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
