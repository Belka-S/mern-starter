import{_ as Gt,r as Q,w as tt,x as Le,y as qt,z as rt,A as Wt,C as zt,D as Ht,S as Kt,E as Yt,Q as ve,n as he,s as W,t as be,L as Jt,P as v,j as V,G as Be,u as Ue,H as Qt,I as Xt,J as Zt,K as er,N as yt,O as tr,R as rr,T as ie,U as sr,V as ir,W as nr,X as or,e as ar,Y as lr,Z as ur,M as cr,F as dr}from"./index-23526ad3.js";import{t as fr,c as hr}from"./clusterSchema-4281f095.js";var gr=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],st=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},De={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return st(s,n,o)})||t.some(function(n){return st(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function yr(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?De.formatCreateLabel:n,g=e.isValidNewOption,y=g===void 0?De.isValidNewOption:g,$=e.getNewOptionData,k=$===void 0?De.getNewOptionData:$,_=e.onCreateOption,b=e.options,D=b===void 0?[]:b,C=e.onChange,B=Gt(e,gr),X=B.getOptionValue,te=X===void 0?Wt:X,x=B.getOptionLabel,U=x===void 0?zt:x,j=B.inputValue,F=B.isLoading,re=B.isMulti,K=B.value,le=B.name,M=Q.useMemo(function(){return y(j,tt(K),D,{getOptionValue:te,getOptionLabel:U})?k(j,u(j)):void 0},[u,k,U,te,j,y,D,K]),Z=Q.useMemo(function(){return(i||!F)&&M?o==="first"?[M].concat(Le(D)):[].concat(Le(D),[M]):D},[i,o,F,M,D]),z=Q.useCallback(function(w,m){if(m.action!=="select-option")return C(w,m);var O=Array.isArray(w)?w:[w];if(O[O.length-1]===M){if(_)_(j);else{var N=k(j,j),G={action:"create-option",name:le,option:N};C(qt(re,[].concat(Le(tt(K)),[N]),N),G)}return}C(w,m)},[k,j,re,le,M,_,C,K]);return rt(rt({},B),{},{options:Z,onChange:z})}var pr=Q.forwardRef(function(e,s){var i=Ht(e),t=yr(i);return Q.createElement(Kt,Yt({ref:s},t))}),vr=pr;const br=async()=>{if(!navigator.clipboard){ve.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ve.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ve.error(e.message)}},pt=he`
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
`;const{colors:R,shadows:xr,indents:mr,radiuses:it}=be,vt=he`
  margin: 0 ${mr.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr;
  grid-template-areas: '. title title . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${R.borderLight};
`,wr=W.li`
  ${vt}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${it.xl};
    border-top-right-radius: ${it.xl};
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
`,Vr=W.li`
  ${vt}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${R.border};
    box-shadow: ${xr.back};
    background-color: ${R.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,bt=he`
  font-size: 16px;

  &:hover {
    color: ${R.hovered};
  }
`,_r=W(Jt)`
  ${bt}

  color: ${R.black};

  font-weight: 500;
`,Cr=W.a`
  ${bt}

  color: ${R.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${R.black};
  }
`,xt=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${pt}
  }
`,$r=W.label`
  ${xt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?R.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?R.yellow:R.border};
  }
  &:hover svg {
    stroke: ${R.placeholder};
  }
`,kr=W.label`
  ${xt}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${R.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?R.border:"transparent"};
  }
  &:hover svg {
    border-color: ${R.placeholder};
    color: ${({$hovered:e})=>e?R.placeholder:"transparent"};
  }
`,Ar=W.button`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  opacity: 0;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${R.border};
  }
  &:hover svg {
    color: ${R.placeholder};
  }
`,mt=({group:e})=>V.jsx(wr,{children:V.jsx("h2",{children:e})});mt.propTypes={group:v.string};function Or(e){return Be({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Sr(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function Fr(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}const wt=({el:e})=>{const s=Ue(),{_id:i,cluster:t,title:o,favorite:n,checked:u}=e,g=k=>{const _=k.replace("https://","").replace("http://","");return _.length<=30?_:_.substring(0,29).concat("...")},y=()=>{s(Zt({_id:i,favorite:!n}))},$=()=>{s(er({_id:i,checked:!u}))};return V.jsxs(Vr,{children:[V.jsxs($r,{$hovered:n,children:[V.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:y}),V.jsx(Or,{size:"18px"})]}),V.jsx(_r,{onClick:()=>s(Qt(e)),to:`/element/${i}`,children:o}),V.jsx(Cr,{href:t,target:"_blank",rel:"noopener noreferrer",children:g(t)}),V.jsx(Ar,{onClick:()=>s(Xt(i)),children:V.jsx(Sr,{size:"16px"})}),V.jsxs(kr,{$hovered:u,children:[V.jsx("input",{type:"checkbox",name:"checked",checked:u,onChange:$}),V.jsx(Fr,{size:"15px"})]})]})};wt.propTypes={el:v.object,$hovered:v.bool};const{colors:Lr,indents:Dr,radiuses:Tr}=be,Er=W.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${Dr.xl};
  counter-reset: section 0;
  background-color: ${Lr.white};
  border-radius: ${Tr.xl};
`,jr=()=>{const e=Ue(),{allClusters:s,clusterFilter:i,clusterSelect:t}=yt();Q.useEffect(()=>{e(tr()),e(rr())},[e]);const o=[...s].filter(({cluster:g,title:y})=>g.toLowerCase().includes(i)||y.toLowerCase().includes(i)).sort((g,y)=>g.title.localeCompare(y.title)),u=Array.from(new Set(o.map(g=>g.group))).filter(g=>t?g===t&&g:g);return V.jsx(Er,{children:u.map(g=>V.jsxs(Q.Fragment,{children:[V.jsx(mt,{group:g}),o.map(y=>y.group===g&&V.jsx(wt,{el:y},y._id))]},g))})};var xe=e=>e.type==="checkbox",de=e=>e instanceof Date,I=e=>e==null;const Vt=e=>typeof e=="object";var E=e=>!I(e)&&!Array.isArray(e)&&Vt(e)&&!de(e),Nr=e=>E(e)&&e.target?xe(e.target)?e.target.checked:e.target.value:e,Mr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Pr=(e,s)=>e.has(Mr(s)),Rr=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Ie=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function se(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ie&&(e instanceof Blob||e instanceof FileList))&&(i||E(e)))if(s=i?[]:{},!i&&!Rr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=se(e[t]));else return e;return s}var me=e=>Array.isArray(e)?e.filter(Boolean):[],T=e=>e===void 0,f=(e,s,i)=>{if(!s||!E(e))return i;const t=me(s.split(/[,[\].]+?/)).reduce((o,n)=>I(o)?o:o[n],e);return T(t)||t===e?T(e[s])?i:e[s]:t};const nt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var Br=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==H.all&&(s._proxyFormState[u]=!t||H.all),i&&(i[u]=!0),e[u]}});return o},q=e=>E(e)&&!Object.keys(e).length,Ur=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return q(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||H.all))},Te=e=>Array.isArray(e)?e:[e];function Ir(e){const s=ie.useRef(e);s.current=e,ie.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var J=e=>typeof e=="string",Gr=(e,s,i,t,o)=>J(e)?(t&&s.watch.add(e),f(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),f(i,n))):(t&&(s.watchAll=!0),i),Ge=e=>/^\w*$/.test(e),_t=e=>me(e.replace(/["|']|\]/g,"").split(/\.|\[/));function A(e,s,i){let t=-1;const o=Ge(s)?[s]:_t(s),n=o.length,u=n-1;for(;++t<n;){const g=o[t];let y=i;if(t!==u){const $=e[g];y=E($)||Array.isArray($)?$:isNaN(+o[t+1])?{}:[]}e[g]=y,e=e[g]}return e}var Ct=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Re=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else E(u)&&Re(u,s)}}};var ot=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),at=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),qr=(e,s,i)=>{const t=me(f(e,i));return A(t,"root",s[i]),A(e,i,t),e},fe=e=>typeof e=="boolean",qe=e=>e.type==="file",ne=e=>typeof e=="function",Ve=e=>{if(!Ie)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},we=e=>J(e),We=e=>e.type==="radio",_e=e=>e instanceof RegExp;const lt={value:!1,isValid:!1},ut={value:!0,isValid:!0};var $t=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?ut:{value:e[0].value,isValid:!0}:ut:lt}return lt};const ct={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ct):ct;function dt(e,s,i="validate"){if(we(e)||Array.isArray(e)&&e.every(we)||fe(e)&&!e)return{type:i,message:we(e)?e:"",ref:s}}var ce=e=>E(e)&&!_e(e)?e:{value:e,message:""},ft=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:g,maxLength:y,minLength:$,min:k,max:_,pattern:b,validate:D,name:C,valueAsNumber:B,mount:X,disabled:te}=e._f,x=f(s,C);if(!X||te)return{};const U=u?u[0]:n,j=w=>{t&&U.reportValidity&&(U.setCustomValidity(fe(w)?"":w||""),U.reportValidity())},F={},re=We(n),K=xe(n),le=re||K,M=(B||qe(n))&&T(n.value)&&T(x)||Ve(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,Z=Ct.bind(null,C,i,F),z=(w,m,O,N=ee.maxLength,G=ee.minLength)=>{const Y=w?m:O;F[C]={type:w?N:G,message:Y,ref:n,...Z(w?N:G,Y)}};if(o?!Array.isArray(x)||!x.length:g&&(!le&&(M||I(x))||fe(x)&&!x||K&&!$t(u).isValid||re&&!kt(u).isValid)){const{value:w,message:m}=we(g)?{value:!!g,message:g}:ce(g);if(w&&(F[C]={type:ee.required,message:m,ref:U,...Z(ee.required,m)},!i))return j(m),F}if(!M&&(!I(k)||!I(_))){let w,m;const O=ce(_),N=ce(k);if(!I(x)&&!isNaN(x)){const G=n.valueAsNumber||x&&+x;I(O.value)||(w=G>O.value),I(N.value)||(m=G<N.value)}else{const G=n.valueAsDate||new Date(x),Y=ye=>new Date(new Date().toDateString()+" "+ye),oe=n.type=="time",ge=n.type=="week";J(O.value)&&x&&(w=oe?Y(x)>Y(O.value):ge?x>O.value:G>new Date(O.value)),J(N.value)&&x&&(m=oe?Y(x)<Y(N.value):ge?x<N.value:G<new Date(N.value))}if((w||m)&&(z(!!w,O.message,N.message,ee.max,ee.min),!i))return j(F[C].message),F}if((y||$)&&!M&&(J(x)||o&&Array.isArray(x))){const w=ce(y),m=ce($),O=!I(w.value)&&x.length>+w.value,N=!I(m.value)&&x.length<+m.value;if((O||N)&&(z(O,w.message,m.message),!i))return j(F[C].message),F}if(b&&!M&&J(x)){const{value:w,message:m}=ce(b);if(_e(w)&&!x.match(w)&&(F[C]={type:ee.pattern,message:m,ref:n,...Z(ee.pattern,m)},!i))return j(m),F}if(D){if(ne(D)){const w=await D(x,s),m=dt(w,U);if(m&&(F[C]={...m,...Z(ee.validate,m.message)},!i))return j(m.message),F}else if(E(D)){let w={};for(const m in D){if(!q(w)&&!i)break;const O=dt(await D[m](x,s),U,m);O&&(w={...O,...Z(m,O.message)},j(O.message),i&&(F[C]=w))}if(!q(w)&&(F[C]={ref:U,...w},!i))return F}}return j(!0),F};function Wr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=T(e)?t++:e[s[t++]];return e}function zr(e){for(const s in e)if(e.hasOwnProperty(s)&&!T(e[s]))return!1;return!0}function P(e,s){const i=Array.isArray(s)?s:Ge(s)?[s]:_t(s),t=i.length===1?e:Wr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(E(t)&&q(t)||Array.isArray(t)&&zr(t))&&P(e,i.slice(0,-1)),e}function Ee(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ce=e=>I(e)||!Vt(e);function ae(e,s){if(Ce(e)||Ce(s))return e===s;if(de(e)&&de(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(de(n)&&de(u)||E(n)&&E(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var At=e=>e.type==="select-multiple",Hr=e=>We(e)||xe(e),je=e=>Ve(e)&&e.isConnected,Ot=e=>{for(const s in e)if(ne(e[s]))return!0;return!1};function $e(e,s={}){const i=Array.isArray(e);if(E(e)||i)for(const t in e)Array.isArray(e[t])||E(e[t])&&!Ot(e[t])?(s[t]=Array.isArray(e[t])?[]:{},$e(e[t],s[t])):I(e[t])||(s[t]=!0);return s}function St(e,s,i){const t=Array.isArray(e);if(E(e)||t)for(const o in e)Array.isArray(e[o])||E(e[o])&&!Ot(e[o])?T(s)||Ce(i[o])?i[o]=Array.isArray(e[o])?$e(e[o],[]):{...$e(e[o])}:St(e[o],I(s)?{}:s[o],i[o]):i[o]=!ae(e[o],s[o]);return i}var Ne=(e,s)=>St(e,s,$e(s)),Ft=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>T(e)?e:s?e===""?NaN:e&&+e:i&&J(e)?new Date(e):t?t(e):e;function Me(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return qe(s)?s.files:We(s)?kt(e.refs).value:At(s)?[...s.selectedOptions].map(({value:i})=>i):xe(s)?$t(e.refs).value:Ft(T(s.value)?e.ref.value:s.value,e)}var Kr=(e,s,i,t)=>{const o={};for(const n of e){const u=f(s,n);u&&A(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},pe=e=>T(e)?e:_e(e)?e.source:E(e)?_e(e.value)?e.value.source:e.value:e,Yr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ht(e,s,i){const t=f(e,i);if(t||Ge(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=f(s,n),g=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(g&&g.type)return{name:n,error:g};o.pop()}return{name:i}}var Jr=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,Qr=(e,s)=>!me(f(e,s)).length&&P(e,s);const Xr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function Zr(e={},s){let i={...Xr,...e},t={submitCount:0,isDirty:!1,isLoading:ne(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=E(i.defaultValues)||E(i.values)?se(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:se(n),g={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},$,k=0;const _={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Ee(),array:Ee(),state:Ee()},D=e.resetOptions&&e.resetOptions.keepDirtyValues,C=ot(i.mode),B=ot(i.reValidateMode),X=i.criteriaMode===H.all,te=r=>a=>{clearTimeout(k),k=setTimeout(r,a)},x=async r=>{if(_.isValid||r){const a=i.resolver?q((await M()).errors):await z(o,!0);a!==t.isValid&&b.state.next({isValid:a})}},U=r=>_.isValidating&&b.state.next({isValidating:r}),j=(r,a=[],l,h,d=!0,c=!0)=>{if(h&&l){if(g.action=!0,c&&Array.isArray(f(o,r))){const p=l(f(o,r),h.argA,h.argB);d&&A(o,r,p)}if(c&&Array.isArray(f(t.errors,r))){const p=l(f(t.errors,r),h.argA,h.argB);d&&A(t.errors,r,p),Qr(t.errors,r)}if(_.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const p=l(f(t.touchedFields,r),h.argA,h.argB);d&&A(t.touchedFields,r,p)}_.dirtyFields&&(t.dirtyFields=Ne(n,u)),b.state.next({name:r,isDirty:m(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(u,r,a)},F=(r,a)=>{A(t.errors,r,a),b.state.next({errors:t.errors})},re=(r,a,l,h)=>{const d=f(o,r);if(d){const c=f(u,r,T(l)?f(n,r):l);T(c)||h&&h.defaultChecked||a?A(u,r,a?c:Me(d._f)):G(r,c),g.mount&&x()}},K=(r,a,l,h,d)=>{let c=!1,p=!1;const S={name:r};if(!l||h){_.isDirty&&(p=t.isDirty,t.isDirty=S.isDirty=m(),c=p!==S.isDirty);const L=ae(f(n,r),a);p=f(t.dirtyFields,r),L?P(t.dirtyFields,r):A(t.dirtyFields,r,!0),S.dirtyFields=t.dirtyFields,c=c||_.dirtyFields&&p!==!L}if(l){const L=f(t.touchedFields,r);L||(A(t.touchedFields,r,l),S.touchedFields=t.touchedFields,c=c||_.touchedFields&&L!==l)}return c&&d&&b.state.next(S),c?S:{}},le=(r,a,l,h)=>{const d=f(t.errors,r),c=_.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&l?($=te(()=>F(r,l)),$(e.delayError)):(clearTimeout(k),$=null,l?A(t.errors,r,l):P(t.errors,r)),(l?!ae(d,l):d)||!q(h)||c){const p={...h,...c&&fe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...p},b.state.next(p)}U(!1)},M=async r=>i.resolver(u,i.context,Kr(r||y.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),Z=async r=>{const{errors:a}=await M();if(r)for(const l of r){const h=f(a,l);h?A(t.errors,l,h):P(t.errors,l)}else t.errors=a;return a},z=async(r,a,l={valid:!0})=>{for(const h in r){const d=r[h];if(d){const{_f:c,...p}=d;if(c){const S=y.array.has(c.name),L=await ft(d,u,X,i.shouldUseNativeValidation&&!a,S);if(L[c.name]&&(l.valid=!1,a))break;!a&&(f(L,c.name)?S?qr(t.errors,L,c.name):A(t.errors,c.name,L[c.name]):P(t.errors,c.name))}p&&await z(p,a,l)}}return l.valid},w=()=>{for(const r of y.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!je(l)):!je(a._f.ref))&&Ae(r)}y.unMount=new Set},m=(r,a)=>(r&&a&&A(u,r,a),!ae(ze(),n)),O=(r,a,l)=>Gr(r,y,{...g.mount?u:T(a)?n:J(r)?{[r]:a}:a},l,a),N=r=>me(f(g.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),G=(r,a,l={})=>{const h=f(o,r);let d=a;if(h){const c=h._f;c&&(!c.disabled&&A(u,r,Ft(a,c)),d=Ve(c.ref)&&I(a)?"":a,At(c.ref)?[...c.ref.options].forEach(p=>p.selected=d.includes(p.value)):c.refs?xe(c.ref)?c.refs.length>1?c.refs.forEach(p=>(!p.defaultChecked||!p.disabled)&&(p.checked=Array.isArray(d)?!!d.find(S=>S===p.value):d===p.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(p=>p.checked=p.value===d):qe(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||b.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&K(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ye(r)},Y=(r,a,l)=>{for(const h in a){const d=a[h],c=`${r}.${h}`,p=f(o,c);(y.array.has(r)||!Ce(d)||p&&!p._f)&&!de(d)?Y(c,d,l):G(c,d,l)}},oe=(r,a,l={})=>{const h=f(o,r),d=y.array.has(r),c=se(a);A(u,r,c),d?(b.array.next({name:r,values:{...u}}),(_.isDirty||_.dirtyFields)&&l.shouldDirty&&b.state.next({name:r,dirtyFields:Ne(n,u),isDirty:m(r,c)})):h&&!h._f&&!I(c)?Y(r,c,l):G(r,c,l),at(r,y)&&b.state.next({...t}),b.values.next({name:r,values:{...u}}),!g.mount&&s()},ge=async r=>{const a=r.target;let l=a.name,h=!0;const d=f(o,l),c=()=>a.type?Me(d._f):Nr(r);if(d){let p,S;const L=c(),ue=r.type===nt.BLUR||r.type===nt.FOCUS_OUT,Bt=!Yr(d._f)&&!i.resolver&&!f(t.errors,l)&&!d._f.deps||Jr(ue,f(t.touchedFields,l),t.isSubmitted,B,C),Se=at(l,y,ue);A(u,l,L),ue?(d._f.onBlur&&d._f.onBlur(r),$&&$(0)):d._f.onChange&&d._f.onChange(r);const Fe=K(l,L,ue,!1),Ut=!q(Fe)||Se;if(!ue&&b.values.next({name:l,type:r.type,values:{...u}}),Bt)return _.isValid&&x(),Ut&&b.state.next({name:l,...Se?{}:Fe});if(!ue&&Se&&b.state.next({...t}),U(!0),i.resolver){const{errors:Ze}=await M([l]),It=ht(t.errors,o,l),et=ht(Ze,o,It.name||l);p=et.error,l=et.name,S=q(Ze)}else p=(await ft(d,u,X,i.shouldUseNativeValidation))[l],h=isNaN(L)||L===f(u,l,L),h&&(p?S=!1:_.isValid&&(S=await z(o,!0)));h&&(d._f.deps&&ye(d._f.deps),le(l,S,p,Fe))}},ye=async(r,a={})=>{let l,h;const d=Te(r);if(U(!0),i.resolver){const c=await Z(T(r)?r:d);l=q(c),h=r?!d.some(p=>f(c,p)):l}else r?(h=(await Promise.all(d.map(async c=>{const p=f(o,c);return await z(p&&p._f?{[c]:p}:p)}))).every(Boolean),!(!h&&!t.isValid)&&x()):h=l=await z(o);return b.state.next({...!J(r)||_.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!h&&Re(o,c=>c&&f(t.errors,c),r?d:y.mount),h},ze=r=>{const a={...n,...g.mount?u:{}};return T(r)?a:J(r)?f(a,r):r.map(l=>f(a,l))},He=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Mt=r=>{r&&Te(r).forEach(a=>P(t.errors,a)),b.state.next({errors:r?t.errors:{}})},Ke=(r,a,l)=>{const h=(f(o,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...a,ref:h}),b.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},Pt=(r,a)=>ne(r)?b.values.subscribe({next:l=>r(O(void 0,a),l)}):O(r,a,!0),Ae=(r,a={})=>{for(const l of r?Te(r):y.mount)y.mount.delete(l),y.array.delete(l),a.keepValue||(P(o,l),P(u,l)),!a.keepError&&P(t.errors,l),!a.keepDirty&&P(t.dirtyFields,l),!a.keepTouched&&P(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&P(n,l);b.values.next({values:{...u}}),b.state.next({...t,...a.keepDirty?{isDirty:m()}:{}}),!a.keepIsValid&&x()},Oe=(r,a={})=>{let l=f(o,r);const h=fe(a.disabled);return A(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),y.mount.add(r),l?h&&A(u,r,a.disabled?void 0:f(u,r,Me(l._f))):re(r,!0,a.value),{...h?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:pe(a.min),max:pe(a.max),minLength:pe(a.minLength),maxLength:pe(a.maxLength),pattern:pe(a.pattern)}:{},name:r,onChange:ge,onBlur:ge,ref:d=>{if(d){Oe(r,a),l=f(o,r);const c=T(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,p=Hr(c),S=l._f.refs||[];if(p?S.find(L=>L===c):c===l._f.ref)return;A(o,r,{_f:{...l._f,...p?{refs:[...S.filter(je),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),re(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Pr(y.array,r)&&g.action)&&y.unMount.add(r)}}},Ye=()=>i.shouldFocusError&&Re(o,r=>r&&f(t.errors,r),y.mount),Je=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=se(u);if(b.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await M();t.errors=d,h=c}else await z(o);P(t.errors,"root"),q(t.errors)?(b.state.next({errors:{}}),await r(h,l)):(a&&await a({...t.errors},l),Ye(),setTimeout(Ye)),b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Rt=(r,a={})=>{f(o,r)&&(T(a.defaultValue)?oe(r,f(n,r)):(oe(r,a.defaultValue),A(n,r,a.defaultValue)),a.keepTouched||P(t.touchedFields,r),a.keepDirty||(P(t.dirtyFields,r),t.isDirty=a.defaultValue?m(r,f(n,r)):m()),a.keepError||(P(t.errors,r),_.isValid&&x()),b.state.next({...t}))},Qe=(r,a={})=>{const l=r||n,h=se(l),d=r&&!q(r)?h:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||D)for(const c of y.mount)f(t.dirtyFields,c)?A(d,c,f(u,c)):oe(c,f(d,c));else{if(Ie&&T(r))for(const c of y.mount){const p=f(o,c);if(p&&p._f){const S=Array.isArray(p._f.refs)?p._f.refs[0]:p._f.ref;if(Ve(S)){const L=S.closest("form");if(L){L.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?se(n):{}:se(d),b.array.next({values:{...d}}),b.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&s(),g.mount=!_.isValid||!!a.keepIsValid,g.watch=!!e.shouldUnregister,b.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Ne(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Xe=(r,a)=>Qe(ne(r)?r(u):r,a);return{control:{register:Oe,unregister:Ae,getFieldState:He,handleSubmit:Je,setError:Ke,_executeSchema:M,_getWatch:O,_getDirty:m,_updateValid:x,_removeUnmounted:w,_updateFieldArray:j,_getFieldArray:N,_reset:Qe,_resetDefaultValues:()=>ne(i.defaultValues)&&i.defaultValues().then(r=>{Xe(r,i.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:b,_proxyFormState:_,get _fields(){return o},get _formValues(){return u},get _state(){return g},set _state(r){g=r},get _defaultValues(){return n},get _names(){return y},set _names(r){y=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ye,register:Oe,handleSubmit:Je,watch:Pt,setValue:oe,getValues:ze,reset:Xe,resetField:Rt,clearErrors:Mt,unregister:Ae,setError:Ke,setFocus:(r,a={})=>{const l=f(o,r),h=l&&l._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:He}}function es(e={}){const s=ie.useRef(),i=ie.useRef(),[t,o]=ie.useState({isDirty:!1,isValidating:!1,isLoading:ne(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ne(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Zr(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Ir({subject:n._subjects.state,next:u=>{Ur(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ie.useEffect(()=>{e.values&&!ae(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ie.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Br(t,n),s.current}var gt=function(e,s,i){if(e&&"reportValidity"in e){var t=f(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Lt=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?gt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return gt(u,o,e)})};for(var t in s.fields)i(t)},ts=function(e,s){s.shouldUseNativeValidation&&Lt(e,s);var i={};for(var t in e){var o=f(s.fields,t);A(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function rs(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,g){try{var y=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function($){return n.shouldUseNativeValidation&&Lt({},n),{values:i.raw?t:$,errors:{}}}))}catch($){return g($)}return y&&y.then?y.then(void 0,g):y}(0,function(u){if(!u.inner)throw u;return{values:{},errors:ts((g=u,y=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(g.inner||[]).reduce(function($,k){if($[k.path]||($[k.path]={message:k.message,type:k.type}),y){var _=$[k.path].types,b=_&&_[k.type];$[k.path]=Ct(k.path,y,$,k.type,b?[].concat(b,k.message):k.message)}return $},{})),n)};var g,y}))}catch(u){return Promise.reject(u)}}}const Dt=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>V.jsx(sr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Dt.propTypes={$w:v.string,$h:v.string,$s:v.string,onClick:v.func,type:v.string,disabled:v.oneOfType([v.bool,v.number]),children:v.oneOfType([v.string,v.node,v.oneOf(["img","png","svg"])])};const Tt=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:g,$oh:y,$ob:$,name:k,value:_,defaultValue:b,placeholder:D="Create / Select...",options:C,onChange:B,isClearable:X,onCreateOption:te,isLoading:x,isDisabled:U})=>V.jsx(vr,{theme:ir({$obh:s,$sobh:i}),styles:{...nr({$ol:t,$b:o,$bh:n,$bf:u,$o:g,$oh:y,$ob:$,$obh:s}),...e},name:k,value:_,defaultValue:b,placeholder:D,options:C,onChange:B,isClearable:X,onCreateOption:te,isLoading:x,isDisabled:U});Tt.propTypes={styles:v.arrayOf(v.object),$obh:v.string,$sobh:v.string,$ol:v.string,$b:v.string,$bh:v.string,$bf:v.string,$o:v.string,$oh:v.string,$ob:v.string,options:v.arrayOf(v.object),name:v.string,value:v.oneOfType([v.object,v.string]),defaultValue:v.oneOfType([v.object,v.string]),placeholder:v.string,onChange:v.func,isClearable:v.oneOfType([v.object,v.string]),onCreateOption:v.func,isLoading:v.bool,isDisabled:v.bool};const{colors:ke,radiuses:Et,shadows:ss}=be,is=W.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Et.m};
  background-color: ${ke.white};
  box-shadow: ${ss.auth};
`,Pe=W.label`
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
`,jt=he`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${ke.border};
  border-radius: ${Et.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${ke.hovered};
  }
`,ns=W.input`
  ${jt}
  ${pt}
`,os=W.input`
  ${jt}
`,Nt=({cluster:e,setIsModal:s})=>{var D;const i=Ue(),[t,o]=Q.useState(""),{clusterGroups:n}=yt(),{register:u,watch:g,handleSubmit:y,formState:{errors:$}}=es({mode:"onBlur",resolver:rs(fr),defaultValues:{cluster:e}}),k=C=>{i(or({...C,group:t.value})),s(!1)},_=n.map(C=>({value:C.clusterGroup,label:C.clusterGroup})).sort((C,B)=>C.value.localeCompare(B.value)),b=C=>{g("title")?(i(ar({clusterGroup:C})),o({value:C,label:C})):ve.error("Title is required")};return V.jsxs(is,{onSubmit:y(k),children:[V.jsxs(Pe,{children:[e.length<=39?e:e.substring(0,39)+"...",V.jsx(ns,{...u("cluster")})]}),V.jsxs(Pe,{children:["Title ",V.jsxs("span",{children:[" ",(D=$.title)==null?void 0:D.message]}),V.jsx(os,{...u("title")})]}),V.jsxs(Pe,{children:["Group",V.jsx(Tt,{value:t,options:_,onChange:C=>o(C||""),onCreateOption:b,isClearable:t})]}),V.jsx(Dt,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Nt.propTypes={cluster:v.string.isRequired,setIsModal:v.func.isRequired};const{button:as}=be.shadows,ls=()=>{const[e,s]=Q.useState(!1),[i,t]=Q.useState(""),o=async n=>{const u=await br();try{await hr.validate({cluster:u}),t(u),s("add")}catch(g){n.target.blur(),ve.error(`Invalid cluster, ${g.message}`)}};return V.jsxs(lr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr",children:[V.jsx(ur,{name:"add",onClick:o,$s:"m",$bs:as,children:"Add"}),e&&V.jsx(cr,{onClick:()=>s(!1),children:V.jsx(Nt,{cluster:i,setIsModal:s})})]})},gs=()=>{const{s:e,m:s}=be.indents;return V.jsxs(dr,{$p:`2px ${s} ${e}`,children:[V.jsx(jr,{}),V.jsx(ls,{})]})};export{gs as default};
