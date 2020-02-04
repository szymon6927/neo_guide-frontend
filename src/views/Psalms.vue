<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Pieśni" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <Search />
            <Psalms />
            <Footer />
          </el-main>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';
import Psalms from '@/components/Psalms.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    Search,
    Footer,
    Psalms,
    TopBar,
  },
};
</script>

<style scoped>

</style>
