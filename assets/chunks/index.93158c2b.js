import{_ as y,f as i,p as V,o as _,c as x,a as s,t as g,j as p,n as r,h as B,q as S,u as h,m as C}from"../app.8acbfb45.js";const I={class:"pied-input"},w=["type","disabled"],D={name:"piedInput"},j=Object.assign(D,{props:{label:{type:String,default:"input"},modelValue:{type:String,default:""},type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},emits:["update:modelValue","blur","input","focus"],setup(t,{emit:l}){const o=t;let e=i("");e.value=o.modelValue;const a=i([]),n=i([]),u=i([]);V(()=>o.modelValue,(c,d)=>{o.modelValue&&(e.value=c,a.value=["pied-input-label-active"],n.value=["pied-input-top-line-active"],u.value=["pied-input-bottom-line-active"])},{immediate:!0});const f=()=>{a.value=["pied-input-label-active"],n.value=["pied-input-top-line-active"],u.value=["pied-input-bottom-line-active"],l("focus",e.value)},m=()=>{e.value||(a.value=[],n.value=[],u.value=[]),l("blur",e.value)},b=()=>{l("update:modelValue",e.value),l("input",e.value)};return(c,d)=>(_(),x("div",I,[s("div",{class:p(["pied-input-label",a.value]),style:r({left:t.center?"50%":"0",transform:t.center?"translate(-50%, -50%)":"translate(0, -50%)"})},g(t.label),7),B(s("input",{style:r({cursor:t.disabled?"not-allowed":"",textAlign:t.center?"center":""}),class:"pied-input-value",type:t.type,"onUpdate:modelValue":d[0]||(d[0]=v=>C(e)?e.value=v:e=v),onInput:b,onFocus:f,onBlur:m,disabled:t.disabled},null,44,w),[[S,h(e)]]),s("div",{class:p(["pied-input-top-line",n.value])},null,2),s("div",{class:p(["pied-input-bottom-line",u.value])},null,2)]))}}),z=y(j,[["__scopeId","data-v-f6db7e14"]]);export{z as default};
