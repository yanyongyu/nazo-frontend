/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:47:05
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-28 16:35:55
 * @Description    : Vuex
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import Vuex from "vuex";
import Puzzles from "@/components/puzzles.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
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
      state.puzzles.length = 0;
      state.puzzleIndex = 0;
    },
    restoreState(state, data) {
      state.puzzles.length = 0;
      state.username = data.username;
      state.puzzleIndex = data.current;
      for (let i = 0; i < Puzzles.length; i++) {
        state.puzzles.push(i < state.puzzleIndex ? true : false);
      }
    },
    passedPuzzle(state) {
      state.puzzles[state.puzzleIndex] = true;
      state.puzzleIndex += 1;
    },
  },
  actions: {},
  modules: {},
});
