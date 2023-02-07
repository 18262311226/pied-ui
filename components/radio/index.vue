<template>
<div class="pied-radio">
    <div class="pied-radio-box" :class="piedboxClasses" @click="handelChange">
        <div class="radio">
            <div class="radio-item" :class="itemClasses"></div>
        </div>
        <div class="radio-text">
            <slot></slot>
        </div> 
    </div>
    <div class="radio-opacity" v-show="disabled"></div>
</div>
</template>

<script>
export default {
    name: 'piedRadio'
}
</script>

<script setup>
import { computed, defineProps, reactive } from 'vue'
const props = defineProps({
    modelValue: {
        require:true,
        default: ''
    },
    label: {
        require:true,
        default: ''
    },
    disabled:{
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:modelValue'])
const value1 = reactive({
    modelValue: ''
})
value1.modelValue = props.modelValue
let itemClasses = computed(() => {
    return [
        props.modelValue === props.label ? `item-choose` : ``
    ]
})
let piedboxClasses = computed(() => {
    return [
        props.modelValue === props.label ? `radio-choose` : ``
    ]
})

const handelChange = () => {
    emits('update:modelValue', props.label)
}
</script>

<style scoped>
.pied-radio{
    position: relative;
    display: inline-flex;
    cursor: pointer;
    margin-right:5px;
}
.pied-radio-box{
    position: relative;
    display: inline-flex;
    min-width:100px;
    height:30px;
    background:rgb(230, 227, 227);
    border:1px solid #ddd;
    align-items: center;
    justify-content: center;
    color:#333;
    cursor: pointer;
    border-radius: 4px;
    padding:0 5px;
    transition: 0.5s;
}
.radio-choose{
    box-shadow: 1px 1px 0px 0px purple;
    background:linear-gradient(120deg, purple, #41d1ff);
    color:#fff;
}
.radio-opacity{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:#fff;
    opacity: 0.5;
    cursor:not-allowed;
    z-index:10;
}
.radio{
    position: relative;
    width:20px;
    height:20px;
    border-radius: 50%;
    background:#aaa;
    margin-right:10px;
}
.radio-item{
    position:absolute;
    left:50%;
    top:50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    width:10px;
    height:10px;
    background:#ddd;
}
.item-choose{
    background:linear-gradient(120deg, purple, #41d1ff);
}
.radio-text{
    font-size: 12px;
}
</style>