/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:35:36
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-20 11:47:46
 * @Description    : Vue Router
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
