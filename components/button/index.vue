<template>
  <button 
    :class="classes"
    :disabled="disabled || loading"
  >
    <i v-show="icon && !loading" :class="[icon, 'icon-button']" :style="{marginRight: slots.default ? '10px' : '0'}"></i>
    <span v-show="loading" class="pied-button-before"></span>
    <span v-show="loading" class="pied-button-middle"></span>
    <span v-show="loading" class="pied-button-after"></span>
    <div :style="{opacity: loading ? '0' : '100%'}">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'PiedButton'
}
</script>

<script setup>
import { computed, defineProps, useSlots } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'small'
  },
  round:{
    type: Boolean,
    default: false
  },
  circle:{
    type: Boolean,
    default: false
  },
  disabled:{
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})
let classes = computed(() => {
  return [
    `pied-button`,
    `pied-button-${props.type}`, 
    `pied-button-${props.size}`, 
    props.round ? `round`: ``,
    props.circle ? `circle` : ``,
    props.disabled || props.loading ? `disabled` : ``,
  ]
})

const slots = useSlots()
</script>


<style scoped>
.icon-button{
  font-size: 14px;
  display:block;
  width:15px;
  height:16px;
  line-height: 16px;
}
.pied-button{
  position: relative;
  display: inline-flex;
  padding:8px 30px;
  cursor: pointer;
  font-size: 12px;
  border-radius: 5px;
  overflow:hidden;
  justify-content: center;
  align-items: center;
}
.pied-button-primary{
  background:linear-gradient(120deg, rgb(74, 74, 176), #41d1ff);
  color:#fff;
}
.pied-button-primary:hover{
  background:linear-gradient(120deg, rgb(111, 111, 236), #41d1ff);
  color:#fff;
}
.pied-button-info{
  background:linear-gradient(120deg, #ddd, #41d1ff);
  color:#fff;
}
.pied-button-info:hover{
  background:linear-gradient(120deg, rgb(248, 243, 243), #41d1ff);
  color:#fff;
}
.pied-button-warning{
  background:linear-gradient(120deg, orange, yellow);
  color:#fff;
}
.pied-button-warning:hover{
  background:linear-gradient(120deg, rgb(244, 172, 39), yellow);
  color:#fff;
}
.pied-button-error{
  background:linear-gradient(120deg, red, rgb(102, 48, 48));
  color:#fff;
}
.pied-button-error:hover{
  background:linear-gradient(120deg, rgb(246, 41, 41), rgb(130, 63, 63));
  color:#fff;
}
.pied-button-mini{
  padding:6px 20px;
}
.pied-button-small{
  padding:8px 30px;
}
.pied-button-medium{
  padding:10px 40px; 
}
.round{
  border-radius:20px;
}
.circle{
  padding:20px 20px;
  border-radius: 50%; 
}
.disabled{
  cursor: not-allowed;
}

.pied-button-before{
  position: absolute;
  top: 50%;
  left: 50%;
  width:12px;
  height:12px;
  content: "";
  background:linear-gradient(120deg, red, #41d1ff);
  z-index: 10;
  transform-origin: left top;
  border-radius:19px;
  animation: rotate1 0.5s infinite linear;
}
.pied-button-middle{
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width:14px;
  height:14px;
  background:linear-gradient(120deg, red, #41d1ff);
  border-radius:19px;
  z-index: 10;
  transform-origin: left top;
  animation: rotate2 0.7s infinite linear;
} 
.pied-button-after{
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width:13px;
  height:13px;
  background:linear-gradient(120deg, red, #41d1ff);
  border-radius:19px;
  z-index: 10;
  transform-origin: left top;
  animation: rotate2 0.6s infinite linear;
} 
@keyframes rotate1 {
    to{
        transform: rotate(360deg);  
    }
}
@keyframes rotate2 {
    to{
        transform: rotate(360deg);  
    }
}
</style>