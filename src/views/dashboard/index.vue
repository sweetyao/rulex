<template>
  这是首页dashboard
  <el-button @click="logout">登出</el-button>

  <el-button @click="clearConfig">清除配置</el-button>
</template>

<script>
    export default {
        name: "index",
      methods: {
        logout(){
          this.$store.dispatch('setUserInfo', {username: ''})
          this.$router.push({path: '/login'})
        },
        clearConfig(){
          this.$store.dispatch('setConfig', false)
        }
      }
    }
</script>

<style scoped>

</style>
