<template>
  <div class="pied-row" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedRow'
}
</script>

<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
    align: {
        type: String,
        default: 'left'
    }
})
let classes = computed(() => {
    return [
        `pied-row-${props.align}`
    ]
})
</script>

<style lang="scss" scoped>
.pied-row{
    display:flex;
    width:100%;
    height:auto;
}
.pied-row-left{
    align-items:flex-start;
}
.pied-row-center{
    align-items:center;
}
.pied-row-right{
    align-items:flex-end;
}
</style>