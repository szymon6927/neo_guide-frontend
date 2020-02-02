<template>
  <el-footer>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12">
        <div class="copyright">Neo Guide, Copyright © 2020 All Rights Reserved</div>
      </el-col>
      <el-col :xs="12" :sm="12">
        <div class="author">Author: Szymon Miks</div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  .el-footer {
    height: auto !important;
    border-top: 1px solid #EBEEF5;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .el-footer .copyright {
      text-align: left
  }

  .el-footer .author {
      text-align: right;
  }
</style>
