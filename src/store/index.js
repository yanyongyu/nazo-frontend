/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:47:05
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-21 10:36:50
 * @Description    : Vuex
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = "";
    },
  },
  actions: {},
  modules: {},
});
