# How to Clear Errors & Reset Entered Data?

Step 1: Delete btn-toggle & data-target attributes of the button which opens the modal

In the Add New Button we have data-toggle & data-target attributes so we need to delete them. Instead of them we will create our @click event to open the modal.

So add the following line to the Add New Button in the Users.vue

~~~~

<button class="btn btn-success" @click="newModal">Add New <i class="fas fa-user-plus fa-fw"></i></button>

~~~~

Basically whenever this button is clicked then the newModal function will be called. 

Step 2: Create a newModal function in **script** tag of the Users.vue component

We want to open the modal when this function is called so lets add the following code to the **script** tag's method object.

~~~~

            newModal() {
                this.form.clear(); //to remove the errors if found before
                this.form.reset(); //to remove the all entered values before
                $('#addNew').modal('show');
            },
~~~~

# How to get User Information and Place them to the modal whenever its opened?

Step 1: We have to create an @click event for the edit button so whenever its clicked it will call the editModal function and it will put all the user data to the form fields.

Lets add @click event to the edit button as follows:

~~~~

<a href="#" @click="editModal(user)"> <i class="fa fa-edit blue"></i></a>

~~~~

In this @click event whenever this element is clicked it will send the user data directly to the editModal function.
The user data is comes from the for loop. If you check the code in the [Users.vue](../resources/assets/js/components/Users.vue#L33) you will understand how exactly it works.

Step 2: Create a function called editModal in **script** tag of the Users.vue component

In this function we have to put the sent user's value to the form so can use the following lines.

~~~~

			editModal(user) {
                this.form.clear();
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(user); /* It takes all value from the user */

            }
~~~~

In this function we used pretty much the same thing as we used in the newModal function but here as an extra we used this.form.fill(user) function as well. This function is found in the vform as default. So whenever we send the user as an parameter to it. It will put all the relational data to the fields like.

User has an name,email,bio,type fields and also our form object is also has those fields as well. So it will directly will put those values to the fields.

