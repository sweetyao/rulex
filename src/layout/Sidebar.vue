<template>
  <div class="sidebar-container">
    <el-radio-group v-model="collapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
<!--    <el-radio-button @click="toggleSidebar" style="margin-bottom: 20px"> {{this.sidebarStatus ? 'collapse' : 'expand' }}</el-radio-button>-->
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
             text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else >
          <el-menu-item :index="item.index" :key="item.index">
<!--            <i :class="item.icon"></i>-->
            <svg-icon :icon-class="item.icon" :tooltip="item.title"/>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
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
        path: '/dashboard',
        title: '首页'
      },{
        icon: 'tasks',
        path: '/task',
        title: '任务'
      },{
        icon: 'database',
        path: '/databases',
        title: '数据源'
      },{
        icon: 'examples',
        path: '/exampleDatabase',
        title: '用例库'
      }];


      const route = useRoute();

      const onRoutes = computed(() => {
        return route.path;
      });

      const store = useStore();
      const collapse = ref(true)
      // const collapse = computed(() => store.state.app.collapse);

      return {
        items,
        collapse,
        onRoutes

      }
    }
  }
</script>


<style scoped>
  .sidebar-container {
    height: calc(100vh - 50px);
    overflow-y: scroll;
    background: #324157;
    color: #fff;
  }
  .sidebar-el-menu{
    height: 100%;
    color: #fff;
    border: none;
  }

</style>
