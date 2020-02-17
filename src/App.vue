<template>
  <div id="app" v-loading="loading">
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
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
@import url('https://rsms.me/inter/inter.css');

html {
  font-family: 'Inter', sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

body {
  margin: 0;
}
</style>
