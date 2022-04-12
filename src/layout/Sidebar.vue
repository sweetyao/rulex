<template>
  <div class="sidebar-container">

    <el-button @click="changeCollapse">

<!--      <el-icon @click="changeCollapse">-->
<!--        <edit />-->
<!--        <d-arrow-left v-if="collapse" />-->
<!--        <d-arrow-right v-else />-->
<!--      </el-icon>-->
<!--      <svg-icon :icon-class="collapse ? 'expand' : 'collapse'" @click="changeCollapse" :tooltip="collapse ? 'expand' : 'collapse'" />-->
      {{collapse ? 'expand' : 'collapse'}}
    </el-button>
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
             text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items" :key="item.index">
        <el-menu-item :index="item.index">
          <svg-icon :icon-class="item.icon"/>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>


</template>

<script>
  import { computed, ref } from "vue";
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
      let collapse = ref(true)
      // const collapse = computed(() => store.state.app.collapse);

      return {
        items,
        collapse,
        onRoutes

      }
    },
    methods: {
      changeCollapse(){
        this.collapse = !this.collapse;
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
    height: 100%;
    color: #fff;
    border: none;
    overflow-y: scroll;
  }

</style>
