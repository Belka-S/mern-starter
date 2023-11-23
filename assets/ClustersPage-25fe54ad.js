import{Q as ve,k as ce,m as Rt,o as Mt,p as Ut,q as Bt,w as Pt,n as _e,s as K,t as ye,P as L,j as m,G as Nt,u as Be,x as It,r as be,y as qt,R as J,A as zt,z as Ht,C as Wt,D as et,M as Gt,F as Kt}from"./index-f6bbf5ac.js";import{t as Qt,c as Yt}from"./clusterSchema-40f11a89.js";const Jt=(e,s)=>Array.from(new Set(e.map(i=>i[s].toLowerCase()))),Xt=async()=>{if(!navigator.clipboard){ve.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&ve.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){ve.error(e.message)}},Zt=()=>{const e=ce(Rt),s=ce(Mt),i=ce(Ut),r=ce(Bt),a=ce(Pt);return{allClusters:e,activeCluster:s,clustersFilter:i,error:r,isLoading:a}},yt=_e`
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
`;_e`
  opacity: 0;
  pointer-events: none;
`;const{colors:q,shadows:er,indents:tr,radiuses:tt}=ye,ht=_e`
  margin: 0 ${tr.s};
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 10fr 20fr;
  grid-template-areas: '. title title';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${q.borderLight};
`,rr=K.li`
  ${ht}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${tt.xl};
    border-top-right-radius: ${tt.xl};
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
`,sr=K.li`
  ${ht}

  transition: box-shadow 250ms, border-color 250ms;

  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${q.border};
    box-shadow: ${er.back};
    background-color: ${q.backgroundHoverd};
  }

  & svg {
    transition: stroke 250ms;
    stroke-width: 2.5px;
    color: ${({$hoverd:e})=>e?q.yellow:"transparent"};
    stroke: ${({$hoverd:e})=>e?q.yellow:q.border};
  }
  &:hover svg {
    stroke: ${({$hoverd:e})=>!e&&q.placeholder};
    stroke-width: ${({$hoverd:e})=>!e&&"2px"};
  }

  & a {
    font-size: 16px;
    color: ${q.placeholder};

    &::before {
      counter-increment: subsection;
      content: counter(section) '.' counter(subsection) '. ';
      font-size: 14px;
      font-weight: 700;
      color: ${q.black};
    }
  }
  &:hover a {
    color: ${q.hovered};
  }
`,ir=K.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${yt}
  }
