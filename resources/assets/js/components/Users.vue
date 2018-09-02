<template>
<div class="container">
 <div class="row mt-5">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Users Table</h3>

                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add New <i class="fas fa-user-plus fa-fw"></i></button>
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
                    <th>Modify</th>
                  </tr>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><span class="tag tag-success">Approved</span></td>
                    <td>
                        <a href="#"> <i class="fa fa-edit blue"></i></a>
                        <a href="#"> <i class="fa fa-trash red"></i></a>
                        </td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td><span class="tag tag-warning">Pending</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
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
                        <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid':form.errors.has('name') }" placeholder="Name">
                        <has-error :form="form" field="name"></has-error>
                    </div>
                     <div class="form-group">
                        <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid':form.errors.has('email') }" placeholder="admin@me.com">
                        <has-error :form="form" field="email"></has-error>
                    </div>
                    <div class="form-group">
                        <textarea v-model="form.bio" type="bio" name="bio" class="form-control" :class="{ 'is-invalid':form.errors.has('bio') }" placeholder="Short bio for user (Optional)"></textarea>
                        <has-error :form="form" field="bio"></has-error>
                    </div>
                     <div class="form-group">
                        <select v-model="form.type" name="type" id="type" class="form-control" :class="{ 'is-invalid':form.errors.has('type') }">
                            <option value="">Select User Role</option>
                            <option value="">Admin</option>
                            <option value="">Standard User</option>
                            <option value="">Author</option>
                        </select>
                        <has-error :form="form" field="type"></has-error>
                    </div>
                    <div class="form-group">
                        <input v-model="form.password" type="password" name="password" class="form-control" :class="{ 'is-invalid':form.errors.has('password') }" data-value="*****">
                        <has-error :form="form" field="password"></has-error>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                <!-- </form> -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Create</button>
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
            createUser(){
                // Submit the form via a Post Request
                this.form.post('api/user');
                //this.form represents all the values in the form
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
