<template>
  <div id="app">
    <v-stage :config="configKonva">
      <v-layer>
        <DodgeMap />
        <BlockBall
          v-for="blockBall in blockBalls"
          :config-block-ball="blockBall.configBlockBall"
          :key="blockBall.id"
        />
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
import { mapGetters } from "vuex";

const isArrowLeftPressed = eventKeycode => {
  return eventKeycode === keyCodeConstants.ARROW_LEFT ? true : false;
};
const isArrowRightPressed = eventKeycode => {
  return eventKeycode === keyCodeConstants.ARROW_RIGHT ? true : false;
};
const isArrowUpPressed = eventKeycode => {
  return eventKeycode === keyCodeConstants.ARROW_UP ? true : false;
};

const isArrowDownPressed = eventKeycode => {
  return eventKeycode === keyCodeConstants.ARROW_DOWN ? true : false;
};

// const SEC = 1000;

export default {
  created() {
    window.addEventListener("keydown", this.onKeyDownMove);
    this.intervalMakeBall = setInterval(this.makeBall, 1000);
    this.configKonva.width = this.$store.getters["map/configMap"].width;
    this.configKonva.height = this.$store.getters["map/configMap"].height;
  },
  components: {
    GamePlayer,
    DodgeMap,
    BlockBall
  },
  destroyed() {
    clearInterval(this.intervalMakeBall);
  },
  data() {
    return {
      configKonva: {
        width: 0,
        height: 0
      },
      intervalMakeBall: ""
    };
  },
  computed: {
    ...mapGetters({
      blockBalls: "blockBall/getBlockBalls"
    })
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
      this.$store.dispatch("blockBall/addBall");
      this.$store.dispatch("blockBall/moveBall");
    }
  }
};
</script>
