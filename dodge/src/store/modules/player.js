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
  INIT_POSITION: "INIT_POSIOTION",
  CONSTRUCT_PLAYER: "CONSTRUCT_PLAYER"
};

const state = {
  status: {
    x: 200,
    y: 200,
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
      state.status.x -= 8;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_RIGHT](state, { width }) {
    if (isPlayerInsideOfRightMap(state.status, width)) {
      state.status.x += 8;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_UP](state) {
    if (isPlayerInsideOfUpMap(state.status)) {
      state.status.y -= 8;
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_DOWN](state, { height }) {
    if (isPlayerInsideOfDownMap(state.status, height)) {
      state.status.y += 8;
    }
  },
  [MUTATIONS_CONSTANTS.INIT_POSITION](state) {
    state.status.x = 200;
    state.status.y = 200;
  },
  [MUTATIONS_CONSTANTS.CONSTRUCT_PLAYER](state, image) {
    state.status.image = image;
  }
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
  resetPosition({ commit }) {
    commit(MUTATIONS_CONSTANTS.INIT_POSITION);
  },
  setPlayer({ commit }, image) {
    commit(MUTATIONS_CONSTANTS.CONSTRUCT_PLAYER, image);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
