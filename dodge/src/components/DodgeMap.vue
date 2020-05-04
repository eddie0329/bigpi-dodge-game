<template>
  <v-image :config="mapStatus" />
</template>

<script>
import mapImage from "../assets/MAP.png";

export default {
  created() {
    const image = new window.Image();
    image.src = mapImage;
    image.onload = () => {
      this.$store.dispatch("map/setMap", image);
    };
  },
  computed: {
    mapStatus() {
      return this.$store.getters["map/configMap"];
    },
  },
};
</script>

<style></style>
