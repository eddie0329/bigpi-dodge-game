<template>
  <v-circle :config="configBlockBall" />
</template>

<script>
const randomInt = (max) => 1 + Math.floor(Math.random() * max);

export default {
  created() {
    this.moveBall();
  },
  destroyed() {
    clearInterval(this.intervalMoveBall);
  },
  props: {
    configKonva: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      configBlockBall: {
        x: randomInt(this.configKonva.width),
        y: 50,
        radius: 10,
        fill: "white",
        stroke: "blue",
        strokeWidth: 4,
      },
      intervalMoveBall: "",
    };
  },
  methods: {
    moveBall() {
      this.intervalMoveBall = setInterval(() => {
        this.configBlockBall.x += randomInt(10);
        this.configBlockBall.y += randomInt(10);
      }, 100);
    },
  },
};
</script>

<style></style>
