<template>
  <div class="pied-card" :class="classes" :style="{background: props.themeColor}">
    <div class="card-title">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'piedCard'
}
</script>

<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
  shadow: {
    type: String,
    default: 'always'
  },
  themeColor: {
    type: String,
    default: '#fff'
  }
})

let classes = computed(() => {
  return [
    `pied-card-${props.shadow}`
  ]
})
</script>

<style lang="scss" scoped>
.pied-card{
  width:100%;
  padding:20px;
  box-sizing: border-box;
  border-radius: 10px;
  border:1px solid #aaa;
  transition: 0.5s;
  .card-title{
    width:100%;
    border-bottom:1px solid #ddd;
    margin-bottom:5px;
  }
}
.pied-card-always{
  box-shadow:0px 2px 12px 1.5px #aaa;
}
.pied-card-never{
  box-shadow: none;
}
.pied-card-hover{
  &:hover{
    box-shadow:0px 2px 12px 1.5px #aaa;
  }
}
</style>