import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StepTwo from "../views/StepTwo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/steptwo",
    name: "StepTwo",
    component: StepTwo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
