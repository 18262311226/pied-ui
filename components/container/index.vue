<template>
  <div class="pied-container" :style="{flexDirection: props.flex}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedContainer'
}
</script>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  flex: {
    type: String,
    default: 'column'
  }
})

</script>

<style lang="scss" scoped>
.pied-container{
  width:100%;
  height:100%;
  display: flex;
}
</style>