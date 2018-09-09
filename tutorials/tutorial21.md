# How To Install Laravel Passport for API Auth?

Step 1: Use the following composer command to install it to the machine

~~~~

composer require laravel/passport

~~~~

Passport is used basically for API Authentication and big applications like Google, Instagram and some other to authorize the users by token who access to the api. In this application we will use JWT to authenticate our users.

After the installation is succesfully completed then we need to complete our migrations. So whenever we call the migrate command in **artisan** it will create the tables for the api clients and tokens in the database.

Step 2: Lets run the following **artisan** command to create the required tables

~~~~

php artisan migrate

~~~~

After that we need to create encryption keys to generate secure access tokens for the api users.

Step 3: To create encryption keys we need to use another command for **passport** as follows

~~~~

php artisan passport:install

~~~~

As mentioned above this command will create encryption keys to generate secure access tokens for the api users. In addition, it will create "personal access" and "password grant" clients which will be used to generate access tokens.

After the installation is completed it will create two users with client secret keys, so we need to store those keys somewhere to use them later on.

Here i am just gonna paste my keys, your keys probably will be different than those;

**
Encryption keys generated successfully.
Personal access client created successfully.
Client ID: 1
Client Secret: CDnkwuPWB2aX67gs9L26Cj3LG2oHDN0yuviq36RK
Password grant client created successfully.
Client ID: 2
Client Secret: b6dLrORcASbyFBWuKJsrYADRSl7BUyK5UYDf5biS
**

Step 4: Now we need to add some line of codes to the our **User** model to make sure that users can be authenticated in API.

So for this purpose add those lines to the **User.php**

~~~~

Add Laravel Passport **HasApiTokens** function to the User.model by adding the following line.
use Laravel\Passport\HasApiTokens;

...
Class User ....

Later on add the HasApiTokens to the class.
use HasApiTokens, Notifiable;
~~~~

Step 5: We need to add the Passport::routes() to the our AppServiceProvider to make sure that the routes are registered to necessarry issue access tokens and revoke access tokens, clients, and personal access tokens.

Go to the AuthServiceProdever.php and add those lines as follows:

~~~~

Add Laravel\Passport\Passport; function to the AppServiceProder.php to make user that Passport method can be used.

.....

    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
~~~~

Step 6: To make sure that all the APIs are guarded by passport we need to set the driver option of the api authentication guard to the passport in the config/auth.php

Lets add the following code or change it to this in config/auth.php complete our passport guard for APIs.

~~~~

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'api' => [
            'driver' => 'passport',
            'provider' => 'users',
        ],
    ],
~~~~

Quickstart For Frontend 

Step 1: For test purposes and even can be used in production as well, we will install Passport's default Vue.js components by using the following command.

Basically this command will create some Vue.js components for us that we can use for APIs.

~~~~

php artisan vendor:publish --tag=passport-components

~~~~

Step 2: Lets register the components in the app.js to make sure that we can use those components whenever we want.

Add the following lines to the app.js for register components.

~~~~

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

~~~~

Step 3: Create a new route to show those components

To create a new route we will use the same format that we used before as like as follows:

~~~~

let routes = [
    { path: "/dashboard", component: require("./components/Dashboard.vue") },
    { path: "/developer", component: require("./components/Developer.vue") }, //NEW ONE
    { path: "/users", component: require("./components/Users.vue") },
    { path: "/profile", component: require("./components/Profile.vue") }
];

~~~~

Basically, we created a route here which redirects to the /developer page. But of course we need to create a page or component for this purpose.

Step 4: Lets create the Developer.vue component in the /components folder.

In the Developer.vue we want to show the components that Passport generated for use, so lets add those lines to it.

~~~~

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                    <passport-clients></passport-clients>
                    <passport-authorized-clients></passport-authorized-clients>
                    <passport-personal-access-tokens></passport-personal-access-tokens>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

~~~~

Actually, here we just called the global components that we registered in the app.js

Stpe 5: Lets create a link which goes to the /developer page.

To create the link we have to add those lines to the master.blade.php - [Link](../resources/views/layouts/master.blad.php#L105-112)

~~~~

          <li class="nav-item">
            <router-link to="/developer" class="nav-link">
              <i class="nav-icon fas fa-cogs"></i>
              <p>
                Developer
              </p>
            </router-link>
          </li>
~~~~

Thats all for this tutorial.