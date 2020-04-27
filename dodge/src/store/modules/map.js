const state = {
  mapStatus: {
    x: 0,
    y: 0,
    width: 800,
    height: 800,
    fill: "black",
  },
};

const getters = {
  configMap: state => state.mapStatus
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
