<template>
  <el-container>
    <NavBar />
    <el-container v-bind:class="{ noScroll: isMobile && !hideMenu }">
      <el-row class="main-row">
        <el-col :span="24">
          <TopBar name="Home" />
        </el-col>

        <el-col :span="24">
          <el-main>
            <div class="content-wrapper">
              <h1>Home</h1>
              <el-divider><i class="el-icon-more"></i></el-divider>
              <div class="main-content">

                <el-row>
                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="image-wrapper">
                      <img class="main" src="../assets/img/content/spiewnik_neo.png" />
                    </div>
                  </el-col>

                  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <h2 class="text-center">Witajcie bracia i siostry!</h2>

                    <p>
                      Aplikacja <strong>Neo Guide</strong>, powstała jako pomoc dla członków
                      oraz kantorów wspólnot <strong>neokatechumenalnych</strong>
                      i ma być wersją online śpiewnika <strong>"Zmartwychwsał Pan 2018"</strong>
                    </p>

                    <div>
                      <p>Lista dostępnych na ten moment funkcjonalności:</p>
                      <ul>
                        <li>lista wszystkich pieśni wraz z ich nagraniami i tekstami</li>
                        <li>możliwość wyszukiwania pieśni po tytule</li>
                        <li>możliwość wyszukiwania pieśni po numerze strony</li>
                        <li>możliwość filtrowania pieśni względem koloru kartki</li>
                        <li>możliwość sortowania pieśni</li>
                        <ul>
                          <li>po nazwie malejąco</li>
                          <li>po nazwie rosnąco</li>
                          <li>po numerze strony malejąco</li>
                          <li>po numerze strony rosnąco</li>
                        </ul>
                      </ul>
                    </div>

                    <div>
                      <p>Planowane są również inne funkcjonalności, ale o tym w przyszłości :)</p>
                    </div>
                  </el-col>
                </el-row>

                <el-divider><i class="el-icon-more"></i></el-divider>

                <el-row>
                  <el-col :span="24">
                    <section>
                      <h2 class="text-center">Nawigacja</h2>

                      <div class="navigation text-center">
                        <router-link :to="{ name: 'psalms'}">
                          <el-button type="warning">Pieśni</el-button>
                        </router-link>
                        <router-link :to="{ name: 'about'}">
                          <el-button type="warning">O nas</el-button>
                        </router-link>
                        <router-link :to="{ name: 'contact'}">
                          <el-button type="warning">Kontakt</el-button>
                        </router-link>
                        <router-link :to="{ name: 'help'}">
                          <el-button type="warning">Pomoc</el-button>
                        </router-link>
                      </div>
                    </section>

                  </el-col>
                </el-row>

                <el-divider><i class="el-icon-more"></i></el-divider>

                <el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="{span: 12, offset: 6}"
                    :xl="{span: 12, offset: 6}">
                    <div class="image-wrapper">
                      <img class="logo" src="../assets/img/content/logo_ave_maria.jpg" />
                    </div>
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
      title: 'Strona Główna',
      titleTemplate: '%s | Neo Guide – Śpiewnik NEO',
    };
  },
};
</script>

<style scoped>
  .main-content {
    text-align: left;
  }

  .image-wrapper {
    text-align: center;
  }

  .image-wrapper img {
    width: 100%;
  }

  .image-wrapper .main {
    width: 80%;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

  .image-wrapper .logo {
    width: 40%;
  }

  .navigation {
    margin-bottom: 2rem;
  }

  .navigation button {
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  }

</style>
