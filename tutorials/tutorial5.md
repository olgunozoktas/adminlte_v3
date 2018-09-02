# Custom Component For Management (Users)

1. Go to app.js and add a new route for /users
2. Create the custom component
3. Bind the router-link component to the master layout
4. Enjoy :)

Step 1: 

Add this line to the resources/assets/js/app.js

~~~~

    { path: "/users", component: require("./components/Users.vue") },

~~~~

Step 2:

Go to the resources/assets/js/components/
And create a new component here called Users.vue

The components can be found [here](../resources/assets/js/components/Users.vue)

Step 3:

Go to the master.layout.php and add those lines

~~~~

    <router-link to="/users" class="nav-link">
            <i class="fas fa-users nav-icon"></i>
            <p>Users</p>
    </router-link>

~~~~

Binded router components can be found [here](../resources/views/layouts/master.blade.php)

Step 4: Enjoy :)