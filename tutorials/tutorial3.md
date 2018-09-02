# How to Logout in Laravel Using Vue?


1. Check the request method for logout
2. Create required fields for logout in master layout

Step 1:

To check the request method for logout route run the command as follows

~~~~

php artisan route:list

~~~~

This command basically shows all the routes in application and their required methods as well

Step 2:

To logout there are many ways to do in laravel but we will use a default method that comes in laravel.

In Master Layout we have to add those lines

~~~~

          <a class="nav-link" href="{{ route('logout') }}"
              onclick="event.preventDefault();
              document.getElementById('logout-form').submit();">              

              <p>Logout</p>

              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
              </form>
          </a>
~~~~

How does it work? As we all know whenever you click to <a> tag if href is defined than you send a request to the defined url. Here as you can see we have onclick method which uses event.preventDefault(). that means whenever you click the <a> tag it prevents the action and the page is not redirected not opened in the new tab. 

Also we have document.getElementById('logout-form').submit(); as well, so whenever you click the tag it prevents the action but it submits the form with an id "logout-form". This form submitted to the route called 'logout' with an method="POST" which is logout route needs.

# How To Define Colors in SASS?

In Laravel Sass is comes in as default. So If you know how to use it, its very simple to define css variables.

## Steps to use SASS Variables

1. Go to the sass document and define the classes
2. Customize Master Layout

Step 1: 

The sass document is found in resources/assets/sass.

There are two different sass documents but we will use _variablas.scss

Lets create classes for html elements and give color to them.

~~~~

.blue {
    color: $blue;
}
.indigo {
    color: $indigo;
}
.purple {
    color: $purple;
}
.pink {
    color: $pink;
}
.red {
    color: $red;
}
.orange {
    color: $orange;
}
.yellow {
    color: $yellow;
}
.green {
    color: $green;
}
.teal {
    color: $teal;
}
.cyan {
    color: $cyan;
}

~~~~

Step 2:

Customize the master layout and add color classes to some elements

Customized master layout - [Link](../resources/views/layouts/master.blade.php)


