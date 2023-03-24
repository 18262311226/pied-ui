<template>
  <div class="pied-menu-item">
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
</style>