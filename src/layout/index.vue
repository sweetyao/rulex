<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
  </div>


</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
