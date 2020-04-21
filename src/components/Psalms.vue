<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="24" v-if="psalms && psalms.length">
        <el-card shadow="hover" class="box-card" v-for="psalm in psalms" :key="psalm.id"
          :class="psalm.card_color">
          <div class="psalm-name clearfix">
            <span>{{ psalm.name }}, s. {{ psalm.page_number }}</span>
            <router-link :to="{ name: 'psalmDetails', params: { psalmID: psalm.id } }">
              <el-button class="open-button" type="default"
              icon="el-icon-view" round>Podgląd</el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
      <el-col v-else>
        <p>Brak wyników :( </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Psalms',
  computed: {
    ...mapState('psalmsModule', ['psalms']),
  },
  created() {
    this.getAllPsalms();
  },
  methods: {
    ...mapActions('psalmsModule', { getAllPsalms: 'getAllPsalms' }),
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

  .el-button {
    color: #000;
  }

  .el-button:focus, .el-button:hover {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }

  @media (max-width: 768px) {
    .open-button {
      float: none;
      margin-top: 1rem;
      width: 100%;
    }
  }
</style>
