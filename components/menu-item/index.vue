<template>
    <div 
        class="pied-menu-item"
        @click="itemClick"
        :class="[
            itemShow && props.keys === menuForm.selectedKeys && menuForm.mode === 'inline' && 'pied-menu-item-inline-active',
            itemShow && props.keys === menuForm.selectedKeys && menuForm.mode === 'horizontal' && 'pied-menu-item-horizontal-active'
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
import { inject, defineProps, ref } from 'vue'
import emiter from '../../utils/emiter'

const menuForm = inject('menuForm')

const props = defineProps({
    keys: {
        type: String,
        default: ''
    }
})

const itemShow = ref(props.keys === menuForm.selectedKeys)

const itemClick = () => {
    menuForm.selectedKeys = props.keys
    menuForm.menuClick('itemClick', props.keys)
    emiter.emit('itemChange')
    itemShow.value = menuForm.selectedKeys === props.keys
}
</script>

<style lang="scss" scoped>
.pied-menu-item{
    padding: 12px 15px;
    transition: 0.2s;
    cursor: pointer;
    font-size: 14px;
    box-sizing: border-box;
    .menu-item-icon{
        margin-right:5px;
    }
    &:hover{
        color:#1890ff;
    }
}
.pied-menu-item-inline-active{
    color:#1890ff;
    border-right: 3px solid #1890ff;
    background: #e6f7ff;
}
.pied-menu-item-horizontal-active{
    color: #1890ff;
    border-bottom: 3px solid #1890ff;
    background: #e6f7ff;
}
</style>