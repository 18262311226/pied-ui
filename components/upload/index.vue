<template>
<div class="pied-upload">
  <div class="upload-source">
    <input type="file" ref="file" @change="changeFile">
  </div>
  <div class="upload-button" @click="open" @mouseover="onMouseover" @mouseleave="onMouseleave">
    上传文件
  </div>
  <transition name="fade">
    <div v-if="bgShow" class="button-bg"></div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'piedUpload'
}
</script>

<script setup>
import { ref } from 'vue'
const file = ref('')
const bgShow = ref(false)
const open = () => {
  file.value.dispatchEvent(new MouseEvent('click')) 
}

const onMouseover = () => {
  bgShow.value = true
}

const onMouseleave = () => {
  bgShow.value = false
}

const changeFile = (value) => {
  console.log(value.target.files)
}
</script>

<style lang="scss" scoped>
.pied-upload{
  width:100%;
  position: relative;
  .upload-source{
    display: none;
  }
  .upload-button{
    width:100%;
    height:50px;
    border:2px solid purple;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    background: transparent;
  }
  .button-bg{
    width:99%;
    height:48px;
    position: absolute;
    // left:0;
    top:0;
    z-index:-1;
    background:purple;
  }
}

.fade-enter-from,.fade-leave-to{
  transform: translateX(-100%);
}

.fade-enter-active,.fade-leave-active {
  transition: all 2s;
}
</style>