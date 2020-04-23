import Vuex from "vuex";
import Vue from "vue";
import player from "./modules/player";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player
  }
})