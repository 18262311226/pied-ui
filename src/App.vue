<script setup>
</script>

<template>
  <div>
    <pied-select></pied-select>
  </div>
  
  <!-- <button @click="handle">dian</button> -->
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const text1 = ref('')
const checkbox = ref('')
const checkboxlist = ref([
  {
    value: 1,
    label: 'option1'
  },
  {
    value: 2,
    label: 'option2'
  }
])
const handle = () => {
  console.log(text.value)
}
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-col{
  margin-right:10px;
}
</style>
