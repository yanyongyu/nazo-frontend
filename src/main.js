/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:34:54
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-20 11:47:35
 * @Description    : Entry file
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// devtools
Vue.config.devtools = process.env.NODE_ENV === "development";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
