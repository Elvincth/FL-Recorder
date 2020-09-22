import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //Home
  {
    path: "/",
    name: "home",
    component: () => import("../views/home"),
  },
  //Select view
  {
    path: "/select",
    name: "select",
    component: () => import("../views/select"),
  },
  //Tollbar view
  {
    path: "/toolbar",
    name: "toolbar",
    component: () => import("../views/toolbar"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
