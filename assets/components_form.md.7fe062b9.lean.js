import{_ as i,c as A,a as f,b as s,w as l,d as y,r,o as u,e as o,p as m,f as g}from"./app.a85c5ba3.js";const E={data(){return{form:{username:"",password:"",like:[],country:""},form1:{username:"",password:"",like:[],country:""},form2:{username:"",password:"",like:[],country:""},checkList:[{label:"\u5531\u6B4C",value:0},{label:"\u8DF3\u821E",value:1},{label:"rap",value:2},{label:"\u7BEE\u7403",value:3}],countryList:[{label:"\u4E2D\u56FD",value:0},{label:"\u65E5\u672C",value:1},{label:"\u7F8E\u56FD",value:2},{label:"\u4FC4\u7F57\u65AF",value:3}],rules:{username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]}}},methods:{handel(){this.$refs.formRef.validate(p=>{alert(p?"\u6CE8\u518C\u6210\u529F":"\u6570\u636E\u586B\u5199\u4E0D\u5B8C\u6574")})},handel1(){this.$refs.formRef1.validate(p=>{alert(p?"\u6CE8\u518C\u6210\u529F":"\u6570\u636E\u586B\u5199\u4E0D\u5B8C\u6574")})},reset(){this.$refs.formRef.resetFields()}}},N=JSON.parse('{"title":"\u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8868\u5355","slug":"\u8868\u5355"},{"level":2,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":2,"title":"\u8868\u5355\u6821\u9A8C","slug":"\u8868\u5355\u6821\u9A8C"},{"level":2,"title":"\u8868\u5355\u91CD\u7F6E","slug":"\u8868\u5355\u91CD\u7F6E"}],"relativePath":"components/form.md"}'),C=p=>(m("data-v-f3d03fb1"),p=p(),g(),p),q=C(()=>f("h2",{id:"\u8868\u5355",tabindex:"-1"},[o("\u8868\u5355 "),f("a",{class:"header-anchor",href:"#\u8868\u5355","aria-hidden":"true"},"#")],-1)),B=C(()=>f("h2",{id:"\u57FA\u7840\u4F7F\u7528",tabindex:"-1"},[o("\u57FA\u7840\u4F7F\u7528 "),f("a",{class:"header-anchor",href:"#\u57FA\u7840\u4F7F\u7528","aria-hidden":"true"},"#")],-1)),_={class:"card"},h={style:{"text-align":"center"}},x=y("",2),k={class:"card"},w={style:{"text-align":"center"}},V=y("",2),T={class:"card"},L={style:{"text-align":"center"}},S=y("",2);function R(p,t,U,j,a,b){const e=r("pied-input"),d=r("pied-form-item"),c=r("pied-checkbox-group"),v=r("pied-select"),D=r("pied-button"),F=r("pied-form");return u(),A("div",null,[q,B,f("div",_,[s(F,{model:a.form},{default:l(()=>[s(d,{prop:"username"},{default:l(()=>[s(e,{modelValue:a.form.username,"onUpdate:modelValue":t[0]||(t[0]=n=>a.form.username=n),label:"username"},null,8,["modelValue"])]),_:1}),s(d,{prop:"password"},{default:l(()=>[s(e,{modelValue:a.form.password,"onUpdate:modelValue":t[1]||(t[1]=n=>a.form.password=n),label:"password",type:"password"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u5174\u8DA3\u7231\u597D",prop:"like","label-width":"100px",bottom:"20px"},{default:l(()=>[s(c,{modelValue:a.form.like,"onUpdate:modelValue":t[2]||(t[2]=n=>a.form.like=n),data:a.checkList},null,8,["modelValue","data"])]),_:1}),s(d,{label:"\u56FD\u7C4D",prop:"country","label-width":"100px",bottom:"20px"},{default:l(()=>[s(v,{modelValue:a.form.country,"onUpdate:modelValue":t[3]||(t[3]=n=>a.form.country=n),data:a.countryList},null,8,["modelValue","data"])]),_:1}),s(d,null,{default:l(()=>[f("div",h,[s(D,{type:"error"},{default:l(()=>[o("\u91CD\u7F6E")]),_:1}),s(D,null,{default:l(()=>[o("\u63D0\u4EA4")]),_:1})])]),_:1})]),_:1},8,["model"])]),x,f("div",k,[s(F,{model:a.form1,ref:"formRef",rules:a.rules},{default:l(()=>[s(d,{prop:"username"},{default:l(()=>[s(e,{modelValue:a.form1.username,"onUpdate:modelValue":t[4]||(t[4]=n=>a.form1.username=n),label:"username"},null,8,["modelValue"])]),_:1}),s(d,{prop:"password"},{default:l(()=>[s(e,{modelValue:a.form1.password,"onUpdate:modelValue":t[5]||(t[5]=n=>a.form1.password=n),label:"password",type:"password"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u5174\u8DA3\u7231\u597D",prop:"like","label-width":"100px",bottom:"20px"},{default:l(()=>[s(c,{modelValue:a.form1.like,"onUpdate:modelValue":t[6]||(t[6]=n=>a.form1.like=n),data:a.checkList},null,8,["modelValue","data"])]),_:1}),s(d,{label:"\u56FD\u7C4D",prop:"country","label-width":"100px",bottom:"20px"},{default:l(()=>[s(v,{modelValue:a.form1.country,"onUpdate:modelValue":t[7]||(t[7]=n=>a.form1.country=n),data:a.countryList},null,8,["modelValue","data"])]),_:1}),s(d,null,{default:l(()=>[f("div",w,[s(D,{onClick:b.handel},{default:l(()=>[o("\u63D0\u4EA4")]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model","rules"])]),V,f("div",T,[s(F,{model:a.form2,ref:"formRef1",rules:a.rules},{default:l(()=>[s(d,{prop:"username"},{default:l(()=>[s(e,{modelValue:a.form2.username,"onUpdate:modelValue":t[8]||(t[8]=n=>a.form2.username=n),label:"username"},null,8,["modelValue"])]),_:1}),s(d,{prop:"password"},{default:l(()=>[s(e,{modelValue:a.form2.password,"onUpdate:modelValue":t[9]||(t[9]=n=>a.form2.password=n),label:"password",type:"password"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u5174\u8DA3\u7231\u597D",prop:"like","label-width":"100px",bottom:"20px"},{default:l(()=>[s(c,{modelValue:a.form2.like,"onUpdate:modelValue":t[10]||(t[10]=n=>a.form2.like=n),data:a.checkList},null,8,["modelValue","data"])]),_:1}),s(d,{label:"\u56FD\u7C4D",prop:"country","label-width":"100px",bottom:"20px"},{default:l(()=>[s(v,{modelValue:a.form2.country,"onUpdate:modelValue":t[11]||(t[11]=n=>a.form2.country=n),data:a.countryList},null,8,["modelValue","data"])]),_:1}),s(d,null,{default:l(()=>[f("div",L,[s(D,{type:"error",onClick:b.reset},{default:l(()=>[o("\u91CD\u7F6E")]),_:1},8,["onClick"]),s(D,{onClick:b.handel1},{default:l(()=>[o("\u63D0\u4EA4")]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model","rules"])]),S])}const P=i(E,[["render",R],["__scopeId","data-v-f3d03fb1"]]);export{N as __pageData,P as default};
