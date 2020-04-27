import Vuex from "vuex";
import Vue from "vue";
import player from "./modules/player";
import map from "./modules/map";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player,
    map
  }
})