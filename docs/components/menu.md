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

## 模式切换

<pied-button @click="handel">切换</pied-button>
<pied-menu theme="sun" width="300px" v-model:selectedKeys="current" :mode="mode">
    <pied-menu-item keys="mail" to="/user/my">
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

::: details 代码示例
```js
<template>
    <pied-button @click="handel">切换</pied-button>
    <pied-menu theme="sun" width="300px" v-model:selectedKeys="current" :mode="mode">
        <pied-menu-item keys="mail" to="/user/my">
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

<script setup>
import { ref } from 'vue'
const current = ref('mail')
const handel = () => {
  if(mode.value === 'inline'){
    mode.value = 'horizontal'
  }else {
    mode.value = 'inline'
  }
}
</script>
```
:::

## 主题切换

<pied-button @click="handel1">切换</pied-button>
<pied-menu :theme="theme" width="300px" v-model:selectedKeys="current" :mode="mode">
    <pied-menu-item keys="mail" to="/user/my">
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

::: details 代码示例
```js
<template>
    <pied-button @click="handel">切换</pied-button>
    <pied-menu :theme="theme" width="300px" v-model:selectedKeys="current" :mode="mode">
        <pied-menu-item keys="mail" to="/user/my">
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

<script setup>
import { ref } from 'vue'
const current = ref('mail')
const mode = ref('inline')
const theme = ref('sun')
const handel = () => {
  if(theme.value === 'sun'){
    theme.value = 'dark'
  }else {
    theme.value = 'sun'
  }
}
</script>
```
:::

## 菜单分组

<pied-menu theme="sun" width="300px" v-model:selectedKeys="current" mode="inline">
    <pied-menu-item keys="mail" to="/user/my">
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
        <pied-menu-item-group title="item-1">
            <pied-menu-item keys="home">menu-option1</pied-menu-item>
            <pied-menu-item keys="like">menu-option2</pied-menu-item>
            <pied-menu-item keys="user">menu-option3</pied-menu-item>
        </pied-menu-item-group>
        <pied-menu-item-group title="item-2">
            <pied-menu-item keys="my">menu-option4</pied-menu-item>
        </pied-menu-item-group>
        <pied-sub-menu keys="sub-2">
            <template #icon>
                <span class="pied-icon-heart1"></span>
            </template>
            <template #title>
                兴趣管理
            </template>
            <pied-menu-item-group title="item-3">
                <pied-menu-item keys="option7">menu-option7</pied-menu-item>
                <pied-menu-item keys="option8">menu-option8</pied-menu-item>
                <pied-menu-item keys="option9">menu-option9</pied-menu-item>
            </pied-menu-item-group>
            <pied-menu-item-group title="item-4">
                <pied-menu-item keys="option10">menu-option10</pied-menu-item>
                <pied-menu-item keys="option11">menu-option11</pied-menu-item>
                <pied-menu-item keys="option12">menu-option12</pied-menu-item>
            </pied-menu-item-group>
        </pied-sub-menu>
    </pied-sub-menu>
    <pied-menu-item keys="link">
        <template #icon>
            <span class="pied-icon-a-piechart"></span>
        </template>
        Navigation Four
    </pied-menu-item>
</pied-menu>

::: details 代码示例
```js
<template>
    <pied-menu theme="sun" width="300px" v-model:selectedKeys="current" mode="inline">
        <pied-menu-item keys="mail" to="/user/my">
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
            <pied-menu-item-group title="item-1">
                <pied-menu-item keys="home">menu-option1</pied-menu-item>
                <pied-menu-item keys="like">menu-option2</pied-menu-item>
                <pied-menu-item keys="user">menu-option3</pied-menu-item>
            </pied-menu-item-group>
            <pied-menu-item-group title="item-2">
                <pied-menu-item keys="my">menu-option4</pied-menu-item>
            </pied-menu-item-group>
            <pied-sub-menu keys="sub-2">
                <template #icon>
                    <span class="pied-icon-heart1"></span>
                </template>
                <template #title>
                    兴趣管理
                </template>
                <pied-menu-item-group title="item-3">
                    <pied-menu-item keys="option7">menu-option7</pied-menu-item>
                    <pied-menu-item keys="option8">menu-option8</pied-menu-item>
                    <pied-menu-item keys="option9">menu-option9</pied-menu-item>
                </pied-menu-item-group>
                <pied-menu-item-group title="item-4">
                    <pied-menu-item keys="option10">menu-option10</pied-menu-item>
                    <pied-menu-item keys="option11">menu-option11</pied-menu-item>
                    <pied-menu-item keys="option12">menu-option12</pied-menu-item>
                </pied-menu-item-group>
            </pied-sub-menu>
        </pied-sub-menu>
        <pied-menu-item keys="link">
            <template #icon>
                <span class="pied-icon-a-piechart"></span>
            </template>
            Navigation Four
        </pied-menu-item>
    </pied-menu>
</template>

<script setup>
import { ref } from 'vue'
const current = ref('mail')
</script>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| v-model:selectedKeys      |  当前绑定的菜单按钮     |  ------      |  ------          |  String | 
| theme     |   主题颜色           |   sun/dark |  sun        |  String |
| mode     |   显示模式           |   inline/horizontal |  inline        |  String |
| width     |   导航宽度           |  ------px |  250px        |  String |
| keys     |   菜单keys           |   ------ |  ------        |  String |
| to     |   指定路由地址           |   ------ |  ------        |  String |
| title     |   二级菜单名称           |   ------ |  ------        |  String |
|  menuItemChange    |   点击菜单按钮触发           |   ------ |  ------        |  Function |

<script>
export default {
    data(){
        return {
            current: 'mail',
            mode: 'inline',
            theme: 'sun'
        }
    },
    methods: {
        handel() {
            if(this.mode === 'inline'){
                this.mode = 'horizontal'
            }else {
                this.mode = 'inline'
            }
        },
        handel1() {
            if(this.theme === 'sun'){
                this.theme = 'dark'
            }else {
                this.theme = 'sun'
            }
        }
    }
}
</script>

<style scoped>
.box{
    width:100%;
}
</style>