import{_ as It,r as J,w as tt,x as Le,y as Gt,z as rt,A as qt,C as zt,D as Wt,S as Ht,E as Kt,Q as ye,n as ve,s as Q,t as be,P as b,j as V,G as Be,u as Ue,H as Yt,I as Jt,J as Qt,K as pt,N as Xt,O as Zt,R as ie,T as er,U as tr,V as rr,W as sr,e as ir,X as nr,Y as or,M as ar,F as lr}from"./index-93423610.js";import{t as ur,c as cr}from"./clusterSchema-e96698f1.js";var dr=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],st=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},De={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return st(s,n,o)})||t.some(function(n){return st(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function fr(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?De.formatCreateLabel:n,g=e.isValidNewOption,p=g===void 0?De.isValidNewOption:g,C=e.getNewOptionData,A=C===void 0?De.getNewOptionData:C,$=e.onCreateOption,v=e.options,D=v===void 0?[]:v,_=e.onChange,R=It(e,dr),X=R.getOptionValue,te=X===void 0?qt:X,x=R.getOptionLabel,B=x===void 0?zt:x,E=R.inputValue,F=R.isLoading,re=R.isMulti,H=R.value,le=R.name,M=J.useMemo(function(){return p(E,tt(H),D,{getOptionValue:te,getOptionLabel:B})?A(E,u(E)):void 0},[u,A,B,te,E,p,D,H]),Z=J.useMemo(function(){return(i||!F)&&M?o==="first"?[M].concat(Le(D)):[].concat(Le(D),[M]):D},[i,o,F,M,D]),z=J.useCallback(function(w,m){if(m.action!=="select-option")return _(w,m);var O=Array.isArray(w)?w:[w];if(O[O.length-1]===M){if($)$(E);else{var N=A(E,E),G={action:"create-option",name:le,option:N};_(Gt(re,[].concat(Le(tt(H)),[N]),N),G)}return}_(w,m)},[A,E,re,le,M,$,_,H]);return rt(rt({},R),{},{options:Z,onChange:z})}var hr=J.forwardRef(function(e,s){var i=Wt(e),t=fr(i);return J.createElement(Ht,Kt({ref:s},t))}),gr=hr;const pr=async()=>{if(!navigator.clipboard){ye.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ye.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ye.error(e.message)}},yt=ve`
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
`;ve`
  opacity: 0;
  pointer-events: none;
`;const{colors:U,shadows:yr,indents:vr,radiuses:it}=be,vt=ve`
  margin: 0 ${vr.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr;
  grid-template-areas: '. title title . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${U.borderLight};
`,br=Q.li`
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
`,xr=Q.li`
  ${vt}

  transition: box-shadow 250ms, border-color 250ms;

  // title
  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${U.border};
    box-shadow: ${yr.back};
    background-color: ${U.backgroundHoverd};
  }

  // cluster
  & a {
    font-size: 16px;
    color: ${U.placeholder};

    &::before {
      counter-increment: subsection;
      content: counter(section) '.' counter(subsection) '. ';
      font-size: 14px;
      font-weight: 700;
      color: ${U.black};
    }
  }
  a:hover {
    color: ${U.hovered};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,bt=ve`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${yt}
  }
`,mr=Q.label`
  ${bt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?U.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?U.yellow:U.border};
  }
  &:hover svg {
    stroke: ${U.placeholder};
  }
`,wr=Q.label`
  ${bt}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${U.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?U.border:"transparent"};
  }
  &:hover svg {
    border-color: ${U.placeholder};
    color: ${({$hovered:e})=>e?U.placeholder:"transparent"};
  }
`,Vr=Q.button`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  opacity: 0;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${U.border};
  }
  &:hover svg {
    color: ${U.placeholder};
  }
