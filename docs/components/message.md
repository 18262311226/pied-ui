## 弹出框

## 基础用法

<pied-button @click="handel1">open</pied-button>

::: details 代码示例
```js
<template>
    <pied-button click="handel">open</pied-button>
</template>

<script>
import { message } from 'pied-design-ui'
const handel = () => {
    message('success', 'open of success !')
}
</script>
```
:::

<script>
import { message } from '../../components/index'
export default {
    data(){

    },
    methods:{
        handel1(){
           message('success', 'open of success !')
        }
    }
}
</script>

<style scoped>

</style>