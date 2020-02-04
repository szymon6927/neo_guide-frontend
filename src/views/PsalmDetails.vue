<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar :name=topBarName />
        </el-col>

        <el-col :span="24">
          <el-main>
            <Search />
            <Psalm v-bind="$props" />
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
import Search from '@/components/Search.vue';
import Psalm from '@/components/Psalm.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'psalmDetails',
  props: ['psalmID'],
  components: {
    NavBar,
    Footer,
    Search,
    Psalm,
    TopBar,
  },
  data() {
    return {
      topBarName: `Pieśń / ${this.psalmID}`,
    };
  },
};
</script>

<style scoped>

</style>
