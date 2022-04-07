<template>
  <div>
    <navbar />
    <div class="main-container">
      <sidebar />
      <div class="content-container">
        <div class="content">
          <router-view v-slot="{ Component }">
            <keep-alive :include="included">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>

  </div>

</template>


<script>
  import Sidebar from './Sidebar.vue'
  import Navbar  from './Navbar.vue';
  export default {
    name: "index",
    components: {
      Navbar,
      Sidebar
    },
    computed: {
      included() {
        return this.$store.state.include.included;
      }
    }
  }
</script>

<style scoped>
  .main-container{
    display: flex;
    justify-content: start;
  }

</style>
