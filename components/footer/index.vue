<template>
  <div class="pied-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedFooter'
}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.pied-footer{
    height:60px;
    width:100%;
}
</style>