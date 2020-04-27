/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:47:05
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-27 16:45:19
 * @Description    : Vuex
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    tokenType: "",
    puzzles: [],
    puzzleIndex: 0,
  },
  mutations: {
    login(state, data) {
      state.token = data.access_token;
      state.tokenType = data.token_type;
    },
    logout(state) {
      state.token = "";
      state.tokenType = "";
      state.puzzles = [];
      state.puzzleIndex = 0;
    },
  },
  actions: {},
  modules: {},
});
