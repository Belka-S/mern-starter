import{_ as rr,r as z,w as at,x as je,y as sr,z as lt,A as ir,C as nr,D as or,S as ar,E as lr,n as me,s as H,t as pe,P as b,j as x,R as ne,H as ur,I as cr,J as dr,u as xe,K as we,N as Ge,O as qe,T as _t,Q as be,e as Vt,g as fr,U as hr,M as $t,V as pr,W as yr,X as gr,Y as vr,Z as br,$ as ut,a0 as mr,a1 as xr,a2 as wr,F as Cr}from"./index-0ed60bd1.js";import{v as kt,T as _r,F as Vr,a as $r}from"./index.esm-8baa4417.js";import{t as At,c as kr}from"./clusterSchema-a4c18f96.js";var Ar=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],ct=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(i).toLowerCase(),n=String(t.getOptionValue(s)).toLowerCase(),u=String(t.getOptionLabel(s)).toLowerCase();return n===o||u===o},Ee={formatCreateLabel:function(i){return'Create "'.concat(i,'"')},isValidNewOption:function(i,s,t,o){return!(!i||s.some(function(n){return ct(i,n,o)})||t.some(function(n){return ct(i,n,o)}))},getNewOptionData:function(i,s){return{label:s,value:i,__isNew__:!0}}};function Sr(e){var i=e.allowCreateWhileLoading,s=i===void 0?!1:i,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ee.formatCreateLabel:n,w=e.isValidNewOption,y=w===void 0?Ee.isValidNewOption:w,h=e.getNewOptionData,g=h===void 0?Ee.getNewOptionData:h,C=e.onCreateOption,v=e.options,A=v===void 0?[]:v,_=e.onChange,T=rr(e,Ar),K=T.getOptionValue,Y=K===void 0?ir:K,V=T.getOptionLabel,S=V===void 0?nr:V,F=T.inputValue,O=T.isLoading,J=T.isMulti,U=T.value,I=T.name,P=z.useMemo(function(){return y(F,at(U),A,{getOptionValue:Y,getOptionLabel:S})?g(F,u(F)):void 0},[u,g,S,Y,F,y,A,U]),re=z.useMemo(function(){return(s||!O)&&P?o==="first"?[P].concat(je(A)):[].concat(je(A),[P]):A},[s,o,O,P,A]),X=z.useCallback(function(k,$){if($.action!=="select-option")return _(k,$);var L=Array.isArray(k)?k:[k];if(L[L.length-1]===P){if(C)C(F);else{var B=g(F,F),W={action:"create-option",name:I,option:B};_(sr(J,[].concat(je(at(U)),[B]),B),W)}return}_(k,$)},[g,F,J,I,P,C,_,U]);return lt(lt({},T),{},{options:re,onChange:X})}var Or=z.forwardRef(function(e,i){var s=or(e),t=Sr(s);return z.createElement(ar,lr({ref:i},t))}),Fr=Or;const{colors:G,shadows:Dr,radiuses:Lr}=pe,St=me`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr 1fr 1fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${G.borderLight};
`,Tr=H.li`
  ${St}
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
`,jr=H.li`
  ${St}

  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${G.border};
    box-shadow: ${Dr.back};
    background-color: ${G.white};
    border-radius: ${Lr.xs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Ot=me`
  font-size: 16px;

  &:hover {
    color: ${G.hovered};
  }
`,Er=H.button`
  ${Ot}

  border: none;
  background-color: transparent;
  color: ${G.black};
  font-weight: 500;
`,Nr=H.a`
  ${Ot}

  color: ${G.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${G.black};
  }
`,Ft=me`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${kt}
  }
`,Mr=H.label`
  ${Ft}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?G.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?G.yellow:G.border};
  }
  &:hover svg {
    stroke: ${G.placeholder};
  }
`,Br=H.label`
  ${Ft}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${G.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?G.border:"transparent"};
  }
  &:hover svg {
    border-color: ${G.placeholder};
    color: ${({$hovered:e})=>e?G.placeholder:"transparent"};
  }
`,We=me`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  &,
  & svg {
    transition: color 250ms;
    color: ${G.border};
  }
  &:hover,
  &:hover svg {
    color: ${G.placeholder};
  }
`,Pr=H.button`
  ${We}

  font-size: 14px;
`,Rr=H.button`
  ${We}

  opacity: ${({$hovered:e})=>e?1:0};
`,Gr=H.button`
  ${We}

  opacity: 0;
