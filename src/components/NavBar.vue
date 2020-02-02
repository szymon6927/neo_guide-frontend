<template>
  <el-aside>
    <img class="main-logo" src="../assets/img/logo.png" width="150px" />
    <h1 class="app-name">Neo Guide</h1>
    <el-menu class="main-menu" background-color="#fafafa" text-color="#000"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>Pieśni</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-custom"></i>
        <span>O nas</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-phone"></i>
        <span>Kontakt</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Pomoc</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>


<script>
export default {
  name: 'SideBar',
};
</script>

<style scoped>
  .el-aside {
    background: #fafafa;
    min-height: 100vh;
    border-right: 1px solid #EBEEF5;
  }

  .el-main {
    border-right: none;
  }

  .main-logo {
    margin-top: 1.5rem;
  }
</style>
