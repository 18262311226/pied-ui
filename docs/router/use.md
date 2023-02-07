## 快速上手
### 本节将介绍如何在项目中使用 pied-design-ui。
## 使用 npm create vite
### 我们为新版的 vite 准备了相应的 pied-design-ui 插件，你可以用它们快速地搭建一个基于 pied-design-ui 的项目。
## 引入 pied-design-ui
### 你可以引入整个 pied-design-ui pied-design-ui

### 完整引入
### 在 main.js 中写入以下内容：

```js
import { createApp } from 'vue';
import piedDesignUi from 'pied-design-ui';
import 'pied-ui/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.mount('#app')
app.use(piedDesignUi);
```

### 以上代码便完成了 piedDesignUi 的引入。需要注意的是，样式文件需要单独引入。