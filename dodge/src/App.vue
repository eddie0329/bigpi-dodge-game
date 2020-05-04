<template>
  <div id="app">
    <v-stage ref="stage" :config="configKonva">
      <v-layer>
        <DodgeMap />
        <template v-if="gameStatus">
          <BlockBall
            v-for="blockBall in blockBalls"
            :config-block-ball="blockBall.configBlockBall"
            :key="blockBall.id"
          />
          <GamePlayer />
        </template>
        <template v-else>
          <InitText :map-height="getHeight" :map-width="getWidth"/>
        </template>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import DodgeMap from "./components/DodgeMap";
import BlockBall from "./components/BlockBall";
import GamePlayer from "./components/GamePlayer";
import InitText from "./components/InitText";
import * as keyCodeConstants from "./constants/keycodeConstants";
import { mapGetters } from "vuex";

const isArrowLeftPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_LEFT;
};
const isArrowRightPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_RIGHT;
};
const isArrowUpPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_UP;
};

const isArrowDownPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ARROW_DOWN;
};

const isEnterPressed = (eventKeycode) => {
  return eventKeycode === keyCodeConstants.ENTER;
}

// const SEC = 1000;

export default {
  created() {
    window.addEventListener("keydown", this.onKeyPressed);
    this.configKonva.width = this.$store.getters["map/configMap"].width;
    this.configKonva.height = this.$store.getters["map/configMap"].height;
  },
  components: {
    GamePlayer,
    DodgeMap,
    BlockBall,
    InitText
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
      intervalMakeBall: "",
    };
  },
  computed: {
    ...mapGetters({
      blockBalls: "blockBall/getBlockBalls",
      gameStatus: "game/getGameStatus",
    }),
    getHeight() {
      return this.configKonva.height;
    },
    getWidth() {
      return this.configKonva.width;
    }
  },
  methods: {
    onKeyPressed(e) {
      if (isArrowLeftPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerLeft");
      } else if (isArrowRightPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerRight");
      } else if (isArrowUpPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerUp");
      } else if (isArrowDownPressed(e.keyCode)) {
        this.$store.dispatch("player/movePlayerDown");
      } else if (isEnterPressed(e.keyCode)) {
        this.$store.dispatch("game/startGame");
      }
    },
  },
};
</script>
