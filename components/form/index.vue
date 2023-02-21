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
import { defineProps } from 'vue'
const props = defineProps({
  model: {
    type: Object,
    default: () => ({})
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