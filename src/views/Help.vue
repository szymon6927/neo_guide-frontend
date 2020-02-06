<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Pomoc" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <h1>Pomoc</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>
            </div>
            <Footer />
          </el-main>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    Footer,
    TopBar,
  },
};
</script>

<style scoped>

</style>
