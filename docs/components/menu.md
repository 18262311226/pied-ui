## 导航菜单

## 基本使用
<div class="box">
    <pied-menu theme="sun" v-model:selectedKeys="current" mode="horizontal">
        <pied-menu-item keys="mail">
            <template #icon>
                <span class="pied-icon-home1"></span>
            </template>
            首页
        </pied-menu-item>
        <pied-menu-item keys="app">
            <template #icon>
                <span class="pied-icon-image1"></span>
            </template>
            相册管理
        </pied-menu-item>
        <pied-sub-menu keys="sub-1">
            <template #icon>
                <span class="pied-icon-heart1"></span>
            </template>
            <template #title>
                我的收藏
            </template>
            <pied-menu-item keys="home">menu-option1</pied-menu-item>
            <pied-menu-item keys="like">menu-option2</pied-menu-item>
            <pied-menu-item keys="user">menu-option3</pied-menu-item>
            <pied-menu-item keys="my">menu-option4</pied-menu-item>
        </pied-sub-menu>
        <pied-menu-item keys="link">
            <template #icon>
                <span class="pied-icon-a-piechart"></span>
            </template>
            Navigation Four
        </pied-menu-item>
    </pied-menu>
</div>

::: details 代码示例
```js
<template>
    <pied-menu theme="sun" v-model:selectedKeys="current" mode="horizontal">
        <pied-menu-item keys="mail">
            <template #icon>
                <span class="pied-icon-home1"></span>
            </template>
            首页
        </pied-menu-item>
        <pied-menu-item keys="app">
            <template #icon>
                <span class="pied-icon-image1"></span>
            </template>
            相册管理
        </pied-menu-item>
        <pied-sub-menu keys="sub-1">
            <template #icon>
                <span class="pied-icon-heart1"></span>
            </template>
            <template #title>
                我的收藏
            </template>
            <pied-menu-item keys="home">menu-option1</pied-menu-item>
            <pied-menu-item keys="like">menu-option2</pied-menu-item>
            <pied-menu-item keys="user">menu-option3</pied-menu-item>
            <pied-menu-item keys="my">menu-option4</pied-menu-item>
        </pied-sub-menu>
        <pied-menu-item keys="link">
            <template #icon>
                <span class="pied-icon-a-piechart"></span>
            </template>
            Navigation Four
        </pied-menu-item>
    </pied-menu>
</template>

<script>
import { ref } from 'vue'
const current = ref('mail')
</script>
```
:::

<script>
export default {
    data(){
        return {
            current: 'mail'
        }
    }
}
</script>

<style scoped>
.box{
    width:100%;
}
</style>