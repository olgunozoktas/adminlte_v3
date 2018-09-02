# How to Add Profile Picture & User Type & Biography in Laravel?

1. Create new fields for user in database

Step 1:

Go to the database/migrations folder and in this folder find the migrations file called
create_users_table.php

In this file add new fields to the users table in public function up() method.

~~~~

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('type')->default('user'); //new line
            $table->mediumText('bio')->nullable(); //new line can be empty
            $table->string('photo')->defaul('profile.png'); //new line
            $table->rememberToken();
            $table->timestamps();
        });
    }

~~~~

And now we can write command to migrate this table again, but be sure that all of the data will be removed.

~~~~

php artisan migrate:fresh

~~~~
