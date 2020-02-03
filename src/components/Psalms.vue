<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover" class="box-card" v-for="psalm in psalms" :key="psalm.id">
          <div class="psalm-name clearfix">
            <span>{{ psalm.name }}, s {{ psalm.page_number }}</span>
            <router-link :to="{ name: 'psalmDetails', params: { psalmID: psalm.id }}">
              <!-- {{psalm.name}} -->
              <el-button class="open-button" type="primary"
              icon="el-icon-edit" round>Otwórz</el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Psalms',
  computed: {
    ...mapState(['psalms']),
  },
  created() {
    this.$store.dispatch('getPsalms');
  },
};
</script>

<style scoped>
  .box-card {
    margin-bottom: 1rem;
  }

  .open-button {
    float: right;
    margin-top: -7px;
  }

  .psalm-name {
    text-align: left;
  }
</style>
