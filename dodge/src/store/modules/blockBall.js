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
  MOVE_BALL: "MOVE_BALL",
  DELETE_BALLS: "DELETE_BALLS",
  RESET_BALLS: "RESET_BALLS",
};

const makeDefaultBlockBallConfig = () => {
  const ballCongfig = {
    id: generateId(),
    configBlockBall: {
      x: 0,
      y: 0,
      radius: 10,
      fill: "white",
    },
    playerPosition: {
      x: null,
      y: null,
      towardX: null,
      towardY: null,
    },
    movingStrategy: (payload) => {
      const { x, y } = payload;
      if (
        ballCongfig.playerPosition.x === null &&
        ballCongfig.playerPosition.y === null
      ) {
        ballCongfig.playerPosition.x = x;
        ballCongfig.playerPosition.y = y;
        ballCongfig.playerPosition.towardX =
          (ballCongfig.playerPosition.x - ballCongfig.configBlockBall.x) / 10;
        ballCongfig.playerPosition.towardY =
          (ballCongfig.playerPosition.y - ballCongfig.configBlockBall.y) / 10;
        return;
      }
      ballCongfig.configBlockBall.x += ballCongfig.playerPosition.towardX;
      ballCongfig.configBlockBall.y += ballCongfig.playerPosition.towardY;
    },
  };
  return ballCongfig;
};

const state = {
  blockBalls: [],
};

const getters = {
  getBlockBalls: (state) => state.blockBalls,
};

const mutations = {
  [MUTATIONS_CONSTANTS.GENERATE_BALL_X](state, { width }) {
    const blockBall = makeDefaultBlockBallConfig();
    blockBall.configBlockBall.x = randomInt(width);
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.GENERATE_BALL_Y](state, { height }) {
    const blockBall = makeDefaultBlockBallConfig();
    blockBall.configBlockBall.y = randomInt(height);
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.GENERATE_BALL_XY](state, { width, height }) {
    const blockBall = makeDefaultBlockBallConfig();
    blockBall.configBlockBall.x = randomInt(width);
    blockBall.configBlockBall.y = height;
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.GENERATE_BALL_YX](state, { width, height }) {
    const blockBall = makeDefaultBlockBallConfig();
    blockBall.configBlockBall.x = width;
    blockBall.configBlockBall.y = randomInt(height);
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.MOVE_BALL](state, payload) {
    state.blockBalls.forEach((blockBall) => {
      blockBall.movingStrategy(payload);
    });
  },
  [MUTATIONS_CONSTANTS.DELETE_BALLS](state, payload) {
    const { width, height } = payload;
    state.blockBalls = state.blockBalls.filter((blockBall) => {
      if (blockBall.configBlockBall.x > width) {
        return false;
      } else if (blockBall.configBlockBall.y > height) {
        return false;
      } else if (blockBall.configBlockBall.x < 0) {
        return false;
      } else if (blockBall.configBlockBall.y < 0) {
        return false;
      }
      return true;
    });
  },
  [MUTATIONS_CONSTANTS.RESET_BALLS](state) {
    state.blockBalls = [];
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
  moveBall({ commit, rootGetters }) {
    const payload = rootGetters["player/getStatus"];
    commit(MUTATIONS_CONSTANTS.MOVE_BALL, payload);
  },
  removeBalls({ commit, rootGetters }) {
    const payload = rootGetters["map/configMap"];
    commit(MUTATIONS_CONSTANTS.DELETE_BALLS, payload);
  },
  resetBalls({ commit }) {
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
