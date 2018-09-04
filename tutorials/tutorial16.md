# How To Detect If User Succesfully Created?

1. Add Promise Function to the VueJs Component

Step 1:

We want to check if the user is created succesfully so that means we have to use promise function in Users.vue component.

So lets add those lines to the **script** in the component.

~~~~

            createUser() {
                // Submit the form via a Post Request

                console.log(this.form);
                this.$Progress.start();

                //ES6 Promiseses .then().catch()
                this.form.post('api/user').then((value) => {

                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide');

                    toast({
                        type: 'success',
                        title: 'User Created Successfully'
                    })

                    //this.form represents all the values in the form
                    this.$Progress.finish(); 
                }).catch(() => {
                    this.$Progress.fail(); //is used to show fail progress bar (red)
                });

            },
~~~~

So basically, whenever create button is clicked in the Users page actually a request is sent to the **localhost:8000/api/users/** using POST method which includes all the form data. Whenever request is arrived to the api, the function called **store** in API\UserController.php will validate the sent data.

If any error occurs in the validation then as a response 422 status code will be return. This code is actually an error code and it represents that the request cannot be processed and directly .catch() statement will run.

In other case if everything is okey and user created then 200 success code will return as an response and the then() statement will processed.

1. Users.vue - [Link](../resources/assets/js/components/Users.vue)