<template>
  <el-container>
    <NavBar />
    <el-container>
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="O nas" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <h1>O nas</h1>

              <el-divider><i class="el-icon-more"></i></el-divider>

              <div class="main-content">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="break-word">
                      <h2 class="text-center">Autor</h2>
                      <p class="author"><strong>Szymon Miks</strong></p>
                      <p>
                        <span class="name"><strong>Facebook:</strong></span>
                        <a href="https://www.facebook.com/szymon.miks" target="_blank">https://www.facebook.com/szymon.miks</a>
                      </p>
                      <p>
                        <span class="name"><strong>GitHub:</strong></span>
                        <a href="https://github.com/szymon6927" target="_blank">https://github.com/szymon6927</a>
                      </p>
                      <p>
                        <span class="name"><strong>E-mail:</strong></span>
                        <a href="mailto:miks.szymon@gmail.com">miks.szymon@gmail.com</a>
                      </p>
                      <p>
                        <span class="name"><strong>Strona WWW:</strong></span>
                        <a href="https://szymonmiks.pl/" target="_blank">https://szymonmiks.pl/</a>
                      </p>
                    </div>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <img src="../assets/img/content/undraw_feeling_proud_qne1.png" width="100%"/>
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
  .author {
    font-size: 18px;
  }

  .name {
    margin-right: 10px;
  }

  .image-wrapper .logo {
    width: 40%;
    margin: 1rem 0;
  }
</style>
