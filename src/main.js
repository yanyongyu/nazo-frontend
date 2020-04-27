/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:34:54
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-27 12:09:08
 * @Description    : Entry file
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// axios
// import qs from "qs";
import axios from "axios";
Vue.prototype.$axios = axios;
axios.defaults.timeout = 15000;
axios.interceptors.request.use(
  (config) => {
    if (store.state.token) {
      config.headers[
        "Authorization"
      ] = `${store.state.tokenType} ${store.state.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// devtools
Vue.config.devtools = process.env.NODE_ENV === "development";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
