import{Q as pe,n as Ae,s as X,t as fe,P as T,j as b,G as Nt,u as Fe,m as It,o as ft,r as de,p as qt,q as Gt,R as Y,A as zt,S as Ht,w as Wt,k as Kt,x as Qt,y as Ze,M as Yt,F as Jt}from"./index-73466739.js";import{t as Xt,g as Zt,c as er}from"./clusterSchema-0c99fade.js";const tr=(e,s)=>Array.from(new Set(e.map(i=>i[s]))),rr=async()=>{if(!navigator.clipboard){pe.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&pe.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){pe.error(e.message)}},ht=Ae`
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
`;const{colors:G,shadows:sr,indents:ir,radiuses:et}=fe,yt=Ae`
  margin: 0 ${ir.s};
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 10fr 20fr;
  grid-template-areas: '. title title';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${G.borderLight};
`,nr=X.li`
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
`,or=X.li`
  ${yt}

  transition: box-shadow 250ms, border-color 250ms;

  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${G.border};
    box-shadow: ${sr.back};
    background-color: ${G.backgroundHoverd};
  }

  & svg {
    transition: stroke 250ms;
    stroke-width: 2.5px;
    color: ${({$hoverd:e})=>e?G.yellow:"transparent"};
    stroke: ${({$hoverd:e})=>e?G.yellow:G.border};
  }
  &:hover svg {
    stroke: ${({$hoverd:e})=>!e&&G.placeholder};
    stroke-width: ${({$hoverd:e})=>!e&&"2px"};
  }

  & a {
    font-size: 16px;
    color: ${G.placeholder};

    &::before {
      counter-increment: subsection;
      content: counter(section) '.' counter(subsection) '. ';
      font-size: 14px;
      font-weight: 700;
      color: ${G.black};
    }
  }
  &:hover a {
    color: ${G.hovered};
  }
`,ar=X.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${ht}
  }
