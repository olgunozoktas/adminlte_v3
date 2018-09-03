# How To Create An Event?

1. Go to the app.js and create an vue instance
2. Go to the custom component and emit the event

Step 1:

In this step we will create an global Vue instance so we can access it in any component in application

So add those lines

~~~~

//let Fire = new Vue();
//window.Fire = Fire;
window.Fire = new Vue();

~~~~

Step 2:

Add those lines to the Users.vue component to emit an event

~~~~

In createUser() ....
Fire.$emit('AfterCreate');
....

In mounted()
Fire.$on('AfterCreate', () => {
	this.loadUsers();
});

~~~~

So basically whenever user click to the submit button then an event called AfterCreate will be created. 
Later on the mounted() $on function will run the loadUsers() method automatically. 

1. Users.vue - [Link](../resources/assets/js/components/Users.vue)
2. app.js - [Link](../resources/assets/js/app.js)