# How to get user data from the database and display them using vue?

1. Design a function in UserController
2. Design a function in Users.vue
3. Customize component

Step 1:

In the UserController.php we will use index to design the function

Add this line to the index

~~~~

        return User::latest()->paginate(10);

~~~~

Basically whenever this function will called it will return the latests added 10 post if there is more than they will be paginated (later on will implemented)

Step 2:

In Users.vue which is the our custom component we will create a function that load users data.

Add those lines

~~~~

        data() {
            return {
                // here we created an object called users to hold the users
                users: {}, 
                form: new Form ({
                    name: '',
                    email: '',
                    password: '',
                    type: '',
                    bio: '',
                    photo: '',
                    
                })
            }
        },
        methods: { //our functions for this component
        	//we created a function here which sends request to the 'api/user'
            loadUsers() {
                                        //function(data) same as this
                axios.get('api/user').then(({ data }) => (this.users = data.data));
            },

            createUser(){
                // Submit the form via a Post Request
                console.log(this.form);
                this.form.post('api/user');
                //this.form represents all the values in the form
            }
        },
        mounted() {
        	//whenever this component is loaded the function will be called
            this.loadUsers();
        }
    }

~~~~

Step 3:

Add those lines to the component.

~~~~

                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id}}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.type }}</td>
                    <td>{{ user.created_at }}</td>
                    <td>
                        <a href="#"> <i class="fa fa-edit blue"></i></a>
                        <a href="#"> <i class="fa fa-trash red"></i></a>
                        </td>
                  </tr>

~~~~

1. UserController.php - [Link](../app/Http/Controllers/API/UserController.php)
2. Users.vue - [Link](../resources/assets/js/components/Users.vue)