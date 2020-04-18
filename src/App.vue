<template>
  <div id="app" v-loading="loading">

    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>

    <MenuOverlay />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MenuOverlay from '@/components/MenuOverlay.vue';

export default {
  components: {
    MenuOverlay,
  },
  computed: {
    ...mapState(['loading', 'isMobile']),
    ...mapState('userModule', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('alertModule', { clearAlerts: 'clear' }),
    ...mapActions(['hideMenu']),
  },
  watch: {
    $route() {
      // clear alert on location change
      this.clearAlerts();

      if (this.isMobile) {
        this.hideMenu(true);
      }
    },
    isLoggedIn(newValue, oldValue) {
      // if users is logging out redirect him to the login page
      if (newValue === false && oldValue === true && this.$router.currentRoute.name !== 'login') {
        this.$router.push('/login');
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
