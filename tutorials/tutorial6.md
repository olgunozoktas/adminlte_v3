# How to use VForm for Back-end Error Handling in Laravel?

1. Install VForm using npm 
2. Import Installed Modules to the app.js
3. Customize User.vue component

Step 1:

By using following npm command its very easy to install it

~~~~

npm i axios vform

or (i is the abbreviation of install for npm)

npm install axios vform

~~~~

Step 2:

Import the vform modules to the app.js using following lines

~~~~

import { Form, HasError, AlertError } from "vform";

window.Form = Form; //to make it global
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

~~~~

Step 3:

Customize the User.vue components.

Customized file is [here](../resources/assets/js/components/User.vue)
