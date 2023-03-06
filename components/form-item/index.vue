<template>
  <div class="pied-form-item" :style="{marginBottom: bottom}">
    <div class="form-item-label" :style="{width: labelWidth}">{{label}}</div>
    <div class="form-item-value">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'piedFormItem'
}
</script>

<script setup>
import { defineProps, inject, onMounted, provide, reactive, ref } from 'vue'

const props = defineProps({
  prop: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String,
    default: '0px'
  },
  bottom: {
    type: String,
    default: '0px'
  }
})

const formData = inject('formData')

const validateObj = reactive({})

provide('formItemData', {
  prop: props.prop,
  rules: formData.rules,
  model: formData.model,
  getValue: (value) => {
    
  },
  formItemChange: (value) => {
    let has = false
    const [key, val] = value.split(':')
    for(let keys in validateObj){
      if(keys === key){
        validateObj[keys] = val
        has = true
      }
    }

    if(!has){
      validateObj[key] = val
    }

    formData.formChange(validateObj)
    
  }
})
</script>

<style lang="scss" scoped>
.pied-form-item{
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  align-items:center;
  margin-bottom:0;
  .form-item-label{
    color:skyblue;
    display:inline;
    font-size:14px;
  }
  .form-item-value{
    width:100%;
  }
}
</style>