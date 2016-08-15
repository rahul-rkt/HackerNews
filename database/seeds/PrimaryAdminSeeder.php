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
            "name" => env("HN_ADMIN_NAME"),
            "email" => env("HN_ADMIN_EMAIL"),
            "password" => bcrypt(env("HN_ADMIN_PASSWORD")),
            "level" => 1,
            "pic" => env("HN_ADMIN_PIC")
        ]);
    }
}
