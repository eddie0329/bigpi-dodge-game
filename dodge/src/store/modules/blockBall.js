const randomInt = (max) => 1 + Math.floor(Math.random() * max);

const generateId = () => {
  const MAX = 100000000;
  const MIN = 0;
  const HEXA = 16;
  // generate number between max and min  -> toString to hexadecimal
  const newId = ((Math.random() * MAX) | MIN).toString(HEXA);

  return newId;
};

const MUTATIONS_CONSTANTS = {
  GENERATE_BALL_X: "GENRATE_BALL_X",
  GENERATE_BALL_Y: "GENERATE_BALL_Y",
  GENERATE_BALL_XY: "GENERATE_BALL_XY",
  GENERATE_BALL_YX: "GENERATE_BALL_YX",
  DELETE_BALL: "DELETE_BALL",
  DELETE_ALL_BALLS: "DELETE_ALL_BALLS",
};

const defaultBlockBallConfig = {
  radius: 10,
  fill: "white"
}

const state = {
  blockBalls: [],
};

const getters = {
  getBlockBalls: (state) => state.blockBalls,
};

const mutations = {
  [MUTATIONS_CONSTANTS.GENERATE_BALL_X](state, { width }) {
    const blockBall = {
      id: generateId(),
      configBlockBall: {
        x: randomInt(width),
        y: 0,
        ...defaultBlockBallConfig
      },
    };
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.GENERATE_BALL_Y](state, { height }) {
    const blockBall = {
      id: generateId(),
      configBlockBall: {
        x: 0,
        y: randomInt(height),
        ...defaultBlockBallConfig
      },
    };
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.GENERATE_BALL_XY](state, { width, height }) {
    const blockBall = {
      id: generateId(),
      configBlockBall: {
        x: randomInt(width),
        y: height,
        ...defaultBlockBallConfig
      },
    };
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.GENERATE_BALL_YX](state, { width, height }) {
    const blockBall = {
      id: generateId(),
      configBlockBall: {
        x: width,
        y: randomInt(height),
        ...defaultBlockBallConfig
      },
    };
    state.blockBalls.push(blockBall);
  },
};

const actions = {
  addBall({ commit, rootGetters }) {
    const payload = rootGetters["map/configMap"];
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_X, payload);
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_Y, payload);
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_XY, payload);
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_YX, payload);
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
