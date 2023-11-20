import{e as ie,Q as pe,s as H,n as Ae,t as E,P as L,j as p,u as Be,r as xe,f as Lt,R as Y,A as Ot,i as Rt,k as Ze,F as Mt,B as et}from"./index-b5c1926b.js";import{C as Bt}from"./ControlBar-795f977d.js";import{e as Ut,G as Nt,g as Pt,M as It}from"./Modal-f50f601c.js";const zt=e=>e.clusters.items,qt=e=>e.clusters.activeItem,dt=e=>e.clusters.filter,Ht=e=>e.clusters.isLoading,Wt=e=>e.clusters.error,ht=()=>{const e=ie(zt),i=ie(qt),s=ie(dt),t=ie(Wt),a=ie(Ht);return{allClusters:e,activeCluster:i,clustersFilter:s,error:t,isLoading:a}},Gt=(e,i)=>Array.from(new Set(e.map(s=>s[i]))),Kt=async()=>{if(!navigator.clipboard){pe.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&pe.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){pe.error(e.message)}},Xt=H.ol`
  width: 100%;
  counter-reset: section 0;
`,yt=Ae`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 6fr 10fr 1fr;
  grid-template-areas: 'title title title';
  align-items: baseline;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`,Qt=H.li`
  ${yt}
  counter-reset: subsection;

  justify-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;

  & h2 {
    grid-area: title;
    font-size: 18px;
    text-transform: uppercase;
  }

  & h2::before {
    counter-increment: section;
    content: 'Section ' counter(section) '. ';
    text-transform: capitalize;
  }
`,Yt=H.li`
  ${yt}

  & h3 {
    font-size: 18px;
  }

  & a::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${E.colors.black};
  }

  & span {
    justify-self: right;
    font-weight: 700;
  }
`,gt=({$el:e})=>{const i=s=>{const t=s.replace("https://","").replace("http://","");return t.length<=50?t:t.substring(0,49).concat("...")};return p.jsxs(Yt,{children:[p.jsx("h3",{children:e.title}),p.jsx("a",{href:e.cluster,target:"_blank",rel:"noopener noreferrer",children:i(e.cluster)}),e.checked&&p.jsx("span",{children:"OK"})]})};gt.propTypes={$el:L.object};const Jt=()=>{const e=Be(),{allClusters:i,clustersFilter:s}=ht(),t=i.filter(n=>n.cluster.toLowerCase().includes(s)||n.title.toLowerCase().includes(s)||n.group.toLowerCase().includes(s)),a=Gt(t,"group");return xe.useEffect(()=>{e(Lt())},[e]),p.jsx(Xt,{children:a.map(n=>p.jsxs(xe.Fragment,{children:[p.jsx(Qt,{children:p.jsx("h2",{children:n})}),t.map(c=>c.group===n&&p.jsx(gt,{$el:c},c._id))]},n))})};var he=e=>e.type==="checkbox",ne=e=>e instanceof Date,O=e=>e==null;const pt=e=>typeof e=="object";var $=e=>!O(e)&&!Array.isArray(e)&&pt(e)&&!ne(e),Zt=e=>$(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,er=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tr=(e,i)=>e.has(er(i)),rr=e=>{const i=e.constructor&&e.constructor.prototype;return $(i)&&i.hasOwnProperty("isPrototypeOf")},Ue=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ue&&(e instanceof Blob||e instanceof FileList))&&(s||$(e)))if(i=s?[]:{},!s&&!rr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=Q(e[t]));else return e;return i}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,d=(e,i,s)=>{if(!i||!$(e))return s;const t=ye(i.split(/[,[\].]+?/)).reduce((a,n)=>O(a)?a:a[n],e);return D(t)||t===e?D(e[i])?s:e[i]:t};const tt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var sr=(e,i,s,t=!0)=>{const a={defaultValues:i._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const c=n;return i._proxyFormState[c]!==P.all&&(i._proxyFormState[c]=!t||P.all),s&&(s[c]=!0),e[c]}});return a},U=e=>$(e)&&!Object.keys(e).length,ir=(e,i,s,t)=>{s(e);const{name:a,...n}=e;return U(n)||Object.keys(n).length>=Object.keys(i).length||Object.keys(n).find(c=>i[c]===(!t||P.all))},$e=e=>Array.isArray(e)?e:[e];function nr(e){const i=Y.useRef(e);i.current=e,Y.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var q=e=>typeof e=="string",or=(e,i,s,t,a)=>q(e)?(t&&i.watch.add(e),d(s,e,a)):Array.isArray(e)?e.map(n=>(t&&i.watch.add(n),d(s,n))):(t&&(i.watchAll=!0),s),Ne=e=>/^\w*$/.test(e),vt=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,i,s){let t=-1;const a=Ne(i)?[i]:vt(i),n=a.length,c=n-1;for(;++t<n;){const m=a[t];let g=s;if(t!==c){const A=e[m];g=$(A)||Array.isArray(A)?A:isNaN(+a[t+1])?{}:[]}e[m]=g,e=e[m]}return e}var xt=(e,i,s,t,a)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:a||!0}}:{};const Me=(e,i,s)=>{for(const t of s||Object.keys(e)){const a=d(e,t);if(a){const{_f:n,...c}=a;if(n&&i(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else $(c)&&Me(c,i)}}};var rt=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),st=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),ar=(e,i,s)=>{const t=ye(d(e,s));return _(t,"root",i[s]),_(e,s,t),e},oe=e=>typeof e=="boolean",Pe=e=>e.type==="file",J=e=>typeof e=="function",me=e=>{if(!Ue)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ve=e=>q(e),Ie=e=>e.type==="radio",be=e=>e instanceof RegExp;const it={value:!1,isValid:!1},nt={value:!0,isValid:!0};var mt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?nt:{value:e[0].value,isValid:!0}:nt:it}return it};const ot={isValid:!1,value:null};var bt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,ot):ot;function at(e,i,s="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||oe(e)&&!e)return{type:s,message:ve(e)?e:"",ref:i}}var se=e=>$(e)&&!be(e)?e:{value:e,message:""},lt=async(e,i,s,t,a)=>{const{ref:n,refs:c,required:m,maxLength:g,minLength:A,min:S,max:w,pattern:x,validate:X,name:M,valueAsNumber:_e,mount:ge,disabled:Fe}=e._f,v=d(i,M);if(!ge||Fe)return{};const N=c?c[0]:n,W=V=>{t&&N.reportValidity&&(N.setCustomValidity(oe(V)?"":V||""),N.reportValidity())},j={},ae=Ie(n),le=he(n),Se=ae||le,I=(_e||Pe(n))&&D(n.value)&&D(v)||me(n)&&n.value===""||v===""||Array.isArray(v)&&!v.length,Z=xt.bind(null,M,s,j),G=(V,b,k,R=K.maxLength,B=K.minLength)=>{const z=V?b:k;j[M]={type:V?R:B,message:z,ref:n,...Z(V?R:B,z)}};if(a?!Array.isArray(v)||!v.length:m&&(!Se&&(I||O(v))||oe(v)&&!v||le&&!mt(c).isValid||ae&&!bt(c).isValid)){const{value:V,message:b}=ve(m)?{value:!!m,message:m}:se(m);if(V&&(j[M]={type:K.required,message:b,ref:N,...Z(K.required,b)},!s))return W(b),j}if(!I&&(!O(S)||!O(w))){let V,b;const k=se(w),R=se(S);if(!O(v)&&!isNaN(v)){const B=n.valueAsNumber||v&&+v;O(k.value)||(V=B>k.value),O(R.value)||(b=B<R.value)}else{const B=n.valueAsDate||new Date(v),z=ce=>new Date(new Date().toDateString()+" "+ce),ee=n.type=="time",ue=n.type=="week";q(k.value)&&v&&(V=ee?z(v)>z(k.value):ue?v>k.value:B>new Date(k.value)),q(R.value)&&v&&(b=ee?z(v)<z(R.value):ue?v<R.value:B<new Date(R.value))}if((V||b)&&(G(!!V,k.message,R.message,K.max,K.min),!s))return W(j[M].message),j}if((g||A)&&!I&&(q(v)||a&&Array.isArray(v))){const V=se(g),b=se(A),k=!O(V.value)&&v.length>+V.value,R=!O(b.value)&&v.length<+b.value;if((k||R)&&(G(k,V.message,b.message),!s))return W(j[M].message),j}if(x&&!I&&q(v)){const{value:V,message:b}=se(x);if(be(V)&&!v.match(V)&&(j[M]={type:K.pattern,message:b,ref:n,...Z(K.pattern,b)},!s))return W(b),j}if(X){if(J(X)){const V=await X(v,i),b=at(V,N);if(b&&(j[M]={...b,...Z(K.validate,b.message)},!s))return W(b.message),j}else if($(X)){let V={};for(const b in X){if(!U(V)&&!s)break;const k=at(await X[b](v,i),N,b);k&&(V={...k,...Z(b,k.message)},W(k.message),s&&(j[M]=V))}if(!U(V)&&(j[M]={ref:N,...V},!s))return j}}return W(!0),j};function lr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=D(e)?t++:e[i[t++]];return e}function ur(e){for(const i in e)if(e.hasOwnProperty(i)&&!D(e[i]))return!1;return!0}function T(e,i){const s=Array.isArray(i)?i:Ne(i)?[i]:vt(i),t=s.length===1?e:lr(e,s),a=s.length-1,n=s[a];return t&&delete t[n],a!==0&&($(t)&&U(t)||Array.isArray(t)&&ur(t))&&T(e,s.slice(0,-1)),e}function je(){let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}}var we=e=>O(e)||!pt(e);function te(e,i){if(we(e)||we(i))return e===i;if(ne(e)&&ne(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const a of s){const n=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const c=i[a];if(ne(n)&&ne(c)||$(n)&&$(c)||Array.isArray(n)&&Array.isArray(c)?!te(n,c):n!==c)return!1}}return!0}var wt=e=>e.type==="select-multiple",cr=e=>Ie(e)||he(e),Te=e=>me(e)&&e.isConnected,Vt=e=>{for(const i in e)if(J(e[i]))return!0;return!1};function Ve(e,i={}){const s=Array.isArray(e);if($(e)||s)for(const t in e)Array.isArray(e[t])||$(e[t])&&!Vt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Ve(e[t],i[t])):O(e[t])||(i[t]=!0);return i}function At(e,i,s){const t=Array.isArray(e);if($(e)||t)for(const a in e)Array.isArray(e[a])||$(e[a])&&!Vt(e[a])?D(i)||we(s[a])?s[a]=Array.isArray(e[a])?Ve(e[a],[]):{...Ve(e[a])}:At(e[a],O(i)?{}:i[a],s[a]):s[a]=!te(e[a],i[a]);return s}var Le=(e,i)=>At(e,i,Ve(i)),_t=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>D(e)?e:i?e===""?NaN:e&&+e:s&&q(e)?new Date(e):t?t(e):e;function Oe(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Pe(i)?i.files:Ie(i)?bt(e.refs).value:wt(i)?[...i.selectedOptions].map(({value:s})=>s):he(i)?mt(e.refs).value:_t(D(i.value)?e.ref.value:i.value,e)}var fr=(e,i,s,t)=>{const a={};for(const n of e){const c=d(i,n);c&&_(a,n,c._f)}return{criteriaMode:s,names:[...e],fields:a,shouldUseNativeValidation:t}},fe=e=>D(e)?e:be(e)?e.source:$(e)?be(e.value)?e.value.source:e.value:e,dr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ut(e,i,s){const t=d(e,s);if(t||Ne(s))return{error:t,name:s};const a=s.split(".");for(;a.length;){const n=a.join("."),c=d(i,n),m=d(e,n);if(c&&!Array.isArray(c)&&s!==n)return{name:s};if(m&&m.type)return{name:n,error:m};a.pop()}return{name:s}}var hr=(e,i,s,t,a)=>a.isOnAll?!1:!s&&a.isOnTouch?!(i||e):(s?t.isOnBlur:a.isOnBlur)?!e:(s?t.isOnChange:a.isOnChange)?e:!0,yr=(e,i)=>!ye(d(e,i)).length&&T(e,i);const gr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function pr(e={},i){let s={...gr,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},n=$(s.defaultValues)||$(s.values)?Q(s.defaultValues||s.values)||{}:{},c=s.shouldUnregister?{}:Q(n),m={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A,S=0;const w={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:je(),array:je(),state:je()},X=e.resetOptions&&e.resetOptions.keepDirtyValues,M=rt(s.mode),_e=rt(s.reValidateMode),ge=s.criteriaMode===P.all,Fe=r=>o=>{clearTimeout(S),S=setTimeout(r,o)},v=async r=>{if(w.isValid||r){const o=s.resolver?U((await I()).errors):await G(a,!0);o!==t.isValid&&x.state.next({isValid:o})}},N=r=>w.isValidating&&x.state.next({isValidating:r}),W=(r,o=[],l,h,f=!0,u=!0)=>{if(h&&l){if(m.action=!0,u&&Array.isArray(d(a,r))){const y=l(d(a,r),h.argA,h.argB);f&&_(a,r,y)}if(u&&Array.isArray(d(t.errors,r))){const y=l(d(t.errors,r),h.argA,h.argB);f&&_(t.errors,r,y),yr(t.errors,r)}if(w.touchedFields&&u&&Array.isArray(d(t.touchedFields,r))){const y=l(d(t.touchedFields,r),h.argA,h.argB);f&&_(t.touchedFields,r,y)}w.dirtyFields&&(t.dirtyFields=Le(n,c)),x.state.next({name:r,isDirty:b(r,o),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else _(c,r,o)},j=(r,o)=>{_(t.errors,r,o),x.state.next({errors:t.errors})},ae=(r,o,l,h)=>{const f=d(a,r);if(f){const u=d(c,r,D(l)?d(n,r):l);D(u)||h&&h.defaultChecked||o?_(c,r,o?u:Oe(f._f)):B(r,u),m.mount&&v()}},le=(r,o,l,h,f)=>{let u=!1,y=!1;const F={name:r};if(!l||h){w.isDirty&&(y=t.isDirty,t.isDirty=F.isDirty=b(),u=y!==F.isDirty);const C=te(d(n,r),o);y=d(t.dirtyFields,r),C?T(t.dirtyFields,r):_(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,u=u||w.dirtyFields&&y!==!C}if(l){const C=d(t.touchedFields,r);C||(_(t.touchedFields,r,l),F.touchedFields=t.touchedFields,u=u||w.touchedFields&&C!==l)}return u&&f&&x.state.next(F),u?F:{}},Se=(r,o,l,h)=>{const f=d(t.errors,r),u=w.isValid&&oe(o)&&t.isValid!==o;if(e.delayError&&l?(A=Fe(()=>j(r,l)),A(e.delayError)):(clearTimeout(S),A=null,l?_(t.errors,r,l):T(t.errors,r)),(l?!te(f,l):f)||!U(h)||u){const y={...h,...u&&oe(o)?{isValid:o}:{},errors:t.errors,name:r};t={...t,...y},x.state.next(y)}N(!1)},I=async r=>s.resolver(c,s.context,fr(r||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),Z=async r=>{const{errors:o}=await I();if(r)for(const l of r){const h=d(o,l);h?_(t.errors,l,h):T(t.errors,l)}else t.errors=o;return o},G=async(r,o,l={valid:!0})=>{for(const h in r){const f=r[h];if(f){const{_f:u,...y}=f;if(u){const F=g.array.has(u.name),C=await lt(f,c,ge,s.shouldUseNativeValidation&&!o,F);if(C[u.name]&&(l.valid=!1,o))break;!o&&(d(C,u.name)?F?ar(t.errors,C,u.name):_(t.errors,u.name,C[u.name]):T(t.errors,u.name))}y&&await G(y,o,l)}}return l.valid},V=()=>{for(const r of g.unMount){const o=d(a,r);o&&(o._f.refs?o._f.refs.every(l=>!Te(l)):!Te(o._f.ref))&&ke(r)}g.unMount=new Set},b=(r,o)=>(r&&o&&_(c,r,o),!te(qe(),n)),k=(r,o,l)=>or(r,g,{...m.mount?c:D(o)?n:q(r)?{[r]:o}:o},l,o),R=r=>ye(d(m.mount?c:n,r,e.shouldUnregister?d(n,r,[]):[])),B=(r,o,l={})=>{const h=d(a,r);let f=o;if(h){const u=h._f;u&&(!u.disabled&&_(c,r,_t(o,u)),f=me(u.ref)&&O(o)?"":o,wt(u.ref)?[...u.ref.options].forEach(y=>y.selected=f.includes(y.value)):u.refs?he(u.ref)?u.refs.length>1?u.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(F=>F===y.value):f===y.value)):u.refs[0]&&(u.refs[0].checked=!!f):u.refs.forEach(y=>y.checked=y.value===f):Pe(u.ref)?u.ref.value="":(u.ref.value=f,u.ref.type||x.values.next({name:r,values:{...c}})))}(l.shouldDirty||l.shouldTouch)&&le(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ce(r)},z=(r,o,l)=>{for(const h in o){const f=o[h],u=`${r}.${h}`,y=d(a,u);(g.array.has(r)||!we(f)||y&&!y._f)&&!ne(f)?z(u,f,l):B(u,f,l)}},ee=(r,o,l={})=>{const h=d(a,r),f=g.array.has(r),u=Q(o);_(c,r,u),f?(x.array.next({name:r,values:{...c}}),(w.isDirty||w.dirtyFields)&&l.shouldDirty&&x.state.next({name:r,dirtyFields:Le(n,c),isDirty:b(r,u)})):h&&!h._f&&!O(u)?z(r,u,l):B(r,u,l),st(r,g)&&x.state.next({...t}),x.values.next({name:r,values:{...c}}),!m.mount&&i()},ue=async r=>{const o=r.target;let l=o.name,h=!0;const f=d(a,l),u=()=>o.type?Oe(f._f):Zt(r);if(f){let y,F;const C=u(),re=r.type===tt.BLUR||r.type===tt.FOCUS_OUT,$t=!dr(f._f)&&!s.resolver&&!d(t.errors,l)&&!f._f.deps||hr(re,d(t.touchedFields,l),t.isSubmitted,_e,M),De=st(l,g,re);_(c,l,C),re?(f._f.onBlur&&f._f.onBlur(r),A&&A(0)):f._f.onChange&&f._f.onChange(r);const Ee=le(l,C,re,!1),jt=!U(Ee)||De;if(!re&&x.values.next({name:l,type:r.type,values:{...c}}),$t)return w.isValid&&v(),jt&&x.state.next({name:l,...De?{}:Ee});if(!re&&De&&x.state.next({...t}),N(!0),s.resolver){const{errors:Ye}=await I([l]),Tt=ut(t.errors,a,l),Je=ut(Ye,a,Tt.name||l);y=Je.error,l=Je.name,F=U(Ye)}else y=(await lt(f,c,ge,s.shouldUseNativeValidation))[l],h=isNaN(C)||C===d(c,l,C),h&&(y?F=!1:w.isValid&&(F=await G(a,!0)));h&&(f._f.deps&&ce(f._f.deps),Se(l,F,y,Ee))}},ce=async(r,o={})=>{let l,h;const f=$e(r);if(N(!0),s.resolver){const u=await Z(D(r)?r:f);l=U(u),h=r?!f.some(y=>d(u,y)):l}else r?(h=(await Promise.all(f.map(async u=>{const y=d(a,u);return await G(y&&y._f?{[u]:y}:y)}))).every(Boolean),!(!h&&!t.isValid)&&v()):h=l=await G(a);return x.state.next({...!q(r)||w.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),o.shouldFocus&&!h&&Me(a,u=>u&&d(t.errors,u),r?f:g.mount),h},qe=r=>{const o={...n,...m.mount?c:{}};return D(r)?o:q(r)?d(o,r):r.map(l=>d(o,l))},He=(r,o)=>({invalid:!!d((o||t).errors,r),isDirty:!!d((o||t).dirtyFields,r),isTouched:!!d((o||t).touchedFields,r),error:d((o||t).errors,r)}),Ct=r=>{r&&$e(r).forEach(o=>T(t.errors,o)),x.state.next({errors:r?t.errors:{}})},We=(r,o,l)=>{const h=(d(a,r,{_f:{}})._f||{}).ref;_(t.errors,r,{...o,ref:h}),x.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},Dt=(r,o)=>J(r)?x.values.subscribe({next:l=>r(k(void 0,o),l)}):k(r,o,!0),ke=(r,o={})=>{for(const l of r?$e(r):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(T(a,l),T(c,l)),!o.keepError&&T(t.errors,l),!o.keepDirty&&T(t.dirtyFields,l),!o.keepTouched&&T(t.touchedFields,l),!s.shouldUnregister&&!o.keepDefaultValue&&T(n,l);x.values.next({values:{...c}}),x.state.next({...t,...o.keepDirty?{isDirty:b()}:{}}),!o.keepIsValid&&v()},Ce=(r,o={})=>{let l=d(a,r);const h=oe(o.disabled);return _(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...o}}),g.mount.add(r),l?h&&_(c,r,o.disabled?void 0:d(c,r,Oe(l._f))):ae(r,!0,o.value),{...h?{disabled:o.disabled}:{},...s.progressive?{required:!!o.required,min:fe(o.min),max:fe(o.max),minLength:fe(o.minLength),maxLength:fe(o.maxLength),pattern:fe(o.pattern)}:{},name:r,onChange:ue,onBlur:ue,ref:f=>{if(f){Ce(r,o),l=d(a,r);const u=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=cr(u),F=l._f.refs||[];if(y?F.find(C=>C===u):u===l._f.ref)return;_(a,r,{_f:{...l._f,...y?{refs:[...F.filter(Te),u,...Array.isArray(d(n,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),ae(r,!1,void 0,u)}else l=d(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||o.shouldUnregister)&&!(tr(g.array,r)&&m.action)&&g.unMount.add(r)}}},Ge=()=>s.shouldFocusError&&Me(a,r=>r&&d(t.errors,r),g.mount),Ke=(r,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=Q(c);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:u}=await I();t.errors=f,h=u}else await G(a);T(t.errors,"root"),U(t.errors)?(x.state.next({errors:{}}),await r(h,l)):(o&&await o({...t.errors},l),Ge(),setTimeout(Ge)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Et=(r,o={})=>{d(a,r)&&(D(o.defaultValue)?ee(r,d(n,r)):(ee(r,o.defaultValue),_(n,r,o.defaultValue)),o.keepTouched||T(t.touchedFields,r),o.keepDirty||(T(t.dirtyFields,r),t.isDirty=o.defaultValue?b(r,d(n,r)):b()),o.keepError||(T(t.errors,r),w.isValid&&v()),x.state.next({...t}))},Xe=(r,o={})=>{const l=r||n,h=Q(l),f=r&&!U(r)?h:n;if(o.keepDefaultValues||(n=l),!o.keepValues){if(o.keepDirtyValues||X)for(const u of g.mount)d(t.dirtyFields,u)?_(f,u,d(c,u)):ee(u,d(f,u));else{if(Ue&&D(r))for(const u of g.mount){const y=d(a,u);if(y&&y._f){const F=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(me(F)){const C=F.closest("form");if(C){C.reset();break}}}}a={}}c=e.shouldUnregister?o.keepDefaultValues?Q(n):{}:Q(f),x.array.next({values:{...f}}),x.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&i(),m.mount=!w.isValid||!!o.keepIsValid,m.watch=!!e.shouldUnregister,x.state.next({submitCount:o.keepSubmitCount?t.submitCount:0,isDirty:o.keepDirty?t.isDirty:!!(o.keepDefaultValues&&!te(r,n)),isSubmitted:o.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:o.keepDirtyValues?t.dirtyFields:o.keepDefaultValues&&r?Le(n,r):{},touchedFields:o.keepTouched?t.touchedFields:{},errors:o.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Qe=(r,o)=>Xe(J(r)?r(c):r,o);return{control:{register:Ce,unregister:ke,getFieldState:He,handleSubmit:Ke,setError:We,_executeSchema:I,_getWatch:k,_getDirty:b,_updateValid:v,_removeUnmounted:V,_updateFieldArray:W,_getFieldArray:R,_reset:Xe,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(r=>{Qe(r,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:x,_proxyFormState:w,get _fields(){return a},get _formValues(){return c},get _state(){return m},set _state(r){m=r},get _defaultValues(){return n},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ce,register:Ce,handleSubmit:Ke,watch:Dt,setValue:ee,getValues:qe,reset:Qe,resetField:Et,clearErrors:Ct,unregister:ke,setError:We,setFocus:(r,o={})=>{const l=d(a,r),h=l&&l._f;if(h){const f=h.refs?h.refs[0]:h.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:He}}function vr(e={}){const i=Y.useRef(),s=Y.useRef(),[t,a]=Y.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...pr(e,()=>a(c=>({...c}))),formState:t});const n=i.current.control;return n._options=e,nr({subject:n._subjects.state,next:c=>{ir(c,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),Y.useEffect(()=>{e.values&&!te(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values):n._resetDefaultValues()},[e.values,n]),Y.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=sr(t,n),i.current}var ct=function(e,i,s){if(e&&"reportValidity"in e){var t=d(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},Ft=function(e,i){var s=function(a){var n=i.fields[a];n&&n.ref&&"reportValidity"in n.ref?ct(n.ref,a,e):n.refs&&n.refs.forEach(function(c){return ct(c,a,e)})};for(var t in i.fields)s(t)},xr=function(e,i){i.shouldUseNativeValidation&&Ft(e,i);var s={};for(var t in e){var a=d(i.fields,t);_(s,t,Object.assign(e[t]||{},{ref:a&&a.ref}))}return s};function mr(e,i,s){return i===void 0&&(i={}),s===void 0&&(s={}),function(t,a,n){try{return Promise.resolve(function(c,m){try{var g=(i.context,Promise.resolve(e[s.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},i,{context:a}))).then(function(A){return n.shouldUseNativeValidation&&Ft({},n),{values:s.raw?t:A,errors:{}}}))}catch(A){return m(A)}return g&&g.then?g.then(void 0,m):g}(0,function(c){if(!c.inner)throw c;return{values:{},errors:xr((m=c,g=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(m.inner||[]).reduce(function(A,S){if(A[S.path]||(A[S.path]={message:S.message,type:S.type}),g){var w=A[S.path].types,x=w&&w[S.type];A[S.path]=xt(S.path,g,A,S.type,x?[].concat(x,S.message):S.message)}return A},{})),n)};var m,g}))}catch(c){return Promise.reject(c)}}}const St=({$w:e,$h:i,$s:s,onClick:t,type:a="button",disabled:n,children:c})=>p.jsx(Ot,{$w:e,$h:i,$s:s,onClick:t,type:a,disabled:n,children:c});St.propTypes={$w:L.string,$h:L.string,$s:L.string,onClick:L.func,type:L.string,disabled:L.oneOfType([L.bool,L.number]),children:L.oneOfType([L.string,L.node,L.oneOf(["img","png","svg"])])};const br=Ae`
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
`;const wr=H.form`
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${E.radius.m};
  background-color: ${E.colors.white};
  box-shadow: ${E.shadows.auth};
`,Re=H.label`
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
    color: ${E.colors.error};
  }
