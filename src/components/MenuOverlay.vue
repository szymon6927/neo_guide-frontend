<template>
  <div class="menu-overlay" v-if="isMobile"
      v-bind:class="{ show: !hideMenu }"
      @click="menuHandler"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MenuOverlay',
  computed: {
    ...mapState(['hideMenu', 'isMobile']),
  },
  methods: {
    menuHandler() {
      if (!this.hideMenu) {
        this.$store.commit('SET_HIDE_MENU', !this.hideMenu);
      }
    },
  },
};
</script>

<style scoped>
  .menu-overlay {
    z-index: 2000;
    background-color: rgba(0, 0, 0, .2);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    display: none;
  }

  .menu-overlay.show {
    display: block;
  }
</style>
