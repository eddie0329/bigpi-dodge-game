const MUTATION_CONSTANTS = {
  INIT_GAME: "INIT_GAME",
  FINISH_GAME: "FINISH_GAME",
  CHECK_COLLISION: "CHECK_COLLISION",

};

const state = {
  gameStatus: {
    gameStart: false,
    score: 0,
  },
  intervalBlockBall: null,
};

const getters = {
  getGameStatus: (state) => state.gameStatus.gameStart,
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
  },
  [MUTATION_CONSTANTS.FINISH_GAME](state, dispatch) {
    state.gameStatus.gameStart = false;
    dispatch("player/resetPosition", null, { root: true});
    clearInterval(state.intervalBlockBall);
  },
  [MUTATION_CONSTANTS.CHECK_COLLISION](state, { rootState, dispatch }) {
    const { blockBall, player } = rootState;
    blockBall.blockBalls.forEach((blockBall) => {
      if (
        player.status.x + player.status.radius >= blockBall.configBlockBall.x &&
        player.status.x - player.status.radius <= blockBall.configBlockBall.x &&
        player.status.y + player.status.radius >= blockBall.configBlockBall.y &&
        player.status.y - player.status.radius <= blockBall.configBlockBall.y
      ) {
        dispatch("endGame");
        dispatch("blockBall/resetBalls", null, { root: true });
      }
    });
  },
};

const actions = {
  startGame({ state, commit, dispatch }) {
    if(state.gameStatus.gameStart === false) {
      commit(MUTATION_CONSTANTS.INIT_GAME, dispatch);
    }
  },
  endGame({ commit, dispatch }) {
    commit(MUTATION_CONSTANTS.FINISH_GAME, dispatch);
  },
  checkCollision({ commit, rootState, dispatch }) {
    const payload = { rootState, dispatch };
    commit(MUTATION_CONSTANTS.CHECK_COLLISION, payload);
  },
  // addScore({commit}) {
    // commit();
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
