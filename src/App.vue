<script setup>
</script>

<template>
  <div class="iconbox flex">
    <pied-upload></pied-upload>
    <pied-button @click="handel">点击</pied-button>
  </div>
</template>

<script setup>
import { icons} from '../utils/icons'
import { ref } from 'vue'
import { confirm } from '../components/index'
console.log(icons)
const iconlist =icons.glyphs
const handel = () => {
  confirm('标题', '我是一个内容', '取消', '确定')
}
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-col{
  margin-right:10px;
}
.iconbox{
  width:500px;
  
}
.icon{
  width:50px;
  height:50px;
  text-align: center;
  line-height: 50px;

}
.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
