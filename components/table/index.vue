<template>
  <table class="pied-table" border="0" :class="[props.border ? 'pied-table-border' : '']" cellspacing="0" cellpadding="0">
    <thead>
      <tr class="pied-table-tr-header">
        <template v-for="column in props.columns" :key="column.key">
          <td v-if="!column.select" :align="column.center" :style="{width: column.width}">
            {{column.title}} 
            <span v-show="column.sort">
              <span class="pied-icon-rise" v-if="column.sortType === 'up'" @click="sortChange('up',column)"></span>
              <span class="pied-icon-fall" v-else-if="column.sortType === 'down'" @click="sortChange('down', column)"></span>
              <span class="pied-icon-reload" v-else-if="column.sortType !== 'up' && column.sortType !== 'down'" @click="sortChange('normal', column)"></span>
            </span>
          </td>
          <td :align="column.center" :style="{width: column.width}" v-else>
            <pied-checkbox v-model="chooseAll" @change="selectAll"></pied-checkbox>
          </td>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr class="pied-table-tr-body" v-for="(item, index) in data" :key="index">
        <template v-for="column in props.columns" :key="column.key">
          <td v-if="column.select" :align="column.center" :style="{width: column.width}">
            <pied-checkbox v-model="item.choose" @change="selectRow"></pied-checkbox>
          </td>
          <td v-else-if="!column.format" :align="column.center" :style="{width: column.width}">
            {{item[column.key]}}
          </td>
          <td v-else="column.format" :align="column.center">
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
import { ref, defineProps, computed, watch } from 'vue'
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
  },
  rowSelectChange: {
    type: Function,
    default: () => {}
  }
})
const data = ref([])
const sortType = ref('normal')
const sortData = ref([])

data.value = props.data.map(item => {
  return {
    ...item,
    choose: false
  }
})

sortData.value = JSON.parse(JSON.stringify(data.value))

const chooseAll = computed(() => {
  return data.value.every(item => item.choose)
})

const selectAll = (value) => {
  let rows = []
  let dataV = JSON.parse(JSON.stringify(data.value))
  value && dataV.forEach(item => {
    item.choose = true
    let it = JSON.parse(JSON.stringify(item))
    delete it.choose
    rows.push(it)
  })
  !value && dataV.forEach(item => {
    item.choose = false
  })
  data.value = dataV
  props.rowSelectChange && props.rowSelectChange(rows)
}

const selectRow = () => {
  let rows = []
  let dataV = JSON.parse(JSON.stringify(data.value))
  dataV.forEach(item => {
    let it = JSON.parse(JSON.stringify(item))
    if(it.choose){
      delete it.choose
      rows.push(it)
    }
  })
  data.value = dataV
  props.rowSelectChange && props.rowSelectChange(rows)
}

const sortChange = (type, column) => {
  switch(type){
    case 'up':
      column.sortType = 'down'
      sortDown(column.key)
    break;
    case 'down':
      column.sortType = 'normal'
      sortNormal(column.key)
    break;
    case 'normal':
      column.sortType = 'up'
      sortUp(column.key)
    break;
  }
}

const sortUp = (key) => {
  data.value.sort(sortBy(key, true))
}

const sortDown = (key) => {
  data.value.sort(sortBy(key, false))
}

const sortNormal = (key) => {
  data.value = JSON.parse(JSON.stringify(sortData.value))
}
const sortBy = (field, type) => {
    //根据传过来的字段进行排序
    return (x, y) => {
      if(type){
        return x[field] - y[field]
      }else {
        return y[field] - x[field]
      }
    }
}
</script>

<style lang="scss" scoped>
.pied-table-border{
  border:1px solid #f0f0f0;
  td{
    border:1px solid #f0f0f0;
    padding: 0 4px;
    box-sizing: border-box;
  }
}

.pied-table{
  width:100%;
  border: 0;
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