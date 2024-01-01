import{_ as sr,r as Y,w as lt,x as je,y as ir,z as ut,A as nr,C as or,D as ar,S as lr,E as ur,Q as ae,n as ce,s as W,t as xe,P as v,j as x,G as qe,R as ne,H as cr,I as dr,J as fr,u as me,K as we,N as Re,O as ze,T as _t,e as $t,g as hr,U as pr,M as kt,V as yr,W as gr,X as vr,Y as br,Z as xr,$ as ct,a0 as mr,a1 as wr,F as Cr}from"./index-b3666246.js";import{t as At,c as Vr}from"./clusterSchema-00f36d6a.js";var _r=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],dt=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},Ee={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return dt(s,n,o)})||t.some(function(n){return dt(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function $r(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ee.formatCreateLabel:n,m=e.isValidNewOption,y=m===void 0?Ee.isValidNewOption:m,h=e.getNewOptionData,w=h===void 0?Ee.getNewOptionData:h,_=e.onCreateOption,g=e.options,A=g===void 0?[]:g,C=e.onChange,T=sr(e,_r),H=T.getOptionValue,K=H===void 0?nr:H,V=T.getOptionLabel,S=V===void 0?or:V,F=T.inputValue,O=T.isLoading,J=T.isMulti,U=T.value,I=T.name,G=Y.useMemo(function(){return y(F,lt(U),A,{getOptionValue:K,getOptionLabel:S})?w(F,u(F)):void 0},[u,w,S,K,F,y,A,U]),re=Y.useMemo(function(){return(i||!O)&&G?o==="first"?[G].concat(je(A)):[].concat(je(A),[G]):A},[i,o,O,G,A]),X=Y.useCallback(function(k,$){if($.action!=="select-option")return C(k,$);var D=Array.isArray(k)?k:[k];if(D[D.length-1]===G){if(_)_(F);else{var B=w(F,F),z={action:"create-option",name:I,option:B};C(ir(J,[].concat(je(lt(U)),[B]),B),z)}return}C(k,$)},[w,F,J,I,G,_,C,U]);return ut(ut({},T),{},{options:re,onChange:X})}var kr=Y.forwardRef(function(e,s){var i=ar(e),t=$r(i);return Y.createElement(lr,ur({ref:s},t))}),Ar=kr;const Sr=async()=>{if(!navigator.clipboard){ae.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ae.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ae.error(e.message)}},St=ce`
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
`;ce`
  opacity: 0;
  pointer-events: none;
`;const{colors:P,shadows:Or,indents:Fr,radiuses:ft}=xe,Ot=ce`
  margin: 0 ${Fr.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr 1fr 1fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${P.borderLight};
`,Lr=W.li`
  ${Ot}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${ft.xl};
    border-top-right-radius: ${ft.xl};
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
`,Dr=W.li`
  ${Ot}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${P.border};
    box-shadow: ${Or.back};
    background-color: ${P.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Ft=ce`
  font-size: 16px;

  &:hover {
    color: ${P.hovered};
  }
`,Tr=W.button`
  ${Ft}

  border: none;
  background-color: transparent;
  color: ${P.black};
  font-weight: 500;
`,jr=W.a`
  ${Ft}

  color: ${P.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${P.black};
  }
`,Lt=ce`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${St}
  }
`,Er=W.label`
  ${Lt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?P.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?P.yellow:P.border};
  }
  &:hover svg {
    stroke: ${P.placeholder};
  }
`,Nr=W.label`
  ${Lt}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${P.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?P.border:"transparent"};
  }
  &:hover svg {
    border-color: ${P.placeholder};
    color: ${({$hovered:e})=>e?P.placeholder:"transparent"};
  }
`,We=ce`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  &,
  & svg {
    transition: color 250ms;
    color: ${P.border};
  }
  &:hover,
  &:hover svg {
    color: ${P.placeholder};
  }
`,Mr=W.button`
  ${We}

  font-size: 14px;
  /* color: ${P.placeholder}; */
`,Br=W.button`
  ${We}

  opacity: ${({$hovered:e})=>e?1:0};
`,Pr=W.button`
  ${We}

  opacity:0;
