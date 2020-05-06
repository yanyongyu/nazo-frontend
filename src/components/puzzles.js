/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-28 11:31:23
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-05-06 12:57:32
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
  {
    path: "/6",
    name: "Lv6",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv6.vue"),
    meta: {
      title: "Lv6 宇宙终极问题",
      level: 6,
    },
  },
  {
    path: "/7",
    name: "Lv7",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv7.vue"),
    meta: {
      title: "Lv7 地址",
      level: 7,
    },
  },
  {
    path: "/8",
    name: "Lv8",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv8.vue"),
    meta: {
      title: "Lv8 网址",
      level: 8,
    },
  },
  {
    path: "/9",
    name: "Lv9",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv9.vue"),
    meta: {
      title: "Lv9 域名",
      level: 9,
    },
  },
  {
    path: "/10",
    name: "Lv10",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv10.vue"),
    meta: {
      title: "Lv10 秘密",
      level: 10,
    },
  },
  {
    path: "/11",
    name: "Lv11",
    component: () => import(/* webpackChunkName: "puzzles" */ "./Lv11.vue"),
    meta: {
      title: "Lv11 随机",
      level: 11,
    },
  },
];
