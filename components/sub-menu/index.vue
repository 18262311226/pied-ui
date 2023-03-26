<template>
  <div class="pied-sub-menu-box">
    <div class="pied-sub-menu" @click="subClick">
        <span class="sub-menu-icon">
            <slot name="icon"></slot>
        </span>
        <slot name="title"></slot>
        <span class="pied-icon-left sub-menu-arrow" :class="[childMenuShow ? 'arrow-active' : '']"></span>
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
const menuForm = inject('menuForm')

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
            margin-right:5px;
        }
        .sub-menu-arrow{
            position: absolute;
            font-size: 12px;
            right:0;
            margin-left:15px;
            transition: 0.3s;
        }
        .arrow-active{
            transform: rotate(-90deg);
        }
        &:hover{
            color:#1890ff;
        }
    }
    .pied-sub-menu-child{
        width:100%;
        min-width:200px;
        padding: 0 10px; 
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