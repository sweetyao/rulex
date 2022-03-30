<template>
  <div>
    这是一个登录页
    <el-button @click="jumptohome">跳转到首页</el-button>
  </div>

</template>

<script>
  export default {
    name: "login",
    methods: {
      jumptohome() {
        this.$store.dispatch('setUserInfo', {username: 'sswl'})
        this.$router.push({path: '/dashboard'})
      }
    }
  }
</script>

<style scoped>

</style>
