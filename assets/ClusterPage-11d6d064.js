import{_ as zt,r as X,w as it,x as De,y as Ht,z as nt,A as Kt,C as Yt,D as Jt,S as Qt,E as Xt,Q as ve,n as he,s as z,t as be,L as Zt,P as b,j as V,G as qe,u as Ae,H as Se,I as er,J as tr,K as rr,N as sr,O as ir,R as bt,T as ie,U as nr,V as or,W as ar,X as lr,e as ur,Y as cr,Z as Ee,M as dr,$ as fr,a0 as hr,a1 as pr,a2 as gr,F as yr}from"./index-9466ebd9.js";import{t as vr,c as br}from"./clusterSchema-da398108.js";var xr=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],ot=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},je={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return ot(s,n,o)})||t.some(function(n){return ot(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function mr(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?je.formatCreateLabel:n,v=e.isValidNewOption,f=v===void 0?je.isValidNewOption:v,x=e.getNewOptionData,k=x===void 0?je.getNewOptionData:x,_=e.onCreateOption,g=e.options,A=g===void 0?[]:g,m=e.onChange,F=zt(e,xr),I=F.getOptionValue,te=I===void 0?Kt:I,w=F.getOptionLabel,U=w===void 0?Yt:w,N=F.inputValue,T=F.isLoading,re=F.isMulti,Y=F.value,le=F.name,P=X.useMemo(function(){return f(N,it(Y),A,{getOptionValue:te,getOptionLabel:U})?k(N,u(N)):void 0},[u,k,U,te,N,f,A,Y]),Z=X.useMemo(function(){return(i||!T)&&P?o==="first"?[P].concat(De(A)):[].concat(De(A),[P]):A},[i,o,T,P,A]),H=X.useCallback(function($,C){if(C.action!=="select-option")return m($,C);var O=Array.isArray($)?$:[$];if(O[O.length-1]===P){if(_)_(N);else{var M=k(N,N),q={action:"create-option",name:le,option:M};m(Ht(re,[].concat(De(it(Y)),[M]),M),q)}return}m($,C)},[k,N,re,le,P,_,m,Y]);return nt(nt({},F),{},{options:Z,onChange:H})}var wr=X.forwardRef(function(e,s){var i=Jt(e),t=mr(i);return X.createElement(Qt,Xt({ref:s},t))}),Cr=wr;const Vr=async()=>{if(!navigator.clipboard){ve.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ve.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ve.error(e.message)}},xt=he`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
`;he`
  opacity: 0;
  pointer-events: none;
`;const{colors:B,shadows:_r,indents:$r,radiuses:at}=be,mt=he`
  margin: 0 ${$r.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr;
  grid-template-areas: '. title title . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${B.borderLight};
`,kr=z.li`
  ${mt}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${at.xl};
    border-top-right-radius: ${at.xl};
  }

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
`,Ar=z.li`
  ${mt}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${B.border};
    box-shadow: ${_r.back};
    background-color: ${B.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,wt=he`
  font-size: 16px;

  &:hover {
    color: ${B.hovered};
  }
`,Sr=z(Zt)`
  ${wt}

  color: ${B.black};

  font-weight: 500;
`,Or=z.a`
  ${wt}

  color: ${B.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${B.black};
  }
`,Ct=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${xt}
  }
`,Fr=z.label`
  ${Ct}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?B.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?B.yellow:B.border};
  }
  &:hover svg {
    stroke: ${B.placeholder};
  }
`,Lr=z.label`
  ${Ct}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${B.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?B.border:"transparent"};
  }
  &:hover svg {
    border-color: ${B.placeholder};
    color: ${({$hovered:e})=>e?B.placeholder:"transparent"};
  }
`,Tr=z.button`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${B.border};
  }
  &:hover svg {
    color: ${B.placeholder};
  }
`,Vt=({group:e})=>V.jsx(kr,{children:V.jsx("h2",{children:e})});Vt.propTypes={group:b.string};function Dr(e){return qe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Er(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function jr(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}const _t=({el:e})=>{const s=Ae(),{clusterTrash:i}=Se(),{_id:t,cluster:o,title:n,favorite:u,checked:v}=e,f=i.find(m=>m._id===t),x=m=>{const F=m.replace("https://","").replace("http://","");return F.length<=30?F:F.substring(0,29).concat("...")},k=()=>{s(er({_id:t,favorite:!u}))},_=()=>s(tr(e)),g=()=>{s(rr({_id:t,checked:!v}))},A=()=>s(sr(e));return V.jsxs(Ar,{children:[V.jsxs(Fr,{$hovered:u,children:[V.jsx("input",{type:"checkbox",name:"favorite",checked:u,onChange:k}),V.jsx(Dr,{size:"18px"})]}),V.jsx(Sr,{onClick:_,to:`/element/${t}`,children:n}),V.jsx(Or,{href:o,target:"_blank",rel:"noopener noreferrer",children:x(o)}),V.jsx(Tr,{$hovered:f,onClick:A,children:V.jsx(Er,{size:"16px"})}),V.jsxs(Lr,{$hovered:v,children:[V.jsx("input",{type:"checkbox",name:"checked",checked:v,onChange:g}),V.jsx(jr,{size:"15px"})]})]})};_t.propTypes={el:b.object,$hovered:b.bool};const{colors:Nr,indents:Mr,radiuses:Pr}=be,Rr=z.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${Mr.xl};
  counter-reset: section 0;
  background-color: ${Nr.white};
  border-radius: ${Pr.xl};
`,Br=()=>{const e=Ae(),{allClusters:s,clusterFilter:i,clusterSelect:t,clusterChecked:o}=Se();X.useEffect(()=>{e(ir()),e(bt())},[e]);const n=[...s].filter(({cluster:f,title:x,checked:k})=>{const _=f.toLowerCase().includes(i)||x.toLowerCase().includes(i);return o?_&&k!==o:_}).sort((f,x)=>f.title.localeCompare(x.title)),v=Array.from(new Set(n.map(f=>f.group))).sort((f,x)=>f.localeCompare(x)).filter(f=>t?f===t&&f:f);return V.jsx(Rr,{children:v.map(f=>V.jsxs(X.Fragment,{children:[V.jsx(Vt,{group:f}),n.map(x=>x.group===f&&V.jsx(_t,{el:x},x._id))]},f))})};var xe=e=>e.type==="checkbox",de=e=>e instanceof Date,G=e=>e==null;const $t=e=>typeof e=="object";var j=e=>!G(e)&&!Array.isArray(e)&&$t(e)&&!de(e),Ur=e=>j(e)&&e.target?xe(e.target)?e.target.checked:e.target.value:e,Gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ir=(e,s)=>e.has(Gr(s)),qr=e=>{const s=e.constructor&&e.constructor.prototype;return j(s)&&s.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function se(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(i||j(e)))if(s=i?[]:{},!i&&!qr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=se(e[t]));else return e;return s}var me=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,h=(e,s,i)=>{if(!s||!j(e))return i;const t=me(s.split(/[,[\].]+?/)).reduce((o,n)=>G(o)?o:o[n],e);return E(t)||t===e?E(e[s])?i:e[s]:t};const lt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var Wr=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==K.all&&(s._proxyFormState[u]=!t||K.all),i&&(i[u]=!0),e[u]}});return o},W=e=>j(e)&&!Object.keys(e).length,zr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return W(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||K.all))},Ne=e=>Array.isArray(e)?e:[e];function Hr(e){const s=ie.useRef(e);s.current=e,ie.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var Q=e=>typeof e=="string",Kr=(e,s,i,t,o)=>Q(e)?(t&&s.watch.add(e),h(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),h(i,n))):(t&&(s.watchAll=!0),i),ze=e=>/^\w*$/.test(e),kt=e=>me(e.replace(/["|']|\]/g,"").split(/\.|\[/));function S(e,s,i){let t=-1;const o=ze(s)?[s]:kt(s),n=o.length,u=n-1;for(;++t<n;){const v=o[t];let f=i;if(t!==u){const x=e[v];f=j(x)||Array.isArray(x)?x:isNaN(+o[t+1])?{}:[]}e[v]=f,e=e[v]}return e}var At=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Ie=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=h(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else j(u)&&Ie(u,s)}}};var ut=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),ct=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Yr=(e,s,i)=>{const t=me(h(e,i));return S(t,"root",s[i]),S(e,i,t),e},fe=e=>typeof e=="boolean",He=e=>e.type==="file",ne=e=>typeof e=="function",Ce=e=>{if(!We)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},we=e=>Q(e),Ke=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const dt={value:!1,isValid:!1},ft={value:!0,isValid:!0};var St=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?ft:{value:e[0].value,isValid:!0}:ft:dt}return dt};const ht={isValid:!1,value:null};var Ot=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ht):ht;function pt(e,s,i="validate"){if(we(e)||Array.isArray(e)&&e.every(we)||fe(e)&&!e)return{type:i,message:we(e)?e:"",ref:s}}var ce=e=>j(e)&&!Ve(e)?e:{value:e,message:""},gt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:v,maxLength:f,minLength:x,min:k,max:_,pattern:g,validate:A,name:m,valueAsNumber:F,mount:I,disabled:te}=e._f,w=h(s,m);if(!I||te)return{};const U=u?u[0]:n,N=$=>{t&&U.reportValidity&&(U.setCustomValidity(fe($)?"":$||""),U.reportValidity())},T={},re=Ke(n),Y=xe(n),le=re||Y,P=(F||He(n))&&E(n.value)&&E(w)||Ce(n)&&n.value===""||w===""||Array.isArray(w)&&!w.length,Z=At.bind(null,m,i,T),H=($,C,O,M=ee.maxLength,q=ee.minLength)=>{const J=$?C:O;T[m]={type:$?M:q,message:J,ref:n,...Z($?M:q,J)}};if(o?!Array.isArray(w)||!w.length:v&&(!le&&(P||G(w))||fe(w)&&!w||Y&&!St(u).isValid||re&&!Ot(u).isValid)){const{value:$,message:C}=we(v)?{value:!!v,message:v}:ce(v);if($&&(T[m]={type:ee.required,message:C,ref:U,...Z(ee.required,C)},!i))return N(C),T}if(!P&&(!G(k)||!G(_))){let $,C;const O=ce(_),M=ce(k);if(!G(w)&&!isNaN(w)){const q=n.valueAsNumber||w&&+w;G(O.value)||($=q>O.value),G(M.value)||(C=q<M.value)}else{const q=n.valueAsDate||new Date(w),J=ge=>new Date(new Date().toDateString()+" "+ge),oe=n.type=="time",pe=n.type=="week";Q(O.value)&&w&&($=oe?J(w)>J(O.value):pe?w>O.value:q>new Date(O.value)),Q(M.value)&&w&&(C=oe?J(w)<J(M.value):pe?w<M.value:q<new Date(M.value))}if(($||C)&&(H(!!$,O.message,M.message,ee.max,ee.min),!i))return N(T[m].message),T}if((f||x)&&!P&&(Q(w)||o&&Array.isArray(w))){const $=ce(f),C=ce(x),O=!G($.value)&&w.length>+$.value,M=!G(C.value)&&w.length<+C.value;if((O||M)&&(H(O,$.message,C.message),!i))return N(T[m].message),T}if(g&&!P&&Q(w)){const{value:$,message:C}=ce(g);if(Ve($)&&!w.match($)&&(T[m]={type:ee.pattern,message:C,ref:n,...Z(ee.pattern,C)},!i))return N(C),T}if(A){if(ne(A)){const $=await A(w,s),C=pt($,U);if(C&&(T[m]={...C,...Z(ee.validate,C.message)},!i))return N(C.message),T}else if(j(A)){let $={};for(const C in A){if(!W($)&&!i)break;const O=pt(await A[C](w,s),U,C);O&&($={...O,...Z(C,O.message)},N(O.message),i&&(T[m]=$))}if(!W($)&&(T[m]={ref:U,...$},!i))return T}}return N(!0),T};function Jr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=E(e)?t++:e[s[t++]];return e}function Qr(e){for(const s in e)if(e.hasOwnProperty(s)&&!E(e[s]))return!1;return!0}function R(e,s){const i=Array.isArray(s)?s:ze(s)?[s]:kt(s),t=i.length===1?e:Jr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(j(t)&&W(t)||Array.isArray(t)&&Qr(t))&&R(e,i.slice(0,-1)),e}function Me(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var _e=e=>G(e)||!$t(e);function ae(e,s){if(_e(e)||_e(s))return e===s;if(de(e)&&de(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(de(n)&&de(u)||j(n)&&j(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var Ft=e=>e.type==="select-multiple",Xr=e=>Ke(e)||xe(e),Pe=e=>Ce(e)&&e.isConnected,Lt=e=>{for(const s in e)if(ne(e[s]))return!0;return!1};function $e(e,s={}){const i=Array.isArray(e);if(j(e)||i)for(const t in e)Array.isArray(e[t])||j(e[t])&&!Lt(e[t])?(s[t]=Array.isArray(e[t])?[]:{},$e(e[t],s[t])):G(e[t])||(s[t]=!0);return s}function Tt(e,s,i){const t=Array.isArray(e);if(j(e)||t)for(const o in e)Array.isArray(e[o])||j(e[o])&&!Lt(e[o])?E(s)||_e(i[o])?i[o]=Array.isArray(e[o])?$e(e[o],[]):{...$e(e[o])}:Tt(e[o],G(s)?{}:s[o],i[o]):i[o]=!ae(e[o],s[o]);return i}var Re=(e,s)=>Tt(e,s,$e(s)),Dt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>E(e)?e:s?e===""?NaN:e&&+e:i&&Q(e)?new Date(e):t?t(e):e;function Be(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return He(s)?s.files:Ke(s)?Ot(e.refs).value:Ft(s)?[...s.selectedOptions].map(({value:i})=>i):xe(s)?St(e.refs).value:Dt(E(s.value)?e.ref.value:s.value,e)}var Zr=(e,s,i,t)=>{const o={};for(const n of e){const u=h(s,n);u&&S(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},ye=e=>E(e)?e:Ve(e)?e.source:j(e)?Ve(e.value)?e.value.source:e.value:e,es=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function yt(e,s,i){const t=h(e,i);if(t||ze(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=h(s,n),v=h(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(v&&v.type)return{name:n,error:v};o.pop()}return{name:i}}var ts=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,rs=(e,s)=>!me(h(e,s)).length&&R(e,s);const ss={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function is(e={},s){let i={...ss,...e},t={submitCount:0,isDirty:!1,isLoading:ne(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=j(i.defaultValues)||j(i.values)?se(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:se(n),v={action:!1,mount:!1,watch:!1},f={mount:new Set,unMount:new Set,array:new Set,watch:new Set},x,k=0;const _={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Me(),array:Me(),state:Me()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,m=ut(i.mode),F=ut(i.reValidateMode),I=i.criteriaMode===K.all,te=r=>a=>{clearTimeout(k),k=setTimeout(r,a)},w=async r=>{if(_.isValid||r){const a=i.resolver?W((await P()).errors):await H(o,!0);a!==t.isValid&&g.state.next({isValid:a})}},U=r=>_.isValidating&&g.state.next({isValidating:r}),N=(r,a=[],l,p,d=!0,c=!0)=>{if(p&&l){if(v.action=!0,c&&Array.isArray(h(o,r))){const y=l(h(o,r),p.argA,p.argB);d&&S(o,r,y)}if(c&&Array.isArray(h(t.errors,r))){const y=l(h(t.errors,r),p.argA,p.argB);d&&S(t.errors,r,y),rs(t.errors,r)}if(_.touchedFields&&c&&Array.isArray(h(t.touchedFields,r))){const y=l(h(t.touchedFields,r),p.argA,p.argB);d&&S(t.touchedFields,r,y)}_.dirtyFields&&(t.dirtyFields=Re(n,u)),g.state.next({name:r,isDirty:C(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else S(u,r,a)},T=(r,a)=>{S(t.errors,r,a),g.state.next({errors:t.errors})},re=(r,a,l,p)=>{const d=h(o,r);if(d){const c=h(u,r,E(l)?h(n,r):l);E(c)||p&&p.defaultChecked||a?S(u,r,a?c:Be(d._f)):q(r,c),v.mount&&w()}},Y=(r,a,l,p,d)=>{let c=!1,y=!1;const L={name:r};if(!l||p){_.isDirty&&(y=t.isDirty,t.isDirty=L.isDirty=C(),c=y!==L.isDirty);const D=ae(h(n,r),a);y=h(t.dirtyFields,r),D?R(t.dirtyFields,r):S(t.dirtyFields,r,!0),L.dirtyFields=t.dirtyFields,c=c||_.dirtyFields&&y!==!D}if(l){const D=h(t.touchedFields,r);D||(S(t.touchedFields,r,l),L.touchedFields=t.touchedFields,c=c||_.touchedFields&&D!==l)}return c&&d&&g.state.next(L),c?L:{}},le=(r,a,l,p)=>{const d=h(t.errors,r),c=_.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&l?(x=te(()=>T(r,l)),x(e.delayError)):(clearTimeout(k),x=null,l?S(t.errors,r,l):R(t.errors,r)),(l?!ae(d,l):d)||!W(p)||c){const y={...p,...c&&fe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...y},g.state.next(y)}U(!1)},P=async r=>i.resolver(u,i.context,Zr(r||f.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),Z=async r=>{const{errors:a}=await P();if(r)for(const l of r){const p=h(a,l);p?S(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},H=async(r,a,l={valid:!0})=>{for(const p in r){const d=r[p];if(d){const{_f:c,...y}=d;if(c){const L=f.array.has(c.name),D=await gt(d,u,I,i.shouldUseNativeValidation&&!a,L);if(D[c.name]&&(l.valid=!1,a))break;!a&&(h(D,c.name)?L?Yr(t.errors,D,c.name):S(t.errors,c.name,D[c.name]):R(t.errors,c.name))}y&&await H(y,a,l)}}return l.valid},$=()=>{for(const r of f.unMount){const a=h(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Pe(l)):!Pe(a._f.ref))&&Oe(r)}f.unMount=new Set},C=(r,a)=>(r&&a&&S(u,r,a),!ae(Ye(),n)),O=(r,a,l)=>Kr(r,f,{...v.mount?u:E(a)?n:Q(r)?{[r]:a}:a},l,a),M=r=>me(h(v.mount?u:n,r,e.shouldUnregister?h(n,r,[]):[])),q=(r,a,l={})=>{const p=h(o,r);let d=a;if(p){const c=p._f;c&&(!c.disabled&&S(u,r,Dt(a,c)),d=Ce(c.ref)&&G(a)?"":a,Ft(c.ref)?[...c.ref.options].forEach(y=>y.selected=d.includes(y.value)):c.refs?xe(c.ref)?c.refs.length>1?c.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(d)?!!d.find(L=>L===y.value):d===y.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(y=>y.checked=y.value===d):He(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||g.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&Y(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ge(r)},J=(r,a,l)=>{for(const p in a){const d=a[p],c=`${r}.${p}`,y=h(o,c);(f.array.has(r)||!_e(d)||y&&!y._f)&&!de(d)?J(c,d,l):q(c,d,l)}},oe=(r,a,l={})=>{const p=h(o,r),d=f.array.has(r),c=se(a);S(u,r,c),d?(g.array.next({name:r,values:{...u}}),(_.isDirty||_.dirtyFields)&&l.shouldDirty&&g.state.next({name:r,dirtyFields:Re(n,u),isDirty:C(r,c)})):p&&!p._f&&!G(c)?J(r,c,l):q(r,c,l),ct(r,f)&&g.state.next({...t}),g.values.next({name:r,values:{...u}}),!v.mount&&s()},pe=async r=>{const a=r.target;let l=a.name,p=!0;const d=h(o,l),c=()=>a.type?Be(d._f):Ur(r);if(d){let y,L;const D=c(),ue=r.type===lt.BLUR||r.type===lt.FOCUS_OUT,It=!es(d._f)&&!i.resolver&&!h(t.errors,l)&&!d._f.deps||ts(ue,h(t.touchedFields,l),t.isSubmitted,F,m),Le=ct(l,f,ue);S(u,l,D),ue?(d._f.onBlur&&d._f.onBlur(r),x&&x(0)):d._f.onChange&&d._f.onChange(r);const Te=Y(l,D,ue,!1),qt=!W(Te)||Le;if(!ue&&g.values.next({name:l,type:r.type,values:{...u}}),It)return _.isValid&&w(),qt&&g.state.next({name:l,...Le?{}:Te});if(!ue&&Le&&g.state.next({...t}),U(!0),i.resolver){const{errors:rt}=await P([l]),Wt=yt(t.errors,o,l),st=yt(rt,o,Wt.name||l);y=st.error,l=st.name,L=W(rt)}else y=(await gt(d,u,I,i.shouldUseNativeValidation))[l],p=isNaN(D)||D===h(u,l,D),p&&(y?L=!1:_.isValid&&(L=await H(o,!0)));p&&(d._f.deps&&ge(d._f.deps),le(l,L,y,Te))}},ge=async(r,a={})=>{let l,p;const d=Ne(r);if(U(!0),i.resolver){const c=await Z(E(r)?r:d);l=W(c),p=r?!d.some(y=>h(c,y)):l}else r?(p=(await Promise.all(d.map(async c=>{const y=h(o,c);return await H(y&&y._f?{[c]:y}:y)}))).every(Boolean),!(!p&&!t.isValid)&&w()):p=l=await H(o);return g.state.next({...!Q(r)||_.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&Ie(o,c=>c&&h(t.errors,c),r?d:f.mount),p},Ye=r=>{const a={...n,...v.mount?u:{}};return E(r)?a:Q(r)?h(a,r):r.map(l=>h(a,l))},Je=(r,a)=>({invalid:!!h((a||t).errors,r),isDirty:!!h((a||t).dirtyFields,r),isTouched:!!h((a||t).touchedFields,r),error:h((a||t).errors,r)}),Bt=r=>{r&&Ne(r).forEach(a=>R(t.errors,a)),g.state.next({errors:r?t.errors:{}})},Qe=(r,a,l)=>{const p=(h(o,r,{_f:{}})._f||{}).ref;S(t.errors,r,{...a,ref:p}),g.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Ut=(r,a)=>ne(r)?g.values.subscribe({next:l=>r(O(void 0,a),l)}):O(r,a,!0),Oe=(r,a={})=>{for(const l of r?Ne(r):f.mount)f.mount.delete(l),f.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&R(n,l);g.values.next({values:{...u}}),g.state.next({...t,...a.keepDirty?{isDirty:C()}:{}}),!a.keepIsValid&&w()},Fe=(r,a={})=>{let l=h(o,r);const p=fe(a.disabled);return S(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),f.mount.add(r),l?p&&S(u,r,a.disabled?void 0:h(u,r,Be(l._f))):re(r,!0,a.value),{...p?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:ye(a.min),max:ye(a.max),minLength:ye(a.minLength),maxLength:ye(a.maxLength),pattern:ye(a.pattern)}:{},name:r,onChange:pe,onBlur:pe,ref:d=>{if(d){Fe(r,a),l=h(o,r);const c=E(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,y=Xr(c),L=l._f.refs||[];if(y?L.find(D=>D===c):c===l._f.ref)return;S(o,r,{_f:{...l._f,...y?{refs:[...L.filter(Pe),c,...Array.isArray(h(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),re(r,!1,void 0,c)}else l=h(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Ir(f.array,r)&&v.action)&&f.unMount.add(r)}}},Xe=()=>i.shouldFocusError&&Ie(o,r=>r&&h(t.errors,r),f.mount),Ze=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=se(u);if(g.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await P();t.errors=d,p=c}else await H(o);R(t.errors,"root"),W(t.errors)?(g.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),Xe(),setTimeout(Xe)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:W(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Gt=(r,a={})=>{h(o,r)&&(E(a.defaultValue)?oe(r,h(n,r)):(oe(r,a.defaultValue),S(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?C(r,h(n,r)):C()),a.keepError||(R(t.errors,r),_.isValid&&w()),g.state.next({...t}))},et=(r,a={})=>{const l=r||n,p=se(l),d=r&&!W(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of f.mount)h(t.dirtyFields,c)?S(d,c,h(u,c)):oe(c,h(d,c));else{if(We&&E(r))for(const c of f.mount){const y=h(o,c);if(y&&y._f){const L=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(Ce(L)){const D=L.closest("form");if(D){D.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?se(n):{}:se(d),g.array.next({values:{...d}}),g.values.next({values:{...d}})}f={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!v.mount&&s(),v.mount=!_.isValid||!!a.keepIsValid,v.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Re(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},tt=(r,a)=>et(ne(r)?r(u):r,a);return{control:{register:Fe,unregister:Oe,getFieldState:Je,handleSubmit:Ze,setError:Qe,_executeSchema:P,_getWatch:O,_getDirty:C,_updateValid:w,_removeUnmounted:$,_updateFieldArray:N,_getFieldArray:M,_reset:et,_resetDefaultValues:()=>ne(i.defaultValues)&&i.defaultValues().then(r=>{tt(r,i.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:g,_proxyFormState:_,get _fields(){return o},get _formValues(){return u},get _state(){return v},set _state(r){v=r},get _defaultValues(){return n},get _names(){return f},set _names(r){f=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ge,register:Fe,handleSubmit:Ze,watch:Ut,setValue:oe,getValues:Ye,reset:tt,resetField:Gt,clearErrors:Bt,unregister:Oe,setError:Qe,setFocus:(r,a={})=>{const l=h(o,r),p=l&&l._f;if(p){const d=p.refs?p.refs[0]:p.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Je}}function ns(e={}){const s=ie.useRef(),i=ie.useRef(),[t,o]=ie.useState({isDirty:!1,isValidating:!1,isLoading:ne(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ne(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...is(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Hr({subject:n._subjects.state,next:u=>{zr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ie.useEffect(()=>{e.values&&!ae(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ie.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Wr(t,n),s.current}var vt=function(e,s,i){if(e&&"reportValidity"in e){var t=h(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Et=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?vt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return vt(u,o,e)})};for(var t in s.fields)i(t)},os=function(e,s){s.shouldUseNativeValidation&&Et(e,s);var i={};for(var t in e){var o=h(s.fields,t);S(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function as(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,v){try{var f=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(x){return n.shouldUseNativeValidation&&Et({},n),{values:i.raw?t:x,errors:{}}}))}catch(x){return v(x)}return f&&f.then?f.then(void 0,v):f}(0,function(u){if(!u.inner)throw u;return{values:{},errors:os((v=u,f=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(v.inner||[]).reduce(function(x,k){if(x[k.path]||(x[k.path]={message:k.message,type:k.type}),f){var _=x[k.path].types,g=_&&_[k.type];x[k.path]=At(k.path,f,x,k.type,g?[].concat(g,k.message):k.message)}return x},{})),n)};var v,f}))}catch(u){return Promise.reject(u)}}}const jt=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>V.jsx(nr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});jt.propTypes={$w:b.string,$h:b.string,$s:b.string,onClick:b.func,type:b.string,disabled:b.oneOfType([b.bool,b.number]),children:b.oneOfType([b.string,b.node,b.oneOf(["img","png","svg"])])};const Nt=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:v,$oh:f,$ob:x,name:k,value:_,defaultValue:g,placeholder:A="Create / Select...",options:m,onChange:F,isClearable:I,onCreateOption:te,isLoading:w,isDisabled:U})=>V.jsx(Cr,{theme:or({$obh:s,$sobh:i}),styles:{...ar({$ol:t,$b:o,$bh:n,$bf:u,$o:v,$oh:f,$ob:x,$obh:s}),...e},name:k,value:_,defaultValue:g,placeholder:A,options:m,onChange:F,isClearable:I,onCreateOption:te,isLoading:w,isDisabled:U});Nt.propTypes={styles:b.arrayOf(b.object),$obh:b.string,$sobh:b.string,$ol:b.string,$b:b.string,$bh:b.string,$bf:b.string,$o:b.string,$oh:b.string,$ob:b.string,options:b.arrayOf(b.object),name:b.string,value:b.oneOfType([b.object,b.string]),defaultValue:b.oneOfType([b.object,b.string]),placeholder:b.string,onChange:b.func,isClearable:b.oneOfType([b.object,b.string]),onCreateOption:b.func,isLoading:b.bool,isDisabled:b.bool};const{colors:ke,radiuses:Mt,shadows:ls}=be,us=z.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Mt.m};
  background-color: ${ke.white};
  box-shadow: ${ls.auth};
`,Ue=z.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:first-of-type {
    font-size: 18px;
    font-weight: 700;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${ke.error};
  }
`,Pt=he`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${ke.border};
  border-radius: ${Mt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${ke.hovered};
  }
`,cs=z.input`
  ${Pt}
  ${xt}
`,ds=z.input`
  ${Pt}
`,Rt=({cluster:e,setIsModal:s})=>{var A;const i=Ae(),[t,o]=X.useState(""),{clusterGroups:n}=Se(),{register:u,watch:v,handleSubmit:f,formState:{errors:x}}=ns({mode:"onBlur",resolver:as(vr),defaultValues:{cluster:e}}),k=m=>{i(lr({...m,group:t.value})),s(!1)},_=n.map(m=>({value:m.clusterGroup,label:m.clusterGroup})).sort((m,F)=>m.value.localeCompare(F.value)),g=m=>{v("title")?(i(ur({clusterGroup:m})),o({value:m,label:m})):ve.error("Title is required")};return V.jsxs(us,{onSubmit:f(k),children:[V.jsxs(Ue,{children:[e.length<=39?e:e.substring(0,39)+"...",V.jsx(cs,{...u("cluster")})]}),V.jsxs(Ue,{children:["Title ",V.jsxs("span",{children:[" ",(A=x.title)==null?void 0:A.message]}),V.jsx(ds,{...u("title")})]}),V.jsxs(Ue,{children:["Group",V.jsx(Nt,{value:t,options:_,onChange:m=>o(m||""),onCreateOption:g,isClearable:t})]}),V.jsx(jt,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Rt.propTypes={cluster:b.string.isRequired,setIsModal:b.func.isRequired};const{button:Ge}=be.shadows,fs=()=>{const e=Ae(),[s,i]=X.useState(!1),[t,o]=X.useState(""),{clusterChecked:n,clusterTrash:u,clusterGroups:v}=Se(),f=u.length>0,x=async g=>{const A=await Vr();try{await br.validate({cluster:A}),o(A),i("add")}catch(m){g.target.blur(),ve.error(`Invalid cluster, ${m.message}`)}},k=g=>{e(fr(!n)),g.target.blur()},_=async()=>{await u.forEach(A=>e(hr(A._id))),e(pr());const g=[];await e(bt()).unwrap().then(A=>{const{clusters:m}=A.result,F=Array.from(new Set(m.map(I=>I.group)));v.forEach(I=>{F.includes(I.clusterGroup)||g.push(I._id)})}),g.forEach(A=>e(gr(A)))};return V.jsxs(cr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr 1fr",children:[f?V.jsx(Ee,{onClick:_,$s:"m",$bs:Ge,children:"Delete"}):V.jsx("span",{}),V.jsx(Ee,{onClick:k,$s:"m",$bs:Ge,children:n?"Show":"Hide"}),V.jsx(Ee,{onClick:x,$s:"m",$bs:Ge,children:"Add"}),s&&V.jsx(dr,{onClick:()=>i(!1),children:V.jsx(Rt,{cluster:t,setIsModal:i})})]})},bs=()=>{const{s:e,m:s}=be.indents;return V.jsxs(yr,{$p:`2px ${s} ${e}`,children:[V.jsx(Br,{}),V.jsx(fs,{})]})};export{bs as default};
