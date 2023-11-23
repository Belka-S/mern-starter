import{Q as pe,k as ce,m as Mt,o as Rt,p as Ut,q as Bt,w as Pt,n as Ae,s as X,t as fe,P as L,j as w,G as Nt,u as Be,x as It,r as be,y as qt,R as Y,A as zt,S as Ht,z as Wt,C as Gt,D as Ze,M as Kt,F as Qt}from"./index-87a7be3f.js";import{t as Yt,c as Jt}from"./clusterSchema-d18f580e.js";const Xt=(e,s)=>Array.from(new Set(e.map(i=>i[s].toLowerCase()))),Zt=async()=>{if(!navigator.clipboard){pe.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&pe.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){pe.error(e.message)}},er=()=>{const e=ce(Mt),s=ce(Rt),i=ce(Ut),r=ce(Bt),a=ce(Pt);return{allClusters:e,activeCluster:s,clustersFilter:i,error:r,isLoading:a}},ft=Ae`
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
`;Ae`
  opacity: 0;
  pointer-events: none;
`;const{colors:q,shadows:tr,indents:rr,radiuses:et}=fe,yt=Ae`
  margin: 0 ${rr.s};
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 10fr 20fr;
  grid-template-areas: '. title title';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${q.borderLight};
`,sr=X.li`
  ${yt}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${et.xl};
    border-top-right-radius: ${et.xl};
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
`,ir=X.li`
  ${yt}

  transition: box-shadow 250ms, border-color 250ms;

  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${q.border};
    box-shadow: ${tr.back};
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
`,nr=X.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${ft}
  }
