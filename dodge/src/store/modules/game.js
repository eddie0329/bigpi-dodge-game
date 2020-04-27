const state = {
  gameStatus: {
    collision: false
  }
};

const getters = {
  getGameStatus: state => state.gameStatus
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
