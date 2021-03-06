<?php


// home
Route::get("/", "HomeController@index");


// registration
Route::post("auth/register", "Auth\AuthController@postRegister");


// authentication
Route::post("auth/login", "Auth\AuthController@postLogin");
Route::get("auth/logout", "Auth\AuthController@getLogout");


// password reset link request routes
Route::post("password/email", "Auth\PasswordController@postEmail");


// password reset routes
Route::get("password/reset/{token}", "HomeController@getReset");
Route::post("password/reset", "Auth\PasswordController@postReset");


// user rest api
// Route::get("user/list", ['middleware' => 'auth'], "UserController@getUserList");


// article rest api
Route::get("article/details/{url}", [
                "middleware"    => "auth",
                "uses"          => "ArticleController@getArticleDetails"
            ])->where("url", "(.*)");
