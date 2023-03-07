<template>
  <div class="bg">
    <pied-card themeColor="rgba(255,255,255,0.2)">
      <template #header>
        <div class="header">
          <span class="pied-icon-file-image1"></span>
          <div class="title">我的相册</div>
        </div>
      </template>
      <div class="card">
        <pied-select :data="countryList" v-model="form.country"></pied-select>
      </div>
    </pied-card>
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

const form = reactive({
  username: '',
  password: '',
  like: [],
  country: ''
})
const formRef = ref(null)

const rules = reactive({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ]
})
const checkList = ref([
  {
    label: '唱歌',
    value: 0
  },
  {
    label: '跳舞',
    value: 1
  },
  {
    label: 'rap',
    value: 2
  },
  {
    label: '篮球',
    value: 3
  }
])
const countryList = ref([
  {
    label: '中国',
    value: 0
  },
  {
    label: '日本',
    value: 1
  },
  {
    label: '美国',
    value: 2
  },
  {
    label: '俄罗斯',
    value: 3
  }
])
const handel = () => {
  formRef.value.validate((valid) => {
    if(valid){
      alert('注册成功')
    }else {
      alert('数据填写不完整')
    }
  })
}

const reset = () => {
  formRef.value.resetFields()
}

</script>

<style lang="scss" scoped>
.bg{
  width:100%;
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
