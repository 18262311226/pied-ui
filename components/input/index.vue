<template>
  <div class="pied-input">
    <div 
      class="pied-input-label"
      :class="labelClasses"
      :style="{left: center ? '50%' : '0', transform: center ? 'translate(-50%, -50%)' : 'translate(0, -50%)'}"
    >
      {{label}}
    </div>
    <input 
      :style="{cursor: disabled ? 'not-allowed' : '', textAlign: center ? 'center' : ''}"
      class="pied-input-value" 
      :type="type" 
      v-model="inputValue" 
      @input="onInput" 
      @focus="onFocus" 
      @blur="onBlur"
      :disabled="disabled"
    >
    <div class="pied-input-top-line" :class="topLineClasses"></div>
    <div class="pied-input-bottom-line" :class="bottomLineClasses"></div>
  </div>
</template>

<script>
export default {
  name: 'piedInput'
}
</script>

<script setup>
import { defineProps, ref, watch } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: 'input'
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:modelValue'])
let inputValue = ref('')
inputValue.value = props.modelValue
const labelClasses = ref([])
const topLineClasses = ref([])
const bottomLineClasses = ref([])
watch(() => props.modelValue, (newValue, oldValue) => {
  if(props.modelValue){
    inputValue.value = newValue
    labelClasses.value = ['pied-input-label-active']
    topLineClasses.value = ['pied-input-top-line-active']
    bottomLineClasses.value = ['pied-input-bottom-line-active']
  }
}, {
  immediate: true
})
const onFocus = () => {
  labelClasses.value = ['pied-input-label-active']
  topLineClasses.value = ['pied-input-top-line-active']
  bottomLineClasses.value = ['pied-input-bottom-line-active']
}
const onBlur = () => {
  if(!inputValue.value){
    labelClasses.value = []
    topLineClasses.value = []
    bottomLineClasses.value = []
  }
}
const onInput = () => {
  emits('update:modelValue', inputValue.value)
}
</script>

<style lang="scss" scoped>
.pied-input{
  width:100%;
  height:80px;
  position: relative;
  margin-bottom:0;
  .pied-input-label{
    display: inline;
    position: absolute;
    top:60%;
    left:0;
    color:skyblue;
    transform: translate(0, -50%);
    transition: 0.5s;
  }
  .pied-input-label-active{
    top:10%;
    font-size: 18px;
    font-weight: 700;
    color:purple;
  }
  .pied-input-value{
    position: absolute;
    left:0;
    top:60%;
    transform: translateY(-50%);
    width:100%;
    height:35px;
    transition: 0.5s;
    color:purple;
    font-size: 18px;
    background:transparent;
    outline: none;
  }
  .pied-input-top-line{
    position:absolute;
    left: 0;
    top:30px;
    width:100%;
    height:2px;
    transition: 0.5s;
    background:linear-gradient(120deg, skyblue, purple);
  }
  .pied-input-top-line-active{
    top:22px;
    height:4px;
  }
  .pied-input-bottom-line{
    position:absolute;
    left: 0;
    bottom:12px;
    width:100%;
    height:2px;
    transition: 0.5s;
    background:linear-gradient(120deg, skyblue, purple);
  }
  .pied-input-bottom-line-active{
    bottom:5px;
    height:4px;
  }
}
</style>