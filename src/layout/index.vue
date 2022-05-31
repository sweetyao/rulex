<template>
  <div>
    <navbar />
    <div class="main-container">
      <sidebar />
      <div class="app-container">
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
  import {computed} from "vue";
  import { useStore } from "vuex";
  import Sidebar from './Sidebar.vue'
  import Navbar  from './Navbar.vue';
  export default {
    name: "index",
    components: {
      Navbar,
      Sidebar
    },
    setup(){
      const store = useStore();
      const included = computed(() => store.state.include.included);
      const envs = store.state.app.envs;
      return {
        included,
        envs
      }
    }
  }
</script>

<style scoped>
  .main-container{
    display: flex;
    justify-content: start;
  }
  .app-container{
    padding: 20px;
  }

</style>