`,Dt=({group:e})=>x.jsx(Tr,{children:x.jsx("h2",{children:e})});Dt.propTypes={group:b.string};var Ce=e=>e.type==="checkbox",de=e=>e instanceof Date,q=e=>e==null;const Lt=e=>typeof e=="object";var M=e=>!q(e)&&!Array.isArray(e)&&Lt(e)&&!de(e),Ur=e=>M(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,Ir=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,qr=(e,i)=>e.has(Ir(i)),Wr=e=>{const i=e.constructor&&e.constructor.prototype;return M(i)&&i.hasOwnProperty("isPrototypeOf")},ze=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(ze&&(e instanceof Blob||e instanceof FileList))&&(s||M(e)))if(i=s?[]:{},!s&&!Wr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=ie(e[t]));else return e;return i}var _e=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,f=(e,i,s)=>{if(!i||!M(e))return s;const t=_e(i.split(/[,[\].]+?/)).reduce((o,n)=>q(o)?o:o[n],e);return N(t)||t===e?N(e[i])?s:e[i]:t};const dt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var zr=(e,i,s,t=!0)=>{const o={defaultValues:i._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return i._proxyFormState[u]!==Z.all&&(i._proxyFormState[u]=!t||Z.all),s&&(s[u]=!0),e[u]}});return o},Q=e=>M(e)&&!Object.keys(e).length,Hr=(e,i,s,t)=>{s(e);const{name:o,...n}=e;return Q(n)||Object.keys(n).length>=Object.keys(i).length||Object.keys(n).find(u=>i[u]===(!t||Z.all))},Ne=e=>Array.isArray(e)?e:[e];function Kr(e){const i=ne.useRef(e);i.current=e,ne.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var te=e=>typeof e=="string",Yr=(e,i,s,t,o)=>te(e)?(t&&i.watch.add(e),f(s,e,o)):Array.isArray(e)?e.map(n=>(t&&i.watch.add(n),f(s,n))):(t&&(i.watchAll=!0),s),He=e=>/^\w*$/.test(e),Tt=e=>_e(e.replace(/["|']|\]/g,"").split(/\.|\[/));function D(e,i,s){let t=-1;const o=He(i)?[i]:Tt(i),n=o.length,u=n-1;for(;++t<n;){const w=o[t];let y=s;if(t!==u){const h=e[w];y=M(h)||Array.isArray(h)?h:isNaN(+o[t+1])?{}:[]}e[w]=y,e=e[w]}return e}var jt=(e,i,s,t,o)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:o||!0}}:{};const Ue=(e,i,s)=>{for(const t of s||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&i(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else M(u)&&Ue(u,i)}}};var ft=e=>({isOnSubmit:!e||e===Z.onSubmit,isOnBlur:e===Z.onBlur,isOnChange:e===Z.onChange,isOnAll:e===Z.all,isOnTouch:e===Z.onTouched}),ht=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Jr=(e,i,s)=>{const t=_e(f(e,s));return D(t,"root",i[s]),D(e,s,t),e},fe=e=>typeof e=="boolean",Ke=e=>e.type==="file",oe=e=>typeof e=="function",$e=e=>{if(!ze)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},Ve=e=>te(e),Ye=e=>e.type==="radio",ke=e=>e instanceof RegExp;const pt={value:!1,isValid:!1},yt={value:!0,isValid:!0};var Et=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?yt:{value:e[0].value,isValid:!0}:yt:pt}return pt};const gt={isValid:!1,value:null};var Nt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,gt):gt;function vt(e,i,s="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||fe(e)&&!e)return{type:s,message:Ve(e)?e:"",ref:i}}var ce=e=>M(e)&&!ke(e)?e:{value:e,message:""},bt=async(e,i,s,t,o)=>{const{ref:n,refs:u,required:w,maxLength:y,minLength:h,min:g,max:C,pattern:v,validate:A,name:_,valueAsNumber:T,mount:K,disabled:Y}=e._f,V=f(i,_);if(!K||Y)return{};const S=u?u[0]:n,F=k=>{t&&S.reportValidity&&(S.setCustomValidity(fe(k)?"":k||""),S.reportValidity())},O={},J=Ye(n),U=Ce(n),I=J||U,P=(T||Ke(n))&&N(n.value)&&N(V)||$e(n)&&n.value===""||V===""||Array.isArray(V)&&!V.length,re=jt.bind(null,_,s,O),X=(k,$,L,B=se.maxLength,W=se.minLength)=>{const ee=k?$:L;O[_]={type:k?B:W,message:ee,ref:n,...re(k?B:W,ee)}};if(o?!Array.isArray(V)||!V.length:w&&(!I&&(P||q(V))||fe(V)&&!V||U&&!Et(u).isValid||J&&!Nt(u).isValid)){const{value:k,message:$}=Ve(w)?{value:!!w,message:w}:ce(w);if(k&&(O[_]={type:se.required,message:$,ref:S,...re(se.required,$)},!s))return F($),O}if(!P&&(!q(g)||!q(C))){let k,$;const L=ce(C),B=ce(g);if(!q(V)&&!isNaN(V)){const W=n.valueAsNumber||V&&+V;q(L.value)||(k=W>L.value),q(B.value)||($=W<B.value)}else{const W=n.valueAsDate||new Date(V),ee=ge=>new Date(new Date().toDateString()+" "+ge),ae=n.type=="time",ye=n.type=="week";te(L.value)&&V&&(k=ae?ee(V)>ee(L.value):ye?V>L.value:W>new Date(L.value)),te(B.value)&&V&&($=ae?ee(V)<ee(B.value):ye?V<B.value:W<new Date(B.value))}if((k||$)&&(X(!!k,L.message,B.message,se.max,se.min),!s))return F(O[_].message),O}if((y||h)&&!P&&(te(V)||o&&Array.isArray(V))){const k=ce(y),$=ce(h),L=!q(k.value)&&V.length>+k.value,B=!q($.value)&&V.length<+$.value;if((L||B)&&(X(L,k.message,$.message),!s))return F(O[_].message),O}if(v&&!P&&te(V)){const{value:k,message:$}=ce(v);if(ke(k)&&!V.match(k)&&(O[_]={type:se.pattern,message:$,ref:n,...re(se.pattern,$)},!s))return F($),O}if(A){if(oe(A)){const k=await A(V,i),$=vt(k,S);if($&&(O[_]={...$,...re(se.validate,$.message)},!s))return F($.message),O}else if(M(A)){let k={};for(const $ in A){if(!Q(k)&&!s)break;const L=vt(await A[$](V,i),S,$);L&&(k={...L,...re($,L.message)},F(L.message),s&&(O[_]=k))}if(!Q(k)&&(O[_]={ref:S,...k},!s))return O}}return F(!0),O};function Qr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=N(e)?t++:e[i[t++]];return e}function Xr(e){for(const i in e)if(e.hasOwnProperty(i)&&!N(e[i]))return!1;return!0}function R(e,i){const s=Array.isArray(i)?i:He(i)?[i]:Tt(i),t=s.length===1?e:Qr(e,s),o=s.length-1,n=s[o];return t&&delete t[n],o!==0&&(M(t)&&Q(t)||Array.isArray(t)&&Xr(t))&&R(e,s.slice(0,-1)),e}function Me(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>q(e)||!Lt(e);function le(e,i){if(Ae(e)||Ae(i))return e===i;if(de(e)&&de(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const o of s){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=i[o];if(de(n)&&de(u)||M(n)&&M(u)||Array.isArray(n)&&Array.isArray(u)?!le(n,u):n!==u)return!1}}return!0}var Mt=e=>e.type==="select-multiple",Zr=e=>Ye(e)||Ce(e),Be=e=>$e(e)&&e.isConnected,Bt=e=>{for(const i in e)if(oe(e[i]))return!0;return!1};function Se(e,i={}){const s=Array.isArray(e);if(M(e)||s)for(const t in e)Array.isArray(e[t])||M(e[t])&&!Bt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Se(e[t],i[t])):q(e[t])||(i[t]=!0);return i}function Pt(e,i,s){const t=Array.isArray(e);if(M(e)||t)for(const o in e)Array.isArray(e[o])||M(e[o])&&!Bt(e[o])?N(i)||Ae(s[o])?s[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Pt(e[o],q(i)?{}:i[o],s[o]):s[o]=!le(e[o],i[o]);return s}var Pe=(e,i)=>Pt(e,i,Se(i)),Rt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>N(e)?e:i?e===""?NaN:e&&+e:s&&te(e)?new Date(e):t?t(e):e;function Re(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ke(i)?i.files:Ye(i)?Nt(e.refs).value:Mt(i)?[...i.selectedOptions].map(({value:s})=>s):Ce(i)?Et(e.refs).value:Rt(N(i.value)?e.ref.value:i.value,e)}var es=(e,i,s,t)=>{const o={};for(const n of e){const u=f(i,n);u&&D(o,n,u._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:t}},ve=e=>N(e)?e:ke(e)?e.source:M(e)?ke(e.value)?e.value.source:e.value:e,ts=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function mt(e,i,s){const t=f(e,s);if(t||He(s))return{error:t,name:s};const o=s.split(".");for(;o.length;){const n=o.join("."),u=f(i,n),w=f(e,n);if(u&&!Array.isArray(u)&&s!==n)return{name:s};if(w&&w.type)return{name:n,error:w};o.pop()}return{name:s}}var rs=(e,i,s,t,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(i||e):(s?t.isOnBlur:o.isOnBlur)?!e:(s?t.isOnChange:o.isOnChange)?e:!0,ss=(e,i)=>!_e(f(e,i)).length&&R(e,i);const is={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function ns(e={},i){let s={...is,...e},t={submitCount:0,isDirty:!1,isLoading:oe(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=M(s.defaultValues)||M(s.values)?ie(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:ie(n),w={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},h,g=0;const C={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Me(),array:Me(),state:Me()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,_=ft(s.mode),T=ft(s.reValidateMode),K=s.criteriaMode===Z.all,Y=r=>a=>{clearTimeout(g),g=setTimeout(r,a)},V=async r=>{if(C.isValid||r){const a=s.resolver?Q((await P()).errors):await X(o,!0);a!==t.isValid&&v.state.next({isValid:a})}},S=r=>C.isValidating&&v.state.next({isValidating:r}),F=(r,a=[],l,p,d=!0,c=!0)=>{if(p&&l){if(w.action=!0,c&&Array.isArray(f(o,r))){const m=l(f(o,r),p.argA,p.argB);d&&D(o,r,m)}if(c&&Array.isArray(f(t.errors,r))){const m=l(f(t.errors,r),p.argA,p.argB);d&&D(t.errors,r,m),ss(t.errors,r)}if(C.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const m=l(f(t.touchedFields,r),p.argA,p.argB);d&&D(t.touchedFields,r,m)}C.dirtyFields&&(t.dirtyFields=Pe(n,u)),v.state.next({name:r,isDirty:$(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else D(u,r,a)},O=(r,a)=>{D(t.errors,r,a),v.state.next({errors:t.errors})},J=(r,a,l,p)=>{const d=f(o,r);if(d){const c=f(u,r,N(l)?f(n,r):l);N(c)||p&&p.defaultChecked||a?D(u,r,a?c:Re(d._f)):W(r,c),w.mount&&V()}},U=(r,a,l,p,d)=>{let c=!1,m=!1;const j={name:r};if(!l||p){C.isDirty&&(m=t.isDirty,t.isDirty=j.isDirty=$(),c=m!==j.isDirty);const E=le(f(n,r),a);m=f(t.dirtyFields,r),E?R(t.dirtyFields,r):D(t.dirtyFields,r,!0),j.dirtyFields=t.dirtyFields,c=c||C.dirtyFields&&m!==!E}if(l){const E=f(t.touchedFields,r);E||(D(t.touchedFields,r,l),j.touchedFields=t.touchedFields,c=c||C.touchedFields&&E!==l)}return c&&d&&v.state.next(j),c?j:{}},I=(r,a,l,p)=>{const d=f(t.errors,r),c=C.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&l?(h=Y(()=>O(r,l)),h(e.delayError)):(clearTimeout(g),h=null,l?D(t.errors,r,l):R(t.errors,r)),(l?!le(d,l):d)||!Q(p)||c){const m={...p,...c&&fe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...m},v.state.next(m)}S(!1)},P=async r=>s.resolver(u,s.context,es(r||y.mount,o,s.criteriaMode,s.shouldUseNativeValidation)),re=async r=>{const{errors:a}=await P();if(r)for(const l of r){const p=f(a,l);p?D(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},X=async(r,a,l={valid:!0})=>{for(const p in r){const d=r[p];if(d){const{_f:c,...m}=d;if(c){const j=y.array.has(c.name),E=await bt(d,u,K,s.shouldUseNativeValidation&&!a,j);if(E[c.name]&&(l.valid=!1,a))break;!a&&(f(E,c.name)?j?Jr(t.errors,E,c.name):D(t.errors,c.name,E[c.name]):R(t.errors,c.name))}m&&await X(m,a,l)}}return l.valid},k=()=>{for(const r of y.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Be(l)):!Be(a._f.ref))&&Fe(r)}y.unMount=new Set},$=(r,a)=>(r&&a&&D(u,r,a),!le(Xe(),n)),L=(r,a,l)=>Yr(r,y,{...w.mount?u:N(a)?n:te(r)?{[r]:a}:a},l,a),B=r=>_e(f(w.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),W=(r,a,l={})=>{const p=f(o,r);let d=a;if(p){const c=p._f;c&&(!c.disabled&&D(u,r,Rt(a,c)),d=$e(c.ref)&&q(a)?"":a,Mt(c.ref)?[...c.ref.options].forEach(m=>m.selected=d.includes(m.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(d)?!!d.find(j=>j===m.value):d===m.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(m=>m.checked=m.value===d):Ke(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||v.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&U(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ge(r)},ee=(r,a,l)=>{for(const p in a){const d=a[p],c=`${r}.${p}`,m=f(o,c);(y.array.has(r)||!Ae(d)||m&&!m._f)&&!de(d)?ee(c,d,l):W(c,d,l)}},ae=(r,a,l={})=>{const p=f(o,r),d=y.array.has(r),c=ie(a);D(u,r,c),d?(v.array.next({name:r,values:{...u}}),(C.isDirty||C.dirtyFields)&&l.shouldDirty&&v.state.next({name:r,dirtyFields:Pe(n,u),isDirty:$(r,c)})):p&&!p._f&&!q(c)?ee(r,c,l):W(r,c,l),ht(r,y)&&v.state.next({...t}),v.values.next({name:r,values:{...u}}),!w.mount&&i()},ye=async r=>{const a=r.target;let l=a.name,p=!0;const d=f(o,l),c=()=>a.type?Re(d._f):Ur(r);if(d){let m,j;const E=c(),ue=r.type===dt.BLUR||r.type===dt.FOCUS_OUT,Zt=!ts(d._f)&&!s.resolver&&!f(t.errors,l)&&!d._f.deps||rs(ue,f(t.touchedFields,l),t.isSubmitted,T,_),Le=ht(l,y,ue);D(u,l,E),ue?(d._f.onBlur&&d._f.onBlur(r),h&&h(0)):d._f.onChange&&d._f.onChange(r);const Te=U(l,E,ue,!1),er=!Q(Te)||Le;if(!ue&&v.values.next({name:l,type:r.type,values:{...u}}),Zt)return C.isValid&&V(),er&&v.state.next({name:l,...Le?{}:Te});if(!ue&&Le&&v.state.next({...t}),S(!0),s.resolver){const{errors:nt}=await P([l]),tr=mt(t.errors,o,l),ot=mt(nt,o,tr.name||l);m=ot.error,l=ot.name,j=Q(nt)}else m=(await bt(d,u,K,s.shouldUseNativeValidation))[l],p=isNaN(E)||E===f(u,l,E),p&&(m?j=!1:C.isValid&&(j=await X(o,!0)));p&&(d._f.deps&&ge(d._f.deps),I(l,j,m,Te))}},ge=async(r,a={})=>{let l,p;const d=Ne(r);if(S(!0),s.resolver){const c=await re(N(r)?r:d);l=Q(c),p=r?!d.some(m=>f(c,m)):l}else r?(p=(await Promise.all(d.map(async c=>{const m=f(o,c);return await X(m&&m._f?{[c]:m}:m)}))).every(Boolean),!(!p&&!t.isValid)&&V()):p=l=await X(o);return v.state.next({...!te(r)||C.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&Ue(o,c=>c&&f(t.errors,c),r?d:y.mount),p},Xe=r=>{const a={...n,...w.mount?u:{}};return N(r)?a:te(r)?f(a,r):r.map(l=>f(a,l))},Ze=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Jt=r=>{r&&Ne(r).forEach(a=>R(t.errors,a)),v.state.next({errors:r?t.errors:{}})},et=(r,a,l)=>{const p=(f(o,r,{_f:{}})._f||{}).ref;D(t.errors,r,{...a,ref:p}),v.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Qt=(r,a)=>oe(r)?v.values.subscribe({next:l=>r(L(void 0,a),l)}):L(r,a,!0),Fe=(r,a={})=>{for(const l of r?Ne(r):y.mount)y.mount.delete(l),y.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!s.shouldUnregister&&!a.keepDefaultValue&&R(n,l);v.values.next({values:{...u}}),v.state.next({...t,...a.keepDirty?{isDirty:$()}:{}}),!a.keepIsValid&&V()},De=(r,a={})=>{let l=f(o,r);const p=fe(a.disabled);return D(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),y.mount.add(r),l?p&&D(u,r,a.disabled?void 0:f(u,r,Re(l._f))):J(r,!0,a.value),{...p?{disabled:a.disabled}:{},...s.progressive?{required:!!a.required,min:ve(a.min),max:ve(a.max),minLength:ve(a.minLength),maxLength:ve(a.maxLength),pattern:ve(a.pattern)}:{},name:r,onChange:ye,onBlur:ye,ref:d=>{if(d){De(r,a),l=f(o,r);const c=N(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,m=Zr(c),j=l._f.refs||[];if(m?j.find(E=>E===c):c===l._f.ref)return;D(o,r,{_f:{...l._f,...m?{refs:[...j.filter(Be),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),J(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(qr(y.array,r)&&w.action)&&y.unMount.add(r)}}},tt=()=>s.shouldFocusError&&Ue(o,r=>r&&f(t.errors,r),y.mount),rt=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=ie(u);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:c}=await P();t.errors=d,p=c}else await X(o);R(t.errors,"root"),Q(t.errors)?(v.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),tt(),setTimeout(tt)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Xt=(r,a={})=>{f(o,r)&&(N(a.defaultValue)?ae(r,f(n,r)):(ae(r,a.defaultValue),D(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?$(r,f(n,r)):$()),a.keepError||(R(t.errors,r),C.isValid&&V()),v.state.next({...t}))},st=(r,a={})=>{const l=r||n,p=ie(l),d=r&&!Q(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of y.mount)f(t.dirtyFields,c)?D(d,c,f(u,c)):ae(c,f(d,c));else{if(ze&&N(r))for(const c of y.mount){const m=f(o,c);if(m&&m._f){const j=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;if($e(j)){const E=j.closest("form");if(E){E.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?ie(n):{}:ie(d),v.array.next({values:{...d}}),v.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!w.mount&&i(),w.mount=!C.isValid||!!a.keepIsValid,w.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!le(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Pe(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},it=(r,a)=>st(oe(r)?r(u):r,a);return{control:{register:De,unregister:Fe,getFieldState:Ze,handleSubmit:rt,setError:et,_executeSchema:P,_getWatch:L,_getDirty:$,_updateValid:V,_removeUnmounted:k,_updateFieldArray:F,_getFieldArray:B,_reset:st,_resetDefaultValues:()=>oe(s.defaultValues)&&s.defaultValues().then(r=>{it(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:v,_proxyFormState:C,get _fields(){return o},get _formValues(){return u},get _state(){return w},set _state(r){w=r},get _defaultValues(){return n},get _names(){return y},set _names(r){y=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ge,register:De,handleSubmit:rt,watch:Qt,setValue:ae,getValues:Xe,reset:it,resetField:Xt,clearErrors:Jt,unregister:Fe,setError:et,setFocus:(r,a={})=>{const l=f(o,r),p=l&&l._f;if(p){const d=p.refs?p.refs[0]:p.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:Ze}}function Gt(e={}){const i=ne.useRef(),s=ne.useRef(),[t,o]=ne.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...ns(e,()=>o(u=>({...u}))),formState:t});const n=i.current.control;return n._options=e,Kr({subject:n._subjects.state,next:u=>{Hr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ne.useEffect(()=>{e.values&&!le(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values):n._resetDefaultValues()},[e.values,n]),ne.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=zr(t,n),i.current}var xt=function(e,i,s){if(e&&"reportValidity"in e){var t=f(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Ut=function(e,i){var s=function(o){var n=i.fields[o];n&&n.ref&&"reportValidity"in n.ref?xt(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return xt(u,o,e)})};for(var t in i.fields)s(t)},os=function(e,i){i.shouldUseNativeValidation&&Ut(e,i);var s={};for(var t in e){var o=f(i.fields,t);D(s,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return s};function It(e,i,s){return i===void 0&&(i={}),s===void 0&&(s={}),function(t,o,n){try{return Promise.resolve(function(u,w){try{var y=(i.context,Promise.resolve(e[s.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},i,{context:o}))).then(function(h){return n.shouldUseNativeValidation&&Ut({},n),{values:s.raw?t:h,errors:{}}}))}catch(h){return w(h)}return y&&y.then?y.then(void 0,w):y}(0,function(u){if(!u.inner)throw u;return{values:{},errors:os((w=u,y=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(w.inner||[]).reduce(function(h,g){if(h[g.path]||(h[g.path]={message:g.message,type:g.type}),y){var C=h[g.path].types,v=C&&C[g.type];h[g.path]=jt(g.path,y,h,g.type,v?[].concat(v,g.message):g.message)}return h},{})),n)};var w,y}))}catch(u){return Promise.reject(u)}}}const Je=({$w:e,$h:i,$s:s,onClick:t,type:o="button",disabled:n,children:u})=>x.jsx(ur,{$w:e,$h:i,$s:s,onClick:t,type:o,disabled:n,children:u});Je.propTypes={$w:b.string,$h:b.string,$s:b.string,onClick:b.func,type:b.string,disabled:b.oneOfType([b.bool,b.number]),children:b.oneOfType([b.string,b.node,b.oneOf(["img","png","svg"])])};const Qe=({styles:e,$obh:i,$sobh:s,$ol:t,$b:o,$bh:n,$bf:u,$o:w,$oh:y,$ob:h,name:g,value:C={value:"HTML",label:"Chocolate"},defaultValue:v,placeholder:A="Create / Select...",options:_,onChange:T,isClearable:K,onCreateOption:Y,isLoading:V,isDisabled:S})=>x.jsx(Fr,{theme:cr({$obh:i,$sobh:s}),styles:{...dr({$ol:t,$b:o,$bh:n,$bf:u,$o:w,$oh:y,$ob:h,$obh:i}),...e},name:g,value:C,defaultValue:v,placeholder:A,options:_,onChange:T,isClearable:K,onCreateOption:Y,isLoading:V,isDisabled:S});Qe.propTypes={styles:b.arrayOf(b.object),$obh:b.string,$sobh:b.string,$ol:b.string,$b:b.string,$bh:b.string,$bf:b.string,$o:b.string,$oh:b.string,$ob:b.string,options:b.arrayOf(b.object),name:b.string,value:b.oneOfType([b.arrayOf(b.object),b.object,b.string]),defaultValue:b.oneOfType([b.arrayOf(b.object),b.object]),placeholder:b.string,onChange:b.func,isClearable:b.oneOfType([b.arrayOf(b.string),b.string,b.object]),onCreateOption:b.func,isLoading:b.bool,isDisabled:b.bool};const{colors:Oe,radiuses:qt,shadows:as}=pe,Wt=H.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${qt.m};
  background-color: ${Oe.white};
  box-shadow: ${as.auth};
`,he=H.label`
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
`,zt=me`
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
`,ls=H.input`
  ${zt}
  ${kt}
`,Ie=H.input`
  ${zt}
`,Ht=({el:e,setIsModal:i})=>{var Y,V;const{_id:s,cluster:t,title:o,group:n}=e,u=xe(),[w,y]=z.useState({value:n,label:n}),{clusterGroups:h}=we(),{register:g,watch:C,handleSubmit:v,formState:{errors:A}}=Gt({mode:"onBlur",resolver:It(At),defaultValues:{cluster:t,title:o}}),_=async S=>{u(Ge({_id:s,...S,group:w.value})),i(!1);const F=[];await u(qe()).unwrap().then(O=>{const{clusters:J}=O.result,U=Array.from(new Set(J.map(I=>I.group)));h.forEach(I=>{U.includes(I.clusterGroup)||F.push(I._id)})}),F.forEach(O=>u(_t(O)))},T=h.map(S=>({value:S.clusterGroup,label:S.clusterGroup})).sort((S,F)=>S.value.localeCompare(F.value)),K=S=>{C("title")?(u(Vt({clusterGroup:S})),y({value:S,label:S})):be.error("Title is required")};return x.jsxs(Wt,{onSubmit:v(_),children:[x.jsxs(he,{children:["Cluster ",x.jsxs("span",{children:[" ",(Y=A.cluster)==null?void 0:Y.message]}),x.jsx(Ie,{...g("cluster")})]}),x.jsxs(he,{children:["Title ",x.jsxs("span",{children:[" ",(V=A.title)==null?void 0:V.message]}),x.jsx(Ie,{...g("title")})]}),x.jsxs(he,{children:["Group",x.jsx(Qe,{value:w,options:T,onChange:S=>y(S||""),onCreateOption:K,isClearable:w})]}),x.jsx(Je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Ht.propTypes={el:b.object,setIsModal:b.func.isRequired};const Kt=({el:e,sortByDate:i,setSortByDate:s})=>{const t=xe(),o=fr(),{activeCluster:n,clusterTrash:u}=we(),[w,y]=z.useState(!1),{_id:h,cluster:g,title:C,favorite:v,checked:A,createdAt:_}=e,T=new Date(_).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),K=u.find(U=>U._id===h),Y=U=>{const I=U.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},V=()=>{t(Ge({_id:h,favorite:!v}))},S=()=>{t(pr(e)),e._id===n._id&&o(`/element/${h}`,{replace:!0})},F=()=>{t(Ge({_id:h,checked:!A}))},O=()=>t(yr(e)),J=()=>{s(!i),i?be.success("Ascend by Title"):be.success("Descend by Date")};return x.jsxs(jr,{children:[x.jsxs(Mr,{$hovered:v,children:[x.jsx("input",{type:"checkbox",name:"favorite",checked:v,onChange:V}),x.jsx(_r,{size:"20px"})]}),x.jsx(Er,{onClick:S,children:C}),x.jsx(Nr,{href:g,target:"_blank",rel:"noopener noreferrer",children:Y(g)}),x.jsx(Gr,{onClick:()=>y("edit"),children:x.jsx(Vr,{size:"15px"})}),x.jsx(Rr,{$hovered:K,onClick:O,children:x.jsx($r,{size:"16px"})}),x.jsxs(Br,{$hovered:A,children:[x.jsx("input",{type:"checkbox",name:"checked",checked:A,onChange:F}),x.jsx(hr,{size:"15px"})]}),x.jsx(Pr,{onClick:J,children:T}),w&&x.jsx($t,{onClick:()=>y(!1),children:x.jsx(Ht,{el:e,setIsModal:y})})]})};Kt.propTypes={el:b.object,sortByDate:b.bool,setSortByDate:b.func,$hovered:b.bool};const{indents:us}=pe,cs=H.ol`
  width: 100%;

  padding-top: 2px;
  padding-bottom: ${us.xl};
  counter-reset: section 0;
`,ds=()=>{const e=xe(),{allClusters:i,clusterFilter:s,clusterSelect:t}=we(),[o,n]=z.useState(!0);z.useEffect(()=>{e(gr()),e(qe())},[e]);const u=[...i].filter(({group:h,title:g,favorite:C,checked:v})=>{const A=h.toLowerCase().includes(s)||g.toLowerCase().includes(s),_=t.includes("favorite")?A&&C===!0:A;return t.some(T=>["checked","unchecked"].includes(T))?t.includes("checked")?_&&v===!0:_&&v===!1:_}).sort(o?(h,g)=>g.createdAt-h.createdAt:(h,g)=>h.title.localeCompare(g.title)),w=Array.from(new Set(u.map(h=>h.group))).sort((h,g)=>h.localeCompare(g)),y=t.filter(h=>!["favorite","checked","unchecked"].includes(h)).length!==0?t.filter(h=>w.includes(h)):w;return x.jsx(cs,{children:y.map(h=>x.jsxs(z.Fragment,{children:[x.jsx(Dt,{group:h}),u.map(g=>g.group===h&&x.jsx(Kt,{el:g,sortByDate:o,setSortByDate:n},g._id))]},h))})},Yt=({cluster:e,setIsModal:i})=>{var A;const s=xe(),[t,o]=z.useState(""),{clusterGroups:n}=we(),{register:u,watch:w,handleSubmit:y,formState:{errors:h}}=Gt({mode:"onBlur",resolver:It(At),defaultValues:{cluster:e}}),g=_=>{s(vr({..._,group:t.value})),i(!1)},C=n.map(_=>({value:_.clusterGroup,label:_.clusterGroup})).sort((_,T)=>_.value.localeCompare(T.value)),v=_=>{w("title")?(s(Vt({clusterGroup:_})),o({value:_,label:_})):be.error("Title is required")};return x.jsxs(Wt,{onSubmit:y(g),children:[x.jsxs(he,{children:[e.length<=45?e:e.substring(0,45)+"...",x.jsx(ls,{...u("cluster")})]}),x.jsxs(he,{children:["Title ",x.jsxs("span",{children:[" ",(A=h.title)==null?void 0:A.message]}),x.jsx(Ie,{autoFocus:!0,...u("title")})]}),x.jsxs(he,{children:["Group",x.jsx(Qe,{value:t,options:C,onChange:_=>o(_||""),onCreateOption:v,isClearable:t})]}),x.jsx(Je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Yt.propTypes={cluster:b.string.isRequired,setIsModal:b.func.isRequired};const{button:wt}=pe.shadows,{s:fs,m:hs}=pe.indents,ps=()=>{const e=xe(),[i,s]=z.useState(!1),{clusterTrash:t,clusterGroups:o}=we(),[n,u]=z.useState(""),w=t.length>0;z.useEffect(()=>{const g=C=>{C.key==="+"&&y()};return addEventListener("keydown",g),()=>{removeEventListener("keydown",g)}},[]);const y=async g=>{const C=await mr();try{await kr.validate({cluster:C}),u(C),s("add")}catch(v){g==null||g.target.blur(),be.error(`Invalid cluster, ${v.message}`)}},h=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await t.forEach(C=>e(xr(C._id))),e(wr());const g=[];await e(qe()).unwrap().then(C=>{const{clusters:v}=C.result,A=Array.from(new Set(v.map(_=>_.group)));o.forEach(_=>{A.includes(_.clusterGroup)||g.push(_._id)})}),g.forEach(C=>e(_t(C)))};return x.jsxs(br,{$m:`${fs} ${hs}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[w?x.jsx(ut,{onClick:h,$s:"m",$bs:wt,children:"Delete"}):x.jsx("span",{}),x.jsx(ut,{onClick:y,$s:"m",$bs:wt,children:"Add"}),i&&x.jsx($t,{onClick:()=>s(!1),children:x.jsx(Yt,{cluster:n,setIsModal:s})})]})},{s:Ct,m:ys}=pe.indents,Cs=()=>x.jsxs(Cr,{$p:`2px ${ys} ${Ct} ${Ct}`,children:[x.jsx(ds,{}),x.jsx(ps,{})]});export{Cs as default};
