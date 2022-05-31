<template>
  <div class="app-container">
    <div class="container-search">
      <el-input v-model="env" placeholder="搜索环境" @keyup.enter.native="handleSearch">
<!--        <template #prefix>-->
<!--          <el-icon class="el-input__icon">-->
<!--            <search/>-->
<!--          </el-icon>-->
<!--        </template>-->
      </el-input>
    </div>
    <div class="container-content">
      <div v-for="item in envs" :key="item.envId" :value="item.envId" :label="item.envName">
        <div class="env-card">
          <div class="env-close">
            <svg-icon icon-class="close" @click="deleteEnv(item.envId)"/>
          </div>
          <el-form label-width="80px">
            <el-form-item label="环境：">{{item.envName}}</el-form-item>
            <el-form-item label="Server：">{{item.server}}</el-form-item>
            <el-form-item label="状态：">
              <svg-icon icon-class="circle-green" v-if="item.status === 1"/>
              <svg-icon icon-class="circle-red" v-else/>
            </el-form-item>
            <el-form-item label="启用：">
              <el-switch v-model="item.turn" active-color="#13ce66" inactive-color="#ff4949" active-value="on"
                         inactive-value="off" @change="changeStatus($event, item.envId)"/>
            </el-form-item>
            <el-form-item label="创建：">
              {{renderTime(item.createTime)}}
            </el-form-item>

          </el-form>
        </div>
      </div>
      <div class="env-add">
        <svg-icon icon-class="add" @click="addEnv"/>
      </div>


    </div>
  </div>

  <create-dialog ref="createDialog" @emitAddSuccess="addSuccess"/>
</template>

<script>
  import {Calendar, Search} from '@element-plus/icons-vue'
  import {ref} from "vue";
  import CreateDialog from './createDialog.vue'
  import {renderTime} from '@/utils/func.js';
  import api from '@/api'
  import {onMounted} from "@vue/runtime-core";

  export default {
    name: "index",
    components: {
      CreateDialog
    },
    setup() {
      let envs = ref([]);
      let env = ref('');

      // 删除环境
      const deleteEnv = async (id) => {
        const res = await api.home.deleteEnv(id);
        // 更新环境
        envs.value = envs.value.filter(item => item.envId !== id);
      };

      // 更新环境
      const changeStatus = async (status, id) => {
        try {
          const res = await api.home.updateEnv(id, {
            turn: status
          });
          if (res.success) {
            ElMessage.success(res.message)
          } else {
            ElMessage.error(res.message)
          }
        } catch (err) {
        }

      };

      // 创建成功的回调
      const addSuccess = (data) => {
        // 更新环境
        envs.value = [...envs.value, data];
      };

      // 搜索环境
      const handleSearch = async () => {
        env.value = env.value.replace(/^%+$/, '');
        try {
          const res = await api.home.getEnvs(env.value);
          if (res.success) {
            envs.value = res.data;
          } else {
            ElMessage.error(res.message)
          }
        } catch (err) {
        }

      };

      onMounted(() => {
        handleSearch();
      });

      return {
        envs,
        env,
        deleteEnv,
        changeStatus,
        addSuccess,
        handleSearch
      }
    },
    methods: {
      renderTime,
      // 新增环境
      addEnv() {
        this.$refs.createDialog.openDialog();
      }
    }


  }
</script>

<style scoped lang="scss">
  .container {
    &-search {
      width: 200px;
    }
  }

  .container-content {
    display: flex;
    justify-content: flex-start;

  }

  .env-close {
    height: 30px;
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
  }

  .env-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #ccc;
    height: 250px;
    width: 240px;
    padding: 0 20px 0 10px;
    margin: 20px 20px 0 0;
  }

  .env-add {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 #ccc;
    margin-top: 20px;
    height: 250px;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
