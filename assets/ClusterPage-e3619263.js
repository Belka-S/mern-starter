import{_ as ir,r as Y,w as lt,x as je,y as nr,z as ut,A as or,C as ar,D as lr,S as ur,E as cr,Q as ae,n as ce,s as W,t as xe,P as v,j as x,G as qe,R as ne,H as dr,I as fr,J as hr,u as me,K as we,N as Re,O as ze,T as _t,e as kt,g as pr,U as yr,M as At,V as gr,W as vr,X as br,Y as xr,Z as mr,$ as ct,a0 as wr,a1 as Cr,F as Vr}from"./index-89680d23.js";import{t as St,c as $r}from"./clusterSchema-cb14ac29.js";var _r=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],dt=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(i).toLowerCase(),n=String(t.getOptionValue(s)).toLowerCase(),u=String(t.getOptionLabel(s)).toLowerCase();return n===o||u===o},Ee={formatCreateLabel:function(i){return'Create "'.concat(i,'"')},isValidNewOption:function(i,s,t,o){return!(!i||s.some(function(n){return dt(i,n,o)})||t.some(function(n){return dt(i,n,o)}))},getNewOptionData:function(i,s){return{label:s,value:i,__isNew__:!0}}};function kr(e){var i=e.allowCreateWhileLoading,s=i===void 0?!1:i,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ee.formatCreateLabel:n,m=e.isValidNewOption,y=m===void 0?Ee.isValidNewOption:m,h=e.getNewOptionData,w=h===void 0?Ee.getNewOptionData:h,$=e.onCreateOption,g=e.options,A=g===void 0?[]:g,C=e.onChange,T=ir(e,_r),H=T.getOptionValue,K=H===void 0?or:H,V=T.getOptionLabel,S=V===void 0?ar:V,F=T.inputValue,O=T.isLoading,J=T.isMulti,U=T.value,I=T.name,G=Y.useMemo(function(){return y(F,lt(U),A,{getOptionValue:K,getOptionLabel:S})?w(F,u(F)):void 0},[u,w,S,K,F,y,A,U]),re=Y.useMemo(function(){return(s||!O)&&G?o==="first"?[G].concat(je(A)):[].concat(je(A),[G]):A},[s,o,O,G,A]),X=Y.useCallback(function(k,_){if(_.action!=="select-option")return C(k,_);var D=Array.isArray(k)?k:[k];if(D[D.length-1]===G){if($)$(F);else{var B=w(F,F),z={action:"create-option",name:I,option:B};C(nr(J,[].concat(je(lt(U)),[B]),B),z)}return}C(k,_)},[w,F,J,I,G,$,C,U]);return ut(ut({},T),{},{options:re,onChange:X})}var Ar=Y.forwardRef(function(e,i){var s=lr(e),t=kr(s);return Y.createElement(ur,cr({ref:i},t))}),Sr=Ar;const Or=async()=>{if(!navigator.clipboard){ae.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ae.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ae.error(e.message)}},Ot=ce`
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
`;const{colors:P,shadows:Fr,indents:Lr,radiuses:ft}=xe,Ft=ce`
  margin: 0 ${Lr.s};
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
`,Dr=W.li`
  ${Ft}
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
`,Tr=W.li`
  ${Ft}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${P.border};
    box-shadow: ${Fr.back};
    background-color: ${P.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Lt=ce`
  font-size: 16px;

  &:hover {
    color: ${P.hovered};
  }
`,jr=W.button`
  ${Lt}

  border: none;
  background-color: transparent;
  color: ${P.black};
  font-weight: 500;
`,Er=W.a`
  ${Lt}

  color: ${P.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${P.black};
  }
`,Dt=ce`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Ot}
  }
`,Nr=W.label`
  ${Dt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?P.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?P.yellow:P.border};
  }
  &:hover svg {
    stroke: ${P.placeholder};
  }
`,Mr=W.label`
  ${Dt}
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
`,Br=W.button`
  ${We}

  font-size: 14px;
  /* color: ${P.placeholder}; */
`,Pr=W.button`
  ${We}

  opacity: ${({$hovered:e})=>e?1:0};
`,Gr=W.button`
  ${We}

  opacity:0;
