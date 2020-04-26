<template>
  <el-header class="search-wrapper" v-if="showSearch">
    <div class="search-bar">
      <div class="filters">
        <el-input
          class="filter text"
          placeholder="Nazwa pieśni, strona"
          prefix-icon="el-icon-search"
          :size="inputAndSelectSize"
          v-model="search.text"
          @keyup.enter.native="searchPsalms"
          v-bind:class="{sticky: isSticky, mobile: isMobile}">
        </el-input>

        <el-select
          class="filter"
          placeholder="Kolor kartki"
          clearable
          multiple
          filterable
          collapse-tags
          :size="inputAndSelectSize"
          :no-match-text="search.noMatchSelectText"
          v-model="search.cardColor">
          <el-option
            v-for="item in search.cardColorOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select
          class="filter liturgical-period"
          placeholder="Okres liturgiczny"
          clearable
          multiple
          filterable
          collapse-tags
          :size="inputAndSelectSize"
          :no-match-text="search.noMatchSelectText"
          v-model="search.liturgicalPeriod">
          <el-option
            v-for="item in search.liturgicalPeriodOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select
          class="filter sort"
          placeholder="Sortowanie"
          clearable
          :size="inputAndSelectSize"
          v-model="search.sorting">
          <el-option
            v-for="item in search.sortingOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select
          class="filter type"
          placeholder="Rodzaj (Maryjne, części stałe itp)"
          clearable
          multiple
          filterable
          collapse-tags
          :size="inputAndSelectSize"
          :no-match-text="search.noMatchSelectText"
          v-model="search.psalmType">
          <el-option
            v-for="item in search.psalmTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select
          class="filter stage"
          placeholder="Etap"
          clearable
          multiple
          filterable
          collapse-tags
          :size="inputAndSelectSize"
          :no-match-text="search.noMatchSelectText"
          v-model="search.neoStage">
          <el-option
            v-for="item in search.neoStageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="buttons">
        <el-button
          type="warning"
          class="search"
          round
          @click="searchPsalms">
          Szukaj
        </el-button>

        <el-button
          type="info"
          class="clear-filters"
          round
          @click="clearFilters">
          Wyczyść
        </el-button>
      </div>
    </div>
  </el-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      search: {
        text: '',
        cardColor: [],
        psalmType: [],
        liturgicalPeriod: [],
        neoStage: [],
        sorting: '',
        noMatchSelectText: 'Brak wyników :(',
        cardColorOptions: [{
          value: 'white',
          label: 'biały',
        }, {
          value: 'yellow',
          label: 'żółty',
        }, {
          value: 'grey',
          label: 'szary',
        }, {
          value: 'green',
          label: 'zielony',
        }, {
          value: 'blue',
          label: 'niebieski',
        }],
        psalmTypeOptions: [{
          value: 'peace_sign',
          label: 'Śpiewy na znak pokoju',
        }, {
          value: 'fraction_of_bread',
          label: 'Śpiewy na łamanie chleba',
        }, {
          value: 'adoration',
          label: 'Śpiewy na krew Pańską + uwielbienie',
        }, {
          value: 'final_pslam',
          label: 'Śpiewy na zakończenie eucharystii',
        }, {
          value: 'solid_pslams',
          label: 'Śpiewy części stałych',
        }, {
          value: 'virgin_mary_psalm',
          label: 'Śpiewy Maryjne',
        }, {
          value: 'penitential_liturgy',
          label: 'Śpiewy na liturgię pokutną',
        }],
        liturgicalPeriodOptions: [{
          value: 'advent',
          label: 'Adwent',
        }, {
          value: 'christmas',
          label: 'Boże Narodzenie',
        }, {
          value: 'lent',
          label: 'Wielki Post',
        }, {
          value: 'easter',
          label: 'Wielkanoc',
        }, {
          value: 'normal_period',
          label: 'Okres zwykły',
        }],
        neoStageOptions: [{
          value: 'first_scrutinium',
          label: 'I Scrutinium',
        }, {
          value: 'shema',
          label: 'Shema',
        }, {
          value: 'second_scrutinium',
          label: 'II Scrutinium',
        }, {
          value: 'introduction_to_prayer',
          label: 'Wprowadzenie w modlitwę',
        }, {
          value: 'traditio',
          label: 'Traditio',
        }, {
          value: 'reditio',
          label: 'Reditio',
        }, {
          value: 'our_father',
          label: 'Ojcze nasz',
        }, {
          value: 'choosing',
          label: 'Wybranie',
        }, {
          value: 'baptism',
          label: 'Odnowienie przyrzeczeń chrzcielnych',
        }],
        sortingOptions: [{
          value: 'name',
          label: 'Po nazwie (rosnąco)',
        }, {
          value: '-name',
          label: 'Po nazwie (malejąco)',
        }, {
          value: 'page_number',
          label: 'Po numerze strony (rosnąco)',
        }, {
          value: '-page_number',
          label: 'Po numerze strony (malejąco)',
        }],
      },
      showSearch: this.displaySearch(),
      isSticky: false,
      inputAndSelectSize: 'large',
    };
  },
  computed: {
    ...mapGetters(['isMobile']),
  },
  created() {
    this.setInputAndSelectSize();
  },
  mounted() {
    window.addEventListener('scroll', this.checkSticky);
    this.checkSticky();
  },
  methods: {
    ...mapActions('psalmsModule', { getFilteredPsalms: 'getFilteredPsalms' }),
    clearFilters() {
      this.search.text = '';
      this.search.cardColor = [];
      this.search.psalmType = [];
      this.search.liturgicalPeriod = [];
      this.search.neoStage = [];
      this.search.sorting = '';

      this.searchPsalms();
    },
    searchPsalms() {
      const filterValues = {
        searchText: this.search.text,
        searchCardColor: this.search.cardColor,
        searchSorting: this.search.sorting,
        searchPsalmType: this.search.psalmType,
        searchLiturgicalPeriod: this.search.liturgicalPeriod,
        searchNeoStage: this.search.neoStage,
      };

      this.getFilteredPsalms(filterValues);
    },
    displaySearch() {
      return this.$route.name === 'psalms';
    },
    checkSticky() {
      const mainHeight = document.querySelector('main').offsetHeight;

      if ((window.scrollY > 65) && (mainHeight > document.documentElement.clientHeight + 65)) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    setInputAndSelectSize() {
      if (this.isMobile) {
        this.inputAndSelectSize = 'small';
      } else {
        this.inputAndSelectSize = 'large';
      }
    },
  },
};
</script>

<style scoped>
  .search-wrapper {
    height: auto !important;
  }

  .search-bar {
    height: auto !important;
    border-bottom: 1px solid #EBEEF5;
    margin-bottom: 2rem;
  }

  .filters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    align-content: center;
  }

  .filter {
    padding-right: 1.5rem;
    margin-bottom: 1rem;
  }

  .filter.text {
    max-width: 650px;
  }

  .filter.liturgical-period {
    width: 250px;
  }

  .filter.type {
    width: 350px;
  }

  .filter.stage {
    width: 450px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    margin-bottom: 10px;
  }

  .buttons .search {
    padding: 12px 75px;
    margin-bottom: 10px;
  }

  @media (max-width: 1600px) {
    .filter.text {
      max-width: 100%;
      width: 100%;
    }

    .filter, .filter.type, .filter.stage, .filter.liturgical-period {
      width: calc(50% - 1.5rem);
    }
  }

  @media (max-width: 1300px) {
    .filter.stage, .filter.type {
      width: 100%;
    }

    .filter.sort {
      margin: 0 auto 1rem auto;
    }
  }

  @media (max-width: 991px) {
    .filter, .filter.liturgical-period {
      width: 100%;
      padding-right: 0;
    }
  }
</style>
