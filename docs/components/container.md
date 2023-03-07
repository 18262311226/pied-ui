## 布局

## 基本使用

<div class="box">
    <pied-container>
        <pied-header>header</pied-header>
        <pied-main>main</pied-main>
    </pied-container>
</div>

<div class="box">
    <pied-container>
        <pied-header>header</pied-header>
        <pied-main>main</pied-main>
        <pied-footer>footer</pied-footer>
    </pied-container>
</div>

<div class="box">
    <pied-container>
        <pied-header>header</pied-header>
        <pied-container flex="row">
           <pied-aside>aside</pied-aside>
           <pied-main>main</pied-main> 
        </pied-container>
    </pied-container>
</div>

<div class="box">
    <pied-container>
        <pied-header>header</pied-header>
        <pied-container flex="row">
           <pied-aside>aside</pied-aside>
           <pied-main>main</pied-main> 
        </pied-container>
        <pied-footer>footer</pied-footer>
    </pied-container>
</div>

<div class="box">
    <pied-container flex="row">
        <pied-aside width="300px">aside</pied-aside>
        <pied-container flex="column">
           <pied-header>header</pied-header>
           <pied-main>main</pied-main> 
        </pied-container>
    </pied-container>
</div>

<div class="box">
    <pied-container flex="row">
        <pied-aside width="300px">aside</pied-aside>
        <pied-container flex="column">
           <pied-header>header</pied-header>
           <pied-main>main</pied-main> 
           <pied-footer>footer</pied-footer>
        </pied-container>
    </pied-container>
</div>

::: details 代码示例
```js
<template>
    <div class="box">
        <pied-container>
            <pied-header>header</pied-header>
            <pied-main>main</pied-main>
        </pied-container>
    </div>
    <div class="box">
        <pied-container>
            <pied-header>header</pied-header>
            <pied-main>main</pied-main>
            <pied-footer>footer</pied-footer>
        </pied-container>
    </div>
    <div class="box">
        <pied-container>
            <pied-header>header</pied-header>
            <pied-container flex="row">
                <pied-aside>aside</pied-aside>
                <pied-main>main</pied-main> 
            </pied-container>
        </pied-container>
    </div>
    <div class="box">
        <pied-container>
            <pied-header>header</pied-header>
            <pied-container flex="row">
                <pied-aside>aside</pied-aside>
                <pied-main>main</pied-main> 
            </pied-container>
            <pied-footer>footer</pied-footer>
        </pied-container>
    </div>
    <div class="box">
        <pied-container flex="row">
            <pied-aside width="300px">aside</pied-aside>
            <pied-container flex="column">
                <pied-header>header</pied-header>
                <pied-main>main</pied-main> 
            </pied-container>
        </pied-container>
    </div>
    <div class="box">
        <pied-container flex="row">
            <pied-aside width="300px">aside</pied-aside>
            <pied-container flex="column">
            <pied-header>header</pied-header>
            <pied-main>main</pied-main> 
            <pied-footer>footer</pied-footer>
            </pied-container>
        </pied-container>
    </div>
</template>
```
:::

<script>

</script>

<style scoped>
.box{
    height:400px;
    margin-bottom:10px;
}
.pied-header{
  text-align: center;
  line-height: 60px;
  background:#aaa;
}
.pied-footer{
  text-align: center;
  line-height: 60px;
  background:#aaa;
}
.pied-main{
  align-items: center;
  justify-content: center;
  background:#333;
}
.pied-aside{
  align-items: center;
  justify-content: center;
  background:#ccc;
}
</style>