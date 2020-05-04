const state = {
  mapStatus: {
    x: 0,
    y: 0,
    width: 400,
    height: 400,
    fill: "#012156",
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
