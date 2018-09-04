# How to Delete User With Ajax & Show Result in SweetAlert Modal?

1. Add a @click event to any element in the application to show sweetalert confirmation modal
2. Add delete function in Users.vue component

Step 1:

We want to show a confirmation sweetalert modal whenever a user wanted to deleted.

So we have to add this @click event to the an **a** tag of the delete icon

~~~~

<a href="#" @click="deleteUser(user.id)"> <i class="fa fa-trash red"></i></a>

~~~~

In the event we said whenever click then go and call the function called deleteUser and as parameter send the user id.

Step 2:

Everything is okey now but if don't write the deleteUser() function then we cannot show modal and we will get javascript error.

So lets create the deleteUser() function in **script** tag in the Users.vue component.

~~~~

            deleteUser(id) {
                
                swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {

                    // Send request to the server
                    if (result.value) {
                        this.form.delete('api/user/'+id).then((result) => {  
                            console.log(result);                      
                            swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                            Fire.$emit('AfterCreate');
                        }).catch(() => {
                            swal("Failed!", "There was something wrong.", "warning");
                        });
                    }
                })
            }
        },

~~~~

Basically whenever this function called it takes user id as paremeter and it will directly show the sweetalert modal to the user. If **Yes,Delete it** button is clicked it will sent a request to the **localhost:8000/api/users/{id}** as a delete method. When the request is arrived to the api it will be processed in API\UserController.php - destroy function. If everything is okey then Your file has been deleted message will be shown. Otherwise it will show an error.

The catch and then promises function are works as same as the creating user promise functions. If there is no error then() will run otherwise catch() will run.

1. Users.vue - [Link](../resources/assets/js/components/Users.vue)