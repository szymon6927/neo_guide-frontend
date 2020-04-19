<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
      <el-row class="main-row">

        <el-col :span="24">
          <TopBar name="Profil" />
        </el-col>

        <el-col :span="24">
          <el-main>

            <div class="content-wrapper">
              <h1>Edytuj profil</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>

              <div class="main-content">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <img src="../assets/img/content/undraw_profile_6l1l.png" width="100%"/>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <Profile />
                  </el-col>
                </el-row>
              </div>
            </div>
            <Footer />
          </el-main>
        </el-col>

      </el-row>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';

import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import Profile from '@/components/Profile.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'ProfileView',
  components: {
    Footer,
    NavBar,
    Profile,
    TopBar,
  },
  computed: {
    ...mapGetters(['hideMenu', 'isMobile']),
  },
};
</script>

<style scoped>

</style>
