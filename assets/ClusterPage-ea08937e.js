import{_ as Oe,r as y,w as J,x as z,y as ke,z as Q,A as Se,C as Le,D as Te,S as Ge,E as Ve,n as _,s as C,t as D,P as t,j as r,H as De,I as Ee,J as Ne,u as F,K as A,N as R,O as q,R as se,Q as N,e as oe,g as _e,T as Fe,M as ne,U as Ae,V as Pe,W as Be,X as Me,Y as ze,Z as X,$ as Ie,a0 as Re,a1 as We,F as qe}from"./index-97ef5295.js";import{v as ae,g as ie,s as He,a as Ue,u as le,T as Ke,F as Ye,b as Je}from"./index.esm-24d6836c.js";import{t as ce,c as Qe}from"./clusterSchema-b13f4d04.js";var Xe=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],Z=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,c=String(a).toLowerCase(),l=String(o.getOptionValue(i)).toLowerCase(),d=String(o.getOptionLabel(i)).toLowerCase();return l===c||d===c},I={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,i,o,c){return!(!a||i.some(function(l){return Z(a,l,c)})||o.some(function(l){return Z(a,l,c)}))},getNewOptionData:function(a,i){return{label:i,value:a,__isNew__:!0}}};function Ze(e){var a=e.allowCreateWhileLoading,i=a===void 0?!1:a,o=e.createOptionPosition,c=o===void 0?"last":o,l=e.formatCreateLabel,d=l===void 0?I.formatCreateLabel:l,f=e.isValidNewOption,p=f===void 0?I.isValidNewOption:f,n=e.getNewOptionData,s=n===void 0?I.getNewOptionData:n,h=e.onCreateOption,b=e.options,g=b===void 0?[]:b,u=e.onChange,v=Oe(e,Xe),S=v.getOptionValue,O=S===void 0?Se:S,k=v.getOptionLabel,m=k===void 0?Le:k,$=v.inputValue,L=v.isLoading,T=v.isMulti,w=v.value,j=v.name,G=y.useMemo(function(){return p($,J(w),g,{getOptionValue:O,getOptionLabel:m})?s($,d($)):void 0},[d,s,m,O,$,p,g,w]),Ce=y.useMemo(function(){return(i||!L)&&G?c==="first"?[G].concat(z(g)):[].concat(z(g),[G]):g},[i,c,L,G,g]),je=y.useCallback(function(E,B){if(B.action!=="select-option")return u(E,B);var Y=Array.isArray(E)?E:[E];if(Y[Y.length-1]===G){if(h)h($);else{var M=s($,$),we={action:"create-option",name:j,option:M};u(ke(T,[].concat(z(J(w)),[M]),M),we)}return}u(E,B)},[s,$,T,j,G,h,u,w]);return Q(Q({},v),{},{options:Ce,onChange:je})}var et=y.forwardRef(function(e,a){var i=Te(e),o=Ze(i);return y.createElement(Ge,Ve({ref:a},o))}),tt=et;const{colors:x,shadows:rt,radiuses:st}=D,ue=_`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr 1fr 1fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${x.borderLight};
`,ot=C.li`
  ${ue}
  counter-reset: subsection;
  line-height: 2;

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;

    &::before {
      counter-increment: section;
      content: 'Group ' counter(section) '. ';
      text-transform: capitalize;
    }
  }
`,nt=C.li`
  ${ue}

  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${x.border};
    box-shadow: ${rt.back};
    background-color: ${x.white};
    border-radius: ${st.xs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,de=_`
  font-size: 16px;

  &:hover {
    color: ${x.hovered};
  }
`,at=C.button`
  ${de}

  border: none;
  background-color: transparent;
  color: ${x.black};
  font-weight: 500;
`,it=C.a`
  ${de}

  color: ${x.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${x.black};
  }
`,pe=_`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${ae}
  }
`,lt=C.label`
  ${pe}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?x.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?x.yellow:x.border};
  }
  &:hover svg {
    stroke: ${x.placeholder};
  }
