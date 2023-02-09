<template>
  <div>{{ files }}</div>
  <button type="button" @click="open">Choose file</button>
</template>

<script>
export default {
  name: 'piedUpload'
}
</script>

<script setup>
import { useFileDialog } from '@vueuse/core'

const { files, open, reset } = useFileDialog()

console.log(files)
</script>

<style lang="scss" scoped>

</style>