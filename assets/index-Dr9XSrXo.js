import{u as d,d as p,j as s,N as _,B as h,l as x,a as f,b as j,c as g,M as S}from"./index-D0evn47l.js";import{a as o,u as b,H as v,F as N,o as k}from"./yup-DGMlFu33.js";import"./Typography-BmuMsirz.js";const w="_form_mq58d_1",F="_title__wrap_mq58d_12",q="_navlink_mq58d_17",a={form:w,title__wrap:F,navlink:q},M=Object.keys(o.fields),B=()=>{const n=d(),{user:t}=p(),r=k(o),{register:i,handleSubmit:c,formState:{errors:l}}=b({resolver:r,mode:"onChange",defaultValues:{email:t.email}}),m=e=>{n(x(e)).unwrap().catch(u=>f.error(u.message))};return s.jsxs("form",{className:a.form,onSubmit:c(m),children:[s.jsxs("div",{className:a.title__wrap,children:[s.jsx(v,{className:a.title,children:"Sign In"}),s.jsx(_,{to:"/signup",className:a.navlink,children:"Don`t have an account?"})]}),M.map(e=>s.jsx(N,{inputName:e,errors:l,register:i},e)),s.jsx(h,{type:"submit",border:"round",label:"Submit"})]})},I="_screen_1kgoh_1",y={screen:I},H=()=>{const[n,t]=j.useState(!1);return s.jsxs("div",{className:g("container",y.screen),children:[s.jsx(B,{}),n&&s.jsx(S,{setIsModal:t,children:"qwe"})]})};export{H as default};
