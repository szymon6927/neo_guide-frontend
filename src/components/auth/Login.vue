<template>
  <div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm"
             :label-position="labelPosition" label-width="100px">

      <el-form-item label="E-mail:" prop="email">
        <el-input @keyup.enter.native="submitForm('loginForm')"
          v-model="loginForm.email"></el-input>
      </el-form-item>

      <el-form-item label="Hasło:" prop="password">
        <el-input @keyup.enter.native="submitForm('loginForm')"
          type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-button
        class="login-button"
        type="warning"
        @click="submitForm('loginForm')">
        Zaloguj
      </el-button>
    </el-form>

    <Alert />

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { labelFormPositionMixin } from '../../mixins/labelFromPositionMixin';
import Alert from '../Alert.vue';

export default {
  name: 'Login',
  mixins: [labelFormPositionMixin],
  components: {
    Alert,
  },
  computed: {
    ...mapState('userModule', ['isLoggedIn']),
    ...mapState({
      alert: state => state.alertModule,
    }),
    ...mapState(['isMobile']),
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: 'Podaj e-mail!', trigger: 'blur' },
          { type: 'email', message: 'Podaj prawidłowy adres e-mail!', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Podaj hasło', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    ...mapActions('userModule', ['login']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return;
        }

        const { email, password } = this.loginForm;
        this.login({ email, password }).then(() => {
          this.$router.push('/psalms');
        });
      });
    },
  },
};
</script>

<style scoped>
  .login-button {
    padding-left: 5rem;
    padding-right: 5rem;
  }
</style>
