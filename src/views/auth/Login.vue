<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Logowanie" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <h1>Panel logowania</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>

              <div class="main-content">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <img
                      class="login-image"
                      src="../../assets/img/content/undraw_authentication_fsn5.png"
                    />
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <Login class="login-section" />
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
import Footer from '@/components/Footer.vue';
import Login from '@/components/auth/Login.vue';
import NavBar from '@/components/NavBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'home',
  components: {
    Footer,
    Login,
    NavBar,
    TopBar,
  },
  metaInfo() {
    return {
      title: 'Panel logowania',
      titleTemplate: '%s | Neo Guide – Śpiewnik NEO',
    };
  },
};
</script>

<style scoped>
  .main-content {
    margin: 6rem 0;
  }

  .login-section {
    margin-top: 5rem;
  }

  .login-image {
    width: 500px
  }

  @media (max-width: 1200px) {
    .login-image {
      width: 300px
    }

    .login-section {
      margin-top: 1rem;
    }

    .main-content {
      margin: 2rem 0;
    }
  }

  @media (max-width: 320px) {
    .login-image {
      width: 220px
    }
  }
</style>
