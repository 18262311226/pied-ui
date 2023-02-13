<script setup>
</script>

<template>
  <div class="iconbox flex">
    <pied-upload></pied-upload>
    <!-- <div v-for="(item, index) in iconlist" :key="index" :class="[`pied-icon-${item.font_class}`, 'icon']"></div> -->
  </div>
</template>

<script setup>
import { icons} from '../utils/icons'
import { ref } from 'vue'
console.log(icons)
const iconlist =icons.glyphs

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
