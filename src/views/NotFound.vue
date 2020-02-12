<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Brak strony" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="{span: 10, offset: 7}"
                  :xl="{span: 10, offset: 7}">
                  <img src="../assets/img/content/undraw_page_not_found_su7k.png" width="100%"/>
                </el-col>

                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <h1>Strona nie znaleziona ...</h1>
                  <div class="break-word">
                    <p>Jeżli masz jakiekolwiek problemy, sugestie
                      zapraszamy do kontaktu!
                    </p>
                    <p>
                      <span class="name"><strong>E-mail:</strong></span>
                      <a href="mailto:miks.szymon@gmail.com">miks.szymon@gmail.com</a>
                    </p>
                  </div>
                </el-col>
              </el-row>
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
  name: 'NotFound',
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
      title: 'Strona nie znaleziona :(',
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