`,ht=({group:e})=>w.jsx(sr,{children:w.jsx("h2",{children:e})});ht.propTypes={group:L.string};function or(e){return Nt({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}const gt=({el:e})=>{const s=Be(),{_id:i,cluster:r,title:a,favorite:n}=e,u=g=>{const v=g.replace("https://","").replace("http://","");return v.length<=50?v:v.substring(0,49).concat("...")},p=()=>s(It({_id:i,favorite:!n}));return w.jsxs(ir,{$hoverd:n,children:[w.jsxs(nr,{children:[w.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:p}),w.jsx(or,{size:"18px"})]}),w.jsx("h3",{children:a}),w.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:u(r)})]})};gt.propTypes={el:L.object,$hoverd:L.bool};const{colors:ar,indents:lr,radiuses:ur}=fe,cr=X.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${lr.xl};
  counter-reset: section 0;
  background-color: ${ar.white};
  border-radius: ${ur.xl};
`,dr=()=>{const e=Be(),{allClusters:s,clustersFilter:i}=er(),r=[...s].filter(({cluster:n,title:u,group:p})=>n.toLowerCase().includes(i)||u.toLowerCase().includes(i)||p.toLowerCase().includes(i)).sort((n,u)=>n.title.localeCompare(u.title)),a=Xt(r,"group").sort((n,u)=>n.localeCompare(u));return be.useEffect(()=>{e(qt())},[e]),w.jsx(cr,{children:a.map(n=>w.jsxs(be.Fragment,{children:[w.jsx(ht,{group:n}),r.map(u=>u.group===n&&w.jsx(gt,{el:u},u._id))]},n))})};var ye=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const pt=e=>typeof e=="object";var $=e=>!O(e)&&!Array.isArray(e)&&pt(e)&&!ie(e),fr=e=>$(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,yr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,hr=(e,s)=>e.has(yr(s)),gr=e=>{const s=e.constructor&&e.constructor.prototype;return $(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(i||$(e)))if(s=i?[]:{},!i&&!gr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=Q(e[r]));else return e;return s}var he=e=>Array.isArray(e)?e.filter(Boolean):[],C=e=>e===void 0,f=(e,s,i)=>{if(!s||!$(e))return i;const r=he(s.split(/[,[\].]+?/)).reduce((a,n)=>O(a)?a:a[n],e);return C(r)||r===e?C(e[s])?i:e[s]:r};const tt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var pr=(e,s,i,r=!0)=>{const a={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const u=n;return s._proxyFormState[u]!==P.all&&(s._proxyFormState[u]=!r||P.all),i&&(i[u]=!0),e[u]}});return a},U=e=>$(e)&&!Object.keys(e).length,vr=(e,s,i,r)=>{i(e);const{name:a,...n}=e;return U(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!r||P.all))},Te=e=>Array.isArray(e)?e:[e];function br(e){const s=Y.useRef(e);s.current=e,Y.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var z=e=>typeof e=="string",xr=(e,s,i,r,a)=>z(e)?(r&&s.watch.add(e),f(i,e,a)):Array.isArray(e)?e.map(n=>(r&&s.watch.add(n),f(i,n))):(r&&(s.watchAll=!0),i),Ne=e=>/^\w*$/.test(e),vt=e=>he(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,s,i){let r=-1;const a=Ne(s)?[s]:vt(s),n=a.length,u=n-1;for(;++r<n;){const p=a[r];let g=i;if(r!==u){const v=e[p];g=$(v)||Array.isArray(v)?v:isNaN(+a[r+1])?{}:[]}e[p]=g,e=e[p]}return e}var bt=(e,s,i,r,a)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:a||!0}}:{};const Ue=(e,s,i)=>{for(const r of i||Object.keys(e)){const a=f(e,r);if(a){const{_f:n,...u}=a;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else $(u)&&Ue(u,s)}}};var rt=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),st=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),mr=(e,s,i)=>{const r=he(f(e,i));return _(r,"root",s[i]),_(e,i,r),e},ne=e=>typeof e=="boolean",Ie=e=>e.type==="file",J=e=>typeof e=="function",xe=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>z(e),qe=e=>e.type==="radio",me=e=>e instanceof RegExp;const it={value:!1,isValid:!1},nt={value:!0,isValid:!0};var xt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!C(e[0].attributes.value)?C(e[0].value)||e[0].value===""?nt:{value:e[0].value,isValid:!0}:nt:it}return it};const ot={isValid:!1,value:null};var mt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ot):ot;function at(e,s,i="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||ne(e)&&!e)return{type:i,message:ve(e)?e:"",ref:s}}var se=e=>$(e)&&!me(e)?e:{value:e,message:""},lt=async(e,s,i,r,a)=>{const{ref:n,refs:u,required:p,maxLength:g,minLength:v,min:D,max:A,pattern:x,validate:K,name:M,valueAsNumber:Fe,mount:ge,disabled:ke}=e._f,b=f(s,M);if(!ge||ke)return{};const B=u?u[0]:n,H=V=>{r&&B.reportValidity&&(B.setCustomValidity(ne(V)?"":V||""),B.reportValidity())},E={},oe=qe(n),ae=ye(n),Se=oe||ae,N=(Fe||Ie(n))&&C(n.value)&&C(b)||xe(n)&&n.value===""||b===""||Array.isArray(b)&&!b.length,Z=bt.bind(null,M,i,E),W=(V,m,k,j=G.maxLength,R=G.minLength)=>{const I=V?m:k;E[M]={type:V?j:R,message:I,ref:n,...Z(V?j:R,I)}};if(a?!Array.isArray(b)||!b.length:p&&(!Se&&(N||O(b))||ne(b)&&!b||ae&&!xt(u).isValid||oe&&!mt(u).isValid)){const{value:V,message:m}=ve(p)?{value:!!p,message:p}:se(p);if(V&&(E[M]={type:G.required,message:m,ref:B,...Z(G.required,m)},!i))return H(m),E}if(!N&&(!O(D)||!O(A))){let V,m;const k=se(A),j=se(D);if(!O(b)&&!isNaN(b)){const R=n.valueAsNumber||b&&+b;O(k.value)||(V=R>k.value),O(j.value)||(m=R<j.value)}else{const R=n.valueAsDate||new Date(b),I=ue=>new Date(new Date().toDateString()+" "+ue),ee=n.type=="time",le=n.type=="week";z(k.value)&&b&&(V=ee?I(b)>I(k.value):le?b>k.value:R>new Date(k.value)),z(j.value)&&b&&(m=ee?I(b)<I(j.value):le?b<j.value:R<new Date(j.value))}if((V||m)&&(W(!!V,k.message,j.message,G.max,G.min),!i))return H(E[M].message),E}if((g||v)&&!N&&(z(b)||a&&Array.isArray(b))){const V=se(g),m=se(v),k=!O(V.value)&&b.length>+V.value,j=!O(m.value)&&b.length<+m.value;if((k||j)&&(W(k,V.message,m.message),!i))return H(E[M].message),E}if(x&&!N&&z(b)){const{value:V,message:m}=se(x);if(me(V)&&!b.match(V)&&(E[M]={type:G.pattern,message:m,ref:n,...Z(G.pattern,m)},!i))return H(m),E}if(K){if(J(K)){const V=await K(b,s),m=at(V,B);if(m&&(E[M]={...m,...Z(G.validate,m.message)},!i))return H(m.message),E}else if($(K)){let V={};for(const m in K){if(!U(V)&&!i)break;const k=at(await K[m](b,s),B,m);k&&(V={...k,...Z(m,k.message)},H(k.message),i&&(E[M]=V))}if(!U(V)&&(E[M]={ref:B,...V},!i))return E}}return H(!0),E};function wr(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=C(e)?r++:e[s[r++]];return e}function Vr(e){for(const s in e)if(e.hasOwnProperty(s)&&!C(e[s]))return!1;return!0}function T(e,s){const i=Array.isArray(s)?s:Ne(s)?[s]:vt(s),r=i.length===1?e:wr(e,i),a=i.length-1,n=i[a];return r&&delete r[n],a!==0&&($(r)&&U(r)||Array.isArray(r)&&Vr(r))&&T(e,i.slice(0,-1)),e}function Le(){let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}}var we=e=>O(e)||!pt(e);function te(e,s){if(we(e)||we(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const a of i){const n=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const u=s[a];if(ie(n)&&ie(u)||$(n)&&$(u)||Array.isArray(n)&&Array.isArray(u)?!te(n,u):n!==u)return!1}}return!0}var wt=e=>e.type==="select-multiple",_r=e=>qe(e)||ye(e),Oe=e=>xe(e)&&e.isConnected,Vt=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function Ve(e,s={}){const i=Array.isArray(e);if($(e)||i)for(const r in e)Array.isArray(e[r])||$(e[r])&&!Vt(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ve(e[r],s[r])):O(e[r])||(s[r]=!0);return s}function _t(e,s,i){const r=Array.isArray(e);if($(e)||r)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Vt(e[a])?C(s)||we(i[a])?i[a]=Array.isArray(e[a])?Ve(e[a],[]):{...Ve(e[a])}:_t(e[a],O(s)?{}:s[a],i[a]):i[a]=!te(e[a],s[a]);return i}var je=(e,s)=>_t(e,s,Ve(s)),At=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>C(e)?e:s?e===""?NaN:e&&+e:i&&z(e)?new Date(e):r?r(e):e;function Me(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ie(s)?s.files:qe(s)?mt(e.refs).value:wt(s)?[...s.selectedOptions].map(({value:i})=>i):ye(s)?xt(e.refs).value:At(C(s.value)?e.ref.value:s.value,e)}var Ar=(e,s,i,r)=>{const a={};for(const n of e){const u=f(s,n);u&&_(a,n,u._f)}return{criteriaMode:i,names:[...e],fields:a,shouldUseNativeValidation:r}},de=e=>C(e)?e:me(e)?e.source:$(e)?me(e.value)?e.value.source:e.value:e,Fr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ut(e,s,i){const r=f(e,i);if(r||Ne(i))return{error:r,name:i};const a=i.split(".");for(;a.length;){const n=a.join("."),u=f(s,n),p=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(p&&p.type)return{name:n,error:p};a.pop()}return{name:i}}var kr=(e,s,i,r,a)=>a.isOnAll?!1:!i&&a.isOnTouch?!(s||e):(i?r.isOnBlur:a.isOnBlur)?!e:(i?r.isOnChange:a.isOnChange)?e:!0,Sr=(e,s)=>!he(f(e,s)).length&&T(e,s);const Cr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function $r(e={},s){let i={...Cr,...e},r={submitCount:0,isDirty:!1,isLoading:J(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},n=$(i.defaultValues)||$(i.values)?Q(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:Q(n),p={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v,D=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Le(),array:Le(),state:Le()},K=e.resetOptions&&e.resetOptions.keepDirtyValues,M=rt(i.mode),Fe=rt(i.reValidateMode),ge=i.criteriaMode===P.all,ke=t=>o=>{clearTimeout(D),D=setTimeout(t,o)},b=async t=>{if(A.isValid||t){const o=i.resolver?U((await N()).errors):await W(a,!0);o!==r.isValid&&x.state.next({isValid:o})}},B=t=>A.isValidating&&x.state.next({isValidating:t}),H=(t,o=[],l,y,d=!0,c=!0)=>{if(y&&l){if(p.action=!0,c&&Array.isArray(f(a,t))){const h=l(f(a,t),y.argA,y.argB);d&&_(a,t,h)}if(c&&Array.isArray(f(r.errors,t))){const h=l(f(r.errors,t),y.argA,y.argB);d&&_(r.errors,t,h),Sr(r.errors,t)}if(A.touchedFields&&c&&Array.isArray(f(r.touchedFields,t))){const h=l(f(r.touchedFields,t),y.argA,y.argB);d&&_(r.touchedFields,t,h)}A.dirtyFields&&(r.dirtyFields=je(n,u)),x.state.next({name:t,isDirty:m(t,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else _(u,t,o)},E=(t,o)=>{_(r.errors,t,o),x.state.next({errors:r.errors})},oe=(t,o,l,y)=>{const d=f(a,t);if(d){const c=f(u,t,C(l)?f(n,t):l);C(c)||y&&y.defaultChecked||o?_(u,t,o?c:Me(d._f)):R(t,c),p.mount&&b()}},ae=(t,o,l,y,d)=>{let c=!1,h=!1;const F={name:t};if(!l||y){A.isDirty&&(h=r.isDirty,r.isDirty=F.isDirty=m(),c=h!==F.isDirty);const S=te(f(n,t),o);h=f(r.dirtyFields,t),S?T(r.dirtyFields,t):_(r.dirtyFields,t,!0),F.dirtyFields=r.dirtyFields,c=c||A.dirtyFields&&h!==!S}if(l){const S=f(r.touchedFields,t);S||(_(r.touchedFields,t,l),F.touchedFields=r.touchedFields,c=c||A.touchedFields&&S!==l)}return c&&d&&x.state.next(F),c?F:{}},Se=(t,o,l,y)=>{const d=f(r.errors,t),c=A.isValid&&ne(o)&&r.isValid!==o;if(e.delayError&&l?(v=ke(()=>E(t,l)),v(e.delayError)):(clearTimeout(D),v=null,l?_(r.errors,t,l):T(r.errors,t)),(l?!te(d,l):d)||!U(y)||c){const h={...y,...c&&ne(o)?{isValid:o}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}B(!1)},N=async t=>i.resolver(u,i.context,Ar(t||g.mount,a,i.criteriaMode,i.shouldUseNativeValidation)),Z=async t=>{const{errors:o}=await N();if(t)for(const l of t){const y=f(o,l);y?_(r.errors,l,y):T(r.errors,l)}else r.errors=o;return o},W=async(t,o,l={valid:!0})=>{for(const y in t){const d=t[y];if(d){const{_f:c,...h}=d;if(c){const F=g.array.has(c.name),S=await lt(d,u,ge,i.shouldUseNativeValidation&&!o,F);if(S[c.name]&&(l.valid=!1,o))break;!o&&(f(S,c.name)?F?mr(r.errors,S,c.name):_(r.errors,c.name,S[c.name]):T(r.errors,c.name))}h&&await W(h,o,l)}}return l.valid},V=()=>{for(const t of g.unMount){const o=f(a,t);o&&(o._f.refs?o._f.refs.every(l=>!Oe(l)):!Oe(o._f.ref))&&Ce(t)}g.unMount=new Set},m=(t,o)=>(t&&o&&_(u,t,o),!te(ze(),n)),k=(t,o,l)=>xr(t,g,{...p.mount?u:C(o)?n:z(t)?{[t]:o}:o},l,o),j=t=>he(f(p.mount?u:n,t,e.shouldUnregister?f(n,t,[]):[])),R=(t,o,l={})=>{const y=f(a,t);let d=o;if(y){const c=y._f;c&&(!c.disabled&&_(u,t,At(o,c)),d=xe(c.ref)&&O(o)?"":o,wt(c.ref)?[...c.ref.options].forEach(h=>h.selected=d.includes(h.value)):c.refs?ye(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(F=>F===h.value):d===h.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(h=>h.checked=h.value===d):Ie(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||x.values.next({name:t,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ae(t,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(t)},I=(t,o,l)=>{for(const y in o){const d=o[y],c=`${t}.${y}`,h=f(a,c);(g.array.has(t)||!we(d)||h&&!h._f)&&!ie(d)?I(c,d,l):R(c,d,l)}},ee=(t,o,l={})=>{const y=f(a,t),d=g.array.has(t),c=Q(o);_(u,t,c),d?(x.array.next({name:t,values:{...u}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&x.state.next({name:t,dirtyFields:je(n,u),isDirty:m(t,c)})):y&&!y._f&&!O(c)?I(t,c,l):R(t,c,l),st(t,g)&&x.state.next({...r}),x.values.next({name:t,values:{...u}}),!p.mount&&s()},le=async t=>{const o=t.target;let l=o.name,y=!0;const d=f(a,l),c=()=>o.type?Me(d._f):fr(t);if(d){let h,F;const S=c(),re=t.type===tt.BLUR||t.type===tt.FOCUS_OUT,Lt=!Fr(d._f)&&!i.resolver&&!f(r.errors,l)&&!d._f.deps||kr(re,f(r.touchedFields,l),r.isSubmitted,Fe,M),De=st(l,g,re);_(u,l,S),re?(d._f.onBlur&&d._f.onBlur(t),v&&v(0)):d._f.onChange&&d._f.onChange(t);const Ee=ae(l,S,re,!1),Ot=!U(Ee)||De;if(!re&&x.values.next({name:l,type:t.type,values:{...u}}),Lt)return A.isValid&&b(),Ot&&x.state.next({name:l,...De?{}:Ee});if(!re&&De&&x.state.next({...r}),B(!0),i.resolver){const{errors:Je}=await N([l]),jt=ut(r.errors,a,l),Xe=ut(Je,a,jt.name||l);h=Xe.error,l=Xe.name,F=U(Je)}else h=(await lt(d,u,ge,i.shouldUseNativeValidation))[l],y=isNaN(S)||S===f(u,l,S),y&&(h?F=!1:A.isValid&&(F=await W(a,!0)));y&&(d._f.deps&&ue(d._f.deps),Se(l,F,h,Ee))}},ue=async(t,o={})=>{let l,y;const d=Te(t);if(B(!0),i.resolver){const c=await Z(C(t)?t:d);l=U(c),y=t?!d.some(h=>f(c,h)):l}else t?(y=(await Promise.all(d.map(async c=>{const h=f(a,c);return await W(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&b()):y=l=await W(a);return x.state.next({...!z(t)||A.isValid&&l!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!y&&Ue(a,c=>c&&f(r.errors,c),t?d:g.mount),y},ze=t=>{const o={...n,...p.mount?u:{}};return C(t)?o:z(t)?f(o,t):t.map(l=>f(o,l))},He=(t,o)=>({invalid:!!f((o||r).errors,t),isDirty:!!f((o||r).dirtyFields,t),isTouched:!!f((o||r).touchedFields,t),error:f((o||r).errors,t)}),Dt=t=>{t&&Te(t).forEach(o=>T(r.errors,o)),x.state.next({errors:t?r.errors:{}})},We=(t,o,l)=>{const y=(f(a,t,{_f:{}})._f||{}).ref;_(r.errors,t,{...o,ref:y}),x.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},Et=(t,o)=>J(t)?x.values.subscribe({next:l=>t(k(void 0,o),l)}):k(t,o,!0),Ce=(t,o={})=>{for(const l of t?Te(t):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(T(a,l),T(u,l)),!o.keepError&&T(r.errors,l),!o.keepDirty&&T(r.dirtyFields,l),!o.keepTouched&&T(r.touchedFields,l),!i.shouldUnregister&&!o.keepDefaultValue&&T(n,l);x.values.next({values:{...u}}),x.state.next({...r,...o.keepDirty?{isDirty:m()}:{}}),!o.keepIsValid&&b()},$e=(t,o={})=>{let l=f(a,t);const y=ne(o.disabled);return _(a,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...o}}),g.mount.add(t),l?y&&_(u,t,o.disabled?void 0:f(u,t,Me(l._f))):oe(t,!0,o.value),{...y?{disabled:o.disabled}:{},...i.progressive?{required:!!o.required,min:de(o.min),max:de(o.max),minLength:de(o.minLength),maxLength:de(o.maxLength),pattern:de(o.pattern)}:{},name:t,onChange:le,onBlur:le,ref:d=>{if(d){$e(t,o),l=f(a,t);const c=C(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=_r(c),F=l._f.refs||[];if(h?F.find(S=>S===c):c===l._f.ref)return;_(a,t,{_f:{...l._f,...h?{refs:[...F.filter(Oe),c,...Array.isArray(f(n,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),oe(t,!1,void 0,c)}else l=f(a,t,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||o.shouldUnregister)&&!(hr(g.array,t)&&p.action)&&g.unMount.add(t)}}},Ge=()=>i.shouldFocusError&&Ue(a,t=>t&&f(r.errors,t),g.mount),Ke=(t,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=Q(u);if(x.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await N();r.errors=d,y=c}else await W(a);T(r.errors,"root"),U(r.errors)?(x.state.next({errors:{}}),await t(y,l)):(o&&await o({...r.errors},l),Ge(),setTimeout(Ge)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Tt=(t,o={})=>{f(a,t)&&(C(o.defaultValue)?ee(t,f(n,t)):(ee(t,o.defaultValue),_(n,t,o.defaultValue)),o.keepTouched||T(r.touchedFields,t),o.keepDirty||(T(r.dirtyFields,t),r.isDirty=o.defaultValue?m(t,f(n,t)):m()),o.keepError||(T(r.errors,t),A.isValid&&b()),x.state.next({...r}))},Qe=(t,o={})=>{const l=t||n,y=Q(l),d=t&&!U(t)?y:n;if(o.keepDefaultValues||(n=l),!o.keepValues){if(o.keepDirtyValues||K)for(const c of g.mount)f(r.dirtyFields,c)?_(d,c,f(u,c)):ee(c,f(d,c));else{if(Pe&&C(t))for(const c of g.mount){const h=f(a,c);if(h&&h._f){const F=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(xe(F)){const S=F.closest("form");if(S){S.reset();break}}}}a={}}u=e.shouldUnregister?o.keepDefaultValues?Q(n):{}:Q(d),x.array.next({values:{...d}}),x.values.next({values:{...d}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!p.mount&&s(),p.mount=!A.isValid||!!o.keepIsValid,p.watch=!!e.shouldUnregister,x.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!te(t,n)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&t?je(n,t):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ye=(t,o)=>Qe(J(t)?t(u):t,o);return{control:{register:$e,unregister:Ce,getFieldState:He,handleSubmit:Ke,setError:We,_executeSchema:N,_getWatch:k,_getDirty:m,_updateValid:b,_removeUnmounted:V,_updateFieldArray:H,_getFieldArray:j,_reset:Qe,_resetDefaultValues:()=>J(i.defaultValues)&&i.defaultValues().then(t=>{Ye(t,i.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:x,_proxyFormState:A,get _fields(){return a},get _formValues(){return u},get _state(){return p},set _state(t){p=t},get _defaultValues(){return n},get _names(){return g},set _names(t){g=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ue,register:$e,handleSubmit:Ke,watch:Et,setValue:ee,getValues:ze,reset:Ye,resetField:Tt,clearErrors:Dt,unregister:Ce,setError:We,setFocus:(t,o={})=>{const l=f(a,t),y=l&&l._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),o.shouldSelect&&d.select())}},getFieldState:He}}function Dr(e={}){const s=Y.useRef(),i=Y.useRef(),[r,a]=Y.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...$r(e,()=>a(u=>({...u}))),formState:r});const n=s.current.control;return n._options=e,br({subject:n._subjects.state,next:u=>{vr(u,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),Y.useEffect(()=>{e.values&&!te(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),Y.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=pr(r,n),s.current}var ct=function(e,s,i){if(e&&"reportValidity"in e){var r=f(i,s);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},Ft=function(e,s){var i=function(a){var n=s.fields[a];n&&n.ref&&"reportValidity"in n.ref?ct(n.ref,a,e):n.refs&&n.refs.forEach(function(u){return ct(u,a,e)})};for(var r in s.fields)i(r)},Er=function(e,s){s.shouldUseNativeValidation&&Ft(e,s);var i={};for(var r in e){var a=f(s.fields,r);_(i,r,Object.assign(e[r]||{},{ref:a&&a.ref}))}return i};function Tr(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(r,a,n){try{return Promise.resolve(function(u,p){try{var g=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},s,{context:a}))).then(function(v){return n.shouldUseNativeValidation&&Ft({},n),{values:i.raw?r:v,errors:{}}}))}catch(v){return p(v)}return g&&g.then?g.then(void 0,p):g}(0,function(u){if(!u.inner)throw u;return{values:{},errors:Er((p=u,g=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(p.inner||[]).reduce(function(v,D){if(v[D.path]||(v[D.path]={message:D.message,type:D.type}),g){var A=v[D.path].types,x=A&&A[D.type];v[D.path]=bt(D.path,g,v,D.type,x?[].concat(x,D.message):D.message)}return v},{})),n)};var p,g}))}catch(u){return Promise.reject(u)}}}const kt=({$w:e,$h:s,$s:i,onClick:r,type:a="button",disabled:n,children:u})=>w.jsx(zt,{$w:e,$h:s,$s:i,onClick:r,type:a,disabled:n,children:u});kt.propTypes={$w:L.string,$h:L.string,$s:L.string,onClick:L.func,type:L.string,disabled:L.oneOfType([L.bool,L.number]),children:L.oneOfType([L.string,L.node,L.oneOf(["img","png","svg"])])};const{colors:_e,radiuses:St,shadows:Lr}=fe,Or=X.form`
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${St.m};
  background-color: ${_e.white};
  box-shadow: ${Lr.auth};
`,Re=X.label`
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
    color: ${_e.error};
  }
