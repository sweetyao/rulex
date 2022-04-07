<template>
  <el-tooltip :disabled="tooltip !== ''" :content="tooltip" placement="bottom" effect="light">
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"/>
    </svg>
  </el-tooltip>

</template>

<script setup>
  import {  computed } from "vue";
  const props = defineProps({
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    }
  })

  const iconName = computed(()=>`#icon-${props.iconClass}`);
  const svgClass = computed(()=> {
    if (props.className) {
      return `svg-icon icon-${props.className}`
    }
    return 'svg-icon'
  });
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;

  }

</style>
