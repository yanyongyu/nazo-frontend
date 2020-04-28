/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-28 11:31:23
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-28 16:17:47
 * @Description    : None
 * @GitHub         : https://github.com/yanyongyu
 */

export default [
  {
    path: "/1",
    name: "Lv1",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv1.vue"),
    meta: {
      title: "Lv1 开始",
      level: 1,
    },
  },
  {
    path: "/2",
    name: "Lv2",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv2.vue"),
    meta: {
      title: "Lv2 空",
      level: 2,
    },
  },
  {
    path: "/3",
    name: "Lv3",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv3.vue"),
    meta: {
      title: "Lv3 白",
      level: 3,
    },
  },
  {
    path: "/4",
    name: "Lv4",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv4.vue"),
    meta: {
      title: "Lv4 色彩",
      level: 4,
    },
  },
  {
    path: "/5",
    name: "Lv5",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv5.vue"),
    meta: {
      title: "Lv5 平平无奇的数学小天才",
      level: 5,
    },
  },
];