`,ze=Ae`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${E.colors.border};
  border-radius: ${E.radius.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid ${E.colors.hovered};
  }
`,Vr=H.input`
  ${ze}
  ${br}
`,Ar=H.input`
  ${ze}
`,_r=H.div`
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
    background-color: ${E.colors.placeholder};
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
`,Fr=["common","study","work"],kt=({clipboardText:e,setIsModal:i})=>{var g,A,S;const s=Be();ht();const{register:t,handleSubmit:a,formState:{errors:n}}=vr({mode:"onBlur",resolver:mr(Ut),defaultValues:{cluster:e}}),c=w=>{s(Rt(w)),i(!1)},m=w=>w.length<=50?w:w.substring(0,40).concat("...");return p.jsxs(wr,{onSubmit:a(c),children:[p.jsxs(Re,{children:[m(e)," ",p.jsx("br",{}),p.jsx("span",{children:(g=n.cluster)==null?void 0:g.message}),p.jsx(Vr,{...t("cluster")})]}),p.jsxs(Re,{children:["Title: ",p.jsxs("span",{children:[" ",(A=n.title)==null?void 0:A.message]}),p.jsx(Ar,{...t("title")})]}),p.jsxs(Re,{children:["Group: ",p.jsxs("span",{children:[" ",(S=n.group)==null?void 0:S.message]}),p.jsxs(_r,{children:[p.jsx("select",{name:"pets",id:"pet-select",...t("group"),children:Fr.map(w=>p.jsx("option",{value:w,children:w},w))}),p.jsx("span",{})]})]}),p.jsx(St,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};kt.propTypes={clipboardText:L.string.isRequired,setIsModal:L.func.isRequired};function Sr(e){return Nt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}const de="30px",ft="16px",kr=H.div`
  width: 100%;
  position: relative;
  display: inline-block;

  input {
    width: 100%;
    height: ${de};
    padding-inline: ${de};

    border: 1px solid ${E.colors.accent};
    border-radius: ${E.radius.s};
    outline: transparent;
    transition: border-color 250ms, outline 300ms;
    box-shadow: ${E.shadows.button};

    &:hover,
    &:focus {
      border-color: ${E.colors.hovered};
      outline: 1px solid ${E.colors.hovered};
    }

    &::placeholder {
      width: fit-content;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      transition: left 300ms, transform 300ms;
      font-size: ${ft};
    }

    &:focus::placeholder {
      left: 0;
      transform: translateX(${de});
      color: ${E.colors.hovered};
    }

    & + svg {
      position: absolute;
      top: 50%;
      left: calc(50% - 2.5 * ${ft});
      transform: translate(-50%, -50%);
      transition: left 300ms, transform 300ms, fill 300ms;
      cursor: text;
    }

    &:focus + svg,
    &:not(:placeholder-shown) + svg {
      left: calc(${de} * 0.55);
      fill: ${E.colors.hovered};
    }
  }
