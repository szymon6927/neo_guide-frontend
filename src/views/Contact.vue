<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Kontakt" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <h1>Kontakt</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>

              <div class="main-content">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <h2>Zapraszamy do kontaktu</h2>
                    <div class="break-word">
                      <p>
                        Jeżeli masz jakiekolwiek pytania, propozycje, sugestie lub pomysły na
                        <strong>nowe funkcjonalności</strong>, skontaktuj się z nami mailowo!
                      </p>
                      <p>
                        <span class="name"><strong>E-mail:</strong></span>
                        <a href="mailto:miks.szymon@gmail.com">miks.szymon@gmail.com</a>
                      </p>
                    </div>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <img src="../assets/img/content/undraw_contact_us_15o2.png" width="100%"/>
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
  name: 'ContactView',
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
      title: 'Kontakt',
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
