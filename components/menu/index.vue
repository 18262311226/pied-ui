<template>
    <div 
        class="pied-menu" 
        :class="classes"
        :style="{
            width: props.mode === 'horizontal' ? '100%' : props.width,
            backgroundColor: props.theme === 'dark' ? '#333' : '#fff',
            color: props.theme === 'dark' ? '#fff' : '#333'
        }"
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
import { computed, defineProps, provide, defineEmits,ref, watch } from 'vue'
const emits = defineEmits(['update:selectedKeys'])
const props = defineProps({
    selectedKeys: {
        type: String,
        default: () => ''
    },
    mode: {
        type: String,
        default: 'inline'
    },
    width:{
        type: String,
        default: '200px'
    },
    theme: {
        type: String,
        default: 'white'
    }
})

provide('menuForm', {
    mode: props.mode,
    selectedKeys: props.selectedKeys,
    menuClick: (type, key) => {
        emits('update:selectedKeys', key)
    }
})

const classes = computed(() => {
    return [
        `pied-menu-${props.mode}`
    ]
})
</script>

<style lang="scss" scoped>
.pied-menu{
    transition: 0.3s;
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