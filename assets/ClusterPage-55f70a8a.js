import{_ as ir,r as Y,w as lt,x as Ee,y as nr,z as ut,A as or,C as ar,D as lr,S as ur,E as cr,Q as he,n as le,s as H,t as xe,L as dr,P as w,j as b,G as Fe,R as ie,H as fr,I as hr,J as pr,u as me,K as we,N as qe,O as We,T as Ct,e as Vt,M as $t,U as gr,V as yr,W as vr,X as br,Y as xr,Z as Me,$ as mr,a0 as wr,a1 as Cr,F as Vr}from"./index-d00fc128.js";import{t as _t,c as $r}from"./clusterSchema-e252b099.js";var _r=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],ct=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},Ne={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return ct(s,n,o)})||t.some(function(n){return ct(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function kr(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ne.formatCreateLabel:n,x=e.isValidNewOption,d=x===void 0?Ne.isValidNewOption:x,m=e.getNewOptionData,_=m===void 0?Ne.getNewOptionData:m,V=e.onCreateOption,y=e.options,A=y===void 0?[]:y,C=e.onChange,L=ir(e,_r),M=L.getOptionValue,I=M===void 0?or:M,g=L.getOptionLabel,D=g===void 0?ar:g,T=L.inputValue,F=L.isLoading,X=L.isMulti,q=L.value,ue=L.name,G=Y.useMemo(function(){return d(T,lt(q),A,{getOptionValue:I,getOptionLabel:D})?_(T,u(T)):void 0},[u,_,D,I,T,d,A,q]),te=Y.useMemo(function(){return(i||!F)&&G?o==="first"?[G].concat(Ee(A)):[].concat(Ee(A),[G]):A},[i,o,F,G,A]),J=Y.useCallback(function(k,$){if($.action!=="select-option")return C(k,$);var O=Array.isArray(k)?k:[k];if(O[O.length-1]===G){if(V)V(T);else{var B=_(T,T),W={action:"create-option",name:ue,option:B};C(nr(X,[].concat(Ee(lt(q)),[B]),B),W)}return}C(k,$)},[_,T,X,ue,G,V,C,q]);return ut(ut({},L),{},{options:te,onChange:J})}var Ar=Y.forwardRef(function(e,s){var i=lr(e),t=kr(i);return Y.createElement(ur,cr({ref:s},t))}),Sr=Ar;const Or=async()=>{if(!navigator.clipboard){he.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&he.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){he.error(e.message)}},kt=le`
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
`;le`
  opacity: 0;
  pointer-events: none;
`;const{colors:U,shadows:Fr,indents:Lr,radiuses:dt}=xe,At=le`
  margin: 0 ${Lr.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr 1fr;
  grid-template-areas: '. title title . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${U.borderLight};
`,Tr=H.li`
  ${At}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${dt.xl};
    border-top-right-radius: ${dt.xl};
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
`,jr=H.li`
  ${At}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${U.border};
    box-shadow: ${Fr.back};
    background-color: ${U.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,St=le`
  font-size: 16px;

  &:hover {
    color: ${U.hovered};
  }
`,Dr=H(dr)`
  ${St}

  color: ${U.black};

  font-weight: 500;
`,Er=H.a`
  ${St}

  color: ${U.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${U.black};
  }
`,Ot=le`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${kt}
  }
`,Mr=H.label`
  ${Ot}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?U.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?U.yellow:U.border};
  }
  &:hover svg {
    stroke: ${U.placeholder};
  }
`,Nr=H.label`
  ${Ot}
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
`,Ft=le`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${U.border};
  }
  &:hover svg {
    color: ${U.placeholder};
  }
`,Pr=H.button`
  ${Ft}

  opacity: ${({$hovered:e})=>e?1:0};
`,Br=H.button`
  ${Ft}

  opacity:0;
