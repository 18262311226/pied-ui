<template>
  <div class="pied-col" :class="classes" :style="{width:span + '%'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedCol'
}
</script>

<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
    span: {
        type: Number,
        default: 100
    }
})

let classes = computed(() => {

})
</script>

<style lang="scss" scoped>
.pied-col{
    width:100%;
}
</style>