<template>
  <el-aside>
    <router-link :to="{ name: 'home'}">
      <img class="main-logo" src="../assets/img/logo.png" width="150px" />
    </router-link>
    <h1 class="app-name">Neo Guide</h1>
    <el-menu :router="true" :default-active="$route.path" class="main-menu"
      background-color="#fafafa" text-color="#000" active-text-color="#cc810d">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="/psalms">
        <i class="el-icon-menu"></i>
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
  </el-aside>
</template>


<script>
export default {
  name: 'SideBar',
  data() {
    return {
      activeLink: '/',
    };
  },
};
</script>

<style scoped>
  .el-aside {
    background: #fafafa;
    min-height: 100vh;
    border-right: 1px solid #EBEEF5;
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

  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #b8892e !important;
    color: #fff !important;
  }

  .el-menu-item:focus i, .el-menu-item:hover i {
    color: #fff !important;
  }
</style>
