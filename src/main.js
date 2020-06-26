import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import Recipes from "./components/Recipes"
import AddRecipe from "./components/AddRecipe"
import EditRecipe from "./components/EditRecipe"
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm"
// Import the styles directly. (Or you could add them via script tags.)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(VueRouter, BootstrapVue)

export const router = new VueRouter({
   mode: "history",
   routes: [
      { path: "/", component: Recipes },
      { path: "/add", component: AddRecipe },
      { path: "/edit/:slug", component: EditRecipe },
   ],
})
new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app")
