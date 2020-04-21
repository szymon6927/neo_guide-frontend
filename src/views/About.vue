<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
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
                      <p>Lębork</p>
                      <p>
                        I wspólnota przy Parafii pw.
                        Najświętszej Maryi Panny Królowej Polski w Lęborku
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

                    <el-divider><i class="el-icon-user-solid"></i></el-divider>

                    <div class="break-word">
                      <p class="author"><strong>Jacek Dąbrowski</strong></p>
                      <p>Lębork</p>
                      <p>
                        I wspólnota przy Parafii Św. Jakuba Apostoła w Lęborku
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
import { mapGetters } from 'vuex';

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    Footer,
    TopBar,
  },
  computed: {
    ...mapGetters(['hideMenu', 'isMobile']),
  },
  metaInfo() {
    return {
      title: 'O nas',
      titleTemplate: '%s | Neo Guide – Śpiewnik NEO',
    };
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
