import Vuex from "vuex";
import Vue from "vue";
import player from "./modules/player";
import map from "./modules/map";
import game from "./modules/game";
import blockBall from "./modules/blockBall";
import item from "./modules/item";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player,
    map,
    game,
    blockBall,
    item
  }
})