`,ct=C.label`
  ${pe}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${x.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?x.border:"transparent"};
  }
  &:hover svg {
    border-color: ${x.placeholder};
    color: ${({$hovered:e})=>e?x.placeholder:"transparent"};
  }
`,H=_`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  &,
  & svg {
    transition: color 250ms;
    color: ${x.border};
  }
  &:hover,
  &:hover svg {
    color: ${x.placeholder};
  }
`,ut=C.button`
  ${H}

  font-size: 14px;
`,dt=C.button`
  ${H}

  opacity: ${({$hovered:e})=>e?1:0};
`,pt=C.button`
  ${H}

  opacity: 0;
`,he=({group:e})=>r.jsx(ot,{children:r.jsx("h2",{children:e})});he.propTypes={group:t.string};var ee=function(e,a,i){if(e&&"reportValidity"in e){var o=ie(i,a);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},fe=function(e,a){var i=function(c){var l=a.fields[c];l&&l.ref&&"reportValidity"in l.ref?ee(l.ref,c,e):l.refs&&l.refs.forEach(function(d){return ee(d,c,e)})};for(var o in a.fields)i(o)},ht=function(e,a){a.shouldUseNativeValidation&&fe(e,a);var i={};for(var o in e){var c=ie(a.fields,o);He(i,o,Object.assign(e[o]||{},{ref:c&&c.ref}))}return i};function ge(e,a,i){return a===void 0&&(a={}),i===void 0&&(i={}),function(o,c,l){try{return Promise.resolve(function(d,f){try{var p=(a.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},a,{context:c}))).then(function(n){return l.shouldUseNativeValidation&&fe({},l),{values:i.raw?o:n,errors:{}}}))}catch(n){return f(n)}return p&&p.then?p.then(void 0,f):p}(0,function(d){if(!d.inner)throw d;return{values:{},errors:ht((f=d,p=!l.shouldUseNativeValidation&&l.criteriaMode==="all",(f.inner||[]).reduce(function(n,s){if(n[s.path]||(n[s.path]={message:s.message,type:s.type}),p){var h=n[s.path].types,b=h&&h[s.type];n[s.path]=Ue(s.path,p,n,s.type,b?[].concat(b,s.message):s.message)}return n},{})),l)};var f,p}))}catch(d){return Promise.reject(d)}}}const U=({$w:e,$h:a,$s:i,onClick:o,type:c="button",disabled:l,children:d})=>r.jsx(De,{$w:e,$h:a,$s:i,onClick:o,type:c,disabled:l,children:d});U.propTypes={$w:t.string,$h:t.string,$s:t.string,onClick:t.func,type:t.string,disabled:t.oneOfType([t.bool,t.number]),children:t.oneOfType([t.string,t.node,t.oneOf(["img","png","svg"])])};const K=({styles:e,$obh:a,$sobh:i,$ol:o,$b:c,$bh:l,$bf:d,$o:f,$oh:p,$ob:n,name:s,value:h={value:"HTML",label:"Chocolate"},defaultValue:b,placeholder:g="Create / Select...",options:u,onChange:v,isClearable:S,onCreateOption:O,isLoading:k,isDisabled:m})=>r.jsx(tt,{theme:Ee({$obh:a,$sobh:i}),styles:{...Ne({$ol:o,$b:c,$bh:l,$bf:d,$o:f,$oh:p,$ob:n,$obh:a}),...e},name:s,value:h,defaultValue:b,placeholder:g,options:u,onChange:v,isClearable:S,onCreateOption:O,isLoading:k,isDisabled:m});K.propTypes={styles:t.arrayOf(t.object),$obh:t.string,$sobh:t.string,$ol:t.string,$b:t.string,$bh:t.string,$bf:t.string,$o:t.string,$oh:t.string,$ob:t.string,options:t.arrayOf(t.object),name:t.string,value:t.oneOfType([t.arrayOf(t.object),t.object,t.string]),defaultValue:t.oneOfType([t.arrayOf(t.object),t.object]),placeholder:t.string,onChange:t.func,isClearable:t.oneOfType([t.arrayOf(t.string),t.string,t.object]),onCreateOption:t.func,isLoading:t.bool,isDisabled:t.bool};const{colors:P,radiuses:be,shadows:ft}=D,me=C.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${be.m};
  background-color: ${P.white};
  box-shadow: ${ft.auth};
`,V=C.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${P.error};
  }
