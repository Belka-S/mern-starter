import{_ as sr,r as Y,w as ut,x as Ee,y as ir,z as ct,A as nr,C as or,D as ar,S as lr,E as ur,Q as he,n as ue,s as z,t as xe,L as cr,P as m,j as v,G as Fe,R as ne,H as dr,I as fr,J as hr,u as me,K as we,N as qe,O as He,T as Vt,e as $t,M as _t,U as pr,V as gr,W as yr,X as vr,Y as br,Z as Me,$ as xr,a0 as mr,a1 as wr,F as Cr}from"./index-d6a078ef.js";import{t as kt,c as Vr}from"./clusterSchema-3efb8344.js";var $r=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],dt=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},Ne={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return dt(s,n,o)})||t.some(function(n){return dt(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function _r(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ne.formatCreateLabel:n,b=e.isValidNewOption,d=b===void 0?Ne.isValidNewOption:b,x=e.getNewOptionData,_=x===void 0?Ne.getNewOptionData:x,V=e.onCreateOption,g=e.options,A=g===void 0?[]:g,C=e.onChange,j=sr(e,$r),M=j.getOptionValue,I=M===void 0?nr:M,w=j.getOptionLabel,S=w===void 0?or:w,T=j.inputValue,O=j.isLoading,Z=j.isMulti,H=j.value,J=j.name,G=Y.useMemo(function(){return d(T,ut(H),A,{getOptionValue:I,getOptionLabel:S})?_(T,u(T)):void 0},[u,_,S,I,T,d,A,H]),re=Y.useMemo(function(){return(i||!O)&&G?o==="first"?[G].concat(Ee(A)):[].concat(Ee(A),[G]):A},[i,o,O,G,A]),Q=Y.useCallback(function(k,$){if($.action!=="select-option")return C(k,$);var L=Array.isArray(k)?k:[k];if(L[L.length-1]===G){if(V)V(T);else{var B=_(T,T),W={action:"create-option",name:J,option:B};C(ir(Z,[].concat(Ee(ut(H)),[B]),B),W)}return}C(k,$)},[_,T,Z,J,G,V,C,H]);return ct(ct({},j),{},{options:re,onChange:Q})}var kr=Y.forwardRef(function(e,s){var i=ar(e),t=_r(i);return Y.createElement(lr,ur({ref:s},t))}),Ar=kr;const Sr=async()=>{if(!navigator.clipboard){he.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&he.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){he.error(e.message)}},At=ue`
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
`;const{colors:U,shadows:Or,indents:Fr,radiuses:ft}=xe,St=ue`
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
  border-bottom-color: ${U.borderLight};
`,Lr=z.li`
  ${St}
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
`,Tr=z.li`
  ${St}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${U.border};
    box-shadow: ${Or.back};
    background-color: ${U.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Ot=ue`
  font-size: 16px;

  &:hover {
    color: ${U.hovered};
  }
`,jr=z(cr)`
  ${Ot}

  color: ${U.black};

  font-weight: 500;
`,Dr=z.a`
  ${Ot}

  color: ${U.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${U.black};
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
    color: ${({$hovered:e})=>e?U.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?U.yellow:U.border};
  }
  &:hover svg {
    stroke: ${U.placeholder};
  }
`,Mr=z.label`
  ${Ft}
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
`,Lt=ue`
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
`,Nr=z.button`
  ${Lt}

  opacity: ${({$hovered:e})=>e?1:0};
`,Pr=z.button`
  ${Lt}

  opacity:0;
`,Tt=({group:e})=>v.jsx(Lr,{children:v.jsx("h2",{children:e})});Tt.propTypes={group:m.string};function Br(e){return Fe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Gr(e){return Fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Rr(e){return Fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function Ur(e){return Fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}var Ce=e=>e.type==="checkbox",fe=e=>e instanceof Date,q=e=>e==null;const jt=e=>typeof e=="object";var P=e=>!q(e)&&!Array.isArray(e)&&jt(e)&&!fe(e),Ir=e=>P(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,qr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Wr=(e,s)=>e.has(qr(s)),zr=e=>{const s=e.constructor&&e.constructor.prototype;return P(s)&&s.hasOwnProperty("isPrototypeOf")},Ke=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ke&&(e instanceof Blob||e instanceof FileList))&&(i||P(e)))if(s=i?[]:{},!i&&!zr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=ie(e[t]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,h=(e,s,i)=>{if(!s||!P(e))return i;const t=Ve(s.split(/[,[\].]+?/)).reduce((o,n)=>q(o)?o:o[n],e);return N(t)||t===e?N(e[s])?i:e[s]:t};const ht={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},X={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var Hr=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==X.all&&(s._proxyFormState[u]=!t||X.all),i&&(i[u]=!0),e[u]}});return o},K=e=>P(e)&&!Object.keys(e).length,Kr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return K(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||X.all))},Pe=e=>Array.isArray(e)?e:[e];function Yr(e){const s=ne.useRef(e);s.current=e,ne.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var te=e=>typeof e=="string",Jr=(e,s,i,t,o)=>te(e)?(t&&s.watch.add(e),h(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),h(i,n))):(t&&(s.watchAll=!0),i),Ye=e=>/^\w*$/.test(e),Dt=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/));function F(e,s,i){let t=-1;const o=Ye(s)?[s]:Dt(s),n=o.length,u=n-1;for(;++t<n;){const b=o[t];let d=i;if(t!==u){const x=e[b];d=P(x)||Array.isArray(x)?x:isNaN(+o[t+1])?{}:[]}e[b]=d,e=e[b]}return e}var Et=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const We=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=h(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else P(u)&&We(u,s)}}};var pt=e=>({isOnSubmit:!e||e===X.onSubmit,isOnBlur:e===X.onBlur,isOnChange:e===X.onChange,isOnAll:e===X.all,isOnTouch:e===X.onTouched}),gt=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Qr=(e,s,i)=>{const t=Ve(h(e,i));return F(t,"root",s[i]),F(e,i,t),e},pe=e=>typeof e=="boolean",Je=e=>e.type==="file",oe=e=>typeof e=="function",_e=e=>{if(!Ke)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},$e=e=>te(e),Qe=e=>e.type==="radio",ke=e=>e instanceof RegExp;const yt={value:!1,isValid:!1},vt={value:!0,isValid:!0};var Mt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?vt:{value:e[0].value,isValid:!0}:vt:yt}return yt};const bt={isValid:!1,value:null};var Nt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,bt):bt;function xt(e,s,i="validate"){if($e(e)||Array.isArray(e)&&e.every($e)||pe(e)&&!e)return{type:i,message:$e(e)?e:"",ref:s}}var de=e=>P(e)&&!ke(e)?e:{value:e,message:""},mt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:b,maxLength:d,minLength:x,min:_,max:V,pattern:g,validate:A,name:C,valueAsNumber:j,mount:M,disabled:I}=e._f,w=h(s,C);if(!M||I)return{};const S=u?u[0]:n,T=k=>{t&&S.reportValidity&&(S.setCustomValidity(pe(k)?"":k||""),S.reportValidity())},O={},Z=Qe(n),H=Ce(n),J=Z||H,G=(j||Je(n))&&N(n.value)&&N(w)||_e(n)&&n.value===""||w===""||Array.isArray(w)&&!w.length,re=Et.bind(null,C,i,O),Q=(k,$,L,B=se.maxLength,W=se.minLength)=>{const ee=k?$:L;O[C]={type:k?B:W,message:ee,ref:n,...re(k?B:W,ee)}};if(o?!Array.isArray(w)||!w.length:b&&(!J&&(G||q(w))||pe(w)&&!w||H&&!Mt(u).isValid||Z&&!Nt(u).isValid)){const{value:k,message:$}=$e(b)?{value:!!b,message:b}:de(b);if(k&&(O[C]={type:se.required,message:$,ref:S,...re(se.required,$)},!i))return T($),O}if(!G&&(!q(_)||!q(V))){let k,$;const L=de(V),B=de(_);if(!q(w)&&!isNaN(w)){const W=n.valueAsNumber||w&&+w;q(L.value)||(k=W>L.value),q(B.value)||($=W<B.value)}else{const W=n.valueAsDate||new Date(w),ee=ve=>new Date(new Date().toDateString()+" "+ve),ae=n.type=="time",ye=n.type=="week";te(L.value)&&w&&(k=ae?ee(w)>ee(L.value):ye?w>L.value:W>new Date(L.value)),te(B.value)&&w&&($=ae?ee(w)<ee(B.value):ye?w<B.value:W<new Date(B.value))}if((k||$)&&(Q(!!k,L.message,B.message,se.max,se.min),!i))return T(O[C].message),O}if((d||x)&&!G&&(te(w)||o&&Array.isArray(w))){const k=de(d),$=de(x),L=!q(k.value)&&w.length>+k.value,B=!q($.value)&&w.length<+$.value;if((L||B)&&(Q(L,k.message,$.message),!i))return T(O[C].message),O}if(g&&!G&&te(w)){const{value:k,message:$}=de(g);if(ke(k)&&!w.match(k)&&(O[C]={type:se.pattern,message:$,ref:n,...re(se.pattern,$)},!i))return T($),O}if(A){if(oe(A)){const k=await A(w,s),$=xt(k,S);if($&&(O[C]={...$,...re(se.validate,$.message)},!i))return T($.message),O}else if(P(A)){let k={};for(const $ in A){if(!K(k)&&!i)break;const L=xt(await A[$](w,s),S,$);L&&(k={...L,...re($,L.message)},T(L.message),i&&(O[C]=k))}if(!K(k)&&(O[C]={ref:S,...k},!i))return O}}return T(!0),O};function Xr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=N(e)?t++:e[s[t++]];return e}function Zr(e){for(const s in e)if(e.hasOwnProperty(s)&&!N(e[s]))return!1;return!0}function R(e,s){const i=Array.isArray(s)?s:Ye(s)?[s]:Dt(s),t=i.length===1?e:Xr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(P(t)&&K(t)||Array.isArray(t)&&Zr(t))&&R(e,i.slice(0,-1)),e}function Be(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>q(e)||!jt(e);function le(e,s){if(Ae(e)||Ae(s))return e===s;if(fe(e)&&fe(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(fe(n)&&fe(u)||P(n)&&P(u)||Array.isArray(n)&&Array.isArray(u)?!le(n,u):n!==u)return!1}}return!0}var Pt=e=>e.type==="select-multiple",es=e=>Qe(e)||Ce(e),Ge=e=>_e(e)&&e.isConnected,Bt=e=>{for(const s in e)if(oe(e[s]))return!0;return!1};function Se(e,s={}){const i=Array.isArray(e);if(P(e)||i)for(const t in e)Array.isArray(e[t])||P(e[t])&&!Bt(e[t])?(s[t]=Array.isArray(e[t])?[]:{},Se(e[t],s[t])):q(e[t])||(s[t]=!0);return s}function Gt(e,s,i){const t=Array.isArray(e);if(P(e)||t)for(const o in e)Array.isArray(e[o])||P(e[o])&&!Bt(e[o])?N(s)||Ae(i[o])?i[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Gt(e[o],q(s)?{}:s[o],i[o]):i[o]=!le(e[o],s[o]);return i}var Re=(e,s)=>Gt(e,s,Se(s)),Rt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>N(e)?e:s?e===""?NaN:e&&+e:i&&te(e)?new Date(e):t?t(e):e;function Ue(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Je(s)?s.files:Qe(s)?Nt(e.refs).value:Pt(s)?[...s.selectedOptions].map(({value:i})=>i):Ce(s)?Mt(e.refs).value:Rt(N(s.value)?e.ref.value:s.value,e)}var ts=(e,s,i,t)=>{const o={};for(const n of e){const u=h(s,n);u&&F(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},be=e=>N(e)?e:ke(e)?e.source:P(e)?ke(e.value)?e.value.source:e.value:e,rs=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function wt(e,s,i){const t=h(e,i);if(t||Ye(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=h(s,n),b=h(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(b&&b.type)return{name:n,error:b};o.pop()}return{name:i}}var ss=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,is=(e,s)=>!Ve(h(e,s)).length&&R(e,s);const ns={mode:X.onSubmit,reValidateMode:X.onChange,shouldFocusError:!0};function os(e={},s){let i={...ns,...e},t={submitCount:0,isDirty:!1,isLoading:oe(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=P(i.defaultValues)||P(i.values)?ie(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:ie(n),b={action:!1,mount:!1,watch:!1},d={mount:new Set,unMount:new Set,array:new Set,watch:new Set},x,_=0;const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Be(),array:Be(),state:Be()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,C=pt(i.mode),j=pt(i.reValidateMode),M=i.criteriaMode===X.all,I=r=>a=>{clearTimeout(_),_=setTimeout(r,a)},w=async r=>{if(V.isValid||r){const a=i.resolver?K((await G()).errors):await Q(o,!0);a!==t.isValid&&g.state.next({isValid:a})}},S=r=>V.isValidating&&g.state.next({isValidating:r}),T=(r,a=[],l,p,f=!0,c=!0)=>{if(p&&l){if(b.action=!0,c&&Array.isArray(h(o,r))){const y=l(h(o,r),p.argA,p.argB);f&&F(o,r,y)}if(c&&Array.isArray(h(t.errors,r))){const y=l(h(t.errors,r),p.argA,p.argB);f&&F(t.errors,r,y),is(t.errors,r)}if(V.touchedFields&&c&&Array.isArray(h(t.touchedFields,r))){const y=l(h(t.touchedFields,r),p.argA,p.argB);f&&F(t.touchedFields,r,y)}V.dirtyFields&&(t.dirtyFields=Re(n,u)),g.state.next({name:r,isDirty:$(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else F(u,r,a)},O=(r,a)=>{F(t.errors,r,a),g.state.next({errors:t.errors})},Z=(r,a,l,p)=>{const f=h(o,r);if(f){const c=h(u,r,N(l)?h(n,r):l);N(c)||p&&p.defaultChecked||a?F(u,r,a?c:Ue(f._f)):W(r,c),b.mount&&w()}},H=(r,a,l,p,f)=>{let c=!1,y=!1;const D={name:r};if(!l||p){V.isDirty&&(y=t.isDirty,t.isDirty=D.isDirty=$(),c=y!==D.isDirty);const E=le(h(n,r),a);y=h(t.dirtyFields,r),E?R(t.dirtyFields,r):F(t.dirtyFields,r,!0),D.dirtyFields=t.dirtyFields,c=c||V.dirtyFields&&y!==!E}if(l){const E=h(t.touchedFields,r);E||(F(t.touchedFields,r,l),D.touchedFields=t.touchedFields,c=c||V.touchedFields&&E!==l)}return c&&f&&g.state.next(D),c?D:{}},J=(r,a,l,p)=>{const f=h(t.errors,r),c=V.isValid&&pe(a)&&t.isValid!==a;if(e.delayError&&l?(x=I(()=>O(r,l)),x(e.delayError)):(clearTimeout(_),x=null,l?F(t.errors,r,l):R(t.errors,r)),(l?!le(f,l):f)||!K(p)||c){const y={...p,...c&&pe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...y},g.state.next(y)}S(!1)},G=async r=>i.resolver(u,i.context,ts(r||d.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),re=async r=>{const{errors:a}=await G();if(r)for(const l of r){const p=h(a,l);p?F(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},Q=async(r,a,l={valid:!0})=>{for(const p in r){const f=r[p];if(f){const{_f:c,...y}=f;if(c){const D=d.array.has(c.name),E=await mt(f,u,M,i.shouldUseNativeValidation&&!a,D);if(E[c.name]&&(l.valid=!1,a))break;!a&&(h(E,c.name)?D?Qr(t.errors,E,c.name):F(t.errors,c.name,E[c.name]):R(t.errors,c.name))}y&&await Q(y,a,l)}}return l.valid},k=()=>{for(const r of d.unMount){const a=h(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Ge(l)):!Ge(a._f.ref))&&Le(r)}d.unMount=new Set},$=(r,a)=>(r&&a&&F(u,r,a),!le(et(),n)),L=(r,a,l)=>Jr(r,d,{...b.mount?u:N(a)?n:te(r)?{[r]:a}:a},l,a),B=r=>Ve(h(b.mount?u:n,r,e.shouldUnregister?h(n,r,[]):[])),W=(r,a,l={})=>{const p=h(o,r);let f=a;if(p){const c=p._f;c&&(!c.disabled&&F(u,r,Rt(a,c)),f=_e(c.ref)&&q(a)?"":a,Pt(c.ref)?[...c.ref.options].forEach(y=>y.selected=f.includes(y.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(D=>D===y.value):f===y.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(y=>y.checked=y.value===f):Je(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||g.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&H(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ve(r)},ee=(r,a,l)=>{for(const p in a){const f=a[p],c=`${r}.${p}`,y=h(o,c);(d.array.has(r)||!Ae(f)||y&&!y._f)&&!fe(f)?ee(c,f,l):W(c,f,l)}},ae=(r,a,l={})=>{const p=h(o,r),f=d.array.has(r),c=ie(a);F(u,r,c),f?(g.array.next({name:r,values:{...u}}),(V.isDirty||V.dirtyFields)&&l.shouldDirty&&g.state.next({name:r,dirtyFields:Re(n,u),isDirty:$(r,c)})):p&&!p._f&&!q(c)?ee(r,c,l):W(r,c,l),gt(r,d)&&g.state.next({...t}),g.values.next({name:r,values:{...u}}),!b.mount&&s()},ye=async r=>{const a=r.target;let l=a.name,p=!0;const f=h(o,l),c=()=>a.type?Ue(f._f):Ir(r);if(f){let y,D;const E=c(),ce=r.type===ht.BLUR||r.type===ht.FOCUS_OUT,er=!rs(f._f)&&!i.resolver&&!h(t.errors,l)&&!f._f.deps||ss(ce,h(t.touchedFields,l),t.isSubmitted,j,C),je=gt(l,d,ce);F(u,l,E),ce?(f._f.onBlur&&f._f.onBlur(r),x&&x(0)):f._f.onChange&&f._f.onChange(r);const De=H(l,E,ce,!1),tr=!K(De)||je;if(!ce&&g.values.next({name:l,type:r.type,values:{...u}}),er)return V.isValid&&w(),tr&&g.state.next({name:l,...je?{}:De});if(!ce&&je&&g.state.next({...t}),S(!0),i.resolver){const{errors:at}=await G([l]),rr=wt(t.errors,o,l),lt=wt(at,o,rr.name||l);y=lt.error,l=lt.name,D=K(at)}else y=(await mt(f,u,M,i.shouldUseNativeValidation))[l],p=isNaN(E)||E===h(u,l,E),p&&(y?D=!1:V.isValid&&(D=await Q(o,!0)));p&&(f._f.deps&&ve(f._f.deps),J(l,D,y,De))}},ve=async(r,a={})=>{let l,p;const f=Pe(r);if(S(!0),i.resolver){const c=await re(N(r)?r:f);l=K(c),p=r?!f.some(y=>h(c,y)):l}else r?(p=(await Promise.all(f.map(async c=>{const y=h(o,c);return await Q(y&&y._f?{[c]:y}:y)}))).every(Boolean),!(!p&&!t.isValid)&&w()):p=l=await Q(o);return g.state.next({...!te(r)||V.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&We(o,c=>c&&h(t.errors,c),r?f:d.mount),p},et=r=>{const a={...n,...b.mount?u:{}};return N(r)?a:te(r)?h(a,r):r.map(l=>h(a,l))},tt=(r,a)=>({invalid:!!h((a||t).errors,r),isDirty:!!h((a||t).dirtyFields,r),isTouched:!!h((a||t).touchedFields,r),error:h((a||t).errors,r)}),Qt=r=>{r&&Pe(r).forEach(a=>R(t.errors,a)),g.state.next({errors:r?t.errors:{}})},rt=(r,a,l)=>{const p=(h(o,r,{_f:{}})._f||{}).ref;F(t.errors,r,{...a,ref:p}),g.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Xt=(r,a)=>oe(r)?g.values.subscribe({next:l=>r(L(void 0,a),l)}):L(r,a,!0),Le=(r,a={})=>{for(const l of r?Pe(r):d.mount)d.mount.delete(l),d.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&R(n,l);g.values.next({values:{...u}}),g.state.next({...t,...a.keepDirty?{isDirty:$()}:{}}),!a.keepIsValid&&w()},Te=(r,a={})=>{let l=h(o,r);const p=pe(a.disabled);return F(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),d.mount.add(r),l?p&&F(u,r,a.disabled?void 0:h(u,r,Ue(l._f))):Z(r,!0,a.value),{...p?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:be(a.min),max:be(a.max),minLength:be(a.minLength),maxLength:be(a.maxLength),pattern:be(a.pattern)}:{},name:r,onChange:ye,onBlur:ye,ref:f=>{if(f){Te(r,a),l=h(o,r);const c=N(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=es(c),D=l._f.refs||[];if(y?D.find(E=>E===c):c===l._f.ref)return;F(o,r,{_f:{...l._f,...y?{refs:[...D.filter(Ge),c,...Array.isArray(h(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),Z(r,!1,void 0,c)}else l=h(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Wr(d.array,r)&&b.action)&&d.unMount.add(r)}}},st=()=>i.shouldFocusError&&We(o,r=>r&&h(t.errors,r),d.mount),it=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=ie(u);if(g.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:c}=await G();t.errors=f,p=c}else await Q(o);R(t.errors,"root"),K(t.errors)?(g.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),st(),setTimeout(st)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:K(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Zt=(r,a={})=>{h(o,r)&&(N(a.defaultValue)?ae(r,h(n,r)):(ae(r,a.defaultValue),F(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?$(r,h(n,r)):$()),a.keepError||(R(t.errors,r),V.isValid&&w()),g.state.next({...t}))},nt=(r,a={})=>{const l=r||n,p=ie(l),f=r&&!K(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of d.mount)h(t.dirtyFields,c)?F(f,c,h(u,c)):ae(c,h(f,c));else{if(Ke&&N(r))for(const c of d.mount){const y=h(o,c);if(y&&y._f){const D=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(_e(D)){const E=D.closest("form");if(E){E.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?ie(n):{}:ie(f),g.array.next({values:{...f}}),g.values.next({values:{...f}})}d={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&s(),b.mount=!V.isValid||!!a.keepIsValid,b.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!le(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Re(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ot=(r,a)=>nt(oe(r)?r(u):r,a);return{control:{register:Te,unregister:Le,getFieldState:tt,handleSubmit:it,setError:rt,_executeSchema:G,_getWatch:L,_getDirty:$,_updateValid:w,_removeUnmounted:k,_updateFieldArray:T,_getFieldArray:B,_reset:nt,_resetDefaultValues:()=>oe(i.defaultValues)&&i.defaultValues().then(r=>{ot(r,i.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:g,_proxyFormState:V,get _fields(){return o},get _formValues(){return u},get _state(){return b},set _state(r){b=r},get _defaultValues(){return n},get _names(){return d},set _names(r){d=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ve,register:Te,handleSubmit:it,watch:Xt,setValue:ae,getValues:et,reset:ot,resetField:Zt,clearErrors:Qt,unregister:Le,setError:rt,setFocus:(r,a={})=>{const l=h(o,r),p=l&&l._f;if(p){const f=p.refs?p.refs[0]:p.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},getFieldState:tt}}function Ut(e={}){const s=ne.useRef(),i=ne.useRef(),[t,o]=ne.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...os(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,Yr({subject:n._subjects.state,next:u=>{Kr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ne.useEffect(()=>{e.values&&!le(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),ne.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Hr(t,n),s.current}var Ct=function(e,s,i){if(e&&"reportValidity"in e){var t=h(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},It=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?Ct(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return Ct(u,o,e)})};for(var t in s.fields)i(t)},as=function(e,s){s.shouldUseNativeValidation&&It(e,s);var i={};for(var t in e){var o=h(s.fields,t);F(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function qt(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,b){try{var d=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(x){return n.shouldUseNativeValidation&&It({},n),{values:i.raw?t:x,errors:{}}}))}catch(x){return b(x)}return d&&d.then?d.then(void 0,b):d}(0,function(u){if(!u.inner)throw u;return{values:{},errors:as((b=u,d=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(b.inner||[]).reduce(function(x,_){if(x[_.path]||(x[_.path]={message:_.message,type:_.type}),d){var V=x[_.path].types,g=V&&V[_.type];x[_.path]=Et(_.path,d,x,_.type,g?[].concat(g,_.message):_.message)}return x},{})),n)};var b,d}))}catch(u){return Promise.reject(u)}}}const Xe=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>v.jsx(dr,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Xe.propTypes={$w:m.string,$h:m.string,$s:m.string,onClick:m.func,type:m.string,disabled:m.oneOfType([m.bool,m.number]),children:m.oneOfType([m.string,m.node,m.oneOf(["img","png","svg"])])};const Ze=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:b,$oh:d,$ob:x,name:_,value:V={value:"HTML",label:"Chocolate"},defaultValue:g,placeholder:A="Create / Select...",options:C,onChange:j,isClearable:M,onCreateOption:I,isLoading:w,isDisabled:S})=>v.jsx(Ar,{theme:fr({$obh:s,$sobh:i}),styles:{...hr({$ol:t,$b:o,$bh:n,$bf:u,$o:b,$oh:d,$ob:x,$obh:s}),...e},name:_,value:V,defaultValue:g,placeholder:A,options:C,onChange:j,isClearable:M,onCreateOption:I,isLoading:w,isDisabled:S});Ze.propTypes={styles:m.arrayOf(m.object),$obh:m.string,$sobh:m.string,$ol:m.string,$b:m.string,$bh:m.string,$bf:m.string,$o:m.string,$oh:m.string,$ob:m.string,options:m.arrayOf(m.object),name:m.string,value:m.oneOfType([m.object,m.string]),defaultValue:m.oneOfType([m.object,m.string]),placeholder:m.string,onChange:m.func,isClearable:m.oneOfType([m.object,m.string]),onCreateOption:m.func,isLoading:m.bool,isDisabled:m.bool};const{colors:Oe,radiuses:Wt,shadows:ls}=xe,zt=z.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Wt.m};
  background-color: ${Oe.white};
  box-shadow: ${ls.auth};
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
`,us=z.input`
  ${Ht}
  ${At}
`,ze=z.input`
  ${Ht}
`,Kt=({el:e,setIsModal:s})=>{var I,w;const{_id:i,cluster:t,title:o,group:n}=e,u=me(),[b,d]=Y.useState({value:n,label:n}),{clusterGroups:x}=we(),{register:_,watch:V,handleSubmit:g,formState:{errors:A}}=Ut({mode:"onBlur",resolver:qt(kt),defaultValues:{cluster:t,title:o}}),C=async S=>{u(qe({_id:i,...S,group:b.value})),s(!1);const T=[];await u(He()).unwrap().then(O=>{const{clusters:Z}=O.result,H=Array.from(new Set(Z.map(J=>J.group)));x.forEach(J=>{H.includes(J.clusterGroup)||T.push(J._id)})}),T.forEach(O=>u(Vt(O)))},j=x.map(S=>({value:S.clusterGroup,label:S.clusterGroup})).sort((S,T)=>S.value.localeCompare(T.value)),M=S=>{V("title")?(u($t({clusterGroup:S})),d({value:S,label:S})):he.error("Title is required")};return v.jsxs(zt,{onSubmit:g(C),children:[v.jsxs(ge,{children:["Cluster ",v.jsxs("span",{children:[" ",(I=A.cluster)==null?void 0:I.message]}),v.jsx(ze,{..._("cluster")})]}),v.jsxs(ge,{children:["Title ",v.jsxs("span",{children:[" ",(w=A.title)==null?void 0:w.message]}),v.jsx(ze,{..._("title")})]}),v.jsxs(ge,{children:["Group",v.jsx(Ze,{value:b,options:j,onChange:S=>d(S||""),onCreateOption:M,isClearable:b})]}),v.jsx(Xe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Kt.propTypes={el:m.object,setIsModal:m.func.isRequired};const Yt=({el:e})=>{const s=me(),{clusterTrash:i}=we(),[t,o]=Y.useState(!1),{_id:n,cluster:u,title:b,favorite:d,checked:x}=e,_=i.find(M=>M._id===n),V=M=>{const I=M.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},g=()=>{s(qe({_id:n,favorite:!d}))},A=()=>s(pr(e)),C=()=>{s(qe({_id:n,checked:!x}))},j=()=>s(gr(e));return v.jsxs(Tr,{children:[v.jsxs(Er,{$hovered:d,children:[v.jsx("input",{type:"checkbox",name:"favorite",checked:d,onChange:g}),v.jsx(Br,{size:"18px"})]}),v.jsx(jr,{onClick:A,to:`/element/${n}`,children:b}),v.jsx(Dr,{href:u,target:"_blank",rel:"noopener noreferrer",children:V(u)}),v.jsx(Pr,{onClick:()=>o("edit"),children:v.jsx(Gr,{size:"15px"})}),v.jsx(Nr,{$hovered:_,onClick:j,children:v.jsx(Rr,{size:"16px"})}),v.jsxs(Mr,{$hovered:x,children:[v.jsx("input",{type:"checkbox",name:"checked",checked:x,onChange:C}),v.jsx(Ur,{size:"15px"})]}),t&&v.jsx(_t,{onClick:()=>o(!1),children:v.jsx(Kt,{el:e,setIsModal:o})})]})};Yt.propTypes={el:m.object,$hovered:m.bool};const{colors:cs,indents:ds,radiuses:fs}=xe,hs=z.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${ds.xl};
  counter-reset: section 0;
  background-color: ${cs.white};
  border-radius: ${fs.xl};
`,ps=()=>{const e=me(),{allClusters:s,clusterFilter:i,clusterSelect:t,clusterChecked:o}=we();Y.useEffect(()=>{e(yr()),e(He())},[e]);const n=[...s].filter(({cluster:d,title:x,checked:_})=>{const V=d.toLowerCase().includes(i)||x.toLowerCase().includes(i);return o?V&&_!==o:V}).sort((d,x)=>d.title.localeCompare(x.title)),b=Array.from(new Set(n.map(d=>d.group))).sort((d,x)=>d.localeCompare(x)).filter(d=>t?d===t&&d:d);return v.jsx(hs,{children:b.map(d=>v.jsxs(Y.Fragment,{children:[v.jsx(Tt,{group:d}),n.map(x=>x.group===d&&v.jsx(Yt,{el:x},x._id))]},d))})},Jt=({cluster:e,setIsModal:s})=>{var A;const i=me(),[t,o]=Y.useState(""),{clusterGroups:n}=we(),{register:u,watch:b,handleSubmit:d,formState:{errors:x}}=Ut({mode:"onBlur",resolver:qt(kt),defaultValues:{cluster:e}}),_=C=>{i(vr({...C,group:t.value})),s(!1)},V=n.map(C=>({value:C.clusterGroup,label:C.clusterGroup})).sort((C,j)=>C.value.localeCompare(j.value)),g=C=>{b("title")?(i($t({clusterGroup:C})),o({value:C,label:C})):he.error("Title is required")};return v.jsxs(zt,{onSubmit:d(_),children:[v.jsxs(ge,{children:[e.length<=45?e:e.substring(0,45)+"...",v.jsx(us,{...u("cluster")})]}),v.jsxs(ge,{children:["Title ",v.jsxs("span",{children:[" ",(A=x.title)==null?void 0:A.message]}),v.jsx(ze,{...u("title")})]}),v.jsxs(ge,{children:["Group",v.jsx(Ze,{value:t,options:V,onChange:C=>o(C||""),onCreateOption:g,isClearable:t})]}),v.jsx(Xe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Jt.propTypes={cluster:m.string.isRequired,setIsModal:m.func.isRequired};const{button:Ie}=xe.shadows,gs=()=>{const e=me(),[s,i]=Y.useState(!1),[t,o]=Y.useState(""),{clusterChecked:n,clusterTrash:u,clusterGroups:b}=we(),d=u.length>0,x=async g=>{const A=await Sr();try{await Vr.validate({cluster:A}),o(A),i("add")}catch(C){g.target.blur(),he.error(`Invalid cluster, ${C.message}`)}},_=g=>{e(xr(!n)),g.target.blur()},V=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await u.forEach(A=>e(mr(A._id))),e(wr());const g=[];await e(He()).unwrap().then(A=>{const{clusters:C}=A.result,j=Array.from(new Set(C.map(M=>M.group)));b.forEach(M=>{j.includes(M.clusterGroup)||g.push(M._id)})}),g.forEach(A=>e(Vt(A)))};return v.jsxs(br,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr 1fr",children:[d?v.jsx(Me,{onClick:V,$s:"m",$bs:Ie,children:"Delete"}):v.jsx("span",{}),v.jsx(Me,{onClick:_,$s:"m",$bs:Ie,children:n?"Show":"Hide"}),v.jsx(Me,{onClick:x,$s:"m",$bs:Ie,children:"Add"}),s&&v.jsx(_t,{onClick:()=>i(!1),children:v.jsx(Jt,{cluster:t,setIsModal:i})})]})},ws=()=>{const{s:e,m:s}=xe.indents;return v.jsxs(Cr,{$p:`2px ${s} ${e}`,children:[v.jsx(ps,{}),v.jsx(gs,{})]})};export{ws as default};