`,Ct=Ae`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${_e.border};
  border-radius: ${St.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${_e.hovered};
  }
`,jr=X.input`
  ${Ct}
  ${ft}
`,Mr=X.input`
  ${Ct}
`,Rr=["common","study","work"],$t=({cluster:e,setIsModal:s})=>{var g;const i=Be(),{register:r,handleSubmit:a,formState:{errors:n}}=Dr({mode:"onBlur",resolver:Tr(Yt),defaultValues:{cluster:e}}),u=v=>{i(Wt(v)),s(!1)},p=v=>v.length<=50?v:v.substring(0,40).concat("...");return w.jsxs(Or,{onSubmit:a(u),children:[w.jsxs(Re,{children:[p(e),w.jsx(jr,{...r("cluster")})]}),w.jsxs(Re,{children:["Title: ",w.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),w.jsx(Mr,{...r("title")})]}),w.jsxs(Re,{children:["Group:",w.jsx(Ht,{options:Rr.map(v=>({value:v,label:v}))})]}),w.jsx(kt,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};$t.propTypes={cluster:L.string.isRequired,setIsModal:L.func.isRequired};const Ur=()=>w.jsx("div",{children:"EditClusterForm"}),{button:dt}=fe.shadows,Br=()=>{const[e,s]=be.useState(!1),[i,r]=be.useState(""),a=async u=>{const p=await Zt();try{await Jt.validate({cluster:p}),r(p),s("add")}catch(g){u.target.blur(),pe.error(`Invalid cluster, ${g.message}`)}},n=u=>{s("edit")};return w.jsxs(Gt,{$m:"10px 30px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr 1fr",children:[w.jsx(Ze,{name:"add",onClick:a,$s:"m",$bs:dt,children:"Add"}),w.jsx(Ze,{name:"edit",onClick:n,$s:"m",$bs:dt,children:"Edit"}),e&&w.jsxs(Kt,{onClick:()=>s(!1),children:[e==="add"&&w.jsx($t,{cluster:i,setIsModal:s}),e==="edit"&&w.jsx(Ur,{})]})]})},Hr=()=>{const{s:e,m:s}=fe.indents;return w.jsxs(Qt,{$p:`2px ${s} ${e}`,children:[w.jsx(dr,{}),w.jsx(Br,{})]})};export{Hr as default};
