/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:34:54
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-05-08 13:10:55
 * @Description    : Entry file
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import App from "./App.vue";

// vue-cookies
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// Vuex
import store from "./store";

// Vue-Router
import router from "./router";

// vuetify
import vuetify from "./plugins/vuetify";

// toastr
import toastr from "toastr";
import "toastr/build/toastr.css";
toastr.options.closeButton = true;
Vue.prototype.$toastr = toastr;

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
