<template>
  <el-footer>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12">
        <div class="copyright">Neo Guide, Copyright © 2020 All Rights Reserved</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12">
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

  @media (max-width: 992px) {
    .el-footer .copyright, .el-footer .author {
      text-align: center
    }

    .el-footer .author {
      margin-top: 1rem;
    }
  }
</style>
