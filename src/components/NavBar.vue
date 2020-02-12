<template>
  <transition name="slide">
    <el-aside v-bind:class="{ collapsed: isCollapse, mobile: isMobile }" v-if="!hideMenu">
      <router-link :to="{ name: 'home'}">
        <img class="main-logo" src="../assets/img/logo.png" width="150px" v-if="!isCollapse" />
      </router-link>
      <h1 class="app-name" v-if="!isCollapse">Neo Guide</h1>
      <el-menu :router="true" :default-active="$route.path" class="main-menu"
        background-color="#fafafa" text-color="#000" active-text-color="#cc810d"
        :collapse="isCollapse">
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="/psalms">
          <i class="el-icon-message-solid"></i>
          <span>Pieśni</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-s-custom"></i>
          <span>O nas</span>
        </el-menu-item>
        <el-menu-item index="/contact">
          <i class="el-icon-phone"></i>
          <span>Kontakt</span>
        </el-menu-item>
        <el-menu-item index="/help">
          <i class="el-icon-setting"></i>
          <span>Pomoc</span>
        </el-menu-item>
      </el-menu>
      <el-button class="hide-menu" type="warning" round v-on:click="toggleCollapse"
        icon="el-icon-s-fold" v-if="!isCollapse">Ukryj menu</el-button>
      <el-button class="show-menu" icon="el-icon-more" v-on:click="toggleCollapse"
        v-else circle></el-button>
    </el-aside>
  </transition>
</template>


<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'SideBar',
  computed: {
    ...mapState(['isMobile', 'hideMenu', 'isCollapse']),
    ...mapGetters(['isMobile', 'hideMenu', 'isCollapse']),
  },
  data() {
    return {
      activeLink: '/',
    };
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

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
      transition: transform 0.5s ease;
  }

  .slide-enter,
  .slide-leave-to {
      transform: translateX(-100%);
      transition: all 250ms ease-in 0s
  }

  .el-aside {
    background: #fafafa;
    min-height: 100vh;
    border-right: 1px solid #EBEEF5;
  }

  .el-aside.collapsed {
    width: 65px !important;
  }

  .el-aside.mobile {
    position: fixed;
    z-index: 9999;
    height: 100%;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
  }

  .el-menu {
    border-right: none;
  }

  .app-name {
    font-size: 24px;
  }

  .main-logo {
    margin-top: 1.5rem;
  }

  .el-menu-item {
    font-size: 16px;
  }

  .hide-menu {
    margin-top: 3rem;
  }

  .show-menu {
    margin-top: 1rem;
  }

  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #b8892e !important;
    color: #fff !important;
  }

  .el-menu-item:focus i, .el-menu-item:hover i {
    color: #fff !important;
  }

  @media (max-width: 340px) {
    .el-aside.mobile {
      width: 270px !important;
    }
  }
</style>
