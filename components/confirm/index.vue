<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
        <div 
            v-if="isVisable"
            class="w-screen h-screen fixed left-0 top-0 z-20 bg-zinc-900/80"
            @click="close"
        >

        </div>
    </transition>
    <!-- 内容 -->
    <transition name="up">
        <div 
            v-if="isVisable"
            class="w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"
        >
            <div class="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2">{{title}}</div>
            <div class="text-base text-zinc-900 dark:text-zinc-300 mb-2">{{content}}</div>
            <div class="flex justify-end">
                <pied-button type="info" size="mini" v-if="cancelText" class="mr-2" @click="onCancelClick">{{cancelText}}</pied-button>
                <pied-button type="primary" size="mini" v-if="confirmText" @click="onConfirmClick">{{confirmText}}</pied-button>
            </div>
        </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import piedButton from '../button/index.vue'
const props = defineProps(
    {
    title: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    cancelText: {
        type: String,
        default: ''
    },
    confirmText: {
        type: String,
        default: ''
    },
    cancelHandler: {
        type: Function
    },
    confirmHandler: {
        type: Function
    },
    close:{
        type: Function
    }
})

const isVisable = ref(false)
const duration = '0.5s'

const show = () => {
    isVisable.value = true
}

onMounted(() => {
    show()
})

const close = () => {
    isVisable.value = false
    setTimeout(() => {
        if(props.close){
            props.close()
        }
    }, parseInt(duration.replace('0.', '').replace('s', '') * 100))
}

const onCancelClick = () => {
    if(props.cancelHandler){
        props.cancelHandler()
    }
    close()
}

const onConfirmClick = () => {
    if(props.confirmHandler){
        props.confirmHandler()
    }
    close()
}

</script>

<style lang="scss" scoped>
.fade-enter-active,.fade-leave-active{
    transition: all v-bind(duration);
}
.fade-enter-from,.fade-leave-to{
    opacity: 0;
}

.up-enter-active,.up-leave-active{
    transition: all v-bind(duration);
}
.up-enter-from,.up-leave-to{
    opacity: 0;
    transform: translate3d(-50%, 100px, 0);
}
</style>