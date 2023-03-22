<template>
  <div class="pied-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'piedForm'
}
</script>

<script setup>
import { defineProps, onMounted, provide, reactive, ref, defineExpose } from 'vue'
import emiter from './../../utils/emiter'
const props = defineProps({
  model: {
    type: Object,
    default: () => ({})
  },
  rules: {
    type: Object,
    default: () => ({})
  }
})

const validateArrary = reactive({})

onMounted(() => {
  for(let keys in props.model){
    if (props.rules[keys] != undefined) {
      validateArrary[keys] = 'false'
    } 
  }
})

const validate = (callback) => {
  let flag = false
  let values = []
  for(const key in validateArrary){
    values.push(validateArrary[key])
  }
  flag = values.every(val => val === 'true')
  callback && callback(flag)
}

const resetFields = () => {
  emiter.emit('formResetFields')
}

defineExpose({validate, resetFields})

provide('formData', {
  model: props.model,
  rules: props.rules,
  formChange: (value) => {
    for(let keys in value){
      validateArrary[keys] = value[keys]
    }
  }
})
</script>

<style lang="scss" scoped>
.pied-form{
  width: 100%;
  height:auto;
  box-sizing: border-box;
}
</style>