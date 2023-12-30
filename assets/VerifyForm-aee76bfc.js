import{n as x,s as c,t as f,L as g,P as t,j as e,G as l,c as m,F as j,u as v,r as C,v as F,Q as b,d as y,e as k}from"./index-6437cf43.js";import{f as L,F as T,a as $,T as z,L as V,E as w,b as E,c as M,d as S,S as B,e as G}from"./AuthForms.styled-8c254000.js";import{v as O}from"./clusterSchema-fd1fd8c8.js";const{colors:R}=f,d=x`
  margin-left: auto;

  color: ${R.accent};
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  font-size: ${({$fs:s="14px"})=>s};
  font-weight: 400;
`,H=c(g)`
  ${d};
`,J=c.button`
  ${d};

  background-color: transparent;
  border-color: transparent;
`,I=({$fs:s,to:a,children:o})=>e.jsx(H,{$fs:s,to:a,children:o});I.propTypes={$fs:t.string,to:t.string.isRequired,children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired};function D(s){return l({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(s)}function q(s){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(s)}const U=({children:s})=>e.jsx(L,{href:`${m}/auth/google`,children:e.jsxs(j,{$p:"0",$ai:"center",$jc:"space-between",children:[e.jsx(D,{size:"20px"}),s,e.jsx(q,{size:"16px"})]})});U.propTypes={children:t.oneOfType([t.string,t.node,t.oneOf(["img","png","svg"])])};const A=({userEmail:s})=>{const a=v(),o=({values:n,errors:r})=>{const i=!Object.values(n)[0]&&"noValue",u=Object.values(r).length?"error":"success";return i||u},p=({errors:n})=>Object.keys(n).length,h=(n,r)=>{a(F(n)).unwrap().catch(i=>i.includes("401")&&b.error("Unauthorized")).then(()=>a(y())).then(()=>a(k({clusterGroup:"Common"}))),r.resetForm()};return e.jsx(T,{initialValues:{verificationCode:""},validationSchema:O,onSubmit:h,children:({values:n,errors:r})=>e.jsxs($,{children:[e.jsx(z,{children:e.jsxs("h2",{children:["Verify: ",s]})}),e.jsxs(C.Fragment,{children:[e.jsxs(V,{children:["Code",e.jsx("pre",{children:" "}),e.jsx(w,{name:"verificationCode",component:"span"})]}),e.jsxs(E,{children:[e.jsx(M,{type:"text",name:"verificationCode",$validation:o({values:n,errors:r})}),o({values:n,errors:r})==="error"&&e.jsx(S,{}),o({values:n,errors:r})==="success"&&e.jsx(B,{})]})]}),e.jsx(G,{disabled:p({errors:r}),children:"Submit"})]})})};A.propTypes={userEmail:t.string.isRequired};export{J as B,U as G,I as L,A as V};
