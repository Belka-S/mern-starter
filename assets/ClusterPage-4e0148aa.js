import{_ as sr,r as Y,w as at,x as De,y as ir,z as lt,A as nr,C as or,D as ar,S as lr,E as ur,Q as he,n as ue,s as z,t as xe,L as cr,P as b,j as x,G as qe,R as ne,H as dr,I as fr,J as hr,u as me,K as we,N as Re,O as We,T as Vt,e as _t,U as pr,M as $t,V as gr,W as yr,X as vr,Y as br,Z as xr,$ as ut,a0 as mr,a1 as wr,F as Cr}from"./index-f75d6b89.js";import{t as kt,c as Vr}from"./clusterSchema-03edf6e1.js";var _r=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],ct=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},Ee={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return ct(s,n,o)})||t.some(function(n){return ct(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function $r(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ee.formatCreateLabel:n,f=e.isValidNewOption,h=f===void 0?Ee.isValidNewOption:f,V=e.getNewOptionData,_=V===void 0?Ee.getNewOptionData:V,m=e.onCreateOption,y=e.options,S=y===void 0?[]:y,C=e.onChange,E=sr(e,_r),U=E.getOptionValue,I=U===void 0?nr:U,w=E.getOptionLabel,A=w===void 0?or:w,T=E.inputValue,O=E.isLoading,Z=E.isMulti,H=E.value,J=E.name,B=Y.useMemo(function(){return h(T,at(H),S,{getOptionValue:I,getOptionLabel:A})?_(T,u(T)):void 0},[u,_,A,I,T,h,S,H]),re=Y.useMemo(function(){return(i||!O)&&B?o==="first"?[B].concat(De(S)):[].concat(De(S),[B]):S},[i,o,O,B,S]),Q=Y.useCallback(function(k,$){if($.action!=="select-option")return C(k,$);var L=Array.isArray(k)?k:[k];if(L[L.length-1]===B){if(m)m(T);else{var P=_(T,T),W={action:"create-option",name:J,option:P};C(ir(Z,[].concat(De(at(H)),[P]),P),W)}return}C(k,$)},[_,T,Z,J,B,m,C,H]);return lt(lt({},E),{},{options:re,onChange:Q})}var kr=Y.forwardRef(function(e,s){var i=ar(e),t=$r(i);return Y.createElement(lr,ur({ref:s},t))}),Ar=kr;const Sr=async()=>{if(!navigator.clipboard){he.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&he.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){he.error(e.message)}},At=ue`
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
`;ue`
  opacity: 0;
  pointer-events: none;
`;const{colors:R,shadows:Or,indents:Fr,radiuses:dt}=xe,St=ue`
  margin: 0 ${Fr.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr 1fr;
  grid-template-areas: '. title title . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${R.borderLight};
`,Lr=z.li`
  ${St}
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
`,Tr=z.li`
  ${St}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${R.border};
    box-shadow: ${Or.back};
    background-color: ${R.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Ot=ue`
  font-size: 16px;

  &:hover {
    color: ${R.hovered};
  }
`,jr=z(cr)`
  ${Ot}

  color: ${R.black};

  font-weight: 500;
`,Dr=z.a`
  ${Ot}

  color: ${R.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${R.black};
  }
`,Ft=ue`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${At}
  }
`,Er=z.label`
  ${Ft}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?R.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?R.yellow:R.border};
  }
  &:hover svg {
    stroke: ${R.placeholder};
  }
`,Mr=z.label`
  ${Ft}
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
`,Lt=ue`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${R.border};
  }
  &:hover svg {
    color: ${R.placeholder};
  }
`,Nr=z.button`
  ${Lt}

  opacity: ${({$hovered:e})=>e?1:0};
`,Pr=z.button`
  ${Lt}

  opacity:0;
