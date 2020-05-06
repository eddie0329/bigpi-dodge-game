import { playerMoveRate } from "@/constants/gameSettings.js";

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

const moveAnimation = (movingStrategy, state) => {
  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      movingStrategy(state);
    }, playerMoveRate * i);
  }
};

const playerGoLeft = ({ status }) => {
  status.x -= 1;
};

const playerGoRight = ({ status }) => {
  status.x += 1;
};

const playerGoUp = ({ status }) => {
  status.y -= 1;
};

const playerGoDown = ({ status }) => {
  status.y += 1;
};

const MUTATIONS_CONSTANTS = {
  MOVE_LEFT: "MOVE_LEFT",
  MOVE_RIGHT: "MOVE_RIGHT",
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
  INIT_POSITION: "INIT_POSIOTION",
  CONSTRUCT_PLAYER: "CONSTRUCT_PLAYER",
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
  intervalPlayerMove: null,
};

const getters = {
  getStatus: (state) => state.status,
};

const mutations = {
  [MUTATIONS_CONSTANTS.MOVE_LEFT](state) {
    if (isPlayerInsideOfLeftMap(state.status)) {
      moveAnimation(playerGoLeft, state);
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_RIGHT](state, { width }) {
    if (isPlayerInsideOfRightMap(state.status, width)) {
      moveAnimation(playerGoRight, state);
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_UP](state) {
    if (isPlayerInsideOfUpMap(state.status)) {
      moveAnimation(playerGoUp, state);
    }
  },
  [MUTATIONS_CONSTANTS.MOVE_DOWN](state, { height }) {
    if (isPlayerInsideOfDownMap(state.status, height)) {
      moveAnimation(playerGoDown, state);
    }
  },
  [MUTATIONS_CONSTANTS.INIT_POSITION](state) {
    state.status.x = 200;
    state.status.y = 200;
    clearInterval(state.intervalPlayerMove);
  },
  [MUTATIONS_CONSTANTS.CONSTRUCT_PLAYER](state, image) {
    state.status.image = image;
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
  resetPosition({ commit }) {
    commit(MUTATIONS_CONSTANTS.INIT_POSITION);
  },
  setPlayer({ commit }, image) {
    commit(MUTATIONS_CONSTANTS.CONSTRUCT_PLAYER, image);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
