import{u as p,d as _,j as s,N as d,B as h,l as g,a as x,b as f,c as j,M as k}from"./index-CWAJPTvL.js";import{a as o,u as S,H as b,F as v,o as N}from"./yup-ZEDEWzkJ.js";import"./Typography-DSoseKNO.js";const w="_form_gkpe1_1",F="_title__wrap_gkpe1_12",M="_title_gkpe1_12",B="_navlink_gkpe1_20",t={form:w,title__wrap:F,title:M,navlink:B},I=Object.keys(o.fields),y=()=>{const a=p(),{user:n}=_(),r=N(o),{register:i,handleSubmit:c,formState:{errors:l}}=S({resolver:r,mode:"onChange",defaultValues:{email:n.email}}),m=e=>{a(g(e)).unwrap().catch(u=>x.error(u.message))};return s.jsxs("form",{className:t.form,onSubmit:c(m),children:[s.jsxs("div",{className:t.title__wrap,children:[s.jsx(b,{className:t.title,children:"Sign In"}),s.jsx(d,{to:"/signup",className:t.navlink,children:"Don`t have an account?"})]}),I.map(e=>s.jsx(v,{inputName:e,errors:l,register:i},e)),s.jsx(h,{type:"submit",border:"round",label:"Submit"})]})},A="_screen_1kgoh_1",D={screen:A},q=()=>{const[a,n]=f.useState(!1);return s.jsxs("div",{className:j("container",D.screen),children:[s.jsx(y,{}),a&&s.jsx(k,{setIsModal:n,children:"qwe"})]})};export{q as default};
