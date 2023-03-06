## 单选框

## 基础用法

<div class="margin">
    <pied-radio v-model="radio" label="1">option1</pied-radio>
    <pied-radio v-model="radio" label="2">option2</pied-radio>
</div>

::: details 代码示例
```js
<template>
    <pied-radio v-model="radio" label="1">option1</pied-radio>
    <pied-radio v-model="radio" label="2">option2</pied-radio>
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

## 禁用

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

## 单选框组

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

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| v-model      |  绑定值          | -----       | -----          |  String,Boolean,Number | 
| disabled     |   禁用           |   false,true |  false        |  Boolean |
| label        |   单选值         |    -----     | -----         | String,Boolean,Number  |
| key          |   单选组绑定key,value |    ----- | {}           |  Object               |
| data         |   单选组数据    |    -----       | -----        |  Arrary |


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

<style scoped>
.margin{
    margin-bottom:10px;
}
.pied-radio{
    margin-right:20px;
}
</style>