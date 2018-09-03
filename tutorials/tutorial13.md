# How to use Sweet Aler?

1. Install it through npm
2. Import modules to the app.js
3. Call it in the component

Step 1:

Use the following npm command to install it

~~~~

npm install sweetalert2 --save

~~~~

Step 2: 

Import the installed modules in app.js as follows

~~~~

/* Sweet Alert */
import swal from "sweetalert2";
window.swal = swal;

//this is the code to create its features
const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

//make it global to use in anywhere in application
window.toast = toast;

~~~~

Step 3:

Call it in the component whenever the button is clicked

Lets add this line to the Users.vue component

~~~~

toast({
	type: 'success',
	title: 'User Created Succesfully'
})

~~~~

# How to hide the modal after button submitted?

1. Add the jquery selector

Step 1:

Add this selector to the Users.vue component

~~~~

$('#addNew').modal('hide');

~~~~