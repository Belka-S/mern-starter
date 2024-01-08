import{s as r,n as p,t as b,P as F,u as $,a3 as f,r as v,j as e,F as h,U as z,M as S,a4 as x,a5 as M,K as A,a6 as B}from"./index-0ed60bd1.js";import{v as P,T as _,a as D,F as H}from"./index.esm-8baa4417.js";const I=r.ul`
  width: 100%;
  list-style: none;
`,{colors:t,shadows:K,indents:m,radiuses:R}=b,U=p`
  &:not(:last-of-type) {
    margin-bottom: ${m.s};
  }
  padding-block: ${m.xs};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 12fr 1fr 12fr 1fr;
  /* grid-template-areas: '. . . .'; */

  background-color: ${t.white};
  border-radius: ${R.s};
  font-size: 22px;
`,W=r.li`
  ${U}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${t.border};
    box-shadow: ${K.back};
    /* background-color: ${t.backgroundHoverd}; */
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,q=r.div`
  height: 75%;
  width: 1px;
  justify-self: center;
  border: 1px solid ${t.borderLight};
`,j=p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${P}
  }
`,G=r.label`
  ${j}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?t.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?t.yellow:t.border};
  }
  &:hover svg {
    stroke: ${t.placeholder};
  }
`,J=r.label`
  ${j}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${t.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?t.border:"transparent"};
  }
  &:hover svg {
    border-color: ${t.placeholder};
    color: ${({$hovered:s})=>s?t.placeholder:"transparent"};
  }
`,g=p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${t.border};
  }
  &:hover,
  &:hover svg {
    color: ${t.placeholder};
  }
`,N=r.button`
  ${g}

  opacity: ${({$hovered:s})=>s?1:0};
`,O=r.button`
  ${g}

  opacity: 0;
`,k=({el:s})=>{const n=$(),{elementTrash:i}=f(),[c,o]=v.useState(!1),{_id:a,element:y,title:X,favorite:l,checked:d,createdAt:Y}=s,E=i.find(L=>L._id===a),C=()=>{n(x({_id:a,favorite:!l}))},T=()=>{n(x({_id:a,checked:!d}))},w=()=>n(M(s));return e.jsxs(W,{children:[e.jsxs(h,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(G,{$hovered:l,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:l,onChange:C}),e.jsx(_,{size:"20px"})]}),e.jsxs(J,{$hovered:d,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:d,onChange:T}),e.jsx(z,{size:"15px"})]})]}),y,e.jsx(q,{}),e.jsx("span",{children:"translation"}),e.jsxs(h,{$h:"100%",$p:"0",$fd:"column",children:[e.jsx(N,{$hovered:E,onClick:w,children:e.jsx(D,{size:"16px"})}),e.jsx(O,{onClick:()=>o("edit"),children:e.jsx(H,{size:"15px"})})]}),c&&e.jsx(S,{onClick:()=>o(!1)})]})};k.propTypes={el:F.object};const Q=()=>{const s=$(),{activeCluster:n}=A(),{allElements:i}=f();v.useEffect(()=>{s(B())},[s]);const c=i.filter(o=>o.cluster===n.title).sort((o,a)=>o.createdAt.localeCompare(a.createdAt));return e.jsx(I,{children:c.map(o=>e.jsx(k,{el:o},o._id))})},{s:u,m:V}=b.indents,se=()=>e.jsx(h,{$p:`2px ${V} ${u} ${u}`,children:e.jsx(Q,{})});export{se as default};
