# How to Configure Vue Router in Laravel?

Vue Router is not included in Vue.js as default so we have to install it manual.

## Steps For Installation & Implementation

1. Install Vue-Router Modules
2. Import VueRouter in app.js
3. Create and Add Custom Routes
4. Create Custom Components in resources/assets/js/components
5. Make Changes in Master Layout to use Routes

Step 1:

Install Vue-Router Modules using npm as follows:

```
npm intall vue-router
```

Step 2:

Add the following lines to the app.js to import the installed VueRouter Module

```
/* Vue Routers -- We will write them to here */

import VueRouter from "vue-router";
Vue.use(VueRouter);
```

Step 3:

Now we have to create our custom routes to send request in the application so lets add those lines as well

```
// These are the our custom routes. (path is define the route) and (component is define custom components
will return as respond to the request on the route)
let routes = [
    { path: "/dashboard", component: require("./components/Dashboard.vue") },
    { path: "/profile", component: require("./components/Profile.vue") }
];

// We have to create a VueRouter object to store all routes, by doing so we will be able to send request to those routes
const router = new VueRouter({
    routes // short for 'routes: routes'
});
```

Step 4:

Now we have to create some custom components to response to the requests.
So, We will copy 2x the ExampleComponent.vue from resources/assets/js/components and we will give them the names as we defined in step 3
Ex: For component: require("./components/Dashboard.vue") we need a component called Dashboard.vue

Step 5:

To show the route components in our master page we have to include this lines

````
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <router-view></router-view> //the line we included
  </div>
  <!-- /.content-wrapper -->
````
To define the routes in master.layout.php add those lines as well, instead of "<a>"" tag we have to use "<route-link></route-link>" tag

~~~~

    <router-link to="/dashboard" class="nav-link">
        <i class="nav-icon fas fa-tachometer-alt blue"></i>
        <p>
          Dashboard
        </p>
    </router-link>

    <router-link to="/profile" class="nav-link">
        <i class="nav-icon fas fa-user"></i>
        <p>
            Profile
        </p>
    </router-link>

~~~~


"<router-view></router-view>" is an default component defined in the vue.js so whenever a request is made through any route it will placed in to that component
Ex: /profile

The Profile.vue component will be placed in to the "<router-view></router-view>" automatically.

1. app.js - [Link](../resources/assets/js/app.js)
2. master.blade.php - [Link](../resources/views/layouts/master.blade.php)

