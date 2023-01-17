## 快速上手
### 本节将介绍如何在项目中使用 Pied UI。
## 使用 npm create vite
### 我们为新版的 vite 准备了相应的 Pied 插件，你可以用它们快速地搭建一个基于 Pied 的项目。
## 引入 Pied
### 你可以引入整个 Pied，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Pied。

### 完整引入
### 在 main.js 中写入以下内容：

```js
import { createApp } from 'vue';
import PiedUI from 'pied-ui';
import 'pied-ui/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.mount('#app')
app.use(PiedUI);
```

### 以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。