`,Dt=({group:e})=>x.jsx(Lr,{children:x.jsx("h2",{children:e})});Dt.propTypes={group:v.string};function Gr(e){return qe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Rr(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Ur(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}var Ce=e=>e.type==="checkbox",he=e=>e instanceof Date,q=e=>e==null;const Tt=e=>typeof e=="object";var M=e=>!q(e)&&!Array.isArray(e)&&Tt(e)&&!he(e),Ir=e=>M(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,qr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zr=(e,s)=>e.has(qr(s)),Wr=e=>{const s=e.constructor&&e.constructor.prototype;return M(s)&&s.hasOwnProperty("isPrototypeOf")},He=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(He&&(e instanceof Blob||e instanceof FileList))&&(i||M(e)))if(s=i?[]:{},!i&&!Wr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=ie(e[t]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,f=(e,s,i)=>{if(!s||!M(e))return i;const t=Ve(s.split(/[,[\].]+?/)).reduce((o,n)=>q(o)?o:o[n],e);return N(t)||t===e?N(e[s])?i:e[s]:t};const ht={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var Hr=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==Z.all&&(s._proxyFormState[u]=!t||Z.all),i&&(i[u]=!0),e[u]}});return o},Q=e=>M(e)&&!Object.keys(e).length,Kr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return Q(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||Z.all))},Ne=e=>Array.isArray(e)?e:[e];function Yr(e){const s=ne.useRef(e);s.current=e,ne.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var te=e=>typeof e=="string",Jr=(e,s,i,t,o)=>te(e)?(t&&s.watch.add(e),f(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),f(i,n))):(t&&(s.watchAll=!0),i),Ke=e=>/^\w*$/.test(e),jt=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/));function L(e,s,i){let t=-1;const o=Ke(s)?[s]:jt(s),n=o.length,u=n-1;for(;++t<n;){const m=o[t];let y=i;if(t!==u){const h=e[m];y=M(h)||Array.isArray(h)?h:isNaN(+o[t+1])?{}:[]}e[m]=y,e=e[m]}return e}var Et=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Ue=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else M(u)&&Ue(u,s)}}};var pt=e=>({isOnSubmit:!e||e===Z.onSubmit,isOnBlur:e===Z.onBlur,isOnChange:e===Z.onChange,isOnAll:e===Z.all,isOnTouch:e===Z.onTouched}),yt=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Qr=(e,s,i)=>{const t=Ve(f(e,i));return L(t,"root",s[i]),L(e,i,t),e},pe=e=>typeof e=="boolean",Ye=e=>e.type==="file",oe=e=>typeof e=="function",$e=e=>{if(!He)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},_e=e=>te(e),Je=e=>e.type==="radio",ke=e=>e instanceof RegExp;const gt={value:!1,isValid:!1},vt={value:!0,isValid:!0};var Nt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?vt:{value:e[0].value,isValid:!0}:vt:gt}return gt};const bt={isValid:!1,value:null};var Mt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,bt):bt;function xt(e,s,i="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||pe(e)&&!e)return{type:i,message:_e(e)?e:"",ref:s}}var fe=e=>M(e)&&!ke(e)?e:{value:e,message:""},mt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:m,maxLength:y,minLength:h,min:w,max:_,pattern:g,validate:A,name:C,valueAsNumber:T,mount:H,disabled:K}=e._f,V=f(s,C);if(!H||K)return{};const S=u?u[0]:n,F=k=>{t&&S.reportValidity&&(S.setCustomValidity(pe(k)?"":k||""),S.reportValidity())},O={},J=Je(n),U=Ce(n),I=J||U,G=(T||Ye(n))&&N(n.value)&&N(V)||$e(n)&&n.value===""||V===""||Array.isArray(V)&&!V.length,re=Et.bind(null,C,i,O),X=(k,$,D,B=se.maxLength,z=se.minLength)=>{const ee=k?$:D;O[C]={type:k?B:z,message:ee,ref:n,...re(k?B:z,ee)}};if(o?!Array.isArray(V)||!V.length:m&&(!I&&(G||q(V))||pe(V)&&!V||U&&!Nt(u).isValid||J&&!Mt(u).isValid)){const{value:k,message:$}=_e(m)?{value:!!m,message:m}:fe(m);if(k&&(O[C]={type:se.required,message:$,ref:S,...re(se.required,$)},!i))return F($),O}if(!G&&(!q(w)||!q(_))){let k,$;const D=fe(_),B=fe(w);if(!q(V)&&!isNaN(V)){const z=n.valueAsNumber||V&&+V;q(D.value)||(k=z>D.value),q(B.value)||($=z<B.value)}else{const z=n.valueAsDate||new Date(V),ee=ve=>new Date(new Date().toDateString()+" "+ve),le=n.type=="time",ge=n.type=="week";te(D.value)&&V&&(k=le?ee(V)>ee(D.value):ge?V>D.value:z>new Date(D.value)),te(B.value)&&V&&($=le?ee(V)<ee(B.value):ge?V<B.value:z<new Date(B.value))}if((k||$)&&(X(!!k,D.message,B.message,se.max,se.min),!i))return F(O[C].message),O}if((y||h)&&!G&&(te(V)||o&&Array.isArray(V))){const k=fe(y),$=fe(h),D=!q(k.value)&&V.length>+k.value,B=!q($.value)&&V.length<+$.value;if((D||B)&&(X(D,k.message,$.message),!i))return F(O[C].message),O}if(g&&!G&&te(V)){const{value:k,message:$}=fe(g);if(ke(k)&&!V.match(k)&&(O[C]={type:se.pattern,message:$,ref:n,...re(se.pattern,$)},!i))return F($),O}if(A){if(oe(A)){const k=await A(V,s),$=xt(k,S);if($&&(O[C]={...$,...re(se.validate,$.message)},!i))return F($.message),O}else if(M(A)){let k={};for(const $ in A){if(!Q(k)&&!i)break;const D=xt(await A[$](V,s),S,$);D&&(k={...D,...re($,D.message)},F(D.message),i&&(O[C]=k))}if(!Q(k)&&(O[C]={ref:S,...k},!i))return O}}return F(!0),O};function Xr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=N(e)?t++:e[s[t++]];return e}function Zr(e){for(const s in e)if(e.hasOwnProperty(s)&&!N(e[s]))return!1;return!0}function R(e,s){const i=Array.isArray(s)?s:Ke(s)?[s]:jt(s),t=i.length===1?e:Xr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(M(t)&&Q(t)||Array.isArray(t)&&Zr(t))&&R(e,i.slice(0,-1)),e}function Me(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>q(e)||!Tt(e);function ue(e,s){if(Ae(e)||Ae(s))return e===s;if(he(e)&&he(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(he(n)&&he(u)||M(n)&&M(u)||Array.isArray(n)&&Array.isArray(u)?!ue(n,u):n!==u)return!1}}return!0}var Bt=e=>e.type==="select-multiple",es=e=>Je(e)||Ce(e),Be=e=>$e(e)&&e.isConnected,Pt=e=>{for(const s in e)if(oe(e[s]))return!0;return!1};function Se(e,s={}){const i=Array.isArray(e);if(M(e)||i)for(const t in e)Array.isArray(e[t])||M(e[t])&&!Pt(e[t])?(s[t]=Array.isArray(e[t])?[]:{},Se(e[t],s[t])):q(e[t])||(s[t]=!0);return s}function Gt(e,s,i){const t=Array.isArray(e);if(M(e)||t)for(const o in e)Array.isArray(e[o])||M(e[o])&&!Pt(e[o])?N(s)||Ae(i[o])?i[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Gt(e[o],q(s)?{}:s[o],i[o]):i[o]=!ue(e[o],s[o]);return i}var Pe=(e,s)=>Gt(e,s,Se(s)),Rt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>N(e)?e:s?e===""?NaN:e&&+e:i&&te(e)?new Date(e):t?t(e):e;function Ge(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ye(s)?s.files:Je(s)?Mt(e.refs).value:Bt(s)?[...s.selectedOptions].map(({value:i})=>i):Ce(s)?Nt(e.refs).value:Rt(N(s.value)?e.ref.value:s.value,e)}var ts=(e,s,i,t)=>{const o={};for(const n of e){const u=f(s,n);u&&L(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},be=e=>N(e)?e:ke(e)?e.source:M(e)?ke(e.value)?e.value.source:e.value:e,rs=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function wt(e,s,i){const t=f(e,i);if(t||Ke(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=f(s,n),m=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(m&&m.type)return{name:n,error:m};o.pop()}return{name:i}}var ss=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,is=(e,s)=>!Ve(f(e,s)).length&&R(e,s);const ns={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function os(e={},s){let i={...ns,...e},t={submitCount:0,isDirty:!1,isLoading:oe(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=M(i.defaultValues)||M(i.values)?ie(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:ie(n),m={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},h,w=0;const _={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Me(),array:Me(),state:Me()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,C=pt(i.mode),T=pt(i.reValidateMode),H=i.criteriaMode===Z.all,K=r=>a=>{clearTimeout(w),w=setTimeout(r,a)},V=async r=>{if(_.isValid||r){const a=i.resolver?Q((await G()).errors):await X(o,!0);a!==t.isValid&&g.state.next({isValid:a})}},S=r=>_.isValidating&&g.state.next({isValidating:r}),F=(r,a=[],l,p,d=!0,c=!0)=>{if(p&&l){if(m.action=!0,c&&Array.isArray(f(o,r))){const b=l(f(o,r),p.argA,p.argB);d&&L(o,r,b)}if(c&&Array.isArray(f(t.errors,r))){const b=l(f(t.errors,r),p.argA,p.argB);d&&L(t.errors,r,b),is(t.errors,r)}if(_.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const b=l(f(t.touchedFields,r),p.argA,p.argB);d&&L(t.touchedFields,r,b)}_.dirtyFields&&(t.dirtyFields=Pe(n,u)),g.state.next({name:r,isDirty:$(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else L(u,r,a)},O=(r,a)=>{L(t.errors,r,a),g.state.next({errors:t.errors})},J=(r,a,l,p)=>{const d=f(o,r);if(d){const c=f(u,r,N(l)?f(n,r):l);N(c)||p&&p.defaultChecked||a?L(u,r,a?c:Ge(d._f)):z(r,c),m.mount&&V()}},U=(r,a,l,p,d)=>{let c=!1,b=!1;const j={name:r};if(!l||p){_.isDirty&&(b=t.isDirty,t.isDirty=j.isDirty=$(),c=b!==j.isDirty);const E=ue(f(n,r),a);b=f(t.dirtyFields,r),E?R(t.dirtyFields,r):L(t.dirtyFields,r,!0),j.dirtyFields=t.dirtyFields,c=c||_.dirtyFields&&b!==!E}if(l){const E=f(t.touchedFields,r);E||(L(t.touchedFields,r,l),j.touchedFields=t.touchedFields,c=c||_.touchedFields&&E!==l)}return c&&d&&g.state.next(j),c?j:{}},I=(r,a,l,p)=>{const d=f(t.errors,r),c=_.isValid&&pe(a)&&t.isValid!==a;if(e.delayError&&l?(h=K(()=>O(r,l)),h(e.delayError)):(clearTimeout(w),h=null,l?L(t.errors,r,l):R(t.errors,r)),(l?!ue(d,l):d)||!Q(p)||c){const b={...p,...c&&pe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...b},g.state.next(b)}S(!1)},G=async r=>i.resolver(u,i.context,ts(r||y.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),re=async r=>{const{errors:a}=await G();if(r)for(const l of r){const p=f(a,l);p?L(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},X=async(r,a,l={valid:!0})=>{for(const p in r){const d=r[p];if(d){const{_f:c,...b}=d;if(c){const j=y.array.has(c.name),E=await mt(d,u,H,i.shouldUseNativeValidation&&!a,j);if(E[c.name]&&(l.valid=!1,a))break;!a&&(f(E,c.name)?j?Qr(t.errors,E,c.name):L(t.errors,c.name,E[c.name]):R(t.errors,c.name))}b&&await X(b,a,l)}}return l.valid},k=()=>{for(const r of y.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Be(l)):!Be(a._f.ref))&&Fe(r)}y.unMount=new Set},$=(r,a)=>(r&&a&&L(u,r,a),!ue(Ze(),n)),D=(r,a,l)=>Jr(r,y,{...m.mount?u:N(a)?n:te(r)?{[r]:a}:a},l,a),B=r=>Ve(f(m.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),z=(r,a,l={})=>{const p=f(o,r);let d=a;if(p){const c=p._f;c&&(!c.disabled&&L(u,r,Rt(a,c)),d=$e(c.ref)&&q(a)?"":a,Bt(c.ref)?[...c.ref.options].forEach(b=>b.selected=d.includes(b.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(b=>(!b.defaultChecked||!b.disabled)&&(b.checked=Array.isArray(d)?!!d.find(j=>j===b.value):d===b.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(b=>b.checked=b.value===d):Ye(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||g.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&U(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ve(r)},ee=(r,a,l)=>{for(const p in a){const d=a[p],c=`${r}.${p}`,b=f(o,c);(y.array.has(r)||!Ae(d)||b&&!b._f)&&!he(d)?ee(c,d,l):z(c,d,l)}},le=(r,a,l={})=>{const p=f(o,r),d=y.array.has(r),c=ie(a);L(u,r,c),d?(g.array.next({name:r,values:{...u}}),(_.isDirty||_.dirtyFields)&&l.shouldDirty&&g.state.next({name:r,dirtyFields:Pe(n,u),isDirty:$(r,c)})):p&&!p._f&&!q(c)?ee(r,c,l):z(r,c,l),yt(r,y)&&g.state.next({...t}),g.values.next({name:r,values:{...u}}),!m.mount&&s()},ge=async r=>{const a=r.target;let l=a.name,p=!0;const d=f(o,l),c=()=>a.type?Ge(d._f):Ir(r);if(d){let b,j;const E=c(),de=r.type===ht.BLUR||r.type===ht.FOCUS_OUT,er=!rs(d._f)&&!i.resolver&&!f(t.errors,l)&&!d._f.deps||ss(de,f(t.touchedFields,l),t.isSubmitted,T,C),De=yt(l,y,de);L(u,l,E),de?(d._f.onBlur&&d._f.onBlur(r),h&&h(0)):d._f.onChange&&d._f.onChange(r);const Te=U(l,E,de,!1),tr=!Q(Te)||De;if(!de&&g.values.next({name:l,type:r.type,values:{...u}}),er)return _.isValid&&V(),tr&&g.state.next({name:l,...De?{}:Te});if(!de&&De&&g.state.next({...t}),S(!0),i.resolver){const{errors:ot}=await G([l]),rr=wt(t.errors,o,l),at=wt(ot,o,rr.name||l);b=at.error,l=at.name,j=Q(ot)}else b=(await mt(d,u,H,i.shouldUseNativeValidation))[l],p=isNaN(E)||E===f(u,l,E),p&&(b?j=!1:_.isValid&&(j=await X(o,!0)));p&&(d._f.deps&&ve(d._f.deps),I(l,j,b,Te))}},ve=async(r,a={})=>{let l,p;const d=Ne(r);if(S(!0),i.resolver){const c=await re(N(r)?r:d);l=Q(c),p=r?!d.some(b=>f(c,b)):l}else r?(p=(await Promise.all(d.map(async c=>{const b=f(o,c);return await X(b&&b._f?{[c]:b}:b)}))).every(Boolean),!(!p&&!t.isValid)&&V()):p=l=await X(o);return g.state.next({...!te(r)||_.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&Ue(o,c=>c&&f(t.errors,c),r?d:y.mount),p},Ze=r=>{const a={...n,...m.mount?u:{}};return N(r)?a:te(r)?f(a,r):r.map(l=>f(a,l))},et=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Qt=r=>{r&&Ne(r).forEach(a=>R(t.errors,a)),g.state.next({errors:r?t.errors:{}})},tt=(r,a,l)=>{const p=(f(o,r,{_f:{}})._f||{}).ref;L(t.errors,r,{...a,ref:p}),g.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Xt=(r,a)=>oe(r)?g.values.subscribe({next:l=>r(D(void 0,a),l)}):D(r,a,!0),Fe=(r,a={})=>{for(const l of r?Ne(r):y.mount)y.mount.delete(l),y.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&R(n,l);g.values.next({values:{...u}}),g.state.next({...t,...a.keepDirty?{isDirty:$()}:{}}),!a.keepIsValid&&V()},Le=(r,a={})=>{let l=f(o,r);const p=pe(a.disabled);return L(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),y.mount.add(r),l?p&&L(u,r,a.disabled?void 0:f(u,r,Ge(l._f))):J(r,!0,a.value),{...p?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:be(a.min),max:be(a.max),minLength:be(a.minLength),maxLength:be(a.maxLength),pattern:be(a.pattern)}:{},name:r,onChange:ge,onBlur:ge,ref:d=>{if(d){Le(r,a),l=f(o,r);const c=N(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,b=es(c),j=l._f.refs||[];if(b?j.find(E=>E===c):c===l._f.ref)return;L(o,r,{_f:{...l._f,...b?{refs:[...j.filter(Be),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),J(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(zr(y.array,r)&&m.action)&&y.unMount.add(r)}}},rt=()=>i.shouldFocusError&&Ue(o,r=>r&&f(t.errors,r),y.mount),st=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=ie(u);if(g.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await G();t.errors=d,p=c}else await X(o);R(t.errors,"root"),Q(t.errors)?(g.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),rt(),setTimeout(rt)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Zt=(r,a={})=>{f(o,r)&&(N(a.defaultValue)?le(r,f(n,r)):(le(r,a.defaultValue),L(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?$(r,f(n,r)):$()),a.keepError||(R(t.errors,r),_.isValid&&V()),g.state.next({...t}))},it=(r,a={})=>{const l=r||n,p=ie(l),d=r&&!Q(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of y.mount)f(t.dirtyFields,c)?L(d,c,f(u,c)):le(c,f(d,c));else{if(He&&N(r))for(const c of y.mount){const b=f(o,c);if(b&&b._f){const j=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if($e(j)){const E=j.closest("form");if(E){E.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?ie(n):{}:ie(d),g.array.next({values:{...d}}),g.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&s(),m.mount=!_.isValid||!!a.keepIsValid,m.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ue(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Pe(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},nt=(r,a)=>it(oe(r)?r(u):r,a);return{control:{register:Le,unregister:Fe,getFieldState:et,handleSubmit:st,setError:tt,_executeSchema:G,_getWatch:D,_getDirty:$,_updateValid:V,_removeUnmounted:k,_updateFieldArray:F,_getFieldArray:B,_reset:it,_resetDefaultValues:()=>oe(i.defaultValues)&&i.defaultValues().then(r=>{nt(r,i.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:g,_proxyFormState:_,get _fields(){return o},get _formValues(){return u},get _state(){return m},set _state(r){m=r},get _defaultValues(){return n},get _names(){return y},set _names(r){y=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ve,register:Le,handleSubmit:st,watch:Xt,setValue:le,getValues:Ze,reset:nt,resetField:Zt,clearErrors:Qt,unregister:Fe,setError:tt,setFocus:(r,a={})=>{const l=f(o,r),p=l&&l._f;if(p){const d=p.refs?p.refs[0]:p.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:et}}function Ut(e={}){const s=ne.useRef(),i=ne.useRef(),[t,o]=ne.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...os(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Yr({subject:n._subjects.state,next:u=>{Kr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ne.useEffect(()=>{e.values&&!ue(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ne.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Hr(t,n),s.current}var Ct=function(e,s,i){if(e&&"reportValidity"in e){var t=f(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},It=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?Ct(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return Ct(u,o,e)})};for(var t in s.fields)i(t)},as=function(e,s){s.shouldUseNativeValidation&&It(e,s);var i={};for(var t in e){var o=f(s.fields,t);L(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function qt(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,m){try{var y=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(h){return n.shouldUseNativeValidation&&It({},n),{values:i.raw?t:h,errors:{}}}))}catch(h){return m(h)}return y&&y.then?y.then(void 0,m):y}(0,function(u){if(!u.inner)throw u;return{values:{},errors:as((m=u,y=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(m.inner||[]).reduce(function(h,w){if(h[w.path]||(h[w.path]={message:w.message,type:w.type}),y){var _=h[w.path].types,g=_&&_[w.type];h[w.path]=Et(w.path,y,h,w.type,g?[].concat(g,w.message):w.message)}return h},{})),n)};var m,y}))}catch(u){return Promise.reject(u)}}}const Qe=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>x.jsx(cr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Qe.propTypes={$w:v.string,$h:v.string,$s:v.string,onClick:v.func,type:v.string,disabled:v.oneOfType([v.bool,v.number]),children:v.oneOfType([v.string,v.node,v.oneOf(["img","png","svg"])])};const Xe=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:m,$oh:y,$ob:h,name:w,value:_={value:"HTML",label:"Chocolate"},defaultValue:g,placeholder:A="Create / Select...",options:C,onChange:T,isClearable:H,onCreateOption:K,isLoading:V,isDisabled:S})=>x.jsx(Ar,{theme:dr({$obh:s,$sobh:i}),styles:{...fr({$ol:t,$b:o,$bh:n,$bf:u,$o:m,$oh:y,$ob:h,$obh:s}),...e},name:w,value:_,defaultValue:g,placeholder:A,options:C,onChange:T,isClearable:H,onCreateOption:K,isLoading:V,isDisabled:S});Xe.propTypes={styles:v.arrayOf(v.object),$obh:v.string,$sobh:v.string,$ol:v.string,$b:v.string,$bh:v.string,$bf:v.string,$o:v.string,$oh:v.string,$ob:v.string,options:v.arrayOf(v.object),name:v.string,value:v.oneOfType([v.arrayOf(v.object),v.object]),defaultValue:v.oneOfType([v.arrayOf(v.object),v.object]),placeholder:v.string,onChange:v.func,isClearable:v.oneOfType([v.arrayOf(v.string),v.string,v.object]),onCreateOption:v.func,isLoading:v.bool,isDisabled:v.bool};const{colors:Oe,radiuses:zt,shadows:ls}=xe,Wt=W.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${zt.m};
  background-color: ${Oe.white};
  box-shadow: ${ls.auth};
`,ye=W.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${Oe.error};
  }
