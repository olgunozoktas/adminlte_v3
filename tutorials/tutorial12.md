# Show Progress Bar to user while creating an account.

1. Install the Open Source Progress Bar Module via npm
2. Import the Installed progress bar modules
3. Add the start and finish functions to the app.js for progress bar
4. Add the progress var components to the master layout

Step 1:

To install the open source progress bar module its easy to use npm cli

~~~~

npm install vue-progressbar --save

~~~~

Step 2:

Here we have to import the installed modules to the app.js to use them

So now lets add those lines to the app.js

~~~~

import VueProgressBar from "vue-progressbar";

~~~~

To use it we need to add other lines as well which i will explain later

~~~~

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "3px"
});

~~~~

Whenever we call the progress bar it will use this template options like its color is going to be green and 3px height.

Step 3:

We will use this prograss bar whenever we click the create button in Users.vue component so we have to add its function in the component.

So lets add those function in methods() field of the component

~~~~

this.$Progress.start();
this.form.post('api/user');
this.$Progress.finish();

~~~~

Step 4:

Add this component views to the master layout so show it whenever its activated.

~~~~

    <vue-progress-bar></vue-progress-bar>

~~~~

1. Users.Vue - [Link](../resources/assets/js/components/User.vue)
2. app.js - [Link](../resources/assets/js/app.js)
3. master.blade.php - [Link](../resources/views/layouts/master.blade.php)
