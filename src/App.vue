<template>
  <div class="card">
    <pied-form :model="form">
      <pied-form-item prop="username">
        <pied-input v-model="form.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password" >
        <pied-input v-model="form.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form.like" :data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="country" :data="countryList"></pied-select>
      </pied-form-item>
      <pied-form-item>
        <div style="text-align:center">
          <pied-button type="error">重置</pied-button>
          <pied-button>提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const form = reactive({
  username: '',
  password: '',
  like: [],
  country: ''
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
</script>

<style scoped>
.margin{
  margin-bottom:10px;
}
.pied-col{
  margin-right:10px;
}
.iconbox{
  width:500px;
  
}
.icon{
  width:50px;
  height:50px;
  text-align: center;
  line-height: 50px;

}
.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.card{
  width:400px;
  /* box-shadow: 2px 2px 3px 4px #ddd; */
  /* background:linear-gradient(90deg, #333, #ccc) transparent; */
  background:rgba(1, 1, 1, .6);
  margin:100px auto;
  border-radius: 10px;
}
</style>
