<template>
  <el-header v-if="showSearch">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-input
          placeholder="Nazwa pieśni, strona"
          prefix-icon="el-icon-search"
          class="psalms-search"
          v-model="search.text"
          @keyup.enter.native="searchPsalms"
          v-bind:class="{sticky: isSticky, mobile: isMobile}">
        </el-input>
      </el-col>

      <el-col :xs="24" :sm="12" :md="10" :lg="6" :xl="4">
        <el-select
          class="filter"
          placeholder="Kolor kartki"
          clearable
          v-model="search.cardColor">
          <el-option
            v-for="item in search.cardColorOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :xs="24" :sm="12" :md="10" :lg="6" :xl="4">
        <el-select
          class="filter sorting"
          placeholder="Sortowanie"
          clearable
          v-model="search.sorting">
          <el-option
            v-for="item in search.sortingOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="2">
        <el-button type="warning" class="search" round
          @click="searchPsalms">Szukaj</el-button>
      </el-col>

      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="2">
        <el-button type="info" class="clear-filters" round
          @click="clearFilters">Wyczyść</el-button>
      </el-col>

    </el-row>
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
        cardColor: '',
        sorting: '',
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
    };
  },
  computed: {
    ...mapGetters(['isMobile']),
  },
  mounted() {
    window.addEventListener('scroll', this.checkSticky);
    this.checkSticky();
  },
  methods: {
    ...mapActions('psalmsModule', { getFilteredPsalms: 'getFilteredPsalms' }),
    clearFilters() {
      this.search.text = '';
      this.search.cardColor = '';
      this.search.sorting = '';

      this.searchPsalms();
    },
    searchPsalms() {
      const filterValues = {
        searchText: this.search.text,
        searchCardColor: this.search.cardColor,
        searchSorting: this.search.sorting,
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
  },
};
</script>

<style scoped>
  .el-header {
    height: auto !important;
    border-bottom: 1px solid #EBEEF5;
    margin-bottom: 2rem;
  }

  .psalms-search {
    padding: 1rem 0;
  }

  .clear-filters, .search {
    margin: 1rem 0;
  }

  .filter {
    margin: 1rem 0;
  }

  .filter.sorting {
    width: 100%;
  }

  .el-select-dropdown__item {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .el-select-dropdown__item.selected {
    color: #e6a23d;
  }

  .psalms-search.mobile.sticky {
    position: fixed;
    width: 97%;
    z-index: 999;
    background: #fafafa;
    top: 57px;
    padding: 10px 20px 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    left: -10px;
  }

  @media (max-width: 768px) {
    .filter {
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    .psalms-search.mobile.sticky {
      width: 95%;
    }
  }
</style>
