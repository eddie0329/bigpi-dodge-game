const MUTATION_CONSTANTS = {
  INIT_GAME: "INIT_GAME",
  FINISH_GAME: "FINISH_GAME",
  CHECK_COLLISION: "CHECK_COLLISION",
  INIT_SCORE: "INIT_SCORE",
  REVERT_SCORE: "REVERT_SCORE",
};

const state = {
  gameStatus: {
    gameStart: false,
    score: 0,
  },
  intervalBlockBall: null,
  intervalScore: null,
};

const getters = {
  getGameStatus: (state) => state.gameStatus.gameStart,
  getScore: (state) => state.gameStatus.score,
};

const mutations = {
  [MUTATION_CONSTANTS.INIT_GAME](state, dispatch) {
    state.gameStatus.gameStart = true;
    state.intervalBlockBall = setInterval(() => {
      dispatch("blockBall/addBall", null, { root: true });
      dispatch("blockBall/moveBall", null, { root: true });
      dispatch("blockBall/removeBalls", null, { root: true });
      dispatch("checkCollision");
    }, 200);
    state.intervalScore = setInterval(() => {
      dispatch("addScore");
    }, 100);
  },
  [MUTATION_CONSTANTS.FINISH_GAME](state, dispatch) {
    state.gameStatus.gameStart = false;
    dispatch("player/resetPosition", null, { root: true });
    clearInterval(state.intervalBlockBall);
  },
  [MUTATION_CONSTANTS.CHECK_COLLISION](state, { rootState, dispatch }) {
    const { blockBall, player } = rootState;
    blockBall.blockBalls.forEach((blockBall) => {
      if (
        player.status.x + player.status.radius + 5 > blockBall.configBlockBall.x &&
        player.status.x - player.status.radius + 5 < blockBall.configBlockBall.x &&
        player.status.y + player.status.radius + 5 > blockBall.configBlockBall.y &&
        player.status.y - player.status.radius + 5 < blockBall.configBlockBall.y
      ) {
        dispatch("endGame");
        dispatch("blockBall/resetBalls", null, { root: true });
      }
    });
  },
  [MUTATION_CONSTANTS.INIT_SCORE](state) {
    state.gameStatus.score += 1;
  },
  [MUTATION_CONSTANTS.REVERT_SCORE](state) {
    state.gameStatus.score = 0;
    clearInterval(state.intervalScore);
  },
};

const actions = {
  startGame({ state, commit, dispatch }) {
    if (state.gameStatus.gameStart === false) {
      commit(MUTATION_CONSTANTS.INIT_GAME, dispatch);
    }
  },
  endGame({ commit, dispatch }) {
    dispatch("resetScore");
    commit(MUTATION_CONSTANTS.FINISH_GAME, dispatch);
  },
  checkCollision({ commit, rootState, dispatch }) {
    const payload = { rootState, dispatch };
    commit(MUTATION_CONSTANTS.CHECK_COLLISION, payload);
  },
  addScore({ commit }) {
    commit(MUTATION_CONSTANTS.INIT_SCORE);
  },
  resetScore({ commit }) {
    commit(MUTATION_CONSTANTS.REVERT_SCORE);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
