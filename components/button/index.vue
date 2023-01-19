<template>
  <button 
    class="pied-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PiedButton'
}
</script>

<script setup>

</script>


<style>
.pied-button{
  color:skyblue;
}
</style>