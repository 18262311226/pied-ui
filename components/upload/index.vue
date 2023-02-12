<template>
<div class="pied-upload">
  <div class="upload-source">
    <input type="file" ref="file" @change="changeFile">
  </div>
  <pied-button size="medium" @click="open">
    上传文件
  </pied-button>
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

const changeFile = (value) => {
  console.log(value.target.files)
}
</script>

<style lang="scss" scoped>
.pied-upload{
  width:100%;
  .upload-source{
    display: none;
  }
}

.fade-enter-from,.fade-leave-to{
  transform: translateX(-100%);
}

.fade-enter-active,.fade-leave-active {
  transition: all 2s;
}
</style>