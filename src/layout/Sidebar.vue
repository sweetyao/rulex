<template>
  <div class="sidebar-container">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
             text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items" :key="item.index">
        <el-menu-item :index="item.index">
          <svg-icon :icon-class="item.icon"/>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="sidebar-footer" @click="toggleClick">
      <div class="icon-wrap">
        <svg-icon :icon-class="!collapse ? 'collapse' : 'expand'" class="icon" />
      </div>
      <transition name="sidebarLogoFade">
        <span v-if="!collapse" class="text">收起</span>
      </transition>

    </div>

  </div>


</template>

<script>
  import {computed, reactive, toRefs} from "vue";
  import { useStore } from "vuex";
  import { useRoute } from "vue-router";

  export default {
    name: "Sidebar",
    setup() {
      const items = [{
        icon: 'home',
        index: '/dashboard',
        title: '首页'
      },{
        icon: 'tasks',
        index: '/task',
        title: '任务'
      },{
        icon: 'database',
        index: '/database',
        title: '数据源'
      },{
        icon: 'examples',
        index: '/library',
        title: '用例库'
      }];


      const route = useRoute();

      const onRoutes = computed(() => {
        return route.path;
      });

      const store = useStore();

      const state = reactive({
        collapse: store.state.app.collapse
      })
      const toggleClick = () => {
        store.dispatch('app/toggleSidebar', !state.collapse)
        state.collapse = !state.collapse;

      }

      return {
        items,
        ...toRefs(state),
        onRoutes,
        toggleClick

      }
    }
  }
</script>


<style scoped>
  .sidebar-container {
    height: calc(100vh - 50px);
    overflow-y: hidden;
    background: #324157;
    color: #fff;
  }
  .sidebar-container::-webkit-scrollbar {
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 100px;
  }
  .sidebar-el-menu{
    height: calc(100% - 60px);;
    color: #fff;
    border: none;
    overflow-y: scroll;
  }
  .sidebar-footer{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 60px;
    border-top: 1px solid #fff;

  }

</style>
