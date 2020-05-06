<template>
  <v-rect :config="configItem"/>
</template>

<script>
export default {
  data() {
    return {
      configItem: {
        x: 200,
        y: 100,
        width: 10,
        height: 10,
        fill: "yellow"
      }
    }
  }

}
</script>

<style>

</style>