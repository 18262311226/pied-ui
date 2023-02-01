<script setup>
</script>

<template>
  <pied-checkbox-group v-model="checklist" :data="data" :keys="{label: 'label', value: 'value'}">
  </pied-checkbox-group>
  <button @click="handle">dian</button>
</template>

<script setup>
import { ref } from 'vue'
const checklist = ref([])
const data = ref([
  {
    value: 0,
    label: '文科'
  },
  {
    value: 1,
    label: '理科'
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
.pied-radio{
  margin-right:10px;
}
</style>
