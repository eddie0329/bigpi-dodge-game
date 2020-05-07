<template>
  <v-rect :config="configEraserItem" />
</template>

<script>

export default {
  props: {
    configEraserItem : {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
