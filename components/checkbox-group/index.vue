<template>
    <div class="pied-checkbox-group">
      <pied-checkbox
          v-model="checkboxValue" 
          @click="change(item)" 
          v-for="(item, index) in data" 
          :key="index"
          :disabled="item.disabled"
          :border="border" 
          :label="item[keys.value]">
            {{item[keys.label]}}
      </pied-checkbox>
    </div>
</template>
  
<script>
export default {
    name: 'piedCheckboxGroup'
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
        default: () => ({
            label: 'label',
            value: 'value'
        })
    },
    border: {
        type: Boolean,
        default: false
    }
})

let checkboxValue = ref(props.modelValue)
const change = (item) => {
    emits('update:modelValue', checkboxValue.value)
    emits('change', checkboxValue.value)
}
</script>

<style scoped>
.pied-checkbox-group{
    /* display: flex; */
}
</style>