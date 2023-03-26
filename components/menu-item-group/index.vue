<template>
  <div class="pied-menu-item-group">
    <div class="menu-item-group-title">
        {{props.title}}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedMenuItemGroup'
}
</script>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.pied-menu-item-group{
    width:100%;
    margin-top:10px;
    padding:0 15px;
    .menu-item-group-title{
        font-size: 14px;
        color:#ccc;
        box-sizing: border-box;
    }
}
</style>