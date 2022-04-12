<template>
  <el-dialog :model="dialogVisible" :title="title" :width="width" :append-to-body="appendToBody"
             :before-close="handleBeforeClose" @close="handleClose" draggable>
    <div slot="title" class="dialog-title">
      <div class="dialog-title-inner">
        <span>{{title}}</span>
      </div>
    </div>

    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <slot name="footer"></slot>
        <!--        <el-button @click="dialogVisible = false">Cancel</el-button>-->
        <!--        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>-->
      </span>
    </template>
  </el-dialog>
</template>

<script>
  import {reactive, toRefs} from "vue";

  export default {
    name: "BaseDialog",
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      dialogVisible: {
        type: Boolean,
        default: false
      },
      appendToBody: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleBeforeClose(){
        this.$emit('beforeClose');
      },
      handleClose(){
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>

</style>
