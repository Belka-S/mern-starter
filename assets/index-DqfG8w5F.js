import{u,j as s,N as p,B as d,b as g,S as h,r as _,a as x,d as j,c as v,M as S}from"./index-CGwHk1nr.js";import{s as o,u as f,H as b,F as k,L as N,o as w}from"./yup-CuZihFMH.js";import"./Typography-Cj-ELMU5.js";const F="_form_1uzgt_1",z="_title__wrap_1uzgt_12",B="_navlink_1uzgt_17",a={form:F,title__wrap:z,navlink:B},I=Object.keys(o.fields),L=()=>{const e=u(),n=w(o),{register:r,handleSubmit:i,formState:{errors:c}}=f({mode:"onChange",resolver:n}),l=t=>{e(_(t)).unwrap().catch(m=>x.error(m.message))};return s.jsxs("form",{className:a.form,onSubmit:i(l),children:[s.jsxs("div",{className:a.title__wrap,children:[s.jsx(b,{className:a.title,children:"Sign Up"}),s.jsx(p,{to:"/signin",className:a.navlink,children:"Have an account?"})]}),I.map(t=>s.jsx(k,{inputName:t,errors:c,register:r},t)),s.jsx(d,{type:"submit",variant:"smooth",label:"Submit"}),s.jsx(N,{href:`${g}/auth/google`,color:"outlined",variant:"smooth",label:"Sign Up With",children:s.jsx(h,{svgId:"google",size:24})})]})},M="_screen_1kgoh_1",E={screen:M},R=()=>{const[e,n]=j.useState(!1);return s.jsxs("div",{className:v("container",E.screen),children:[s.jsx(L,{}),e&&s.jsx(S,{setIsModal:n,children:"qwe"})]})};export{R as default};
