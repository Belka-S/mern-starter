import{_ as Ut,r as Q,w as et,x as De,y as Bt,z as tt,A as It,C as Gt,D as qt,S as Wt,E as zt,Q as pe,n as $e,s as ne,t as ve,P as v,j as C,G as Ht,u as Ue,H as Kt,I as yt,J as Jt,K as Qt,R as se,N as Yt,O as Xt,T as Zt,U as er,e as tr,V as rr,W as sr,M as ir,F as nr}from"./index-6c507f80.js";import{t as or,c as ar}from"./clusterSchema-ec7c68e9.js";var lr=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],rt=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),n=String(t.getOptionValue(i)).toLowerCase(),u=String(t.getOptionLabel(i)).toLowerCase();return n===o||u===o},Le={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,i,t,o){return!(!s||i.some(function(n){return rt(s,n,o)})||t.some(function(n){return rt(s,n,o)}))},getNewOptionData:function(s,i){return{label:i,value:s,__isNew__:!0}}};function ur(e){var s=e.allowCreateWhileLoading,i=s===void 0?!1:s,t=e.createOptionPosition,o=t===void 0?"last":t,n=e.formatCreateLabel,u=n===void 0?Le.formatCreateLabel:n,y=e.isValidNewOption,g=y===void 0?Le.isValidNewOption:y,V=e.getNewOptionData,$=V===void 0?Le.getNewOptionData:V,A=e.onCreateOption,b=e.options,L=b===void 0?[]:b,_=e.onChange,R=Ut(e,lr),Y=R.getOptionValue,ee=Y===void 0?It:Y,x=R.getOptionLabel,U=x===void 0?Gt:x,j=R.inputValue,k=R.isLoading,te=R.isMulti,z=R.value,le=R.name,P=Q.useMemo(function(){return g(j,et(z),L,{getOptionValue:ee,getOptionLabel:U})?$(j,u(j)):void 0},[u,$,U,ee,j,g,L,z]),X=Q.useMemo(function(){return(i||!k)&&P?o==="first"?[P].concat(De(L)):[].concat(De(L),[P]):L},[i,o,k,P,L]),q=Q.useCallback(function(w,m){if(m.action!=="select-option")return _(w,m);var S=Array.isArray(w)?w:[w];if(S[S.length-1]===P){if(A)A(j);else{var N=$(j,j),I={action:"create-option",name:le,option:N};_(Bt(te,[].concat(De(et(z)),[N]),N),I)}return}_(w,m)},[$,j,te,le,P,A,_,z]);return tt(tt({},R),{},{options:X,onChange:q})}var cr=Q.forwardRef(function(e,s){var i=qt(e),t=ur(i);return Q.createElement(Wt,zt({ref:s},t))}),dr=cr;const fr=async()=>{if(!navigator.clipboard){pe.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&pe.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){pe.error(e.message)}},gt=$e`
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
`;$e`
  opacity: 0;
  pointer-events: none;
`;const{colors:K,shadows:hr,indents:yr,radiuses:st}=ve,pt=$e`
  margin: 0 ${yr.s};
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 10fr 20fr;
  grid-template-areas: '. title title';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${K.borderLight};
`,gr=ne.li`
  ${pt}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${st.xl};
    border-top-right-radius: ${st.xl};
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
`,pr=ne.li`
  ${pt}

  transition: box-shadow 250ms, border-color 250ms;

  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${K.border};
    box-shadow: ${hr.back};
    background-color: ${K.backgroundHoverd};
  }

  & svg {
    transition: stroke 250ms;
    stroke-width: 2.5px;
    color: ${({$hoverd:e})=>e?K.yellow:"transparent"};
    stroke: ${({$hoverd:e})=>e?K.yellow:K.border};
  }
  &:hover svg {
    stroke: ${({$hoverd:e})=>!e&&K.placeholder};
    stroke-width: ${({$hoverd:e})=>!e&&"2px"};
  }

  & a {
    font-size: 16px;
    color: ${K.placeholder};

    &::before {
      counter-increment: subsection;
      content: counter(section) '.' counter(subsection) '. ';
      font-size: 14px;
      font-weight: 700;
      color: ${K.black};
    }
  }
  &:hover a {
    color: ${K.hovered};
  }
`,vr=ne.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${gt}
  }
