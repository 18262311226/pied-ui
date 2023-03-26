<template>
  <div>
      <pied-button @click="handel">切换</pied-button>
    <pied-menu theme="sun" width="300px" v-model:selectedKeys="current" :mode="mode">
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
  </div>
  
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { confirm } from '../components/index'
const current = ref('mail')
const mode = ref('inline')

const handel = () => {
  if(mode.value === 'inline'){
    mode.value = 'horizontal'
  }else {
    mode.value = 'inline'
  }
  
}

</script>

<style lang="scss" scoped>
.bg{
  width:1000px;
  height:100%;
  padding:20px;
}
.card{
  width:400px;
  background:rgb(8, 8, 21, 0.8);
  box-shadow: 2px 2px 2px 2px skyblue;
  border-radius: 10px;
}
.pied-card{
  margin-bottom:20px;
}
.header{
  height:40px;
  display: flex;
  align-items: center;
  span{
    font-size: 30px; 
    margin-right:10px;
  }
}
</style>
