## 表单

## 基础使用

<div class="card">
    <pied-form :model="form">
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
          <pied-button type="error">重置</pied-button>
          <pied-button>提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
</div>

::: details 代码示例
```js
<template>
<div class="card">
    <pied-form model="form">
      <pied-form-item prop="username">
        <pied-input v-model="form.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password">
        <pied-input v-model="form.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form.like" data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="form.country" data="countryList"></pied-select>
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
import { ref, reactive, onMounted, reactive } from 'vue'
const form = reactive({
  username: '',
  password: '',
  like: [],
  country: ''
})
</script>
```
:::

## 表单校验

<div class="card">
    <pied-form :model="form1" ref="formRef" :rules="rules">
      <pied-form-item prop="username">
        <pied-input v-model="form1.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password">
        <pied-input v-model="form1.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form1.like" :data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="form1.country" :data="countryList"></pied-select>
      </pied-form-item>
      <pied-form-item>
        <div style="text-align:center">
          <pied-button @click="handel">提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
</div>

::: details 代码示例
```js
<template>
<div class="card">
    <pied-form model="form" ref="formRef" rules="rules">
      <pied-form-item prop="username">
        <pied-input v-model="form.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password">
        <pied-input v-model="form.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form.like" data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="form.country" data="countryList"></pied-select>
      </pied-form-item>
      <pied-form-item>
        <div style="text-align:center">
          <pied-button click="handel">提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
</div>
</template>

<script setup>
import { ref, reactive, onMounted, reactive } from 'vue'
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
</script>
```
:::

## 表单重置

<div class="card">
    <pied-form :model="form2" ref="formRef1" :rules="rules">
      <pied-form-item prop="username">
        <pied-input v-model="form2.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password">
        <pied-input v-model="form2.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form2.like" :data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="form2.country" :data="countryList"></pied-select>
      </pied-form-item>
      <pied-form-item>
        <div style="text-align:center">
            <pied-button type="error" @click="reset">重置</pied-button>
            <pied-button @click="handel1">提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
</div>

::: details 代码示例
```js
<template>
<div class="card">
    <pied-form model="form" ref="formRef" rules="rules">
      <pied-form-item prop="username">
        <pied-input v-model="form.username" label="username"></pied-input>
      </pied-form-item>
      <pied-form-item prop="password">
        <pied-input v-model="form.password" label="password" type="password"></pied-input>
      </pied-form-item>
      <pied-form-item label="兴趣爱好" prop="like" label-width="100px" bottom="20px">
        <pied-checkbox-group v-model="form.like" data="checkList">
        </pied-checkbox-group>
      </pied-form-item>
      <pied-form-item label="国籍" prop="country" label-width="100px" bottom="20px">
        <pied-select v-model="form.country" data="countryList"></pied-select>
      </pied-form-item>
      <pied-form-item>
        <div style="text-align:center">
            <pied-button type="error" click="reset">重置</pied-button>
            <pied-button click="handel">提交</pied-button>
        </div>
      </pied-form-item>
    </pied-form>
</div>
</template>

<script setup>
import { ref, reactive, onMounted, reactive } from 'vue'
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
```
:::


| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| model      |  绑定数据         | Object    | -----          |  Object | 
| rules     |   校验规则           |   Object |  ------        |  Object |
| prop        |   校验字段         |    绑定数据中的字段名     | -----         | String  |
| labelWidth          |   label宽度 |    px | 0px          |  String               |
| label         |   提示文字    |    -----      | -----        |  String |
| validate         |   校验表单    |    -----       | -----        |  Function |
| resetFields         |   重置表单    |    -----       | -----        |  Function |

<script>
export default {
    data(){
        return {
            form: {
                username: '',
                password: '',
                like: [],
                country: ''
            },
            form1: {
                username: '',
                password: '',
                like: [],
                country: ''
            },
            form2: {
                username: '',
                password: '',
                like: [],
                country: ''
            },
            checkList:[
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
            ],
            countryList:[
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
            ],
            rules: {
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        handel(){
            this.$refs.formRef.validate((valid) => {
                if(valid){
                alert('注册成功')
                }else {
                alert('数据填写不完整')
                }
            })
        },

        handel1(){
            this.$refs.formRef1.validate((valid) => {
                if(valid){
                alert('注册成功')
                }else {
                alert('数据填写不完整')
                }
            })
        },

        reset(){
            this.$refs.formRef.resetFields()
        }
    }
}
</script>

<style scoped>
.card{
    width:400px;
    background:rgb(8, 8, 21, 0.8);
    box-shadow: 2px 2px 2px 2px skyblue;
    margin:100px auto;
    border-radius: 10px;
}
</style>