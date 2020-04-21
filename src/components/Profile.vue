<template>
  <div class="profile-form" v-if="user">
    <el-form ref="form" :model="user" :label-position="labelPosition" label-width="120px">
      <el-form-item label="Imię:">
        <el-input v-model="user.first_name"></el-input>
      </el-form-item>

      <el-form-item label="Nazwisko:">
        <el-input v-model="user.last_name"></el-input>
      </el-form-item>

      <el-form-item label="Adres e-mail:">
        <el-input v-model="user.email"></el-input>
      </el-form-item>

      <el-form-item label="Miejscowość:">
        <el-input v-model="user.city"></el-input>
      </el-form-item>

      <el-form-item label="Parafia:">
        <el-input v-model="user.parish"></el-input>
      </el-form-item>

      <el-form-item label="Wspólnota:">
        <el-input v-model="user.community"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="warning" @click="updateProfile">Zapisz</el-button>
      </el-form-item>
    </el-form>

    <Alert />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { labelFormPositionMixin } from '../mixins/labelFromPositionMixin';
import Alert from './Alert.vue';

export default {
  name: 'Profile',
  mixins: [labelFormPositionMixin],
  components: {
    Alert,
  },
  computed: {
    ...mapState('userModule', ['user']),
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapActions('userModule', { getUser: 'getUser', updateUserData: 'updateUserData' }),
    updateProfile() {
      const userID = this.user.id;
      const userData = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        city: this.user.city,
        parish: this.user.parish,
        community: this.user.community,
      };

      this.updateUserData({ userID, userData });
      this.getUser(); // refresh user state
    },
  },
};
</script>

<style scoped>
  @media (min-width: 1200px) {
    .profile-form {
      margin-top: 4rem;
    }
  }
</style>
