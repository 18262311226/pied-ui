import{f as o,o as i,c as u,g as l,v as s,a,h as c,n as r,i as f,u as p}from"../app.a1aab626.js";const b=["disabled"],y={class:"pied-button-before"},g={class:"pied-button-middle"},m={class:"pied-button-after"},_={name:"PiedButton"},v=Object.assign(_,{props:{type:{type:String,default:"primary"},size:{type:String,default:"small"},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,default:""}},setup(e){const t=e;let n=o(()=>["pied-button",`pied-button-${t.type}`,`pied-button-${t.size}`,t.round?"round":"",t.circle?"circle":"",t.disabled||t.loading?"disabled":""]);return(d,h)=>(i(),u("button",{class:f(p(n)),disabled:e.disabled||e.loading},[l(a("span",y,null,512),[[s,e.loading]]),l(a("span",g,null,512),[[s,e.loading]]),l(a("span",m,null,512),[[s,e.loading]]),a("div",{style:r({opacity:e.loading?"0":"100%"})},[c(d.$slots,"default")],4)],10,b))}});export{v as default};