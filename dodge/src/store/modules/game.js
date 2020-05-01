const MUTATION_CONSTANTS = {
  INIT_GAME: "INIT_GAME",
  FINISH_GAME: "FINISH_GAME",
};

const state = {
  gameStatus: {
    gameStart: false,
    collision: false,
    score: 0,
  },
};

const getters = {
  getGameStatus: (state) => state.gameStatus,
};

const mutations = {
  [MUTATION_CONSTANTS.INIT_GAME]() {},
  [MUTATION_CONSTANTS.FINISH_GAME]() {},
};

const actions = {
  startGame({ commit }) {
    commit(MUTATION_CONSTANTS.INIT_GAME);
  },
  endGame({ commit }) {
    commit(MUTATION_CONSTANTS.FINISH_GAME);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
