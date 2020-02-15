<template>
  <div class="top-bar" v-bind:class="{sticky: isSticky}">
    <div class="open-close-menu">
      <i class="el-icon-s-fold" @click="handleMenu"></i>
    </div>
    <el-page-header class="top-bar-header" @back="goBack" title="wstecz"
      :content=name></el-page-header>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'TopBar',
  props: ['name'],
  computed: {
    ...mapState(['isCollapse']),
    ...mapGetters(['hideMenu', 'isMobile', 'isCollapse']),
  },
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkSticky);
    this.checkSticky();
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleMenu() {
      if (this.isMobile) {
        this.$store.commit('SET_HIDE_MENU', !this.hideMenu);
      } else {
        this.$store.commit('SET_IS_COLLAPSE', !this.isCollapse);
      }
    },
    checkSticky() {
      const mainHeight = document.querySelector('main').offsetHeight;

      if ((window.scrollY > 65) && (mainHeight > document.documentElement.clientHeight + 65)) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>

<style scoped>
  .top-bar {
    padding: 1rem;
    background: #fafafa;
    border-bottom: 1px solid #EBEEF5;
  }

  .top-bar.sticky {
    width: 100%;
    position: fixed;
    z-index: 999;
  }

  .top-bar .open-close-menu {
    position: absolute;
    left: 15px;
    top: 0;
    border-right: 1px solid #EBEEF5;
    font-size: 24px;
    cursor: pointer;
  }

  .top-bar .open-close-menu i {
    padding: 18px 20px 15px 10px;
  }

  .top-bar .open-close-menu i:hover {
    color: #e6a23d;
  }

  .top-bar .top-bar-header {
    margin-left: 5rem;
  }
</style>
