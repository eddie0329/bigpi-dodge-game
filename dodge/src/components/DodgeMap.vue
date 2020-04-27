<template>
  <v-rect
    :config="configMap"
  />
</template>

<script>
export default {
  data() {
    return {
      configMap: {
        x: 0,
        y: 0,
        width: 800,
        height: 800,
        fill: 'black',
      }
    }
  }
};
</script>

<style></style>
