/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:35:36
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-05-08 13:10:19
 * @Description    : Vue Router
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rank from "../views/Rank.vue";
import Login from "../views/Login.vue";

import Puzzles from "../components/puzzles.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Nazo",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Nazo - 登录",
    },
  },
  {
    path: "/rank",
    name: "Rank",
    component: Rank,
    meta: {
      title: "Nazo - 排行",
    },
  },
];
routes.push(...Puzzles);
routes.push({
  path: "*",
  redirect: "/",
});

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
    if (!router.app.$cookies.isKey("access_token")) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else if (to.meta.level > router.app.$store.state.puzzleIndex + 1) {
      // 判断当前已通过的关数
      next({
        path: `/${router.app.$store.state.puzzleIndex + 1}`,
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
