/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:35:36
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-28 12:29:09
 * @Description    : Vue Router
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

import Puzzles from "../components/puzzles.js";

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
];
routes.push(...Puzzles);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.matched.some((record) => record.meta.level)) {
    // 判断当前是否登录
    // if (!router.app.$store.state.token) {
    //   next({
    //     path: "/login",
    //     query: {
    //       redirect: to.fullPath,
    //     },
    //   });
    // } else if (to.meta.level > router.app.$store.state.puzzleIndex) {
    //   // 判断当前已通过的关数
    //   next({
    //     path: `/${router.app.$store.state.puzzleIndex + 1}`,
    //   });
    // } else {
    //   next();
    // }
    next();
  } else {
    next();
  }
});

export default router;
