<template>
  <div class="container">
    <div class="container-header">
      Rulex初始化配置
    </div>
    <div class="container-main">
      <div class="container-label">
        数据库（MySQL）
      </div>
      <div class="container-form">
        <el-form label-width="60px">
          <el-form-item label="Host">
            <el-input v-model="form.host" placeholder="请输入host(域名/ip)"/>
          </el-form-item>
          <el-form-item label="端口">
            <el-input-number v-model="form.port" controls-position="right" placeholder="请输入端口"/>
          </el-form-item>
          <el-form-item label="数据库">
            <el-input v-model="form.database" placeholder="请输入数据库"/>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
          </el-form-item>
        </el-form>
        <div style="display: flex; justify-content: flex-end;">
          <el-button @click="init">初始化</el-button>
        </div>

      </div>


    </div>

  </div>
</template>

<script>

  import {reactive, toRefs} from "vue";

  export default {
    name: "index",
    setup() {
      const state = reactive({
        form: {
          host: null
        }
      })
      return {
        ...toRefs(state)
      }
    },
    methods: {
      async init() {
        // this.$store.dispatch('setConfig', true);
        // this.$router.push(({path: '/login'}));
        try {
          const res = await this.$axios.home.initDb(this.form);
          if (res.success) {
            this.$store.dispatch('setConfig', true);
            this.$router.push(({path: '/login'}));
            ElMessage.success(res.message)
          } else {
            ElMessage.error(res.message)
          }
        } catch (err) {

        }
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
    background: url("../../assets/images/init_bg.jpg") no-repeat center;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-header {
      width: 200px;
      height: 50px;
      text-align: center;
      font-size: 16px;
      color: #fff;
    }

    &-main {
      width: 400px;
      height: 350px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 5px;
      color: #fff;

      :deep(.el-form-item__label) {
        color: #fff;
      }
    }

    &-label {
      padding: 20px 0 0 20px;
      font-size: 16px;
    }

    &-form {
      padding: 30px 70px 20px;
    }
  }


</style>
