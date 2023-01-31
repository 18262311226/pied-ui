<script setup>
</script>

<template>
  <div class="margin">
    <pied-radio v-model="radio" :label="true">option1</pied-radio>
    <pied-radio v-model="radio" :label="false" :disabled="false">option2dwqedwq</pied-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref(false)
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-radio{
  margin-right:10px;
}
</style>
