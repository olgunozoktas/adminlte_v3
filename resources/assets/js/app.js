/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import moment from "moment";

/* Sweet Alert */
import swal from "sweetalert2";
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast; /* global so we can use it in anywhere in the app */

/* Vue Routers -- We will write them to here */

import Vue from "vue";
import { Form, HasError, AlertError } from "vform";

window.Form = Form; //to make it global
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "3px"
});

let routes = [
    { path: "/dashboard", component: require("./components/Dashboard.vue") },
    { path: "/developer", component: require("./components/Developer.vue") },
    { path: "/users", component: require("./components/Users.vue") },
    { path: "/profile", component: require("./components/Profile.vue") }
];

const router = new VueRouter({
    mode: "history", //To get rid of localhost:8000/home#/login -> now it will show localhost:8000/login
    routes // short for 'routes: routes'
});

//Global Filter -> use it anywhere in application
Vue.filter("upText", function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("myDate", function(created) {
    return moment(created).format("MMMM Do YYYY");
});

//let Fire = new Vue();
//window.Fire = Fire;
window.Fire = new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component("passport-clients", require("./components/passport/Clients.vue"));

Vue.component(
    "passport-authorized-clients",
    require("./components/passport/AuthorizedClients.vue")
);

Vue.component(
    "passport-personal-access-tokens",
    require("./components/passport/PersonalAccessTokens.vue")
);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue")
);

const app = new Vue({
    el: "#app",
    router
});
