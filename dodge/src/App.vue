<template>
  <div id="app">
    <v-stage :config="configKonva">
      <v-layer>
        <v-rect :config="{
          x: 0,
          y: 0,
          width: 200,
          height: 200,
          fill: 'black'
        }" />
        <GamePlayer />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
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
export default {
  created() {
    window.addEventListener("keydown", this.onKeyDownMove);
  },
  mounted() {},
  components: {
    GamePlayer,
  },
  data() {
    return {
      configKonva: {
        width: 200,
        height: 200,
      },
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
  },
};
</script>
