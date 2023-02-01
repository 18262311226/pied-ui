<template>
<div class="pied-checkbox">
    <div class="pied-checkbox-box" :class="piedboxClasses" @click="handelChange">
        <div class="checkbox">
            <div class="checkbox-item" :class="itemClasses"></div>
        </div>
        <div class="checkbox-text">
            <slot></slot>
        </div> 
    </div>
    <div class="checkbox-opacity" v-show="disabled"></div>
</div>
</template>

<script>
export default {
    name: 'piedCheckbox'
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
.pied-checkbox{
    position: relative;
    display: inline-flex;
    cursor: pointer;
    margin-right:5px;
}
.pied-checkbox-box{
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
}
.checkbox-choose{
    box-shadow: 1px 1px 0px 0px purple;
    background:linear-gradient(120deg, purple, #41d1ff);
    color:#fff;
}
.checkbox-opacity{
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
.checkbox{
    position: relative;
    width:20px;
    height:20px;
    border-radius: 50%;
    background:#aaa;
    margin-right:10px;
}
.checkbox-item{
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
.checkbox-text{
    font-size: 12px;
}
</style>