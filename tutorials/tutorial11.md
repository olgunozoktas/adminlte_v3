# How to create VueJs Filter & Use it?

1. Go to the app.js and create global filter
2. Go to the Custom component and add this filter

Step 1:

In the app.js we have to add those lines to create a global filter

~~~~

//Global Filter -> use it anywhere in application
Vue.filter("upText", function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

~~~~

Basically whenever this filter is used it gets the text and return the first character as upper and others as how they look like before.

Step 2:

To use the filter in VueJs Component is very easy, we just have to put "|" symbol to the any element.

So lets add those lines to the Users.vue

~~~~

<td>{{ user.type | upText}}</td>

~~~~

# How to use MomentJS & What it is?

In Laravel Carbon is a default package that can used to convert the dates to the human understandable format but in JavaScript there is a framework called MomentJs to this.

## How to Install MomentJs?

1. Use npm command to install it
2. Import the installed modules in app.sj
3. Create a filter to use momentjs
4. Add the filter to the custom component

Step 1:

To install the MomentJs The following npm command is very useful and ease

~~~~

npm install moment --save

~~~~

Step 2:

Of course we need to import momentjs modules to the app.js to use them.

So lets import them using following lines

~~~~

import moment from "moment";

~~~~

Step 3:

But the problem this is not enough to use it, so now lets go and create a filter for this, if you like i believe you can write javascript in any file and you can see it as well

Lets create a filter in app.js as following

~~~~

Vue.filter("myDate", function(created_at){
	return moment(created_at).format("MMMM Do YYYY");
});

~~~~

You may wonder why did we used "Do" instead of DD because we want to show in which day it is instead of just "4 , 6, 10" it will show it like "2nd, 4th, 6th" and etc..

Step 4:

Lets add this filter to the Users.vue and use it.

So, lets add the following line

~~~~

<td>{{ user.created_at | myDate}}</td>

~~~~

1. Users.Vue - [Link](../resources/assets/js/components/User.vue)
2. app.js - [Link](../resources/assets/js/app.js)


