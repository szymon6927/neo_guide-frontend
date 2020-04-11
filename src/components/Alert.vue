<template>
  <div class="alert-wrapper">
    <el-alert
      v-if="alert.type && alert.message"
      :title="alert.message"
      :type="alert.type"
      show-icon>
    </el-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Alert',
  computed: {
    ...mapState({
      alert: state => state.alertModule,
    }),
  },
};
</script>

<style scoped>
  .alert-wrapper {
    margin-top: 1rem;
  }
</style>
