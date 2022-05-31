<template>
  <el-dialog :title="title" width="600px" v-model="dialogVisible" :before-close="beforeClose"
             :close-on-click-modal="false" :close-on-press-escape="false" draggable destroy-on-close>
    <div>
      <el-form ref="envForm" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="环境" prop="envName">
          <el-input v-model="formData.envName"/>
        </el-form-item>
        <el-form-item label="Server" prop="server">
          <el-input v-model="formData.server"/>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="flex-end">
      <el-button @click="handleCreate" type="primary">创建</el-button>
    </span>
  </el-dialog>
</template>

<style>
</style>

<script>
  import {reactive, toRefs} from "vue";

  export default {
    setup() {
      const state = reactive({
        dialogVisible: false,
        title: '创建环境',
        formData: {
          envName: '',
          server: ''
        },
        rules: {
          envName: {required: true, message: '该项为必输项', trigger: 'blur'},
          server: {required: true, message: '该项为必输项', trigger: 'blur'}
        }
      });
      const openDialog = () => {
        state.dialogVisible = true;
      };
      return {
        ...toRefs(state),
        openDialog
      }
    },
    emits: ['emitAddSuccess'],
    methods: {
      // 创建环境
      handleCreate() {
        this.$refs.envForm.validate( async valid => {
          if(valid){
            try {
              const res = await this.$axios.home.createEnv(this.formData);
              if (res.success) {
                this.$emit('emitAddSuccess', res.data[0]);
                ElMessage.success(res.message);
                this.beforeClose();
              }
            } catch (err) {
            }
          }
        })

      },
      // 关闭前的回调
      beforeClose() {
        this.dialogVisible = false;
        this.$refs.envForm.resetFields();

      }
    }
  }
</script>
