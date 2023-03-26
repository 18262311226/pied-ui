<template>
  <div class="pied-sub-menu-box">
    <div class="pied-sub-menu" @click="subClick">
        <span class="sub-menu-icon">
            <slot name="icon"></slot>
        </span>
        <div class="sub-menu-title">
            <slot name="title"></slot>
        </div>
        <span :class="[childMenuShow ? 'pied-icon-minus-square1' : 'pied-icon-plus-square1', 'sub-menu-arrow']"></span>
    </div>
    <div 
        class="pied-sub-menu-child"
        :class="[menuForm.mode === 'horizontal' ? 'menu-position' : '']"
        v-if="childMenuShow"
    >
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'piedSubMenu'
}
</script>

<script setup>
import { inject, defineProps, ref } from 'vue'
import emiter from '../../utils/emiter'
const menuForm = inject('menuForm')

emiter.on('modeChange', (newValue) => {
    menuForm.mode = newValue
})

emiter.on('itemChange', () => {
    childMenuShow.value = false
})

const props = defineProps({
    keys: {
        type: String,
        default: ''
    }
})

const childMenuShow = ref(false)

const subClick = () => {
    childMenuShow.value = !childMenuShow.value
}
</script>

<style lang="scss" scoped>
.pied-sub-menu-box{
    position: relative;
    .pied-sub-menu{
        padding:12px 15px;
        cursor: pointer;
        font-size: 14px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .sub-menu-icon{
            margin-right:10px;
        }
        .sub-menu-title{
            margin-right:15px;
        }
        .sub-menu-arrow{
            position: absolute;
            font-size: 12px;
            right:10px;
            margin-left:15px;
            transition: 0.3s;
        }
        &:hover{
            color:#1890ff;
        }
    }
    .pied-sub-menu-child{
        width:100%;
        min-width:200px;
        text-indent: 1em;
        box-sizing: border-box;
        transition: 0.3s;
    }
    .menu-position{
        position:absolute;
        left:0;
        top:52px;
        box-shadow: 0 0 8px 1px #ccc;
        z-index: 10;
    }
}

</style>