<template>
  <div class="pied-aside" :style="{width: props.width}">
    aside
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedAside'
}
</script>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    width: {
        type: String,
        default: '200px'
    }
})
</script>

<style lang="scss" scoped>
.pied-aside{
    display: flex;
    width:200px;
    height:100%;
}
</style>