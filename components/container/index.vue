<template>
  <div class="pied-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedContainer'
}
</script>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
const instance = getCurrentInstance()

onMounted(() => {
  let el = instance.vnode.el
  console.log(el.querySelector('.pied-header'))
})

</script>

<style lang="scss" scoped>
.pied-container{
  width:100%;
  height:100%;
  display: flex;
}
</style>