`,vt=({group:e})=>C.jsx(gr,{children:C.jsx("h2",{children:e})});vt.propTypes={group:v.string};function br(e){return Ht({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}const bt=({el:e})=>{const s=Ue(),{_id:i,cluster:t,title:o,favorite:n}=e,u=g=>{const V=g.replace("https://","").replace("http://","");return V.length<=50?V:V.substring(0,49).concat("...")},y=()=>s(Kt({_id:i,favorite:!n}));return C.jsxs(pr,{$hoverd:n,children:[C.jsxs(vr,{children:[C.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:y}),C.jsx(br,{size:"18px"})]}),C.jsx("h3",{children:o}),C.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:u(t)})]})};bt.propTypes={el:v.object,$hoverd:v.bool};const{colors:xr,indents:mr,radiuses:wr}=ve,Vr=ne.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${mr.xl};
  counter-reset: section 0;
  background-color: ${xr.white};
  border-radius: ${wr.xl};
`,_r=()=>{const e=Ue(),{allClusters:s,clusterFilter:i,clusterSelect:t}=yt();Q.useEffect(()=>{e(Jt()),e(Qt())},[e]);const o=[...s].filter(({cluster:y,title:g})=>y.toLowerCase().includes(i)||g.toLowerCase().includes(i)).sort((y,g)=>y.title.localeCompare(g.title)),u=Array.from(new Set(o.map(y=>y.group))).filter(y=>t?y===t&&y:y);return C.jsx(Vr,{children:u.map(y=>C.jsxs(Q.Fragment,{children:[C.jsx(vt,{group:y}),o.map(g=>g.group===y&&C.jsx(bt,{el:g},g._id))]},y))})};var be=e=>e.type==="checkbox",de=e=>e instanceof Date,B=e=>e==null;const xt=e=>typeof e=="object";var E=e=>!B(e)&&!Array.isArray(e)&&xt(e)&&!de(e),Ar=e=>E(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,Cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,$r=(e,s)=>e.has(Cr(s)),Or=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Be=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function re(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Be&&(e instanceof Blob||e instanceof FileList))&&(i||E(e)))if(s=i?[]:{},!i&&!Or(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=re(e[t]));else return e;return s}var xe=e=>Array.isArray(e)?e.filter(Boolean):[],T=e=>e===void 0,f=(e,s,i)=>{if(!s||!E(e))return i;const t=xe(s.split(/[,[\].]+?/)).reduce((o,n)=>B(o)?o:o[n],e);return T(t)||t===e?T(e[s])?i:e[s]:t};const it={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};se.createContext(null);var Sr=(e,s,i,t=!0)=>{const o={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(o,n,{get:()=>{const u=n;return s._proxyFormState[u]!==W.all&&(s._proxyFormState[u]=!t||W.all),i&&(i[u]=!0),e[u]}});return o},G=e=>E(e)&&!Object.keys(e).length,Fr=(e,s,i,t)=>{i(e);const{name:o,...n}=e;return G(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!t||W.all))},Te=e=>Array.isArray(e)?e:[e];function kr(e){const s=se.useRef(e);s.current=e,se.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var J=e=>typeof e=="string",Dr=(e,s,i,t,o)=>J(e)?(t&&s.watch.add(e),f(i,e,o)):Array.isArray(e)?e.map(n=>(t&&s.watch.add(n),f(i,n))):(t&&(s.watchAll=!0),i),Ie=e=>/^\w*$/.test(e),mt=e=>xe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function O(e,s,i){let t=-1;const o=Ie(s)?[s]:mt(s),n=o.length,u=n-1;for(;++t<n;){const y=o[t];let g=i;if(t!==u){const V=e[y];g=E(V)||Array.isArray(V)?V:isNaN(+o[t+1])?{}:[]}e[y]=g,e=e[y]}return e}var wt=(e,s,i,t,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:o||!0}}:{};const Re=(e,s,i)=>{for(const t of i||Object.keys(e)){const o=f(e,t);if(o){const{_f:n,...u}=o;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else E(u)&&Re(u,s)}}};var nt=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),ot=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Lr=(e,s,i)=>{const t=xe(f(e,i));return O(t,"root",s[i]),O(e,i,t),e},fe=e=>typeof e=="boolean",Ge=e=>e.type==="file",ie=e=>typeof e=="function",we=e=>{if(!Be)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},me=e=>J(e),qe=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const at={value:!1,isValid:!1},lt={value:!0,isValid:!0};var Vt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?lt:{value:e[0].value,isValid:!0}:lt:at}return at};const ut={isValid:!1,value:null};var _t=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ut):ut;function ct(e,s,i="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||fe(e)&&!e)return{type:i,message:me(e)?e:"",ref:s}}var ce=e=>E(e)&&!Ve(e)?e:{value:e,message:""},dt=async(e,s,i,t,o)=>{const{ref:n,refs:u,required:y,maxLength:g,minLength:V,min:$,max:A,pattern:b,validate:L,name:_,valueAsNumber:R,mount:Y,disabled:ee}=e._f,x=f(s,_);if(!Y||ee)return{};const U=u?u[0]:n,j=w=>{t&&U.reportValidity&&(U.setCustomValidity(fe(w)?"":w||""),U.reportValidity())},k={},te=qe(n),z=be(n),le=te||z,P=(R||Ge(n))&&T(n.value)&&T(x)||we(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,X=wt.bind(null,_,i,k),q=(w,m,S,N=Z.maxLength,I=Z.minLength)=>{const H=w?m:S;k[_]={type:w?N:I,message:H,ref:n,...X(w?N:I,H)}};if(o?!Array.isArray(x)||!x.length:y&&(!le&&(P||B(x))||fe(x)&&!x||z&&!Vt(u).isValid||te&&!_t(u).isValid)){const{value:w,message:m}=me(y)?{value:!!y,message:y}:ce(y);if(w&&(k[_]={type:Z.required,message:m,ref:U,...X(Z.required,m)},!i))return j(m),k}if(!P&&(!B($)||!B(A))){let w,m;const S=ce(A),N=ce($);if(!B(x)&&!isNaN(x)){const I=n.valueAsNumber||x&&+x;B(S.value)||(w=I>S.value),B(N.value)||(m=I<N.value)}else{const I=n.valueAsDate||new Date(x),H=ye=>new Date(new Date().toDateString()+" "+ye),oe=n.type=="time",he=n.type=="week";J(S.value)&&x&&(w=oe?H(x)>H(S.value):he?x>S.value:I>new Date(S.value)),J(N.value)&&x&&(m=oe?H(x)<H(N.value):he?x<N.value:I<new Date(N.value))}if((w||m)&&(q(!!w,S.message,N.message,Z.max,Z.min),!i))return j(k[_].message),k}if((g||V)&&!P&&(J(x)||o&&Array.isArray(x))){const w=ce(g),m=ce(V),S=!B(w.value)&&x.length>+w.value,N=!B(m.value)&&x.length<+m.value;if((S||N)&&(q(S,w.message,m.message),!i))return j(k[_].message),k}if(b&&!P&&J(x)){const{value:w,message:m}=ce(b);if(Ve(w)&&!x.match(w)&&(k[_]={type:Z.pattern,message:m,ref:n,...X(Z.pattern,m)},!i))return j(m),k}if(L){if(ie(L)){const w=await L(x,s),m=ct(w,U);if(m&&(k[_]={...m,...X(Z.validate,m.message)},!i))return j(m.message),k}else if(E(L)){let w={};for(const m in L){if(!G(w)&&!i)break;const S=ct(await L[m](x,s),U,m);S&&(w={...S,...X(m,S.message)},j(S.message),i&&(k[_]=w))}if(!G(w)&&(k[_]={ref:U,...w},!i))return k}}return j(!0),k};function Tr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=T(e)?t++:e[s[t++]];return e}function Er(e){for(const s in e)if(e.hasOwnProperty(s)&&!T(e[s]))return!1;return!0}function M(e,s){const i=Array.isArray(s)?s:Ie(s)?[s]:mt(s),t=i.length===1?e:Tr(e,i),o=i.length-1,n=i[o];return t&&delete t[n],o!==0&&(E(t)&&G(t)||Array.isArray(t)&&Er(t))&&M(e,i.slice(0,-1)),e}function Ee(){let e=[];return{get observers(){return e},next:o=>{for(const n of e)n.next&&n.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(n=>n!==o)}}),unsubscribe:()=>{e=[]}}}var _e=e=>B(e)||!xt(e);function ae(e,s){if(_e(e)||_e(s))return e===s;if(de(e)&&de(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const o of i){const n=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const u=s[o];if(de(n)&&de(u)||E(n)&&E(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var At=e=>e.type==="select-multiple",jr=e=>qe(e)||be(e),je=e=>we(e)&&e.isConnected,Ct=e=>{for(const s in e)if(ie(e[s]))return!0;return!1};function Ae(e,s={}){const i=Array.isArray(e);if(E(e)||i)for(const t in e)Array.isArray(e[t])||E(e[t])&&!Ct(e[t])?(s[t]=Array.isArray(e[t])?[]:{},Ae(e[t],s[t])):B(e[t])||(s[t]=!0);return s}function $t(e,s,i){const t=Array.isArray(e);if(E(e)||t)for(const o in e)Array.isArray(e[o])||E(e[o])&&!Ct(e[o])?T(s)||_e(i[o])?i[o]=Array.isArray(e[o])?Ae(e[o],[]):{...Ae(e[o])}:$t(e[o],B(s)?{}:s[o],i[o]):i[o]=!ae(e[o],s[o]);return i}var Ne=(e,s)=>$t(e,s,Ae(s)),Ot=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>T(e)?e:s?e===""?NaN:e&&+e:i&&J(e)?new Date(e):t?t(e):e;function Pe(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ge(s)?s.files:qe(s)?_t(e.refs).value:At(s)?[...s.selectedOptions].map(({value:i})=>i):be(s)?Vt(e.refs).value:Ot(T(s.value)?e.ref.value:s.value,e)}var Nr=(e,s,i,t)=>{const o={};for(const n of e){const u=f(s,n);u&&O(o,n,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:t}},ge=e=>T(e)?e:Ve(e)?e.source:E(e)?Ve(e.value)?e.value.source:e.value:e,Pr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ft(e,s,i){const t=f(e,i);if(t||Ie(i))return{error:t,name:i};const o=i.split(".");for(;o.length;){const n=o.join("."),u=f(s,n),y=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(y&&y.type)return{name:n,error:y};o.pop()}return{name:i}}var Mr=(e,s,i,t,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?t.isOnBlur:o.isOnBlur)?!e:(i?t.isOnChange:o.isOnChange)?e:!0,Rr=(e,s)=>!xe(f(e,s)).length&&M(e,s);const Ur={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function Br(e={},s){let i={...Ur,...e},t={submitCount:0,isDirty:!1,isLoading:ie(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},n=E(i.defaultValues)||E(i.values)?re(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:re(n),y={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,$=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Ee(),array:Ee(),state:Ee()},L=e.resetOptions&&e.resetOptions.keepDirtyValues,_=nt(i.mode),R=nt(i.reValidateMode),Y=i.criteriaMode===W.all,ee=r=>a=>{clearTimeout($),$=setTimeout(r,a)},x=async r=>{if(A.isValid||r){const a=i.resolver?G((await P()).errors):await q(o,!0);a!==t.isValid&&b.state.next({isValid:a})}},U=r=>A.isValidating&&b.state.next({isValidating:r}),j=(r,a=[],l,h,d=!0,c=!0)=>{if(h&&l){if(y.action=!0,c&&Array.isArray(f(o,r))){const p=l(f(o,r),h.argA,h.argB);d&&O(o,r,p)}if(c&&Array.isArray(f(t.errors,r))){const p=l(f(t.errors,r),h.argA,h.argB);d&&O(t.errors,r,p),Rr(t.errors,r)}if(A.touchedFields&&c&&Array.isArray(f(t.touchedFields,r))){const p=l(f(t.touchedFields,r),h.argA,h.argB);d&&O(t.touchedFields,r,p)}A.dirtyFields&&(t.dirtyFields=Ne(n,u)),b.state.next({name:r,isDirty:m(r,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else O(u,r,a)},k=(r,a)=>{O(t.errors,r,a),b.state.next({errors:t.errors})},te=(r,a,l,h)=>{const d=f(o,r);if(d){const c=f(u,r,T(l)?f(n,r):l);T(c)||h&&h.defaultChecked||a?O(u,r,a?c:Pe(d._f)):I(r,c),y.mount&&x()}},z=(r,a,l,h,d)=>{let c=!1,p=!1;const F={name:r};if(!l||h){A.isDirty&&(p=t.isDirty,t.isDirty=F.isDirty=m(),c=p!==F.isDirty);const D=ae(f(n,r),a);p=f(t.dirtyFields,r),D?M(t.dirtyFields,r):O(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,c=c||A.dirtyFields&&p!==!D}if(l){const D=f(t.touchedFields,r);D||(O(t.touchedFields,r,l),F.touchedFields=t.touchedFields,c=c||A.touchedFields&&D!==l)}return c&&d&&b.state.next(F),c?F:{}},le=(r,a,l,h)=>{const d=f(t.errors,r),c=A.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&l?(V=ee(()=>k(r,l)),V(e.delayError)):(clearTimeout($),V=null,l?O(t.errors,r,l):M(t.errors,r)),(l?!ae(d,l):d)||!G(h)||c){const p={...h,...c&&fe(a)?{isValid:a}:{},errors:t.errors,name:r};t={...t,...p},b.state.next(p)}U(!1)},P=async r=>i.resolver(u,i.context,Nr(r||g.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),X=async r=>{const{errors:a}=await P();if(r)for(const l of r){const h=f(a,l);h?O(t.errors,l,h):M(t.errors,l)}else t.errors=a;return a},q=async(r,a,l={valid:!0})=>{for(const h in r){const d=r[h];if(d){const{_f:c,...p}=d;if(c){const F=g.array.has(c.name),D=await dt(d,u,Y,i.shouldUseNativeValidation&&!a,F);if(D[c.name]&&(l.valid=!1,a))break;!a&&(f(D,c.name)?F?Lr(t.errors,D,c.name):O(t.errors,c.name,D[c.name]):M(t.errors,c.name))}p&&await q(p,a,l)}}return l.valid},w=()=>{for(const r of g.unMount){const a=f(o,r);a&&(a._f.refs?a._f.refs.every(l=>!je(l)):!je(a._f.ref))&&Oe(r)}g.unMount=new Set},m=(r,a)=>(r&&a&&O(u,r,a),!ae(We(),n)),S=(r,a,l)=>Dr(r,g,{...y.mount?u:T(a)?n:J(r)?{[r]:a}:a},l,a),N=r=>xe(f(y.mount?u:n,r,e.shouldUnregister?f(n,r,[]):[])),I=(r,a,l={})=>{const h=f(o,r);let d=a;if(h){const c=h._f;c&&(!c.disabled&&O(u,r,Ot(a,c)),d=we(c.ref)&&B(a)?"":a,At(c.ref)?[...c.ref.options].forEach(p=>p.selected=d.includes(p.value)):c.refs?be(c.ref)?c.refs.length>1?c.refs.forEach(p=>(!p.defaultChecked||!p.disabled)&&(p.checked=Array.isArray(d)?!!d.find(F=>F===p.value):d===p.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(p=>p.checked=p.value===d):Ge(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||b.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&z(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ye(r)},H=(r,a,l)=>{for(const h in a){const d=a[h],c=`${r}.${h}`,p=f(o,c);(g.array.has(r)||!_e(d)||p&&!p._f)&&!de(d)?H(c,d,l):I(c,d,l)}},oe=(r,a,l={})=>{const h=f(o,r),d=g.array.has(r),c=re(a);O(u,r,c),d?(b.array.next({name:r,values:{...u}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&b.state.next({name:r,dirtyFields:Ne(n,u),isDirty:m(r,c)})):h&&!h._f&&!B(c)?H(r,c,l):I(r,c,l),ot(r,g)&&b.state.next({...t}),b.values.next({name:r,values:{...u}}),!y.mount&&s()},he=async r=>{const a=r.target;let l=a.name,h=!0;const d=f(o,l),c=()=>a.type?Pe(d._f):Ar(r);if(d){let p,F;const D=c(),ue=r.type===it.BLUR||r.type===it.FOCUS_OUT,Pt=!Pr(d._f)&&!i.resolver&&!f(t.errors,l)&&!d._f.deps||Mr(ue,f(t.touchedFields,l),t.isSubmitted,R,_),Fe=ot(l,g,ue);O(u,l,D),ue?(d._f.onBlur&&d._f.onBlur(r),V&&V(0)):d._f.onChange&&d._f.onChange(r);const ke=z(l,D,ue,!1),Mt=!G(ke)||Fe;if(!ue&&b.values.next({name:l,type:r.type,values:{...u}}),Pt)return A.isValid&&x(),Mt&&b.state.next({name:l,...Fe?{}:ke});if(!ue&&Fe&&b.state.next({...t}),U(!0),i.resolver){const{errors:Xe}=await P([l]),Rt=ft(t.errors,o,l),Ze=ft(Xe,o,Rt.name||l);p=Ze.error,l=Ze.name,F=G(Xe)}else p=(await dt(d,u,Y,i.shouldUseNativeValidation))[l],h=isNaN(D)||D===f(u,l,D),h&&(p?F=!1:A.isValid&&(F=await q(o,!0)));h&&(d._f.deps&&ye(d._f.deps),le(l,F,p,ke))}},ye=async(r,a={})=>{let l,h;const d=Te(r);if(U(!0),i.resolver){const c=await X(T(r)?r:d);l=G(c),h=r?!d.some(p=>f(c,p)):l}else r?(h=(await Promise.all(d.map(async c=>{const p=f(o,c);return await q(p&&p._f?{[c]:p}:p)}))).every(Boolean),!(!h&&!t.isValid)&&x()):h=l=await q(o);return b.state.next({...!J(r)||A.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!h&&Re(o,c=>c&&f(t.errors,c),r?d:g.mount),h},We=r=>{const a={...n,...y.mount?u:{}};return T(r)?a:J(r)?f(a,r):r.map(l=>f(a,l))},ze=(r,a)=>({invalid:!!f((a||t).errors,r),isDirty:!!f((a||t).dirtyFields,r),isTouched:!!f((a||t).touchedFields,r),error:f((a||t).errors,r)}),Et=r=>{r&&Te(r).forEach(a=>M(t.errors,a)),b.state.next({errors:r?t.errors:{}})},He=(r,a,l)=>{const h=(f(o,r,{_f:{}})._f||{}).ref;O(t.errors,r,{...a,ref:h}),b.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},jt=(r,a)=>ie(r)?b.values.subscribe({next:l=>r(S(void 0,a),l)}):S(r,a,!0),Oe=(r,a={})=>{for(const l of r?Te(r):g.mount)g.mount.delete(l),g.array.delete(l),a.keepValue||(M(o,l),M(u,l)),!a.keepError&&M(t.errors,l),!a.keepDirty&&M(t.dirtyFields,l),!a.keepTouched&&M(t.touchedFields,l),!i.shouldUnregister&&!a.keepDefaultValue&&M(n,l);b.values.next({values:{...u}}),b.state.next({...t,...a.keepDirty?{isDirty:m()}:{}}),!a.keepIsValid&&x()},Se=(r,a={})=>{let l=f(o,r);const h=fe(a.disabled);return O(o,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...a}}),g.mount.add(r),l?h&&O(u,r,a.disabled?void 0:f(u,r,Pe(l._f))):te(r,!0,a.value),{...h?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:ge(a.min),max:ge(a.max),minLength:ge(a.minLength),maxLength:ge(a.maxLength),pattern:ge(a.pattern)}:{},name:r,onChange:he,onBlur:he,ref:d=>{if(d){Se(r,a),l=f(o,r);const c=T(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,p=jr(c),F=l._f.refs||[];if(p?F.find(D=>D===c):c===l._f.ref)return;O(o,r,{_f:{...l._f,...p?{refs:[...F.filter(je),c,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),te(r,!1,void 0,c)}else l=f(o,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!($r(g.array,r)&&y.action)&&g.unMount.add(r)}}},Ke=()=>i.shouldFocusError&&Re(o,r=>r&&f(t.errors,r),g.mount),Je=(r,a)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=re(u);if(b.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await P();t.errors=d,h=c}else await q(o);M(t.errors,"root"),G(t.errors)?(b.state.next({errors:{}}),await r(h,l)):(a&&await a({...t.errors},l),Ke(),setTimeout(Ke)),b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:G(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Nt=(r,a={})=>{f(o,r)&&(T(a.defaultValue)?oe(r,f(n,r)):(oe(r,a.defaultValue),O(n,r,a.defaultValue)),a.keepTouched||M(t.touchedFields,r),a.keepDirty||(M(t.dirtyFields,r),t.isDirty=a.defaultValue?m(r,f(n,r)):m()),a.keepError||(M(t.errors,r),A.isValid&&x()),b.state.next({...t}))},Qe=(r,a={})=>{const l=r||n,h=re(l),d=r&&!G(r)?h:n;if(a.keepDefaultValues||(n=l),!a.keepValues){if(a.keepDirtyValues||L)for(const c of g.mount)f(t.dirtyFields,c)?O(d,c,f(u,c)):oe(c,f(d,c));else{if(Be&&T(r))for(const c of g.mount){const p=f(o,c);if(p&&p._f){const F=Array.isArray(p._f.refs)?p._f.refs[0]:p._f.ref;if(we(F)){const D=F.closest("form");if(D){D.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?re(n):{}:re(d),b.array.next({values:{...d}}),b.values.next({values:{...d}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!y.mount&&s(),y.mount=!A.isValid||!!a.keepIsValid,y.watch=!!e.shouldUnregister,b.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(r,n)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&r?Ne(n,r):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ye=(r,a)=>Qe(ie(r)?r(u):r,a);return{control:{register:Se,unregister:Oe,getFieldState:ze,handleSubmit:Je,setError:He,_executeSchema:P,_getWatch:S,_getDirty:m,_updateValid:x,_removeUnmounted:w,_updateFieldArray:j,_getFieldArray:N,_reset:Qe,_resetDefaultValues:()=>ie(i.defaultValues)&&i.defaultValues().then(r=>{Ye(r,i.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:b,_proxyFormState:A,get _fields(){return o},get _formValues(){return u},get _state(){return y},set _state(r){y=r},get _defaultValues(){return n},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ye,register:Se,handleSubmit:Je,watch:jt,setValue:oe,getValues:We,reset:Ye,resetField:Nt,clearErrors:Et,unregister:Oe,setError:He,setFocus:(r,a={})=>{const l=f(o,r),h=l&&l._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),a.shouldSelect&&d.select())}},getFieldState:ze}}function Ir(e={}){const s=se.useRef(),i=se.useRef(),[t,o]=se.useState({isDirty:!1,isValidating:!1,isLoading:ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ie(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Br(e,()=>o(u=>({...u}))),formState:t});const n=s.current.control;return n._options=e,kr({subject:n._subjects.state,next:u=>{Fr(u,n._proxyFormState,n._updateFormState,!0)&&o({...n._formState})}}),se.useEffect(()=>{e.values&&!ae(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),se.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=Sr(t,n),s.current}var ht=function(e,s,i){if(e&&"reportValidity"in e){var t=f(i,s);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},St=function(e,s){var i=function(o){var n=s.fields[o];n&&n.ref&&"reportValidity"in n.ref?ht(n.ref,o,e):n.refs&&n.refs.forEach(function(u){return ht(u,o,e)})};for(var t in s.fields)i(t)},Gr=function(e,s){s.shouldUseNativeValidation&&St(e,s);var i={};for(var t in e){var o=f(s.fields,t);O(i,t,Object.assign(e[t]||{},{ref:o&&o.ref}))}return i};function qr(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(t,o,n){try{return Promise.resolve(function(u,y){try{var g=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:o}))).then(function(V){return n.shouldUseNativeValidation&&St({},n),{values:i.raw?t:V,errors:{}}}))}catch(V){return y(V)}return g&&g.then?g.then(void 0,y):g}(0,function(u){if(!u.inner)throw u;return{values:{},errors:Gr((y=u,g=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(y.inner||[]).reduce(function(V,$){if(V[$.path]||(V[$.path]={message:$.message,type:$.type}),g){var A=V[$.path].types,b=A&&A[$.type];V[$.path]=wt($.path,g,V,$.type,b?[].concat(b,$.message):$.message)}return V},{})),n)};var y,g}))}catch(u){return Promise.reject(u)}}}const Ft=({$w:e,$h:s,$s:i,onClick:t,type:o="button",disabled:n,children:u})=>C.jsx(Yt,{$w:e,$h:s,$s:i,onClick:t,type:o,disabled:n,children:u});Ft.propTypes={$w:v.string,$h:v.string,$s:v.string,onClick:v.func,type:v.string,disabled:v.oneOfType([v.bool,v.number]),children:v.oneOfType([v.string,v.node,v.oneOf(["img","png","svg"])])};const kt=({styles:e,$obh:s,$sobh:i,$ol:t,$b:o,$bh:n,$bf:u,$o:y,$oh:g,$ob:V,name:$,value:A,defaultValue:b,placeholder:L="Create / Select...",options:_,onChange:R,isClearable:Y,onCreateOption:ee,isLoading:x,isDisabled:U})=>C.jsx(dr,{theme:Xt({$obh:s,$sobh:i}),styles:{...Zt({$ol:t,$b:o,$bh:n,$bf:u,$o:y,$oh:g,$ob:V,$obh:s}),...e},name:$,value:A,defaultValue:b,placeholder:L,options:_,onChange:R,isClearable:Y,onCreateOption:ee,isLoading:x,isDisabled:U});kt.propTypes={styles:v.arrayOf(v.object),$obh:v.string,$sobh:v.string,$ol:v.string,$b:v.string,$bh:v.string,$bf:v.string,$o:v.string,$oh:v.string,$ob:v.string,options:v.arrayOf(v.object),name:v.string,value:v.oneOfType([v.object,v.string]),defaultValue:v.oneOfType([v.object,v.string]),placeholder:v.string,onChange:v.func,isClearable:v.oneOfType([v.object,v.string]),onCreateOption:v.func,isLoading:v.bool,isDisabled:v.bool};const{colors:Ce,radiuses:Dt,shadows:Wr}=ve,zr=ne.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Dt.m};
  background-color: ${Ce.white};
  box-shadow: ${Wr.auth};
`,Me=ne.label`
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
    color: ${Ce.error};
  }
