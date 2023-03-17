<template>
  <table class="pied-table" border="0" :class="[props.border ? 'pied-table-border' : '']" cellspacing="0" cellpadding="0">
    <thead>
      <tr class="pied-table-tr-header">
        <td v-for="column in props.columns" :align="column.center" :style="{width: column.width}" :key="column.key">
          {{column.title}}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr class="pied-table-tr-body" v-for="(item, index) in props.data" :key="index">
        <template v-for="column in props.columns" :key="column.key">
          <td v-if="!column.format" :align="column.center" :style="{width: column.width}">
            {{item[column.key]}}
          </td>
          <td :align="column.center" v-else>
            <slot name="body" :column="column" :record="item"></slot>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'piedTable'
}
</script>

<script setup>
import { defineProps, useSlots } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  border: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()
</script>

<style lang="scss" scoped>
.pied-table-border{
  border:1px solid #f0f0f0 !important;
  td{
    border:1px solid #f0f0f0 !important;
    padding: 0 4px;
    box-sizing: border-box;
  }
}
.pied-table{
  width:100%;
  border: 0 !important;
  .pied-table-tr-header{
    height:60px;
    background:#fafafa;
    border-bottom:1px solid #f0f0f0;
    font-size: 12px;
    font-weight: 700;
  }
  .pied-table-tr-body{
    height:60px;
    border-bottom:1px solid #f0f0f0;
    font-size: 12px;
    &:hover{
      background:#fafafa;
    }
  }
}
</style>