## 表格

## 基本使用

<pied-table 
    :data="data"
    :columns="columns"
>
</pied-table>

::: details 代码示例
```js
<template>
    <pied-table 
        data="data" 
        columns="columns"
    >
    </pied-table>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi',
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu',
    age: 17,
    high: '187',
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu',
    age: 20,
    high: '187',
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei',
    age: 21,
    high: '187',
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi',
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
  {
    title: '用户',
    key: 'userName',
    dataIndex: 'userName',
    center: 'center',
    width: '150px'
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    center: 'center',
    width: '150px'
  },
  {
    title: '身高',
    key: 'high',
    dataIndex: 'high',
    center: 'center',
    width: '150px'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address',
    center: 'center',
    width: '150px'
  }
])
</script>
```
:::

## 表格边框

<pied-table 
    :data="data"
    :columns="columns"
    border
>
</pied-table>

::: details 代码示例
```js
<template>
    <pied-table 
        data="data" 
        columns="columns"
    >
    </pied-table>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi' ,
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu' ,
    age: 17,
    high: '187',
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu' ,
    age: 20,
    high: '187',
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei' ,
    age: 21,
    high: '187',
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi' ,
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
  {
    title: '用户',
    key: 'userName',
    dataIndex: 'userName',
    center: 'center',
    width: '150px'
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    center: 'center',
    width: '150px'
  },
  {
    title: '身高',
    key: 'high',
    dataIndex: 'high',
    center: 'center',
    width: '150px'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address',
    center: 'center',
    width: '150px'
  }
])
</script>
```
:::

## 表格居中/居右/居左

<pied-table 
    :data="data"
    :columns="columns1"
    border
>
</pied-table>

::: details 代码示例
```js
<template>
    <pied-table 
        data="data" 
        columns="columns"
    >
    </pied-table>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi',
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu' ,
    age: 17,
    high: '187',
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu' ,
    age: 20,
    high: '187',
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei' ,
    age: 21,
    high: '187',
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi' ,
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
  {
    title: '用户',
    key: 'userName',
    dataIndex: 'userName',
    center: 'left',
    width: '150px'
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    center: 'left',
    width: '150px'
  },
  {
    title: '身高',
    key: 'high',
    dataIndex: 'high',
    center: 'right',
    width: '150px'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address',
    center: 'center',
    width: '150px'
  }
])
</script>
```
:::

## 表格数据自定义

<pied-table 
    :data="data"
    :columns="columns2"
    border
>
    <template #body="{column, record}">
        <template v-if="column.key === 'action'">
          <pied-button size="mini">编辑</pied-button>
          <pied-button size="mini" type="error">删除</pied-button>
        </template>
    </template>
</pied-table>

::: details 代码示例
```js
<template>
    <pied-table 
        data="data" 
        columns="columns"
    >
        <template #body="{column, record}">
            <template v-if="column.key === 'action'">
            <pied-button size="mini">编辑</pied-button>
            <pied-button size="mini" type="error">删除</pied-button>
            </template>
        </template>
    </pied-table>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi',
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu' ,
    age: 17,
    high: '187',
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu' ,
    age: 20,
    high: '187',
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei' ,
    age: 21,
    high: '187',
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi' ,
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
  {
    title: '用户',
    key: 'userName',
    dataIndex: 'userName',
    center: 'left',
    width: '80px'
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    center: 'left',
    width: '50px'
  },
  {
    title: '身高',
    key: 'high',
    dataIndex: 'high',
    center: 'right',
    width: '50px'
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
    dataIndex: 'action',
    center: 'center',
    width: '250px',
    format: true
  }
])
</script>
```
:::

## 表格多选

<pied-table 
    :data="data"
    :columns="columns3"
    border
    :rowSelectChange="rowSelectChange"
>
    <template #body="{column, record}">
        <template v-if="column.key === 'action'">
          <pied-button size="mini">编辑</pied-button>
          <pied-button size="mini" type="error">删除</pied-button>
        </template>
    </template>