`,Lt=$e`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${Ce.border};
  border-radius: ${Dt.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${Ce.hovered};
  }
`,Hr=ne.input`
  ${Lt}
  ${gt}
`,Kr=ne.input`
  ${Lt}
`,Tt=({cluster:e,setIsModal:s})=>{var L;const i=Ue(),[t,o]=Q.useState(""),{clusterGroups:n}=yt(),{register:u,watch:y,handleSubmit:g,formState:{errors:V}}=Ir({mode:"onBlur",resolver:qr(or),defaultValues:{cluster:e}}),$=_=>{i(er({..._,group:t.value})),s(!1)},A=n.map(_=>({value:_.clusterGroup,label:_.clusterGroup})).sort((_,R)=>_.value.localeCompare(R.value)),b=_=>{y("title")?(i(tr({clusterGroup:_})),o({value:_,label:_})):pe.error("Title is required")};return C.jsxs(zr,{onSubmit:g($),children:[C.jsxs(Me,{children:[e.length<=39?e:e.substring(0,39)+"...",C.jsx(Hr,{...u("cluster")})]}),C.jsxs(Me,{children:["Title ",C.jsxs("span",{children:[" ",(L=V.title)==null?void 0:L.message]}),C.jsx(Kr,{...u("title")})]}),C.jsxs(Me,{children:["Group",C.jsx(kt,{value:t,options:A,onChange:_=>o(_||""),onCreateOption:b,isClearable:t})]}),C.jsx(Ft,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Tt.propTypes={cluster:v.string.isRequired,setIsModal:v.func.isRequired};const{button:Jr}=ve.shadows,Qr=()=>{const[e,s]=Q.useState(!1),[i,t]=Q.useState(""),o=async n=>{const u=await fr();try{await ar.validate({cluster:u}),t(u),s("add")}catch(y){n.target.blur(),pe.error(`Invalid cluster, ${y.message}`)}};return C.jsxs(rr,{$m:"10px 30px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr",children:[C.jsx(sr,{name:"add",onClick:o,$s:"m",$bs:Jr,children:"Add"}),e&&C.jsx(ir,{onClick:()=>s(!1),children:C.jsx(Tt,{cluster:i,setIsModal:s})})]})},rs=()=>{const{s:e,m:s}=ve.indents;return C.jsxs(nr,{$p:`2px ${s} ${e}`,children:[C.jsx(_r,{}),C.jsx(Qr,{})]})};export{rs as default};
