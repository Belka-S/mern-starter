import{_ as ir,r as z,w as lt,x as Te,y as nr,z as ut,A as or,C as ar,D as lr,S as ur,E as cr,n as ue,s as H,t as xe,P as b,j as m,G as qe,R as ne,H as dr,I as fr,J as hr,u as me,K as we,N as Re,O as We,T as $t,Q as be,e as _t,g as pr,U as yr,M as At,V as gr,W as vr,X as br,Y as xr,Z as mr,$ as ct,a0 as wr,a1 as Cr,a2 as kr,F as Vr}from"./index-fa1e7a50.js";import{t as St,c as $r}from"./clusterSchema-70b1afdc.js";var _r=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],dt=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(i).toLowerCase(),n=String(t.getOptionValue(s)).toLowerCase(),u=String(t.getOptionLabel(s)).toLowerCase();return n===o||u===o},Ee={formatCreateLabel:function(i){return'Create "'.concat(i,'"')},isValidNewOption:function(i,s,t,o){return!(!i||s.some(function(n){return dt(i,n,o)})||t.some(function(n){return dt(i,n,o)}))},getNewOptionData:function(i,s){return{label:s,value:i,__isNew__:!0}}};function Ar(e){var i=e.allowCreateWhileLoading,s=i===void 0?!1:i,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Ee.formatCreateLabel:n,w=e.isValidNewOption,y=w===void 0?Ee.isValidNewOption:w,h=e.getNewOptionData,g=h===void 0?Ee.getNewOptionData:h,C=e.onCreateOption,v=e.options,A=v===void 0?[]:v,k=e.onChange,j=ir(e,_r),K=j.getOptionValue,Y=K===void 0?or:K,V=j.getOptionLabel,S=V===void 0?ar:V,F=j.inputValue,O=j.isLoading,J=j.isMulti,U=j.value,I=j.name,G=z.useMemo(function(){return y(F,lt(U),A,{getOptionValue:Y,getOptionLabel:S})?g(F,u(F)):void 0},[u,g,S,Y,F,y,A,U]),re=z.useMemo(function(){return(s||!O)&&G?o==="first"?[G].concat(Te(A)):[].concat(Te(A),[G]):A},[s,o,O,G,A]),X=z.useCallback(function(_,$){if($.action!=="select-option")return k(_,$);var D=Array.isArray(_)?_:[_];if(D[D.length-1]===G){if(C)C(F);else{var B=g(F,F),W={action:"create-option",name:I,option:B};k(nr(J,[].concat(Te(lt(U)),[B]),B),W)}return}k(_,$)},[g,F,J,I,G,C,k,U]);return ut(ut({},j),{},{options:re,onChange:X})}var Sr=z.forwardRef(function(e,i){var s=lr(e),t=Ar(s);return z.createElement(ur,cr({ref:i},t))}),Or=Sr;const Ot=ue`
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
`;const{colors:P,shadows:Fr,indents:Lr,radiuses:ft}=xe,Ft=ue`
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
`,Dr=H.li`
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
`,jr=H.li`
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
`,Lt=ue`
  font-size: 16px;

  &:hover {
    color: ${P.hovered};
  }
`,Tr=H.button`
  ${Lt}

  border: none;
  background-color: transparent;
  color: ${P.black};
  font-weight: 500;
`,Er=H.a`
  ${Lt}

  color: ${P.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${P.black};
  }
`,Dt=ue`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Ot}
  }
`,Nr=H.label`
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
`,Mr=H.label`
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
`,ze=ue`
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
`,Br=H.button`
  ${ze}

  font-size: 14px;
  /* color: ${P.placeholder}; */
`,Pr=H.button`
  ${ze}

  opacity: ${({$hovered:e})=>e?1:0};
`,Gr=H.button`
  ${ze}

  opacity:0;
`,jt=({group:e})=>m.jsx(Dr,{children:m.jsx("h2",{children:e})});jt.propTypes={group:b.string};function Rr(e){return qe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}function Ur(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"}},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(e)}function Ir(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}var Ce=e=>e.type==="checkbox",fe=e=>e instanceof Date,q=e=>e==null;const Tt=e=>typeof e=="object";var M=e=>!q(e)&&!Array.isArray(e)&&Tt(e)&&!fe(e),qr=e=>M(e)&&e.target?Ce(e.target)?e.target.checked:e.target.value:e,Wr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zr=(e,i)=>e.has(Wr(i)),Hr=e=>{const i=e.constructor&&e.constructor.prototype;return M(i)&&i.hasOwnProperty("isPrototypeOf")},He=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ie(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(He&&(e instanceof Blob||e instanceof FileList))&&(s||M(e)))if(i=s?[]:{},!s&&!Hr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=ie(e[t]));else return e;return i}var ke=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,f=(e,i,s)=>{if(!i||!M(e))return s;const t=ke(i.split(/[,[\].]+?/)).reduce((o,n)=>q(o)?o:o[n],e);return N(t)||t===e?N(e[i])?s:e[i]:t};const ht={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},se={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var Kr=(e,i,s,t=!0)=>{const o={defaultValues:i._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return i._proxyFormState[u]!==Z.all&&(i._proxyFormState[u]=!t||Z.all),s&&(s[u]=!0),e[u]}});return o},Q=e=>M(e)&&!Object.keys(e).length,Yr=(e,i,s,t)=>{s(e);const{name:o,...n}=e;return Q(n)||Object.keys(n).length>=Object.keys(i).length||Object.keys(n).find(u=>i[u]===(!t||Z.all))},Ne=e=>Array.isArray(e)?e:[e];function Jr(e){const i=ne.useRef(e);i.current=e,ne.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var te=e=>typeof e=="string",Qr=(e,i,s,t,o)=>te(e)?(t&&i.watch.add(e),f(s,e,o)):Array.isArray(e)?e.map(n=>(t&&i.watch.add(n),f(s,n))):(t&&(i.watchAll=!0),s),Ke=e=>/^\w*$/.test(e),Et=e=>ke(e.replace(/["|']|\]/g,"").split(/\.|\[/));function L(e,i,s){let t=-1;const o=Ke(i)?[i]:Et(i),n=o.length,u=n-1;for(;++t<n;){const w=o[t];let y=s;if(t!==u){const h=e[w];y=M(h)||Array.isArray(h)?h:isNaN(+o[t+1])?{}:[]}e[w]=y,e=e[w]}return e}var Nt=(e,i,s,t,o)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:o||!0}}:{};const Ue=(e,i,s)=>{for(const t of s||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&i(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else M(u)&&Ue(u,i)}}};var pt=e=>({isOnSubmit:!e||e===Z.onSubmit,isOnBlur:e===Z.onBlur,isOnChange:e===Z.onChange,isOnAll:e===Z.all,isOnTouch:e===Z.onTouched}),yt=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Xr=(e,i,s)=>{const t=ke(f(e,s));return L(t,"root",i[s]),L(e,s,t),e},he=e=>typeof e=="boolean",Ye=e=>e.type==="file",oe=e=>typeof e=="function",$e=e=>{if(!He)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},Ve=e=>te(e),Je=e=>e.type==="radio",_e=e=>e instanceof RegExp;const gt={value:!1,isValid:!1},vt={value:!0,isValid:!0};var Mt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?vt:{value:e[0].value,isValid:!0}:vt:gt}return gt};const bt={isValid:!1,value:null};var Bt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,bt):bt;function xt(e,i,s="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||he(e)&&!e)return{type:s,message:Ve(e)?e:"",ref:i}}var de=e=>M(e)&&!_e(e)?e:{value:e,message:""},mt=async(e,i,s,t,o)=>{const{ref:n,refs:u,required:w,maxLength:y,minLength:h,min:g,max:C,pattern:v,validate:A,name:k,valueAsNumber:j,mount:K,disabled:Y}=e._f,V=f(i,k);if(!K||Y)return{};const S=u?u[0]:n,F=_=>{t&&S.reportValidity&&(S.setCustomValidity(he(_)?"":_||""),S.reportValidity())},O={},J=Je(n),U=Ce(n),I=J||U,G=(j||Ye(n))&&N(n.value)&&N(V)||$e(n)&&n.value===""||V===""||Array.isArray(V)&&!V.length,re=Nt.bind(null,k,s,O),X=(_,$,D,B=se.maxLength,W=se.minLength)=>{const ee=_?$:D;O[k]={type:_?B:W,message:ee,ref:n,...re(_?B:W,ee)}};if(o?!Array.isArray(V)||!V.length:w&&(!I&&(G||q(V))||he(V)&&!V||U&&!Mt(u).isValid||J&&!Bt(u).isValid)){const{value:_,message:$}=Ve(w)?{value:!!w,message:w}:de(w);if(_&&(O[k]={type:se.required,message:$,ref:S,...re(se.required,$)},!s))return F($),O}if(!G&&(!q(g)||!q(C))){let _,$;const D=de(C),B=de(g);if(!q(V)&&!isNaN(V)){const W=n.valueAsNumber||V&&+V;q(D.value)||(_=W>D.value),q(B.value)||($=W<B.value)}else{const W=n.valueAsDate||new Date(V),ee=ge=>new Date(new Date().toDateString()+" "+ge),ae=n.type=="time",ye=n.type=="week";te(D.value)&&V&&(_=ae?ee(V)>ee(D.value):ye?V>D.value:W>new Date(D.value)),te(B.value)&&V&&($=ae?ee(V)<ee(B.value):ye?V<B.value:W<new Date(B.value))}if((_||$)&&(X(!!_,D.message,B.message,se.max,se.min),!s))return F(O[k].message),O}if((y||h)&&!G&&(te(V)||o&&Array.isArray(V))){const _=de(y),$=de(h),D=!q(_.value)&&V.length>+_.value,B=!q($.value)&&V.length<+$.value;if((D||B)&&(X(D,_.message,$.message),!s))return F(O[k].message),O}if(v&&!G&&te(V)){const{value:_,message:$}=de(v);if(_e(_)&&!V.match(_)&&(O[k]={type:se.pattern,message:$,ref:n,...re(se.pattern,$)},!s))return F($),O}if(A){if(oe(A)){const _=await A(V,i),$=xt(_,S);if($&&(O[k]={...$,...re(se.validate,$.message)},!s))return F($.message),O}else if(M(A)){let _={};for(const $ in A){if(!Q(_)&&!s)break;const D=xt(await A[$](V,i),S,$);D&&(_={...D,...re($,D.message)},F(D.message),s&&(O[k]=_))}if(!Q(_)&&(O[k]={ref:S,..._},!s))return O}}return F(!0),O};function Zr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=N(e)?t++:e[i[t++]];return e}function es(e){for(const i in e)if(e.hasOwnProperty(i)&&!N(e[i]))return!1;return!0}function R(e,i){const s=Array.isArray(i)?i:Ke(i)?[i]:Et(i),t=s.length===1?e:Zr(e,s),o=s.length-1,n=s[o];return t&&delete t[n],o!==0&&(M(t)&&Q(t)||Array.isArray(t)&&es(t))&&R(e,s.slice(0,-1)),e}function Me(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var Ae=e=>q(e)||!Tt(e);function le(e,i){if(Ae(e)||Ae(i))return e===i;if(fe(e)&&fe(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const o of s){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=i[o];if(fe(n)&&fe(u)||M(n)&&M(u)||Array.isArray(n)&&Array.isArray(u)?!le(n,u):n!==u)return!1}}return!0}var Pt=e=>e.type==="select-multiple",ts=e=>Je(e)||Ce(e),Be=e=>$e(e)&&e.isConnected,Gt=e=>{for(const i in e)if(oe(e[i]))return!0;return!1};function Se(e,i={}){const s=Array.isArray(e);if(M(e)||s)for(const t in e)Array.isArray(e[t])||M(e[t])&&!Gt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Se(e[t],i[t])):q(e[t])||(i[t]=!0);return i}function Rt(e,i,s){const t=Array.isArray(e);if(M(e)||t)for(const o in e)Array.isArray(e[o])||M(e[o])&&!Gt(e[o])?N(i)||Ae(s[o])?s[o]=Array.isArray(e[o])?Se(e[o],[]):{...Se(e[o])}:Rt(e[o],q(i)?{}:i[o],s[o]):s[o]=!le(e[o],i[o]);return s}var Pe=(e,i)=>Rt(e,i,Se(i)),Ut=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>N(e)?e:i?e===""?NaN:e&&+e:s&&te(e)?new Date(e):t?t(e):e;function Ge(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ye(i)?i.files:Je(i)?Bt(e.refs).value:Pt(i)?[...i.selectedOptions].map(({value:s})=>s):Ce(i)?Mt(e.refs).value:Ut(N(i.value)?e.ref.value:i.value,e)}var rs=(e,i,s,t)=>{const o={};for(const n of e){const u=f(i,n);u&&L(o,n,u._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:t}},ve=e=>N(e)?e:_e(e)?e.source:M(e)?_e(e.value)?e.value.source:e.value:e,ss=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function wt(e,i,s){const t=f(e,s);if(t||Ke(s))return{error:t,name:s};const o=s.split(".");for(;o.length;){const n=o.join("."),u=f(i,n),w=f(e,n);if(u&&!Array.isArray(u)&&s!==n)return{name:s};if(w&&w.type)return{name:n,error:w};o.pop()}return{name:s}}var is=(e,i,s,t,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(i||e):(s?t.isOnBlur:o.isOnBlur)?!e:(s?t.isOnChange:o.isOnChange)?e:!0,ns=(e,i)=>!ke(f(e,i)).length&&R(e,i);const os={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function as(e={},i){let s={...os,...e},t={submitCount:0,isDirty:!1,isLoading:oe(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=M(s.defaultValues)||M(s.values)?ie(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:ie(n),w={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},h,g=0;const C={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Me(),array:Me(),state:Me()},A=e.resetOptions&&e.resetOptions.keepDirtyValues,k=pt(s.mode),j=pt(s.reValidateMode),K=s.criteriaMode===Z.all,Y=r=>a=>{clearTimeout(g),g=setTimeout(r,a)},V=async r=>{if(C.isValid||r){const a=s.resolver?Q((await G()).errors):await X(o,!0);a!==t.isValid&&v.state.next({isValid:a})}},S=r=>C.isValidating&&v.state.next({isValidating:r}),F=(r,a=[],l,p,d=!0,c=!0)=>{if(p&&l){if(w.action=!0,c&&Array.isArray(f(o,r))){const x=l(f(o,r),p.argA,p.argB);d&&L(o,r,x)}if(c&&Array.isArray(f(t.errors,r))){const x=l(f(t.errors,r),p.argA,p.argB);d&&L(t.errors,r,x),ns(t.errors,r)}if(C.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const x=l(f(t.touchedFields,r),p.argA,p.argB);d&&L(t.touchedFields,r,x)}C.dirtyFields&&(t.dirtyFields=Pe(n,u)),v.state.next({name:r,isDirty:$(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else L(u,r,a)},O=(r,a)=>{L(t.errors,r,a),v.state.next({errors:t.errors})},J=(r,a,l,p)=>{const d=f(o,r);if(d){const c=f(u,r,N(l)?f(n,r):l);N(c)||p&&p.defaultChecked||a?L(u,r,a?c:Ge(d._f)):W(r,c),w.mount&&V()}},U=(r,a,l,p,d)=>{let c=!1,x=!1;const T={name:r};if(!l||p){C.isDirty&&(x=t.isDirty,t.isDirty=T.isDirty=$(),c=x!==T.isDirty);const E=le(f(n,r),a);x=f(t.dirtyFields,r),E?R(t.dirtyFields,r):L(t.dirtyFields,r,!0),T.dirtyFields=t.dirtyFields,c=c||C.dirtyFields&&x!==!E}if(l){const E=f(t.touchedFields,r);E||(L(t.touchedFields,r,l),T.touchedFields=t.touchedFields,c=c||C.touchedFields&&E!==l)}return c&&d&&v.state.next(T),c?T:{}},I=(r,a,l,p)=>{const d=f(t.errors,r),c=C.isValid&&he(a)&&t.isValid!==a;if(e.delayError&&l?(h=Y(()=>O(r,l)),h(e.delayError)):(clearTimeout(g),h=null,l?L(t.errors,r,l):R(t.errors,r)),(l?!le(d,l):d)||!Q(p)||c){const x={...p,...c&&he(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...x},v.state.next(x)}S(!1)},G=async r=>s.resolver(u,s.context,rs(r||y.mount,o,s.criteriaMode,s.shouldUseNativeValidation)),re=async r=>{const{errors:a}=await G();if(r)for(const l of r){const p=f(a,l);p?L(t.errors,l,p):R(t.errors,l)}else t.errors=a;return a},X=async(r,a,l={valid:!0})=>{for(const p in r){const d=r[p];if(d){const{_f:c,...x}=d;if(c){const T=y.array.has(c.name),E=await mt(d,u,K,s.shouldUseNativeValidation&&!a,T);if(E[c.name]&&(l.valid=!1,a))break;!a&&(f(E,c.name)?T?Xr(t.errors,E,c.name):L(t.errors,c.name,E[c.name]):R(t.errors,c.name))}x&&await X(x,a,l)}}return l.valid},_=()=>{for(const r of y.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!Be(l)):!Be(a._f.ref))&&Fe(r)}y.unMount=new Set},$=(r,a)=>(r&&a&&L(u,r,a),!le(Ze(),n)),D=(r,a,l)=>Qr(r,y,{...w.mount?u:N(a)?n:te(r)?{[r]:a}:a},l,a),B=r=>ke(f(w.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),W=(r,a,l={})=>{const p=f(o,r);let d=a;if(p){const c=p._f;c&&(!c.disabled&&L(u,r,Ut(a,c)),d=$e(c.ref)&&q(a)?"":a,Pt(c.ref)?[...c.ref.options].forEach(x=>x.selected=d.includes(x.value)):c.refs?Ce(c.ref)?c.refs.length>1?c.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(d)?!!d.find(T=>T===x.value):d===x.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(x=>x.checked=x.value===d):Ye(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||v.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&U(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ge(r)},ee=(r,a,l)=>{for(const p in a){const d=a[p],c=`${r}.${p}`,x=f(o,c);(y.array.has(r)||!Ae(d)||x&&!x._f)&&!fe(d)?ee(c,d,l):W(c,d,l)}},ae=(r,a,l={})=>{const p=f(o,r),d=y.array.has(r),c=ie(a);L(u,r,c),d?(v.array.next({name:r,values:{...u}}),(C.isDirty||C.dirtyFields)&&l.shouldDirty&&v.state.next({name:r,dirtyFields:Pe(n,u),isDirty:$(r,c)})):p&&!p._f&&!q(c)?ee(r,c,l):W(r,c,l),yt(r,y)&&v.state.next({...t}),v.values.next({name:r,values:{...u}}),!w.mount&&i()},ye=async r=>{const a=r.target;let l=a.name,p=!0;const d=f(o,l),c=()=>a.type?Ge(d._f):qr(r);if(d){let x,T;const E=c(),ce=r.type===ht.BLUR||r.type===ht.FOCUS_OUT,tr=!ss(d._f)&&!s.resolver&&!f(t.errors,l)&&!d._f.deps||is(ce,f(t.touchedFields,l),t.isSubmitted,j,k),De=yt(l,y,ce);L(u,l,E),ce?(d._f.onBlur&&d._f.onBlur(r),h&&h(0)):d._f.onChange&&d._f.onChange(r);const je=U(l,E,ce,!1),rr=!Q(je)||De;if(!ce&&v.values.next({name:l,type:r.type,values:{...u}}),tr)return C.isValid&&V(),rr&&v.state.next({name:l,...De?{}:je});if(!ce&&De&&v.state.next({...t}),S(!0),s.resolver){const{errors:ot}=await G([l]),sr=wt(t.errors,o,l),at=wt(ot,o,sr.name||l);x=at.error,l=at.name,T=Q(ot)}else x=(await mt(d,u,K,s.shouldUseNativeValidation))[l],p=isNaN(E)||E===f(u,l,E),p&&(x?T=!1:C.isValid&&(T=await X(o,!0)));p&&(d._f.deps&&ge(d._f.deps),I(l,T,x,je))}},ge=async(r,a={})=>{let l,p;const d=Ne(r);if(S(!0),s.resolver){const c=await re(N(r)?r:d);l=Q(c),p=r?!d.some(x=>f(c,x)):l}else r?(p=(await Promise.all(d.map(async c=>{const x=f(o,c);return await X(x&&x._f?{[c]:x}:x)}))).every(Boolean),!(!p&&!t.isValid)&&V()):p=l=await X(o);return v.state.next({...!te(r)||C.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!p&&Ue(o,c=>c&&f(t.errors,c),r?d:y.mount),p},Ze=r=>{const a={...n,...w.mount?u:{}};return N(r)?a:te(r)?f(a,r):r.map(l=>f(a,l))},et=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Xt=r=>{r&&Ne(r).forEach(a=>R(t.errors,a)),v.state.next({errors:r?t.errors:{}})},tt=(r,a,l)=>{const p=(f(o,r,{_f:{}})._f||{}).ref;L(t.errors,r,{...a,ref:p}),v.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Zt=(r,a)=>oe(r)?v.values.subscribe({next:l=>r(D(void 0,a),l)}):D(r,a,!0),Fe=(r,a={})=>{for(const l of r?Ne(r):y.mount)y.mount.delete(l),y.array.delete(l),a.keepValue||(R(o,l),R(u,l)),!a.keepError&&R(t.errors,l),!a.keepDirty&&R(t.dirtyFields,l),!a.keepTouched&&R(t.touchedFields,l),!s.shouldUnregister&&!a.keepDefaultValue&&R(n,l);v.values.next({values:{...u}}),v.state.next({...t,...a.keepDirty?{isDirty:$()}:{}}),!a.keepIsValid&&V()},Le=(r,a={})=>{let l=f(o,r);const p=he(a.disabled);return L(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),y.mount.add(r),l?p&&L(u,r,a.disabled?void 0:f(u,r,Ge(l._f))):J(r,!0,a.value),{...p?{disabled:a.disabled}:{},...s.progressive?{required:!!a.required,min:ve(a.min),max:ve(a.max),minLength:ve(a.minLength),maxLength:ve(a.maxLength),pattern:ve(a.pattern)}:{},name:r,onChange:ye,onBlur:ye,ref:d=>{if(d){Le(r,a),l=f(o,r);const c=N(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,x=ts(c),T=l._f.refs||[];if(x?T.find(E=>E===c):c===l._f.ref)return;L(o,r,{_f:{...l._f,...x?{refs:[...T.filter(Be),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),J(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||a.shouldUnregister)&&!(zr(y.array,r)&&w.action)&&y.unMount.add(r)}}},rt=()=>s.shouldFocusError&&Ue(o,r=>r&&f(t.errors,r),y.mount),st=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=ie(u);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:d,values:c}=await G();t.errors=d,p=c}else await X(o);R(t.errors,"root"),Q(t.errors)?(v.state.next({errors:{}}),await r(p,l)):(a&&await a({...t.errors},l),rt(),setTimeout(rt)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},er=(r,a={})=>{f(o,r)&&(N(a.defaultValue)?ae(r,f(n,r)):(ae(r,a.defaultValue),L(n,r,a.defaultValue)),a.keepTouched||R(t.touchedFields,r),a.keepDirty||(R(t.dirtyFields,r),t.isDirty=a.defaultValue?$(r,f(n,r)):$()),a.keepError||(R(t.errors,r),C.isValid&&V()),v.state.next({...t}))},it=(r,a={})=>{const l=r||n,p=ie(l),d=r&&!Q(r)?p:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||A)for(const c of y.mount)f(t.dirtyFields,c)?L(d,c,f(u,c)):ae(c,f(d,c));else{if(He&&N(r))for(const c of y.mount){const x=f(o,c);if(x&&x._f){const T=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if($e(T)){const E=T.closest("form");if(E){E.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?ie(n):{}:ie(d),v.array.next({values:{...d}}),v.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!w.mount&&i(),w.mount=!C.isValid||!!a.keepIsValid,w.watch=!!e.shouldUnregister,v.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!le(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Pe(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},nt=(r,a)=>it(oe(r)?r(u):r,a);return{control:{register:Le,unregister:Fe,getFieldState:et,handleSubmit:st,setError:tt,_executeSchema:G,_getWatch:D,_getDirty:$,_updateValid:V,_removeUnmounted:_,_updateFieldArray:F,_getFieldArray:B,_reset:it,_resetDefaultValues:()=>oe(s.defaultValues)&&s.defaultValues().then(r=>{nt(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:v,_proxyFormState:C,get _fields(){return o},get _formValues(){return u},get _state(){return w},set _state(r){w=r},get _defaultValues(){return n},get _names(){return y},set _names(r){y=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ge,register:Le,handleSubmit:st,watch:Zt,setValue:ae,getValues:Ze,reset:nt,resetField:er,clearErrors:Xt,unregister:Fe,setError:tt,setFocus:(r,a={})=>{const l=f(o,r),p=l&&l._f;if(p){const d=p.refs?p.refs[0]:p.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:et}}function It(e={}){const i=ne.useRef(),s=ne.useRef(),[t,o]=ne.useState({isDirty:!1,isValidating:!1,isLoading:oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:oe(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...as(e,()=>o(u=>({...u}))),formState:t});const n=i.current.control;return n._options=e,Jr({subject:n._subjects.state,next:u=>{Yr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),ne.useEffect(()=>{e.values&&!le(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values):n._resetDefaultValues()},[e.values,n]),ne.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=Kr(t,n),i.current}var Ct=function(e,i,s){if(e&&"reportValidity"in e){var t=f(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},qt=function(e,i){var s=function(o){var n=i.fields[o];n&&n.ref&&"reportValidity"in n.ref?Ct(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return Ct(u,o,e)})};for(var t in i.fields)s(t)},ls=function(e,i){i.shouldUseNativeValidation&&qt(e,i);var s={};for(var t in e){var o=f(i.fields,t);L(s,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return s};function Wt(e,i,s){return i===void 0&&(i={}),s===void 0&&(s={}),function(t,o,n){try{return Promise.resolve(function(u,w){try{var y=(i.context,Promise.resolve(e[s.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},i,{context:o}))).then(function(h){return n.shouldUseNativeValidation&&qt({},n),{values:s.raw?t:h,errors:{}}}))}catch(h){return w(h)}return y&&y.then?y.then(void 0,w):y}(0,function(u){if(!u.inner)throw u;return{values:{},errors:ls((w=u,y=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(w.inner||[]).reduce(function(h,g){if(h[g.path]||(h[g.path]={message:g.message,type:g.type}),y){var C=h[g.path].types,v=C&&C[g.type];h[g.path]=Nt(g.path,y,h,g.type,v?[].concat(v,g.message):g.message)}return h},{})),n)};var w,y}))}catch(u){return Promise.reject(u)}}}const Qe=({$w:e,$h:i,$s:s,onClick:t,type:o="button",disabled:n,children:u})=>m.jsx(dr,{$w:e,$h:i,$s:s,onClick:t,type:o,disabled:n,children:u});Qe.propTypes={$w:b.string,$h:b.string,$s:b.string,onClick:b.func,type:b.string,disabled:b.oneOfType([b.bool,b.number]),children:b.oneOfType([b.string,b.node,b.oneOf(["img","png","svg"])])};const Xe=({styles:e,$obh:i,$sobh:s,$ol:t,$b:o,$bh:n,$bf:u,$o:w,$oh:y,$ob:h,name:g,value:C={value:"HTML",label:"Chocolate"},defaultValue:v,placeholder:A="Create / Select...",options:k,onChange:j,isClearable:K,onCreateOption:Y,isLoading:V,isDisabled:S})=>m.jsx(Or,{theme:fr({$obh:i,$sobh:s}),styles:{...hr({$ol:t,$b:o,$bh:n,$bf:u,$o:w,$oh:y,$ob:h,$obh:i}),...e},name:g,value:C,defaultValue:v,placeholder:A,options:k,onChange:j,isClearable:K,onCreateOption:Y,isLoading:V,isDisabled:S});Xe.propTypes={styles:b.arrayOf(b.object),$obh:b.string,$sobh:b.string,$ol:b.string,$b:b.string,$bh:b.string,$bf:b.string,$o:b.string,$oh:b.string,$ob:b.string,options:b.arrayOf(b.object),name:b.string,value:b.oneOfType([b.arrayOf(b.object),b.object,b.string]),defaultValue:b.oneOfType([b.arrayOf(b.object),b.object]),placeholder:b.string,onChange:b.func,isClearable:b.oneOfType([b.arrayOf(b.string),b.string,b.object]),onCreateOption:b.func,isLoading:b.bool,isDisabled:b.bool};const{colors:Oe,radiuses:zt,shadows:us}=xe,Ht=H.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${zt.m};
  background-color: ${Oe.white};
  box-shadow: ${us.auth};
`,pe=H.label`
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
`,Kt=ue`
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
`,cs=H.input`
  ${Kt}
  ${Ot}
`,Ie=H.input`
  ${Kt}
`,Yt=({el:e,setIsModal:i})=>{var Y,V;const{_id:s,cluster:t,title:o,group:n}=e,u=me(),[w,y]=z.useState({value:n,label:n}),{clusterGroups:h}=we(),{register:g,watch:C,handleSubmit:v,formState:{errors:A}}=It({mode:"onBlur",resolver:Wt(St),defaultValues:{cluster:t,title:o}}),k=async S=>{u(Re({_id:s,...S,group:w.value})),i(!1);const F=[];await u(We()).unwrap().then(O=>{const{clusters:J}=O.result,U=Array.from(new Set(J.map(I=>I.group)));h.forEach(I=>{U.includes(I.clusterGroup)||F.push(I._id)})}),F.forEach(O=>u($t(O)))},j=h.map(S=>({value:S.clusterGroup,label:S.clusterGroup})).sort((S,F)=>S.value.localeCompare(F.value)),K=S=>{C("title")?(u(_t({clusterGroup:S})),y({value:S,label:S})):be.error("Title is required")};return m.jsxs(Ht,{onSubmit:v(k),children:[m.jsxs(pe,{children:["Cluster ",m.jsxs("span",{children:[" ",(Y=A.cluster)==null?void 0:Y.message]}),m.jsx(Ie,{...g("cluster")})]}),m.jsxs(pe,{children:["Title ",m.jsxs("span",{children:[" ",(V=A.title)==null?void 0:V.message]}),m.jsx(Ie,{...g("title")})]}),m.jsxs(pe,{children:["Group",m.jsx(Xe,{value:w,options:j,onChange:S=>y(S||""),onCreateOption:K,isClearable:w})]}),m.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Yt.propTypes={el:b.object,setIsModal:b.func.isRequired};const Jt=({el:e,sortByDate:i,setSortByDate:s})=>{const t=me(),o=pr(),{activeCluster:n,clusterTrash:u}=we(),[w,y]=z.useState(!1),{_id:h,cluster:g,title:C,favorite:v,checked:A,createdAt:k}=e,j=new Date(k).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),K=u.find(U=>U._id===h),Y=U=>{const I=U.replace("https://","").replace("http://","");return I.length<=30?I:I.substring(0,29).concat("...")},V=()=>{t(Re({_id:h,favorite:!v}))},S=()=>{t(gr(e)),e._id===n._id&&o(`/element/${h}`,{replace:!0})},F=()=>{t(Re({_id:h,checked:!A}))},O=()=>t(vr(e)),J=()=>{s(!i),i?be.success("Ascend by Title"):be.success("Descend by Date")};return m.jsxs(jr,{children:[m.jsxs(Nr,{$hovered:v,children:[m.jsx("input",{type:"checkbox",name:"favorite",checked:v,onChange:V}),m.jsx(Rr,{size:"18px"})]}),m.jsx(Tr,{onClick:S,children:C}),m.jsx(Er,{href:g,target:"_blank",rel:"noopener noreferrer",children:Y(g)}),m.jsx(Gr,{onClick:()=>y("edit"),children:m.jsx(Ur,{size:"15px"})}),m.jsx(Pr,{$hovered:K,onClick:O,children:m.jsx(Ir,{size:"16px"})}),m.jsxs(Mr,{$hovered:A,children:[m.jsx("input",{type:"checkbox",name:"checked",checked:A,onChange:F}),m.jsx(yr,{size:"15px"})]}),m.jsx(Br,{onClick:J,children:j}),w&&m.jsx(At,{onClick:()=>y(!1),children:m.jsx(Yt,{el:e,setIsModal:y})})]})};Jt.propTypes={el:b.object,sortByDate:b.bool,setSortByDate:b.func,$hovered:b.bool};const{colors:ds,indents:fs,radiuses:hs}=xe,ps=H.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${fs.xl};
  counter-reset: section 0;
  background-color: ${ds.white};
  border-radius: ${hs.xl};
`,ys=()=>{const e=me(),{allClusters:i,clusterFilter:s,clusterSelect:t}=we(),[o,n]=z.useState(!0);z.useEffect(()=>{e(br()),e(We())},[e]);const u=[...i].filter(({group:h,title:g,favorite:C,checked:v})=>{const A=h.toLowerCase().includes(s)||g.toLowerCase().includes(s),k=t.includes("favorite")?A&&C===!0:A;return t.some(j=>["checked","unchecked"].includes(j))?t.includes("checked")?k&&v===!0:k&&v===!1:k}).sort(o?(h,g)=>g.createdAt-h.createdAt:(h,g)=>h.title.localeCompare(g.title)),w=Array.from(new Set(u.map(h=>h.group))).sort((h,g)=>h.localeCompare(g)),y=t.filter(h=>!["favorite","checked","unchecked"].includes(h)).length!==0?t.filter(h=>w.includes(h)):w;return m.jsx(ps,{children:y.map(h=>m.jsxs(z.Fragment,{children:[m.jsx(jt,{group:h}),u.map(g=>g.group===h&&m.jsx(Jt,{el:g,sortByDate:o,setSortByDate:n},g._id))]},h))})},Qt=({cluster:e,setIsModal:i})=>{var A;const s=me(),[t,o]=z.useState(""),{clusterGroups:n}=we(),{register:u,watch:w,handleSubmit:y,formState:{errors:h}}=It({mode:"onBlur",resolver:Wt(St),defaultValues:{cluster:e}}),g=k=>{s(xr({...k,group:t.value})),i(!1)},C=n.map(k=>({value:k.clusterGroup,label:k.clusterGroup})).sort((k,j)=>k.value.localeCompare(j.value)),v=k=>{w("title")?(s(_t({clusterGroup:k})),o({value:k,label:k})):be.error("Title is required")};return m.jsxs(Ht,{onSubmit:y(g),children:[m.jsxs(pe,{children:[e.length<=45?e:e.substring(0,45)+"...",m.jsx(cs,{...u("cluster")})]}),m.jsxs(pe,{children:["Title ",m.jsxs("span",{children:[" ",(A=h.title)==null?void 0:A.message]}),m.jsx(Ie,{autoFocus:!0,...u("title")})]}),m.jsxs(pe,{children:["Group",m.jsx(Xe,{value:t,options:C,onChange:k=>o(k||""),onCreateOption:v,isClearable:t})]}),m.jsx(Qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Qt.propTypes={cluster:b.string.isRequired,setIsModal:b.func.isRequired};const{button:kt}=xe.shadows,gs=()=>{const e=me(),[i,s]=z.useState(!1),[t,o]=z.useState(""),{clusterTrash:n,clusterGroups:u}=we(),w=n.length>0;z.useEffect(()=>{const g=C=>{C.key==="+"&&y()};return addEventListener("keydown",g),()=>{removeEventListener("keydown",g)}},[]);const y=async g=>{const C=await wr();try{await $r.validate({cluster:C}),o(C),s("add")}catch(v){g==null||g.target.blur(),be.error(`Invalid cluster, ${v.message}`)}},h=async()=>{if(!confirm("Are you sure you want to delete the selected Clusters?"))return;await n.forEach(C=>e(Cr(C._id))),e(kr());const g=[];await e(We()).unwrap().then(C=>{const{clusters:v}=C.result,A=Array.from(new Set(v.map(k=>k.group)));u.forEach(k=>{A.includes(k.clusterGroup)||g.push(k._id)})}),g.forEach(C=>e($t(C)))};return m.jsxs(mr,{$m:"15px 25px",$pos:"absolute",$side:"right",$high:"bottom",$gtc:"1fr 1fr",children:[w?m.jsx(ct,{onClick:h,$s:"m",$bs:kt,children:"Delete"}):m.jsx("span",{}),m.jsx(ct,{onClick:y,$s:"m",$bs:kt,children:"Add"}),i&&m.jsx(At,{onClick:()=>s(!1),children:m.jsx(Qt,{cluster:t,setIsModal:s})})]})},{s:Vt,m:vs}=xe.indents,ks=()=>m.jsxs(Vr,{$p:`2px ${vs} ${Vt} ${Vt}`,children:[m.jsx(ys,{}),m.jsx(gs,{})]});export{ks as default};
