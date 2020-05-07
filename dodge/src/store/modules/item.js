import * as helper from "@/utils/helper";

const MUTATIONS_CONSTANTS = {
  GENERATE_ERASER_ITEM: "GENERATE_ERASER_ITEM"
}

const state = {
  configEraserItem: {
    x: 200,
    y: 100,
    width: 10,
    height: 10,
    fill: "yellow"
  },
  items: []
};

const getters = {};

const mutations = {
  [MUTATIONS_CONSTANTS.GENERATE_ERASER_ITEM](state) {
    const eraserItem = {}
    state.items.push(eraserItem);
  }
};

const actions = {
  makeEraserItem({commit}) {
    commit(MUTATIONS_CONSTANTS.GENERATE_ERASER_ITEM);
  }
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}