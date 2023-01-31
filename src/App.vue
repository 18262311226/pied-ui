<script setup>
</script>

<template>
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
  <div class="margin">
    <pied-button type="primary" disabled>查询</pied-button>
    <pied-button type="info" disabled>info</pied-button>
    <pied-button type="warning" disabled>warning</pied-button>
    <pied-button type="error" disabled>error</pied-button>
  </div>
  <div class="margin">
    <pied-button type="primary" :loading="true">查询</pied-button>
</div>
</template>

<script setup>
  const handel = () => {
    console.log(1111)
  }
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
</style>