`,Tt=({group:e})=>x.jsx(Lr,{children:x.jsx("h2",{children:e})});Tt.propTypes={group:b.string};function Br(e){return qe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Gr(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Rr(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}var Ce=e=>e.type==="checkbox",fe=e=>e instanceof Date,q=e=>e==null;const jt=e=>typeof e=="object";var N=e=>!q(e)&&!Array.isArray(e)&&jt(e)&&!fe(e),Ur=e=>N(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,Ir=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,qr=(e,s)=>e.has(Ir(s)),Wr=e=>{const s=e.constructor&&e.constructor.prototype;return N(s)&&s.hasOwnProperty("isPrototypeOf")},ze=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(ze&&(e instanceof Blob||e instanceof FileList))&&(i||N(e)))if(s=i?[]:{},!i&&!Wr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=ie(e[t]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],M=e=>e===void 0,p=(e,s,i)=>{if(!s||!N(e))return i;const t=Ve(s.split(/[,[\].]+?/)).reduce((o,n)=>q(o)?o:o[n],e);return M(t)||t===e?M(e[s])?i:e[s]:t};const ft={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},X={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var zr=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==X.all&&(s._proxyFormState[u]=!t||X.all),i&&(i[u]=!0),e[u]}});return o},K=e=>N(e)&&!Object.keys(e).length,Hr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return K(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||X.all))},Me=e=>Array.isArray(e)?e:[e];function Kr(e){const s=ne.useRef(e);s.current=e,ne.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var te=e=>typeof e=="string",Yr=(e,s,i,t,o)=>te(e)?(t&&s.watch.add(e),p(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),p(i,n))):(t&&(s.watchAll=!0),i),He=e=>/^\w*$/.test(e),Dt=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/));function F(e,s,i){let t=-1;const o=He(s)?[s]:Dt(s),n=o.length,u=n-1;for(;++t<n;){const f=o[t];let h=i;if(t!==u){const V=e[f];h=N(V)||Array.isArray(V)?V:isNaN(+o[t+1])?{}:[]}e[f]=h,e=e[f]}return e}var Et=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Ue=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=p(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else N(u)&&Ue(u,s)}}};var ht=e=>({isOnSubmit:!e||e===X.onSubmit,isOnBlur:e===X.onBlur,isOnChange:e===X.onChange,isOnAll:e===X.all,isOnTouch:e===X.onTouched}),pt=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Jr=(e,s,i)=>{const t=Ve(p(e,i));return F(t,"root",s[i]),F(e,i,t),e},pe=e=>typeof e=="boolean",Ke=e=>e.type==="file",oe=e=>typeof e=="function",$e=e=>{if(!ze)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},_e=e=>te(e),Ye=e=>e.type==="radio",ke=e=>e instanceof RegExp;const gt={value:!1,isValid:!1},yt={value:!0,isValid:!0};var Mt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!M(e[0].attributes.value)?M(e[0].value)||e[0].value===""?yt:{value:e[0].value,isValid:!0}:yt:gt}return gt};const vt={isValid:!1,value:null};var Nt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,vt):vt;function bt(e,s,i="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||pe(e)&&!e)return{type:i,message:_e(e)?e:"",ref:s}}var de=e=>N(e)&&!ke(e)?e:{value:e,message:""},xt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:f,maxLength:h,minLength:V,min:_,max:m,pattern:y,validate:S,name:C,valueAsNumber:E,mount:U,disabled:I}=e._f,w=p(s,C);if(!U||I)return{};const A=u?u[0]:n,T=k=>{t&&A.reportValidity&&(A.setCustomValidity(pe(k)?"":k||""),A.reportValidity())},O={},Z=Ye(n),H=Ce(n),J=Z||H,B=(E||Ke(n))&&M(n.value)&&M(w)||$e(n)&&n.value===""||w===""||Array.isArray(w)&&!w.length,re=Et.bind(null,C,i,O),Q=(k,$,L,P=se.maxLength,W=se.minLength)=>{const ee=k?$:L;O[C]={type:k?P:W,message:ee,ref:n,...re(k?P:W,ee)}};if(o?!Array.isArray(w)||!w.length:f&&(!J&&(B||q(w))||pe(w)&&!w||H&&!Mt(u).isValid||Z&&!Nt(u).isValid)){const{value:k,message:$}=_e(f)?{value:!!f,message:f}:de(f);if(k&&(O[C]={type:se.required,message:$,ref:A,...re(se.required,$)},!i))return T($),O}if(!B&&(!q(_)||!q(m))){let k,$;const L=de(m),P=de(_);if(!q(w)&&!isNaN(w)){const W=n.valueAsNumber||w&&+w;q(L.value)||(k=W>L.value),q(P.value)||($=W<P.value)}else{const W=n.valueAsDate||new Date(w),ee=ve=>new Date(new Date().toDateString()+" "+ve),ae=n.type=="time",ye=n.type=="week";te(L.value)&&w&&(k=ae?ee(w)>ee(L.value):ye?w>L.value:W>new Date(L.value)),te(P.value)&&w&&($=ae?ee(w)<ee(P.value):ye?w<P.value:W<new Date(P.value))}if((k||$)&&(Q(!!k,L.message,P.message,se.max,se.min),!i))return T(O[C].message),O}if((h||V)&&!B&&(te(w)||o&&Array.isArray(w))){const k=de(h),$=de(V),L=!q(k.value)&&w.length>+k.value,P=!q($.value)&&w.length<+$.value;if((L||P)&&(Q(L,k.message,$.message),!i))return T(O[C].message),O}if(y&&!B&&te(w)){const{value:k,message:$}=de(y);if(ke(k)&&!w.match(k)&&(O[C]={type:se.pattern,message:$,ref:n,...re(se.pattern,$)},!i))return T($),O}if(S){if(oe(S)){const k=await S(w,s),$=bt(k,A);if($&&(O[C]={...$,...re(se.validate,$.message)},!i))return T($.message),O}else if(N(S)){let k={};for(const $ in S){if(!K(k)&&!i)break;const L=bt(await S[$](w,s),A,$);L&&(k={...L,...re($,L.message)},T(L.message),i&&(O[C]=k))}if(!K(k)&&(O[C]={ref:A,...k},!i))return O}}return T(!0),O};function Qr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=M(e)?t++:e[s[t++]];return e}function Xr(e){for(const s in e)if(e.hasOwnProperty(s)&&!M(e[s]))return!1;return!0}function G(e,s){const i=Array.isArray(s)?s:He(s)?[s]:Dt(s),t=i.length===1?e:Qr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(N(t)&&K(t)||Array.isArray(t)&&Xr(t))&&G(e,i.slice(0,-1)),e}function Ne(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>q(e)||!jt(e);function le(e,s){if(Ae(e)||Ae(s))return e===s;if(fe(e)&&fe(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(fe(n)&&fe(u)||N(n)&&N(u)||Array.isArray(n)&&Array.isArray(u)?!le(n,u):n!==u)return!1}}return!0}var Pt=e=>e.type==="select-multiple",Zr=e=>Ye(e)||Ce(e),Pe=e=>$e(e)&&e.isConnected,Bt=e=>{for(const s in e)if(oe(e[s]))return!0;return!1};function Se(e,s={}){const i=Array.isArray(e);if(N(e)||i)for(const t in e)Array.isArray(e[t])||N(e[t])&&!Bt(e[t])?(s[t]=Array.isArray(e[t])?[]:{},Se(e[t],s[t])):q(e[t])||(s[t]=!0);return s}function Gt(e,s,i){const t=Array.isArray(e);if(N(e)||t)for(const o in e)Array.isArray(e[o])||N(e[o])&&!Bt(e[o])?M(s)||Ae(i[o])?i[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Gt(e[o],q(s)?{}:s[o],i[o]):i[o]=!le(e[o],s[o]);return i}var Be=(e,s)=>Gt(e,s,Se(s)),Rt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>M(e)?e:s?e===""?NaN:e&&+e:i&&te(e)?new Date(e):t?t(e):e;function Ge(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ke(s)?s.files:Ye(s)?Nt(e.refs).value:Pt(s)?[...s.selectedOptions].map(({value:i})=>i):Ce(s)?Mt(e.refs).value:Rt(M(s.value)?e.ref.value:s.value,e)}var es=(e,s,i,t)=>{const o={};for(const n of e){const u=p(s,n);u&&F(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},be=e=>M(e)?e:ke(e)?e.source:N(e)?ke(e.value)?e.value.source:e.value:e,ts=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function mt(e,s,i){const t=p(e,i);if(t||He(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=p(s,n),f=p(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(f&&f.type)return{name:n,error:f};o.pop()}return{name:i}}var rs=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,ss=(e,s)=>!Ve(p(e,s)).length&&G(e,s);const is={mode:X.onSubmit,reValidateMode:X.onChange,shouldFocusError:!0};function ns(e={},s){let i={...is,...e},t={submitCount:0,isDirty:!1,isLoading:oe(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=N(i.defaultValues)||N(i.values)?ie(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:ie(n),f={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,_=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:Ne(),array:Ne(),state:Ne()},S=e.resetOptions&&e.resetOptions.keepDirtyValues,C=ht(i.mode),E=ht(i.reValidateMode),U=i.criteriaMode===X.all,I=r=>a=>{clearTimeout(_),_=setTimeout(r,a)},w=async r=>{if(m.isValid||r){const a=i.resolver?K((await B()).errors):await Q(o,!0);a!==t.isValid&&y.state.next({isValid:a})}},A=r=>m.isValidating&&y.state.next({isValidating:r}),T=(r,a=[],l,g,d=!0,c=!0)=>{if(g&&l){if(f.action=!0,c&&Array.isArray(p(o,r))){const v=l(p(o,r),g.argA,g.argB);d&&F(o,r,v)}if(c&&Array.isArray(p(t.errors,r))){const v=l(p(t.errors,r),g.argA,g.argB);d&&F(t.errors,r,v),ss(t.errors,r)}if(m.touchedFields&&c&&Array.isArray(p(t.touchedFields,r))){const v=l(p(t.touchedFields,r),g.argA,g.argB);d&&F(t.touchedFields,r,v)}m.dirtyFields&&(t.dirtyFields=Be(n,u)),y.state.next({name:r,isDirty:$(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else F(u,r,a)},O=(r,a)=>{F(t.errors,r,a),y.state.next({errors:t.errors})},Z=(r,a,l,g)=>{const d=p(o,r);if(d){const c=p(u,r,M(l)?p(n,r):l);M(c)||g&&g.defaultChecked||a?F(u,r,a?c:Ge(d._f)):W(r,c),f.mount&&w()}},H=(r,a,l,g,d)=>{let c=!1,v=!1;const j={name:r};if(!l||g){m.isDirty&&(v=t.isDirty,t.isDirty=j.isDirty=$(),c=v!==j.isDirty);const D=le(p(n,r),a);v=p(t.dirtyFields,r),D?G(t.dirtyFields,r):F(t.dirtyFields,r,!0),j.dirtyFields=t.dirtyFields,c=c||m.dirtyFields&&v!==!D}if(l){const D=p(t.touchedFields,r);D||(F(t.touchedFields,r,l),j.touchedFields=t.touchedFields,c=c||m.touchedFields&&D!==l)}return c&&d&&y.state.next(j),c?j:{}},J=(r,a,l,g)=>{const d=p(t.errors,r),c=m.isValid&&pe(a)&&t.isValid!==a;if(e.delayError&&l?(V=I(()=>O(r,l)),V(e.delayError)):(clearTimeout(_),V=null,l?F(t.errors,r,l):G(t.errors,r)),(l?!le(d,l):d)||!K(g)||c){const v={...g,...c&&pe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...v},y.state.next(v)}A(!1)},B=async r=>i.resolver(u,i.context,es(r||h.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),re=async r=>{const{errors:a}=await B();if(r)for(const l of r){const g=p(a,l);g?F(t.errors,l,g):G(t.errors,l)}else t.errors=a;return a},Q=async(r,a,l={valid:!0})=>{for(const g in r){const d=r[g];if(d){const{_f:c,...v}=d;if(c){const j=h.array.has(c.name),D=await xt(d,u,U,i.shouldUseNativeValidation&&!a,j);if(D[c.name]&&(l.valid=!1,a))break;!a&&(p(D,c.name)?j?Jr(t.errors,D,c.name):F(t.errors,c.name,D[c.name]):G(t.errors,c.name))}v&&await Q(v,a,l)}}return l.valid},k=()=>{for(const r of h.unMount){const a=p(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Pe(l)):!Pe(a._f.ref))&&Fe(r)}h.unMount=new Set},$=(r,a)=>(r&&a&&F(u,r,a),!le(Xe(),n)),L=(r,a,l)=>Yr(r,h,{...f.mount?u:M(a)?n:te(r)?{[r]:a}:a},l,a),P=r=>Ve(p(f.mount?u:n,r,e.shouldUnregister?p(n,r,[]):[])),W=(r,a,l={})=>{const g=p(o,r);let d=a;if(g){const c=g._f;c&&(!c.disabled&&F(u,r,Rt(a,c)),d=$e(c.ref)&&q(a)?"":a,Pt(c.ref)?[...c.ref.options].forEach(v=>v.selected=d.includes(v.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(d)?!!d.find(j=>j===v.value):d===v.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(v=>v.checked=v.value===d):Ke(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||y.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&H(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ve(r)},ee=(r,a,l)=>{for(const g in a){const d=a[g],c=`${r}.${g}`,v=p(o,c);(h.array.has(r)||!Ae(d)||v&&!v._f)&&!fe(d)?ee(c,d,l):W(c,d,l)}},ae=(r,a,l={})=>{const g=p(o,r),d=h.array.has(r),c=ie(a);F(u,r,c),d?(y.array.next({name:r,values:{...u}}),(m.isDirty||m.dirtyFields)&&l.shouldDirty&&y.state.next({name:r,dirtyFields:Be(n,u),isDirty:$(r,c)})):g&&!g._f&&!q(c)?ee(r,c,l):W(r,c,l),pt(r,h)&&y.state.next({...t}),y.values.next({name:r,values:{...u}}),!f.mount&&s()},ye=async r=>{const a=r.target;let l=a.name,g=!0;const d=p(o,l),c=()=>a.type?Ge(d._f):Ur(r);if(d){let v,j;const D=c(),ce=r.type===ft.BLUR||r.type===ft.FOCUS_OUT,er=!ts(d._f)&&!i.resolver&&!p(t.errors,l)&&!d._f.deps||rs(ce,p(t.touchedFields,l),t.isSubmitted,E,C),Te=pt(l,h,ce);F(u,l,D),ce?(d._f.onBlur&&d._f.onBlur(r),V&&V(0)):d._f.onChange&&d._f.onChange(r);const je=H(l,D,ce,!1),tr=!K(je)||Te;if(!ce&&y.values.next({name:l,type:r.type,values:{...u}}),er)return m.isValid&&w(),tr&&y.state.next({name:l,...Te?{}:je});if(!ce&&Te&&y.state.next({...t}),A(!0),i.resolver){const{errors:nt}=await B([l]),rr=mt(t.errors,o,l),ot=mt(nt,o,rr.name||l);v=ot.error,l=ot.name,j=K(nt)}else v=(await xt(d,u,U,i.shouldUseNativeValidation))[l],g=isNaN(D)||D===p(u,l,D),g&&(v?j=!1:m.isValid&&(j=await Q(o,!0)));g&&(d._f.deps&&ve(d._f.deps),J(l,j,v,je))}},ve=async(r,a={})=>{let l,g;const d=Me(r);if(A(!0),i.resolver){const c=await re(M(r)?r:d);l=K(c),g=r?!d.some(v=>p(c,v)):l}else r?(g=(await Promise.all(d.map(async c=>{const v=p(o,c);return await Q(v&&v._f?{[c]:v}:v)}))).every(Boolean),!(!g&&!t.isValid)&&w()):g=l=await Q(o);return y.state.next({...!te(r)||m.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!g&&Ue(o,c=>c&&p(t.errors,c),r?d:h.mount),g},Xe=r=>{const a={...n,...f.mount?u:{}};return M(r)?a:te(r)?p(a,r):r.map(l=>p(a,l))},Ze=(r,a)=>({invalid:!!p((a||t).errors,r),isDirty:!!p((a||t).dirtyFields,r),isTouched:!!p((a||t).touchedFields,r),error:p((a||t).errors,r)}),Qt=r=>{r&&Me(r).forEach(a=>G(t.errors,a)),y.state.next({errors:r?t.errors:{}})},et=(r,a,l)=>{const g=(p(o,r,{_f:{}})._f||{}).ref;F(t.errors,r,{...a,ref:g}),y.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},Xt=(r,a)=>oe(r)?y.values.subscribe({next:l=>r(L(void 0,a),l)}):L(r,a,!0),Fe=(r,a={})=>{for(const l of r?Me(r):h.mount)h.mount.delete(l),h.array.delete(l),a.keepValue||(G(o,l),G(u,l)),!a.keepError&&G(t.errors,l),!a.keepDirty&&G(t.dirtyFields,l),!a.keepTouched&&G(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&G(n,l);y.values.next({values:{...u}}),y.state.next({...t,...a.keepDirty?{isDirty:$()}:{}}),!a.keepIsValid&&w()},Le=(r,a={})=>{let l=p(o,r);const g=pe(a.disabled);return F(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),h.mount.add(r),l?g&&F(u,r,a.disabled?void 0:p(u,r,Ge(l._f))):Z(r,!0,a.value),{...g?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:be(a.min),max:be(a.max),minLength:be(a.minLength),maxLength:be(a.maxLength),pattern:be(a.pattern)}:{},name:r,onChange:ye,onBlur:ye,ref:d=>{if(d){Le(r,a),l=p(o,r);const c=M(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,v=Zr(c),j=l._f.refs||[];if(v?j.find(D=>D===c):c===l._f.ref)return;F(o,r,{_f:{...l._f,...v?{refs:[...j.filter(Pe),c,...Array.isArray(p(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),Z(r,!1,void 0,c)}else l=p(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(qr(h.array,r)&&f.action)&&h.unMount.add(r)}}},tt=()=>i.shouldFocusError&&Ue(o,r=>r&&p(t.errors,r),h.mount),rt=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=ie(u);if(y.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await B();t.errors=d,g=c}else await Q(o);G(t.errors,"root"),K(t.errors)?(y.state.next({errors:{}}),await r(g,l)):(a&&await a({...t.errors},l),tt(),setTimeout(tt)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:K(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Zt=(r,a={})=>{p(o,r)&&(M(a.defaultValue)?ae(r,p(n,r)):(ae(r,a.defaultValue),F(n,r,a.defaultValue)),a.keepTouched||G(t.touchedFields,r),a.keepDirty||(G(t.dirtyFields,r),t.isDirty=a.defaultValue?$(r,p(n,r)):$()),a.keepError||(G(t.errors,r),m.isValid&&w()),y.state.next({...t}))},st=(r,a={})=>{const l=r||n,g=ie(l),d=r&&!K(r)?g:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||S)for(const c of h.mount)p(t.dirtyFields,c)?F(d,c,p(u,c)):ae(c,p(d,c));else{if(ze&&M(r))for(const c of h.mount){const v=p(o,c);if(v&&v._f){const j=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if($e(j)){const D=j.closest("form");if(D){D.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?ie(n):{}:ie(d),y.array.next({values:{...d}}),y.values.next({values:{...d}})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!f.mount&&s(),f.mount=!m.isValid||!!a.keepIsValid,f.watch=!!e.shouldUnregister,y.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!le(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Be(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},it=(r,a)=>st(oe(r)?r(u):r,a);return{control:{register:Le,unregister:Fe,getFieldState:Ze,handleSubmit:rt,setError:et,_executeSchema:B,_getWatch:L,_getDirty:$,_updateValid:w,_removeUnmounted:k,_updateFieldArray:T,_getFieldArray:P,_reset:st,_resetDefaultValues:()=>oe(i.defaultValues)&&i.defaultValues().then(r=>{it(r,i.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:y,_proxyFormState:m,get _fields(){return o},get _formValues(){return u},get _state(){return f},set _state(r){f=r},get _defaultValues(){return n},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ve,register:Le,handleSubmit:rt,watch:Xt,setValue:ae,getValues:Xe,reset:it,resetField:Zt,clearErrors:Qt,unregister:Fe,setError:et,setFocus:(r,a={})=>{const l=p(o,r),g=l&&l._f;if(g){const d=g.refs?g.refs[0]:g.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Ze}}function Ut(e={}){const s=ne.useRef(),i=ne.useRef(),[t,o]=ne.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...ns(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Kr({subject:n._subjects.state,next:u=>{Hr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ne.useEffect(()=>{e.values&&!le(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ne.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=zr(t,n),s.current}var wt=function(e,s,i){if(e&&"reportValidity"in e){var t=p(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},It=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?wt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return wt(u,o,e)})};for(var t in s.fields)i(t)},os=function(e,s){s.shouldUseNativeValidation&&It(e,s);var i={};for(var t in e){var o=p(s.fields,t);F(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function qt(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,f){try{var h=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(V){return n.shouldUseNativeValidation&&It({},n),{values:i.raw?t:V,errors:{}}}))}catch(V){return f(V)}return h&&h.then?h.then(void 0,f):h}(0,function(u){if(!u.inner)throw u;return{values:{},errors:os((f=u,h=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(f.inner||[]).reduce(function(V,_){if(V[_.path]||(V[_.path]={message:_.message,type:_.type}),h){var m=V[_.path].types,y=m&&m[_.type];V[_.path]=Et(_.path,h,V,_.type,y?[].concat(y,_.message):_.message)}return V},{})),n)};var f,h}))}catch(u){return Promise.reject(u)}}}const Je=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>x.jsx(dr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Je.propTypes={$w:b.string,$h:b.string,$s:b.string,onClick:b.func,type:b.string,disabled:b.oneOfType([b.bool,b.number]),children:b.oneOfType([b.string,b.node,b.oneOf(["img","png","svg"])])};const Qe=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:f,$oh:h,$ob:V,name:_,value:m={value:"HTML",label:"Chocolate"},defaultValue:y,placeholder:S="Create / Select...",options:C,onChange:E,isClearable:U,onCreateOption:I,isLoading:w,isDisabled:A})=>x.jsx(Ar,{theme:fr({$obh:s,$sobh:i}),styles:{...hr({$ol:t,$b:o,$bh:n,$bf:u,$o:f,$oh:h,$ob:V,$obh:s}),...e},name:_,value:m,defaultValue:y,placeholder:S,options:C,onChange:E,isClearable:U,onCreateOption:I,isLoading:w,isDisabled:A});Qe.propTypes={styles:b.arrayOf(b.object),$obh:b.string,$sobh:b.string,$ol:b.string,$b:b.string,$bh:b.string,$bf:b.string,$o:b.string,$oh:b.string,$ob:b.string,options:b.arrayOf(b.object),name:b.string,value:b.oneOfType([b.arrayOf(b.object),b.object]),defaultValue:b.oneOfType([b.arrayOf(b.object),b.object]),placeholder:b.string,onChange:b.func,isClearable:b.oneOfType([b.arrayOf(b.string),b.string,b.object]),onCreateOption:b.func,isLoading:b.bool,isDisabled:b.bool};const{colors:Oe,radiuses:Wt,shadows:as}=xe,zt=z.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Wt.m};
  background-color: ${Oe.white};
  box-shadow: ${as.auth};
`,ge=z.label`
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
`,Ht=ue`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${Oe.border};
  border-radius: ${Wt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${Oe.hovered};
  }
`,ls=z.input`
  ${Ht}
  ${At}
`,Ie=z.input`
  ${Ht}
`,Kt=({el:e,setIsModal:s})=>{var I,w;const{_id:i,cluster:t,title:o,group:n}=e,u=me(),[f,h]=Y.useState({value:n,label:n}),{clusterGroups:V}=we(),{register:_,watch:m,handleSubmit:y,formState:{errors:S}}=Ut({mode:"onBlur",resolver:qt(kt),defaultValues:{cluster:t,title:o}}),C=async A=>{u(Re({_id:i,...A,group:f.value})),s(!1);const T=[];await u(We()).unwrap().then(O=>{const{clusters:Z}=O.result,H=Array.from(new Set(Z.map(J=>J.group)));V.forEach(J=>{H.includes(J.clusterGroup)||T.push(J._id)})}),T.forEach(O=>u(Vt(O)))},E=V.map(A=>({value:A.clusterGroup,label:A.clusterGroup})).sort((A,T)=>A.value.localeCompare(T.value)),U=A=>{m("title")?(u(_t({clusterGroup:A})),h({value:A,label:A})):he.error("Title is required")};return x.jsxs(zt,{onSubmit:y(C),children:[x.jsxs(ge,{children:["Cluster ",x.jsxs("span",{children:[" ",(I=S.cluster)==null?void 0:I.message]}),x.jsx(Ie,{..._("cluster")})]}),x.jsxs(ge,{children:["Title ",x.jsxs("span",{children:[" ",(w=S.title)==null?void 0:w.message]}),x.jsx(Ie,{..._("title")})]}),x.jsxs(ge,{children:["Group",x.jsx(Qe,{value:f,options:E,onChange:A=>h(A||""),onCreateOption:U,isClearable:f})]}),x.jsx(Je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Kt.propTypes={el:b.object,setIsModal:b.func.isRequired};const Yt=({el:e})=>{const s=me(),{clusterTrash:i}=we(),[t,o]=Y.useState(!1),{_id:n,cluster:u,title:f,favorite:h,checked:V}=e,_=i.find(U=>U._id===n),m=U=>{const I=U.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},y=()=>{s(Re({_id:n,favorite:!h}))},S=()=>s(gr(e)),C=()=>{s(Re({_id:n,checked:!V}))},E=()=>s(yr(e));return x.jsxs(Tr,{children:[x.jsxs(Er,{$hovered:h,children:[x.jsx("input",{type:"checkbox",name:"favorite",checked:h,onChange:y}),x.jsx(Br,{size:"18px"})]}),x.jsx(jr,{onClick:S,to:`/element/${n}`,children:f}),x.jsx(Dr,{href:u,target:"_blank",rel:"noopener noreferrer",children:m(u)}),x.jsx(Pr,{onClick:()=>o("edit"),children:x.jsx(Gr,{size:"15px"})}),x.jsx(Nr,{$hovered:_,onClick:E,children:x.jsx(Rr,{size:"16px"})}),x.jsxs(Mr,{$hovered:V,children:[x.jsx("input",{type:"checkbox",name:"checked",checked:V,onChange:C}),x.jsx(pr,{size:"15px"})]}),t&&x.jsx($t,{onClick:()=>o(!1),children:x.jsx(Kt,{el:e,setIsModal:o})})]})};Yt.propTypes={el:b.object,$hovered:b.bool};const{colors:us,indents:cs,radiuses:ds}=xe,fs=z.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${cs.xl};
  counter-reset: section 0;
  background-color: ${us.white};
  border-radius: ${ds.xl};
`,hs=()=>{const e=me(),{allClusters:s,clusterFilter:i,clusterSelect:t}=we();Y.useEffect(()=>{e(vr()),e(We())},[e]);const o=[...s].filter(({group:f,title:h,favorite:V,checked:_})=>{const m=f.toLowerCase().includes(i)||h.toLowerCase().includes(i),y=t.includes("favorite")?m&&V===!0:m;return t.some(S=>["checked","unchecked"].includes(S))?t.includes("checked")?y&&_===!0:y&&_===!1:y}).sort((f,h)=>f.title.localeCompare(h.title)),n=Array.from(new Set(o.map(f=>f.group))).sort((f,h)=>f.localeCompare(h)),u=t.filter(f=>!["favorite","checked","unchecked"].includes(f)).length!==0?t.filter(f=>n.includes(f)):n;return x.jsx(fs,{children:u.map(f=>x.jsxs(Y.Fragment,{children:[x.jsx(Tt,{group:f}),o.map(h=>h.group===f&&x.jsx(Yt,{el:h},h._id))]},f))})},Jt=({cluster:e,setIsModal:s})=>{var S;const i=me(),[t,o]=Y.useState(""),{clusterGroups:n}=we(),{register:u,watch:f,handleSubmit:h,formState:{errors:V}}=Ut({mode:"onBlur",resolver:qt(kt),defaultValues:{cluster:e}}),_=C=>{i(br({...C,group:t.value})),s(!1)},m=n.map(C=>({value:C.clusterGroup,label:C.clusterGroup})).sort((C,E)=>C.value.localeCompare(E.value)),y=C=>{f("title")?(i(_t({clusterGroup:C})),o({value:C,label:C})):he.error("Title is required")};return x.jsxs(zt,{onSubmit:h(_),children:[x.jsxs(ge,{children:[e.length<=45?e:e.substring(0,45)+"...",x.jsx(ls,{...u("cluster")})]}),x.jsxs(ge,{children:["Title ",x.jsxs("span",{children:[" ",(S=V.title)==null?void 0:S.message]}),x.jsx(Ie,{...u("title")})]}),x.jsxs(ge,{children:["Group",x.jsx(Qe,{value:t,options:m,onChange:C=>o(C||""),onCreateOption:y,isClearable:t})]}),x.jsx(Je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Jt.propTypes={cluster:b.string.isRequired,setIsModal:b.func.isRequired};const{button:Ct}=xe.shadows,ps=()=>{const e=me(),[s,i]=Y.useState(!1),[t,o]=Y.useState(""),{clusterTrash:n,clusterGroups:u}=we(),f=n.length>0,h=async _=>{const m=await Sr();try{await Vr.validate({cluster:m}),o(m),i("add")}catch(y){_.target.blur(),he.error(`Invalid cluster, ${y.message}`)}},V=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await n.forEach(m=>e(mr(m._id))),e(wr());const _=[];await e(We()).unwrap().then(m=>{const{clusters:y}=m.result,S=Array.from(new Set(y.map(C=>C.group)));u.forEach(C=>{S.includes(C.clusterGroup)||_.push(C._id)})}),_.forEach(m=>e(Vt(m)))};return x.jsxs(xr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[f?x.jsx(ut,{onClick:V,$s:"m",$bs:Ct,children:"Delete"}):x.jsx("span",{}),x.jsx(ut,{onClick:h,$s:"m",$bs:Ct,children:"Add"}),s&&x.jsx($t,{onClick:()=>i(!1),children:x.jsx(Jt,{cluster:t,setIsModal:i})})]})},ms=()=>{const{s:e,m:s}=xe.indents;return x.jsxs(Cr,{$p:`2px ${s} ${e}`,children:[x.jsx(hs,{}),x.jsx(ps,{})]})};export{ms as default};
