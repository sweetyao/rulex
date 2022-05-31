<template>
  <el-dialog v-model="dialogVisible" :title="title" :width="width" :append-to-body="appendToBody"
             :close-on-click-modal="false" :close-on-press-escape="false"
             :before-close="handleBeforeClose" @close="handleClose" draggable destroy-on-close>

    <template #header>
      <slot name="header"></slot>
    </template>
    <!--    <div slot="header" class="dialog-title">-->
    <!--      <div class="dialog-title-inner">-->
    <!--        <span>{{title}}</span>-->
    <!--      </div>-->
    <!--    </div>-->

    <slot></slot>

    <template
      #footer
    >
      <slot name="el-footer">
        <span class="dialog-footer">
          <el-button
            class="btn-default"
            @click.stop="cancel"
          >取消</el-button>
          <el-button
            class="btn-primary"
            @click.stop="submit"
          >确定</el-button>
        </span>
      </slot>
    </template>
    <!--    <template #footer>-->
    <!--      <span class="dialog-footer">-->
    <!--        footer-->
    <!--        <slot name="footer"></slot>-->
    <!--&lt;!&ndash;                <el-button @click="dialogVisible = false">Cancel</el-button>&ndash;&gt;-->
    <!--&lt;!&ndash;                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>&ndash;&gt;-->
    <!--      </span>-->
    <!--    </template>-->
  </el-dialog>
</template>

<script>

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
        default: false,
        required: true
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      width: {
        type: String,
        required: true
      },

    },

    methods: {
      handleBeforeClose() {
        this.$emit('beforeClose');
      },
      handleClose() {
        this.$emit('close');
      },
      cancel() {
        this.$emit('close', 'false')
      },
      submit() {
        this.$emit('submit', 'false')
      }
    }
  }
</script>

<style scoped>

</style>
