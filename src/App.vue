<template>
  <div class="bg">
    <pied-table 
      :data="data"
      :columns="columns"
      border
      :rowSelectChange="rowSelectChange"
    >
      <template #body="{column, record}">
        <template v-if="column.key === 'gender'"> 
          <span v-if="record.gender == 0">男</span>
          <span v-if="record.gender == 1">女</span>
        </template>
        <template v-else-if="column.key === 'action'">
          <pied-button size="mini" @click="handel(record)">编辑</pied-button>
          <pied-button size="mini" type="error">删除</pied-button>
        </template>
      </template>
    </pied-table>
    <div style="float:right;margin-top:20px;">
      <pied-pagination :total="200" layout="pager, prev, next, total"></pied-pagination>
    </div>
  </div>
  <!-- <div class="card">
    <pied-form :model="form" ref="formRef" :rules="rules">
      <pied-form-item prop="username">
        <pied-input v-model="form.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password">
        <pied-input v-model="form.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form.like" :data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="form.country" :data="countryList"></pied-select>
      </pied-form-item>
      <pied-form-item>
        <div style="text-align:center">
          <pied-button type="error" @click="reset">重置</pied-button>
          <pied-button @click="handel">提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
  </div> -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { confirm } from '../components/index'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi' ,
    age: 18,
    gender: 0,
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu' ,
    age: 17,
    gender: 0,
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu' ,
    age: 20,
    gender: 0,
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei' ,
    age: 21,
    gender: 0,
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi' ,
    age: 18,
    gender: 1,
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
  {
    title: '',
    key: '',
    width: '50px',
    select: true,
    center: 'center'
  },
  {
    title: '用户',
    key: 'userName',
    dataIndex: 'userName',
    center: 'center',
    width: '80px'
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    center: 'center',
    width: '50px'
  },
  {
    title: '性别',
    key: 'gender',
    dataIndex: 'gender',
    center: 'center',
    width: '50px',
    format: true
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address',
    center: 'center',
    width: '150px'
  },
  {
    title: '操作',
    key: 'action',
    center: 'center',
    format: true
  }
])


const rowSelectChange = (arr) => {
  console.log(arr)
}
// const form = reactive({
//   username: '',
//   password: '',
//   like: [],
//   country: ''
// })
// const formRef = ref(null)

// const rules = reactive({
//   username: [
//     {required: true, message: '请输入用户名', trigger: 'blur'}
//   ],
//   password: [
//     {required: true, message: '请输入密码', trigger: 'blur'}
//   ]
// })
// const checkList = ref([
//   {
//     label: '唱歌',
//     value: 0
//   },
//   {
//     label: '跳舞',
//     value: 1
//   },
//   {
//     label: 'rap',
//     value: 2
//   },
//   {
//     label: '篮球',
//     value: 3
//   }
// ])
// const countryList = ref([
//   {
//     label: '中国',
//     value: 0
//   },
//   {
//     label: '日本',
//     value: 1
//   },
//   {
//     label: '美国',
//     value: 2
//   },
//   {
//     label: '俄罗斯',
//     value: 3
//   }
// ])
const handel = (record) => {
  console.log(record)
}

// const reset = () => {
//   formRef.value.resetFields()
// }

</script>

<style lang="scss" scoped>
.bg{
  width:1000px;
  height:100%;
  padding:20px;
}
.card{
  width:400px;
  background:rgb(8, 8, 21, 0.8);
  box-shadow: 2px 2px 2px 2px skyblue;
  border-radius: 10px;
}
.pied-card{
  margin-bottom:20px;
}
.header{
  height:40px;
  display: flex;
  align-items: center;
  span{
    font-size: 30px; 
    margin-right:10px;
  }
}
</style>
