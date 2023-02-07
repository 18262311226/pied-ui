<script setup>
</script>

<template>
<pied-row>
  <pied-col :span="15">
      <pied-input v-model="text" label="userName" center></pied-input>
  </pied-col>
  <pied-col :span="15">
      <pied-input v-model="text" label="userName" center></pied-input>
  </pied-col>
</pied-row>
<pied-row>
  <pied-col :span="15">
      <pied-input v-model="text" label="userName" center></pied-input>
  </pied-col>
  <pied-col :span="15">
      <pied-input v-model="text" label="userName" center></pied-input>
  </pied-col>
</pied-row>
  
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