`,Cr=H.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: calc(${de} * 0.55);
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${E.colors.border};
  color: ${E.colors.white};
`,Dr=()=>{const e=ie(dt),i=Be(),s=n=>n.target.previousElementSibling.focus(),t=n=>{const c=n.target.value.toLowerCase();i(Ze(c))},a=()=>i(Ze(""));return p.jsxs(kr,{children:[p.jsx("input",{type:"text",name:"filter",placeholder:"Search",value:e,onChange:t}),p.jsx(Pt,{size:"16",onClick:s}),e&&p.jsx(Cr,{onClick:a,children:p.jsx(Sr,{size:"16"})})]})},Rr=()=>{const[e,i]=xe.useState(!1),[s,t]=xe.useState(""),a=async()=>{t(await Kt()),s.length<10?pe.error("Copy valid cluster"):i(!0)};return p.jsxs(Mt,{$p:`${E.indent.s} ${E.indent.m}`,children:[p.jsx(Jt,{}),p.jsxs(Bt,{$w:"60%",$x:"right",$y:"bottom",$gtc:"3fr 1fr 1fr 1fr",children:[p.jsx(Dr,{}),p.jsx("span",{}),p.jsx(et,{$s:"m",children:"Edit"}),p.jsx(et,{$s:"m",onClick:a,children:"Add"})]}),e&&p.jsx(It,{onClick:()=>i(!1),children:p.jsx(kt,{clipboardText:s,setIsModal:i})})]})};export{Rr as default};
