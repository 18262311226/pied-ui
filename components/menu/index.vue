<template>
    <div 
        class="pied-menu" 
        :class="classes"
        :style="{width: props.mode === 'horizontal' ? '100%' : props.width}"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'piedMenu'
}
</script>

<script setup>
import { computed, defineProps, provide } from 'vue'
const props = defineProps({
    selectedKeys: {
        type: Array,
        default: () => []
    },
    mode: {
        type: String,
        default: 'inline'
    },
    width:{
        type: String,
        default: '200px'
    }
})

provide('menuForm', {
    mode: props.mode,
    selectedKeys: props.selectedKeys
})

const classes = computed(() => {
    return [
        `pied-menu-${props.mode}`
    ]
})
</script>

<style lang="scss" scoped>
.pied-menu{

}
.pied-menu-inline{
    height:100%;
}
.pied-menu-horizontal{
    display: flex;
    width:100%;
    border-bottom: 1px solid #f0f0f0;
}
</style>