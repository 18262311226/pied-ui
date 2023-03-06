## 对话框

## 基础用法

<pied-button @click="handel1">open</pied-button>

::: details 代码示例
```js
<template>
    <pied-button click="handel">open</pied-button>
</template>

<script>
import { confirm } from 'pied-design-ui'
const handel = () => {
    confirm('标题', '我是一个内容', '取消', '确定')
}
</script>
```
:::

<script>
import { confirm } from '../../components/index'
export default {
    data(){

    },
    methods:{
        handel1(){
           confirm('标题', '我是一个内容', '取消', '确定')
        }
    }
}
</script>

<style>

</style>