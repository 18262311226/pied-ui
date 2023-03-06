<template>
  <div class="pied-main">
    main
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedMain'
}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.pied-main{
    width:100%;
    height:100%;
    display: flex;
    flex-direction:inherit;
}
</style>