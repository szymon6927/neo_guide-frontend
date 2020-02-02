<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-main>
        <Search />
        <Psalms />
        <Footer />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';
import Psalms from '@/components/Psalms.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    Search,
    Footer,
    Psalms,
  },
};
</script>

<style scoped>
  .el-main {
    padding: 15px;
  }
</style>
