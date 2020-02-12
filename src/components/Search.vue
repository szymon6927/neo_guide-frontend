<template>
  <el-header v-if="showSearch">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-input placeholder="Nazwa pieśni, strona" v-model="search" prefix-icon="el-icon-search"
          v-on:input="filterPsalms" class="psalms-search"></el-input>
      </el-col>
      <el-col :xs="24" :sm="12" :md="10" :lg="6" :xl="4">
        <el-select class="filter" clearable @change="filterPsalms"
          v-model="psalmsCardColor" placeholder="Kolor kartki">
          <el-option
            v-for="item in cardColorOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :xs="24" :sm="12" :md="10" :lg="6" :xl="4">
        <el-select class="filter sorting" clearable @change="filterPsalms"
          v-model="psalmsSorting" placeholder="Sortowanie">
          <el-option
            v-for="item in sortingOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="2">
        <el-button type="warning" class="clear-filters" round
          @click="clearFilters">Wyczyść</el-button>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Search',
  data() {
    return {
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
      showSearch: this.displaySearch(),
    };
  },
  computed: {
    search: {
      get() {
        return this.$store.state.psalmsSearchValue;
      },
      set(value) {
        this.$store.commit('SET_PSALMS_SEARCH_VALUE', value);
      },
    },
    psalmsCardColor: {
      get() {
        return this.$store.state.psalmsSearchCardColorValue;
      },
      set(value) {
        this.$store.commit('SET_PSALMS_SEARCH_CARD_COLOR_VALUE', value);
      },
    },
    psalmsSorting: {
      get() {
        return this.$store.state.psalmsSearchSortingValue;
      },
      set(value) {
        this.$store.commit('SET_PSALMS_SEARCH_SORTING_VALUE', value);
      },
    },
  },
  methods: {
    filterPsalms: _.debounce(function () {
      this.$store.dispatch('getFilteredPsalms');

      if (this.$route.name !== 'psalms') {
        this.$router.push({ name: 'psalms' });
      }
    }, 500),
    clearFilters() {
      this.search = '';
      this.psalmsCardColor = '';
      this.psalmsSorting = '';
      this.$store.dispatch('getFilteredPsalms');
    },
    displaySearch() {
      return this.$route.name === 'psalms';
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

  .clear-filters {
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

  @media (max-width: 768px) {
    .filter {
      width: 100%;
    }
  }
</style>
