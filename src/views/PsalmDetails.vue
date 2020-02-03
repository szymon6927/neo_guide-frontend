<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-main>
        <Search />
        <Psalm v-bind="$props" />
        <Footer />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Search from '@/components/Search.vue';
import Psalm from '@/components/Psalm.vue';

export default {
  name: 'psalmDetails',
  props: ['psalmID'],
  components: {
    NavBar,
    Footer,
    Search,
    Psalm,
  },
};
</script>

<style scoped>

</style>
