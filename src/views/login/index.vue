<template>
  <div class="container">
    <div class="container-label">
      Rulex
    </div>
    <div class="container-form">
      <el-form label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: flex-end;">
        <el-button @click="jumptohome">登录</el-button>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        form: {}
      }

    },
    methods: {
      jumptohome() {
        this.$store.dispatch('setUserInfo', {username: 'sswl'})
        this.$router.push({path: '/dashboard'})
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
