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

<style>
    ul{
        margin:0;
    }
</style>