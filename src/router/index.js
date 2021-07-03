import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import DashBoard from "../layouts/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    children: [
      {
        path:"",
        name: "Home",
        component: Home
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "product",
        name: "Product",
        component: Product,
      },
    ]
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */"../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

export default router;
