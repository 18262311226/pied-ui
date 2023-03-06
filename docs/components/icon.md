## 图标

## 使用案列

<pied-button icon="pied-icon-vertical-align-botto" circle></pied-button>
<pied-button icon="pied-icon-home1" type="error" circle></pied-button>
<pied-button icon="pied-icon-vertical-align-botto">查询</pied-button>
<pied-button icon="pied-icon-home1" type="error">取消</pied-button>

::: details 代码示例
```js
<pied-button icon="pied-icon-vertical-align-botto" circle></pied-button>
<pied-button icon="pied-icon-home1" type="error" circle></pied-button>
<pied-button icon="pied-icon-vertical-align-botto">查询</pied-button>
<pied-button icon="pied-icon-home1" type="error">取消</pied-button>
```
:::

## 字体图标

<div class="iconbox flex">
    <div v-for="(item, index) in iconlist" :key="index" :class="[`pied-icon-${item.font_class}`, 'icon']">
        <p>pied-icon-{{item.font_class}}</p>
    </div>
</div>

| 参数          |      说明  |  可选值 | 默认值 | 类型 | 
| -------------| :-------------: | ----------: | -------------: |  ----------: | 
| icon      |  绑定值          |  以上图标       | -----          |  String | 


<script>
import { icons} from '../../utils/icons.js'
export default {
    data(){
        return {
            iconlist: icons.glyphs
        }
    }
}
</script>

<style scoped>
.pied-button{
    margin-right:10px
}
.iconbox{
    width:100%;
}
.icon{
  width:25%;
  height:100px;
  text-align: center;
  line-height: 50px;
  font-size:20px;
  display:flex;
  flex-direction: column;
  margin-bottom:20px;
  position:relative;
  transition:0.5s;
}
.icon:hover{
    color:purple;
}
p{
    width:100%;
    font-size:12px;
    position:absolute;
    left:50%;
    bottom:0px;
    transform:translateX(-50%);
}
.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>