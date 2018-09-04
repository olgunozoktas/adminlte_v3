# What is the problem?

In our application you may or may not noticed that there is a problem for vue-routers. Because vue-router default mode is hash mode that means whenever you go any page it puts '#' after its url.

So for example if you click to the users button in navigation to go to the **users** page you expected to go **localhost:8000/users** but if you do not use history mode then it will redirected to the **localhost:8000/home#/users**.

And if you try to go **localhost:8000/users** by typing url on the webpage by yourself you will see an error.

Okey so now learn how to get rid of this error.

# How To Use HTML5 History Mode To Solve The Problem?

1. Add history mode to the routers in app.js
2. Add a special regex (regular expression) in web.php

Step 1:

In app.js which we created our routers we have to put just one line to the route.

```
mode: 'history',
```

By doing so, the router instance will be look like as follows:

```
const router = new VueRouter({
	mode: 'history',
	routes
})
```

Step 2:

Up to now everything is almost perfect and for example whenever you click Users button it will redirected to the **localhost:8000/users**. But the problem is still we are getting error because in the background the related path(url) is not matching with any route in web.php.

So to fix this problem we need to add a specific regex (regular expression) in web.php

Lets go to the web.php and add a route after all other routes

```
Route::get('{path}',"HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
```

Basically whenever you want to go any path(url) on the application this route will be triggered and the regex will redirect automatically to the requested route if its existed or not. If it is not existed then you will see them same error.

Hint: To see the active routes, use the following command

```
php artisan route:list
```

If you run this command probably you will see that you have route called api/user which actually represents our users page api. Because the users page gets all the data from this api.

1. app.js - [Link](../resources/assets/js/app.js)

# How to Detect Active Route?

As you remember in tutorial 2 we already use "<router-link>" component instead of "<a>" tag. So for example whenever you click users button in the navigation it will redirected to the **localhost:8000/users** and users page will be included in "<router-view>" component. By doing so as a default "<router-link>" component will add a class itself as named as "router-link-exact-active" and it has a default color.

If you would like to change the default the componento make sure that you are in the menu. Go to the app.scss file.

app.scss file is in the resources/assets/sass/app.scss and add those lines

~~~
.router-link-exact-active {
	background-color: #3f51b5; //or whatever color you want
	color: #fff //text color
}

~~~

1. app.scss - [Link](../resources/assets/sass/app.scss)
