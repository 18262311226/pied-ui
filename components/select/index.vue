<template>
  <div class="pied-select" @click="handelShow">
    <div class="pied-select-value">{{inputLabel}}</div>
    <div class="pied-select-icon">&gt;</div>
    <transition name="fade">
        <div class="select-bg" v-if="selectBg" @click.stop.self="handelClose">
            <div class="bg-main">
                <div class="main-select-input" v-if="filterable">
                    <pied-input v-model="searchValue" @input="onInput" label="search" center></pied-input>
                </div>
                <div class="main-select-content">
                    <p class="tip">select list</p>
                    <ul class="content-list">
                        <li class="list-item" 
                            v-for="(item,index) in showList" 
                            :key="index"
                            :class="[currentItemIndex == item[keys.value] ? 'itemActive' : '']"
                            @click="itemClick(item)"
                        >
                            <template v-if="!slots['default']">{{item[keys.label]}}</template>
                            <slot v-else :data="item"></slot>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {  
  name: 'piedSelect'
}
</script>

<script setup>
import { useScrollLock } from '@vueuse/core'
import { ref, defineProps, watch, computed, useSlots } from 'vue'
const emits = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    data: {
        type: Array,
        default: () => []
    },
    filterable:{
        type: Boolean,
        default: false
    },
    keys: {
        type: Object,
        default: {
            label: 'label',
            value: 'value'
        }
    }
})
const isLocked = useScrollLock(document.body)
const slots = useSlots();
const selectBg = ref(false)
const currentItemIndex = ref('')
const inputValue = ref('')
const inputLabel = ref('')
const searchValue = ref('')
inputValue.value = props.modelValue
const showList = computed(() => {
    return props.data.filter(item => item[props.keys.label].includes(searchValue.value))
})
watch(() => props.modelValue, (newValue, oldValue) => {
    inputValue.value = newValue
    currentItemIndex.value = inputValue.value
    props.data.forEach(item => {
        if(item[props.keys.value] == inputValue.value){
            inputLabel.value = item[props.keys.label]
        }
    })
}, {
    immediate: true
})
const handelShow = () => {
    selectBg.value = true
    isLocked.value = true
}
const handelClose = () => {
    selectBg.value = false
    isLocked.value = false
}
const itemClick = (item) => {
    currentItemIndex.value = item[props.keys.value]
    if(item[props.keys.value] != inputValue.value) emits('change', item)
    inputValue.value = item[props.keys.value]
    inputLabel.value = item[props.keys.label]
    emits('update:modelValue', inputValue.value)
    searchValue.value = ''
    handelClose()
}
</script>

<style lang="scss" scoped>
.pied-select{
    width:100%;
    height:40px;
    position:relative;
    padding:2px 2px 2px 2px;
    box-sizing: border-box;
    background:linear-gradient(120deg, skyblue, purple);
    box-shadow: 0 15px 10px -10px rosybrown;
    cursor: pointer;
    .pied-select-value{
        width:100%;
        height:35px;
        background:#fff;
        color:rgb(113, 112, 112);
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        line-height:35px;
    }
    .pied-select-icon{
        position:absolute;
        right:10px;
        top:50%;
        transform: translateY(-50%);
        font-size: 20px;
        font-family: '宋体';
        font-weight: 700;
        color:purple;
    }
    .select-bg{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        z-index:9999;
        background:linear-gradient(90deg, purple, skyblue);
        .bg-main{
            width:500px;
            height:100vh;
            margin:auto;
            position: relative;
            .main-select-input{
                width:300px;
                position: absolute;
                left:50%;
                transform: translateX(-50%);
                top:20px;
            }
            .main-select-content{
                width:100%;
                height:400px;
                position: absolute;
                left:0;
                top:50%;
                transform: translateY(-50%);
                border-radius: 20px;
                padding:10px;
                box-sizing: border-box;
                .tip{
                    color:#fff;
                    font-size: 18px;
                    font-style: italic;
                }
                .content-list{
                    width:100%;
                    height:100%;
                    overflow:hidden;
                    overflow-y: auto;
                    list-style: none;
                    .list-item{
                        width:100%;
                        height:40px;
                        transition: 0.8s;
                        text-align: center;
                        line-height: 40px;
                        color:#fff;
                    }
                    .itemActive{
                        color:#333;
                        height:60px;
                        background:#fff;
                        line-height: 60px;
                        font-size: 20px;
                    }
                    .list-item:hover{
                        color:#333;
                        height:60px;
                        background:#fff;
                        line-height: 60px;
                        font-size: 20px;
                    }
                }
            }
        }
    }
}

.fade-enter-from,.fade-leave-to{
    transform:scale(0);
    opacity: 0;
}
.fade-enter-active,.fade-leave-active {
    transition: all 0.5s;
}

.content-list::-webkit-scrollbar {
  width: 2px;
  height: 8px;
}

.content-list::-webkit-scrollbar-track {
  background-color:transparent;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
.content-list::-webkit-scrollbar-thumb {
  background-color: rgb(147,147,153,0.5);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
</style>