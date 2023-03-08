<template>
  <div class="pied-pagination">
    <ul class="page-box">
      <li class="pagebtn pageLeft" :class="[ props.background ? 'background' : '']" >
        <span class="pied-icon-left" @click="pageChange('prev')"></span>
      </li>
      <div 
        class="pagebtn pager" 
        :class="[ pageNum === item ? 'active' : '' , props.background ? 'background' : '']" 
        v-for="(item) in pages" 
        :key="item" 
        @click="pageChange(item)"
      >{{item}}</div>
      <li class="pagebtn pageRight" :class="[ props.background ? 'background' : '']" >
        <span class="pied-icon-right"  @click="pageChange('next')"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'piedPagination'
}
</script>

<script setup>
import { computed, defineProps, watch, defineEmits, ref } from 'vue'
const emits = defineEmits(['currentPageChange'])
const props = defineProps({
  currentPageNum: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  background: {
    type: Boolean,
    default: false
  }
})

const pageNum = ref(0)
pageNum.value = props.currentPageNum

watch(() => props.currentPageNum, (newValue, oldValue) => {
  pageNum.value = newValue
}, {
  immediate: true
})

let pages = computed(() => {
  let { pageSize, total } = props
 if ( pageSize >= total ) return 1
 let pageNo = total / pageSize
 total % pageSize ? pageNo += 1 : pageNo
 if (pageNo < 10) return pageNo
 if (pageNum.value <= 4) {
    return [1, 2, 3, 4, 5, '>>', pageNo]
 }else if (pageNum.value > pageNo - 4) {
    return [1, '<<', pageNo-4, pageNo-3, pageNo-2, pageNo - 1, pageNo]
 }else {
    return [1, '<<', pageNum.value - 2, pageNum.value - 1, pageNum.value, pageNum.value + 1, pageNum.value + 2, '>>', pageNo]
 }
})

const pageChange = (pageNo) => {
  if(pageNo === '<<') {
    if((pageNum.value <= 5 && pageNum.value > pages.value[pages.value.length - 1] - 5)){
      pageNum.value -= 1
    }else {
      pageNum.value -= 4
    }
  }else if (pageNo === '>>') {
    if((pageNum.value <= pageNum.value > pages.value[pages.value.length - 1] - 5)){
      pageNum.value += 1
    }else {
      pageNum.value += 4
    }
  }else if (pageNo === 'prev' && pageNum.value > 1) {
    pageNum.value -= 1
    emits('currentPageChange', pageNum.value)
  }else if (pageNo === 'next' && pageNum.value < pages.value[pages.value.length - 1]) {
    pageNum.value += 1
    emits('currentPageChange', pageNum.value)
  }else if (pageNo !== 'prev' && pageNo !== 'next') {
    pageNum.value = pageNo
    emits('currentPageChange', pageNum.value)
  }
}
</script>

<style lang="scss" scoped>
.pied-pagination{
  display: inline-block;
  .page-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width:100px;
    .pagebtn{
      width:30px;
      height:30px;
      margin-right:10px;
      border-radius: 2px;
      // background: #f4f4f5;
      font-family: '宋体';
      display: flex;
      justify-content: center;
      align-items: center;
      // color:#333;
      &:hover{
        color: skyblue;
      }
    }
    .pageLeft{
      margin-right:10px;
      cursor: pointer;
      span{
        font-size: 16px;
      }
    }
    .pageRight{
      cursor: pointer;
      span{
        font-size: 16px;
      }
    }
    .pager{
      cursor: pointer;
      font-size: 16px;
    }
  }
}
.active{ 
  color:skyblue;
}
.background{
  background:#f4f4f5;
  border-radius: 2px;
}
</style>