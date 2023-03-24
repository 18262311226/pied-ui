<template>
  <div class="pied-sub-menu-box">
    <div class="pied-sub-menu">
        <span class="sub-menu-icon">
            <slot name="icon"></slot>
        </span>
        <slot name="title"></slot>
    </div>
    <div class="pied-sub-menu-child" :class="[menuForm.mode == 'horizontal' ? 'menu-position' : '']">
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
import { inject } from 'vue'
const menuForm = inject('menuForm')
</script>

<style lang="scss" scoped>
.pied-sub-menu-box{
    position: relative;
    .pied-sub-menu{
        padding:12px 10px;
        background:#fff;
        cursor: pointer;
        font-size: 14px;
        .sub-menu-icon{
            margin-right:5px;
        }
        &:hover{
            color:#1890ff;
            // border-bottom:2px solid #1890ff;
        }
    }
    .pied-sub-menu-child{
        width:100%;
        padding-left:20px;
        box-sizing: border-box;
    }
    .menu-position{
        position:absolute;
        left:0;
        top:52px;
        box-shadow: 0 0 8px 1px #ccc;
    }
}

</style>