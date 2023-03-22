<template>
  <div class="pied-dialog">
    <transition name="fade">
      <div class="pied-dialog-bg" v-if="dialogShow" @click.self="closeDialog"></div>
    </transition>
    <transition name="box">
      <div class="pied-dialog-box" v-if="dialogShow">
        <div class="pied-dialog-title">
          <div class="pied-dialog-self-title" :style="{textAlign: props.center ? 'center' : 'left'}">
            {{props.title}}
            <p class="pied-icon-close-square" @click="closeDialog"></p>
          </div>
          <div class="pied-dialog-slot-title">
            <slot name="header"></slot>
          </div>
        </div>
        <div class="pied-dialog-body">
          <slot></slot>
        </div>
        <div class="pied-dialog-footer" :style="{textAlign: props.center ? 'center' : 'right'}">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'piedDialog'
}
</script>

<script setup>
import { ref, defineProps, watch } from 'vue'

const dialogShow = ref(false)

const emits = defineEmits(['update:modelValue', 'close'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  center: {
    type: Boolean,
    default: false
  },
  beforeClose:{
    type: Function,
    default: ''
  }
})

watch(() => props.modelValue, (newValue) => {
  dialogShow.value = newValue
}, {
  immediate: true
})

dialogShow.value = props.modelValue

const closeDialog = () => {
  if(typeof props.beforeClose === 'function'){
    props.beforeClose(() => {
      dialogShow.value = false
      emits('update:modelValue', dialogShow.value)
    })
    return
  }
  dialogShow.value = false
  emits('update:modelValue', dialogShow.value)
  emits('close')
}
</script>

<style lang="scss" scoped>
.pied-dialog{
  .pied-dialog-bg{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
    z-index:19;
    background:rgba(0,0,0,0.5);
  }
  .pied-dialog-box{
    position: fixed;
    left: 0;
    top: 100px;
    right: 0;
    margin:auto;
    width:500px;
    height:auto;
    padding:10px;
    z-index: 19;
    border-radius: 5px;
    box-sizing: border-box;
    background:#fff;
    .pied-dialog-title{
      .pied-dialog-self-title{
        width:100%;
        height:30px;
        line-height: 30px;
        font-weight: 700;
        p{
          cursor: pointer;
          color:#333;
          float:right;
          &:hover{
            color:red;
          }
        }
      }
    }
    .pied-dialog-body{
      padding:5px;
      font-size: 14px;
    }
    .pied-dialog-footer{
      text-align: right;
    }
  }
}

.fade-enter-from,.fade-leave-to{
  transform:scale(0.5);
  opacity: 0;
}

.fade-enter-active,.fade-leave-active {
  transition: all 0.6s;
}

.box-enter-from,.box-leave-to{
  transform: translateX(150%);
  opacity: 0;
}

.box-enter-active,.box-leave-active {
  transition: all 0.8s;
}
</style>