`,gt=({group:e})=>m.jsx(rr,{children:m.jsx("h2",{children:e})});gt.propTypes={group:L.string};function nr(e){return Nt({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}const pt=({el:e})=>{const s=Be(),{_id:i,cluster:r,title:a,favorite:n}=e,u=g=>{const w=g.replace("https://","").replace("http://","");return w.length<=50?w:w.substring(0,49).concat("...")},p=()=>s(It({_id:i,favorite:!n}));return m.jsxs(sr,{$hoverd:n,children:[m.jsxs(ir,{children:[m.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:p}),m.jsx(nr,{size:"18px"})]}),m.jsx("h3",{children:a}),m.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:u(r)})]})};pt.propTypes={el:L.object,$hoverd:L.bool};const{colors:or,indents:ar,radiuses:lr}=ye,ur=K.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${ar.xl};
  counter-reset: section 0;
  background-color: ${or.white};
  border-radius: ${lr.xl};
`,cr=()=>{const e=Be(),{allClusters:s,clustersFilter:i}=Zt(),r=[...s].filter(({cluster:n,title:u,group:p})=>n.toLowerCase().includes(i)||u.toLowerCase().includes(i)||p.toLowerCase().includes(i)).sort((n,u)=>n.title.localeCompare(u.title)),a=Jt(r,"group").sort((n,u)=>n.localeCompare(u));return be.useEffect(()=>{e(qt())},[e]),m.jsx(ur,{children:a.map(n=>m.jsxs(be.Fragment,{children:[m.jsx(gt,{group:n}),r.map(u=>u.group===n&&m.jsx(pt,{el:u},u._id))]},n))})};var he=e=>e.type==="checkbox",ie=e=>e instanceof Date,j=e=>e==null;const vt=e=>typeof e=="object";var D=e=>!j(e)&&!Array.isArray(e)&&vt(e)&&!ie(e),dr=e=>D(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,fr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,yr=(e,s)=>e.has(fr(s)),hr=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Y(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(i||D(e)))if(s=i?[]:{},!i&&!hr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=Y(e[r]));else return e;return s}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],$=e=>e===void 0,f=(e,s,i)=>{if(!s||!D(e))return i;const r=ge(s.split(/[,[\].]+?/)).reduce((a,n)=>j(a)?a:a[n],e);return $(r)||r===e?$(e[s])?i:e[s]:r};const rt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};J.createContext(null);var gr=(e,s,i,r=!0)=>{const a={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const u=n;return s._proxyFormState[u]!==P.all&&(s._proxyFormState[u]=!r||P.all),i&&(i[u]=!0),e[u]}});return a},U=e=>D(e)&&!Object.keys(e).length,pr=(e,s,i,r)=>{i(e);const{name:a,...n}=e;return U(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!r||P.all))},Te=e=>Array.isArray(e)?e:[e];function vr(e){const s=J.useRef(e);s.current=e,J.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var z=e=>typeof e=="string",xr=(e,s,i,r,a)=>z(e)?(r&&s.watch.add(e),f(i,e,a)):Array.isArray(e)?e.map(n=>(r&&s.watch.add(n),f(i,n))):(r&&(s.watchAll=!0),i),Ne=e=>/^\w*$/.test(e),xt=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,s,i){let r=-1;const a=Ne(s)?[s]:xt(s),n=a.length,u=n-1;for(;++r<n;){const p=a[r];let g=i;if(r!==u){const w=e[p];g=D(w)||Array.isArray(w)?w:isNaN(+a[r+1])?{}:[]}e[p]=g,e=e[p]}return e}var bt=(e,s,i,r,a)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:a||!0}}:{};const Ue=(e,s,i)=>{for(const r of i||Object.keys(e)){const a=f(e,r);if(a){const{_f:n,...u}=a;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else D(u)&&Ue(u,s)}}};var st=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),it=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),br=(e,s,i)=>{const r=ge(f(e,i));return _(r,"root",s[i]),_(e,i,r),e},ne=e=>typeof e=="boolean",Ie=e=>e.type==="file",X=e=>typeof e=="function",me=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},xe=e=>z(e),qe=e=>e.type==="radio",we=e=>e instanceof RegExp;const nt={value:!1,isValid:!1},ot={value:!0,isValid:!0};var mt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!$(e[0].attributes.value)?$(e[0].value)||e[0].value===""?ot:{value:e[0].value,isValid:!0}:ot:nt}return nt};const at={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,at):at;function lt(e,s,i="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||ne(e)&&!e)return{type:i,message:xe(e)?e:"",ref:s}}var se=e=>D(e)&&!we(e)?e:{value:e,message:""},ut=async(e,s,i,r,a)=>{const{ref:n,refs:u,required:p,maxLength:g,minLength:w,min:A,max:F,pattern:x,validate:Q,name:R,valueAsNumber:Fe,mount:pe,disabled:ke}=e._f,v=f(s,R);if(!pe||ke)return{};const B=u?u[0]:n,H=V=>{r&&B.reportValidity&&(B.setCustomValidity(ne(V)?"":V||""),B.reportValidity())},E={},oe=qe(n),ae=he(n),Se=oe||ae,N=(Fe||Ie(n))&&$(n.value)&&$(v)||me(n)&&n.value===""||v===""||Array.isArray(v)&&!v.length,Z=bt.bind(null,R,i,E),W=(V,b,S,O=G.maxLength,M=G.minLength)=>{const I=V?b:S;E[R]={type:V?O:M,message:I,ref:n,...Z(V?O:M,I)}};if(a?!Array.isArray(v)||!v.length:p&&(!Se&&(N||j(v))||ne(v)&&!v||ae&&!mt(u).isValid||oe&&!wt(u).isValid)){const{value:V,message:b}=xe(p)?{value:!!p,message:p}:se(p);if(V&&(E[R]={type:G.required,message:b,ref:B,...Z(G.required,b)},!i))return H(b),E}if(!N&&(!j(A)||!j(F))){let V,b;const S=se(F),O=se(A);if(!j(v)&&!isNaN(v)){const M=n.valueAsNumber||v&&+v;j(S.value)||(V=M>S.value),j(O.value)||(b=M<O.value)}else{const M=n.valueAsDate||new Date(v),I=ue=>new Date(new Date().toDateString()+" "+ue),ee=n.type=="time",le=n.type=="week";z(S.value)&&v&&(V=ee?I(v)>I(S.value):le?v>S.value:M>new Date(S.value)),z(O.value)&&v&&(b=ee?I(v)<I(O.value):le?v<O.value:M<new Date(O.value))}if((V||b)&&(W(!!V,S.message,O.message,G.max,G.min),!i))return H(E[R].message),E}if((g||w)&&!N&&(z(v)||a&&Array.isArray(v))){const V=se(g),b=se(w),S=!j(V.value)&&v.length>+V.value,O=!j(b.value)&&v.length<+b.value;if((S||O)&&(W(S,V.message,b.message),!i))return H(E[R].message),E}if(x&&!N&&z(v)){const{value:V,message:b}=se(x);if(we(V)&&!v.match(V)&&(E[R]={type:G.pattern,message:b,ref:n,...Z(G.pattern,b)},!i))return H(b),E}if(Q){if(X(Q)){const V=await Q(v,s),b=lt(V,B);if(b&&(E[R]={...b,...Z(G.validate,b.message)},!i))return H(b.message),E}else if(D(Q)){let V={};for(const b in Q){if(!U(V)&&!i)break;const S=lt(await Q[b](v,s),B,b);S&&(V={...S,...Z(b,S.message)},H(S.message),i&&(E[R]=V))}if(!U(V)&&(E[R]={ref:B,...V},!i))return E}}return H(!0),E};function mr(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=$(e)?r++:e[s[r++]];return e}function wr(e){for(const s in e)if(e.hasOwnProperty(s)&&!$(e[s]))return!1;return!0}function T(e,s){const i=Array.isArray(s)?s:Ne(s)?[s]:xt(s),r=i.length===1?e:mr(e,i),a=i.length-1,n=i[a];return r&&delete r[n],a!==0&&(D(r)&&U(r)||Array.isArray(r)&&wr(r))&&T(e,i.slice(0,-1)),e}function Le(){let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}}var Ve=e=>j(e)||!vt(e);function te(e,s){if(Ve(e)||Ve(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const a of i){const n=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const u=s[a];if(ie(n)&&ie(u)||D(n)&&D(u)||Array.isArray(n)&&Array.isArray(u)?!te(n,u):n!==u)return!1}}return!0}var Vt=e=>e.type==="select-multiple",Vr=e=>qe(e)||he(e),je=e=>me(e)&&e.isConnected,At=e=>{for(const s in e)if(X(e[s]))return!0;return!1};function Ae(e,s={}){const i=Array.isArray(e);if(D(e)||i)for(const r in e)Array.isArray(e[r])||D(e[r])&&!At(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):j(e[r])||(s[r]=!0);return s}function _t(e,s,i){const r=Array.isArray(e);if(D(e)||r)for(const a in e)Array.isArray(e[a])||D(e[a])&&!At(e[a])?$(s)||Ve(i[a])?i[a]=Array.isArray(e[a])?Ae(e[a],[]):{...Ae(e[a])}:_t(e[a],j(s)?{}:s[a],i[a]):i[a]=!te(e[a],s[a]);return i}var Oe=(e,s)=>_t(e,s,Ae(s)),Ft=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>$(e)?e:s?e===""?NaN:e&&+e:i&&z(e)?new Date(e):r?r(e):e;function Re(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ie(s)?s.files:qe(s)?wt(e.refs).value:Vt(s)?[...s.selectedOptions].map(({value:i})=>i):he(s)?mt(e.refs).value:Ft($(s.value)?e.ref.value:s.value,e)}var Ar=(e,s,i,r)=>{const a={};for(const n of e){const u=f(s,n);u&&_(a,n,u._f)}return{criteriaMode:i,names:[...e],fields:a,shouldUseNativeValidation:r}},de=e=>$(e)?e:we(e)?e.source:D(e)?we(e.value)?e.value.source:e.value:e,_r=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ct(e,s,i){const r=f(e,i);if(r||Ne(i))return{error:r,name:i};const a=i.split(".");for(;a.length;){const n=a.join("."),u=f(s,n),p=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(p&&p.type)return{name:n,error:p};a.pop()}return{name:i}}var Fr=(e,s,i,r,a)=>a.isOnAll?!1:!i&&a.isOnTouch?!(s||e):(i?r.isOnBlur:a.isOnBlur)?!e:(i?r.isOnChange:a.isOnChange)?e:!0,kr=(e,s)=>!ge(f(e,s)).length&&T(e,s);const Sr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Cr(e={},s){let i={...Sr,...e},r={submitCount:0,isDirty:!1,isLoading:X(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},n=D(i.defaultValues)||D(i.values)?Y(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:Y(n),p={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,A=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Le(),array:Le(),state:Le()},Q=e.resetOptions&&e.resetOptions.keepDirtyValues,R=st(i.mode),Fe=st(i.reValidateMode),pe=i.criteriaMode===P.all,ke=t=>o=>{clearTimeout(A),A=setTimeout(t,o)},v=async t=>{if(F.isValid||t){const o=i.resolver?U((await N()).errors):await W(a,!0);o!==r.isValid&&x.state.next({isValid:o})}},B=t=>F.isValidating&&x.state.next({isValidating:t}),H=(t,o=[],l,y,d=!0,c=!0)=>{if(y&&l){if(p.action=!0,c&&Array.isArray(f(a,t))){const h=l(f(a,t),y.argA,y.argB);d&&_(a,t,h)}if(c&&Array.isArray(f(r.errors,t))){const h=l(f(r.errors,t),y.argA,y.argB);d&&_(r.errors,t,h),kr(r.errors,t)}if(F.touchedFields&&c&&Array.isArray(f(r.touchedFields,t))){const h=l(f(r.touchedFields,t),y.argA,y.argB);d&&_(r.touchedFields,t,h)}F.dirtyFields&&(r.dirtyFields=Oe(n,u)),x.state.next({name:t,isDirty:b(t,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else _(u,t,o)},E=(t,o)=>{_(r.errors,t,o),x.state.next({errors:r.errors})},oe=(t,o,l,y)=>{const d=f(a,t);if(d){const c=f(u,t,$(l)?f(n,t):l);$(c)||y&&y.defaultChecked||o?_(u,t,o?c:Re(d._f)):M(t,c),p.mount&&v()}},ae=(t,o,l,y,d)=>{let c=!1,h=!1;const k={name:t};if(!l||y){F.isDirty&&(h=r.isDirty,r.isDirty=k.isDirty=b(),c=h!==k.isDirty);const C=te(f(n,t),o);h=f(r.dirtyFields,t),C?T(r.dirtyFields,t):_(r.dirtyFields,t,!0),k.dirtyFields=r.dirtyFields,c=c||F.dirtyFields&&h!==!C}if(l){const C=f(r.touchedFields,t);C||(_(r.touchedFields,t,l),k.touchedFields=r.touchedFields,c=c||F.touchedFields&&C!==l)}return c&&d&&x.state.next(k),c?k:{}},Se=(t,o,l,y)=>{const d=f(r.errors,t),c=F.isValid&&ne(o)&&r.isValid!==o;if(e.delayError&&l?(w=ke(()=>E(t,l)),w(e.delayError)):(clearTimeout(A),w=null,l?_(r.errors,t,l):T(r.errors,t)),(l?!te(d,l):d)||!U(y)||c){const h={...y,...c&&ne(o)?{isValid:o}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}B(!1)},N=async t=>i.resolver(u,i.context,Ar(t||g.mount,a,i.criteriaMode,i.shouldUseNativeValidation)),Z=async t=>{const{errors:o}=await N();if(t)for(const l of t){const y=f(o,l);y?_(r.errors,l,y):T(r.errors,l)}else r.errors=o;return o},W=async(t,o,l={valid:!0})=>{for(const y in t){const d=t[y];if(d){const{_f:c,...h}=d;if(c){const k=g.array.has(c.name),C=await ut(d,u,pe,i.shouldUseNativeValidation&&!o,k);if(C[c.name]&&(l.valid=!1,o))break;!o&&(f(C,c.name)?k?br(r.errors,C,c.name):_(r.errors,c.name,C[c.name]):T(r.errors,c.name))}h&&await W(h,o,l)}}return l.valid},V=()=>{for(const t of g.unMount){const o=f(a,t);o&&(o._f.refs?o._f.refs.every(l=>!je(l)):!je(o._f.ref))&&Ce(t)}g.unMount=new Set},b=(t,o)=>(t&&o&&_(u,t,o),!te(He(),n)),S=(t,o,l)=>xr(t,g,{...p.mount?u:$(o)?n:z(t)?{[t]:o}:o},l,o),O=t=>ge(f(p.mount?u:n,t,e.shouldUnregister?f(n,t,[]):[])),M=(t,o,l={})=>{const y=f(a,t);let d=o;if(y){const c=y._f;c&&(!c.disabled&&_(u,t,Ft(o,c)),d=me(c.ref)&&j(o)?"":o,Vt(c.ref)?[...c.ref.options].forEach(h=>h.selected=d.includes(h.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(k=>k===h.value):d===h.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(h=>h.checked=h.value===d):Ie(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||x.values.next({name:t,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ae(t,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(t)},I=(t,o,l)=>{for(const y in o){const d=o[y],c=`${t}.${y}`,h=f(a,c);(g.array.has(t)||!Ve(d)||h&&!h._f)&&!ie(d)?I(c,d,l):M(c,d,l)}},ee=(t,o,l={})=>{const y=f(a,t),d=g.array.has(t),c=Y(o);_(u,t,c),d?(x.array.next({name:t,values:{...u}}),(F.isDirty||F.dirtyFields)&&l.shouldDirty&&x.state.next({name:t,dirtyFields:Oe(n,u),isDirty:b(t,c)})):y&&!y._f&&!j(c)?I(t,c,l):M(t,c,l),it(t,g)&&x.state.next({...r}),x.values.next({name:t,values:{...u}}),!p.mount&&s()},le=async t=>{const o=t.target;let l=o.name,y=!0;const d=f(a,l),c=()=>o.type?Re(d._f):dr(t);if(d){let h,k;const C=c(),re=t.type===rt.BLUR||t.type===rt.FOCUS_OUT,Lt=!_r(d._f)&&!i.resolver&&!f(r.errors,l)&&!d._f.deps||Fr(re,f(r.touchedFields,l),r.isSubmitted,Fe,R),De=it(l,g,re);_(u,l,C),re?(d._f.onBlur&&d._f.onBlur(t),w&&w(0)):d._f.onChange&&d._f.onChange(t);const Ee=ae(l,C,re,!1),jt=!U(Ee)||De;if(!re&&x.values.next({name:l,type:t.type,values:{...u}}),Lt)return F.isValid&&v(),jt&&x.state.next({name:l,...De?{}:Ee});if(!re&&De&&x.state.next({...r}),B(!0),i.resolver){const{errors:Xe}=await N([l]),Ot=ct(r.errors,a,l),Ze=ct(Xe,a,Ot.name||l);h=Ze.error,l=Ze.name,k=U(Xe)}else h=(await ut(d,u,pe,i.shouldUseNativeValidation))[l],y=isNaN(C)||C===f(u,l,C),y&&(h?k=!1:F.isValid&&(k=await W(a,!0)));y&&(d._f.deps&&ue(d._f.deps),Se(l,k,h,Ee))}},ue=async(t,o={})=>{let l,y;const d=Te(t);if(B(!0),i.resolver){const c=await Z($(t)?t:d);l=U(c),y=t?!d.some(h=>f(c,h)):l}else t?(y=(await Promise.all(d.map(async c=>{const h=f(a,c);return await W(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&v()):y=l=await W(a);return x.state.next({...!z(t)||F.isValid&&l!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!y&&Ue(a,c=>c&&f(r.errors,c),t?d:g.mount),y},He=t=>{const o={...n,...p.mount?u:{}};return $(t)?o:z(t)?f(o,t):t.map(l=>f(o,l))},We=(t,o)=>({invalid:!!f((o||r).errors,t),isDirty:!!f((o||r).dirtyFields,t),isTouched:!!f((o||r).touchedFields,t),error:f((o||r).errors,t)}),Dt=t=>{t&&Te(t).forEach(o=>T(r.errors,o)),x.state.next({errors:t?r.errors:{}})},Ge=(t,o,l)=>{const y=(f(a,t,{_f:{}})._f||{}).ref;_(r.errors,t,{...o,ref:y}),x.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},Et=(t,o)=>X(t)?x.values.subscribe({next:l=>t(S(void 0,o),l)}):S(t,o,!0),Ce=(t,o={})=>{for(const l of t?Te(t):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(T(a,l),T(u,l)),!o.keepError&&T(r.errors,l),!o.keepDirty&&T(r.dirtyFields,l),!o.keepTouched&&T(r.touchedFields,l),!i.shouldUnregister&&!o.keepDefaultValue&&T(n,l);x.values.next({values:{...u}}),x.state.next({...r,...o.keepDirty?{isDirty:b()}:{}}),!o.keepIsValid&&v()},$e=(t,o={})=>{let l=f(a,t);const y=ne(o.disabled);return _(a,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...o}}),g.mount.add(t),l?y&&_(u,t,o.disabled?void 0:f(u,t,Re(l._f))):oe(t,!0,o.value),{...y?{disabled:o.disabled}:{},...i.progressive?{required:!!o.required,min:de(o.min),max:de(o.max),minLength:de(o.minLength),maxLength:de(o.maxLength),pattern:de(o.pattern)}:{},name:t,onChange:le,onBlur:le,ref:d=>{if(d){$e(t,o),l=f(a,t);const c=$(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=Vr(c),k=l._f.refs||[];if(h?k.find(C=>C===c):c===l._f.ref)return;_(a,t,{_f:{...l._f,...h?{refs:[...k.filter(je),c,...Array.isArray(f(n,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),oe(t,!1,void 0,c)}else l=f(a,t,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||o.shouldUnregister)&&!(yr(g.array,t)&&p.action)&&g.unMount.add(t)}}},Ke=()=>i.shouldFocusError&&Ue(a,t=>t&&f(r.errors,t),g.mount),Qe=(t,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=Y(u);if(x.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await N();r.errors=d,y=c}else await W(a);T(r.errors,"root"),U(r.errors)?(x.state.next({errors:{}}),await t(y,l)):(o&&await o({...r.errors},l),Ke(),setTimeout(Ke)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Tt=(t,o={})=>{f(a,t)&&($(o.defaultValue)?ee(t,f(n,t)):(ee(t,o.defaultValue),_(n,t,o.defaultValue)),o.keepTouched||T(r.touchedFields,t),o.keepDirty||(T(r.dirtyFields,t),r.isDirty=o.defaultValue?b(t,f(n,t)):b()),o.keepError||(T(r.errors,t),F.isValid&&v()),x.state.next({...r}))},Ye=(t,o={})=>{const l=t||n,y=Y(l),d=t&&!U(t)?y:n;if(o.keepDefaultValues||(n=l),!o.keepValues){if(o.keepDirtyValues||Q)for(const c of g.mount)f(r.dirtyFields,c)?_(d,c,f(u,c)):ee(c,f(d,c));else{if(Pe&&$(t))for(const c of g.mount){const h=f(a,c);if(h&&h._f){const k=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(me(k)){const C=k.closest("form");if(C){C.reset();break}}}}a={}}u=e.shouldUnregister?o.keepDefaultValues?Y(n):{}:Y(d),x.array.next({values:{...d}}),x.values.next({values:{...d}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!p.mount&&s(),p.mount=!F.isValid||!!o.keepIsValid,p.watch=!!e.shouldUnregister,x.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!te(t,n)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&t?Oe(n,t):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Je=(t,o)=>Ye(X(t)?t(u):t,o);return{control:{register:$e,unregister:Ce,getFieldState:We,handleSubmit:Qe,setError:Ge,_executeSchema:N,_getWatch:S,_getDirty:b,_updateValid:v,_removeUnmounted:V,_updateFieldArray:H,_getFieldArray:O,_reset:Ye,_resetDefaultValues:()=>X(i.defaultValues)&&i.defaultValues().then(t=>{Je(t,i.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:x,_proxyFormState:F,get _fields(){return a},get _formValues(){return u},get _state(){return p},set _state(t){p=t},get _defaultValues(){return n},get _names(){return g},set _names(t){g=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ue,register:$e,handleSubmit:Qe,watch:Et,setValue:ee,getValues:He,reset:Je,resetField:Tt,clearErrors:Dt,unregister:Ce,setError:Ge,setFocus:(t,o={})=>{const l=f(a,t),y=l&&l._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),o.shouldSelect&&d.select())}},getFieldState:We}}function $r(e={}){const s=J.useRef(),i=J.useRef(),[r,a]=J.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Cr(e,()=>a(u=>({...u}))),formState:r});const n=s.current.control;return n._options=e,vr({subject:n._subjects.state,next:u=>{pr(u,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),J.useEffect(()=>{e.values&&!te(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),J.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=gr(r,n),s.current}var dt=function(e,s,i){if(e&&"reportValidity"in e){var r=f(i,s);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},kt=function(e,s){var i=function(a){var n=s.fields[a];n&&n.ref&&"reportValidity"in n.ref?dt(n.ref,a,e):n.refs&&n.refs.forEach(function(u){return dt(u,a,e)})};for(var r in s.fields)i(r)},Dr=function(e,s){s.shouldUseNativeValidation&&kt(e,s);var i={};for(var r in e){var a=f(s.fields,r);_(i,r,Object.assign(e[r]||{},{ref:a&&a.ref}))}return i};function Er(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(r,a,n){try{return Promise.resolve(function(u,p){try{var g=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},s,{context:a}))).then(function(w){return n.shouldUseNativeValidation&&kt({},n),{values:i.raw?r:w,errors:{}}}))}catch(w){return p(w)}return g&&g.then?g.then(void 0,p):g}(0,function(u){if(!u.inner)throw u;return{values:{},errors:Dr((p=u,g=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(p.inner||[]).reduce(function(w,A){if(w[A.path]||(w[A.path]={message:A.message,type:A.type}),g){var F=w[A.path].types,x=F&&F[A.type];w[A.path]=bt(A.path,g,w,A.type,x?[].concat(x,A.message):A.message)}return w},{})),n)};var p,g}))}catch(u){return Promise.reject(u)}}}const St=({$w:e,$h:s,$s:i,onClick:r,type:a="button",disabled:n,children:u})=>m.jsx(zt,{$w:e,$h:s,$s:i,onClick:r,type:a,disabled:n,children:u});St.propTypes={$w:L.string,$h:L.string,$s:L.string,onClick:L.func,type:L.string,disabled:L.oneOfType([L.bool,L.number]),children:L.oneOfType([L.string,L.node,L.oneOf(["img","png","svg"])])};const{colors:fe,radiuses:Ct,shadows:Tr}=ye,Lr=K.form`
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Ct.m};
  background-color: ${fe.white};
  box-shadow: ${Tr.auth};
