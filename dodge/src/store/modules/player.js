const MUTATIONS_CONSTANTS = {
  MOVE_LEFT: "MOVE_LEFT",
  MOVE_RIGHT: "MOVE_RIGHT",
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
}

const state = {
  status: {
    x: 100,
    y: 100,
    radius: 10,
    fill: "red",
    stroke: "blue",
    strokeWidth: 4,
  }
};

const getters = {};

const mutations = {
  [MUTATIONS_CONSTANTS.MOVE_LEFT](state) {
    state.status.x -= 10;
  },
  [MUTATIONS_CONSTANTS.MOVE_RIGHT](state) {
    state.status.x += 10;
  },
  [MUTATIONS_CONSTANTS.MOVE_UP](state) {
    state.status.y -= 10;
  },
  [MUTATIONS_CONSTANTS.MOVE_DOWN](state) {
    state.status.y += 10;
  },
};

const actions = {
  movePlayerLeft({ commit }) {
    commit(MUTATIONS_CONSTANTS.MOVE_LEFT);
  },
  movePlayerRight({ commit }) {
    commit(MUTATIONS_CONSTANTS.MOVE_RIGHT);
  },
  movePlayerUp({commit }) {
    commit(MUTATIONS_CONSTANTS.MOVE_UP);
  },
  movePlayerDown({commit}) {
    commit(MUTATIONS_CONSTANTS.MOVE_DOWN);
  }, 
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