`,xt=({group:e})=>V.jsx(br,{children:V.jsx("h2",{children:e})});xt.propTypes={group:b.string};function _r(e){return Be({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Cr(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function $r(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}const mt=({el:e})=>{const s=Ue(),{_id:i,cluster:t,title:o,favorite:n,checked:u}=e,g=$=>{const v=$.replace("https://","").replace("http://","");return v.length<=50?v:v.substring(0,49).concat("...")},p=()=>{s(Yt({_id:i,favorite:!n}))},C=()=>{s(Jt({_id:i,checked:!u}))},A=()=>{s(Qt(i))};return V.jsxs(xr,{children:[V.jsxs(mr,{$hovered:n,children:[V.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:p}),V.jsx(_r,{size:"18px"})]}),V.jsx("h3",{children:o}),V.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:g(t)}),V.jsx(Vr,{onClick:A,children:V.jsx(Cr,{size:"16px"})}),V.jsxs(wr,{$hovered:u,children:[V.jsx("input",{type:"checkbox",name:"checked",checked:u,onChange:C}),V.jsx($r,{size:"15px"})]})]})};mt.propTypes={el:b.object,$hovered:b.bool};const{colors:Ar,indents:kr,radiuses:Or}=be,Sr=Q.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${kr.xl};
  counter-reset: section 0;
  background-color: ${Ar.white};
  border-radius: ${Or.xl};
`,Fr=()=>{const e=Ue(),{allClusters:s,clusterFilter:i,clusterSelect:t}=pt();J.useEffect(()=>{e(Xt()),e(Zt())},[e]);const o=[...s].filter(({cluster:g,title:p})=>g.toLowerCase().includes(i)||p.toLowerCase().includes(i)).sort((g,p)=>g.title.localeCompare(p.title)),u=Array.from(new Set(o.map(g=>g.group))).filter(g=>t?g===t&&g:g);return V.jsx(Sr,{children:u.map(g=>V.jsxs(J.Fragment,{children:[V.jsx(xt,{group:g}),o.map(p=>p.group===g&&V.jsx(mt,{el:p},p._id))]},g))})};var xe=e=>e.type==="checkbox",de=e=>e instanceof Date,I=e=>e==null;const wt=e=>typeof e=="object";var j=e=>!I(e)&&!Array.isArray(e)&&wt(e)&&!de(e),Lr=e=>j(e)&&e.target?xe(e.target)?e.target.checked:e.target.value:e,Dr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Tr=(e,s)=>e.has(Dr(s)),jr=e=>{const s=e.constructor&&e.constructor.prototype;return j(s)&&s.hasOwnProperty("isPrototypeOf")},Ie=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function se(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ie&&(e instanceof Blob||e instanceof FileList))&&(i||j(e)))if(s=i?[]:{},!i&&!jr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=se(e[t]));else return e;return s}var me=e=>Array.isArray(e)?e.filter(Boolean):[],T=e=>e===void 0,f=(e,s,i)=>{if(!s||!j(e))return i;const t=me(s.split(/[,[\].]+?/)).reduce((o,n)=>I(o)?o:o[n],e);return T(t)||t===e?T(e[s])?i:e[s]:t};const nt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var Er=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==W.all&&(s._proxyFormState[u]=!t||W.all),i&&(i[u]=!0),e[u]}});return o},q=e=>j(e)&&!Object.keys(e).length,Nr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return q(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||W.all))},Te=e=>Array.isArray(e)?e:[e];function Mr(e){const s=ie.useRef(e);s.current=e,ie.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var Y=e=>typeof e=="string",Pr=(e,s,i,t,o)=>Y(e)?(t&&s.watch.add(e),f(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),f(i,n))):(t&&(s.watchAll=!0),i),Ge=e=>/^\w*$/.test(e),Vt=e=>me(e.replace(/["|']|\]/g,"").split(/\.|\[/));function k(e,s,i){let t=-1;const o=Ge(s)?[s]:Vt(s),n=o.length,u=n-1;for(;++t<n;){const g=o[t];let p=i;if(t!==u){const C=e[g];p=j(C)||Array.isArray(C)?C:isNaN(+o[t+1])?{}:[]}e[g]=p,e=e[g]}return e}var _t=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Re=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else j(u)&&Re(u,s)}}};var ot=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),at=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Rr=(e,s,i)=>{const t=me(f(e,i));return k(t,"root",s[i]),k(e,i,t),e},fe=e=>typeof e=="boolean",qe=e=>e.type==="file",ne=e=>typeof e=="function",Ve=e=>{if(!Ie)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},we=e=>Y(e),ze=e=>e.type==="radio",_e=e=>e instanceof RegExp;const lt={value:!1,isValid:!1},ut={value:!0,isValid:!0};var Ct=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?ut:{value:e[0].value,isValid:!0}:ut:lt}return lt};const ct={isValid:!1,value:null};var $t=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ct):ct;function dt(e,s,i="validate"){if(we(e)||Array.isArray(e)&&e.every(we)||fe(e)&&!e)return{type:i,message:we(e)?e:"",ref:s}}var ce=e=>j(e)&&!_e(e)?e:{value:e,message:""},ft=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:g,maxLength:p,minLength:C,min:A,max:$,pattern:v,validate:D,name:_,valueAsNumber:R,mount:X,disabled:te}=e._f,x=f(s,_);if(!X||te)return{};const B=u?u[0]:n,E=w=>{t&&B.reportValidity&&(B.setCustomValidity(fe(w)?"":w||""),B.reportValidity())},F={},re=ze(n),H=xe(n),le=re||H,M=(R||qe(n))&&T(n.value)&&T(x)||Ve(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,Z=_t.bind(null,_,i,F),z=(w,m,O,N=ee.maxLength,G=ee.minLength)=>{const K=w?m:O;F[_]={type:w?N:G,message:K,ref:n,...Z(w?N:G,K)}};if(o?!Array.isArray(x)||!x.length:g&&(!le&&(M||I(x))||fe(x)&&!x||H&&!Ct(u).isValid||re&&!$t(u).isValid)){const{value:w,message:m}=we(g)?{value:!!g,message:g}:ce(g);if(w&&(F[_]={type:ee.required,message:m,ref:B,...Z(ee.required,m)},!i))return E(m),F}if(!M&&(!I(A)||!I($))){let w,m;const O=ce($),N=ce(A);if(!I(x)&&!isNaN(x)){const G=n.valueAsNumber||x&&+x;I(O.value)||(w=G>O.value),I(N.value)||(m=G<N.value)}else{const G=n.valueAsDate||new Date(x),K=ge=>new Date(new Date().toDateString()+" "+ge),oe=n.type=="time",he=n.type=="week";Y(O.value)&&x&&(w=oe?K(x)>K(O.value):he?x>O.value:G>new Date(O.value)),Y(N.value)&&x&&(m=oe?K(x)<K(N.value):he?x<N.value:G<new Date(N.value))}if((w||m)&&(z(!!w,O.message,N.message,ee.max,ee.min),!i))return E(F[_].message),F}if((p||C)&&!M&&(Y(x)||o&&Array.isArray(x))){const w=ce(p),m=ce(C),O=!I(w.value)&&x.length>+w.value,N=!I(m.value)&&x.length<+m.value;if((O||N)&&(z(O,w.message,m.message),!i))return E(F[_].message),F}if(v&&!M&&Y(x)){const{value:w,message:m}=ce(v);if(_e(w)&&!x.match(w)&&(F[_]={type:ee.pattern,message:m,ref:n,...Z(ee.pattern,m)},!i))return E(m),F}if(D){if(ne(D)){const w=await D(x,s),m=dt(w,B);if(m&&(F[_]={...m,...Z(ee.validate,m.message)},!i))return E(m.message),F}else if(j(D)){let w={};for(const m in D){if(!q(w)&&!i)break;const O=dt(await D[m](x,s),B,m);O&&(w={...O,...Z(m,O.message)},E(O.message),i&&(F[_]=w))}if(!q(w)&&(F[_]={ref:B,...w},!i))return F}}return E(!0),F};function Br(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=T(e)?t++:e[s[t++]];return e}function Ur(e){for(const s in e)if(e.hasOwnProperty(s)&&!T(e[s]))return!1;return!0}function P(e,s){const i=Array.isArray(s)?s:Ge(s)?[s]:Vt(s),t=i.length===1?e:Br(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(j(t)&&q(t)||Array.isArray(t)&&Ur(t))&&P(e,i.slice(0,-1)),e}function je(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ce=e=>I(e)||!wt(e);function ae(e,s){if(Ce(e)||Ce(s))return e===s;if(de(e)&&de(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(de(n)&&de(u)||j(n)&&j(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var At=e=>e.type==="select-multiple",Ir=e=>ze(e)||xe(e),Ee=e=>Ve(e)&&e.isConnected,kt=e=>{for(const s in e)if(ne(e[s]))return!0;return!1};function $e(e,s={}){const i=Array.isArray(e);if(j(e)||i)for(const t in e)Array.isArray(e[t])||j(e[t])&&!kt(e[t])?(s[t]=Array.isArray(e[t])?[]:{},$e(e[t],s[t])):I(e[t])||(s[t]=!0);return s}function Ot(e,s,i){const t=Array.isArray(e);if(j(e)||t)for(const o in e)Array.isArray(e[o])||j(e[o])&&!kt(e[o])?T(s)||Ce(i[o])?i[o]=Array.isArray(e[o])?$e(e[o],[]):{...$e(e[o])}:Ot(e[o],I(s)?{}:s[o],i[o]):i[o]=!ae(e[o],s[o]);return i}var Ne=(e,s)=>Ot(e,s,$e(s)),St=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>T(e)?e:s?e===""?NaN:e&&+e:i&&Y(e)?new Date(e):t?t(e):e;function Me(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return qe(s)?s.files:ze(s)?$t(e.refs).value:At(s)?[...s.selectedOptions].map(({value:i})=>i):xe(s)?Ct(e.refs).value:St(T(s.value)?e.ref.value:s.value,e)}var Gr=(e,s,i,t)=>{const o={};for(const n of e){const u=f(s,n);u&&k(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},pe=e=>T(e)?e:_e(e)?e.source:j(e)?_e(e.value)?e.value.source:e.value:e,qr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ht(e,s,i){const t=f(e,i);if(t||Ge(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=f(s,n),g=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(g&&g.type)return{name:n,error:g};o.pop()}return{name:i}}var zr=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,Wr=(e,s)=>!me(f(e,s)).length&&P(e,s);const Hr={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function Kr(e={},s){let i={...Hr,...e},t={submitCount:0,isDirty:!1,isLoading:ne(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=j(i.defaultValues)||j(i.values)?se(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:se(n),g={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},C,A=0;const $={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:je(),array:je(),state:je()},D=e.resetOptions&&e.resetOptions.keepDirtyValues,_=ot(i.mode),R=ot(i.reValidateMode),X=i.criteriaMode===W.all,te=r=>a=>{clearTimeout(A),A=setTimeout(r,a)},x=async r=>{if($.isValid||r){const a=i.resolver?q((await M()).errors):await z(o,!0);a!==t.isValid&&v.state.next({isValid:a})}},B=r=>$.isValidating&&v.state.next({isValidating:r}),E=(r,a=[],l,h,d=!0,c=!0)=>{if(h&&l){if(g.action=!0,c&&Array.isArray(f(o,r))){const y=l(f(o,r),h.argA,h.argB);d&&k(o,r,y)}if(c&&Array.isArray(f(t.errors,r))){const y=l(f(t.errors,r),h.argA,h.argB);d&&k(t.errors,r,y),Wr(t.errors,r)}if($.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const y=l(f(t.touchedFields,r),h.argA,h.argB);d&&k(t.touchedFields,r,y)}$.dirtyFields&&(t.dirtyFields=Ne(n,u)),v.state.next({name:r,isDirty:m(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else k(u,r,a)},F=(r,a)=>{k(t.errors,r,a),v.state.next({errors:t.errors})},re=(r,a,l,h)=>{const d=f(o,r);if(d){const c=f(u,r,T(l)?f(n,r):l);T(c)||h&&h.defaultChecked||a?k(u,r,a?c:Me(d._f)):G(r,c),g.mount&&x()}},H=(r,a,l,h,d)=>{let c=!1,y=!1;const S={name:r};if(!l||h){$.isDirty&&(y=t.isDirty,t.isDirty=S.isDirty=m(),c=y!==S.isDirty);const L=ae(f(n,r),a);y=f(t.dirtyFields,r),L?P(t.dirtyFields,r):k(t.dirtyFields,r,!0),S.dirtyFields=t.dirtyFields,c=c||$.dirtyFields&&y!==!L}if(l){const L=f(t.touchedFields,r);L||(k(t.touchedFields,r,l),S.touchedFields=t.touchedFields,c=c||$.touchedFields&&L!==l)}return c&&d&&v.state.next(S),c?S:{}},le=(r,a,l,h)=>{const d=f(t.errors,r),c=$.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&l?(C=te(()=>F(r,l)),C(e.delayError)):(clearTimeout(A),C=null,l?k(t.errors,r,l):P(t.errors,r)),(l?!ae(d,l):d)||!q(h)||c){const y={...h,...c&&fe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...y},v.state.next(y)}B(!1)},M=async r=>i.resolver(u,i.context,Gr(r||p.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),Z=async r=>{const{errors:a}=await M();if(r)for(const l of r){const h=f(a,l);h?k(t.errors,l,h):P(t.errors,l)}else t.errors=a;return a},z=async(r,a,l={valid:!0})=>{for(const h in r){const d=r[h];if(d){const{_f:c,...y}=d;if(c){const S=p.array.has(c.name),L=await ft(d,u,X,i.shouldUseNativeValidation&&!a,S);if(L[c.name]&&(l.valid=!1,a))break;!a&&(f(L,c.name)?S?Rr(t.errors,L,c.name):k(t.errors,c.name,L[c.name]):P(t.errors,c.name))}y&&await z(y,a,l)}}return l.valid},w=()=>{for(const r of p.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Ee(l)):!Ee(a._f.ref))&&ke(r)}p.unMount=new Set},m=(r,a)=>(r&&a&&k(u,r,a),!ae(We(),n)),O=(r,a,l)=>Pr(r,p,{...g.mount?u:T(a)?n:Y(r)?{[r]:a}:a},l,a),N=r=>me(f(g.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),G=(r,a,l={})=>{const h=f(o,r);let d=a;if(h){const c=h._f;c&&(!c.disabled&&k(u,r,St(a,c)),d=Ve(c.ref)&&I(a)?"":a,At(c.ref)?[...c.ref.options].forEach(y=>y.selected=d.includes(y.value)):c.refs?xe(c.ref)?c.refs.length>1?c.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(d)?!!d.find(S=>S===y.value):d===y.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(y=>y.checked=y.value===d):qe(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||v.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&H(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ge(r)},K=(r,a,l)=>{for(const h in a){const d=a[h],c=`${r}.${h}`,y=f(o,c);(p.array.has(r)||!Ce(d)||y&&!y._f)&&!de(d)?K(c,d,l):G(c,d,l)}},oe=(r,a,l={})=>{const h=f(o,r),d=p.array.has(r),c=se(a);k(u,r,c),d?(v.array.next({name:r,values:{...u}}),($.isDirty||$.dirtyFields)&&l.shouldDirty&&v.state.next({name:r,dirtyFields:Ne(n,u),isDirty:m(r,c)})):h&&!h._f&&!I(c)?K(r,c,l):G(r,c,l),at(r,p)&&v.state.next({...t}),v.values.next({name:r,values:{...u}}),!g.mount&&s()},he=async r=>{const a=r.target;let l=a.name,h=!0;const d=f(o,l),c=()=>a.type?Me(d._f):Lr(r);if(d){let y,S;const L=c(),ue=r.type===nt.BLUR||r.type===nt.FOCUS_OUT,Rt=!qr(d._f)&&!i.resolver&&!f(t.errors,l)&&!d._f.deps||zr(ue,f(t.touchedFields,l),t.isSubmitted,R,_),Se=at(l,p,ue);k(u,l,L),ue?(d._f.onBlur&&d._f.onBlur(r),C&&C(0)):d._f.onChange&&d._f.onChange(r);const Fe=H(l,L,ue,!1),Bt=!q(Fe)||Se;if(!ue&&v.values.next({name:l,type:r.type,values:{...u}}),Rt)return $.isValid&&x(),Bt&&v.state.next({name:l,...Se?{}:Fe});if(!ue&&Se&&v.state.next({...t}),B(!0),i.resolver){const{errors:Ze}=await M([l]),Ut=ht(t.errors,o,l),et=ht(Ze,o,Ut.name||l);y=et.error,l=et.name,S=q(Ze)}else y=(await ft(d,u,X,i.shouldUseNativeValidation))[l],h=isNaN(L)||L===f(u,l,L),h&&(y?S=!1:$.isValid&&(S=await z(o,!0)));h&&(d._f.deps&&ge(d._f.deps),le(l,S,y,Fe))}},ge=async(r,a={})=>{let l,h;const d=Te(r);if(B(!0),i.resolver){const c=await Z(T(r)?r:d);l=q(c),h=r?!d.some(y=>f(c,y)):l}else r?(h=(await Promise.all(d.map(async c=>{const y=f(o,c);return await z(y&&y._f?{[c]:y}:y)}))).every(Boolean),!(!h&&!t.isValid)&&x()):h=l=await z(o);return v.state.next({...!Y(r)||$.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!h&&Re(o,c=>c&&f(t.errors,c),r?d:p.mount),h},We=r=>{const a={...n,...g.mount?u:{}};return T(r)?a:Y(r)?f(a,r):r.map(l=>f(a,l))},He=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Nt=r=>{r&&Te(r).forEach(a=>P(t.errors,a)),v.state.next({errors:r?t.errors:{}})},Ke=(r,a,l)=>{const h=(f(o,r,{_f:{}})._f||{}).ref;k(t.errors,r,{...a,ref:h}),v.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},Mt=(r,a)=>ne(r)?v.values.subscribe({next:l=>r(O(void 0,a),l)}):O(r,a,!0),ke=(r,a={})=>{for(const l of r?Te(r):p.mount)p.mount.delete(l),p.array.delete(l),a.keepValue||(P(o,l),P(u,l)),!a.keepError&&P(t.errors,l),!a.keepDirty&&P(t.dirtyFields,l),!a.keepTouched&&P(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&P(n,l);v.values.next({values:{...u}}),v.state.next({...t,...a.keepDirty?{isDirty:m()}:{}}),!a.keepIsValid&&x()},Oe=(r,a={})=>{let l=f(o,r);const h=fe(a.disabled);return k(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),p.mount.add(r),l?h&&k(u,r,a.disabled?void 0:f(u,r,Me(l._f))):re(r,!0,a.value),{...h?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:pe(a.min),max:pe(a.max),minLength:pe(a.minLength),maxLength:pe(a.maxLength),pattern:pe(a.pattern)}:{},name:r,onChange:he,onBlur:he,ref:d=>{if(d){Oe(r,a),l=f(o,r);const c=T(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,y=Ir(c),S=l._f.refs||[];if(y?S.find(L=>L===c):c===l._f.ref)return;k(o,r,{_f:{...l._f,...y?{refs:[...S.filter(Ee),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),re(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Tr(p.array,r)&&g.action)&&p.unMount.add(r)}}},Ye=()=>i.shouldFocusError&&Re(o,r=>r&&f(t.errors,r),p.mount),Je=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=se(u);if(v.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await M();t.errors=d,h=c}else await z(o);P(t.errors,"root"),q(t.errors)?(v.state.next({errors:{}}),await r(h,l)):(a&&await a({...t.errors},l),Ye(),setTimeout(Ye)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Pt=(r,a={})=>{f(o,r)&&(T(a.defaultValue)?oe(r,f(n,r)):(oe(r,a.defaultValue),k(n,r,a.defaultValue)),a.keepTouched||P(t.touchedFields,r),a.keepDirty||(P(t.dirtyFields,r),t.isDirty=a.defaultValue?m(r,f(n,r)):m()),a.keepError||(P(t.errors,r),$.isValid&&x()),v.state.next({...t}))},Qe=(r,a={})=>{const l=r||n,h=se(l),d=r&&!q(r)?h:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||D)for(const c of p.mount)f(t.dirtyFields,c)?k(d,c,f(u,c)):oe(c,f(d,c));else{if(Ie&&T(r))for(const c of p.mount){const y=f(o,c);if(y&&y._f){const S=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(Ve(S)){const L=S.closest("form");if(L){L.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?se(n):{}:se(d),v.array.next({values:{...d}}),v.values.next({values:{...d}})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&s(),g.mount=!$.isValid||!!a.keepIsValid,g.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Ne(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Xe=(r,a)=>Qe(ne(r)?r(u):r,a);return{control:{register:Oe,unregister:ke,getFieldState:He,handleSubmit:Je,setError:Ke,_executeSchema:M,_getWatch:O,_getDirty:m,_updateValid:x,_removeUnmounted:w,_updateFieldArray:E,_getFieldArray:N,_reset:Qe,_resetDefaultValues:()=>ne(i.defaultValues)&&i.defaultValues().then(r=>{Xe(r,i.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:v,_proxyFormState:$,get _fields(){return o},get _formValues(){return u},get _state(){return g},set _state(r){g=r},get _defaultValues(){return n},get _names(){return p},set _names(r){p=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ge,register:Oe,handleSubmit:Je,watch:Mt,setValue:oe,getValues:We,reset:Xe,resetField:Pt,clearErrors:Nt,unregister:ke,setError:Ke,setFocus:(r,a={})=>{const l=f(o,r),h=l&&l._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:He}}function Yr(e={}){const s=ie.useRef(),i=ie.useRef(),[t,o]=ie.useState({isDirty:!1,isValidating:!1,isLoading:ne(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ne(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Kr(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Mr({subject:n._subjects.state,next:u=>{Nr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ie.useEffect(()=>{e.values&&!ae(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ie.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Er(t,n),s.current}var gt=function(e,s,i){if(e&&"reportValidity"in e){var t=f(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Ft=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?gt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return gt(u,o,e)})};for(var t in s.fields)i(t)},Jr=function(e,s){s.shouldUseNativeValidation&&Ft(e,s);var i={};for(var t in e){var o=f(s.fields,t);k(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function Qr(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,g){try{var p=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(C){return n.shouldUseNativeValidation&&Ft({},n),{values:i.raw?t:C,errors:{}}}))}catch(C){return g(C)}return p&&p.then?p.then(void 0,g):p}(0,function(u){if(!u.inner)throw u;return{values:{},errors:Jr((g=u,p=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(g.inner||[]).reduce(function(C,A){if(C[A.path]||(C[A.path]={message:A.message,type:A.type}),p){var $=C[A.path].types,v=$&&$[A.type];C[A.path]=_t(A.path,p,C,A.type,v?[].concat(v,A.message):A.message)}return C},{})),n)};var g,p}))}catch(u){return Promise.reject(u)}}}const Lt=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>V.jsx(er,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Lt.propTypes={$w:b.string,$h:b.string,$s:b.string,onClick:b.func,type:b.string,disabled:b.oneOfType([b.bool,b.number]),children:b.oneOfType([b.string,b.node,b.oneOf(["img","png","svg"])])};const Dt=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:g,$oh:p,$ob:C,name:A,value:$,defaultValue:v,placeholder:D="Create / Select...",options:_,onChange:R,isClearable:X,onCreateOption:te,isLoading:x,isDisabled:B})=>V.jsx(gr,{theme:tr({$obh:s,$sobh:i}),styles:{...rr({$ol:t,$b:o,$bh:n,$bf:u,$o:g,$oh:p,$ob:C,$obh:s}),...e},name:A,value:$,defaultValue:v,placeholder:D,options:_,onChange:R,isClearable:X,onCreateOption:te,isLoading:x,isDisabled:B});Dt.propTypes={styles:b.arrayOf(b.object),$obh:b.string,$sobh:b.string,$ol:b.string,$b:b.string,$bh:b.string,$bf:b.string,$o:b.string,$oh:b.string,$ob:b.string,options:b.arrayOf(b.object),name:b.string,value:b.oneOfType([b.object,b.string]),defaultValue:b.oneOfType([b.object,b.string]),placeholder:b.string,onChange:b.func,isClearable:b.oneOfType([b.object,b.string]),onCreateOption:b.func,isLoading:b.bool,isDisabled:b.bool};const{colors:Ae,radiuses:Tt,shadows:Xr}=be,Zr=Q.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Tt.m};
  background-color: ${Ae.white};
  box-shadow: ${Xr.auth};
`,Pe=Q.label`
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
    color: ${Ae.error};
  }
`,jt=ve`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${Ae.border};
  border-radius: ${Tt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${Ae.hovered};
  }
`,es=Q.input`
  ${jt}
  ${yt}
`,ts=Q.input`
  ${jt}
`,Et=({cluster:e,setIsModal:s})=>{var D;const i=Ue(),[t,o]=J.useState(""),{clusterGroups:n}=pt(),{register:u,watch:g,handleSubmit:p,formState:{errors:C}}=Yr({mode:"onBlur",resolver:Qr(ur),defaultValues:{cluster:e}}),A=_=>{i(sr({..._,group:t.value})),s(!1)},$=n.map(_=>({value:_.clusterGroup,label:_.clusterGroup})).sort((_,R)=>_.value.localeCompare(R.value)),v=_=>{g("title")?(i(ir({clusterGroup:_})),o({value:_,label:_})):ye.error("Title is required")};return V.jsxs(Zr,{onSubmit:p(A),children:[V.jsxs(Pe,{children:[e.length<=39?e:e.substring(0,39)+"...",V.jsx(es,{...u("cluster")})]}),V.jsxs(Pe,{children:["Title ",V.jsxs("span",{children:[" ",(D=C.title)==null?void 0:D.message]}),V.jsx(ts,{...u("title")})]}),V.jsxs(Pe,{children:["Group",V.jsx(Dt,{value:t,options:$,onChange:_=>o(_||""),onCreateOption:v,isClearable:t})]}),V.jsx(Lt,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Et.propTypes={cluster:b.string.isRequired,setIsModal:b.func.isRequired};const{button:rs}=be.shadows,ss=()=>{const[e,s]=J.useState(!1),[i,t]=J.useState(""),o=async n=>{const u=await pr();try{await cr.validate({cluster:u}),t(u),s("add")}catch(g){n.target.blur(),ye.error(`Invalid cluster, ${g.message}`)}};return V.jsxs(nr,{$m:"10px 30px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr",children:[V.jsx(or,{name:"add",onClick:o,$s:"m",$bs:rs,children:"Add"}),e&&V.jsx(ar,{onClick:()=>s(!1),children:V.jsx(Et,{cluster:i,setIsModal:s})})]})},us=()=>{const{s:e,m:s}=be.indents;return V.jsxs(lr,{$p:`2px ${s} ${e}`,children:[V.jsx(Fr,{}),V.jsx(ss,{})]})};export{us as default};