`,Me=K.label`
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
    color: ${fe.error};
  }
`,ze=_e`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${fe.border};
  border-radius: ${Ct.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid ${fe.hovered};
  }
`,jr=K.input`
  ${ze}
  ${yt}
`,Or=K.input`
  ${ze}
`,Rr=K.div`
  ${ze}
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
    background-color: ${fe.placeholder};
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
`,Mr=["common","study","work"],$t=({cluster:e,setIsModal:s})=>{var g,w;const i=Be(),{register:r,handleSubmit:a,formState:{errors:n}}=$r({mode:"onBlur",resolver:Er(Qt),defaultValues:{cluster:e}}),u=A=>{i(Ht(A)),s(!1)},p=A=>A.length<=50?A:A.substring(0,40).concat("...");return m.jsxs(Lr,{onSubmit:a(u),children:[m.jsxs(Me,{children:[p(e),m.jsx(jr,{...r("cluster")})]}),m.jsxs(Me,{children:["Title: ",m.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),m.jsx(Or,{...r("title")})]}),m.jsxs(Me,{children:["Group: ",m.jsxs("span",{children:[" ",(w=n.group)==null?void 0:w.message]}),m.jsxs(Rr,{children:[m.jsx("select",{...r("group"),children:Mr.map(A=>m.jsx("option",{value:A,children:A},A))}),m.jsx("span",{})]})]}),m.jsx(St,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};$t.propTypes={cluster:L.string.isRequired,setIsModal:L.func.isRequired};const{button:ft}=ye.shadows,Ur=()=>{const[e,s]=be.useState(!1),[i,r]=be.useState(""),a=async u=>{const p=await Xt();try{await Yt.validate({cluster:p}),r(p),s(!0)}catch(g){u.target.blur(),ve.error(`Invalid cluster, ${g.message}`)}},n=()=>{};return m.jsxs(Wt,{$m:"10px 30px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr 1fr",children:[m.jsx(et,{onClick:a,$s:"m",$bs:ft,children:"Add"}),m.jsx(et,{onClick:n,$s:"m",$bs:ft,children:"Edit"}),e&&m.jsx(Gt,{onClick:()=>s(!1),children:m.jsx($t,{cluster:i,setIsModal:s})})]})},zr=()=>{const{s:e,m:s}=ye.indents;return m.jsxs(Kt,{$p:`2px ${s} ${e}`,children:[m.jsx(cr,{}),m.jsx(Ur,{})]})};export{zr as default};