</pied-table>

::: details 代码示例
```js
<template>
    <pied-table 
        data="data" 
        columns="columns"
        border
        rowSelectChange="rowSelectChange"
    >
        <template #body="{column, record}">
            <template v-if="column.key === 'action'">
            <pied-button size="mini">编辑</pied-button>
            <pied-button size="mini" type="error">删除</pied-button>
            </template>
        </template>
    </pied-table>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi',
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu' ,
    age: 17,
    high: '187',
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu' ,
    age: 20,
    high: '187',
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei' ,
    age: 21,
    high: '187',
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi' ,
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
    {
        title: '',
        key: '',
        width: '10px',
        select: true
    },
    {
        title: '用户',
        key: 'userName',
        dataIndex: 'userName',
        center: 'left',
        width: '80px'
    },
    {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        center: 'left',
        width: '50px'
    },
    {
        title: '身高',
        key: 'high',
        dataIndex: 'high',
        center: 'right',
        width: '50px'
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
        dataIndex: 'action',
        center: 'center',
        width: '250px',
        format: true
    }
])

const rowSelectChange = (arr) => {
    console.log(arr)
}
</script>
```
:::

## 表格排序

<pied-table 
    :data="data"
    :columns="columns4"
    :border="true"
    :rowSelectChange="rowSelectChange">
    <template #body="{column, record}">
        <template v-if="column.key === 'action'">
          <pied-button size="mini">编辑</pied-button>
          <pied-button size="mini" type="error">删除</pied-button>
        </template>
    </template>
</pied-table>

::: details 代码示例
```js
<template>
    <pied-table 
        data="data" 
        columns="columns"
        border
        rowSelectChange="rowSelectChange"
    >
        <template #body="{column, record}">
            <template v-if="column.key === 'action'">
            <pied-button size="mini">编辑</pied-button>
            <pied-button size="mini" type="error">删除</pied-button>
            </template>
        </template>
    </pied-table>
</template>

<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 0,
    userName: 'liuyongqi',
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  },
  {
    id: 1,
    userName: 'yangwenwu' ,
    age: 17,
    high: '187',
    address: '西湖区湖底公园2号'
  },
  {
    id: 2,
    userName: 'fangshiyu' ,
    age: 20,
    high: '187',
    address: '西湖区湖底公园3号'
  },
  {
    id: 3,
    userName: 'zhuwei' ,
    age: 21,
    high: '187',
    address: '西湖区湖底公园4号'
  },
  {
    id: 4,
    userName: 'xiaodi' ,
    age: 18,
    high: '187',
    address: '西湖区湖底公园1号'
  }
])

const columns = ref([
    {
        title: '',
        key: '',
        width: '10px',
        select: true
    },
    {
        title: '用户',
        key: 'userName',
        dataIndex: 'userName',
        center: 'left',
        width: '80px'
    },
    {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        center: 'left',
        width: '50px',
        sort: true
    },
    {
        title: '身高',
        key: 'high',
        dataIndex: 'high',
        center: 'right',
        width: '50px',
        sort: true
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
        dataIndex: 'action',
        center: 'center',
        width: '250px',
        format: true
    }
])

const rowSelectChange = (arr) => {
    console.log(arr)
}
</script>
```
:::

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| ---------| :-----------------: | ----------: | -------------: |  ----------: | 
| data      |     数据       |  Array       |   ------          |  Array | 
| columns     |   表头           |    Array    |  ------       |  Array |
| border      |  边框          |  true/false       |  false          |  Boolean | 
| center     |   排列方式           |   left/center/right    |  left        |  String |
| format      |  数据自定义格式化          |  ------       |  ------          |  ------ | 
| select      |  多选         |  true/false       |  false          |  Boolean | 
| rowSelectChange      |  ------          |  ------       |  ------          |  Function | 
| sort      |  排序          |  true/false       |  false          |  Boolean | 

<style scoped>