`,gt=({group:e})=>b.jsx(nr,{children:b.jsx("h2",{children:e})});gt.propTypes={group:T.string};function lr(e){return Nt({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"}}]})(e)}const pt=({el:e})=>{const s=Fe(),{_id:i,cluster:r,title:a,favorite:n}=e,u=g=>{const V=g.replace("https://","").replace("http://","");return V.length<=50?V:V.substring(0,49).concat("...")},p=()=>s(It({_id:i,favorite:!n}));return b.jsxs(or,{$hoverd:n,children:[b.jsxs(ar,{children:[b.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:p}),b.jsx(lr,{size:"18px"})]}),b.jsx("h3",{children:a}),b.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:u(r)})]})};pt.propTypes={el:T.object,$hoverd:T.bool};const{colors:ur,indents:cr,radiuses:dr}=fe,fr=X.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${cr.xl};
  counter-reset: section 0;
  background-color: ${ur.white};
  border-radius: ${dr.xl};
`,hr=()=>{const e=Fe(),{allClusters:s,clustersFilter:i}=ft();de.useEffect(()=>{e(qt()),e(Gt())},[e]);const r=[...s].filter(({cluster:n,title:u})=>n.toLowerCase().includes(i)||u.toLowerCase().includes(i)).sort((n,u)=>n.title.localeCompare(u.title)),a=tr(r,"group").sort((n,u)=>n.localeCompare(u));return b.jsx(fr,{children:a.map(n=>b.jsxs(de.Fragment,{children:[b.jsx(gt,{group:n}),r.map(u=>u.group===n&&b.jsx(pt,{el:u},u._id))]},n))})};var he=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const vt=e=>typeof e=="object";var D=e=>!O(e)&&!Array.isArray(e)&&vt(e)&&!ie(e),yr=e=>D(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,pr=(e,s)=>e.has(gr(s)),vr=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Be=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Be&&(e instanceof Blob||e instanceof FileList))&&(i||D(e)))if(s=i?[]:{},!i&&!vr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=Q(e[r]));else return e;return s}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],C=e=>e===void 0,f=(e,s,i)=>{if(!s||!D(e))return i;const r=ye(s.split(/[,[\].]+?/)).reduce((a,n)=>O(a)?a:a[n],e);return C(r)||r===e?C(e[s])?i:e[s]:r};const tt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var xr=(e,s,i,r=!0)=>{const a={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const u=n;return s._proxyFormState[u]!==N.all&&(s._proxyFormState[u]=!r||N.all),i&&(i[u]=!0),e[u]}});return a},B=e=>D(e)&&!Object.keys(e).length,br=(e,s,i,r)=>{i(e);const{name:a,...n}=e;return B(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(u=>s[u]===(!r||N.all))},je=e=>Array.isArray(e)?e:[e];function mr(e){const s=Y.useRef(e);s.current=e,Y.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var z=e=>typeof e=="string",wr=(e,s,i,r,a)=>z(e)?(r&&s.watch.add(e),f(i,e,a)):Array.isArray(e)?e.map(n=>(r&&s.watch.add(n),f(i,n))):(r&&(s.watchAll=!0),i),Pe=e=>/^\w*$/.test(e),xt=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,s,i){let r=-1;const a=Pe(s)?[s]:xt(s),n=a.length,u=n-1;for(;++r<n;){const p=a[r];let g=i;if(r!==u){const V=e[p];g=D(V)||Array.isArray(V)?V:isNaN(+a[r+1])?{}:[]}e[p]=g,e=e[p]}return e}var bt=(e,s,i,r,a)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:a||!0}}:{};const Ue=(e,s,i)=>{for(const r of i||Object.keys(e)){const a=f(e,r);if(a){const{_f:n,...u}=a;if(n&&s(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else D(u)&&Ue(u,s)}}};var rt=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),st=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Vr=(e,s,i)=>{const r=ye(f(e,i));return _(r,"root",s[i]),_(e,i,r),e},ne=e=>typeof e=="boolean",Ne=e=>e.type==="file",J=e=>typeof e=="function",be=e=>{if(!Be)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>z(e),Ie=e=>e.type==="radio",me=e=>e instanceof RegExp;const it={value:!1,isValid:!1},nt={value:!0,isValid:!0};var mt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!C(e[0].attributes.value)?C(e[0].value)||e[0].value===""?nt:{value:e[0].value,isValid:!0}:nt:it}return it};const ot={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ot):ot;function at(e,s,i="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||ne(e)&&!e)return{type:i,message:ve(e)?e:"",ref:s}}var se=e=>D(e)&&!me(e)?e:{value:e,message:""},lt=async(e,s,i,r,a)=>{const{ref:n,refs:u,required:p,maxLength:g,minLength:V,min:$,max:A,pattern:v,validate:L,name:R,valueAsNumber:ke,mount:ge,disabled:Se}=e._f,x=f(s,R);if(!ge||Se)return{};const P=u?u[0]:n,H=w=>{r&&P.reportValidity&&(P.setCustomValidity(ne(w)?"":w||""),P.reportValidity())},E={},oe=Ie(n),ae=he(n),$e=oe||ae,I=(ke||Ne(n))&&C(n.value)&&C(x)||be(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,Z=bt.bind(null,R,i,E),W=(w,m,k,M=K.maxLength,U=K.minLength)=>{const q=w?m:k;E[R]={type:w?M:U,message:q,ref:n,...Z(w?M:U,q)}};if(a?!Array.isArray(x)||!x.length:p&&(!$e&&(I||O(x))||ne(x)&&!x||ae&&!mt(u).isValid||oe&&!wt(u).isValid)){const{value:w,message:m}=ve(p)?{value:!!p,message:p}:se(p);if(w&&(E[R]={type:K.required,message:m,ref:P,...Z(K.required,m)},!i))return H(m),E}if(!I&&(!O($)||!O(A))){let w,m;const k=se(A),M=se($);if(!O(x)&&!isNaN(x)){const U=n.valueAsNumber||x&&+x;O(k.value)||(w=U>k.value),O(M.value)||(m=U<M.value)}else{const U=n.valueAsDate||new Date(x),q=ue=>new Date(new Date().toDateString()+" "+ue),ee=n.type=="time",le=n.type=="week";z(k.value)&&x&&(w=ee?q(x)>q(k.value):le?x>k.value:U>new Date(k.value)),z(M.value)&&x&&(m=ee?q(x)<q(M.value):le?x<M.value:U<new Date(M.value))}if((w||m)&&(W(!!w,k.message,M.message,K.max,K.min),!i))return H(E[R].message),E}if((g||V)&&!I&&(z(x)||a&&Array.isArray(x))){const w=se(g),m=se(V),k=!O(w.value)&&x.length>+w.value,M=!O(m.value)&&x.length<+m.value;if((k||M)&&(W(k,w.message,m.message),!i))return H(E[R].message),E}if(v&&!I&&z(x)){const{value:w,message:m}=se(v);if(me(w)&&!x.match(w)&&(E[R]={type:K.pattern,message:m,ref:n,...Z(K.pattern,m)},!i))return H(m),E}if(L){if(J(L)){const w=await L(x,s),m=at(w,P);if(m&&(E[R]={...m,...Z(K.validate,m.message)},!i))return H(m.message),E}else if(D(L)){let w={};for(const m in L){if(!B(w)&&!i)break;const k=at(await L[m](x,s),P,m);k&&(w={...k,...Z(m,k.message)},H(k.message),i&&(E[R]=w))}if(!B(w)&&(E[R]={ref:P,...w},!i))return E}}return H(!0),E};function _r(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=C(e)?r++:e[s[r++]];return e}function Ar(e){for(const s in e)if(e.hasOwnProperty(s)&&!C(e[s]))return!1;return!0}function j(e,s){const i=Array.isArray(s)?s:Pe(s)?[s]:xt(s),r=i.length===1?e:_r(e,i),a=i.length-1,n=i[a];return r&&delete r[n],a!==0&&(D(r)&&B(r)||Array.isArray(r)&&Ar(r))&&j(e,i.slice(0,-1)),e}function Le(){let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}}var we=e=>O(e)||!vt(e);function te(e,s){if(we(e)||we(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const a of i){const n=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const u=s[a];if(ie(n)&&ie(u)||D(n)&&D(u)||Array.isArray(n)&&Array.isArray(u)?!te(n,u):n!==u)return!1}}return!0}var Vt=e=>e.type==="select-multiple",Fr=e=>Ie(e)||he(e),Oe=e=>be(e)&&e.isConnected,_t=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function Ve(e,s={}){const i=Array.isArray(e);if(D(e)||i)for(const r in e)Array.isArray(e[r])||D(e[r])&&!_t(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ve(e[r],s[r])):O(e[r])||(s[r]=!0);return s}function At(e,s,i){const r=Array.isArray(e);if(D(e)||r)for(const a in e)Array.isArray(e[a])||D(e[a])&&!_t(e[a])?C(s)||we(i[a])?i[a]=Array.isArray(e[a])?Ve(e[a],[]):{...Ve(e[a])}:At(e[a],O(s)?{}:s[a],i[a]):i[a]=!te(e[a],s[a]);return i}var Me=(e,s)=>At(e,s,Ve(s)),Ft=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>C(e)?e:s?e===""?NaN:e&&+e:i&&z(e)?new Date(e):r?r(e):e;function Re(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Ne(s)?s.files:Ie(s)?wt(e.refs).value:Vt(s)?[...s.selectedOptions].map(({value:i})=>i):he(s)?mt(e.refs).value:Ft(C(s.value)?e.ref.value:s.value,e)}var kr=(e,s,i,r)=>{const a={};for(const n of e){const u=f(s,n);u&&_(a,n,u._f)}return{criteriaMode:i,names:[...e],fields:a,shouldUseNativeValidation:r}},ce=e=>C(e)?e:me(e)?e.source:D(e)?me(e.value)?e.value.source:e.value:e,Sr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ut(e,s,i){const r=f(e,i);if(r||Pe(i))return{error:r,name:i};const a=i.split(".");for(;a.length;){const n=a.join("."),u=f(s,n),p=f(e,n);if(u&&!Array.isArray(u)&&i!==n)return{name:i};if(p&&p.type)return{name:n,error:p};a.pop()}return{name:i}}var $r=(e,s,i,r,a)=>a.isOnAll?!1:!i&&a.isOnTouch?!(s||e):(i?r.isOnBlur:a.isOnBlur)?!e:(i?r.isOnChange:a.isOnChange)?e:!0,Cr=(e,s)=>!ye(f(e,s)).length&&j(e,s);const Dr={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function Er(e={},s){let i={...Dr,...e},r={submitCount:0,isDirty:!1,isLoading:J(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},n=D(i.defaultValues)||D(i.values)?Q(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:Q(n),p={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,$=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Le(),array:Le(),state:Le()},L=e.resetOptions&&e.resetOptions.keepDirtyValues,R=rt(i.mode),ke=rt(i.reValidateMode),ge=i.criteriaMode===N.all,Se=t=>o=>{clearTimeout($),$=setTimeout(t,o)},x=async t=>{if(A.isValid||t){const o=i.resolver?B((await I()).errors):await W(a,!0);o!==r.isValid&&v.state.next({isValid:o})}},P=t=>A.isValidating&&v.state.next({isValidating:t}),H=(t,o=[],l,h,d=!0,c=!0)=>{if(h&&l){if(p.action=!0,c&&Array.isArray(f(a,t))){const y=l(f(a,t),h.argA,h.argB);d&&_(a,t,y)}if(c&&Array.isArray(f(r.errors,t))){const y=l(f(r.errors,t),h.argA,h.argB);d&&_(r.errors,t,y),Cr(r.errors,t)}if(A.touchedFields&&c&&Array.isArray(f(r.touchedFields,t))){const y=l(f(r.touchedFields,t),h.argA,h.argB);d&&_(r.touchedFields,t,y)}A.dirtyFields&&(r.dirtyFields=Me(n,u)),v.state.next({name:t,isDirty:m(t,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else _(u,t,o)},E=(t,o)=>{_(r.errors,t,o),v.state.next({errors:r.errors})},oe=(t,o,l,h)=>{const d=f(a,t);if(d){const c=f(u,t,C(l)?f(n,t):l);C(c)||h&&h.defaultChecked||o?_(u,t,o?c:Re(d._f)):U(t,c),p.mount&&x()}},ae=(t,o,l,h,d)=>{let c=!1,y=!1;const F={name:t};if(!l||h){A.isDirty&&(y=r.isDirty,r.isDirty=F.isDirty=m(),c=y!==F.isDirty);const S=te(f(n,t),o);y=f(r.dirtyFields,t),S?j(r.dirtyFields,t):_(r.dirtyFields,t,!0),F.dirtyFields=r.dirtyFields,c=c||A.dirtyFields&&y!==!S}if(l){const S=f(r.touchedFields,t);S||(_(r.touchedFields,t,l),F.touchedFields=r.touchedFields,c=c||A.touchedFields&&S!==l)}return c&&d&&v.state.next(F),c?F:{}},$e=(t,o,l,h)=>{const d=f(r.errors,t),c=A.isValid&&ne(o)&&r.isValid!==o;if(e.delayError&&l?(V=Se(()=>E(t,l)),V(e.delayError)):(clearTimeout($),V=null,l?_(r.errors,t,l):j(r.errors,t)),(l?!te(d,l):d)||!B(h)||c){const y={...h,...c&&ne(o)?{isValid:o}:{},errors:r.errors,name:t};r={...r,...y},v.state.next(y)}P(!1)},I=async t=>i.resolver(u,i.context,kr(t||g.mount,a,i.criteriaMode,i.shouldUseNativeValidation)),Z=async t=>{const{errors:o}=await I();if(t)for(const l of t){const h=f(o,l);h?_(r.errors,l,h):j(r.errors,l)}else r.errors=o;return o},W=async(t,o,l={valid:!0})=>{for(const h in t){const d=t[h];if(d){const{_f:c,...y}=d;if(c){const F=g.array.has(c.name),S=await lt(d,u,ge,i.shouldUseNativeValidation&&!o,F);if(S[c.name]&&(l.valid=!1,o))break;!o&&(f(S,c.name)?F?Vr(r.errors,S,c.name):_(r.errors,c.name,S[c.name]):j(r.errors,c.name))}y&&await W(y,o,l)}}return l.valid},w=()=>{for(const t of g.unMount){const o=f(a,t);o&&(o._f.refs?o._f.refs.every(l=>!Oe(l)):!Oe(o._f.ref))&&Ce(t)}g.unMount=new Set},m=(t,o)=>(t&&o&&_(u,t,o),!te(Ge(),n)),k=(t,o,l)=>wr(t,g,{...p.mount?u:C(o)?n:z(t)?{[t]:o}:o},l,o),M=t=>ye(f(p.mount?u:n,t,e.shouldUnregister?f(n,t,[]):[])),U=(t,o,l={})=>{const h=f(a,t);let d=o;if(h){const c=h._f;c&&(!c.disabled&&_(u,t,Ft(o,c)),d=be(c.ref)&&O(o)?"":o,Vt(c.ref)?[...c.ref.options].forEach(y=>y.selected=d.includes(y.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(d)?!!d.find(F=>F===y.value):d===y.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(y=>y.checked=y.value===d):Ne(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||v.values.next({name:t,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ae(t,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(t)},q=(t,o,l)=>{for(const h in o){const d=o[h],c=`${t}.${h}`,y=f(a,c);(g.array.has(t)||!we(d)||y&&!y._f)&&!ie(d)?q(c,d,l):U(c,d,l)}},ee=(t,o,l={})=>{const h=f(a,t),d=g.array.has(t),c=Q(o);_(u,t,c),d?(v.array.next({name:t,values:{...u}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&v.state.next({name:t,dirtyFields:Me(n,u),isDirty:m(t,c)})):h&&!h._f&&!O(c)?q(t,c,l):U(t,c,l),st(t,g)&&v.state.next({...r}),v.values.next({name:t,values:{...u}}),!p.mount&&s()},le=async t=>{const o=t.target;let l=o.name,h=!0;const d=f(a,l),c=()=>o.type?Re(d._f):yr(t);if(d){let y,F;const S=c(),re=t.type===tt.BLUR||t.type===tt.FOCUS_OUT,Ut=!Sr(d._f)&&!i.resolver&&!f(r.errors,l)&&!d._f.deps||$r(re,f(r.touchedFields,l),r.isSubmitted,ke,R),Ee=st(l,g,re);_(u,l,S),re?(d._f.onBlur&&d._f.onBlur(t),V&&V(0)):d._f.onChange&&d._f.onChange(t);const Te=ae(l,S,re,!1),Bt=!B(Te)||Ee;if(!re&&v.values.next({name:l,type:t.type,values:{...u}}),Ut)return A.isValid&&x(),Bt&&v.state.next({name:l,...Ee?{}:Te});if(!re&&Ee&&v.state.next({...r}),P(!0),i.resolver){const{errors:Je}=await I([l]),Pt=ut(r.errors,a,l),Xe=ut(Je,a,Pt.name||l);y=Xe.error,l=Xe.name,F=B(Je)}else y=(await lt(d,u,ge,i.shouldUseNativeValidation))[l],h=isNaN(S)||S===f(u,l,S),h&&(y?F=!1:A.isValid&&(F=await W(a,!0)));h&&(d._f.deps&&ue(d._f.deps),$e(l,F,y,Te))}},ue=async(t,o={})=>{let l,h;const d=je(t);if(P(!0),i.resolver){const c=await Z(C(t)?t:d);l=B(c),h=t?!d.some(y=>f(c,y)):l}else t?(h=(await Promise.all(d.map(async c=>{const y=f(a,c);return await W(y&&y._f?{[c]:y}:y)}))).every(Boolean),!(!h&&!r.isValid)&&x()):h=l=await W(a);return v.state.next({...!z(t)||A.isValid&&l!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!h&&Ue(a,c=>c&&f(r.errors,c),t?d:g.mount),h},Ge=t=>{const o={...n,...p.mount?u:{}};return C(t)?o:z(t)?f(o,t):t.map(l=>f(o,l))},ze=(t,o)=>({invalid:!!f((o||r).errors,t),isDirty:!!f((o||r).dirtyFields,t),isTouched:!!f((o||r).touchedFields,t),error:f((o||r).errors,t)}),Ot=t=>{t&&je(t).forEach(o=>j(r.errors,o)),v.state.next({errors:t?r.errors:{}})},He=(t,o,l)=>{const h=(f(a,t,{_f:{}})._f||{}).ref;_(r.errors,t,{...o,ref:h}),v.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},Mt=(t,o)=>J(t)?v.values.subscribe({next:l=>t(k(void 0,o),l)}):k(t,o,!0),Ce=(t,o={})=>{for(const l of t?je(t):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(j(a,l),j(u,l)),!o.keepError&&j(r.errors,l),!o.keepDirty&&j(r.dirtyFields,l),!o.keepTouched&&j(r.touchedFields,l),!i.shouldUnregister&&!o.keepDefaultValue&&j(n,l);v.values.next({values:{...u}}),v.state.next({...r,...o.keepDirty?{isDirty:m()}:{}}),!o.keepIsValid&&x()},De=(t,o={})=>{let l=f(a,t);const h=ne(o.disabled);return _(a,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...o}}),g.mount.add(t),l?h&&_(u,t,o.disabled?void 0:f(u,t,Re(l._f))):oe(t,!0,o.value),{...h?{disabled:o.disabled}:{},...i.progressive?{required:!!o.required,min:ce(o.min),max:ce(o.max),minLength:ce(o.minLength),maxLength:ce(o.maxLength),pattern:ce(o.pattern)}:{},name:t,onChange:le,onBlur:le,ref:d=>{if(d){De(t,o),l=f(a,t);const c=C(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,y=Fr(c),F=l._f.refs||[];if(y?F.find(S=>S===c):c===l._f.ref)return;_(a,t,{_f:{...l._f,...y?{refs:[...F.filter(Oe),c,...Array.isArray(f(n,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),oe(t,!1,void 0,c)}else l=f(a,t,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||o.shouldUnregister)&&!(pr(g.array,t)&&p.action)&&g.unMount.add(t)}}},We=()=>i.shouldFocusError&&Ue(a,t=>t&&f(r.errors,t),g.mount),Ke=(t,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=Q(u);if(v.state.next({isSubmitting:!0}),i.resolver){const{errors:d,values:c}=await I();r.errors=d,h=c}else await W(a);j(r.errors,"root"),B(r.errors)?(v.state.next({errors:{}}),await t(h,l)):(o&&await o({...r.errors},l),We(),setTimeout(We)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Rt=(t,o={})=>{f(a,t)&&(C(o.defaultValue)?ee(t,f(n,t)):(ee(t,o.defaultValue),_(n,t,o.defaultValue)),o.keepTouched||j(r.touchedFields,t),o.keepDirty||(j(r.dirtyFields,t),r.isDirty=o.defaultValue?m(t,f(n,t)):m()),o.keepError||(j(r.errors,t),A.isValid&&x()),v.state.next({...r}))},Qe=(t,o={})=>{const l=t||n,h=Q(l),d=t&&!B(t)?h:n;if(o.keepDefaultValues||(n=l),!o.keepValues){if(o.keepDirtyValues||L)for(const c of g.mount)f(r.dirtyFields,c)?_(d,c,f(u,c)):ee(c,f(d,c));else{if(Be&&C(t))for(const c of g.mount){const y=f(a,c);if(y&&y._f){const F=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(be(F)){const S=F.closest("form");if(S){S.reset();break}}}}a={}}u=e.shouldUnregister?o.keepDefaultValues?Q(n):{}:Q(d),v.array.next({values:{...d}}),v.values.next({values:{...d}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!p.mount&&s(),p.mount=!A.isValid||!!o.keepIsValid,p.watch=!!e.shouldUnregister,v.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!te(t,n)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&t?Me(n,t):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ye=(t,o)=>Qe(J(t)?t(u):t,o);return{control:{register:De,unregister:Ce,getFieldState:ze,handleSubmit:Ke,setError:He,_executeSchema:I,_getWatch:k,_getDirty:m,_updateValid:x,_removeUnmounted:w,_updateFieldArray:H,_getFieldArray:M,_reset:Qe,_resetDefaultValues:()=>J(i.defaultValues)&&i.defaultValues().then(t=>{Ye(t,i.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:v,_proxyFormState:A,get _fields(){return a},get _formValues(){return u},get _state(){return p},set _state(t){p=t},get _defaultValues(){return n},get _names(){return g},set _names(t){g=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ue,register:De,handleSubmit:Ke,watch:Mt,setValue:ee,getValues:Ge,reset:Ye,resetField:Rt,clearErrors:Ot,unregister:Ce,setError:He,setFocus:(t,o={})=>{const l=f(a,t),h=l&&l._f;if(h){const d=h.refs?h.refs[0]:h.ref;d.focus&&(d.focus(),o.shouldSelect&&d.select())}},getFieldState:ze}}function kt(e={}){const s=Y.useRef(),i=Y.useRef(),[r,a]=Y.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Er(e,()=>a(u=>({...u}))),formState:r});const n=s.current.control;return n._options=e,mr({subject:n._subjects.state,next:u=>{br(u,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),Y.useEffect(()=>{e.values&&!te(e.values,i.current)?(n._reset(e.values,n._options.resetOptions),i.current=e.values):n._resetDefaultValues()},[e.values,n]),Y.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),s.current.formState=xr(r,n),s.current}var ct=function(e,s,i){if(e&&"reportValidity"in e){var r=f(i,s);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},St=function(e,s){var i=function(a){var n=s.fields[a];n&&n.ref&&"reportValidity"in n.ref?ct(n.ref,a,e):n.refs&&n.refs.forEach(function(u){return ct(u,a,e)})};for(var r in s.fields)i(r)},Tr=function(e,s){s.shouldUseNativeValidation&&St(e,s);var i={};for(var r in e){var a=f(s.fields,r);_(i,r,Object.assign(e[r]||{},{ref:a&&a.ref}))}return i};function $t(e,s,i){return s===void 0&&(s={}),i===void 0&&(i={}),function(r,a,n){try{return Promise.resolve(function(u,p){try{var g=(s.context,Promise.resolve(e[i.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},s,{context:a}))).then(function(V){return n.shouldUseNativeValidation&&St({},n),{values:i.raw?r:V,errors:{}}}))}catch(V){return p(V)}return g&&g.then?g.then(void 0,p):g}(0,function(u){if(!u.inner)throw u;return{values:{},errors:Tr((p=u,g=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(p.inner||[]).reduce(function(V,$){if(V[$.path]||(V[$.path]={message:$.message,type:$.type}),g){var A=V[$.path].types,v=A&&A[$.type];V[$.path]=bt($.path,g,V,$.type,v?[].concat(v,$.message):$.message)}return V},{})),n)};var p,g}))}catch(u){return Promise.reject(u)}}}const qe=({$w:e,$h:s,$s:i,onClick:r,type:a="button",disabled:n,children:u})=>b.jsx(zt,{$w:e,$h:s,$s:i,onClick:r,type:a,disabled:n,children:u});qe.propTypes={$w:T.string,$h:T.string,$s:T.string,onClick:T.func,type:T.string,disabled:T.oneOfType([T.bool,T.number]),children:T.oneOfType([T.string,T.node,T.oneOf(["img","png","svg"])])};const{colors:_e,radiuses:Ct,shadows:jr}=fe,Dt=X.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${Ct.m};
  background-color: ${_e.white};
  box-shadow: ${jr.auth};
`,xe=X.label`
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
    color: ${_e.error};
  }
