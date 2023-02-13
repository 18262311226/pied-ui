## 选择器

### 基础用法

<pied-select v-model="inputValue" :data="data"></pied-select>

::: details 代码示例
```js
<template>
    <pied-select v-model="inputValue" data="data"></pied-select>
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
const data = ref([
    {
        value: 1,
        label: 'option1'
    },
    {
        value: 2,
        label: 'option2'
    },
    {
        value: 3,
        label: 'option3'
    },
    {
        value: 4,
        label: 'option4'
    },
    {
        value: 5,
        label: 'option5'
    },
    {
        value: 6,
        label: 'option6'
    },
    {
        value: 7,
        label: 'option7'
    },
    {
        value: 8,
        label: 'option8'
    }
])
</script>
```
:::

### 模糊查询

<pied-select v-model="inputValue1" filterable :data="data"></pied-select>

::: details 代码示例
```js
<template>
    <pied-select v-model="inputValue" filterable data="data"></pied-select>
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
const data = ref([
    {
        value: 1,
        label: 'option1'
    },
    {
        value: 2,
        label: 'option2'
    },
    {
        value: 3,
        label: 'option3'
    },
    {
        value: 4,
        label: 'option4'
    },
    {
        value: 5,
        label: 'option5'
    },
    {
        value: 6,
        label: 'option6'
    },
    {
        value: 7,
        label: 'option7'
    },
    {
        value: 8,
        label: 'option8'
    }
])
</script>
```
:::

### 自定义内容

<pied-select v-model="inputValue2" filterable :data="data">
    <template v-slot="scope">
        <div class="flex"><p>{{scope.data.value}}</p><p>{{scope.data.label}}</p></div>
    </template>
</pied-select>

::: details 代码示例
```js
<template>
    <pied-select v-model="inputValue" filterable data="data">
        <template v-slot="scope">
            <div class="flex"><p>{{scope.data.value}}</p><p>{{scope.data.label}}</p></div>
        </template>
    </pied-select>
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
const data = ref([
    {
        value: 1,
        label: 'option1'
    },
    {
        value: 2,
        label: 'option2'
    },
    {
        value: 3,
        label: 'option3'
    },
    {
        value: 4,
        label: 'option4'
    },
    {
        value: 5,
        label: 'option5'
    },
    {
        value: 6,
        label: 'option6'
    },
    {
        value: 7,
        label: 'option7'
    },
    {
        value: 8,
        label: 'option8'
    }
])
</script>

<style>
.flex{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| v-model      |  绑定值          | -----       | -----          |  String | 
| type         |   输入类型    |    -----       | -----        |  text,password |
| disabled     |   禁用           |   false,true |  false        |  Boolean |
| label        |   名称         |    -----     | -----         | String  |
| center         |   居中展示    |    -----       | -----        |  Boolean |

<script>
export default {
    data(){
        return {
            inputValue: '',
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputValue4: '',
            inputValue5: '',
            data: [
                {
                    value: 1,
                    label: 'option1'
                },
                {
                    value: 2,
                    label: 'option2'
                },
                {
                    value: 3,
                    label: 'option3'
                },
                {
                    value: 4,
                    label: 'option4'
                },
                {
                    value: 5,
                    label: 'option5'
                },
                {
                    value: 6,
                    label: 'option6'
                },
                {
                    value: 7,
                    label: 'option7'
                },
                {
                    value: 8,
                    label: 'option8'
                }
            ]
        }
    }
}

</script>

<style scoped>
.flex{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>