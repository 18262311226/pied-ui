import{_,D as m,q as l,o as p,c as v,a,n as o,s as t,k as f,z as b,A as h}from"../app.20a46c54.js";const V={class:"pied-radio"},x={class:"radio"},C={class:"radio-text"},k={class:"radio-opacity"},y={name:"piedRadio"},B=Object.assign(y,{props:{modelValue:{require:!0,default:""},label:{require:!0,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:d}){const e=s,i=m({modelValue:""});i.modelValue=e.modelValue;let c=l(()=>[e.modelValue===e.label?"item-choose":""]),n=l(()=>[e.modelValue===e.label?"radio-choose":""]);const r=()=>{d("update:modelValue",e.label)};return(u,g)=>(p(),v("div",V,[a("div",{class:o(["pied-radio-box",t(n)]),onClick:r},[a("div",x,[a("div",{class:o(["radio-item",t(c)])},null,2)]),a("div",C,[f(u.$slots,"default",{},void 0,!0)])],2),b(a("div",k,null,512),[[h,s.disabled]])]))}}),w=_(B,[["__scopeId","data-v-d2b214e4"]]);export{w as default};
