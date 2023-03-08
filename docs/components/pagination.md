## 分页

## 基础用法
<pied-pagination layout="prev, pager, next"  :total="20"></pied-pagination>

::: details 代码示例
```js
<template>
    <pied-pagination 
        layout="prev, pager, next" 
        total="20"
    >
    </pied-pagination>
</template>
```
:::

## 页码状态
<pied-pagination layout="prev, pager, next" :currentPageNum="8" :total="100"></pied-pagination>
<pied-pagination layout="prev, pager, next" :currentPageNum="14" :total="200"></pied-pagination>

::: details 代码示例
```js
<template>
    <pied-pagination 
        layout="prev, pager, next" 
        currentPageNum="8"
        total="100"
    >
    </pied-pagination>
    <pied-pagination 
        layout="prev, pager, next" 
        currentPageNum="14"
        total="200"
    >
    </pied-pagination>
</template>
```
:::

## 分页背景
<pied-pagination layout="prev, pager, next" background  :total="200"></pied-pagination>

::: details 代码示例
```js
<template>
    <pied-pagination 
        layout="prev, pager, next" 
        total="20"
        background
    >
    </pied-pagination>
</template>
```
:::

## 分页控件

<pied-pagination layout="pager" :total="20"></pied-pagination>

<pied-pagination layout="prev, pager, next" :total="20"></pied-pagination>

<pied-pagination layout="prev, pager, next, total" :total="20"></pied-pagination>

::: details 代码示例
```js
<template>
    <pied-pagination 
        layout="prev, pager, next" 
        total="20"
    >
    </pied-pagination>
    <pied-pagination 
        layout="prev, pager, next" 
        total="20"
    >
    </pied-pagination>
    <pied-pagination 
        layout="prev, pager, next, total" 
        total="20"
    >
    </pied-pagination>
</template>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| ---------| :-----------------: | ----------: | -------------: |  ----------: | 
| layout      |     控件       |  prev,next,pager,total       |  pager          |  String | 
| total     |   总条数           |    0 - n    |  0       |  Number |
| pageSize      |  展示条数          |  0 - n       |  10          |  Number | 
| currentPageNum     |   页码值           |   1 - n |  1        |  Number |
| currentPageChange      |  改变当前页          |  ------       |  ------          |  Function | 

<style scoped>
    ul{
        margin:0;
    }
</style>