<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Pomoc" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <h1>Pomoc</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>

              <div class="main-content">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <h2>Błędy / Pomoc / Pytania</h2>
                    <div class="break-word">
                      <p>Jeżeli zauważyleś jakieś błędy lub coś nie działa prawidłowo
                        proszę skontaktuj się z nami jak najszybciej, pomoże to zarówno mi
                        w jak najszybszym rozwiązaniu problemu,
                        jak i wszystkim innym osobom korzystającym z aplikacji
                      </p>
                      <p>
                        <span class="name"><strong>E-mail:</strong></span>
                        <a href="mailto:miks.szymon@gmail.com">miks.szymon@gmail.com</a>
                      </p>
                      <p>
                        Na powyszyż adres wyślij wiadomość z tytułem
                        <strong>neoguide.pl - problem</strong>
                        oraz opisem problemu.
                      </p>
                      <p><strong>Z góry dziękuję !</strong></p>
                    </div>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <img src="../assets/img/content/undraw_onboarding_o8mv.png" width="100%"/>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="12" :lg="24" :xl="{span: 12, offset: 6}">
                    <img src="../assets/img/content/undraw_detailed_information_3sp6.png"
                      width="100%"/>
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
  name: 'home',
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
      title: 'Pomoc',
      titleTemplate: '%s | Neo Guide – Śpiewnik NEO',
    };
  },
};
</script>

<style scoped>
  .name {
    margin-right: 10px;
  }
</style>
