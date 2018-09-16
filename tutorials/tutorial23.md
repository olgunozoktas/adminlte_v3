# Lets Create User Profile Component

We are going to use this component to update the authenticated users profile, or show the current details of the user.

Step 1: In the the public/assets/js/components folder lets create a vue component called Profile.vue

Here i am not gonna explain everything because thats just an design and lets add those codes to the this profile

~~~~

<style>
.widget-user-header{
    background-position: center center;
    background-size: cover;
    height: 250px !important;
}
.widget-user .card-footer{
    padding: 0;
}
</style>


<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <div class="card card-widget widget-user">
                <!-- Add the bg color to the header using any of the bg-* classes -->
                <div class="widget-user-header text-white" style="background-image:url('./img/photo1.png')">
                    <h3 class="widget-user-username">Elizabeth Pierce</h3>
                    <h5 class="widget-user-desc">Web Designer</h5>
                </div>
                <div class="widget-user-image">
                    <img class="img-circle" src="img/avatar5.png" alt="User Avatar">
                </div>
                <div class="card-footer">
                    <div class="row">
                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                        <h5 class="description-header">3,200</h5>
                        <span class="description-text">SALES</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                        <h5 class="description-header">13,000</h5>
                        <span class="description-text">FOLLOWERS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4">
                        <div class="description-block">
                        <h5 class="description-header">35</h5>
                        <span class="description-text">PRODUCTS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                </div>
            </div>

            <!-- tab -->

            <div class="col-md-12">
                <div class="card">
                    <div class="card-header p-2">
                        <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link" href="#activity" data-toggle="tab">Activity</a></li>
                        <li class="nav-item"><a class="nav-link active show" href="#settings" data-toggle="tab">Settings</a></li>
                        </ul>
                    </div><!-- /.card-header -->
                    <div class="card-body">
                        <div class="tab-content">
                            <!-- Activity Tab -->
                            <div class="tab-pane" id="activity">
                                <h3 class="text-center">Display User Activity</h3>
                            </div>
                            <!-- Setting Tab -->
                            <div class="tab-pane active show" id="settings">
                                <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="inputName" class="col-sm-2 control-label">Name</label>

                                    <div class="col-sm-12">
                                    <input type="text" v-model="form.name" class="form-control" id="inputName" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                                    <div class="col-sm-12">
                                    <input type="email" v-model="form.email" class="form-control" id="inputEmail" placeholder="Email">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                                    <div class="col-sm-12">
                                    <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="photo" class="col-sm-2 control-label">Profile Photo</label>
                                    <div class="col-sm-12">
                                        <input type="file" name="photo" class="form-input">
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label for="passpord" class="col-sm-12 control-label">Passport (leave empty if not changing)</label>

                                    <div class="col-sm-12">
                                    <input type="passpord" class="form-control" id="passpord" placeholder="Passport">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-12">
                                    <button type="submit" class="btn btn-success">Update</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                    </div><!-- /.card-body -->
                </div>
                <!-- /.nav-tabs-custom -->
          </div>
          <!-- end tabs -->
        </div>
    </div>
</template>

~~~~

Basically this is how our profile component will look like.

Step 2: Register this component in app.js to make sure that we can use it whenever we want, otherwise we will not be able to use it.

Add those lines to the routes array in the app.js

~~~~

    { path: "/profile", component: require("./components/Profile.vue") }

~~~~

So now, we can use this component.

Step 3: Lets Fill the form elements with authenticated users informations automatically.

So now, we have to create a **script** for this purpose.

~~~~

<script>
    export default {
        data(){
            return {
                 form: new Form({
                    id:'',
                    name : '',
                    email: '',
                    password: '',
                    type: '',
                    bio: '',
                    photo: ''
                })
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        created() {
            axios.get("api/profile")
            .then(({ data }) => (this.form.fill(data)));
        }
    }
</script>	

~~~~

Basically whenever this form is created means whenever user goes to the /profile page this component will be created automatically and at this time created() function will run and it will send a request to the route ("api/profile") to get the all information of the user. So whenever a response comes from the route it will fill form with the response data.

Step 4: Lets create a route to get all user data

We will create an api route because we are using vue and we have to send the request to the our api.

In the routes/api.php file lets create an api route as follows:

~~~~

Route::get('profile', 'API\UserController@profile');

~~~~

In this route, whenever a request comes to it, it will automatically call the profile() in the UserController.php

Step 5: So now lets create this function in the UserController.php

Go to the UserController.php and add those lines.

~~~~

    public function profile() {
        //In Api we have to use this
        return auth('api')->user();
    }
~~~~

Its all fine now, so lets summarize it, we have created Profile.vue component and in this component we have form. Whenever the form is created because of the component is called, then created() function will send a request to the api route that we created, after that this route will call the function profile() and it will return the related information of the authenticated user.

Reminder: This is just works for authenticated users as we implemented authentication feature of the api in the previous tutorials.