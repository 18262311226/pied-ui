<template>
  <div class="pied-radio-group">
    <pied-radio 
        v-model="radioValue" 
        @click="change(item)" 
        v-for="(item, index) in data" 
        :key="index" 
        :label="item[keys.value]">
            {{item[keys.label]}}
    </pied-radio>
  </div>
</template>

<script>
export default {
    name: 'piedRadioGroup'
}
</script>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    data: {
        type: Array,
        default: () => []
    },
    keys: {
        type: Object,
        default: () => ({})
    }
})

let radioValue = ref(props.modelValue)
const change = (item) => {
    emits('update:modelValue', item[props.keys.value])
    if(item[props.keys.value] === props.modelValue){
        return
    }
    emits('change', item)
}
</script>

<style scoped>
.pied-radio-group{
    display: flex;
}
</style>