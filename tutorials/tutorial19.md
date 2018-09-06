# How to Switch Between Edit Modal & Create Modal?

Step 1: Lets add a variable called editMode to the data() function in the Users.vue component.

In this component the aim to add this new variable to check whether the user data wanted to be edited or new user wanted to be added to the database.

Add this line as [follows:](..resources/assets/js/components/Users.vue#L111)

~~~~

editmode: false,

~~~~

In initial its value is false.

Step 2: Lets add some logic to the newModal() function & editModal() function as well that we previously added to the application.

~~~~

            newModal() {
                this.editmode = false;
                this.form.clear(); //to remove the errors if found before
                this.form.reset(); //to remove the all entered values before
                $('#addNew').modal('show');
            },
~~~~

In this logic whenever user clicks to the Add New button if previously editmode was changed to the true then it will automaticaly will change to the false again. So the related modal will be shown.

~~~~

            editModal(user) {
                this.editmode = true;
                this.form.clear();
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(user); /* It takes all value from the user */

            },
~~~~

In this case, whenever user clicks to the edit button or icon they both are acceptable then it will the editmodal function and editmode will be change to the true.

Up to here everything is okey how can we show edit button in edit modal or add new button in add new modal?

Step 3: To show different buttons in different modals we have to use Vue.js v-show attribute.

Basically we will add a new button to our component as follows and we will add v-show attribute to both buttons.

~~~~

<button v-show="editmode" type="submit" class="btn btn-primary">Update</button>
<button v-show="!editmode" type="submit" class="btn btn-success">Create</button>

~~~~

Basically if in this component the editmode variable is true then it will show the Update button otherwise it will show the Create button.

Okey everyting is clear but the problem we didn't add any function to those buttons so whenever they submitted how can we differentiate it?

Alright! Whenever the buttons are clicked actually there is no difference until we wrote a logic

Step 4: To differentiate the buttons we have to add a function to our **form** element not to the button.

So we will write a logic to our form element as follows:

~~~~

<form @submit.prevent="editmode ? updateUser() :createUser()">

~~~~

Basically we have used an ternary operator here that means if the editmode is true and the form submitted then it will call the updateUser() function otherwise it will call the createUser() function.

Step 5: The Last Changes that we will make to show the related titles for the modal. If Add New Button Clicked then we have to show Add New title otherwise we have to show Update User's Info title.

For this purpose as we did in before while adding different button we have to add different heading tags as follows:

~~~~

<h5 class="modal-title" v-show="!editmode" id="addNew">Add New</h5>
<h5 class="modal-title" v-show="editmode" id="addNew">Update User's Info</h5>

~~~~

