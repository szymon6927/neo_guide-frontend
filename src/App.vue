<template>
  <div id="app" v-loading="loading">
    <router-view/>
    <MenuOverlay />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MenuOverlay from '@/components/MenuOverlay.vue';

export default {
  components: {
    MenuOverlay,
  },
  computed: {
    ...mapState(['loading', 'hideMenu', 'isMobile']),
  },
  created() {
    this.$store.dispatch('getPsalms');
  },
  methods: {
    toggleCollapse() {
      if (!this.isMobile) {
        this.$store.commit('SET_IS_COLLAPSE', !this.isCollapse);
      } else {
        this.$store.commit('SET_HIDE_MENU', !this.hideMenu);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
