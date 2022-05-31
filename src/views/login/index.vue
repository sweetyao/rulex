<template>
  <div class="container">
    <div class="container-label">
      Rulex
    </div>
    <div class="container-form">
      <el-form ref="loginForm" label-width="60px" :model="formData" :rules="rules" hide-required-asterisk>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" placeholder="请输入密码"/>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: flex-end;">
        <el-button link @click="register">注册</el-button>
        <el-button @click="login">登录</el-button>
      </div>
    </div>
  </div>

</template>

<script>
  import {toRaw} from '@vue/reactivity';
  import {reactive, toRefs} from "vue";
  import Register from "./register.vue";
  import { useStore } from "vuex";

  export default {
    name: "login",
    components: {Register},
    setup(){
      const store = useStore();
      const envs = toRaw(store.getters.envs);
      const state = reactive({
        formData: {
          username: '',
          password: ''
        },
        rules: {
          username: {required: true, message: '该项为必输项', trigger: 'blur'},
          password: {required: true, message: '该项为必输项', trigger: 'blur'}
        },
        envs: envs
      });
      return {
        ...toRefs(state)
      }
    },
    methods: {
      // 注册
      register(){
        this.$router.push({path: '/register'})
      },
      // 登录
      async login(){
        this.$refs.loginForm.validate(async valid => {
          if (valid) {
            try {
              const res = await this.$axios.home.login(this.formData);
              if (res.success) {
                this.$store.dispatch('setUserInfo', this.formData)
                this.$store.dispatch('app/setToken', res.data.token);
                // 获取该用户的环境
                this.$store.dispatch('app/getEnv');
                this.$nextTick(() => {
                  // 根据环境数量决定跳转
                  const envs = toRaw(this.envs)
                  if(envs.length){
                    this.$router.push({path: '/'})
                  }else{
                    this.$router.push({path: '/env'})
                  }
                });

                ElMessage.success(res.message)
              } else {
                ElMessage.error(res.message)
              }
            } catch (err) {
            }
          } else {
            ElMessage.error('验证不通过')
          }
        })
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

    &-label{
      font-size: 28px;
      color: #fff;
      margin-right: 20px;

    }


  &-form {
    width: 250px;
    height: 130px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    color: #fff;
    padding: 50px 30px 20px;
   }
  }

</style>
