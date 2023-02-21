<template>
  <div class="pied-form-item">
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
import { defineProps } from 'vue'

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
  }
})


</script>

<style lang="scss" scoped>
.pied-form-item{
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  align-items:center;
  margin-bottom:15px;
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