`,ve=_`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${P.border};
  border-radius: ${be.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${P.hovered};
  }
`,gt=C.input`
  ${ve}
  ${ae}
`,W=C.input`
  ${ve}
`,xe=({el:e,setIsModal:a})=>{var O,k;const{_id:i,cluster:o,title:c,group:l}=e,d=F(),[f,p]=y.useState({value:l,label:l}),{clusterGroups:n}=A(),{register:s,watch:h,handleSubmit:b,formState:{errors:g}}=le({mode:"onBlur",resolver:ge(ce),defaultValues:{cluster:o,title:c}}),u=async m=>{d(R({_id:i,...m,group:f.value})),a(!1);const $=[];await d(q()).unwrap().then(L=>{const{clusters:T}=L.result,w=Array.from(new Set(T.map(j=>j.group)));n.forEach(j=>{w.includes(j.clusterGroup)||$.push(j._id)})}),$.forEach(L=>d(se(L)))},v=n.map(m=>({value:m.clusterGroup,label:m.clusterGroup})).sort((m,$)=>m.value.localeCompare($.value)),S=m=>{h("title")?(d(oe({clusterGroup:m})),p({value:m,label:m})):N.error("Title is required")};return r.jsxs(me,{onSubmit:b(u),children:[r.jsxs(V,{children:["Cluster ",r.jsxs("span",{children:[" ",(O=g.cluster)==null?void 0:O.message]}),r.jsx(W,{...s("cluster")})]}),r.jsxs(V,{children:["Title ",r.jsxs("span",{children:[" ",(k=g.title)==null?void 0:k.message]}),r.jsx(W,{...s("title")})]}),r.jsxs(V,{children:["Group",r.jsx(K,{value:f,options:v,onChange:m=>p(m||""),onCreateOption:S,isClearable:f})]}),r.jsx(U,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};xe.propTypes={el:t.object,setIsModal:t.func.isRequired};const $e=({el:e,sortByDate:a,setSortByDate:i})=>{const o=F(),c=_e(),{activeCluster:l,clusterTrash:d}=A(),[f,p]=y.useState(!1),{_id:n,cluster:s,title:h,favorite:b,checked:g,createdAt:u}=e,v=new Date(u).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),S=d.find(w=>w._id===n),O=w=>{const j=w.replace("https://","").replace("http://","");return j.length<=30?j:j.substring(0,29).concat("...")},k=()=>{o(R({_id:n,favorite:!b}))},m=()=>{o(Ae(e)),e._id===l._id&&c(`/element/${n}`,{replace:!0})},$=()=>{o(R({_id:n,checked:!g}))},L=()=>o(Pe(e)),T=()=>{i(!a),a?N.success("Ascend by Title"):N.success("Descend by Date")};return r.jsxs(nt,{children:[r.jsxs(lt,{$hovered:b,children:[r.jsx("input",{type:"checkbox",name:"favorite",checked:b,onChange:k}),r.jsx(Ke,{size:"20px"})]}),r.jsx(at,{onClick:m,children:h}),r.jsx(it,{href:s,target:"_blank",rel:"noopener noreferrer",children:O(s)}),r.jsx(pt,{onClick:()=>p("edit"),children:r.jsx(Ye,{size:"15px"})}),r.jsx(dt,{$hovered:S,onClick:L,children:r.jsx(Je,{size:"16px"})}),r.jsxs(ct,{$hovered:g,children:[r.jsx("input",{type:"checkbox",name:"checked",checked:g,onChange:$}),r.jsx(Fe,{size:"15px"})]}),r.jsx(ut,{onClick:T,children:v}),f&&r.jsx(ne,{onClick:()=>p(!1),children:r.jsx(xe,{el:e,setIsModal:p})})]})};$e.propTypes={el:t.object,sortByDate:t.bool,setSortByDate:t.func,$hovered:t.bool};const{indents:bt}=D,mt=C.ol`
  width: 100%;

  padding-top: 2px;
  padding-bottom: ${bt.xl};
  counter-reset: section 0;
