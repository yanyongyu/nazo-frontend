/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:35:36
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-27 14:44:39
 * @Description    : Vue Router
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

import Lv1 from "../views/Lv1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/1",
    name: "Lv1",
    component: Lv1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
