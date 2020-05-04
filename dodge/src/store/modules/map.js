const MUTATION_CONSTANTS = {
  CONSTRUCT_MAP: "CONSTRUCT_MAP"
};


const state = {
  mapStatus: {
    width: 400,
    height: 400,
    image: null
  }
};

const getters = {
  configMap: state => state.mapStatus
};

const mutations = {
  [MUTATION_CONSTANTS.CONSTRUCT_MAP](state, mapImage) {
    state.mapStatus.image = mapImage
  }
};

const actions = {
  setMap({commit}, mapImage) {
    commit(MUTATION_CONSTANTS.CONSTRUCT_MAP, mapImage);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
