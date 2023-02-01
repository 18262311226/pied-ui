<script setup>
</script>

<template>
    <pied-checkbox v-model="checklist" label="1" border>文科</pied-checkbox>
    <pied-checkbox v-model="checklist" label="2" border>理科</pied-checkbox>

    <button @click="handle">dian</button>
</template>

<script setup>
import { ref } from 'vue'
const checklist = ref([])
const handle = () => {
  console.log(checklist.value)
}
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-radio{
  margin-right:10px;
}
</style>