`,vt=()=>{const e=F(),{allClusters:a,clusterFilter:i,clusterSelect:o}=A(),[c,l]=y.useState(!0);y.useEffect(()=>{e(Be()),e(q())},[e]);const d=[...a].filter(({group:n,title:s,favorite:h,checked:b})=>{const g=n.toLowerCase().includes(i)||s.toLowerCase().includes(i),u=o.includes("favorite")?g&&h===!0:g;return o.some(v=>["checked","unchecked"].includes(v))?o.includes("checked")?u&&b===!0:u&&b===!1:u}).sort(c?(n,s)=>s.createdAt-n.createdAt:(n,s)=>n.title.localeCompare(s.title)),f=Array.from(new Set(d.map(n=>n.group))).sort((n,s)=>n.localeCompare(s)),p=o.filter(n=>!["favorite","checked","unchecked"].includes(n)).length!==0?o.filter(n=>f.includes(n)):f;return r.jsx(mt,{children:p.map(n=>r.jsxs(y.Fragment,{children:[r.jsx(he,{group:n}),d.map(s=>s.group===n&&r.jsx($e,{el:s,sortByDate:c,setSortByDate:l},s._id))]},n))})},ye=({cluster:e,setIsModal:a})=>{var g;const i=F(),[o,c]=y.useState(""),{clusterGroups:l}=A(),{register:d,watch:f,handleSubmit:p,formState:{errors:n}}=le({mode:"onBlur",resolver:ge(ce),defaultValues:{cluster:e}}),s=u=>{i(Me({...u,group:o.value})),a(!1)},h=l.map(u=>({value:u.clusterGroup,label:u.clusterGroup})).sort((u,v)=>u.value.localeCompare(v.value)),b=u=>{f("title")?(i(oe({clusterGroup:u})),c({value:u,label:u})):N.error("Title is required")};return r.jsxs(me,{onSubmit:p(s),children:[r.jsxs(V,{children:[e.length<=45?e:e.substring(0,45)+"...",r.jsx(gt,{...d("cluster")})]}),r.jsxs(V,{children:["Title ",r.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),r.jsx(W,{autoFocus:!0,...d("title")})]}),r.jsxs(V,{children:["Group",r.jsx(K,{value:o,options:h,onChange:u=>c(u||""),onCreateOption:b,isClearable:o})]}),r.jsx(U,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};ye.propTypes={cluster:t.string.isRequired,setIsModal:t.func.isRequired};const{button:te}=D.shadows,{s:xt,m:$t}=D.indents,yt=()=>{const e=F(),[a,i]=y.useState(!1),{clusterTrash:o,clusterGroups:c}=A(),[l,d]=y.useState(""),f=o.length>0;y.useEffect(()=>{const s=h=>{h.key==="+"&&p()};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[]);const p=async s=>{const h=await Ie();try{await Qe.validate({cluster:h}),d(h),i("add")}catch(b){s==null||s.target.blur(),N.error(`Invalid cluster, ${b.message}`)}},n=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await o.forEach(h=>e(Re(h._id))),e(We());const s=[];await e(q()).unwrap().then(h=>{const{clusters:b}=h.result,g=Array.from(new Set(b.map(u=>u.group)));c.forEach(u=>{g.includes(u.clusterGroup)||s.push(u._id)})}),s.forEach(h=>e(se(h)))};return r.jsxs(ze,{$m:`${xt} ${$t}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[f?r.jsx(X,{onClick:n,$s:"m",$bs:te,children:"Delete"}):r.jsx("span",{}),r.jsx(X,{onClick:p,$s:"m",$bs:te,children:"Add"}),a&&r.jsx(ne,{onClick:()=>i(!1),children:r.jsx(ye,{cluster:l,setIsModal:i})})]})},{s:re,m:Ct}=D.indents,kt=()=>r.jsxs(qe,{$p:`2px ${Ct} ${re} ${re}`,children:[r.jsx(vt,{}),r.jsx(yt,{})]});export{kt as default};
