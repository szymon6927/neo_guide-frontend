<template>
  <div class="top-bar" v-bind:class="{sticky: isSticky, closedMenu: isCollapse, mobile: isMobile}">
    <div class="open-close-menu">
      <i class="el-icon-s-fold" @click="handleMenu"></i>
    </div>
    <el-page-header
      class="top-bar-header"
      title="wstecz"
      @back="goBack"
      :content=name>
    </el-page-header>

    <div class="logout" v-if="isLoggedIn">
      <el-button
        type="danger"
        icon="el-icon-turn-off"
        plain
        round
        :circle="isMobile"
        @click="handleLogoutButtonClick">
        {{ logoutButtonText }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'TopBar',
  props: ['name'],
  computed: {
    ...mapState(['isCollapse', 'hideMenu']),
    ...mapGetters(['isMobile']),
    ...mapState('userModule', ['isLoggedIn']),
  },
  data() {
    return {
      isSticky: false,
      logoutButtonText: null,
    };
  },
  created() {
    this.setLogoutButtonText();
  },
  mounted() {
    window.addEventListener('scroll', this.checkSticky);
    this.checkSticky();
  },
  methods: {
    ...mapActions({
      setHideMenu: 'hideMenu',
      setIsCollapse: 'isCollapse',
    }),
    ...mapActions('userModule', ['logout']),
    setLogoutButtonText() {
      if (this.isMobile) {
        this.logoutButtonText = '';
      } else {
        this.logoutButtonText = 'Wyloguj się';
      }
    },
    goBack() {
      this.$router.back();
    },
    handleMenu() {
      if (this.isMobile) {
        this.setHideMenu(!this.hideMenu);
      } else {
        this.setIsCollapse(!this.isCollapse);
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
    handleLogoutButtonClick() {
      this.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 1rem 0 0;
    background: #fafafa;
    border-bottom: 1px solid #EBEEF5;
  }

  .top-bar.sticky {
    position: fixed;
    z-index: 999;
  }

  .top-bar.sticky {
    width: calc(100% - 315px);
  }

  .top-bar.sticky.closedMenu {
    width: calc(100% - 75px);
  }

  .top-bar .open-close-menu {
    border-right: 1px solid #EBEEF5;
    font-size: 22px;
  }

  .top-bar.sticky.mobile {
    width: 100%;
  }

  .top-bar.sticky.mobile .logout {
    margin-right: 1rem;
  }

  .top-bar .open-close-menu i {
    padding: 15px;
  }

  .top-bar .open-close-menu i:hover {
    color: #e6a23d;
  }

  .top-bar .top-bar-header {
    margin-left: 1rem;
  }

  .top-bar .logout {
    margin-left: auto;
  }
</style>
