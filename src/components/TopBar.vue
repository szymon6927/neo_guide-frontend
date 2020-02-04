<template>
  <el-page-header class="top-bar" @back="goBack" title="wstecz" :content=name></el-page-header>
</template>

<script>
export default {
  name: 'TopBar',
  props: ['name'],
  methods: {
    goBack() {
      this.$router.back();
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
</style>
