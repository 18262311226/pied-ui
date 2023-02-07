<script setup>
</script>

<template>
  <div style="width:500px;height:800px;border:1px solid #333;">
    <div style="width:400px;margin:auto;">
      <pied-input v-model="text" label="userName" disabled center></pied-input>
      <pied-input v-model="text1" label="passWord" type="password" center></pied-input>
      <pied-radio-group v-model="checkbox" :data="checkboxlist" :keys="{label:'label', value:'value'}">
      </pied-radio-group>
      <div style="display:flex;justify-content:space-between;">
        <pied-button>提交</pied-button>
        <pied-button type="error">重置</pied-button>
      </div>
    </div>

  </div>
  
  <!-- <button @click="handle">dian</button> -->
</template>

<script setup>
import { ref } from 'vue'
const text = ref('123121')
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
.pied-radio-group{
  margin-top:20px;
}
.pied-button{
  margin-top:20px;
}
</style>
