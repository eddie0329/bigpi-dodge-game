const randomInt = (max) => 1 + Math.floor(Math.random() * max);
const generateId = () => {
  const MAX = 100000000;
	const MIN = 0;
	const HEXA = 16;
	// generate number between max and min  -> toString to hexadecimal
	const newId = (Math.random() * MAX | MIN).toString(HEXA);

	return newId;
} 

const MUTATIONS_CONSTANTS = {
  GENERATE_BALL: "GENRATE_BALL",
  DELETE_BALL: "DELETE_BALL",
  DELETE_ALL_BALLS: "DELETE_ALL_BALLS"
}

const state = {
  blockBalls: [],
};

const getters = {};

const mutations = {
  [MUTATIONS_CONSTANTS.GENERATE_BALL](state) {
    const blockBall = {
      id: generateId(),
      configBlockBall: {
        x: randomInt(this.$store.getters["map/configMap"].width),
        y: 50,
        radius: 10,
        fill: "white",
      },
    }
    state.push(blockBall);
  }
};

const actions = {
  addBall({ commit }) {
    commit(MUTATIONS_CONSTANTS.GENERATE_BALL);
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
  actions,
};
