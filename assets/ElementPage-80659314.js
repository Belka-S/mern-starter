import{s as o,n as u,t as y,P as d,j as e,u as v,a2 as P,a3 as R,a4 as j,a5 as F,r as C,F as g,T as A,a6 as D,K as I,a7 as G}from"./index-97ef5295.js";import{v as K,u as O,T as V,b as q,F as J}from"./index.esm-24d6836c.js";const M=o.ul`
  width: 100%;
  list-style: none;
`,{colors:t,shadows:N,indents:k,radiuses:Q}=y,U=u`
  padding-block: ${k.xs};
  &:not(:last-of-type) {
    margin-bottom: ${k.s};
  }
  position: relative;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;
  /* grid-template-areas: '. . . .'; */

  background-color: ${t.white};
  border-radius: ${Q.s};
  font-size: 22px;
`,X=o.li`
  ${U}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${t.border};
    box-shadow: ${N.back};
    /* background-color: ${t.backgroundHoverd}; */
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,S=u`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${K}
  }
`,Y=o.label`
  ${S}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?t.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?t.yellow:t.border};
  }
  &:hover svg {
    stroke: ${t.placeholder};
  }
`,Z=o.label`
  ${S}
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
`,m=u`
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
`,ee=o.button`
  ${m}

  opacity: ${({$hovered:s})=>s?1:0};
`,se=o.button`
  ${m}

  opacity: 0;
`,{colors:w,radiuses:te,indents:ue}=y,z=u`
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,oe=o.div`
  ${z}
`,re=o.form`
  ${z}

  grid-template-columns: 12fr 1fr 12fr;
`,E=o.textarea`
  outline: none;
  border: 1px solid ${w.accent};
  border-radius: ${te.s};
  resize: vertical;
`,ne=o.div`
  height: 75%;
  width: 1px;
  justify-self: center;
  border: 1px solid ${w.borderLight};
`,ie=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,ae=o.button`
  ${m}
`,ce=o.button`
  ${m}
`,B=({el:s})=>{const{element:n,caption:i}=s;return e.jsxs(oe,{children:[n,e.jsx(ne,{}),i]})};B.propTypes={el:d.object};const L=({el:s,isForm:n,setIsForm:i})=>{const a=v(),{_id:r,element:c,caption:p}=s,l=n+35,{register:h,handleSubmit:x}=O({mode:"onBlur",defaultValues:{element:c,caption:p}}),b=$=>{a(j({_id:r,...$})),i(!1)};return e.jsxs(re,{onSubmit:x(b),children:[e.jsx(E,{...h("element"),style:{height:l}}),e.jsxs(ie,{children:[e.jsx(ce,{type:"button",onClick:()=>i(l),children:e.jsx(P,{size:"16px"})}),e.jsx(ae,{children:e.jsx(R,{size:"16px"})})]}),e.jsx(E,{...h("caption"),style:{height:l}})]})};L.propTypes={el:d.object,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const W=({el:s})=>{const n=v(),{elementTrash:i}=F(),[a,r]=C.useState(!1),{_id:c,favorite:p,checked:l}=s,h=i.find(f=>f._id===c),x=()=>{n(j({_id:c,favorite:!p}))},b=()=>{n(j({_id:c,checked:!l}))},$=()=>n(D(s)),_=f=>{if(a)r(!1);else{const H=f.target.closest("div").clientHeight;r(H)}};return e.jsxs(X,{children:[e.jsxs(g,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(Y,{$hovered:p,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:p,onChange:x}),e.jsx(V,{size:"20px"})]}),e.jsxs(Z,{$hovered:l,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:b}),e.jsx(A,{size:"15px"})]})]}),a&&e.jsx(L,{el:s,isForm:a,setIsForm:r}),!a&&e.jsx(B,{el:s}),e.jsxs(g,{$h:"100%",$p:"0",$fd:"column",children:[e.jsx(ee,{$hovered:h,onClick:$,children:e.jsx(q,{size:"16px"})}),e.jsx(se,{onClick:_,children:e.jsx(J,{size:"15px"})})]})]})};W.propTypes={el:d.object};const le=()=>{const s=v(),{activeCluster:n}=I(),{allElements:i}=F();C.useEffect(()=>{s(G())},[s]);const a=i.filter(r=>r.cluster===n.title).sort((r,c)=>r.createdAt.localeCompare(c.createdAt));return e.jsx(M,{children:a.map(r=>e.jsx(W,{el:r},r._id))})},{s:T,m:de}=y.indents,me=()=>e.jsx(g,{$p:`2px ${de} ${T} ${T}`,children:e.jsx(le,{})});export{me as default};