`,Tt=({group:e})=>x.jsx(Dr,{children:x.jsx("h2",{children:e})});Tt.propTypes={group:v.string};function Rr(e){return qe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Ur(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Ir(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}var Ce=e=>e.type==="checkbox",he=e=>e instanceof Date,q=e=>e==null;const jt=e=>typeof e=="object";var M=e=>!q(e)&&!Array.isArray(e)&&jt(e)&&!he(e),qr=e=>M(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,zr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Wr=(e,i)=>e.has(zr(i)),Hr=e=>{const i=e.constructor&&e.constructor.prototype;return M(i)&&i.hasOwnProperty("isPrototypeOf")},He=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(He&&(e instanceof Blob||e instanceof FileList))&&(s||M(e)))if(i=s?[]:{},!s&&!Hr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=ie(e[t]));else return e;return i}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,f=(e,i,s)=>{if(!i||!M(e))return s;const t=Ve(i.split(/[,[\].]+?/)).reduce((o,n)=>q(o)?o:o[n],e);return N(t)||t===e?N(e[i])?s:e[i]:t};const ht={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var Kr=(e,i,s,t=!0)=>{const o={defaultValues:i._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return i._proxyFormState[u]!==Z.all&&(i._proxyFormState[u]=!t||Z.all),s&&(s[u]=!0),e[u]}});return o},Q=e=>M(e)&&!Object.keys(e).length,Yr=(e,i,s,t)=>{s(e);const{name:o,...n}=e;return Q(n)||Object.keys(n).length>=Object.keys(i).length||Object.keys(n).find(u=>i[u]===(!t||Z.all))},Ne=e=>Array.isArray(e)?e:[e];function Jr(e){const i=ne.useRef(e);i.current=e,ne.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var te=e=>typeof e=="string",Qr=(e,i,s,t,o)=>te(e)?(t&&i.watch.add(e),f(s,e,o)):Array.isArray(e)?e.map(n=>(t&&i.watch.add(n),f(s,n))):(t&&(i.watchAll=!0),s),Ke=e=>/^\w*$/.test(e),Et=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/));function L(e,i,s){let t=-1;const o=Ke(i)?[i]:Et(i),n=o.length,u=n-1;for(;++t<n;){const m=o[t];let y=s;if(t!==u){const h=e[m];y=M(h)||Array.isArray(h)?h:isNaN(+o[t+1])?{}:[]}e[m]=y,e=e[m]}return e}var Nt=(e,i,s,t,o)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:o||!0}}:{};const Ue=(e,i,s)=>{for(const t of s||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&i(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else M(u)&&Ue(u,i)}}};var pt=e=>({isOnSubmit:!e||e===Z.onSubmit,isOnBlur:e===Z.onBlur,isOnChange:e===Z.onChange,isOnAll:e===Z.all,isOnTouch:e===Z.onTouched}),yt=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Xr=(e,i,s)=>{const t=Ve(f(e,s));return L(t,"root",i[s]),L(e,s,t),e},pe=e=>typeof e=="boolean",Ye=e=>e.type==="file",oe=e=>typeof e=="function",_e=e=>{if(!He)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},$e=e=>te(e),Je=e=>e.type==="radio",ke=e=>e instanceof RegExp;const gt={value:!1,isValid:!1},vt={value:!0,isValid:!0};var Mt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?vt:{value:e[0].value,isValid:!0}:vt:gt}return gt};const bt={isValid:!1,value:null};var Bt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,bt):bt;function xt(e,i,s="validate"){if($e(e)||Array.isArray(e)&&e.every($e)||pe(e)&&!e)return{type:s,message:$e(e)?e:"",ref:i}}var fe=e=>M(e)&&!ke(e)?e:{value:e,message:""},mt=async(e,i,s,t,o)=>{const{ref:n,refs:u,required:m,maxLength:y,minLength:h,min:w,max:$,pattern:g,validate:A,name:C,valueAsNumber:T,mount:H,disabled:K}=e._f,V=f(i,C);if(!H||K)return{};const S=u?u[0]:n,F=k=>{t&&S.reportValidity&&(S.setCustomValidity(pe(k)?"":k||""),S.reportValidity())},O={},J=Je(n),U=Ce(n),I=J||U,G=(T||Ye(n))&&N(n.value)&&N(V)||_e(n)&&n.value===""||V===""||Array.isArray(V)&&!V.length,re=Nt.bind(null,C,s,O),X=(k,_,D,B=se.maxLength,z=se.minLength)=>{const ee=k?_:D;O[C]={type:k?B:z,message:ee,ref:n,...re(k?B:z,ee)}};if(o?!Array.isArray(V)||!V.length:m&&(!I&&(G||q(V))||pe(V)&&!V||U&&!Mt(u).isValid||J&&!Bt(u).isValid)){const{value:k,message:_}=$e(m)?{value:!!m,message:m}:fe(m);if(k&&(O[C]={type:se.required,message:_,ref:S,...re(se.required,_)},!s))return F(_),O}if(!G&&(!q(w)||!q($))){let k,_;const D=fe($),B=fe(w);if(!q(V)&&!isNaN(V)){const z=n.valueAsNumber||V&&+V;q(D.value)||(k=z>D.value),q(B.value)||(_=z<B.value)}else{const z=n.valueAsDate||new Date(V),ee=ve=>new Date(new Date().toDateString()+" "+ve),le=n.type=="time",ge=n.type=="week";te(D.value)&&V&&(k=le?ee(V)>ee(D.value):ge?V>D.value:z>new Date(D.value)),te(B.value)&&V&&(_=le?ee(V)<ee(B.value):ge?V<B.value:z<new Date(B.value))}if((k||_)&&(X(!!k,D.message,B.message,se.max,se.min),!s))return F(O[C].message),O}if((y||h)&&!G&&(te(V)||o&&Array.isArray(V))){const k=fe(y),_=fe(h),D=!q(k.value)&&V.length>+k.value,B=!q(_.value)&&V.length<+_.value;if((D||B)&&(X(D,k.message,_.message),!s))return F(O[C].message),O}if(g&&!G&&te(V)){const{value:k,message:_}=fe(g);if(ke(k)&&!V.match(k)&&(O[C]={type:se.pattern,message:_,ref:n,...re(se.pattern,_)},!s))return F(_),O}if(A){if(oe(A)){const k=await A(V,i),_=xt(k,S);if(_&&(O[C]={..._,...re(se.validate,_.message)},!s))return F(_.message),O}else if(M(A)){let k={};for(const _ in A){if(!Q(k)&&!s)break;const D=xt(await A[_](V,i),S,_);D&&(k={...D,...re(_,D.message)},F(D.message),s&&(O[C]=k))}if(!Q(k)&&(O[C]={ref:S,...k},!s))return O}}return F(!0),O};function Zr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=N(e)?t++:e[i[t++]];return e}function es(e){for(const i in e)if(e.hasOwnProperty(i)&&!N(e[i]))return!1;return!0}function R(e,i){const s=Array.isArray(i)?i:Ke(i)?[i]:Et(i),t=s.length===1?e:Zr(e,s),o=s.length-1,n=s[o];return t&&delete t[n],o!==0&&(M(t)&&Q(t)||Array.isArray(t)&&es(t))&&R(e,s.slice(0,-1)),e}function Me(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>q(e)||!jt(e);function ue(e,i){if(Ae(e)||Ae(i))return e===i;if(he(e)&&he(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const o of s){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=i[o];if(he(n)&&he(u)||M(n)&&M(u)||Array.isArray(n)&&Array.isArray(u)?!ue(n,u):n!==u)return!1}}return!0}var Pt=e=>e.type==="select-multiple",ts=e=>Je(e)||Ce(e),Be=e=>_e(e)&&e.isConnected,Gt=e=>{for(const i in e)if(oe(e[i]))return!0;return!1};function Se(e,i={}){const s=Array.isArray(e);if(M(e)||s)for(const t in e)Array.isArray(e[t])||M(e[t])&&!Gt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Se(e[t],i[t])):q(e[t])||(i[t]=!0);return i}function Rt(e,i,s){const t=Array.isArray(e);if(M(e)||t)for(const o in e)Array.isArray(e[o])||M(e[o])&&!Gt(e[o])?N(i)||Ae(s[o])?s[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Rt(e[o],q(i)?{}:i[o],s[o]):s[o]=!ue(e[o],i[o]);return s}var Pe=(e,i)=>Rt(e,i,Se(i)),Ut=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>N(e)?e:i?e===""?NaN:e&&+e:s&&te(e)?new Date(e):t?t(e):e;function Ge(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ye(i)?i.files:Je(i)?Bt(e.refs).value:Pt(i)?[...i.selectedOptions].map(({value:s})=>s):Ce(i)?Mt(e.refs).value:Ut(N(i.value)?e.ref.value:i.value,e)}var rs=(e,i,s,t)=>{const o={};for(const n of e){const u=f(i,n);u&&L(o,n,u._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:t}},be=e=>N(e)?e:ke(e)?e.source:M(e)?ke(e.value)?e.value.source:e.value:e,ss=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function wt(e,i,s){const t=f(e,s);if(t||Ke(s))return{error:t,name:s};const o=s.split(".");for(;o.length;){const n=o.join("."),u=f(i,n),m=f(e,n);if(u&&!Array.isArray(u)&&s!==n)return{name:s};if(m&&m.type)return{name:n,error:m};o.pop()}return{name:s}}var is=(e,i,s,t,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(i||e):(s?t.isOnBlur:o.isOnBlur)?!e:(s?t.isOnChange:o.isOnChange)?e:!0,ns=(e,i)=>!Ve(f(e,i)).length&&R(e,i);const os={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function as(e={},i){let s={...os,...e},t={submitCount:0,isDirty:!1,isLoading:oe(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=M(s.defaultValues)||M(s.values)?ie(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:ie(n),m={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},h,w=0;const $={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Me(),array:Me(),state:Me()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,C=pt(s.mode),T=pt(s.reValidateMode),H=s.criteriaMode===Z.all,K=r=>a=>{clearTimeout(w),w=setTimeout(r,a)},V=async r=>{if($.isValid||r){const a=s.resolver?Q((await G()).errors):await X(o,!0);a!==t.isValid&&g.state.next({isValid:a})}},S=r=>$.isValidating&&g.state.next({isValidating:r}),F=(r,a=[],l,p,d=!0,c=!0)=>{if(p&&l){if(m.action=!0,c&&Array.isArray(f(o,r))){const b=l(f(o,r),p.argA,p.argB);d&&L(o,r,b)}if(c&&Array.isArray(f(t.errors,r))){const b=l(f(t.errors,r),p.argA,p.argB);d&&L(t.errors,r,b),ns(t.errors,r)}if($.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const b=l(f(t.touchedFields,r),p.argA,p.argB);d&&L(t.touchedFields,r,b)}$.dirtyFields&&(t.dirtyFields=Pe(n,u)),g.state.next({name:r,isDirty:_(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else L(u,r,a)},O=(r,a)=>{L(t.errors,r,a),g.state.next({errors:t.errors})},J=(r,a,l,p)=>{const d=f(o,r);if(d){const c=f(u,r,N(l)?f(n,r):l);N(c)||p&&p.defaultChecked||a?L(u,r,a?c:Ge(d._f)):z(r,c),m.mount&&V()}},U=(r,a,l,p,d)=>{let c=!1,b=!1;const j={name:r};if(!l||p){$.isDirty&&(b=t.isDirty,t.isDirty=j.isDirty=_(),c=b!==j.isDirty);const E=ue(f(n,r),a);b=f(t.dirtyFields,r),E?R(t.dirtyFields,r):L(t.dirtyFields,r,!0),j.dirtyFields=t.dirtyFields,c=c||$.dirtyFields&&b!==!E}if(l){const E=f(t.touchedFields,r);E||(L(t.touchedFields,r,l),j.touchedFields=t.touchedFields,c=c||$.touchedFields&&E!==l)}return c&&d&&g.state.next(j),c?j:{}},I=(r,a,l,p)=>{const d=f(t.errors,r),c=$.isValid&&pe(a)&&t.isValid!==a;if(e.delayError&&l?(h=K(()=>O(r,l)),h(e.delayError)):(clearTimeout(w),h=null,l?L(t.errors,r,l):R(t.errors,r)),(l?!ue(d,l):d)||!Q(p)||c){const b={...p,...c&&pe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...b},g.state.next(b)}S(!1)},G=async r=>s.resolver(u,s.context,rs(r||y.mount,o,s.criteriaMode,s.shouldUseNativeValidation)),re=async r=>{const{errors:a}=await G();if(r)for(const l of r){const p=f(a,l);p?L(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},X=async(r,a,l={valid:!0})=>{for(const p in r){const d=r[p];if(d){const{_f:c,...b}=d;if(c){const j=y.array.has(c.name),E=await mt(d,u,H,s.shouldUseNativeValidation&&!a,j);if(E[c.name]&&(l.valid=!1,a))break;!a&&(f(E,c.name)?j?Xr(t.errors,E,c.name):L(t.errors,c.name,E[c.name]):R(t.errors,c.name))}b&&await X(b,a,l)}}return l.valid},k=()=>{for(const r of y.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Be(l)):!Be(a._f.ref))&&Fe(r)}y.unMount=new Set},_=(r,a)=>(r&&a&&L(u,r,a),!ue(Ze(),n)),D=(r,a,l)=>Qr(r,y,{...m.mount?u:N(a)?n:te(r)?{[r]:a}:a},l,a),B=r=>Ve(f(m.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),z=(r,a,l={})=>{const p=f(o,r);let d=a;if(p){const c=p._f;c&&(!c.disabled&&L(u,r,Ut(a,c)),d=_e(c.ref)&&q(a)?"":a,Pt(c.ref)?[...c.ref.options].forEach(b=>b.selected=d.includes(b.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(b=>(!b.defaultChecked||!b.disabled)&&(b.checked=Array.isArray(d)?!!d.find(j=>j===b.value):d===b.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(b=>b.checked=b.value===d):Ye(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||g.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&U(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ve(r)},ee=(r,a,l)=>{for(const p in a){const d=a[p],c=`${r}.${p}`,b=f(o,c);(y.array.has(r)||!Ae(d)||b&&!b._f)&&!he(d)?ee(c,d,l):z(c,d,l)}},le=(r,a,l={})=>{const p=f(o,r),d=y.array.has(r),c=ie(a);L(u,r,c),d?(g.array.next({name:r,values:{...u}}),($.isDirty||$.dirtyFields)&&l.shouldDirty&&g.state.next({name:r,dirtyFields:Pe(n,u),isDirty:_(r,c)})):p&&!p._f&&!q(c)?ee(r,c,l):z(r,c,l),yt(r,y)&&g.state.next({...t}),g.values.next({name:r,values:{...u}}),!m.mount&&i()},ge=async r=>{const a=r.target;let l=a.name,p=!0;const d=f(o,l),c=()=>a.type?Ge(d._f):qr(r);if(d){let b,j;const E=c(),de=r.type===ht.BLUR||r.type===ht.FOCUS_OUT,tr=!ss(d._f)&&!s.resolver&&!f(t.errors,l)&&!d._f.deps||is(de,f(t.touchedFields,l),t.isSubmitted,T,C),De=yt(l,y,de);L(u,l,E),de?(d._f.onBlur&&d._f.onBlur(r),h&&h(0)):d._f.onChange&&d._f.onChange(r);const Te=U(l,E,de,!1),rr=!Q(Te)||De;if(!de&&g.values.next({name:l,type:r.type,values:{...u}}),tr)return $.isValid&&V(),rr&&g.state.next({name:l,...De?{}:Te});if(!de&&De&&g.state.next({...t}),S(!0),s.resolver){const{errors:ot}=await G([l]),sr=wt(t.errors,o,l),at=wt(ot,o,sr.name||l);b=at.error,l=at.name,j=Q(ot)}else b=(await mt(d,u,H,s.shouldUseNativeValidation))[l],p=isNaN(E)||E===f(u,l,E),p&&(b?j=!1:$.isValid&&(j=await X(o,!0)));p&&(d._f.deps&&ve(d._f.deps),I(l,j,b,Te))}},ve=async(r,a={})=>{let l,p;const d=Ne(r);if(S(!0),s.resolver){const c=await re(N(r)?r:d);l=Q(c),p=r?!d.some(b=>f(c,b)):l}else r?(p=(await Promise.all(d.map(async c=>{const b=f(o,c);return await X(b&&b._f?{[c]:b}:b)}))).every(Boolean),!(!p&&!t.isValid)&&V()):p=l=await X(o);return g.state.next({...!te(r)||$.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&Ue(o,c=>c&&f(t.errors,c),r?d:y.mount),p},Ze=r=>{const a={...n,...m.mount?u:{}};return N(r)?a:te(r)?f(a,r):r.map(l=>f(a,l))},et=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Xt=r=>{r&&Ne(r).forEach(a=>R(t.errors,a)),g.state.next({errors:r?t.errors:{}})},tt=(r,a,l)=>{const p=(f(o,r,{_f:{}})._f||{}).ref;L(t.errors,r,{...a,ref:p}),g.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Zt=(r,a)=>oe(r)?g.values.subscribe({next:l=>r(D(void 0,a),l)}):D(r,a,!0),Fe=(r,a={})=>{for(const l of r?Ne(r):y.mount)y.mount.delete(l),y.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!s.shouldUnregister&&!a.keepDefaultValue&&R(n,l);g.values.next({values:{...u}}),g.state.next({...t,...a.keepDirty?{isDirty:_()}:{}}),!a.keepIsValid&&V()},Le=(r,a={})=>{let l=f(o,r);const p=pe(a.disabled);return L(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),y.mount.add(r),l?p&&L(u,r,a.disabled?void 0:f(u,r,Ge(l._f))):J(r,!0,a.value),{...p?{disabled:a.disabled}:{},...s.progressive?{required:!!a.required,min:be(a.min),max:be(a.max),minLength:be(a.minLength),maxLength:be(a.maxLength),pattern:be(a.pattern)}:{},name:r,onChange:ge,onBlur:ge,ref:d=>{if(d){Le(r,a),l=f(o,r);const c=N(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,b=ts(c),j=l._f.refs||[];if(b?j.find(E=>E===c):c===l._f.ref)return;L(o,r,{_f:{...l._f,...b?{refs:[...j.filter(Be),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),J(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(Wr(y.array,r)&&m.action)&&y.unMount.add(r)}}},rt=()=>s.shouldFocusError&&Ue(o,r=>r&&f(t.errors,r),y.mount),st=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=ie(u);if(g.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:c}=await G();t.errors=d,p=c}else await X(o);R(t.errors,"root"),Q(t.errors)?(g.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),rt(),setTimeout(rt)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},er=(r,a={})=>{f(o,r)&&(N(a.defaultValue)?le(r,f(n,r)):(le(r,a.defaultValue),L(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?_(r,f(n,r)):_()),a.keepError||(R(t.errors,r),$.isValid&&V()),g.state.next({...t}))},it=(r,a={})=>{const l=r||n,p=ie(l),d=r&&!Q(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of y.mount)f(t.dirtyFields,c)?L(d,c,f(u,c)):le(c,f(d,c));else{if(He&&N(r))for(const c of y.mount){const b=f(o,c);if(b&&b._f){const j=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(_e(j)){const E=j.closest("form");if(E){E.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?ie(n):{}:ie(d),g.array.next({values:{...d}}),g.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&i(),m.mount=!$.isValid||!!a.keepIsValid,m.watch=!!e.shouldUnregister,g.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ue(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Pe(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},nt=(r,a)=>it(oe(r)?r(u):r,a);return{control:{register:Le,unregister:Fe,getFieldState:et,handleSubmit:st,setError:tt,_executeSchema:G,_getWatch:D,_getDirty:_,_updateValid:V,_removeUnmounted:k,_updateFieldArray:F,_getFieldArray:B,_reset:it,_resetDefaultValues:()=>oe(s.defaultValues)&&s.defaultValues().then(r=>{nt(r,s.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:g,_proxyFormState:$,get _fields(){return o},get _formValues(){return u},get _state(){return m},set _state(r){m=r},get _defaultValues(){return n},get _names(){return y},set _names(r){y=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ve,register:Le,handleSubmit:st,watch:Zt,setValue:le,getValues:Ze,reset:nt,resetField:er,clearErrors:Xt,unregister:Fe,setError:tt,setFocus:(r,a={})=>{const l=f(o,r),p=l&&l._f;if(p){const d=p.refs?p.refs[0]:p.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:et}}function It(e={}){const i=ne.useRef(),s=ne.useRef(),[t,o]=ne.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...as(e,()=>o(u=>({...u}))),formState:t});const n=i.current.control;return n._options=e,Jr({subject:n._subjects.state,next:u=>{Yr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ne.useEffect(()=>{e.values&&!ue(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values):n._resetDefaultValues()},[e.values,n]),ne.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=Kr(t,n),i.current}var Ct=function(e,i,s){if(e&&"reportValidity"in e){var t=f(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},qt=function(e,i){var s=function(o){var n=i.fields[o];n&&n.ref&&"reportValidity"in n.ref?Ct(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return Ct(u,o,e)})};for(var t in i.fields)s(t)},ls=function(e,i){i.shouldUseNativeValidation&&qt(e,i);var s={};for(var t in e){var o=f(i.fields,t);L(s,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return s};function zt(e,i,s){return i===void 0&&(i={}),s===void 0&&(s={}),function(t,o,n){try{return Promise.resolve(function(u,m){try{var y=(i.context,Promise.resolve(e[s.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},i,{context:o}))).then(function(h){return n.shouldUseNativeValidation&&qt({},n),{values:s.raw?t:h,errors:{}}}))}catch(h){return m(h)}return y&&y.then?y.then(void 0,m):y}(0,function(u){if(!u.inner)throw u;return{values:{},errors:ls((m=u,y=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(m.inner||[]).reduce(function(h,w){if(h[w.path]||(h[w.path]={message:w.message,type:w.type}),y){var $=h[w.path].types,g=$&&$[w.type];h[w.path]=Nt(w.path,y,h,w.type,g?[].concat(g,w.message):w.message)}return h},{})),n)};var m,y}))}catch(u){return Promise.reject(u)}}}const Qe=({$w:e,$h:i,$s:s,onClick:t,type:o="button",disabled:n,children:u})=>x.jsx(dr,{$w:e,$h:i,$s:s,onClick:t,type:o,disabled:n,children:u});Qe.propTypes={$w:v.string,$h:v.string,$s:v.string,onClick:v.func,type:v.string,disabled:v.oneOfType([v.bool,v.number]),children:v.oneOfType([v.string,v.node,v.oneOf(["img","png","svg"])])};const Xe=({styles:e,$obh:i,$sobh:s,$ol:t,$b:o,$bh:n,$bf:u,$o:m,$oh:y,$ob:h,name:w,value:$={value:"HTML",label:"Chocolate"},defaultValue:g,placeholder:A="Create / Select...",options:C,onChange:T,isClearable:H,onCreateOption:K,isLoading:V,isDisabled:S})=>x.jsx(Sr,{theme:fr({$obh:i,$sobh:s}),styles:{...hr({$ol:t,$b:o,$bh:n,$bf:u,$o:m,$oh:y,$ob:h,$obh:i}),...e},name:w,value:$,defaultValue:g,placeholder:A,options:C,onChange:T,isClearable:H,onCreateOption:K,isLoading:V,isDisabled:S});Xe.propTypes={styles:v.arrayOf(v.object),$obh:v.string,$sobh:v.string,$ol:v.string,$b:v.string,$bh:v.string,$bf:v.string,$o:v.string,$oh:v.string,$ob:v.string,options:v.arrayOf(v.object),name:v.string,value:v.oneOfType([v.arrayOf(v.object),v.object]),defaultValue:v.oneOfType([v.arrayOf(v.object),v.object]),placeholder:v.string,onChange:v.func,isClearable:v.oneOfType([v.arrayOf(v.string),v.string,v.object]),onCreateOption:v.func,isLoading:v.bool,isDisabled:v.bool};const{colors:Oe,radiuses:Wt,shadows:us}=xe,Ht=W.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Wt.m};
  background-color: ${Oe.white};
  box-shadow: ${us.auth};
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
`,Kt=ce`
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
`,cs=W.input`
  ${Kt}
  ${Ot}
`,Ie=W.input`
  ${Kt}
`,Yt=({el:e,setIsModal:i})=>{var K,V;const{_id:s,cluster:t,title:o,group:n}=e,u=me(),[m,y]=Y.useState({value:n,label:n}),{clusterGroups:h}=we(),{register:w,watch:$,handleSubmit:g,formState:{errors:A}}=It({mode:"onBlur",resolver:zt(St),defaultValues:{cluster:t,title:o}}),C=async S=>{u(Re({_id:s,...S,group:m.value})),i(!1);const F=[];await u(ze()).unwrap().then(O=>{const{clusters:J}=O.result,U=Array.from(new Set(J.map(I=>I.group)));h.forEach(I=>{U.includes(I.clusterGroup)||F.push(I._id)})}),F.forEach(O=>u(_t(O)))},T=h.map(S=>({value:S.clusterGroup,label:S.clusterGroup})).sort((S,F)=>S.value.localeCompare(F.value)),H=S=>{$("title")?(u(kt({clusterGroup:S})),y({value:S,label:S})):ae.error("Title is required")};return x.jsxs(Ht,{onSubmit:g(C),children:[x.jsxs(ye,{children:["Cluster ",x.jsxs("span",{children:[" ",(K=A.cluster)==null?void 0:K.message]}),x.jsx(Ie,{...w("cluster")})]}),x.jsxs(ye,{children:["Title ",x.jsxs("span",{children:[" ",(V=A.title)==null?void 0:V.message]}),x.jsx(Ie,{...w("title")})]}),x.jsxs(ye,{children:["Group",x.jsx(Xe,{value:m,options:T,onChange:S=>y(S||""),onCreateOption:H,isClearable:m})]}),x.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Yt.propTypes={el:v.object,setIsModal:v.func.isRequired};const Jt=({el:e,sortByDate:i,setSortByDate:s})=>{const t=me(),o=pr(),{activeCluster:n,clusterTrash:u}=we(),[m,y]=Y.useState(!1),{_id:h,cluster:w,title:$,favorite:g,checked:A,createdAt:C}=e,T=new Date(C).toLocaleDateString("zh-Hans-CN",{year:"2-digit",month:"2-digit",day:"2-digit"}).replaceAll("/","."),H=u.find(U=>U._id===h),K=U=>{const I=U.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},V=()=>{t(Re({_id:h,favorite:!g}))},S=()=>{t(gr(e)),e._id===n._id&&o(`/element/${h}`,{replace:!0})},F=()=>{t(Re({_id:h,checked:!A}))},O=()=>t(vr(e)),J=()=>{s(!i),i?ae.success("Ascend by Title"):ae.success("Descend by Date")};return x.jsxs(Tr,{children:[x.jsxs(Nr,{$hovered:g,children:[x.jsx("input",{type:"checkbox",name:"favorite",checked:g,onChange:V}),x.jsx(Rr,{size:"18px"})]}),x.jsx(jr,{onClick:S,children:$}),x.jsx(Er,{href:w,target:"_blank",rel:"noopener noreferrer",children:K(w)}),x.jsx(Gr,{onClick:()=>y("edit"),children:x.jsx(Ur,{size:"15px"})}),x.jsx(Pr,{$hovered:H,onClick:O,children:x.jsx(Ir,{size:"16px"})}),x.jsxs(Mr,{$hovered:A,children:[x.jsx("input",{type:"checkbox",name:"checked",checked:A,onChange:F}),x.jsx(yr,{size:"15px"})]}),x.jsx(Br,{onClick:J,children:T}),m&&x.jsx(At,{onClick:()=>y(!1),children:x.jsx(Yt,{el:e,setIsModal:y})})]})};Jt.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func,$hovered:v.bool};const{colors:ds,indents:fs,radiuses:hs}=xe,ps=W.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${fs.xl};
  counter-reset: section 0;
  background-color: ${ds.white};
  border-radius: ${hs.xl};
`,ys=()=>{const e=me(),{allClusters:i,clusterFilter:s,clusterSelect:t}=we(),[o,n]=Y.useState(!0);Y.useEffect(()=>{e(br()),e(ze())},[e]);const u=[...i].filter(({group:h,title:w,favorite:$,checked:g})=>{const A=h.toLowerCase().includes(s)||w.toLowerCase().includes(s),C=t.includes("favorite")?A&&$===!0:A;return t.some(T=>["checked","unchecked"].includes(T))?t.includes("checked")?C&&g===!0:C&&g===!1:C}).sort(o?(h,w)=>w.createdAt-h.createdAt:(h,w)=>h.title.localeCompare(w.title)),m=Array.from(new Set(u.map(h=>h.group))).sort((h,w)=>h.localeCompare(w)),y=t.filter(h=>!["favorite","checked","unchecked"].includes(h)).length!==0?t.filter(h=>m.includes(h)):m;return x.jsx(ps,{children:y.map(h=>x.jsxs(Y.Fragment,{children:[x.jsx(Tt,{group:h}),u.map(w=>w.group===h&&x.jsx(Jt,{el:w,sortByDate:o,setSortByDate:n},w._id))]},h))})},Qt=({cluster:e,setIsModal:i})=>{var A;const s=me(),[t,o]=Y.useState(""),{clusterGroups:n}=we(),{register:u,watch:m,handleSubmit:y,formState:{errors:h}}=It({mode:"onBlur",resolver:zt(St),defaultValues:{cluster:e}}),w=C=>{s(xr({...C,group:t.value})),i(!1)},$=n.map(C=>({value:C.clusterGroup,label:C.clusterGroup})).sort((C,T)=>C.value.localeCompare(T.value)),g=C=>{m("title")?(s(kt({clusterGroup:C})),o({value:C,label:C})):ae.error("Title is required")};return x.jsxs(Ht,{onSubmit:y(w),children:[x.jsxs(ye,{children:[e.length<=45?e:e.substring(0,45)+"...",x.jsx(cs,{...u("cluster")})]}),x.jsxs(ye,{children:["Title ",x.jsxs("span",{children:[" ",(A=h.title)==null?void 0:A.message]}),x.jsx(Ie,{...u("title")})]}),x.jsxs(ye,{children:["Group",x.jsx(Xe,{value:t,options:$,onChange:C=>o(C||""),onCreateOption:g,isClearable:t})]}),x.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Qt.propTypes={cluster:v.string.isRequired,setIsModal:v.func.isRequired};const{button:Vt}=xe.shadows,gs=()=>{const e=me(),[i,s]=Y.useState(!1),[t,o]=Y.useState(""),{clusterTrash:n,clusterGroups:u}=we(),m=n.length>0,y=async w=>{const $=await Or();try{await $r.validate({cluster:$}),o($),s("add")}catch(g){w.target.blur(),ae.error(`Invalid cluster, ${g.message}`)}},h=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await n.forEach($=>e(wr($._id))),e(Cr());const w=[];await e(ze()).unwrap().then($=>{const{clusters:g}=$.result,A=Array.from(new Set(g.map(C=>C.group)));u.forEach(C=>{A.includes(C.clusterGroup)||w.push(C._id)})}),w.forEach($=>e(_t($)))};return x.jsxs(mr,{$m:"15px 25px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[m?x.jsx(ct,{onClick:h,$s:"m",$bs:Vt,children:"Delete"}):x.jsx("span",{}),x.jsx(ct,{onClick:y,$s:"m",$bs:Vt,children:"Add"}),i&&x.jsx(At,{onClick:()=>s(!1),children:x.jsx(Qt,{cluster:t,setIsModal:s})})]})},{s:$t,m:vs}=xe.indents,Vs=()=>x.jsxs(Vr,{$p:`2px ${vs} ${$t} ${$t}`,children:[x.jsx(ys,{}),x.jsx(gs,{})]});export{Vs as default};
