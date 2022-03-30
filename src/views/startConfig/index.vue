<template>
  <div>
    这是初始化配置页面
    <el-button @click="jumptologin">跳转到登录页</el-button>
  </div>
</template>

<script>
    export default {
        name: "index",
      methods: {
        jumptologin(){
          this.$store.dispatch('setConfig', true)
          this.$router.push(({path: '/login'}))

        }
      }

    }
</script>

<style scoped>

</style>
