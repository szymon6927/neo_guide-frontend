<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
      <el-row class="main-row">

        <el-col :span="24">
          <TopBar name="Zmiana hasła" />
        </el-col>

        <el-col :span="24">
          <el-main>

            <div class="content-wrapper">
              <h1>Zmień hasło</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>

              <div class="main-content">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <img src="../../assets/img/content/undraw_secure_login_pdn4.png" width="100%"/>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <ChangePassword />
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
import ChangePassword from '@/components/auth/ChangePassword.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'ChangePasswordView',
  components: {
    Footer,
    NavBar,
    ChangePassword,
    TopBar,
  },
  computed: {
    ...mapGetters(['hideMenu', 'isMobile']),
  },
};
</script>

<style scoped>

</style>
