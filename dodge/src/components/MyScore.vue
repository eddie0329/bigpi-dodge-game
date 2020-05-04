<template>
  <v-text :config="configScore" />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    mapHeight: {
      type: Number,
      required: true,
    },
    mapWidth: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      configScore: {
        width: this.mapWidth,
        height: this.mapHeight / 10,
        text: "00:00:00",
        fontSize: 20,
        align: "center",
        verticalAlign: "middle",
        fill: "white",
        fontFamily: "VT323, monospace",
      },
    };
  },
  computed: {
    ...mapGetters({
      score: "game/getScore"
    })
  },
  watch: {
    score(oldValue, newValue){
      this.configScore.text = newValue;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
</style>
