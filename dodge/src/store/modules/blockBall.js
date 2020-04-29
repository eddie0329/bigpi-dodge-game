const randomInt = max => 1 + Math.floor(Math.random() * max);

const generateId = () => {
  const MAX = 100000000;
  const MIN = 0;
  const HEXA = 16;
  // generate number between max and min  -> toString to hexadecimal
  const newId = ((Math.random() * MAX) | MIN).toString(HEXA);

  return newId;
};

const MUTATIONS_CONSTANTS = {
  GENERATE_BALL: "GENRATE_BALL",
  DELETE_BALL: "DELETE_BALL",
  DELETE_ALL_BALLS: "DELETE_ALL_BALLS",
};

const state = {
  blockBalls: [],
};

const getters = {
  getBlockBalls: (state) => state.blockBalls,
};

const mutations = {
  [MUTATIONS_CONSTANTS.GENERATE_BALL](state, width) {
    const blockBall = {
      id: generateId(),
      configBlockBall: {
        x: randomInt(width),
        y: 50,
        radius: 10,
        fill: "white",
      },
    };
    state.blockBalls.push(blockBall);
  },
};

const actions = {
  addBall({ commit, rootGetters }) {
    const { width } = rootGetters["map/configMap"];
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL, width);
  },
  removeBall({ commit }) {
    commit(MUTATIONS_CONSTANTS.DELETE_BALL);
  },
  resetBall({ commit }) {
    commit(MUTATIONS_CONSTANTS.DELETE_ALL_BALL);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
