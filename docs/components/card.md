## 卡片

## 基本使用

<pied-card>
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

::: details 代码示例
```js
<template>
    <pied-card>
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>
</template>
```
:::

## 阴影状态

<pied-card shadow="always">
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

<pied-card shadow="hover">
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

<pied-card shadow="never">
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

::: details 代码示例
```js
<template>
    <pied-card shadow="always">
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>

    <pied-card shadow="hover">
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>

    <pied-card shadow="never">
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>
</template>
```
:::

## 自定义背景

<pied-card shadow="always" themeColor="rgba(255,255,255,0.2)">
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

<pied-card shadow="hover" themeColor="rgba(0,0,245,0.2)">
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

<pied-card shadow="never" themeColor="rgba(250,205,255,0.2)">
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

::: details 代码示例
```js
<template>
    <pied-card shadow="always" themeColor="rgba(255,255,255,0.2)">
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>

    <pied-card shadow="hover" themeColor="rgba(0,0,245,0.2)">
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>

    <pied-card shadow="never" themeColor="rgba(250,205,255,0.2)">
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>
</template>
```
:::

## 自定义头部

<pied-card shadow="always" themeColor="rgba(255,255,255,0.2)">
    <template #header>
        <div class="header">
          <span class="pied-icon-file-image1 img"></span>
          <div class="title">我的相册</div>
        </div>
    </template>
    <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
</pied-card>

::: details 代码示例
```js
<template>
    <pied-card shadow="always" themeColor="rgba(255,255,255,0.2)">
        <template #header>
            <div class="header">
            <span class="pied-icon-file-image1 img"></span>
            <div class="title">我的相册</div>
            </div>
        </template>
        <div v-for="(item, index) in 5">{{index}} ---- 路人</div>
    </pied-card>
</template>

<style>
.header{
  height:40px;
  display: flex;
  align-items: center;
  .img{
    font-size: 30px; 
    margin-right:10px;
  }
}
</style>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| shadow      |  阴影设置          |  always,never,hover       |  always          |  String | 
| themeColor     |   自定义背景           |   颜色 |  #fff        |  String |

<script>

</script>

<style scoped>
.pied-card{
    margin-bottom:10px;
}

.header{
  height:40px;
  display: flex;
  align-items: center;
}
.img{
    font-size: 30px; 
    margin-right:10px;
}
</style>