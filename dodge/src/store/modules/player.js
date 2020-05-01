const isPlayerInsideOfLeftMap = ({ x, radius }) => {
  return x > radius;
};

const isPlayerInsideOfRightMap = ({ x, radius }, width) => {
  return x < width - radius;
};

const isPlayerInsideOfUpMap = ({ y, radius }) => {
  return y > radius;
};

const isPlayerInsideOfDownMap = ({ y, radius }, height) => {
  return y < height - radius;
};

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
    if (isPlayerInsideOfLeftMap(state.status)) {
      state.status.x -= 10;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_RIGHT](state, { width }) {
    if (isPlayerInsideOfRightMap(state.status, width)) {
      state.status.x += 10;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_UP](state) {
    if (isPlayerInsideOfUpMap(state.status)) {
      state.status.y -= 10;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_DOWN](state, { height }) {
    if (isPlayerInsideOfDownMap(state.status, height)) {
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
