<template>
  <div id="app">
    <v-stage :config="configKonva">
      <v-layer>
        <DodgeMap />
        <BlockBall :config-konva="configKonva" v-for="blockBall in blockBalls" :key="blockBall"/>
        <!-- <v-circle v-for="(blockBall, index) in blockBalls" :key="index" :config="blockBall" /> -->
        <GamePlayer />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import DodgeMap from "./components/DodgeMap";
import BlockBall from "./components/BlockBall";
import GamePlayer from "./components/GamePlayer";
import * as keyCodeConstants from "./constants/keycodeConstants";

const isArrowLeftPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_LEFT ? true : false;
};
const isArrowRightPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_RIGHT ? true : false;
};
const isArrowUpPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_UP ? true : false;
};

const isArrowDownPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_DOWN ? true : false;
};

export function generateId() {
	const MAX = 100000000;
	const MIN = 0;
	const HEXA = 16;
	// generate number between max and min  -> toString to hexadecimal
	const newId = (Math.random() * MAX | MIN).toString(HEXA);

	return newId;
}

const SEC = 1000;

export default {
  created() {
    window.addEventListener("keydown", this.onKeyDownMove);
    this.intervalMakeBall = setInterval(this.makeBall, SEC);
    this.configKonva.width = this.$store.getters["map/configMap"].width;
    this.configKonva.height = this.$store.getters["map/configMap"].height;
  },
  components: {
    GamePlayer,
    DodgeMap,
    BlockBall,
  },
  destroyed() {
    clearInterval(this.intervalMakeBall);
  },
  data() {
    return {
      configKonva: {
        width: 0,
        height: 0,
      },
      blockBalls: [],
      intervalMakeBall: "",
    };
  },
  methods: {
    onKeyDownMove(e) {
      if (isArrowLeftPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerLeft");
      } else if (isArrowRightPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerRight");
      } else if (isArrowUpPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerUp");
      } else if (isArrowDownPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerDown");
      }
    },
    makeBall() {
      const blockBallId = generateId();
      this.blockBalls.push(blockBallId);
    },
  },
};
</script>
