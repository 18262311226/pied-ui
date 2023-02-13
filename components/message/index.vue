<template>
  <div>
    <transition name="down">
        <div 
            v-if="isVisable"
            :class="styles[type].containerClass"
            class="min-w-[420px] fixed top-[20px] left-[50%] flex items-center translate-x-[-50%] z-50 px-3 py-1.5 rounded-sm border cursor-pointer"
        >
            <!-- <m-svg-icon :name="styles[type].icon" :fillClass="styles[type].fillClass" class="w-1.5 h-1.5 mr-1.5"></m-svg-icon> -->
            <span class="text-sm" :class="styles[type].textClass">{{content}}</span>
        </div>
    </transition>
  </div>
</template>

<script>
const SUCCESS = 'success'
const WARN = 'warn'
const ERROR = 'error'

const typeEnum = [SUCCESS, WARN, ERROR]
</script>

<script setup>
import { onMounted, ref } from 'vue';
// import mSvgIcon from '../svg-icon/index.vue'

const props = defineProps({
    type: {
        type: String,
        required: true,
        validator(val){
            const result = typeEnum.includes(val)
            if(!result){
                throw new Error(`type 的值不能是${type}`)
            }

            return result
        }
    },
    content: {
        type: String,
        required: true
    },
    duration: {
        type: Number
    },
    destory: {
        type: Function
    }
})

const styles = {
    // 警告
  warn: {
    icon: 'warn',
    fillClass: 'fill-warn-300',
    textClass: 'text-warn-300',
    containerClass:
      'bg-warn-100 border-warn-200  hover:shadow-lg hover:shadow-warn-100'
  },
  // 错误
  error: {
    icon: 'error',
    fillClass: 'fill-error-300',
    textClass: 'text-error-300',
    containerClass:
      'bg-error-100 border-error-200  hover:shadow-lg hover:shadow-error-100'
  },
  // 成功
  success: {
    icon: 'success',
    fillClass: 'fill-success-300',
    textClass: 'text-success-300',
    containerClass:
      'bg-success-100 border-success-200  hover:shadow-lg hover:shadow-success-100'
  }
}

const isVisable = ref(false)

const duration = '0.5s'

onMounted(() => {
    isVisable.value = true
    setTimeout(() => {
        isVisable.value = false
        setTimeout(() => {
            props.destory()
        },  parseInt(duration.replace('0.', '').replace('s', '') * 100))
    }, props.duration)
})
</script>

<style lang="scss" scoped>
.down-enter-active,.down-leave-active{
    transition: all v-bind(duration);
}
.down-enter-from,.down-leave-to{
    opacity: 0;
    transform: translate3d(-50%, 100px, 0);
}
</style>