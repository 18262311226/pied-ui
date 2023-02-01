## 单选框

### 基础用法

<div class="margin">
    <pied-radio v-model="radio" label="1">option1</pied-radio>
    <pied-radio v-model="radio" label="2">option2</pied-radio>
</div>

::: details 代码示例
```js
<template>
    <pied-radio v-model="radio" label="1">option1</pied-radio>
    <pied-radio v-model="radio" label="2">option2dwqedwq</pied-radio>
</template>

<script>
import { ref } from 'vue'
export default{
    setup(){
        const radio = ref('1')
        return {
            radio
        }
    }
}
</script>
```
:::

### 禁用

<div class="margin">
    <pied-radio v-model="radio" label="1" disabled>option1</pied-radio>
    <pied-radio v-model="radio" label="2" disabled>option2</pied-radio>
</div>

::: details 代码示例
```js
<template>
    <pied-radio v-model="radio" label="1" disabled>option1</pied-radio>
    <pied-radio v-model="radio" label="2" disabled>option2</pied-radio>
</temlate>

<script>
import { ref } from 'vue'
export default{
    setup(){
        const radio = ref('1')
        return {
            radio
        }
    }
}
</script>
```
:::

### 单选框组

<div class="margin">
    <pied-radio-group v-model="radio1" :data="data" :keys="{label: 'label', value: 'value'}"></pied-radio-group>
</div>

::: details 代码示例
```js
<template>
    <pied-radio-group v-model="radio1" data="data" keys="{label: 'label', value: 'value'}"></pied-radio-group>
</temlate>

<script>
import { ref } from 'vue'
export default{
    setup(){
        const radio = ref('1')
        const data = ref([
            {
                label: 'option1',
                value: 0
            },
            {
                label: 'option2',
                value: 1
            }
        ])
        return {
            radio,
            data
        }
    }
}
</script>
```
:::



<script>
import { ref } from 'vue'
export default{
    setup(){
        const radio = ref('1')
        const radio1 = ref(1)
        const data = ref([
            {
                label: 'option1',
                value: 0
            },
            {
                label: 'option2',
                value: 1
            }
        ])
        return {
            radio,
            radio1,
            data
        }
    }
}
</script>

<style>
.margin{
    margin-bottom:10px;
}
.pied-radio{
    margin-right:20px;
}
</style>