import{u as p,j as s,N as u,r as _,B as d,a as g,c as h}from"./index-uB5X1Kc0.js";import{s as r,u as x,H as f,I as j,B as k,o as S,M as v}from"./yup-DDVC45Tb.js";import"./Typography-CqW3be_7.js";const N="_form_gkpe1_1",b="_title__wrap_gkpe1_12",w="_title_gkpe1_12",M="_navlink_gkpe1_20",t={form:N,title__wrap:b,title:w,navlink:M},B=Object.keys(r.fields),F=()=>{const a=p(),n=S(r),{register:o,handleSubmit:i,formState:{errors:c}}=x({mode:"onChange",resolver:n}),l=e=>{a(_(e)).unwrap().catch(m=>d.error(m.message))};return s.jsxs("form",{className:t.form,onSubmit:i(l),children:[s.jsxs("div",{className:t.title__wrap,children:[s.jsx(f,{className:t.title,children:"Sign Up"}),s.jsx(u,{to:"/signin",className:t.navlink,children:"Have an account?"})]}),B.map(e=>s.jsx(j,{inputName:e,errors:c,register:o},e)),s.jsx(k,{type:"submit",border:"round",label:"Submit"})]})},H="_screen_1kgoh_1",I={screen:H},T=()=>{const[a,n]=g.useState(!1);return s.jsxs("div",{className:h("container",I.screen),children:[s.jsx(F,{}),a&&s.jsx(v,{setIsModal:n,children:"qwe"})]})};export{T as default};
