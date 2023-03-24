<template>
    <div 
        class="pied-menu-item"
        @click="itemClick"
        :class="[
            menuForm.selectedKeys.includes(props.keys) && menuForm.mode === 'inline' && 'pied-menu-item-inline-active',
            menuForm.selectedKeys.includes(props.keys) && menuForm.mode === 'horizontal' && 'pied-menu-item-horizontal-active'
        ]"
    >
        <span class="menu-item-icon">
            <slot name="icon"></slot>
        </span>
        <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedMenuItem'
}
</script>

<script setup>
import { inject, defineProps } from 'vue'
const menuForm = inject('menuForm')

const props = defineProps({
    keys: {
        type: String,
        default: ''
    }
})

console.log(props.keys)

const itemClick = () => {
    menuForm.menuClick('itemMenu', props.keys)
}
</script>

<style lang="scss" scoped>
.pied-menu-item{
    padding: 12px 10px;
    background: #fff;
    transition: 0.2s;
    cursor: pointer;
    font-size: 14px;
    .menu-item-icon{
        margin-right:5px;
    }
    &:hover{
        color:#1890ff;
        // border-bottom:2px solid #1890ff;
    }
}
.pied-menu-item-inline-active{
    color:#1890ff;
    border-right: 2px solid #1890ff;
}
.pied-menu-item-horizontal-active{
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
}
</style>