`,Lt=({group:e})=>b.jsx(Tr,{children:b.jsx("h2",{children:e})});Lt.propTypes={group:w.string};function Gr(e){return Fe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Rr(e){return Fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Ur(e){return Fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function Ir(e){return Fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}var Ce=e=>e.type==="checkbox",fe=e=>e instanceof Date,z=e=>e==null;const Tt=e=>typeof e=="object";var P=e=>!z(e)&&!Array.isArray(e)&&Tt(e)&&!fe(e),qr=e=>P(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,zr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Wr=(e,s)=>e.has(zr(s)),Hr=e=>{const s=e.constructor&&e.constructor.prototype;return P(s)&&s.hasOwnProperty("isPrototypeOf")},He=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function se(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(He&&(e instanceof Blob||e instanceof FileList))&&(i||P(e)))if(s=i?[]:{},!i&&!Hr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=se(e[t]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,h=(e,s,i)=>{if(!s||!P(e))return i;const t=Ve(s.split(/[,[\].]+?/)).reduce((o,n)=>z(o)?o:o[n],e);return N(t)||t===e?N(e[s])?i:e[s]:t};const ft={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},re={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var Kr=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==Q.all&&(s._proxyFormState[u]=!t||Q.all),i&&(i[u]=!0),e[u]}});return o},K=e=>P(e)&&!Object.keys(e).length,Yr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return K(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||Q.all))},Pe=e=>Array.isArray(e)?e:[e];function Jr(e){const s=ie.useRef(e);s.current=e,ie.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var ee=e=>typeof e=="string",Qr=(e,s,i,t,o)=>ee(e)?(t&&s.watch.add(e),h(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),h(i,n))):(t&&(s.watchAll=!0),i),Ke=e=>/^\w*$/.test(e),jt=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/));function S(e,s,i){let t=-1;const o=Ke(s)?[s]:jt(s),n=o.length,u=n-1;for(;++t<n;){const x=o[t];let d=i;if(t!==u){const m=e[x];d=P(m)||Array.isArray(m)?m:isNaN(+o[t+1])?{}:[]}e[x]=d,e=e[x]}return e}var Dt=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const ze=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=h(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else P(u)&&ze(u,s)}}};var ht=e=>({isOnSubmit:!e||e===Q.onSubmit,isOnBlur:e===Q.onBlur,isOnChange:e===Q.onChange,isOnAll:e===Q.all,isOnTouch:e===Q.onTouched}),pt=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Xr=(e,s,i)=>{const t=Ve(h(e,i));return S(t,"root",s[i]),S(e,i,t),e},pe=e=>typeof e=="boolean",Ye=e=>e.type==="file",ne=e=>typeof e=="function",_e=e=>{if(!He)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},$e=e=>ee(e),Je=e=>e.type==="radio",ke=e=>e instanceof RegExp;const gt={value:!1,isValid:!1},yt={value:!0,isValid:!0};var Et=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?yt:{value:e[0].value,isValid:!0}:yt:gt}return gt};const vt={isValid:!1,value:null};var Mt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,vt):vt;function bt(e,s,i="validate"){if($e(e)||Array.isArray(e)&&e.every($e)||pe(e)&&!e)return{type:i,message:$e(e)?e:"",ref:s}}var de=e=>P(e)&&!ke(e)?e:{value:e,message:""},xt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:x,maxLength:d,minLength:m,min:_,max:V,pattern:y,validate:A,name:C,valueAsNumber:L,mount:M,disabled:I}=e._f,g=h(s,C);if(!M||I)return{};const D=u?u[0]:n,T=k=>{t&&D.reportValidity&&(D.setCustomValidity(pe(k)?"":k||""),D.reportValidity())},F={},X=Je(n),q=Ce(n),ue=X||q,G=(L||Ye(n))&&N(n.value)&&N(g)||_e(n)&&n.value===""||g===""||Array.isArray(g)&&!g.length,te=Dt.bind(null,C,i,F),J=(k,$,O,B=re.maxLength,W=re.minLength)=>{const Z=k?$:O;F[C]={type:k?B:W,message:Z,ref:n,...te(k?B:W,Z)}};if(o?!Array.isArray(g)||!g.length:x&&(!ue&&(G||z(g))||pe(g)&&!g||q&&!Et(u).isValid||X&&!Mt(u).isValid)){const{value:k,message:$}=$e(x)?{value:!!x,message:x}:de(x);if(k&&(F[C]={type:re.required,message:$,ref:D,...te(re.required,$)},!i))return T($),F}if(!G&&(!z(_)||!z(V))){let k,$;const O=de(V),B=de(_);if(!z(g)&&!isNaN(g)){const W=n.valueAsNumber||g&&+g;z(O.value)||(k=W>O.value),z(B.value)||($=W<B.value)}else{const W=n.valueAsDate||new Date(g),Z=ve=>new Date(new Date().toDateString()+" "+ve),oe=n.type=="time",ye=n.type=="week";ee(O.value)&&g&&(k=oe?Z(g)>Z(O.value):ye?g>O.value:W>new Date(O.value)),ee(B.value)&&g&&($=oe?Z(g)<Z(B.value):ye?g<B.value:W<new Date(B.value))}if((k||$)&&(J(!!k,O.message,B.message,re.max,re.min),!i))return T(F[C].message),F}if((d||m)&&!G&&(ee(g)||o&&Array.isArray(g))){const k=de(d),$=de(m),O=!z(k.value)&&g.length>+k.value,B=!z($.value)&&g.length<+$.value;if((O||B)&&(J(O,k.message,$.message),!i))return T(F[C].message),F}if(y&&!G&&ee(g)){const{value:k,message:$}=de(y);if(ke(k)&&!g.match(k)&&(F[C]={type:re.pattern,message:$,ref:n,...te(re.pattern,$)},!i))return T($),F}if(A){if(ne(A)){const k=await A(g,s),$=bt(k,D);if($&&(F[C]={...$,...te(re.validate,$.message)},!i))return T($.message),F}else if(P(A)){let k={};for(const $ in A){if(!K(k)&&!i)break;const O=bt(await A[$](g,s),D,$);O&&(k={...O,...te($,O.message)},T(O.message),i&&(F[C]=k))}if(!K(k)&&(F[C]={ref:D,...k},!i))return F}}return T(!0),F};function Zr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=N(e)?t++:e[s[t++]];return e}function es(e){for(const s in e)if(e.hasOwnProperty(s)&&!N(e[s]))return!1;return!0}function R(e,s){const i=Array.isArray(s)?s:Ke(s)?[s]:jt(s),t=i.length===1?e:Zr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(P(t)&&K(t)||Array.isArray(t)&&es(t))&&R(e,i.slice(0,-1)),e}function Be(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>z(e)||!Tt(e);function ae(e,s){if(Ae(e)||Ae(s))return e===s;if(fe(e)&&fe(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(fe(n)&&fe(u)||P(n)&&P(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var Nt=e=>e.type==="select-multiple",ts=e=>Je(e)||Ce(e),Ge=e=>_e(e)&&e.isConnected,Pt=e=>{for(const s in e)if(ne(e[s]))return!0;return!1};function Se(e,s={}){const i=Array.isArray(e);if(P(e)||i)for(const t in e)Array.isArray(e[t])||P(e[t])&&!Pt(e[t])?(s[t]=Array.isArray(e[t])?[]:{},Se(e[t],s[t])):z(e[t])||(s[t]=!0);return s}function Bt(e,s,i){const t=Array.isArray(e);if(P(e)||t)for(const o in e)Array.isArray(e[o])||P(e[o])&&!Pt(e[o])?N(s)||Ae(i[o])?i[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Bt(e[o],z(s)?{}:s[o],i[o]):i[o]=!ae(e[o],s[o]);return i}var Re=(e,s)=>Bt(e,s,Se(s)),Gt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>N(e)?e:s?e===""?NaN:e&&+e:i&&ee(e)?new Date(e):t?t(e):e;function Ue(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ye(s)?s.files:Je(s)?Mt(e.refs).value:Nt(s)?[...s.selectedOptions].map(({value:i})=>i):Ce(s)?Et(e.refs).value:Gt(N(s.value)?e.ref.value:s.value,e)}var rs=(e,s,i,t)=>{const o={};for(const n of e){const u=h(s,n);u&&S(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},be=e=>N(e)?e:ke(e)?e.source:P(e)?ke(e.value)?e.value.source:e.value:e,ss=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function mt(e,s,i){const t=h(e,i);if(t||Ke(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=h(s,n),x=h(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(x&&x.type)return{name:n,error:x};o.pop()}return{name:i}}var is=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,ns=(e,s)=>!Ve(h(e,s)).length&&R(e,s);const os={mode:Q.onSubmit,reValidateMode:Q.onChange,shouldFocusError:!0};function as(e={},s){let i={...os,...e},t={submitCount:0,isDirty:!1,isLoading:ne(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=P(i.defaultValues)||P(i.values)?se(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:se(n),x={action:!1,mount:!1,watch:!1},d={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,_=0;const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Be(),array:Be(),state:Be()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,C=ht(i.mode),L=ht(i.reValidateMode),M=i.criteriaMode===Q.all,I=r=>a=>{clearTimeout(_),_=setTimeout(r,a)},g=async r=>{if(V.isValid||r){const a=i.resolver?K((await G()).errors):await J(o,!0);a!==t.isValid&&y.state.next({isValid:a})}},D=r=>V.isValidating&&y.state.next({isValidating:r}),T=(r,a=[],l,p,f=!0,c=!0)=>{if(p&&l){if(x.action=!0,c&&Array.isArray(h(o,r))){const v=l(h(o,r),p.argA,p.argB);f&&S(o,r,v)}if(c&&Array.isArray(h(t.errors,r))){const v=l(h(t.errors,r),p.argA,p.argB);f&&S(t.errors,r,v),ns(t.errors,r)}if(V.touchedFields&&c&&Array.isArray(h(t.touchedFields,r))){const v=l(h(t.touchedFields,r),p.argA,p.argB);f&&S(t.touchedFields,r,v)}V.dirtyFields&&(t.dirtyFields=Re(n,u)),y.state.next({name:r,isDirty:$(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else S(u,r,a)},F=(r,a)=>{S(t.errors,r,a),y.state.next({errors:t.errors})},X=(r,a,l,p)=>{const f=h(o,r);if(f){const c=h(u,r,N(l)?h(n,r):l);N(c)||p&&p.defaultChecked||a?S(u,r,a?c:Ue(f._f)):W(r,c),x.mount&&g()}},q=(r,a,l,p,f)=>{let c=!1,v=!1;const j={name:r};if(!l||p){V.isDirty&&(v=t.isDirty,t.isDirty=j.isDirty=$(),c=v!==j.isDirty);const E=ae(h(n,r),a);v=h(t.dirtyFields,r),E?R(t.dirtyFields,r):S(t.dirtyFields,r,!0),j.dirtyFields=t.dirtyFields,c=c||V.dirtyFields&&v!==!E}if(l){const E=h(t.touchedFields,r);E||(S(t.touchedFields,r,l),j.touchedFields=t.touchedFields,c=c||V.touchedFields&&E!==l)}return c&&f&&y.state.next(j),c?j:{}},ue=(r,a,l,p)=>{const f=h(t.errors,r),c=V.isValid&&pe(a)&&t.isValid!==a;if(e.delayError&&l?(m=I(()=>F(r,l)),m(e.delayError)):(clearTimeout(_),m=null,l?S(t.errors,r,l):R(t.errors,r)),(l?!ae(f,l):f)||!K(p)||c){const v={...p,...c&&pe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...v},y.state.next(v)}D(!1)},G=async r=>i.resolver(u,i.context,rs(r||d.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),te=async r=>{const{errors:a}=await G();if(r)for(const l of r){const p=h(a,l);p?S(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},J=async(r,a,l={valid:!0})=>{for(const p in r){const f=r[p];if(f){const{_f:c,...v}=f;if(c){const j=d.array.has(c.name),E=await xt(f,u,M,i.shouldUseNativeValidation&&!a,j);if(E[c.name]&&(l.valid=!1,a))break;!a&&(h(E,c.name)?j?Xr(t.errors,E,c.name):S(t.errors,c.name,E[c.name]):R(t.errors,c.name))}v&&await J(v,a,l)}}return l.valid},k=()=>{for(const r of d.unMount){const a=h(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Ge(l)):!Ge(a._f.ref))&&Le(r)}d.unMount=new Set},$=(r,a)=>(r&&a&&S(u,r,a),!ae(Ze(),n)),O=(r,a,l)=>Qr(r,d,{...x.mount?u:N(a)?n:ee(r)?{[r]:a}:a},l,a),B=r=>Ve(h(x.mount?u:n,r,e.shouldUnregister?h(n,r,[]):[])),W=(r,a,l={})=>{const p=h(o,r);let f=a;if(p){const c=p._f;c&&(!c.disabled&&S(u,r,Gt(a,c)),f=_e(c.ref)&&z(a)?"":a,Nt(c.ref)?[...c.ref.options].forEach(v=>v.selected=f.includes(v.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(f)?!!f.find(j=>j===v.value):f===v.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(v=>v.checked=v.value===f):Ye(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||y.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&q(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ve(r)},Z=(r,a,l)=>{for(const p in a){const f=a[p],c=`${r}.${p}`,v=h(o,c);(d.array.has(r)||!Ae(f)||v&&!v._f)&&!fe(f)?Z(c,f,l):W(c,f,l)}},oe=(r,a,l={})=>{const p=h(o,r),f=d.array.has(r),c=se(a);S(u,r,c),f?(y.array.next({name:r,values:{...u}}),(V.isDirty||V.dirtyFields)&&l.shouldDirty&&y.state.next({name:r,dirtyFields:Re(n,u),isDirty:$(r,c)})):p&&!p._f&&!z(c)?Z(r,c,l):W(r,c,l),pt(r,d)&&y.state.next({...t}),y.values.next({name:r,values:{...u}}),!x.mount&&s()},ye=async r=>{const a=r.target;let l=a.name,p=!0;const f=h(o,l),c=()=>a.type?Ue(f._f):qr(r);if(f){let v,j;const E=c(),ce=r.type===ft.BLUR||r.type===ft.FOCUS_OUT,tr=!ss(f._f)&&!i.resolver&&!h(t.errors,l)&&!f._f.deps||is(ce,h(t.touchedFields,l),t.isSubmitted,L,C),je=pt(l,d,ce);S(u,l,E),ce?(f._f.onBlur&&f._f.onBlur(r),m&&m(0)):f._f.onChange&&f._f.onChange(r);const De=q(l,E,ce,!1),rr=!K(De)||je;if(!ce&&y.values.next({name:l,type:r.type,values:{...u}}),tr)return V.isValid&&g(),rr&&y.state.next({name:l,...je?{}:De});if(!ce&&je&&y.state.next({...t}),D(!0),i.resolver){const{errors:ot}=await G([l]),sr=mt(t.errors,o,l),at=mt(ot,o,sr.name||l);v=at.error,l=at.name,j=K(ot)}else v=(await xt(f,u,M,i.shouldUseNativeValidation))[l],p=isNaN(E)||E===h(u,l,E),p&&(v?j=!1:V.isValid&&(j=await J(o,!0)));p&&(f._f.deps&&ve(f._f.deps),ue(l,j,v,De))}},ve=async(r,a={})=>{let l,p;const f=Pe(r);if(D(!0),i.resolver){const c=await te(N(r)?r:f);l=K(c),p=r?!f.some(v=>h(c,v)):l}else r?(p=(await Promise.all(f.map(async c=>{const v=h(o,c);return await J(v&&v._f?{[c]:v}:v)}))).every(Boolean),!(!p&&!t.isValid)&&g()):p=l=await J(o);return y.state.next({...!ee(r)||V.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&ze(o,c=>c&&h(t.errors,c),r?f:d.mount),p},Ze=r=>{const a={...n,...x.mount?u:{}};return N(r)?a:ee(r)?h(a,r):r.map(l=>h(a,l))},et=(r,a)=>({invalid:!!h((a||t).errors,r),isDirty:!!h((a||t).dirtyFields,r),isTouched:!!h((a||t).touchedFields,r),error:h((a||t).errors,r)}),Xt=r=>{r&&Pe(r).forEach(a=>R(t.errors,a)),y.state.next({errors:r?t.errors:{}})},tt=(r,a,l)=>{const p=(h(o,r,{_f:{}})._f||{}).ref;S(t.errors,r,{...a,ref:p}),y.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Zt=(r,a)=>ne(r)?y.values.subscribe({next:l=>r(O(void 0,a),l)}):O(r,a,!0),Le=(r,a={})=>{for(const l of r?Pe(r):d.mount)d.mount.delete(l),d.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&R(n,l);y.values.next({values:{...u}}),y.state.next({...t,...a.keepDirty?{isDirty:$()}:{}}),!a.keepIsValid&&g()},Te=(r,a={})=>{let l=h(o,r);const p=pe(a.disabled);return S(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),d.mount.add(r),l?p&&S(u,r,a.disabled?void 0:h(u,r,Ue(l._f))):X(r,!0,a.value),{...p?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:be(a.min),max:be(a.max),minLength:be(a.minLength),maxLength:be(a.maxLength),pattern:be(a.pattern)}:{},name:r,onChange:ye,onBlur:ye,ref:f=>{if(f){Te(r,a),l=h(o,r);const c=N(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,v=ts(c),j=l._f.refs||[];if(v?j.find(E=>E===c):c===l._f.ref)return;S(o,r,{_f:{...l._f,...v?{refs:[...j.filter(Ge),c,...Array.isArray(h(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),X(r,!1,void 0,c)}else l=h(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Wr(d.array,r)&&x.action)&&d.unMount.add(r)}}},rt=()=>i.shouldFocusError&&ze(o,r=>r&&h(t.errors,r),d.mount),st=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=se(u);if(y.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:c}=await G();t.errors=f,p=c}else await J(o);R(t.errors,"root"),K(t.errors)?(y.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),rt(),setTimeout(rt)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:K(t.errors),submitCount:t.submitCount+1,errors:t.errors})},er=(r,a={})=>{h(o,r)&&(N(a.defaultValue)?oe(r,h(n,r)):(oe(r,a.defaultValue),S(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?$(r,h(n,r)):$()),a.keepError||(R(t.errors,r),V.isValid&&g()),y.state.next({...t}))},it=(r,a={})=>{const l=r||n,p=se(l),f=r&&!K(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of d.mount)h(t.dirtyFields,c)?S(f,c,h(u,c)):oe(c,h(f,c));else{if(He&&N(r))for(const c of d.mount){const v=h(o,c);if(v&&v._f){const j=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(_e(j)){const E=j.closest("form");if(E){E.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?se(n):{}:se(f),y.array.next({values:{...f}}),y.values.next({values:{...f}})}d={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&s(),x.mount=!V.isValid||!!a.keepIsValid,x.watch=!!e.shouldUnregister,y.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Re(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},nt=(r,a)=>it(ne(r)?r(u):r,a);return{control:{register:Te,unregister:Le,getFieldState:et,handleSubmit:st,setError:tt,_executeSchema:G,_getWatch:O,_getDirty:$,_updateValid:g,_removeUnmounted:k,_updateFieldArray:T,_getFieldArray:B,_reset:it,_resetDefaultValues:()=>ne(i.defaultValues)&&i.defaultValues().then(r=>{nt(r,i.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:y,_proxyFormState:V,get _fields(){return o},get _formValues(){return u},get _state(){return x},set _state(r){x=r},get _defaultValues(){return n},get _names(){return d},set _names(r){d=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ve,register:Te,handleSubmit:st,watch:Zt,setValue:oe,getValues:Ze,reset:nt,resetField:er,clearErrors:Xt,unregister:Le,setError:tt,setFocus:(r,a={})=>{const l=h(o,r),p=l&&l._f;if(p){const f=p.refs?p.refs[0]:p.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},getFieldState:et}}function Rt(e={}){const s=ie.useRef(),i=ie.useRef(),[t,o]=ie.useState({isDirty:!1,isValidating:!1,isLoading:ne(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ne(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...as(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Jr({subject:n._subjects.state,next:u=>{Yr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ie.useEffect(()=>{e.values&&!ae(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ie.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Kr(t,n),s.current}var wt=function(e,s,i){if(e&&"reportValidity"in e){var t=h(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Ut=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?wt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return wt(u,o,e)})};for(var t in s.fields)i(t)},ls=function(e,s){s.shouldUseNativeValidation&&Ut(e,s);var i={};for(var t in e){var o=h(s.fields,t);S(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function It(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,x){try{var d=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(m){return n.shouldUseNativeValidation&&Ut({},n),{values:i.raw?t:m,errors:{}}}))}catch(m){return x(m)}return d&&d.then?d.then(void 0,x):d}(0,function(u){if(!u.inner)throw u;return{values:{},errors:ls((x=u,d=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(x.inner||[]).reduce(function(m,_){if(m[_.path]||(m[_.path]={message:_.message,type:_.type}),d){var V=m[_.path].types,y=V&&V[_.type];m[_.path]=Dt(_.path,d,m,_.type,y?[].concat(y,_.message):_.message)}return m},{})),n)};var x,d}))}catch(u){return Promise.reject(u)}}}const Qe=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>b.jsx(fr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Qe.propTypes={$w:w.string,$h:w.string,$s:w.string,onClick:w.func,type:w.string,disabled:w.oneOfType([w.bool,w.number]),children:w.oneOfType([w.string,w.node,w.oneOf(["img","png","svg"])])};const Xe=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:x,$oh:d,$ob:m,name:_,value:V={value:"HTML",label:"Chocolate"},defaultValue:y,placeholder:A="Create / Select...",options:C,onChange:L,isClearable:M,onCreateOption:I,isLoading:g,isDisabled:D})=>b.jsx(Sr,{theme:hr({$obh:s,$sobh:i}),styles:{...pr({$ol:t,$b:o,$bh:n,$bf:u,$o:x,$oh:d,$ob:m,$obh:s}),...e},name:_,value:V,defaultValue:y,placeholder:A,options:C,onChange:L,isClearable:M,onCreateOption:I,isLoading:g,isDisabled:D});Xe.propTypes={styles:w.arrayOf(w.object),$obh:w.string,$sobh:w.string,$ol:w.string,$b:w.string,$bh:w.string,$bf:w.string,$o:w.string,$oh:w.string,$ob:w.string,options:w.arrayOf(w.object),name:w.string,value:w.oneOfType([w.object,w.string]),defaultValue:w.oneOfType([w.object,w.string]),placeholder:w.string,onChange:w.func,isClearable:w.oneOfType([w.object,w.string]),onCreateOption:w.func,isLoading:w.bool,isDisabled:w.bool};const{colors:Oe,radiuses:qt,shadows:us}=xe,zt=H.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${qt.m};
  background-color: ${Oe.white};
  box-shadow: ${us.auth};
`,ge=H.label`
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
    color: ${Oe.error};
  }
`,Wt=le`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${Oe.border};
  border-radius: ${qt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${Oe.hovered};
  }
`,Ht=H.input`
  ${Wt}
  ${kt}
`,Kt=H.input`
  ${Wt}
`,Yt=({el:e,setIsModal:s})=>{var I;const{_id:i,cluster:t,title:o,group:n}=e,u=me(),[x,d]=Y.useState({value:n,label:n}),{clusterGroups:m}=we(),{register:_,watch:V,handleSubmit:y,formState:{errors:A}}=Rt({mode:"onBlur",resolver:It(_t),defaultValues:{cluster:t,title:o}}),C=async g=>{u(qe({_id:i,...g,group:x.value})),s(!1);const D=[];await u(We()).unwrap().then(T=>{const{clusters:F}=T.result,X=Array.from(new Set(F.map(q=>q.group)));m.forEach(q=>{X.includes(q.clusterGroup)||D.push(q._id)})}),D.forEach(T=>u(Ct(T)))},L=m.map(g=>({value:g.clusterGroup,label:g.clusterGroup})).sort((g,D)=>g.value.localeCompare(D.value)),M=g=>{V("title")?(u(Vt({clusterGroup:g})),d({value:g,label:g})):he.error("Title is required")};return b.jsxs(zt,{onSubmit:y(C),children:[b.jsxs(ge,{children:[t.length<=39?t:t.substring(0,39)+"...",b.jsx(Ht,{..._("cluster")})]}),b.jsxs(ge,{children:["Title ",b.jsxs("span",{children:[" ",(I=A.title)==null?void 0:I.message]}),b.jsx(Kt,{..._("title")})]}),b.jsxs(ge,{children:["Group",b.jsx(Xe,{value:x,options:L,onChange:g=>d(g||""),onCreateOption:M,isClearable:x})]}),b.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Yt.propTypes={el:w.object,setIsModal:w.func.isRequired};const Jt=({el:e})=>{const s=me(),{clusterTrash:i}=we(),[t,o]=Y.useState(!1),{_id:n,cluster:u,title:x,favorite:d,checked:m}=e,_=i.find(M=>M._id===n),V=M=>{const I=M.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},y=()=>{s(qe({_id:n,favorite:!d}))},A=()=>s(gr(e)),C=()=>{s(qe({_id:n,checked:!m}))},L=()=>s(yr(e));return b.jsxs(jr,{children:[b.jsxs(Mr,{$hovered:d,children:[b.jsx("input",{type:"checkbox",name:"favorite",checked:d,onChange:y}),b.jsx(Gr,{size:"18px"})]}),b.jsx(Dr,{onClick:A,to:`/element/${n}`,children:x}),b.jsx(Er,{href:u,target:"_blank",rel:"noopener noreferrer",children:V(u)}),b.jsx(Br,{onClick:()=>o("edit"),children:b.jsx(Rr,{size:"15px"})}),b.jsx(Pr,{$hovered:_,onClick:L,children:b.jsx(Ur,{size:"16px"})}),b.jsxs(Nr,{$hovered:m,children:[b.jsx("input",{type:"checkbox",name:"checked",checked:m,onChange:C}),b.jsx(Ir,{size:"15px"})]}),t&&b.jsx($t,{onClick:()=>o(!1),children:b.jsx(Yt,{el:e,setIsModal:o})})]})};Jt.propTypes={el:w.object,$hovered:w.bool};const{colors:cs,indents:ds,radiuses:fs}=xe,hs=H.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${ds.xl};
  counter-reset: section 0;
  background-color: ${cs.white};
  border-radius: ${fs.xl};
`,ps=()=>{const e=me(),{allClusters:s,clusterFilter:i,clusterSelect:t,clusterChecked:o}=we();Y.useEffect(()=>{e(vr()),e(We())},[e]);const n=[...s].filter(({cluster:d,title:m,checked:_})=>{const V=d.toLowerCase().includes(i)||m.toLowerCase().includes(i);return o?V&&_!==o:V}).sort((d,m)=>d.title.localeCompare(m.title)),x=Array.from(new Set(n.map(d=>d.group))).sort((d,m)=>d.localeCompare(m)).filter(d=>t?d===t&&d:d);return b.jsx(hs,{children:x.map(d=>b.jsxs(Y.Fragment,{children:[b.jsx(Lt,{group:d}),n.map(m=>m.group===d&&b.jsx(Jt,{el:m},m._id))]},d))})},Qt=({cluster:e,setIsModal:s})=>{var A;const i=me(),[t,o]=Y.useState(""),{clusterGroups:n}=we(),{register:u,watch:x,handleSubmit:d,formState:{errors:m}}=Rt({mode:"onBlur",resolver:It(_t),defaultValues:{cluster:e}}),_=C=>{i(br({...C,group:t.value})),s(!1)},V=n.map(C=>({value:C.clusterGroup,label:C.clusterGroup})).sort((C,L)=>C.value.localeCompare(L.value)),y=C=>{x("title")?(i(Vt({clusterGroup:C})),o({value:C,label:C})):he.error("Title is required")};return b.jsxs(zt,{onSubmit:d(_),children:[b.jsxs(ge,{children:[e.length<=39?e:e.substring(0,39)+"...",b.jsx(Ht,{...u("cluster")})]}),b.jsxs(ge,{children:["Title ",b.jsxs("span",{children:[" ",(A=m.title)==null?void 0:A.message]}),b.jsx(Kt,{...u("title")})]}),b.jsxs(ge,{children:["Group",b.jsx(Xe,{value:t,options:V,onChange:C=>o(C||""),onCreateOption:y,isClearable:t})]}),b.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Qt.propTypes={cluster:w.string.isRequired,setIsModal:w.func.isRequired};const{button:Ie}=xe.shadows,gs=()=>{const e=me(),[s,i]=Y.useState(!1),[t,o]=Y.useState(""),{clusterChecked:n,clusterTrash:u,clusterGroups:x}=we(),d=u.length>0,m=async y=>{const A=await Or();try{await $r.validate({cluster:A}),o(A),i("add")}catch(C){y.target.blur(),he.error(`Invalid cluster, ${C.message}`)}},_=y=>{e(mr(!n)),y.target.blur()},V=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await u.forEach(A=>e(wr(A._id))),e(Cr());const y=[];await e(We()).unwrap().then(A=>{const{clusters:C}=A.result,L=Array.from(new Set(C.map(M=>M.group)));x.forEach(M=>{L.includes(M.clusterGroup)||y.push(M._id)})}),y.forEach(A=>e(Ct(A)))};return b.jsxs(xr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr 1fr",children:[d?b.jsx(Me,{onClick:V,$s:"m",$bs:Ie,children:"Delete"}):b.jsx("span",{}),b.jsx(Me,{onClick:_,$s:"m",$bs:Ie,children:n?"Show":"Hide"}),b.jsx(Me,{onClick:m,$s:"m",$bs:Ie,children:"Add"}),s&&b.jsx($t,{onClick:()=>i(!1),children:b.jsx(Qt,{cluster:t,setIsModal:i})})]})},ws=()=>{const{s:e,m:s}=xe.indents;return b.jsxs(Vr,{$p:`2px ${s} ${e}`,children:[b.jsx(ps,{}),b.jsx(gs,{})]})};export{ws as default};
