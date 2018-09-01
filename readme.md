# AdminLTE 3.0 + Laravel 5.7 Full Project

## How to Install AdminLTE 3.0 ?

1. Install Npm Modules
2. Install AdminLTE 3.0

Step 1:

```
npm install
```

Step 2:

```
npm install admin-lte@v3.0.0-alpha.2 --save
```

## First SetUp

1. Create a database
2. Change .evn credentials
3. Create Auth Files
4. Run Migrations
5. Register an user
6. Create a master Layouts in resources
7. Copy & Paste AdminLTE 3.0 Starter Template
8. Make Changes Master Layout
9. Add Bootstrap & AdminLTE JS files in bootstrap.js
10. Add AdminLTE 3.0 SCSS Files to the app.scss
11. Run Npm css compiler
12. Install fontawesome
13. Add FontAwesome SCSS Files to the app.scss

Step 1:

I prefer to use mysql cli, it doesn't matter if you would like to use phpmyadmin its okey

```
mysql -u root -p
Enter password: ******

mysql > create database larastart;
mysql > quit
```

Step 2:

Change DATABASE CREDENTIALS in .evn

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=larastart
DB_USERNAME=root
DB_PASSWORD=123456
```

Step 3:

```
php artisan make:auth
```

Step 4:

```
php artisan migrate

Optional: If you are using Windows OS and get an error, follow the steps as defined as below

1. Go to AppServiceProvider.php
2. Add Those Lines
3. Run Migrations Again

use Illuminate\Support\Facades\Schema;

....

public function boot() {
	Schema::defaultStringLength(191);
}

To avoid to get an error about table is exists. Use the following artisan command

php artisan migrate:fresh

It will remove all migrations and re-install them
```

Step 5:

Run the following command to run your application

```
php artisan serve

And go to 127.0.0.1:8000/register page to register user
```

Step 6:

Create a layout in resources/layouts called master.blade.php (name is does not important)

Step 7:

Copy all from the starter-template.html to master.blade.php
[Link](resources/views/layouts/starter-template.html)

Step 8:

Make some changes on master.blade.php
Add those lines

```
For css: <link rel="stylesheet" href="css/app.css"/> before body tag
For js: <script src="js/app.js"></script> just before the </body> closing tag to make the page faster
```

Step 9:

Go to the resources/assets/js/app.js File and add those lines

```
require("bootstrap");
require("admin-lte");

Just after catch(e) {}
```

Step 10:

Go to the resources/assets/css/app.scss File and add those line

```
@import "~admin-lte/dist/css/adminlte.css";

Just after the @import "~bootstrap..."
```

Step 11:

Run the Npm Compiler to compile the app.scsss

```
npm run wath
```

Step 12:

Install the font awesome using cli

```
npm install @fortawesome/fontawesome-free
```

Step 13:

Add those lines to the app.scss

```
After the variables
$fa-font-path: "../webfonts";

After the bootstrap
@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free/scss/solid.scss";
@import "~@fortawesome/fontawesome-free/scss/brands.scss";
```

Step 14:

You can find the customized master.blade.php [here](resources/views/layout/starter-customized.html)
