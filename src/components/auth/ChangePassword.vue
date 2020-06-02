<template>
  <div class="change-password-form">
    <el-form :model="changePasswordForm" :rules="rules" ref="changePasswordForm"
             :label-position="labelPosition">

      <el-form-item label="Obecne hasło:" prop="currentPassword">
        <el-input @keyup.enter.native="submitForm('changePasswordForm')"
                  type="password"
                  v-model="changePasswordForm.currentPassword"
                  autocomplete="off">
        </el-input>
      </el-form-item>

      <el-form-item label="Nowe hasło:" prop="newPassword">
        <el-input @keyup.enter.native="submitForm('changePasswordForm')"
                  type="password"
                  v-model="changePasswordForm.newPassword"
                  autocomplete="off">
        </el-input>
      </el-form-item>

      <el-form-item label="Potwierdź nowe hasło:" prop="confirmNewPassword">
        <el-input @keyup.enter.native="submitForm('changePasswordForm')"
                  type="password"
                  v-model="changePasswordForm.confirmNewPassword"
                  autocomplete="off">
        </el-input>
      </el-form-item>

      <el-button
        class="login-button"
        type="warning"
        @click="submitForm('changePasswordForm')">
        Zmień hasło
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
  name: 'ChangePassword',
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
    const validateConfirmNewPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Potwierdź nowe hasło!'));
      } else if (value !== this.changePasswordForm.newPassword) {
        callback(new Error('Hasła nie zgadzają się!'));
      } else {
        callback();
      }
    };
    return {
      changePasswordForm: {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
      rules: {
        currentPassword: [
          { required: true, message: 'Podaj obecne hasło', trigger: 'change' },
        ],
        newPassword: [
          { required: true, message: 'Podaj nowe hasło', trigger: 'change' },
        ],
        confirmNewPassword: [
          {
            validator: validateConfirmNewPassword,
            required: true,
            trigger: 'change',
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions('userModule', ['changePassword']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return;
        }

        const changePasswordRequest = {
          current_password: this.changePasswordForm.currentPassword,
          new_password: this.changePasswordForm.newPassword,
          confirm_new_password: this.changePasswordForm.confirmNewPassword,
        };

        this.changePassword({ changePasswordRequest });
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

  @media (min-width: 1200px) {
    .change-password-form {
      margin-top: 4rem;
    }
  }
</style>
