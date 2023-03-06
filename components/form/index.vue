<template>
  <div class="pied-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedForm'
}
</script>

<script setup>
import { defineProps, provide } from 'vue'
const props = defineProps({
  model: {
    type: Object,
    default: () => ({})
  },
  rules: {
    type: Object,
    default: () => ({})
  }
})

provide('formData', {
  model: props.model,
  rules: props.rules,
  formChange: (value) => {
    console.log('formChange',value)
  }
})
</script>

<style lang="scss" scoped>
.pied-form{
  width: 100%;
  height:auto;
  padding:15px 15px;
  box-sizing: border-box;
}
</style>