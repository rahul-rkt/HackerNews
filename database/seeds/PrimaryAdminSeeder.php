<?php

use Illuminate\Database\Seeder;

class PrimaryAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("users")->insert([
            "name" => "R",
            "email" => "rahul.rkt@gmail.com",
            "password" => bcrypt(env("HN_ADMIN")),
            "level" => 1,
            "pic" => "https://dl.dropboxusercontent.com/s/srnkgtya38vdqqo/Me_500.png"
        ]);
    }
}
