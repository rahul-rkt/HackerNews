<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("articles", function (Blueprint $table) {
            $table->increments("id");
            $table->string("url")->unique();
            $table->string("title");
            $table->string("excerpt")->nullable();
            $table->string("comments")->nullable();
            $table->enum("category", ["Design", "Coding", "Internet of Things", "News"]);
            $table->boolean("sfw");
            $table->integer("author")->unsigned();
            $table->foreign("author")->references("id")->on("users");
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
        Schema::drop("articles");
    }
}
