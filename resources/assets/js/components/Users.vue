<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users Table</h3>

                        <div class="card-tools">
                            <button class="btn btn-success" @click="newModal">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                        </div>

                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Registered At</th>
                                <th>Modify</th>
                            </tr>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id}}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.type | upText}}</td>
                                <td>{{ user.created_at | myDate}}</td>
                                <td>
                                    <!-- @click is an event function for vue -->
                                    <a href="#" @click="editModal(user)"> <i class="fa fa-edit blue"></i></a>
                                    <a href="#" @click="deleteUser(user.id)"> <i class="fa fa-trash red"></i></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div><!-- /.row -->

        <!-- Modal -->
        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNew">Add New</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!-- @submit.prevent="createUser" means that whenever form submitted prevent it to the refresh the page and
                call the function createUser -->
                    <form @submit.prevent="createUser">
                        <div class="modal-body">
                            <!-- <form>-->
                            <!-- everything that you will write in the form will be send to the form object that we created -->
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid':form.errors.has('name') }"
                                    placeholder="Name">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid':form.errors.has('email') }"
                                    placeholder="admin@me.com">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.bio" type="bio" name="bio" class="form-control" :class="{ 'is-invalid':form.errors.has('bio') }"
                                    placeholder="Short bio for user (Optional)"></textarea>
                                <has-error :form="form" field="bio"></has-error>
                            </div>
                            <div class="form-group">
                                <select v-model="form.type" name="type" id="type" class="form-control" :class="{ 'is-invalid':form.errors.has('type') }">
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard User</option>
                                    <option value="author">Author</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.password" type="password" name="password" class="form-control" :class="{ 'is-invalid':form.errors.has('password') }"
                                    data-value="*****">
                                <has-error :form="form" field="password"></has-error>
                            </div>
                            <!-- </form> -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                //object
                users: {},
                form: new Form({
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

            loadUsers() {
                //function(data) same as this
                axios.get('api/user').then(({ data }) => (this.users = data.data));
            },

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
                    this.$Progress.fail();
                });

            },

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
            },

            newModal() {
                this.form.clear(); //to remove the errors if found before
                this.form.reset(); //to remove the all entered values before
                $('#addNew').modal('show');
            },

            editModal(user) {
                this.form.clear();
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(user); /* It takes all value from the user */

            }
        },

        mounted() {
            this.loadUsers();
            Fire.$on('AfterCreate', () => {
                this.loadUsers();
            });
            //setInterval(this.loadUsers(), 3000); //setInterval sends the request in every defined second
            //setInterval(() => this.loadUsers(), 3000);
        }
    }
</script>