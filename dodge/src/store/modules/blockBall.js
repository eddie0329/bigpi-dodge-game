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
  GENERATE_BALL_X: "GENRATE_BALL_X",
  GENERATE_BALL_Y: "GENERATE_BALL_Y",
  GENERATE_BALL_XY: "GENERATE_BALL_XY",
  GENERATE_BALL_YX: "GENERATE_BALL_YX",
  MOVE_BALL: "MOVE_BALL",
  DELETE_BALL: "DELETE_BALL",
  DELETE_ALL_BALLS: "DELETE_ALL_BALLS"
};

const defaultBlockBallConfig = {
  radius: 10,
  fill: "white"
};

const state = {
  blockBalls: []
};

const getters = {
  getBlockBalls: state => state.blockBalls
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
      playerPosition: {
        x: null,
        y: null,
        towardX: null,
        towardY: null
      },
      movingStrategy: payLoad => {
        const { x, y } = payLoad;
        if (
          blockBall.playerPosition.x === null &&
          blockBall.playerPosition.y === null
        ) {
          blockBall.playerPosition.x = x;
          blockBall.playerPosition.y = y;
          blockBall.playerPosition.towardX =
            (blockBall.playerPosition.x - blockBall.configBlockBall.x) / 10;
          blockBall.playerPosition.towardY =
            (blockBall.playerPosition.y - blockBall.configBlockBall.y) / 10;
          return;
        }

        blockBall.configBlockBall.x += blockBall.playerPosition.towardX;
        blockBall.configBlockBall.y += blockBall.playerPosition.towardY;
      }
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
      playerPosition: {
        x: null,
        y: null,
        towardX: null,
        towardY: null
      },
      movingStrategy: payLoad => {
        const { x, y } = payLoad;
        if (
          blockBall.playerPosition.x === null &&
          blockBall.playerPosition.y === null
        ) {
          blockBall.playerPosition.x = x;
          blockBall.playerPosition.y = y;
          blockBall.playerPosition.towardX =
            (blockBall.playerPosition.x - blockBall.configBlockBall.x) / 10;
          blockBall.playerPosition.towardY =
            (blockBall.playerPosition.y - blockBall.configBlockBall.y) / 10;
          return;
        }

        blockBall.configBlockBall.x += blockBall.playerPosition.towardX;
        blockBall.configBlockBall.y += blockBall.playerPosition.towardY;
      }
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
      playerPosition: {
        x: null,
        y: null,
        towardX: null,
        towardY: null
      },
      movingStrategy: payLoad => {
        const { x, y } = payLoad;
        if (
          blockBall.playerPosition.x === null &&
          blockBall.playerPosition.y === null
        ) {
          blockBall.playerPosition.x = x;
          blockBall.playerPosition.y = y;
          blockBall.playerPosition.towardX =
            (blockBall.playerPosition.x - blockBall.configBlockBall.x) / 10;
          blockBall.playerPosition.towardY =
            (blockBall.playerPosition.y - blockBall.configBlockBall.y) / 10;
          return;
        }

        blockBall.configBlockBall.x += blockBall.playerPosition.towardX;
        blockBall.configBlockBall.y += blockBall.playerPosition.towardY;
      }
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
      playerPosition: {
        x: null,
        y: null,
        towardX: null,
        towardY: null
      },
      movingStrategy: payLoad => {
        const { x, y } = payLoad;
        if (
          blockBall.playerPosition.x === null &&
          blockBall.playerPosition.y === null
        ) {
          blockBall.playerPosition.x = x;
          blockBall.playerPosition.y = y;
          blockBall.playerPosition.towardX =
            (blockBall.playerPosition.x - blockBall.configBlockBall.x) / 10;
          blockBall.playerPosition.towardY =
            (blockBall.playerPosition.y - blockBall.configBlockBall.y) / 10;
          return;
        }

        blockBall.configBlockBall.x += blockBall.playerPosition.towardX;
        blockBall.configBlockBall.y += blockBall.playerPosition.towardY;
      }
    };
    state.blockBalls.push(blockBall);
  },
  [MUTATIONS_CONSTANTS.MOVE_BALL](state, payLoad) {
    state.blockBalls.forEach(blockBall => {
      blockBall.movingStrategy(payLoad);
    });
  }
};

const actions = {
  addBall({ commit, rootGetters }) {
    const payLoad = rootGetters["map/configMap"];
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_X, payLoad);
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_Y, payLoad);
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_XY, payLoad);
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL_YX, payLoad);
  },
  moveBall({ commit, rootGetters }) {
    const payLoad = rootGetters["player/getStatus"];
    commit(MUTATIONS_CONSTANTS.MOVE_BALL, payLoad);
  },
  removeBall({ commit }) {
    commit(MUTATIONS_CONSTANTS.DELETE_BALL);
  },
  resetBall({ commit }) {
    commit(MUTATIONS_CONSTANTS.DELETE_ALL_BALL);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
