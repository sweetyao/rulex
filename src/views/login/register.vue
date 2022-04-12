<template>
  <div class="container">
    <div class="container-label">
      Rulex
    </div>
    <div class="container-form">
      <el-form label-width="70px" ref="registerForm" :model="formData" :rules="rules" hide-required-asterisk>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formData.email" placeholder="请输入邮箱"/>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: flex-end;">
        <el-button @click="register">注册</el-button>
      </div>

    </div>

  </div>
</template>

<script>
  import {reactive, toRefs} from "vue";

  export default {
    name: "register",
    setup() {

      const validateEmail = (rule, value, callback) => {
        if (!value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
          callback(new Error('邮箱格式不正确'));
        } else {
          callback();
        }
      }

      const state = reactive({
        formData: {},
        rules: {
          username: {required: true, message: '该项为必输项', trigger: 'blur'},
          password: {required: true, message: '该项为必输项', trigger: 'blur'},
          email: [
            {required: true, message: '该项为必输项', trigger: 'blur'},
            {validator: validateEmail, trigger: 'blur'}
          ]
        }
      });

      return {
        ...toRefs(state),
        validateEmail
      }
    },
    methods: {
      // 注册
      async register() {
        this.$router.push({path: '/login'})
        // this.$refs.registerForm.validate(async valid => {
        //   if (valid) {
        //     try {
        //       const res = await this.$axios.home.register(this.form);
        //       if (res.success) {
        //         this.$store.dispatch('setToken', res.data.token)
        //         this.$router.push({path: '/login'})
        //         ElMessage.success(res.message)
        //       } else {
        //         ElMessage.error(res.message)
        //       }
        //     } catch (err) {
        //     }
        //   } else {
        //     ElMessage.error('验证不通过')
        //   }
        // })

      },

      openDialog() {

      }

    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    min-height: 500px;
    background: url("../../assets/images/login_bg.jpeg") no-repeat center;
    background-size: 100% 100%;
    display: flex;
    /*flex-direction: column;*/
    justify-content: center;
    align-items: center;


    :deep(.el-form-item__label) {
      color: #fff;
    }

    &-label {
      font-size: 28px;
      color: #fff;
      margin-right: 20px;

    }


    &-form {
      width: 250px;
      height: 170px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      color: #fff;
      padding: 50px 30px 20px;
    }
  }

</style>