`,Et=Ae`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${_e.border};
  border-radius: ${Ct.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${_e.hovered};
  }
`,Lr=X.input`
  ${Et}
  ${ht}
`,Tt=X.input`
  ${Et}
`,jt=({cluster:e,setIsModal:s})=>{var v;const i=Fe(),[r,a]=de.useState(""),{clusterGroups:n}=ft(),{register:u,handleSubmit:p,formState:{errors:g}}=kt({mode:"onBlur",resolver:$t(Xt),defaultValues:{cluster:e}}),V=L=>{i(Wt({...L,...r})),s(!1)},$=n.map(({clusterGroup:L})=>({value:L,label:L})),A=L=>a({group:L?L.value:""});return b.jsxs(Dt,{onSubmit:p(V),children:[b.jsxs(xe,{children:[e.length<=39?e:e.substring(0,39)+"...",b.jsx(Lr,{...u("cluster")})]}),b.jsxs(xe,{children:["Title ",b.jsxs("span",{children:[" ",(v=g.title)==null?void 0:v.message]}),b.jsx(Tt,{...u("title")})]}),b.jsxs(xe,{children:["Group",b.jsx(Ht,{options:$,onChange:A,isClearable:r})]}),b.jsx(qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};jt.propTypes={cluster:T.string.isRequired,setIsModal:T.func.isRequired};const Lt=({setIsModal:e})=>{var u;const s=Fe(),{register:i,handleSubmit:r,formState:{errors:a}}=kt({mode:"onBlur",resolver:$t(Zt)}),n=p=>{s(Kt(p)),e(!1)};return b.jsxs(Dt,{onSubmit:r(n),children:[b.jsxs(xe,{children:["Group ",b.jsxs("span",{children:[" ",(u=a.clusterGroup)==null?void 0:u.message]}),b.jsx(Tt,{...i("clusterGroup")})]}),b.jsx(qe,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Lt.propTypes={setIsModal:T.func.isRequired};const{button:dt}=fe.shadows,Or=()=>{const[e,s]=de.useState(!1),[i,r]=de.useState(""),a=async u=>{const p=await rr();try{await er.validate({cluster:p}),r(p),s("add")}catch(g){u.target.blur(),pe.error(`Invalid cluster, ${g.message}`)}},n=()=>{s("edit")};return b.jsxs(Qt,{$m:"10px 30px",$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr 1fr",children:[b.jsx(Ze,{name:"add",onClick:a,$s:"m",$bs:dt,children:"Add"}),b.jsx(Ze,{name:"edit",onClick:n,$s:"m",$bs:dt,children:"Edit"}),e&&b.jsxs(Yt,{onClick:()=>s(!1),children:[e==="add"&&b.jsx(jt,{cluster:i,setIsModal:s}),e==="edit"&&b.jsx(Lt,{setIsModal:s})]})]})},Nr=()=>{const{s:e,m:s}=fe.indents;return b.jsxs(Jt,{$p:`2px ${s} ${e}`,children:[b.jsx(hr,{}),b.jsx(Or,{})]})};export{Nr as default};