</style>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 0,
                    userName: 'liuyongqi' ,
                    age: 18,
                    high: '187',
                    address: '西湖区湖底公园1号'
                },
                {
                    id: 1,
                    userName: 'yangwenwu' ,
                    age: 17,
                    high: '187',
                    address: '西湖区湖底公园2号'
                },
                {
                    id: 2,
                    userName: 'fangshiyu' ,
                    age: 20,
                    high: '187',
                    address: '西湖区湖底公园3号'
                },
                {
                    id: 3,
                    userName: 'zhuwei' ,
                    age: 21,
                    high: '187',
                    address: '西湖区湖底公园4号'
                },
                {
                    id: 4,
                    age: 18,
                    userName: 'xiaodi' ,
                    high: '187',
                    address: '西湖区湖底公园1号'
                }
            ],
            columns: [
                {
                    title: '用户',
                    key: 'userName',
                    dataIndex: 'userName',
                    center: 'center',
                    width: '150px'
                },
                {
                    title: '年龄',
                    key: 'age',
                    dataIndex: 'age',
                    center: 'center',
                    width: '150px'
                },
                {
                    title: '身高',
                    key: 'high',
                    dataIndex: 'high',
                    center: 'center',
                    width: '150px'
                },
                {
                    title: '地址',
                    key: 'address',
                    dataIndex: 'address',
                    center: 'center',
                    width: '150px'
                }
            ],
            columns1: [
                {
                    title: '用户',
                    key: 'userName',
                    dataIndex: 'userName',
                    center: 'left',
                    width: '150px'
                },
                {
                    title: '年龄',
                    key: 'age',
                    dataIndex: 'age',
                    center: 'left',
                    width: '150px'
                },
                {
                    title: '身高',
                    key: 'high',
                    dataIndex: 'high',
                    center: 'right',
                    width: '150px'
                },
                {
                    title: '地址',
                    key: 'address',
                    dataIndex: 'address',
                    center: 'center',
                    width: '150px'
                }
            ],
            columns2: [
                {
                    title: '用户',
                    key: 'userName',
                    dataIndex: 'userName',
                    center: 'left',
                    width: '50px'
                },
                {
                    title: '年龄',
                    key: 'age',
                    dataIndex: 'age',
                    center: 'left',
                    width: '80px'
                },
                {
                    title: '身高',
                    key: 'high',
                    dataIndex: 'high',
                    center: 'right',
                    width: '80px'
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
                    dataIndex: 'action',
                    center: 'center',
                    width: '250px',
                    format: true
                }
            ],
            columns3: [
                {
                    title: '',
                    key: '',
                    width: '10px',
                    select: true
                },
                {
                    title: '用户',
                    key: 'userName',
                    dataIndex: 'userName',
                    center: 'left',
                    width: '50px'
                },
                {
                    title: '年龄',
                    key: 'age',
                    dataIndex: 'age',
                    center: 'left',
                    width: '80px'
                },
                {
                    title: '身高',
                    key: 'high',
                    dataIndex: 'high',
                    center: 'right',
                    width: '80px'
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
                    dataIndex: 'action',
                    center: 'center',
                    width: '250px',
                    format: true
                }
            ],
            columns4: [
                {
                    title: '',
                    key: '',
                    width: '10px',
                    select: true
                },
                {
                    title: '用户',
                    key: 'userName',
                    dataIndex: 'userName',
                    center: 'left',
                    width: '50px'
                },
                {
                    title: '年龄',
                    key: 'age',
                    dataIndex: 'age',
                    center: 'left',
                    width: '80px',
                    sort: true
                },
                {
                    title: '身高',
                    key: 'high',
                    dataIndex: 'high',
                    center: 'right',
                    width: '80px',
                    sort: true
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
                    dataIndex: 'action',
                    center: 'center',
                    width: '250px',
                    format: true
                }
            ]
        }
    },
    methods: {
        rowSelectChange(arr){
            console.log(arr)
        }
    }
}
</script>