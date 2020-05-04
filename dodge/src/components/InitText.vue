<template>
  <v-text ref="startText" :config="configStartText"></v-text>
</template>

<script>

export default {
  props: {
    mapHeight: {
      type: Number,
      required: true
    },
    mapWidth: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      configStartText: {
        width: this.mapWidth,
        height: this.mapHeight,
        text: "Press Enter \n to Start Dodge Game",
        fontSize: 35,
        align: "center",
        verticalAlign: "middle",
        fill: "white",
        fontFamily: "VT323, monospace",
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
</style>
