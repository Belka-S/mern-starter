import{j as s,N as l,r as m,c as _}from"./index-9q8M5Lni.js";import{a as o,u as d,H as p,I as u,B as g,o as x,M as f}from"./yup-CkHe7w_X.js";const h="_form_gkpe1_1",j="_title__wrap_gkpe1_12",k="_title_gkpe1_12",S="_navlink_gkpe1_20",t={form:h,title__wrap:j,title:k,navlink:S},v=Object.keys(o.fields),N=()=>{const n=x(o),{register:a,handleSubmit:r,formState:{errors:i}}=d({resolver:n,mode:"onChange"}),c=e=>{console.log("data: ",e)};return s.jsxs("form",{className:t.form,onSubmit:r(c),children:[s.jsxs("div",{className:t.title__wrap,children:[s.jsx(p,{className:t.title,children:"Sign In"}),s.jsx(l,{to:"/signup",className:t.navlink,children:"Don`t have an account?"})]}),v.map(e=>s.jsx(u,{inputName:e,errors:i,register:a},e)),s.jsx(g,{type:"submit",border:"round",label:"Submit"})]})},b="_screen_1kgoh_1",w={screen:b},F=()=>{const[n,a]=m.useState(!1);return s.jsxs("div",{className:_("container",w.screen),children:[s.jsx(N,{}),n&&s.jsx(f,{setIsModal:a,children:"qwe"})]})};export{F as default};
