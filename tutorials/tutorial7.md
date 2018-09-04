# How to use VForm for Back-end Error Handling in Laravel?

1. Install VForm using npm
2. Import Installed Modules to the app.js
3. Customize User.vue component

Step 1:

By using following npm command its very easy to install it

```
npm i axios vform

or (i is the abbreviation of install for npm)

npm install axios vform
```

Step 2:

Import the vform modules to the app.js using following lines

```
import { Form, HasError, AlertError } from "vform";

window.Form = Form; //to make it global
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
```

Step 3:

To check if there is an error in components we have to add some attributes to our form elements as follows:

~~~~

    <div class="form-group">
        <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid':form.errors.has('name') }" placeholder="Name">
        <has-error :form="form" field="name"></has-error>
    </div>

~~~~

In the code above, we have added :class attribute to the element to be sure that the error is checked. If there is an error thene the error will be added to the "<has-error>" component automatically.

1. Users.vue -[here](../resources/assets/js/components/Users.vue)
