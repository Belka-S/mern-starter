import{e as ce,Q as ge,s as X,n as we,t as I,u as lt,r as Re,f as Ct,j as b,R as Y,P as R,A as Et,i as Tt,F as jt,B as Je}from"./index-b528fecf.js";import{C as Ot}from"./ControlBar-576ef330.js";import{c as Lt,M as Rt}from"./Modal-423851a9.js";const $t=e=>e.clusters.items,Mt=e=>e.clusters.activeItem,Ut=e=>e.clusters.filter,Bt=e=>e.clusters.isLoading,Nt=e=>e.clusters.error,ut=()=>{const e=ce($t),i=ce(Mt),s=ce(Ut),t=ce(Nt),a=ce(Bt);return{allClusters:e,activeCluster:i,filterValue:s,error:t,isLoading:a}},Pt=async()=>{if(!navigator.clipboard){ge.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ge.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ge.error(e.message)}},It=X.ol`
  counter-reset: section 0;
`,ct=we`
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 6fr 10fr 1fr;
  align-items: baseline;

  & h2 {
    font-size: 18px;
  }

  & span {
    justify-self: center;
    font-weight: 700;
  }
`,qt=X.li`
  ${ct}

  justify-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${I.colors.accent};
`,Ht=X.li`
  ${ct}

  & h2::before {
    counter-increment: section;
    content: counter(section) '. ';
  }
`,Wt=()=>{const e=lt(),{allClusters:i}=ut(),s=t=>t.length<=50?t:t.substring(0,49).concat("...");return Re.useEffect(()=>{e(Ct())},[e]),b.jsxs(It,{reversed:!0,children:[b.jsxs(qt,{children:[b.jsx("span",{children:"Title"}),b.jsx("span",{children:"Cluster"}),b.jsx("span",{children:"Result"})]}),i.map(t=>b.jsxs(Ht,{children:[b.jsx("h2",{children:t.title}),b.jsx("a",{href:t.cluster,target:"_blank",rel:"noopener noreferrer",children:s(t.cluster)}),t.checked&&b.jsx("span",{children:"Checked"})]},t._id))]})};var de=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const ft=e=>typeof e=="object";var E=e=>!O(e)&&!Array.isArray(e)&&ft(e)&&!ie(e),zt=e=>E(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,Kt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Gt=(e,i)=>e.has(Kt(i)),Qt=e=>{const i=e.constructor&&e.constructor.prototype;return E(i)&&i.hasOwnProperty("isPrototypeOf")},Me=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Me&&(e instanceof Blob||e instanceof FileList))&&(s||E(e)))if(i=s?[]:{},!s&&!Qt(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=Q(e[t]));else return e;return i}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],C=e=>e===void 0,d=(e,i,s)=>{if(!i||!E(e))return s;const t=ye(i.split(/[,[\].]+?/)).reduce((a,o)=>O(a)?a:a[o],e);return C(t)||t===e?C(e[i])?s:e[i]:t};const Xe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var Yt=(e,i,s,t=!0)=>{const a={defaultValues:i._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const c=o;return i._proxyFormState[c]!==P.all&&(i._proxyFormState[c]=!t||P.all),s&&(s[c]=!0),e[c]}});return a},B=e=>E(e)&&!Object.keys(e).length,Jt=(e,i,s,t)=>{s(e);const{name:a,...o}=e;return B(o)||Object.keys(o).length>=Object.keys(i).length||Object.keys(o).find(c=>i[c]===(!t||P.all))},Ce=e=>Array.isArray(e)?e:[e];function Xt(e){const i=Y.useRef(e);i.current=e,Y.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",Zt=(e,i,s,t,a)=>W(e)?(t&&i.watch.add(e),d(s,e,a)):Array.isArray(e)?e.map(o=>(t&&i.watch.add(o),d(s,o))):(t&&(i.watchAll=!0),s),Ue=e=>/^\w*$/.test(e),dt=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function A(e,i,s){let t=-1;const a=Ue(i)?[i]:dt(i),o=a.length,c=o-1;for(;++t<o;){const x=a[t];let g=s;if(t!==c){const V=e[x];g=E(V)||Array.isArray(V)?V:isNaN(+a[t+1])?{}:[]}e[x]=g,e=e[x]}return e}var yt=(e,i,s,t,a)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:a||!0}}:{};const $e=(e,i,s)=>{for(const t of s||Object.keys(e)){const a=d(e,t);if(a){const{_f:o,...c}=a;if(o&&i(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else E(c)&&$e(c,i)}}};var Ze=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),et=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),er=(e,i,s)=>{const t=ye(d(e,s));return A(t,"root",i[s]),A(e,s,t),e},ne=e=>typeof e=="boolean",Be=e=>e.type==="file",J=e=>typeof e=="function",pe=e=>{if(!Me)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ve=e=>W(e),Ne=e=>e.type==="radio",xe=e=>e instanceof RegExp;const tt={value:!1,isValid:!1},rt={value:!0,isValid:!0};var ht=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!C(e[0].attributes.value)?C(e[0].value)||e[0].value===""?rt:{value:e[0].value,isValid:!0}:rt:tt}return tt};const st={isValid:!1,value:null};var gt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,st):st;function it(e,i,s="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||ne(e)&&!e)return{type:s,message:ve(e)?e:"",ref:i}}var se=e=>E(e)&&!xe(e)?e:{value:e,message:""},nt=async(e,i,s,t,a)=>{const{ref:o,refs:c,required:x,maxLength:g,minLength:V,min:S,max:_,pattern:v,validate:$,name:M,valueAsNumber:Ve,mount:he,disabled:_e}=e._f,p=d(i,M);if(!he||_e)return{};const N=c?c[0]:o,z=w=>{t&&N.reportValidity&&(N.setCustomValidity(ne(w)?"":w||""),N.reportValidity())},T={},oe=Ne(o),ae=de(o),Ae=oe||ae,q=(Ve||Be(o))&&C(o.value)&&C(p)||pe(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,Z=yt.bind(null,M,s,T),K=(w,m,k,L=G.maxLength,U=G.minLength)=>{const H=w?m:k;T[M]={type:w?L:U,message:H,ref:o,...Z(w?L:U,H)}};if(a?!Array.isArray(p)||!p.length:x&&(!Ae&&(q||O(p))||ne(p)&&!p||ae&&!ht(c).isValid||oe&&!gt(c).isValid)){const{value:w,message:m}=ve(x)?{value:!!x,message:x}:se(x);if(w&&(T[M]={type:G.required,message:m,ref:N,...Z(G.required,m)},!s))return z(m),T}if(!q&&(!O(S)||!O(_))){let w,m;const k=se(_),L=se(S);if(!O(p)&&!isNaN(p)){const U=o.valueAsNumber||p&&+p;O(k.value)||(w=U>k.value),O(L.value)||(m=U<L.value)}else{const U=o.valueAsDate||new Date(p),H=ue=>new Date(new Date().toDateString()+" "+ue),ee=o.type=="time",le=o.type=="week";W(k.value)&&p&&(w=ee?H(p)>H(k.value):le?p>k.value:U>new Date(k.value)),W(L.value)&&p&&(m=ee?H(p)<H(L.value):le?p<L.value:U<new Date(L.value))}if((w||m)&&(K(!!w,k.message,L.message,G.max,G.min),!s))return z(T[M].message),T}if((g||V)&&!q&&(W(p)||a&&Array.isArray(p))){const w=se(g),m=se(V),k=!O(w.value)&&p.length>+w.value,L=!O(m.value)&&p.length<+m.value;if((k||L)&&(K(k,w.message,m.message),!s))return z(T[M].message),T}if(v&&!q&&W(p)){const{value:w,message:m}=se(v);if(xe(w)&&!p.match(w)&&(T[M]={type:G.pattern,message:m,ref:o,...Z(G.pattern,m)},!s))return z(m),T}if($){if(J($)){const w=await $(p,i),m=it(w,N);if(m&&(T[M]={...m,...Z(G.validate,m.message)},!s))return z(m.message),T}else if(E($)){let w={};for(const m in $){if(!B(w)&&!s)break;const k=it(await $[m](p,i),N,m);k&&(w={...k,...Z(m,k.message)},z(k.message),s&&(T[M]=w))}if(!B(w)&&(T[M]={ref:N,...w},!s))return T}}return z(!0),T};function tr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=C(e)?t++:e[i[t++]];return e}function rr(e){for(const i in e)if(e.hasOwnProperty(i)&&!C(e[i]))return!1;return!0}function j(e,i){const s=Array.isArray(i)?i:Ue(i)?[i]:dt(i),t=s.length===1?e:tr(e,s),a=s.length-1,o=s[a];return t&&delete t[o],a!==0&&(E(t)&&B(t)||Array.isArray(t)&&rr(t))&&j(e,s.slice(0,-1)),e}function Ee(){let e=[];return{get observers(){return e},next:a=>{for(const o of e)o.next&&o.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(o=>o!==a)}}),unsubscribe:()=>{e=[]}}}var me=e=>O(e)||!ft(e);function te(e,i){if(me(e)||me(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const a of s){const o=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const c=i[a];if(ie(o)&&ie(c)||E(o)&&E(c)||Array.isArray(o)&&Array.isArray(c)?!te(o,c):o!==c)return!1}}return!0}var vt=e=>e.type==="select-multiple",sr=e=>Ne(e)||de(e),Te=e=>pe(e)&&e.isConnected,pt=e=>{for(const i in e)if(J(e[i]))return!0;return!1};function be(e,i={}){const s=Array.isArray(e);if(E(e)||s)for(const t in e)Array.isArray(e[t])||E(e[t])&&!pt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},be(e[t],i[t])):O(e[t])||(i[t]=!0);return i}function xt(e,i,s){const t=Array.isArray(e);if(E(e)||t)for(const a in e)Array.isArray(e[a])||E(e[a])&&!pt(e[a])?C(i)||me(s[a])?s[a]=Array.isArray(e[a])?be(e[a],[]):{...be(e[a])}:xt(e[a],O(i)?{}:i[a],s[a]):s[a]=!te(e[a],i[a]);return s}var je=(e,i)=>xt(e,i,be(i)),mt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>C(e)?e:i?e===""?NaN:e&&+e:s&&W(e)?new Date(e):t?t(e):e;function Oe(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Be(i)?i.files:Ne(i)?gt(e.refs).value:vt(i)?[...i.selectedOptions].map(({value:s})=>s):de(i)?ht(e.refs).value:mt(C(i.value)?e.ref.value:i.value,e)}var ir=(e,i,s,t)=>{const a={};for(const o of e){const c=d(i,o);c&&A(a,o,c._f)}return{criteriaMode:s,names:[...e],fields:a,shouldUseNativeValidation:t}},fe=e=>C(e)?e:xe(e)?e.source:E(e)?xe(e.value)?e.value.source:e.value:e,nr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ot(e,i,s){const t=d(e,s);if(t||Ue(s))return{error:t,name:s};const a=s.split(".");for(;a.length;){const o=a.join("."),c=d(i,o),x=d(e,o);if(c&&!Array.isArray(c)&&s!==o)return{name:s};if(x&&x.type)return{name:o,error:x};a.pop()}return{name:s}}var or=(e,i,s,t,a)=>a.isOnAll?!1:!s&&a.isOnTouch?!(i||e):(s?t.isOnBlur:a.isOnBlur)?!e:(s?t.isOnChange:a.isOnChange)?e:!0,ar=(e,i)=>!ye(d(e,i)).length&&j(e,i);const lr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function ur(e={},i){let s={...lr,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},o=E(s.defaultValues)||E(s.values)?Q(s.defaultValues||s.values)||{}:{},c=s.shouldUnregister?{}:Q(o),x={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,S=0;const _={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ee(),array:Ee(),state:Ee()},$=e.resetOptions&&e.resetOptions.keepDirtyValues,M=Ze(s.mode),Ve=Ze(s.reValidateMode),he=s.criteriaMode===P.all,_e=r=>n=>{clearTimeout(S),S=setTimeout(r,n)},p=async r=>{if(_.isValid||r){const n=s.resolver?B((await q()).errors):await K(a,!0);n!==t.isValid&&v.state.next({isValid:n})}},N=r=>_.isValidating&&v.state.next({isValidating:r}),z=(r,n=[],l,y,f=!0,u=!0)=>{if(y&&l){if(x.action=!0,u&&Array.isArray(d(a,r))){const h=l(d(a,r),y.argA,y.argB);f&&A(a,r,h)}if(u&&Array.isArray(d(t.errors,r))){const h=l(d(t.errors,r),y.argA,y.argB);f&&A(t.errors,r,h),ar(t.errors,r)}if(_.touchedFields&&u&&Array.isArray(d(t.touchedFields,r))){const h=l(d(t.touchedFields,r),y.argA,y.argB);f&&A(t.touchedFields,r,h)}_.dirtyFields&&(t.dirtyFields=je(o,c)),v.state.next({name:r,isDirty:m(r,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(c,r,n)},T=(r,n)=>{A(t.errors,r,n),v.state.next({errors:t.errors})},oe=(r,n,l,y)=>{const f=d(a,r);if(f){const u=d(c,r,C(l)?d(o,r):l);C(u)||y&&y.defaultChecked||n?A(c,r,n?u:Oe(f._f)):U(r,u),x.mount&&p()}},ae=(r,n,l,y,f)=>{let u=!1,h=!1;const F={name:r};if(!l||y){_.isDirty&&(h=t.isDirty,t.isDirty=F.isDirty=m(),u=h!==F.isDirty);const D=te(d(o,r),n);h=d(t.dirtyFields,r),D?j(t.dirtyFields,r):A(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,u=u||_.dirtyFields&&h!==!D}if(l){const D=d(t.touchedFields,r);D||(A(t.touchedFields,r,l),F.touchedFields=t.touchedFields,u=u||_.touchedFields&&D!==l)}return u&&f&&v.state.next(F),u?F:{}},Ae=(r,n,l,y)=>{const f=d(t.errors,r),u=_.isValid&&ne(n)&&t.isValid!==n;if(e.delayError&&l?(V=_e(()=>T(r,l)),V(e.delayError)):(clearTimeout(S),V=null,l?A(t.errors,r,l):j(t.errors,r)),(l?!te(f,l):f)||!B(y)||u){const h={...y,...u&&ne(n)?{isValid:n}:{},errors:t.errors,name:r};t={...t,...h},v.state.next(h)}N(!1)},q=async r=>s.resolver(c,s.context,ir(r||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),Z=async r=>{const{errors:n}=await q();if(r)for(const l of r){const y=d(n,l);y?A(t.errors,l,y):j(t.errors,l)}else t.errors=n;return n},K=async(r,n,l={valid:!0})=>{for(const y in r){const f=r[y];if(f){const{_f:u,...h}=f;if(u){const F=g.array.has(u.name),D=await nt(f,c,he,s.shouldUseNativeValidation&&!n,F);if(D[u.name]&&(l.valid=!1,n))break;!n&&(d(D,u.name)?F?er(t.errors,D,u.name):A(t.errors,u.name,D[u.name]):j(t.errors,u.name))}h&&await K(h,n,l)}}return l.valid},w=()=>{for(const r of g.unMount){const n=d(a,r);n&&(n._f.refs?n._f.refs.every(l=>!Te(l)):!Te(n._f.ref))&&Fe(r)}g.unMount=new Set},m=(r,n)=>(r&&n&&A(c,r,n),!te(Ie(),o)),k=(r,n,l)=>Zt(r,g,{...x.mount?c:C(n)?o:W(r)?{[r]:n}:n},l,n),L=r=>ye(d(x.mount?c:o,r,e.shouldUnregister?d(o,r,[]):[])),U=(r,n,l={})=>{const y=d(a,r);let f=n;if(y){const u=y._f;u&&(!u.disabled&&A(c,r,mt(n,u)),f=pe(u.ref)&&O(n)?"":n,vt(u.ref)?[...u.ref.options].forEach(h=>h.selected=f.includes(h.value)):u.refs?de(u.ref)?u.refs.length>1?u.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(F=>F===h.value):f===h.value)):u.refs[0]&&(u.refs[0].checked=!!f):u.refs.forEach(h=>h.checked=h.value===f):Be(u.ref)?u.ref.value="":(u.ref.value=f,u.ref.type||v.values.next({name:r,values:{...c}})))}(l.shouldDirty||l.shouldTouch)&&ae(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(r)},H=(r,n,l)=>{for(const y in n){const f=n[y],u=`${r}.${y}`,h=d(a,u);(g.array.has(r)||!me(f)||h&&!h._f)&&!ie(f)?H(u,f,l):U(u,f,l)}},ee=(r,n,l={})=>{const y=d(a,r),f=g.array.has(r),u=Q(n);A(c,r,u),f?(v.array.next({name:r,values:{...c}}),(_.isDirty||_.dirtyFields)&&l.shouldDirty&&v.state.next({name:r,dirtyFields:je(o,c),isDirty:m(r,u)})):y&&!y._f&&!O(u)?H(r,u,l):U(r,u,l),et(r,g)&&v.state.next({...t}),v.values.next({name:r,values:{...c}}),!x.mount&&i()},le=async r=>{const n=r.target;let l=n.name,y=!0;const f=d(a,l),u=()=>n.type?Oe(f._f):zt(r);if(f){let h,F;const D=u(),re=r.type===Xe.BLUR||r.type===Xe.FOCUS_OUT,St=!nr(f._f)&&!s.resolver&&!d(t.errors,l)&&!f._f.deps||or(re,d(t.touchedFields,l),t.isSubmitted,Ve,M),ke=et(l,g,re);A(c,l,D),re?(f._f.onBlur&&f._f.onBlur(r),V&&V(0)):f._f.onChange&&f._f.onChange(r);const De=ae(l,D,re,!1),kt=!B(De)||ke;if(!re&&v.values.next({name:l,type:r.type,values:{...c}}),St)return _.isValid&&p(),kt&&v.state.next({name:l,...ke?{}:De});if(!re&&ke&&v.state.next({...t}),N(!0),s.resolver){const{errors:Qe}=await q([l]),Dt=ot(t.errors,a,l),Ye=ot(Qe,a,Dt.name||l);h=Ye.error,l=Ye.name,F=B(Qe)}else h=(await nt(f,c,he,s.shouldUseNativeValidation))[l],y=isNaN(D)||D===d(c,l,D),y&&(h?F=!1:_.isValid&&(F=await K(a,!0)));y&&(f._f.deps&&ue(f._f.deps),Ae(l,F,h,De))}},ue=async(r,n={})=>{let l,y;const f=Ce(r);if(N(!0),s.resolver){const u=await Z(C(r)?r:f);l=B(u),y=r?!f.some(h=>d(u,h)):l}else r?(y=(await Promise.all(f.map(async u=>{const h=d(a,u);return await K(h&&h._f?{[u]:h}:h)}))).every(Boolean),!(!y&&!t.isValid)&&p()):y=l=await K(a);return v.state.next({...!W(r)||_.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),n.shouldFocus&&!y&&$e(a,u=>u&&d(t.errors,u),r?f:g.mount),y},Ie=r=>{const n={...o,...x.mount?c:{}};return C(r)?n:W(r)?d(n,r):r.map(l=>d(n,l))},qe=(r,n)=>({invalid:!!d((n||t).errors,r),isDirty:!!d((n||t).dirtyFields,r),isTouched:!!d((n||t).touchedFields,r),error:d((n||t).errors,r)}),_t=r=>{r&&Ce(r).forEach(n=>j(t.errors,n)),v.state.next({errors:r?t.errors:{}})},He=(r,n,l)=>{const y=(d(a,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...n,ref:y}),v.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},At=(r,n)=>J(r)?v.values.subscribe({next:l=>r(k(void 0,n),l)}):k(r,n,!0),Fe=(r,n={})=>{for(const l of r?Ce(r):g.mount)g.mount.delete(l),g.array.delete(l),n.keepValue||(j(a,l),j(c,l)),!n.keepError&&j(t.errors,l),!n.keepDirty&&j(t.dirtyFields,l),!n.keepTouched&&j(t.touchedFields,l),!s.shouldUnregister&&!n.keepDefaultValue&&j(o,l);v.values.next({values:{...c}}),v.state.next({...t,...n.keepDirty?{isDirty:m()}:{}}),!n.keepIsValid&&p()},Se=(r,n={})=>{let l=d(a,r);const y=ne(n.disabled);return A(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...n}}),g.mount.add(r),l?y&&A(c,r,n.disabled?void 0:d(c,r,Oe(l._f))):oe(r,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:fe(n.min),max:fe(n.max),minLength:fe(n.minLength),maxLength:fe(n.maxLength),pattern:fe(n.pattern)}:{},name:r,onChange:le,onBlur:le,ref:f=>{if(f){Se(r,n),l=d(a,r);const u=C(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=sr(u),F=l._f.refs||[];if(h?F.find(D=>D===u):u===l._f.ref)return;A(a,r,{_f:{...l._f,...h?{refs:[...F.filter(Te),u,...Array.isArray(d(o,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),oe(r,!1,void 0,u)}else l=d(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(Gt(g.array,r)&&x.action)&&g.unMount.add(r)}}},We=()=>s.shouldFocusError&&$e(a,r=>r&&d(t.errors,r),g.mount),ze=(r,n)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=Q(c);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:u}=await q();t.errors=f,y=u}else await K(a);j(t.errors,"root"),B(t.errors)?(v.state.next({errors:{}}),await r(y,l)):(n&&await n({...t.errors},l),We(),setTimeout(We)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Ft=(r,n={})=>{d(a,r)&&(C(n.defaultValue)?ee(r,d(o,r)):(ee(r,n.defaultValue),A(o,r,n.defaultValue)),n.keepTouched||j(t.touchedFields,r),n.keepDirty||(j(t.dirtyFields,r),t.isDirty=n.defaultValue?m(r,d(o,r)):m()),n.keepError||(j(t.errors,r),_.isValid&&p()),v.state.next({...t}))},Ke=(r,n={})=>{const l=r||o,y=Q(l),f=r&&!B(r)?y:o;if(n.keepDefaultValues||(o=l),!n.keepValues){if(n.keepDirtyValues||$)for(const u of g.mount)d(t.dirtyFields,u)?A(f,u,d(c,u)):ee(u,d(f,u));else{if(Me&&C(r))for(const u of g.mount){const h=d(a,u);if(h&&h._f){const F=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(pe(F)){const D=F.closest("form");if(D){D.reset();break}}}}a={}}c=e.shouldUnregister?n.keepDefaultValues?Q(o):{}:Q(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&i(),x.mount=!_.isValid||!!n.keepIsValid,x.watch=!!e.shouldUnregister,v.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!te(r,o)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:n.keepDirtyValues?t.dirtyFields:n.keepDefaultValues&&r?je(o,r):{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ge=(r,n)=>Ke(J(r)?r(c):r,n);return{control:{register:Se,unregister:Fe,getFieldState:qe,handleSubmit:ze,setError:He,_executeSchema:q,_getWatch:k,_getDirty:m,_updateValid:p,_removeUnmounted:w,_updateFieldArray:z,_getFieldArray:L,_reset:Ke,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(r=>{Ge(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:v,_proxyFormState:_,get _fields(){return a},get _formValues(){return c},get _state(){return x},set _state(r){x=r},get _defaultValues(){return o},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ue,register:Se,handleSubmit:ze,watch:At,setValue:ee,getValues:Ie,reset:Ge,resetField:Ft,clearErrors:_t,unregister:Fe,setError:He,setFocus:(r,n={})=>{const l=d(a,r),y=l&&l._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:qe}}function cr(e={}){const i=Y.useRef(),s=Y.useRef(),[t,a]=Y.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...ur(e,()=>a(c=>({...c}))),formState:t});const o=i.current.control;return o._options=e,Xt({subject:o._subjects.state,next:c=>{Jt(c,o._proxyFormState,o._updateFormState,!0)&&a({...o._formState})}}),Y.useEffect(()=>{e.values&&!te(e.values,s.current)?(o._reset(e.values,o._options.resetOptions),s.current=e.values):o._resetDefaultValues()},[e.values,o]),Y.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),i.current.formState=Yt(t,o),i.current}var at=function(e,i,s){if(e&&"reportValidity"in e){var t=d(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},bt=function(e,i){var s=function(a){var o=i.fields[a];o&&o.ref&&"reportValidity"in o.ref?at(o.ref,a,e):o.refs&&o.refs.forEach(function(c){return at(c,a,e)})};for(var t in i.fields)s(t)},fr=function(e,i){i.shouldUseNativeValidation&&bt(e,i);var s={};for(var t in e){var a=d(i.fields,t);A(s,t,Object.assign(e[t]||{},{ref:a&&a.ref}))}return s};function dr(e,i,s){return i===void 0&&(i={}),s===void 0&&(s={}),function(t,a,o){try{return Promise.resolve(function(c,x){try{var g=(i.context,Promise.resolve(e[s.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},i,{context:a}))).then(function(V){return o.shouldUseNativeValidation&&bt({},o),{values:s.raw?t:V,errors:{}}}))}catch(V){return x(V)}return g&&g.then?g.then(void 0,x):g}(0,function(c){if(!c.inner)throw c;return{values:{},errors:fr((x=c,g=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(x.inner||[]).reduce(function(V,S){if(V[S.path]||(V[S.path]={message:S.message,type:S.type}),g){var _=V[S.path].types,v=_&&_[S.type];V[S.path]=yt(S.path,g,V,S.type,v?[].concat(v,S.message):S.message)}return V},{})),o)};var x,g}))}catch(c){return Promise.reject(c)}}}const wt=({$w:e,$h:i,$s:s,onClick:t,type:a="button",disabled:o,children:c})=>b.jsx(Et,{$w:e,$h:i,$s:s,onClick:t,type:a,disabled:o,children:c});wt.propTypes={$w:R.string,$h:R.string,$s:R.string,onClick:R.func,type:R.string,disabled:R.oneOfType([R.bool,R.number]),children:R.oneOfType([R.string,R.node,R.oneOf(["img","png","svg"])])};const yr=we`
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
`;we`
  opacity: 0;
  pointer-events: none;
`;const hr=X.form`
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${I.radius.m};
  background-color: ${I.colors.white};
  box-shadow: ${I.shadows.auth};
`,Le=X.label`
  position: relative;
  font-size: 18px;
  font-weight: 700;

  &:not(:first-of-type) {
    font-size: 16px;
    font-weight: 500;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }

  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${I.colors.error};
  }
`,Pe=we`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${I.colors.border};
  border-radius: ${I.radius.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid ${I.colors.hovered};
  }
`,gr=X.input`
  ${Pe}
  ${yr}
`,vr=X.input`
  ${Pe}
`,pr=X.div`
  ${Pe}
  position: relative;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  cursor: pointer;

  // Custom arrow
  &::after {
    grid-area: select;
    justify-self: end;
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: ${I.colors.placeholder};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  & select {
    position: relative;
    grid-area: select;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-overflow: '';
    text-indent: 0.01px; /* Removes default arrow from firefox*/
    text-overflow: ''; /*Removes default arrow from firefox*/
    &::-ms-expand {
      display: none;
    }
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }
`,Vt=({clipboardText:e,setIsModal:i})=>{var V,S,_;const s=lt(),{allClusters:t}=ut(),{register:a,handleSubmit:o,formState:{errors:c}}=cr({mode:"onBlur",resolver:dr(Lt),defaultValues:{cluster:e}}),x=v=>{s(Tt(v)),i(!1)},g=v=>{const $=`${t.length}. `.padStart(4,"0")+v;return $.length<=50?$:$.substring(0,40).concat("...")};return b.jsxs(hr,{onSubmit:o(x),children:[b.jsxs(Le,{children:[g(e)," ",b.jsx("br",{}),b.jsx("span",{children:(V=c.cluster)==null?void 0:V.message}),b.jsx(gr,{...a("cluster")})]}),b.jsxs(Le,{children:["Title: ",b.jsxs("span",{children:[" ",(S=c.title)==null?void 0:S.message]}),b.jsx(vr,{...a("title")})]}),b.jsxs(Le,{children:["Group: ",b.jsxs("span",{children:[" ",(_=c.group)==null?void 0:_.message]}),b.jsxs(pr,{children:[b.jsxs("select",{name:"pets",id:"pet-select",...a("group"),children:[b.jsx("option",{value:"common",children:"Common"}),b.jsx("option",{value:"study",children:"Study"}),b.jsx("option",{value:"work",children:"Work"})]}),b.jsx("span",{})]})]}),b.jsx(wt,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Vt.propTypes={clipboardText:R.string.isRequired,setIsModal:R.func.isRequired};const Ar=()=>{const[e,i]=Re.useState(!1),[s,t]=Re.useState(""),a=async()=>{t(await Pt()),s.length<10?ge.error("Copy valid cluster"):i(!0)};return b.jsxs(jt,{$p:`${I.indent.s} ${I.indent.m}`,children:[b.jsx(Wt,{}),b.jsxs(Ot,{$x:"right",$y:"bottom",$gtc:"1fr 1fr",children:[b.jsx(Je,{$s:"m",children:"Edit"}),b.jsx(Je,{$s:"m",onClick:a,children:"Add"})]}),e&&b.jsx(Rt,{onClick:()=>i(!1),children:b.jsx(Vt,{clipboardText:s,setIsModal:i})})]})};export{Ar as default};
