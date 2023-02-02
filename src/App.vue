<script setup>
</script>

<template>
  <div style="width:200px;">
    <pied-input></pied-input>
    <pied-input></pied-input>
  </div>
  
  <!-- <button @click="handle">dian</button> -->
</template>

<script setup>
import { ref } from 'vue'
const checklist = ref([])
const data = ref([
  {
    value: 0,
    label: '文科',
    border: true
  },
  {
    value: 1,
    label: '理科',
    disabled: true
  }
])
const handle = () => {
  console.log(checklist.value)
}
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-input{
  margin-bottom:20px;
}
</style>
