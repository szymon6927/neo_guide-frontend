<template>
  <el-header>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8">
        <el-input placeholder="Search" prefix-icon="el-icon-search"
          class="psalms-search"></el-input>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style scoped>
  .el-header {
    height: auto !important;
    border-bottom: 1px solid #EBEEF5;
    margin-bottom: 2rem;
  }

  .psalms-search {
    padding: 1rem 0;
  }
</style>
