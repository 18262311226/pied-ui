import{e as d}from"./emiter.ec822e21.js";import{_ as r,y as a,G as i,q as l,o as c,c as p,k as u,n as f,s as _,l as h}from"../app.20a46c54.js";const y={name:"piedMenu"},g=Object.assign(y,{props:{selectedKeys:{type:String,default:()=>""},mode:{type:String,default:"inline"},width:{type:String,default:"200px"},theme:{type:String,default:"white"}},emits:["update:selectedKeys"],setup(o,{emit:n}){const e=o;a(()=>e.mode,t=>{d.emit("modeChange",t)}),a(()=>e.theme,t=>{d.emit("themeChange",t)}),i("menuForm",{mode:e.mode,selectedKeys:e.selectedKeys,theme:e.theme,menuClick:(t,s)=>{n("update:selectedKeys",s)}});const m=l(()=>[`pied-menu-${e.mode}`]);return(t,s)=>(c(),p("div",{class:f(["pied-menu",_(m)]),style:h({width:e.mode==="horizontal"?"100%":e.width,backgroundColor:e.theme==="dark"?"#333":"#fff",color:e.theme==="dark"?"#fff":"#333"})},[u(t.$slots,"default",{},void 0,!0)],6))}}),x=r(g,[["__scopeId","data-v-6bffb119"]]);export{x as default};