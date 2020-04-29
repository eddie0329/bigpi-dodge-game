<template>
  <v-circle :config="configBlockBall" />
</template>

<script>

export default {
  created() {
    // this.moveBall();
  },
  destroyed() {
    // clearInterval(this.intervalMoveBall);
  },
  props: {
    configBlockBall: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      intervalMoveBall: "",
    };
  },
  computed: {

  },
  methods: {
    // moveBall() {
    //   this.intervalMoveBall = setInterval(() => {
    //     this.configBlockBall.x += randomInt(10);
    //     this.configBlockBall.y += randomInt(10);
    //   }, 100);
    // },
  },
};
</script>

<style></style>
