## 对话框

## 基础使用

<pied-button @click="handle">open the dialog</pied-button>

<pied-dialog 
    v-model="dialogShow" 
    title="标题"
    :beforeClose="beforeClose"
>
    <span>我是dialog中的内容</span>
    <template #footer>
    <span>
        <pied-button size="mini" type="info" @click="dialogShow = false">cancel</pied-button>
        <pied-button size="mini" @click="dialogShow = false">confirm</pied-button>
    </span>
    </template>
</pied-dialog>

::: details 代码示例
```js
<template>
    <pied-button click="handle">open the dialog</pied-button>

    <pied-dialog 
        v-model="dialogShow" 
        title="标题"
        beforeClose="beforeClose"
    >
        <span>我是dialog中的内容</span>
        <template #footer>
        <span>
            <pied-button size="mini" type="info" click="dialogShow = false">cancel</pied-button>
            <pied-button size="mini" click="dialogShow = false">confirm</pied-button>
        </span>
        </template>
    </pied-dialog>
</template>

<script>
import { confirm } from 'pied-design-ui'
import { ref } from 'vue'
const dialogShow = false
const handle = () => {
    this.dialogShow = true
}
const beforeClose = (done) => {
    confirm('提示', '确定关闭dialog对话窗口吗', 'cancel', 'confirm').then(() => {
        done && done()
    }).catch(err => {

    })
}
</script>
```
:::

## 自定义内容

<pied-button @click="handle1">open the columnBody dialog</pied-button>

<pied-dialog 
    v-model="dialogShow1" 
    title="标题"
>
    <pied-form model="form">
        <pied-form-item>
            <pied-input v-model="form.username" label="账户"></pied-input>
        </pied-form-item>
        <pied-form-item>
            <pied-input v-model="form.password" label="密码"></pied-input>
        </pied-form-item>
    </pied-form>
    <template #footer>
    <span>
        <pied-button size="mini" type="info" @click="dialogShow1 = false">cancel</pied-button>
        <pied-button size="mini" @click="dialogShow1 = false">confirm</pied-button>
    </span>
    </template>
</pied-dialog>

::: details 代码示例
```js
<template>
    <pied-button click="handle1">open the columnBody dialog</pied-button>

    <pied-dialog 
        v-model="dialogShow" 
        title="标题"
    >
        <pied-form model="form">
            <pied-form-item>
                <pied-input v-model="form.username" label="账户"></pied-input>
            </pied-form-item>
            <pied-form-item>
                <pied-input v-model="form.password" label="密码"></pied-input>
            </pied-form-item>
        </pied-form>
        <template #footer>
        <span>
            <pied-button size="mini" type="info" click="dialogShow = false">cancel</pied-button>
            <pied-button size="mini" click="dialogShow = false">confirm</pied-button>
        </span>
        </template>
    </pied-dialog>
</template>

<script>
import { confirm } from 'pied-design-ui'
import { ref, reactive} from 'vue'
const dialogShow = ref(false)
const form = reactive({
    username: '',
    password: ''
})
const handle = () => {
    this.dialogShow = true
}
</script>
```
:::

## 自定义头部

<pied-button @click="handle2">open the columnHeader dialog</pied-button>

<pied-dialog 
    v-model="dialogShow2" 
    title="标题"
>
    <template #header>
        <div class="columnTitle">Tips</div>
    </template>
    <span>这是一个dialog标题</span>
    <template #footer>
        <span>
            <pied-button size="mini" type="info" @click="dialogShow2 = false">cancel</pied-button>
            <pied-button size="mini" @click="dialogShow2 = false">confirm</pied-button>
        </span>
    </template>
</pied-dialog>

::: details 代码示例
```js
<template>
    <pied-button click="handle">open the columnHeader dialog</pied-button>

    <pied-dialog 
        v-model="dialogShow" 
        title="标题"
    >
        <template #header>
            <div class="columnTitle">Tips</div>
        </template>
        <span>这是一个dialog标题</span>
        <template #footer>
            <span>
                <pied-button size="mini" type="info" click="dialogShow = false">cancel</pied-button>
                <pied-button size="mini" click="dialogShow = false">confirm</pied-button>
            </span>
        </template>
    </pied-dialog>
</template>

<script>
import { confirm } from 'pied-design-ui'
import { ref } from 'vue'
const dialogShow = ref(false)
const handle = () => {
    this.dialogShow = true
}
</script>
```
:::

<script>
import { confirm } from '../../components/confirm/index.js'
export default {
    data(){
        return {
            dialogShow: false,
            dialogShow1: false,
            dialogShow2: false,
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        handle() {
            this.dialogShow = true
        },
        handle1() {
            this.dialogShow1 = true
        },
        handle2() {
            this.dialogShow2 = true
        },
        beforeClose(done){
            confirm('提示', '确定关闭dialog对话窗口吗', 'cancel', 'confirm').then(() => {
                done && done()
            }).catch(err => {

            })
        }
    }
}
</script>

<style scoped>
.columnTitle{
    width:100%;
    height:50px;
    line-height:50px;
}
</style>