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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('username')->unique();
            $table->string('phone_no')->unique();
            $table->string('email')->unique();
            $table->string('password');

            $table->unsignedTinyInteger('status')->default(0)->comment('0 for inactive, 1 for active and 2 for ban');
            $table->unsignedInteger('division_id')->comment('Division table ID');
            $table->unsignedInteger('district_id')->comment('District table ID');

            $table->string('street_address');
            $table->string('avatar')->nullable();
            $table->text('shipping_address')->nullable();
            $table->string('ip_address')->nullable();

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
