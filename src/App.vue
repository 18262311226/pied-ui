<script setup>
</script>

<template>
  <div style="width:200px;">
    <pied-upload></pied-upload>
  </div>

  
  <button @click="handle">dian</button>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('1')
const value1 = ref('2')
const list = ref([
  {
    value: 1,
    label: 'option1'
  },
  {
    value: 2,
    label: 'option2'
  },
  {
    value: 3,
    label: 'option3'
  },
  {
    value: 4,
    label: 'option4'
  },
  {
    value: 5,
    label: 'option5'
  },
  {
    value: 6,
    label: 'option6'
  },
  {
    value: 7,
    label: 'option7'
  },
  {
    value: 8,
    label: 'option8'
  }
])
const handle = () => {
  console.log(value.value)
}
const change = (item) => {
  console.log(item)
}
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-col{
  margin-right:10px;
}
.flex{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
