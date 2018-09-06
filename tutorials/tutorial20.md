# How to Update User Information With Unique Email Address?

Step 1: In the Last tutorial we have added the function called updateUser() to the **form** element in Users.vue component.

So now lets go and create this function in the **script** tag of the Users.vue component as follows:

~~~~

            updateUser() {
                this.$Progress.start();
                console.log("Editing data");
                this.form.put('api/user/'+this.form.id).then(e => {
                    //success
                    console.log(e.data.message);
                    $('#addNew').modal('hide');
                    swal(
                            'Updated!!',
                            'Information has been updated.',
                            'success'
                    )
                    this.$Progress.finish();
                    Fire.$emit('AfterCreate');
                }).catch(e => {
                    this.$Progress.fail();
                });
            }

~~~~

Basically we created almost the same function as the deleteUser() function. But here is the important variable is the id, becauser we will update the user informations according to the id.

So we need to get the user id from the form but how?  to make this possible we need to add a new variable to the form object that we created in the data() function as follows:

~~~~

                form: new Form({
                    id: '',
                    name: '',
                    email: '',
                    password: '',
                    type: '',
                    bio: '',
                    photo: '',

                })
~~~~

But still how to get the id? As you remember before we have created a function called editModal(user) function.

This functions working logic is very simple whenever user clicks to the any edit button or icon then it gets the user from the for v-loop that we created [here](..resources/assets/js/components/Users.vue#L25) and will send as an parameter to the editModal function.

In this function **this.form.fill(user)** will put all the relational data to the form object that i explained in tutorial [18](tutorial18.md#L60)

I think up to here everything is clear about how we get the user id from the form.

Let me explain this updateUser() function.

In the function we used **this.form.put** method because we have update function in UserController.php and this function requires patch or put request type to run.

And also we have to send the request to this function as in the format /api/users/{id} otherwise another function will run.

Step 2: Lets write an algorithm for update function in UserController.php

In UserController.php we already have this function as an empty so now lets go and add the following code in it.

~~~~

    public function update(Request $request, $id)
    {
        //
        $user = User::findOrFail($id);

        $this->validate($request, [
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,'.$user->id, //that means if this users email is same than its okey
            'password' => 'sometimes|min:6' //sometimes means if its written is okey, if not okey again
        ]);

        $user->update($request->all());
        return ['message' => 'Updated the user info'];
    }

~~~~