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
    margin-top:10px;
    // padding:0 15px;
    box-sizing: border-box;
    .menu-item-group-title{
        font-size: 14px;
        color:#ccc;
        padding:0 15px;
        box-sizing: border-box;
    }
}
</style>