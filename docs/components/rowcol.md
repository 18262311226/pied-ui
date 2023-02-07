## 行和列

### 基础用法

<div class="box">
    <pied-row>
        <pied-col class="aaa" :span="10"></pied-col>
        <pied-col class="ddd" :span="10"></pied-col>
        <pied-col class="aaa" :span="10"></pied-col>
        <pied-col class="ddd" :span="10"></pied-col>
        <pied-col class="aaa" :span="10"></pied-col>
        <pied-col class="ddd" :span="10"></pied-col>
        <pied-col class="aaa" :span="10"></pied-col>
        <pied-col class="ddd" :span="10"></pied-col>
        <pied-col class="aaa" :span="10"></pied-col>
        <pied-col class="ddd" :span="10"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="12"></pied-col>
        <pied-col class="ddd" :span="12"></pied-col>
        <pied-col class="aaa" :span="12"></pied-col>
        <pied-col class="ddd" :span="12"></pied-col>
        <pied-col class="aaa" :span="12"></pied-col>
        <pied-col class="ddd" :span="12"></pied-col>
        <pied-col class="aaa" :span="12"></pied-col>
        <pied-col class="ddd" :span="12"></pied-col>
        <pied-col class="aaa" :span="12"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="13"></pied-col>
        <pied-col class="ddd" :span="13"></pied-col>
        <pied-col class="aaa" :span="13"></pied-col>
        <pied-col class="ddd" :span="13"></pied-col>
        <pied-col class="aaa" :span="13"></pied-col>
        <pied-col class="ddd" :span="13"></pied-col>
        <pied-col class="aaa" :span="13"></pied-col>
        <pied-col class="ddd" :span="13"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="15"></pied-col>
        <pied-col class="ddd" :span="15"></pied-col>
        <pied-col class="aaa" :span="15"></pied-col>
        <pied-col class="ddd" :span="15"></pied-col>
        <pied-col class="aaa" :span="15"></pied-col>
        <pied-col class="ddd" :span="15"></pied-col>
        <pied-col class="aaa" :span="15"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="17"></pied-col>
        <pied-col class="ddd" :span="17"></pied-col>
        <pied-col class="aaa" :span="17"></pied-col>
        <pied-col class="ddd" :span="17"></pied-col>
        <pied-col class="aaa" :span="17"></pied-col>
        <pied-col class="ddd" :span="17"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="20"></pied-col>
        <pied-col class="ddd" :span="20"></pied-col>
        <pied-col class="aaa" :span="20"></pied-col>
        <pied-col class="ddd" :span="20"></pied-col>
        <pied-col class="aaa" :span="20"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="25"></pied-col>
        <pied-col class="ddd" :span="25"></pied-col>
        <pied-col class="aaa" :span="25"></pied-col>
        <pied-col class="ddd" :span="25"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="34"></pied-col>
        <pied-col class="ddd" :span="34"></pied-col>
        <pied-col class="aaa" :span="34"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="50"></pied-col>
        <pied-col class="ddd" :span="50"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" :span="100"></pied-col>
    </pied-row>
</div>

::: details 代码示例
```js
<template>
    <div class="box">
    <pied-row>
        <pied-col class="aaa" span="10"></pied-col>
        <pied-col class="ddd" span="10"></pied-col>
        <pied-col class="aaa" span="10"></pied-col>
        <pied-col class="ddd" span="10"></pied-col>
        <pied-col class="aaa" span="10"></pied-col>
        <pied-col class="ddd" span="10"></pied-col>
        <pied-col class="aaa" span="10"></pied-col>
        <pied-col class="ddd" span="10"></pied-col>
        <pied-col class="aaa" span="10"></pied-col>
        <pied-col class="ddd" span="10"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="12"></pied-col>
        <pied-col class="ddd" span="12"></pied-col>
        <pied-col class="aaa" span="12"></pied-col>
        <pied-col class="ddd" span="12"></pied-col>
        <pied-col class="aaa" span="12"></pied-col>
        <pied-col class="ddd" span="12"></pied-col>
        <pied-col class="aaa" span="12"></pied-col>
        <pied-col class="ddd" span="12"></pied-col>
        <pied-col class="aaa" span="12"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="13"></pied-col>
        <pied-col class="ddd" span="13"></pied-col>
        <pied-col class="aaa" span="13"></pied-col>
        <pied-col class="ddd" span="13"></pied-col>
        <pied-col class="aaa" span="13"></pied-col>
        <pied-col class="ddd" span="13"></pied-col>
        <pied-col class="aaa" span="13"></pied-col>
        <pied-col class="ddd" span="13"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="15"></pied-col>
        <pied-col class="ddd" span="15"></pied-col>
        <pied-col class="aaa" span="15"></pied-col>
        <pied-col class="ddd" span="15"></pied-col>
        <pied-col class="aaa" span="15"></pied-col>
        <pied-col class="ddd" span="15"></pied-col>
        <pied-col class="aaa" span="15"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="17"></pied-col>
        <pied-col class="ddd" span="17"></pied-col>
        <pied-col class="aaa" span="17"></pied-col>
        <pied-col class="ddd" span="17"></pied-col>
        <pied-col class="aaa" span="17"></pied-col>
        <pied-col class="ddd" span="17"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="20"></pied-col>
        <pied-col class="ddd" span="20"></pied-col>
        <pied-col class="aaa" span="20"></pied-col>
        <pied-col class="ddd" span="20"></pied-col>
        <pied-col class="aaa" span="20"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="25"></pied-col>
        <pied-col class="ddd" span="25"></pied-col>
        <pied-col class="aaa" span="25"></pied-col>
        <pied-col class="ddd" span="25"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="34"></pied-col>
        <pied-col class="ddd" span="34"></pied-col>
        <pied-col class="aaa" span="34"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="50"></pied-col>
        <pied-col class="ddd" span="50"></pied-col>
    </pied-row>
    <pied-row>
        <pied-col class="aaa" span="100"></pied-col>
    </pied-row>
</div>
</temlate>

<style>
.box{
    width:100%;
    min-height:400px;
}
.pied-col{
    height:40px;
    background:#333;
    border-radius: 5px;
}
.pied-row{
    margin-bottom:10px;
}
.ddd{
    background:#ddd;
}
.aaa{
    background:#aaa;
}
</style>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| span      |  占用宽度          | 百分比       | 100         |  Number | 

<script>

</script>

<style>
.box{
    width:100%;
    min-height:400px;
}
.pied-col{
    height:40px;
    background:#333;
    border-radius: 5px;
}
.pied-row{
    margin-bottom:10px;
}
.ddd{
    background:#ddd;
}
.aaa{
    background:#aaa;
}
</style>
