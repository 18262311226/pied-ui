<template>
  <div class="pied-header">
    header
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedHeader'
}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.pied-header{
    width:100%;
    height:60px;
}
</style>