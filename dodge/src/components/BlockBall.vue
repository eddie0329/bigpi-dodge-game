<template>
  <v-circle :config="configBlockBall" />
</template>

<script>

export default {
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
};
</script>

<style></style>
