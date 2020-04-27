<template>
  <v-rect
    :config="mapStatus"
  />
</template>

<script>

export default {
  computed: {
    mapStatus() {
      return this.$store.getters['map/configMap'];
    }
  },
};
</script>

<style></style>
