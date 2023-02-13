## 多选框

### 基础用法

<div class="margin">
    <pied-checkbox v-model="checkbox">option1</pied-checkbox>
</div>

::: details 代码示例
```js
<template>
    <pied-checkbox v-model="checkbox">option1</pied-checkbox>
</template>

<script>
import { ref } from 'vue'
export default{
    setup(){
        const checkbox = ref(false)
        return {
            checkbox
        }
    }
}
</script>
```
:::

### 禁用

<div class="margin">
    <pied-checkbox v-model="checkbox1">option1</pied-checkbox>
    <pied-checkbox v-model="checkbox" disabled>option2</pied-checkbox>
</div>

::: details 代码示例
```js
<template>
    <pied-checkbox v-model="checkbox1">option1</pied-checkbox>
    <pied-checkbox v-model="checkbox" disabled>option2</pied-checkbox>
</template>

<script>
import { ref } from 'vue'
export default{
    setup(){
        const checkbox = ref(false)
        const checkbox1 = ref(true)
        return {
            checkbox,
            checkbox1
        }
    }
}
</script>
```
:::

### 选中边框

<div class="margin">
    <pied-checkbox v-model="checkbox1" border>option1</pied-checkbox>
    <pied-checkbox v-model="checkbox" border>option2</pied-checkbox>
</div>

::: details 代码示例
```js
<template>
    <pied-checkbox v-model="checkbox1" border>option1</pied-checkbox>
    <pied-checkbox v-model="checkbox" border>option2</pied-checkbox>
</template>

<script>
import { ref } from 'vue'
export default{
    setup(){
        const checkbox = ref(false)
        const checkbox1 = ref(true)
        return {
            checkbox,
            checkbox1
        }
    }
}
</script>
```
:::

### 多选框组

<div class="margin">
    <pied-checkbox-group v-model="checkbox2" :data="datalist" :keys="{label: 'label', value: 'value'}">
    </pied-checkbox-group>
</div>

::: details 代码示例
```js
<template>
    <pied-checkbox-group v-model="checkbox2" data="datalist" keys="{label: 'label', value: 'value'}">
    </pied-checkbox-group>
</template>

<script>
import { reactive, ref } from 'vue'
export default{
    setup(){
        const checkbox2 = ref([])
        const datalist = reactive([
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
            checkbox2
            datalist
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
| keys          |   单选组绑定key,value |    ----- | {}           |  Object               |
| data         |   单选组数据    |    -----       | -----        |  Arrary |

<script>
export default {
    data(){
        return {
            checkbox: false,
            checkbox1: true,
            checkbox2: [],
            datalist:[
                {
                    label: 'option1',
                    value: 0
                },
                {
                    label: 'option2',
                    value: 1
                }
            ]
        }
    }
}
</script>

<style scoped>
.margin{
    margin-bottom:10px;
}
</style>
