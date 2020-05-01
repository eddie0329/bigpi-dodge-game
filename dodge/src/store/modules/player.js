const MUTATIONS_CONSTANTS = {
  MOVE_LEFT: "MOVE_LEFT",
  MOVE_RIGHT: "MOVE_RIGHT",
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
};

const state = {
  status: {
    x: 400,
    y: 400,
    radius: 10,
    fill: "red",
    stroke: "blue",
    strokeWidth: 1,
  },
};

const getters = {
  getStatus: (state) => state.status,
};

const mutations = {
  [MUTATIONS_CONSTANTS.MOVE_LEFT](state) {
    if (state.status.x > state.status.radius) {
      state.status.x -= 10;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_RIGHT](state, { width }) {
    if (state.status.x < width - state.status.radius) {
      state.status.x += 10;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_UP](state) {
    if (state.status.y > state.status.radius) {
      state.status.y -= 10;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_DOWN](state, { height }) {
    if (state.status.y < height - state.status.radius) {
      state.status.y += 10;
    }
  },
};

const actions = {
  movePlayerLeft({ commit }) {
    commit(MUTATIONS_CONSTANTS.MOVE_LEFT);
  },
  movePlayerRight({ commit, rootGetters }) {
    const payload = rootGetters["map/configMap"];
    commit(MUTATIONS_CONSTANTS.MOVE_RIGHT, payload);
  },
  movePlayerUp({ commit }) {
    commit(MUTATIONS_CONSTANTS.MOVE_UP);
  },
  movePlayerDown({ commit, rootGetters }) {
    const payload = rootGetters["map/configMap"];
    commit(MUTATIONS_CONSTANTS.MOVE_DOWN, payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