`,Ht=ce`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${Oe.border};
  border-radius: ${zt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${Oe.hovered};
  }
`,us=W.input`
  ${Ht}
  ${St}
`,Ie=W.input`
  ${Ht}
`,Kt=({el:e,setIsModal:s})=>{var K,V;const{_id:i,cluster:t,title:o,group:n}=e,u=me(),[m,y]=Y.useState({value:n,label:n}),{clusterGroups:h}=we(),{register:w,watch:_,handleSubmit:g,formState:{errors:A}}=Ut({mode:"onBlur",resolver:qt(At),defaultValues:{cluster:t,title:o}}),C=async S=>{u(Re({_id:i,...S,group:m.value})),s(!1);const F=[];await u(ze()).unwrap().then(O=>{const{clusters:J}=O.result,U=Array.from(new Set(J.map(I=>I.group)));h.forEach(I=>{U.includes(I.clusterGroup)||F.push(I._id)})}),F.forEach(O=>u(_t(O)))},T=h.map(S=>({value:S.clusterGroup,label:S.clusterGroup})).sort((S,F)=>S.value.localeCompare(F.value)),H=S=>{_("title")?(u($t({clusterGroup:S})),y({value:S,label:S})):ae.error("Title is required")};return x.jsxs(Wt,{onSubmit:g(C),children:[x.jsxs(ye,{children:["Cluster ",x.jsxs("span",{children:[" ",(K=A.cluster)==null?void 0:K.message]}),x.jsx(Ie,{...w("cluster")})]}),x.jsxs(ye,{children:["Title ",x.jsxs("span",{children:[" ",(V=A.title)==null?void 0:V.message]}),x.jsx(Ie,{...w("title")})]}),x.jsxs(ye,{children:["Group",x.jsx(Xe,{value:m,options:T,onChange:S=>y(S||""),onCreateOption:H,isClearable:m})]}),x.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Kt.propTypes={el:v.object,setIsModal:v.func.isRequired};const Yt=({el:e,sortByDate:s,setSortByDate:i})=>{const t=me(),o=hr(),{activeCluster:n,clusterTrash:u}=we(),[m,y]=Y.useState(!1),{_id:h,cluster:w,title:_,favorite:g,checked:A,createdAt:C}=e,T=new Date(C).toLocaleDateString("zh-Hans-CN",{year:"2-digit",month:"2-digit",day:"2-digit"}).replaceAll("/","."),H=u.find(U=>U._id===h),K=U=>{const I=U.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},V=()=>{t(Re({_id:h,favorite:!g}))},S=()=>{t(yr(e)),e._id===n._id&&o(`/element/${h}`,{replace:!0})},F=()=>{t(Re({_id:h,checked:!A}))},O=()=>t(gr(e)),J=()=>{i(!s),s?ae.success("Ascend by Title"):ae.success("Descend by Date")};return x.jsxs(Dr,{children:[x.jsxs(Er,{$hovered:g,children:[x.jsx("input",{type:"checkbox",name:"favorite",checked:g,onChange:V}),x.jsx(Gr,{size:"18px"})]}),x.jsx(Tr,{onClick:S,children:_}),x.jsx(jr,{href:w,target:"_blank",rel:"noopener noreferrer",children:K(w)}),x.jsx(Pr,{onClick:()=>y("edit"),children:x.jsx(Rr,{size:"15px"})}),x.jsx(Br,{$hovered:H,onClick:O,children:x.jsx(Ur,{size:"16px"})}),x.jsxs(Nr,{$hovered:A,children:[x.jsx("input",{type:"checkbox",name:"checked",checked:A,onChange:F}),x.jsx(pr,{size:"15px"})]}),x.jsx(Mr,{onClick:J,children:T}),m&&x.jsx(kt,{onClick:()=>y(!1),children:x.jsx(Kt,{el:e,setIsModal:y})})]})};Yt.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func,$hovered:v.bool};const{colors:cs,indents:ds,radiuses:fs}=xe,hs=W.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${ds.xl};
  counter-reset: section 0;
  background-color: ${cs.white};
  border-radius: ${fs.xl};
`,ps=()=>{const e=me(),{allClusters:s,clusterFilter:i,clusterSelect:t}=we(),[o,n]=Y.useState(!0);Y.useEffect(()=>{e(vr()),e(ze())},[e]);const u=[...s].filter(({group:h,title:w,favorite:_,checked:g})=>{const A=h.toLowerCase().includes(i)||w.toLowerCase().includes(i),C=t.includes("favorite")?A&&_===!0:A;return t.some(T=>["checked","unchecked"].includes(T))?t.includes("checked")?C&&g===!0:C&&g===!1:C}).sort(o?(h,w)=>w.createdAt-h.createdAt:(h,w)=>h.title.localeCompare(w.title)),m=Array.from(new Set(u.map(h=>h.group))).sort((h,w)=>h.localeCompare(w)),y=t.filter(h=>!["favorite","checked","unchecked"].includes(h)).length!==0?t.filter(h=>m.includes(h)):m;return x.jsx(hs,{children:y.map(h=>x.jsxs(Y.Fragment,{children:[x.jsx(Dt,{group:h}),u.map(w=>w.group===h&&x.jsx(Yt,{el:w,sortByDate:o,setSortByDate:n},w._id))]},h))})},Jt=({cluster:e,setIsModal:s})=>{var A;const i=me(),[t,o]=Y.useState(""),{clusterGroups:n}=we(),{register:u,watch:m,handleSubmit:y,formState:{errors:h}}=Ut({mode:"onBlur",resolver:qt(At),defaultValues:{cluster:e}}),w=C=>{i(br({...C,group:t.value})),s(!1)},_=n.map(C=>({value:C.clusterGroup,label:C.clusterGroup})).sort((C,T)=>C.value.localeCompare(T.value)),g=C=>{m("title")?(i($t({clusterGroup:C})),o({value:C,label:C})):ae.error("Title is required")};return x.jsxs(Wt,{onSubmit:y(w),children:[x.jsxs(ye,{children:[e.length<=45?e:e.substring(0,45)+"...",x.jsx(us,{...u("cluster")})]}),x.jsxs(ye,{children:["Title ",x.jsxs("span",{children:[" ",(A=h.title)==null?void 0:A.message]}),x.jsx(Ie,{...u("title")})]}),x.jsxs(ye,{children:["Group",x.jsx(Xe,{value:t,options:_,onChange:C=>o(C||""),onCreateOption:g,isClearable:t})]}),x.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Jt.propTypes={cluster:v.string.isRequired,setIsModal:v.func.isRequired};const{button:Vt}=xe.shadows,ys=()=>{const e=me(),[s,i]=Y.useState(!1),[t,o]=Y.useState(""),{clusterTrash:n,clusterGroups:u}=we(),m=n.length>0,y=async w=>{const _=await Sr();try{await Vr.validate({cluster:_}),o(_),i("add")}catch(g){w.target.blur(),ae.error(`Invalid cluster, ${g.message}`)}},h=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await n.forEach(_=>e(mr(_._id))),e(wr());const w=[];await e(ze()).unwrap().then(_=>{const{clusters:g}=_.result,A=Array.from(new Set(g.map(C=>C.group)));u.forEach(C=>{A.includes(C.clusterGroup)||w.push(C._id)})}),w.forEach(_=>e(_t(_)))};return x.jsxs(xr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[m?x.jsx(ct,{onClick:h,$s:"m",$bs:Vt,children:"Delete"}):x.jsx("span",{}),x.jsx(ct,{onClick:y,$s:"m",$bs:Vt,children:"Add"}),s&&x.jsx(kt,{onClick:()=>i(!1),children:x.jsx(Jt,{cluster:t,setIsModal:i})})]})},ws=()=>{const{s:e,m:s}=xe.indents;return x.jsxs(Cr,{$p:`2px ${s} ${e}`,children:[x.jsx(ps,{}),x.jsx(ys,{})]})};export{ws as default};
