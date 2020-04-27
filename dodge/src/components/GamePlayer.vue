<template>
  <v-circle :config="status"></v-circle>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState("player", ["status"]),
  }
};
</script>

<style></style>
