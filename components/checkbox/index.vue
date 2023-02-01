<template>
<div class="pied-checkbox" :class="piedClasses">
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
import { computed, defineProps, ref } from 'vue'
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
    },
    border: {
        type: Boolean,
        default: false
    } 
})
const emits = defineEmits(['update:modelValue'])
const checklist = ref('')
checklist.value = props.modelValue
let itemClasses = computed(() => {
    if(typeof checklist.value == 'boolean'){
        return checklist.value ? ['item-choose'] : [props.border ? 'pied-checkbox-box-border' : '']
    }else {
        return checklist.value.includes(props.label) ? ['item-choose'] : [props.border ? 'pied-checkbox-box-border' : '']
    }
})
let piedClasses = computed(() => {
    return props.border ? ['pied-checkbox-box-border'] : ['']
})
let piedboxClasses = computed(() => {
    if(typeof checklist.value == 'boolean'){
        return checklist.value && props.border ? ['checkbox-choose'] : []
    }else {
        return checklist.value.includes(props.label) && props.border ? ['checkbox-choose'] : []
    }
})

const handelChange = () => {
    if(typeof checklist.value == 'boolean'){
        checklist.value = !checklist.value
        emits('update:modelValue', checklist.value)
    }else {
        let indexnum = -1
        checklist.value.map((item,index) => {
            let checked = checklist.value[index]
            if(checked === props.label){
                indexnum = index
            }
        })
        indexnum != -1 ? checklist.value.splice(indexnum, 1) : checklist.value.push(props.label)
        emits('update:modelValue', checklist.value) 
    }
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
    align-items: center;
    justify-content: center;
    color:#333;
    cursor: pointer;
    border-radius: 4px;
    padding:0 5px;
}
.pied-checkbox-box-border{
    background:rgb(230, 227, 227);
    border:1px solid #ddd;
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
    background:#aaa;
    margin-right:10px;
}
.checkbox-item{
    position:absolute;
    left:50%;
    top:50%;
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