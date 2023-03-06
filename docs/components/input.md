## 输入框

## 基础用法

<pied-input v-model="inputValue"></pied-input>

::: details 代码示例
```js
<template>
    <pied-input v-model="inputValue"></pied-input>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>
```
:::

## 输入类型

<pied-input v-model="inputValue1" type="text"></pied-input>
<pied-input v-model="inputValue2" type="password"></pied-input>

::: details 代码示例
```js
<template>
    <pied-input v-model="inputValue" type="text"></pied-input>
    <pied-input v-model="inputValue" type="password"></pied-input>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>
```
:::

## 自定义名称

<pied-input v-model="inputValue3" type="text" label="用户名"></pied-input>
<pied-input v-model="inputValue4" type="password" label="密码"></pied-input>

::: details 代码示例
```js
<template>
    <pied-input v-model="inputValue" type="text" label="用户名"></pied-input>
    <pied-input v-model="inputValue" type="password" label="密码"></pied-input>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>
```
:::

## 输入框居中

<pied-input v-model="inputValue5" type="text" label="用户名" center></pied-input>

::: details 代码示例
```js
<template>
    <pied-input v-model="inputValue" type="text" label="用户名" center></pied-input>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>
```
:::

## 禁用

<pied-input v-model="inputValue3" type="text" label="用户名" disabled></pied-input>
<pied-input v-model="inputValue4" type="password" label="密码" disabled></pied-input>

::: details 代码示例
```js
<template>
    <pied-input v-model="inputValue" type="text" label="用户名" disabled></pied-input>
    <pied-input v-model="inputValue" type="password" label="密码" disabled></pied-input>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| v-model      |  绑定值          | -----       | -----          |  String | 
| type         |   输入类型    |    -----       | -----        |  text,password |
| disabled     |   禁用           |   false,true |  false        |  Boolean |
| label        |   名称         |    -----     | -----         | String  |
| center         |   居中展示    |    -----       | -----        |  Boolean |

<script>
export default {
    data(){
        return {
            inputValue: '',
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputValue4: '',
            inputValue5: ''
        }
    }
}

</script>

<style scoped>

</style>