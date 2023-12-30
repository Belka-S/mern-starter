import{_ as Wt,r as Q,w as rt,x as De,y as zt,z as st,A as Ht,C as Kt,D as Yt,S as Jt,E as Qt,Q as ve,n as he,s as W,t as be,L as Xt,P as b,j as _,G as Ue,u as Ae,H as Zt,I as er,J as tr,K as rr,N as Ie,O as sr,R as ir,T as ie,U as nr,V as or,W as ar,X as lr,e as ur,Y as cr,Z as it,M as dr,$ as fr,F as hr}from"./index-4768b496.js";import{t as gr,c as pr}from"./clusterSchema-28fce383.js";var yr=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],nt=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},Te={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return nt(s,n,o)})||t.some(function(n){return nt(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function vr(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Te.formatCreateLabel:n,y=e.isValidNewOption,f=y===void 0?Te.isValidNewOption:y,v=e.getNewOptionData,$=v===void 0?Te.getNewOptionData:v,C=e.onCreateOption,x=e.options,D=x===void 0?[]:x,k=e.onChange,B=Wt(e,yr),X=B.getOptionValue,te=X===void 0?Ht:X,m=B.getOptionLabel,U=m===void 0?Kt:m,E=B.inputValue,F=B.isLoading,re=B.isMulti,K=B.value,le=B.name,M=Q.useMemo(function(){return f(E,rt(K),D,{getOptionValue:te,getOptionLabel:U})?$(E,u(E)):void 0},[u,$,U,te,E,f,D,K]),Z=Q.useMemo(function(){return(i||!F)&&M?o==="first"?[M].concat(De(D)):[].concat(De(D),[M]):D},[i,o,F,M,D]),z=Q.useCallback(function(V,w){if(w.action!=="select-option")return k(V,w);var S=Array.isArray(V)?V:[V];if(S[S.length-1]===M){if(C)C(E);else{var N=$(E,E),G={action:"create-option",name:le,option:N};k(zt(re,[].concat(De(rt(K)),[N]),N),G)}return}k(V,w)},[$,E,re,le,M,C,k,K]);return st(st({},B),{},{options:Z,onChange:z})}var br=Q.forwardRef(function(e,s){var i=Yt(e),t=vr(i);return Q.createElement(Jt,Qt({ref:s},t))}),xr=br;const mr=async()=>{if(!navigator.clipboard){ve.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ve.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ve.error(e.message)}},bt=he`
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
`;const{colors:R,shadows:wr,indents:Cr,radiuses:ot}=be,xt=he`
  margin: 0 ${Cr.s};
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
`,Vr=W.li`
  ${xt}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${ot.xl};
    border-top-right-radius: ${ot.xl};
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
`,_r=W.li`
  ${xt}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${R.border};
    box-shadow: ${wr.back};
    background-color: ${R.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,mt=he`
  font-size: 16px;

  &:hover {
    color: ${R.hovered};
  }
`,$r=W(Xt)`
  ${mt}

  color: ${R.black};

  font-weight: 500;
`,kr=W.a`
  ${mt}

  color: ${R.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${R.black};
  }
`,wt=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${bt}
  }
`,Ar=W.label`
  ${wt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?R.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?R.yellow:R.border};
  }
  &:hover svg {
    stroke: ${R.placeholder};
  }
`,Sr=W.label`
  ${wt}
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
`,Or=W.button`
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
`,Ct=({group:e})=>_.jsx(Vr,{children:_.jsx("h2",{children:e})});Ct.propTypes={group:b.string};function Fr(e){return Ue({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Lr(e){return Ue({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function Dr(e){return Ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}const Vt=({el:e})=>{const s=Ae(),{_id:i,cluster:t,title:o,favorite:n,checked:u}=e,y=$=>{const C=$.replace("https://","").replace("http://","");return C.length<=30?C:C.substring(0,29).concat("...")},f=()=>{s(tr({_id:i,favorite:!n}))},v=()=>{s(rr({_id:i,checked:!u}))};return _.jsxs(_r,{children:[_.jsxs(Ar,{$hovered:n,children:[_.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:f}),_.jsx(Fr,{size:"18px"})]}),_.jsx($r,{onClick:()=>s(Zt(e)),to:`/element/${i}`,children:o}),_.jsx(kr,{href:t,target:"_blank",rel:"noopener noreferrer",children:y(t)}),_.jsx(Or,{onClick:()=>s(er(i)),children:_.jsx(Lr,{size:"16px"})}),_.jsxs(Sr,{$hovered:u,children:[_.jsx("input",{type:"checkbox",name:"checked",checked:u,onChange:v}),_.jsx(Dr,{size:"15px"})]})]})};Vt.propTypes={el:b.object,$hovered:b.bool};const{colors:Tr,indents:jr,radiuses:Er}=be,Nr=W.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${jr.xl};
  counter-reset: section 0;
  background-color: ${Tr.white};
  border-radius: ${Er.xl};
`,Mr=()=>{const e=Ae(),{allClusters:s,clusterFilter:i,clusterSelect:t,clusterChecked:o}=Ie();Q.useEffect(()=>{e(sr()),e(ir())},[e]);const n=[...s].filter(({cluster:f,title:v,checked:$})=>{const C=f.toLowerCase().includes(i)||v.toLowerCase().includes(i);return o?C&&$!==o:C}).sort((f,v)=>f.title.localeCompare(v.title)),y=Array.from(new Set(n.map(f=>f.group))).sort((f,v)=>f.localeCompare(v)).filter(f=>t?f===t&&f:f);return _.jsx(Nr,{children:y.map(f=>_.jsxs(Q.Fragment,{children:[_.jsx(Ct,{group:f}),n.map(v=>v.group===f&&_.jsx(Vt,{el:v},v._id))]},f))})};var xe=e=>e.type==="checkbox",de=e=>e instanceof Date,I=e=>e==null;const _t=e=>typeof e=="object";var j=e=>!I(e)&&!Array.isArray(e)&&_t(e)&&!de(e),Pr=e=>j(e)&&e.target?xe(e.target)?e.target.checked:e.target.value:e,Rr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Br=(e,s)=>e.has(Rr(s)),Ur=e=>{const s=e.constructor&&e.constructor.prototype;return j(s)&&s.hasOwnProperty("isPrototypeOf")},Ge=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function se(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ge&&(e instanceof Blob||e instanceof FileList))&&(i||j(e)))if(s=i?[]:{},!i&&!Ur(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=se(e[t]));else return e;return s}var me=e=>Array.isArray(e)?e.filter(Boolean):[],T=e=>e===void 0,h=(e,s,i)=>{if(!s||!j(e))return i;const t=me(s.split(/[,[\].]+?/)).reduce((o,n)=>I(o)?o:o[n],e);return T(t)||t===e?T(e[s])?i:e[s]:t};const at={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var Ir=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==H.all&&(s._proxyFormState[u]=!t||H.all),i&&(i[u]=!0),e[u]}});return o},q=e=>j(e)&&!Object.keys(e).length,Gr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return q(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||H.all))},je=e=>Array.isArray(e)?e:[e];function qr(e){const s=ie.useRef(e);s.current=e,ie.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var J=e=>typeof e=="string",Wr=(e,s,i,t,o)=>J(e)?(t&&s.watch.add(e),h(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),h(i,n))):(t&&(s.watchAll=!0),i),qe=e=>/^\w*$/.test(e),$t=e=>me(e.replace(/["|']|\]/g,"").split(/\.|\[/));function A(e,s,i){let t=-1;const o=qe(s)?[s]:$t(s),n=o.length,u=n-1;for(;++t<n;){const y=o[t];let f=i;if(t!==u){const v=e[y];f=j(v)||Array.isArray(v)?v:isNaN(+o[t+1])?{}:[]}e[y]=f,e=e[y]}return e}var kt=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Be=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=h(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else j(u)&&Be(u,s)}}};var lt=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),ut=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),zr=(e,s,i)=>{const t=me(h(e,i));return A(t,"root",s[i]),A(e,i,t),e},fe=e=>typeof e=="boolean",We=e=>e.type==="file",ne=e=>typeof e=="function",Ce=e=>{if(!Ge)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},we=e=>J(e),ze=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const ct={value:!1,isValid:!1},dt={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?dt:{value:e[0].value,isValid:!0}:dt:ct}return ct};const ft={isValid:!1,value:null};var St=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ft):ft;function ht(e,s,i="validate"){if(we(e)||Array.isArray(e)&&e.every(we)||fe(e)&&!e)return{type:i,message:we(e)?e:"",ref:s}}var ce=e=>j(e)&&!Ve(e)?e:{value:e,message:""},gt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:y,maxLength:f,minLength:v,min:$,max:C,pattern:x,validate:D,name:k,valueAsNumber:B,mount:X,disabled:te}=e._f,m=h(s,k);if(!X||te)return{};const U=u?u[0]:n,E=V=>{t&&U.reportValidity&&(U.setCustomValidity(fe(V)?"":V||""),U.reportValidity())},F={},re=ze(n),K=xe(n),le=re||K,M=(B||We(n))&&T(n.value)&&T(m)||Ce(n)&&n.value===""||m===""||Array.isArray(m)&&!m.length,Z=kt.bind(null,k,i,F),z=(V,w,S,N=ee.maxLength,G=ee.minLength)=>{const Y=V?w:S;F[k]={type:V?N:G,message:Y,ref:n,...Z(V?N:G,Y)}};if(o?!Array.isArray(m)||!m.length:y&&(!le&&(M||I(m))||fe(m)&&!m||K&&!At(u).isValid||re&&!St(u).isValid)){const{value:V,message:w}=we(y)?{value:!!y,message:y}:ce(y);if(V&&(F[k]={type:ee.required,message:w,ref:U,...Z(ee.required,w)},!i))return E(w),F}if(!M&&(!I($)||!I(C))){let V,w;const S=ce(C),N=ce($);if(!I(m)&&!isNaN(m)){const G=n.valueAsNumber||m&&+m;I(S.value)||(V=G>S.value),I(N.value)||(w=G<N.value)}else{const G=n.valueAsDate||new Date(m),Y=pe=>new Date(new Date().toDateString()+" "+pe),oe=n.type=="time",ge=n.type=="week";J(S.value)&&m&&(V=oe?Y(m)>Y(S.value):ge?m>S.value:G>new Date(S.value)),J(N.value)&&m&&(w=oe?Y(m)<Y(N.value):ge?m<N.value:G<new Date(N.value))}if((V||w)&&(z(!!V,S.message,N.message,ee.max,ee.min),!i))return E(F[k].message),F}if((f||v)&&!M&&(J(m)||o&&Array.isArray(m))){const V=ce(f),w=ce(v),S=!I(V.value)&&m.length>+V.value,N=!I(w.value)&&m.length<+w.value;if((S||N)&&(z(S,V.message,w.message),!i))return E(F[k].message),F}if(x&&!M&&J(m)){const{value:V,message:w}=ce(x);if(Ve(V)&&!m.match(V)&&(F[k]={type:ee.pattern,message:w,ref:n,...Z(ee.pattern,w)},!i))return E(w),F}if(D){if(ne(D)){const V=await D(m,s),w=ht(V,U);if(w&&(F[k]={...w,...Z(ee.validate,w.message)},!i))return E(w.message),F}else if(j(D)){let V={};for(const w in D){if(!q(V)&&!i)break;const S=ht(await D[w](m,s),U,w);S&&(V={...S,...Z(w,S.message)},E(S.message),i&&(F[k]=V))}if(!q(V)&&(F[k]={ref:U,...V},!i))return F}}return E(!0),F};function Hr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=T(e)?t++:e[s[t++]];return e}function Kr(e){for(const s in e)if(e.hasOwnProperty(s)&&!T(e[s]))return!1;return!0}function P(e,s){const i=Array.isArray(s)?s:qe(s)?[s]:$t(s),t=i.length===1?e:Hr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(j(t)&&q(t)||Array.isArray(t)&&Kr(t))&&P(e,i.slice(0,-1)),e}function Ee(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var _e=e=>I(e)||!_t(e);function ae(e,s){if(_e(e)||_e(s))return e===s;if(de(e)&&de(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(de(n)&&de(u)||j(n)&&j(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var Ot=e=>e.type==="select-multiple",Yr=e=>ze(e)||xe(e),Ne=e=>Ce(e)&&e.isConnected,Ft=e=>{for(const s in e)if(ne(e[s]))return!0;return!1};function $e(e,s={}){const i=Array.isArray(e);if(j(e)||i)for(const t in e)Array.isArray(e[t])||j(e[t])&&!Ft(e[t])?(s[t]=Array.isArray(e[t])?[]:{},$e(e[t],s[t])):I(e[t])||(s[t]=!0);return s}function Lt(e,s,i){const t=Array.isArray(e);if(j(e)||t)for(const o in e)Array.isArray(e[o])||j(e[o])&&!Ft(e[o])?T(s)||_e(i[o])?i[o]=Array.isArray(e[o])?$e(e[o],[]):{...$e(e[o])}:Lt(e[o],I(s)?{}:s[o],i[o]):i[o]=!ae(e[o],s[o]);return i}var Me=(e,s)=>Lt(e,s,$e(s)),Dt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>T(e)?e:s?e===""?NaN:e&&+e:i&&J(e)?new Date(e):t?t(e):e;function Pe(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return We(s)?s.files:ze(s)?St(e.refs).value:Ot(s)?[...s.selectedOptions].map(({value:i})=>i):xe(s)?At(e.refs).value:Dt(T(s.value)?e.ref.value:s.value,e)}var Jr=(e,s,i,t)=>{const o={};for(const n of e){const u=h(s,n);u&&A(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},ye=e=>T(e)?e:Ve(e)?e.source:j(e)?Ve(e.value)?e.value.source:e.value:e,Qr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function pt(e,s,i){const t=h(e,i);if(t||qe(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=h(s,n),y=h(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(y&&y.type)return{name:n,error:y};o.pop()}return{name:i}}var Xr=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,Zr=(e,s)=>!me(h(e,s)).length&&P(e,s);const es={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function ts(e={},s){let i={...es,...e},t={submitCount:0,isDirty:!1,isLoading:ne(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=j(i.defaultValues)||j(i.values)?se(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:se(n),y={action:!1,mount:!1,watch:!1},f={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v,$=0;const C={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},D=e.resetOptions&&e.resetOptions.keepDirtyValues,k=lt(i.mode),B=lt(i.reValidateMode),X=i.criteriaMode===H.all,te=r=>a=>{clearTimeout($),$=setTimeout(r,a)},m=async r=>{if(C.isValid||r){const a=i.resolver?q((await M()).errors):await z(o,!0);a!==t.isValid&&x.state.next({isValid:a})}},U=r=>C.isValidating&&x.state.next({isValidating:r}),E=(r,a=[],l,g,d=!0,c=!0)=>{if(g&&l){if(y.action=!0,c&&Array.isArray(h(o,r))){const p=l(h(o,r),g.argA,g.argB);d&&A(o,r,p)}if(c&&Array.isArray(h(t.errors,r))){const p=l(h(t.errors,r),g.argA,g.argB);d&&A(t.errors,r,p),Zr(t.errors,r)}if(C.touchedFields&&c&&Array.isArray(h(t.touchedFields,r))){const p=l(h(t.touchedFields,r),g.argA,g.argB);d&&A(t.touchedFields,r,p)}C.dirtyFields&&(t.dirtyFields=Me(n,u)),x.state.next({name:r,isDirty:w(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(u,r,a)},F=(r,a)=>{A(t.errors,r,a),x.state.next({errors:t.errors})},re=(r,a,l,g)=>{const d=h(o,r);if(d){const c=h(u,r,T(l)?h(n,r):l);T(c)||g&&g.defaultChecked||a?A(u,r,a?c:Pe(d._f)):G(r,c),y.mount&&m()}},K=(r,a,l,g,d)=>{let c=!1,p=!1;const O={name:r};if(!l||g){C.isDirty&&(p=t.isDirty,t.isDirty=O.isDirty=w(),c=p!==O.isDirty);const L=ae(h(n,r),a);p=h(t.dirtyFields,r),L?P(t.dirtyFields,r):A(t.dirtyFields,r,!0),O.dirtyFields=t.dirtyFields,c=c||C.dirtyFields&&p!==!L}if(l){const L=h(t.touchedFields,r);L||(A(t.touchedFields,r,l),O.touchedFields=t.touchedFields,c=c||C.touchedFields&&L!==l)}return c&&d&&x.state.next(O),c?O:{}},le=(r,a,l,g)=>{const d=h(t.errors,r),c=C.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&l?(v=te(()=>F(r,l)),v(e.delayError)):(clearTimeout($),v=null,l?A(t.errors,r,l):P(t.errors,r)),(l?!ae(d,l):d)||!q(g)||c){const p={...g,...c&&fe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...p},x.state.next(p)}U(!1)},M=async r=>i.resolver(u,i.context,Jr(r||f.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),Z=async r=>{const{errors:a}=await M();if(r)for(const l of r){const g=h(a,l);g?A(t.errors,l,g):P(t.errors,l)}else t.errors=a;return a},z=async(r,a,l={valid:!0})=>{for(const g in r){const d=r[g];if(d){const{_f:c,...p}=d;if(c){const O=f.array.has(c.name),L=await gt(d,u,X,i.shouldUseNativeValidation&&!a,O);if(L[c.name]&&(l.valid=!1,a))break;!a&&(h(L,c.name)?O?zr(t.errors,L,c.name):A(t.errors,c.name,L[c.name]):P(t.errors,c.name))}p&&await z(p,a,l)}}return l.valid},V=()=>{for(const r of f.unMount){const a=h(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Ne(l)):!Ne(a._f.ref))&&Se(r)}f.unMount=new Set},w=(r,a)=>(r&&a&&A(u,r,a),!ae(He(),n)),S=(r,a,l)=>Wr(r,f,{...y.mount?u:T(a)?n:J(r)?{[r]:a}:a},l,a),N=r=>me(h(y.mount?u:n,r,e.shouldUnregister?h(n,r,[]):[])),G=(r,a,l={})=>{const g=h(o,r);let d=a;if(g){const c=g._f;c&&(!c.disabled&&A(u,r,Dt(a,c)),d=Ce(c.ref)&&I(a)?"":a,Ot(c.ref)?[...c.ref.options].forEach(p=>p.selected=d.includes(p.value)):c.refs?xe(c.ref)?c.refs.length>1?c.refs.forEach(p=>(!p.defaultChecked||!p.disabled)&&(p.checked=Array.isArray(d)?!!d.find(O=>O===p.value):d===p.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(p=>p.checked=p.value===d):We(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||x.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&K(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&pe(r)},Y=(r,a,l)=>{for(const g in a){const d=a[g],c=`${r}.${g}`,p=h(o,c);(f.array.has(r)||!_e(d)||p&&!p._f)&&!de(d)?Y(c,d,l):G(c,d,l)}},oe=(r,a,l={})=>{const g=h(o,r),d=f.array.has(r),c=se(a);A(u,r,c),d?(x.array.next({name:r,values:{...u}}),(C.isDirty||C.dirtyFields)&&l.shouldDirty&&x.state.next({name:r,dirtyFields:Me(n,u),isDirty:w(r,c)})):g&&!g._f&&!I(c)?Y(r,c,l):G(r,c,l),ut(r,f)&&x.state.next({...t}),x.values.next({name:r,values:{...u}}),!y.mount&&s()},ge=async r=>{const a=r.target;let l=a.name,g=!0;const d=h(o,l),c=()=>a.type?Pe(d._f):Pr(r);if(d){let p,O;const L=c(),ue=r.type===at.BLUR||r.type===at.FOCUS_OUT,It=!Qr(d._f)&&!i.resolver&&!h(t.errors,l)&&!d._f.deps||Xr(ue,h(t.touchedFields,l),t.isSubmitted,B,k),Fe=ut(l,f,ue);A(u,l,L),ue?(d._f.onBlur&&d._f.onBlur(r),v&&v(0)):d._f.onChange&&d._f.onChange(r);const Le=K(l,L,ue,!1),Gt=!q(Le)||Fe;if(!ue&&x.values.next({name:l,type:r.type,values:{...u}}),It)return C.isValid&&m(),Gt&&x.state.next({name:l,...Fe?{}:Le});if(!ue&&Fe&&x.state.next({...t}),U(!0),i.resolver){const{errors:et}=await M([l]),qt=pt(t.errors,o,l),tt=pt(et,o,qt.name||l);p=tt.error,l=tt.name,O=q(et)}else p=(await gt(d,u,X,i.shouldUseNativeValidation))[l],g=isNaN(L)||L===h(u,l,L),g&&(p?O=!1:C.isValid&&(O=await z(o,!0)));g&&(d._f.deps&&pe(d._f.deps),le(l,O,p,Le))}},pe=async(r,a={})=>{let l,g;const d=je(r);if(U(!0),i.resolver){const c=await Z(T(r)?r:d);l=q(c),g=r?!d.some(p=>h(c,p)):l}else r?(g=(await Promise.all(d.map(async c=>{const p=h(o,c);return await z(p&&p._f?{[c]:p}:p)}))).every(Boolean),!(!g&&!t.isValid)&&m()):g=l=await z(o);return x.state.next({...!J(r)||C.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!g&&Be(o,c=>c&&h(t.errors,c),r?d:f.mount),g},He=r=>{const a={...n,...y.mount?u:{}};return T(r)?a:J(r)?h(a,r):r.map(l=>h(a,l))},Ke=(r,a)=>({invalid:!!h((a||t).errors,r),isDirty:!!h((a||t).dirtyFields,r),isTouched:!!h((a||t).touchedFields,r),error:h((a||t).errors,r)}),Rt=r=>{r&&je(r).forEach(a=>P(t.errors,a)),x.state.next({errors:r?t.errors:{}})},Ye=(r,a,l)=>{const g=(h(o,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...a,ref:g}),x.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},Bt=(r,a)=>ne(r)?x.values.subscribe({next:l=>r(S(void 0,a),l)}):S(r,a,!0),Se=(r,a={})=>{for(const l of r?je(r):f.mount)f.mount.delete(l),f.array.delete(l),a.keepValue||(P(o,l),P(u,l)),!a.keepError&&P(t.errors,l),!a.keepDirty&&P(t.dirtyFields,l),!a.keepTouched&&P(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&P(n,l);x.values.next({values:{...u}}),x.state.next({...t,...a.keepDirty?{isDirty:w()}:{}}),!a.keepIsValid&&m()},Oe=(r,a={})=>{let l=h(o,r);const g=fe(a.disabled);return A(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),f.mount.add(r),l?g&&A(u,r,a.disabled?void 0:h(u,r,Pe(l._f))):re(r,!0,a.value),{...g?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:ye(a.min),max:ye(a.max),minLength:ye(a.minLength),maxLength:ye(a.maxLength),pattern:ye(a.pattern)}:{},name:r,onChange:ge,onBlur:ge,ref:d=>{if(d){Oe(r,a),l=h(o,r);const c=T(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,p=Yr(c),O=l._f.refs||[];if(p?O.find(L=>L===c):c===l._f.ref)return;A(o,r,{_f:{...l._f,...p?{refs:[...O.filter(Ne),c,...Array.isArray(h(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),re(r,!1,void 0,c)}else l=h(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Br(f.array,r)&&y.action)&&f.unMount.add(r)}}},Je=()=>i.shouldFocusError&&Be(o,r=>r&&h(t.errors,r),f.mount),Qe=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=se(u);if(x.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await M();t.errors=d,g=c}else await z(o);P(t.errors,"root"),q(t.errors)?(x.state.next({errors:{}}),await r(g,l)):(a&&await a({...t.errors},l),Je(),setTimeout(Je)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Ut=(r,a={})=>{h(o,r)&&(T(a.defaultValue)?oe(r,h(n,r)):(oe(r,a.defaultValue),A(n,r,a.defaultValue)),a.keepTouched||P(t.touchedFields,r),a.keepDirty||(P(t.dirtyFields,r),t.isDirty=a.defaultValue?w(r,h(n,r)):w()),a.keepError||(P(t.errors,r),C.isValid&&m()),x.state.next({...t}))},Xe=(r,a={})=>{const l=r||n,g=se(l),d=r&&!q(r)?g:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||D)for(const c of f.mount)h(t.dirtyFields,c)?A(d,c,h(u,c)):oe(c,h(d,c));else{if(Ge&&T(r))for(const c of f.mount){const p=h(o,c);if(p&&p._f){const O=Array.isArray(p._f.refs)?p._f.refs[0]:p._f.ref;if(Ce(O)){const L=O.closest("form");if(L){L.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?se(n):{}:se(d),x.array.next({values:{...d}}),x.values.next({values:{...d}})}f={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!y.mount&&s(),y.mount=!C.isValid||!!a.keepIsValid,y.watch=!!e.shouldUnregister,x.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Me(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ze=(r,a)=>Xe(ne(r)?r(u):r,a);return{control:{register:Oe,unregister:Se,getFieldState:Ke,handleSubmit:Qe,setError:Ye,_executeSchema:M,_getWatch:S,_getDirty:w,_updateValid:m,_removeUnmounted:V,_updateFieldArray:E,_getFieldArray:N,_reset:Xe,_resetDefaultValues:()=>ne(i.defaultValues)&&i.defaultValues().then(r=>{Ze(r,i.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:x,_proxyFormState:C,get _fields(){return o},get _formValues(){return u},get _state(){return y},set _state(r){y=r},get _defaultValues(){return n},get _names(){return f},set _names(r){f=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:pe,register:Oe,handleSubmit:Qe,watch:Bt,setValue:oe,getValues:He,reset:Ze,resetField:Ut,clearErrors:Rt,unregister:Se,setError:Ye,setFocus:(r,a={})=>{const l=h(o,r),g=l&&l._f;if(g){const d=g.refs?g.refs[0]:g.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Ke}}function rs(e={}){const s=ie.useRef(),i=ie.useRef(),[t,o]=ie.useState({isDirty:!1,isValidating:!1,isLoading:ne(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ne(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...ts(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,qr({subject:n._subjects.state,next:u=>{Gr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ie.useEffect(()=>{e.values&&!ae(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ie.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Ir(t,n),s.current}var yt=function(e,s,i){if(e&&"reportValidity"in e){var t=h(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Tt=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?yt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return yt(u,o,e)})};for(var t in s.fields)i(t)},ss=function(e,s){s.shouldUseNativeValidation&&Tt(e,s);var i={};for(var t in e){var o=h(s.fields,t);A(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function is(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,y){try{var f=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(v){return n.shouldUseNativeValidation&&Tt({},n),{values:i.raw?t:v,errors:{}}}))}catch(v){return y(v)}return f&&f.then?f.then(void 0,y):f}(0,function(u){if(!u.inner)throw u;return{values:{},errors:ss((y=u,f=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(y.inner||[]).reduce(function(v,$){if(v[$.path]||(v[$.path]={message:$.message,type:$.type}),f){var C=v[$.path].types,x=C&&C[$.type];v[$.path]=kt($.path,f,v,$.type,x?[].concat(x,$.message):$.message)}return v},{})),n)};var y,f}))}catch(u){return Promise.reject(u)}}}const jt=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>_.jsx(nr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});jt.propTypes={$w:b.string,$h:b.string,$s:b.string,onClick:b.func,type:b.string,disabled:b.oneOfType([b.bool,b.number]),children:b.oneOfType([b.string,b.node,b.oneOf(["img","png","svg"])])};const Et=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:y,$oh:f,$ob:v,name:$,value:C,defaultValue:x,placeholder:D="Create / Select...",options:k,onChange:B,isClearable:X,onCreateOption:te,isLoading:m,isDisabled:U})=>_.jsx(xr,{theme:or({$obh:s,$sobh:i}),styles:{...ar({$ol:t,$b:o,$bh:n,$bf:u,$o:y,$oh:f,$ob:v,$obh:s}),...e},name:$,value:C,defaultValue:x,placeholder:D,options:k,onChange:B,isClearable:X,onCreateOption:te,isLoading:m,isDisabled:U});Et.propTypes={styles:b.arrayOf(b.object),$obh:b.string,$sobh:b.string,$ol:b.string,$b:b.string,$bh:b.string,$bf:b.string,$o:b.string,$oh:b.string,$ob:b.string,options:b.arrayOf(b.object),name:b.string,value:b.oneOfType([b.object,b.string]),defaultValue:b.oneOfType([b.object,b.string]),placeholder:b.string,onChange:b.func,isClearable:b.oneOfType([b.object,b.string]),onCreateOption:b.func,isLoading:b.bool,isDisabled:b.bool};const{colors:ke,radiuses:Nt,shadows:ns}=be,os=W.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Nt.m};
  background-color: ${ke.white};
  box-shadow: ${ns.auth};
`,Re=W.label`
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
`,Mt=he`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${ke.border};
  border-radius: ${Nt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${ke.hovered};
  }
`,as=W.input`
  ${Mt}
  ${bt}
`,ls=W.input`
  ${Mt}
`,Pt=({cluster:e,setIsModal:s})=>{var D;const i=Ae(),[t,o]=Q.useState(""),{clusterGroups:n}=Ie(),{register:u,watch:y,handleSubmit:f,formState:{errors:v}}=rs({mode:"onBlur",resolver:is(gr),defaultValues:{cluster:e}}),$=k=>{i(lr({...k,group:t.value})),s(!1)},C=n.map(k=>({value:k.clusterGroup,label:k.clusterGroup})).sort((k,B)=>k.value.localeCompare(B.value)),x=k=>{y("title")?(i(ur({clusterGroup:k})),o({value:k,label:k})):ve.error("Title is required")};return _.jsxs(os,{onSubmit:f($),children:[_.jsxs(Re,{children:[e.length<=39?e:e.substring(0,39)+"...",_.jsx(as,{...u("cluster")})]}),_.jsxs(Re,{children:["Title ",_.jsxs("span",{children:[" ",(D=v.title)==null?void 0:D.message]}),_.jsx(ls,{...u("title")})]}),_.jsxs(Re,{children:["Group",_.jsx(Et,{value:t,options:C,onChange:k=>o(k||""),onCreateOption:x,isClearable:t})]}),_.jsx(jt,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Pt.propTypes={cluster:b.string.isRequired,setIsModal:b.func.isRequired};const{button:vt}=be.shadows,us=()=>{const e=Ae(),[s,i]=Q.useState(!1),[t,o]=Q.useState(""),{clusterChecked:n}=Ie(),u=async f=>{const v=await mr();try{await pr.validate({cluster:v}),o(v),i("add")}catch($){f.target.blur(),ve.error(`Invalid cluster, ${$.message}`)}},y=f=>{e(fr(!n)),f.target.blur()};return _.jsxs(cr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[_.jsx(it,{onClick:y,$s:"m",$bs:vt,children:n?"Show":"Hide"}),_.jsx(it,{onClick:u,$s:"m",$bs:vt,children:"Add"}),s&&_.jsx(dr,{onClick:()=>i(!1),children:_.jsx(Pt,{cluster:t,setIsModal:i})})]})},ps=()=>{const{s:e,m:s}=be.indents;return _.jsxs(hr,{$p:`2px ${s} ${e}`,children:[_.jsx(Mr,{}),_.jsx(us,{})]})};export{ps as default};
