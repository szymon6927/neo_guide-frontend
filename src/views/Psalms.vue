<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
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
import { mapGetters } from 'vuex';

import NavBar from '@/components/NavBar.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';
import Psalms from '@/components/Psalms.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'PsalmsView',
  components: {
    NavBar,
    Search,
    Footer,
    Psalms,
    TopBar,
  },
  computed: {
    ...mapGetters(['hideMenu', 'isMobile']),
  },
  metaInfo() {
    return {
      title: 'Pieśni',
      titleTemplate: '%s | Neo Guide – Śpiewnik NEO',
    };
  },
};
</script>

<style scoped>

</style>
