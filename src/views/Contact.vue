<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-main>
        <p>Kontakt</p>
        <Footer />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>

</style>
