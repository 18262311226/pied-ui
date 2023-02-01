## 按钮

### 基础用法

<div class="margin">
    <pied-button type="primary">查询</pied-button>
    <pied-button type="info">搜索</pied-button>
    <pied-button type="warning">警告</pied-button>
    <pied-button type="error">危险</pied-button>
</div>
<div class="margin">
    <pied-button type="primary" round>查询</pied-button>
    <pied-button type="info" round>搜索</pied-button>
    <pied-button type="warning" round>警告</pied-button>
    <pied-button type="error" round>危险</pied-button>
</div>
<div class="margin">
    <pied-button type="primary" circle></pied-button>
    <pied-button type="info" circle></pied-button>
    <pied-button type="warning" circle></pied-button>
    <pied-button type="error" circle></pied-button>
</div>

::: details 代码示例
```js
<div class="margin">
    <pied-button type="primary">查询</pied-button>
    <pied-button type="info">搜索</pied-button>
    <pied-button type="warning">警告</pied-button>
    <pied-button type="error">危险</pied-button>
</div>
<div class="margin">
    <pied-button type="primary" size="mini">查询</pied-button>
    <pied-button type="info" size="small">搜索</pied-button>
    <pied-button type="warning" size="medium">警告</pied-button>
    <pied-button type="error" size="medium">警告</pied-button>
</div>
<div class="margin">
    <pied-button type="primary" round>查询</pied-button>
    <pied-button type="info" round>搜索</pied-button>
    <pied-button type="warning" round>警告</pied-button>
    <pied-button type="error" round>危险</pied-button>
</div>
<div class="margin">
    <pied-button type="primary" circle></pied-button>
    <pied-button type="info" circle></pied-button>
    <pied-button type="warning" circle></pied-button>
    <pied-button type="error" circle></pied-button>
</div>
```
:::

### 禁用状态

<div class="margin">
    <pied-button type="primary" disabled>查询</pied-button>
    <pied-button type="info" disabled>搜索</pied-button>
    <pied-button type="warning" disabled>警告</pied-button>
    <pied-button type="error" disabled>危险</pied-button>
</div>

::: details 代码示例
```js
<div class="margin">
    <pied-button type="primary" disabled>查询</pied-button>
    <pied-button type="info" disabled>搜索</pied-button>
    <pied-button type="warning" disabled>警告</pied-button>
    <pied-button type="error" disabled>危险</pied-button>
</div>
```
:::

### 按钮大小

<div class="margin">
    <pied-button type="primary" size="mini">查询</pied-button>
    <pied-button type="info" size="small">搜索</pied-button>
    <pied-button type="warning" size="medium">警告</pied-button>
    <pied-button type="error" size="medium">警告</pied-button>
</div>

::: details 代码示例
```js
<div class="margin">
    <pied-button type="primary" size="mini">查询</pied-button>
    <pied-button type="info" size="small">搜索</pied-button>
    <pied-button type="warning" size="medium">警告</pied-button>
    <pied-button type="error" size="medium">警告</pied-button>
</div>
```
:::

### 记载中

<div class="margin">
    <pied-button type="primary" :loading="true">查询</pied-button>
</div>

::: details 代码示例
```js
<div class="margin">
    <pied-button type="primary" loading="true">查询</pied-button>
</div>
```
:::

| 参数        |      说明      |  可选值 | 默认值 | 类型 | 
| ------------- | :-----------: | ----: | ------: |  ------: | 
| type      | 按钮类型 | primary,info,warning,error | primary |  String | 
| size      |   按钮大小    |   mini,small,mediue |  small |  String |
| loading |   加载    |    true,false | false |  Boolean |
| disbaled |   禁用    |    true,false | false |  Boolean |

<script></script>


<style>
.margin{
    margin-bottom:10px;
}
.pied-button{
    margin-right:20px;
}
</style>