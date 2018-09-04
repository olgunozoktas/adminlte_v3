# How to Create API & Resource Controller?

1. Write a command to create api controller
2. Add Route for api in routes/api.php

Step 1:

To create an api controller this is awesome command

~~~~

php artisan make:controler API/UserController --api

~~~~

Step 2:

Add those lines to the api.php to create a route for our api

~~~~

Route::apiResources(['user' => 'API\UserController']);

~~~~

