import{e as ie,Q as pe,s as H,n as Ae,t as E,P as L,j as p,u as Be,r as xe,f as Tt,R as Y,A as Lt,i as Ot,k as Ze,F as Rt,B as et}from"./index-1d0b3982.js";import{t as Mt,G as Bt,e as Ut,M as It,g as Nt}from"./Modal-bf15824f.js";import{C as Pt}from"./ControlBar-5582f054.js";const zt=e=>e.clusters.items,qt=e=>e.clusters.activeItem,dt=e=>e.clusters.filter,Ht=e=>e.clusters.isLoading,Wt=e=>e.clusters.error,Gt=()=>{const e=ie(zt),i=ie(qt),s=ie(dt),t=ie(Wt),a=ie(Ht);return{allClusters:e,activeCluster:i,clustersFilter:s,error:t,isLoading:a}},Kt=(e,i)=>Array.from(new Set(e.map(s=>s[i]))),Xt=async()=>{if(!navigator.clipboard){pe.error("Clipboard API is unavailable");return}navigator.permissions.query({name:"clipboard-read"}).then(e=>{e.state!=="granted"&&pe.error("Browser settings > Security > Site settings > Permissions")});try{return await navigator.clipboard.readText()}catch(e){pe.error(e.message)}},Qt=H.ol`
  width: 100%;
  counter-reset: section 0;
`,ht=Ae`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 10fr 20fr 1fr;
  grid-template-areas: 'title title title';
  align-items: baseline;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`,Yt=H.li`
  ${ht}
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
`,Jt=H.li`
  ${ht}

  & h3 {
    margin-right: 15px;
    font-size: 18px;
    justify-self: right;
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
`,yt=({$el:e})=>{const i=s=>{const t=s.replace("https://","").replace("http://","");return t.length<=50?t:t.substring(0,49).concat("...")};return p.jsxs(Jt,{children:[p.jsx("h3",{children:e.title}),p.jsx("a",{href:e.cluster,target:"_blank",rel:"noopener noreferrer",children:i(e.cluster)}),e.checked&&p.jsx("span",{children:"OK"})]})};yt.propTypes={$el:L.object};const Zt=()=>{const e=Be(),{allClusters:i,clustersFilter:s}=Gt(),t=i.filter(n=>n.cluster.toLowerCase().includes(s)||n.title.toLowerCase().includes(s)||n.group.toLowerCase().includes(s)),a=Kt(t,"group");return xe.useEffect(()=>{e(Tt())},[e]),p.jsx(Qt,{children:a.map(n=>p.jsxs(xe.Fragment,{children:[p.jsx(Yt,{children:p.jsx("h2",{children:n})}),t.map(u=>u.group===n&&p.jsx(yt,{$el:u},u._id))]},n))})};var he=e=>e.type==="checkbox",ne=e=>e instanceof Date,O=e=>e==null;const gt=e=>typeof e=="object";var $=e=>!O(e)&&!Array.isArray(e)&&gt(e)&&!ne(e),er=e=>$(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,tr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,rr=(e,i)=>e.has(tr(i)),sr=e=>{const i=e.constructor&&e.constructor.prototype;return $(i)&&i.hasOwnProperty("isPrototypeOf")},Ue=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ue&&(e instanceof Blob||e instanceof FileList))&&(s||$(e)))if(i=s?[]:{},!s&&!sr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=Q(e[t]));else return e;return i}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,d=(e,i,s)=>{if(!i||!$(e))return s;const t=ye(i.split(/[,[\].]+?/)).reduce((a,n)=>O(a)?a:a[n],e);return D(t)||t===e?D(e[i])?s:e[i]:t};const tt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var ir=(e,i,s,t=!0)=>{const a={defaultValues:i._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const u=n;return i._proxyFormState[u]!==N.all&&(i._proxyFormState[u]=!t||N.all),s&&(s[u]=!0),e[u]}});return a},U=e=>$(e)&&!Object.keys(e).length,nr=(e,i,s,t)=>{s(e);const{name:a,...n}=e;return U(n)||Object.keys(n).length>=Object.keys(i).length||Object.keys(n).find(u=>i[u]===(!t||N.all))},$e=e=>Array.isArray(e)?e:[e];function or(e){const i=Y.useRef(e);i.current=e,Y.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var q=e=>typeof e=="string",ar=(e,i,s,t,a)=>q(e)?(t&&i.watch.add(e),d(s,e,a)):Array.isArray(e)?e.map(n=>(t&&i.watch.add(n),d(s,n))):(t&&(i.watchAll=!0),s),Ie=e=>/^\w*$/.test(e),pt=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _(e,i,s){let t=-1;const a=Ie(i)?[i]:pt(i),n=a.length,u=n-1;for(;++t<n;){const v=a[t];let g=s;if(t!==u){const A=e[v];g=$(A)||Array.isArray(A)?A:isNaN(+a[t+1])?{}:[]}e[v]=g,e=e[v]}return e}var vt=(e,i,s,t,a)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:a||!0}}:{};const Me=(e,i,s)=>{for(const t of s||Object.keys(e)){const a=d(e,t);if(a){const{_f:n,...u}=a;if(n&&i(n.name)){if(n.ref.focus){n.ref.focus();break}else if(n.refs&&n.refs[0].focus){n.refs[0].focus();break}}else $(u)&&Me(u,i)}}};var rt=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),st=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),lr=(e,i,s)=>{const t=ye(d(e,s));return _(t,"root",i[s]),_(e,s,t),e},oe=e=>typeof e=="boolean",Ne=e=>e.type==="file",J=e=>typeof e=="function",me=e=>{if(!Ue)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ve=e=>q(e),Pe=e=>e.type==="radio",be=e=>e instanceof RegExp;const it={value:!1,isValid:!1},nt={value:!0,isValid:!0};var xt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?nt:{value:e[0].value,isValid:!0}:nt:it}return it};const ot={isValid:!1,value:null};var mt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,ot):ot;function at(e,i,s="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||oe(e)&&!e)return{type:s,message:ve(e)?e:"",ref:i}}var se=e=>$(e)&&!be(e)?e:{value:e,message:""},lt=async(e,i,s,t,a)=>{const{ref:n,refs:u,required:v,maxLength:g,minLength:A,min:V,max:F,pattern:m,validate:X,name:M,valueAsNumber:_e,mount:ge,disabled:Fe}=e._f,x=d(i,M);if(!ge||Fe)return{};const I=u?u[0]:n,W=w=>{t&&I.reportValidity&&(I.setCustomValidity(oe(w)?"":w||""),I.reportValidity())},j={},ae=Pe(n),le=he(n),Se=ae||le,P=(_e||Ne(n))&&D(n.value)&&D(x)||me(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,Z=vt.bind(null,M,s,j),G=(w,b,k,R=K.maxLength,B=K.minLength)=>{const z=w?b:k;j[M]={type:w?R:B,message:z,ref:n,...Z(w?R:B,z)}};if(a?!Array.isArray(x)||!x.length:v&&(!Se&&(P||O(x))||oe(x)&&!x||le&&!xt(u).isValid||ae&&!mt(u).isValid)){const{value:w,message:b}=ve(v)?{value:!!v,message:v}:se(v);if(w&&(j[M]={type:K.required,message:b,ref:I,...Z(K.required,b)},!s))return W(b),j}if(!P&&(!O(V)||!O(F))){let w,b;const k=se(F),R=se(V);if(!O(x)&&!isNaN(x)){const B=n.valueAsNumber||x&&+x;O(k.value)||(w=B>k.value),O(R.value)||(b=B<R.value)}else{const B=n.valueAsDate||new Date(x),z=ce=>new Date(new Date().toDateString()+" "+ce),ee=n.type=="time",ue=n.type=="week";q(k.value)&&x&&(w=ee?z(x)>z(k.value):ue?x>k.value:B>new Date(k.value)),q(R.value)&&x&&(b=ee?z(x)<z(R.value):ue?x<R.value:B<new Date(R.value))}if((w||b)&&(G(!!w,k.message,R.message,K.max,K.min),!s))return W(j[M].message),j}if((g||A)&&!P&&(q(x)||a&&Array.isArray(x))){const w=se(g),b=se(A),k=!O(w.value)&&x.length>+w.value,R=!O(b.value)&&x.length<+b.value;if((k||R)&&(G(k,w.message,b.message),!s))return W(j[M].message),j}if(m&&!P&&q(x)){const{value:w,message:b}=se(m);if(be(w)&&!x.match(w)&&(j[M]={type:K.pattern,message:b,ref:n,...Z(K.pattern,b)},!s))return W(b),j}if(X){if(J(X)){const w=await X(x,i),b=at(w,I);if(b&&(j[M]={...b,...Z(K.validate,b.message)},!s))return W(b.message),j}else if($(X)){let w={};for(const b in X){if(!U(w)&&!s)break;const k=at(await X[b](x,i),I,b);k&&(w={...k,...Z(b,k.message)},W(k.message),s&&(j[M]=w))}if(!U(w)&&(j[M]={ref:I,...w},!s))return j}}return W(!0),j};function ur(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=D(e)?t++:e[i[t++]];return e}function cr(e){for(const i in e)if(e.hasOwnProperty(i)&&!D(e[i]))return!1;return!0}function T(e,i){const s=Array.isArray(i)?i:Ie(i)?[i]:pt(i),t=s.length===1?e:ur(e,s),a=s.length-1,n=s[a];return t&&delete t[n],a!==0&&($(t)&&U(t)||Array.isArray(t)&&cr(t))&&T(e,s.slice(0,-1)),e}function je(){let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}}var we=e=>O(e)||!gt(e);function te(e,i){if(we(e)||we(i))return e===i;if(ne(e)&&ne(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const a of s){const n=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const u=i[a];if(ne(n)&&ne(u)||$(n)&&$(u)||Array.isArray(n)&&Array.isArray(u)?!te(n,u):n!==u)return!1}}return!0}var bt=e=>e.type==="select-multiple",fr=e=>Pe(e)||he(e),Te=e=>me(e)&&e.isConnected,wt=e=>{for(const i in e)if(J(e[i]))return!0;return!1};function Ve(e,i={}){const s=Array.isArray(e);if($(e)||s)for(const t in e)Array.isArray(e[t])||$(e[t])&&!wt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Ve(e[t],i[t])):O(e[t])||(i[t]=!0);return i}function Vt(e,i,s){const t=Array.isArray(e);if($(e)||t)for(const a in e)Array.isArray(e[a])||$(e[a])&&!wt(e[a])?D(i)||we(s[a])?s[a]=Array.isArray(e[a])?Ve(e[a],[]):{...Ve(e[a])}:Vt(e[a],O(i)?{}:i[a],s[a]):s[a]=!te(e[a],i[a]);return s}var Le=(e,i)=>Vt(e,i,Ve(i)),At=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>D(e)?e:i?e===""?NaN:e&&+e:s&&q(e)?new Date(e):t?t(e):e;function Oe(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ne(i)?i.files:Pe(i)?mt(e.refs).value:bt(i)?[...i.selectedOptions].map(({value:s})=>s):he(i)?xt(e.refs).value:At(D(i.value)?e.ref.value:i.value,e)}var dr=(e,i,s,t)=>{const a={};for(const n of e){const u=d(i,n);u&&_(a,n,u._f)}return{criteriaMode:s,names:[...e],fields:a,shouldUseNativeValidation:t}},fe=e=>D(e)?e:be(e)?e.source:$(e)?be(e.value)?e.value.source:e.value:e,hr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ut(e,i,s){const t=d(e,s);if(t||Ie(s))return{error:t,name:s};const a=s.split(".");for(;a.length;){const n=a.join("."),u=d(i,n),v=d(e,n);if(u&&!Array.isArray(u)&&s!==n)return{name:s};if(v&&v.type)return{name:n,error:v};a.pop()}return{name:s}}var yr=(e,i,s,t,a)=>a.isOnAll?!1:!s&&a.isOnTouch?!(i||e):(s?t.isOnBlur:a.isOnBlur)?!e:(s?t.isOnChange:a.isOnChange)?e:!0,gr=(e,i)=>!ye(d(e,i)).length&&T(e,i);const pr={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function vr(e={},i){let s={...pr,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},n=$(s.defaultValues)||$(s.values)?Q(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:Q(n),v={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A,V=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:je(),array:je(),state:je()},X=e.resetOptions&&e.resetOptions.keepDirtyValues,M=rt(s.mode),_e=rt(s.reValidateMode),ge=s.criteriaMode===N.all,Fe=r=>o=>{clearTimeout(V),V=setTimeout(r,o)},x=async r=>{if(F.isValid||r){const o=s.resolver?U((await P()).errors):await G(a,!0);o!==t.isValid&&m.state.next({isValid:o})}},I=r=>F.isValidating&&m.state.next({isValidating:r}),W=(r,o=[],l,h,f=!0,c=!0)=>{if(h&&l){if(v.action=!0,c&&Array.isArray(d(a,r))){const y=l(d(a,r),h.argA,h.argB);f&&_(a,r,y)}if(c&&Array.isArray(d(t.errors,r))){const y=l(d(t.errors,r),h.argA,h.argB);f&&_(t.errors,r,y),gr(t.errors,r)}if(F.touchedFields&&c&&Array.isArray(d(t.touchedFields,r))){const y=l(d(t.touchedFields,r),h.argA,h.argB);f&&_(t.touchedFields,r,y)}F.dirtyFields&&(t.dirtyFields=Le(n,u)),m.state.next({name:r,isDirty:b(r,o),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else _(u,r,o)},j=(r,o)=>{_(t.errors,r,o),m.state.next({errors:t.errors})},ae=(r,o,l,h)=>{const f=d(a,r);if(f){const c=d(u,r,D(l)?d(n,r):l);D(c)||h&&h.defaultChecked||o?_(u,r,o?c:Oe(f._f)):B(r,c),v.mount&&x()}},le=(r,o,l,h,f)=>{let c=!1,y=!1;const S={name:r};if(!l||h){F.isDirty&&(y=t.isDirty,t.isDirty=S.isDirty=b(),c=y!==S.isDirty);const C=te(d(n,r),o);y=d(t.dirtyFields,r),C?T(t.dirtyFields,r):_(t.dirtyFields,r,!0),S.dirtyFields=t.dirtyFields,c=c||F.dirtyFields&&y!==!C}if(l){const C=d(t.touchedFields,r);C||(_(t.touchedFields,r,l),S.touchedFields=t.touchedFields,c=c||F.touchedFields&&C!==l)}return c&&f&&m.state.next(S),c?S:{}},Se=(r,o,l,h)=>{const f=d(t.errors,r),c=F.isValid&&oe(o)&&t.isValid!==o;if(e.delayError&&l?(A=Fe(()=>j(r,l)),A(e.delayError)):(clearTimeout(V),A=null,l?_(t.errors,r,l):T(t.errors,r)),(l?!te(f,l):f)||!U(h)||c){const y={...h,...c&&oe(o)?{isValid:o}:{},errors:t.errors,name:r};t={...t,...y},m.state.next(y)}I(!1)},P=async r=>s.resolver(u,s.context,dr(r||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),Z=async r=>{const{errors:o}=await P();if(r)for(const l of r){const h=d(o,l);h?_(t.errors,l,h):T(t.errors,l)}else t.errors=o;return o},G=async(r,o,l={valid:!0})=>{for(const h in r){const f=r[h];if(f){const{_f:c,...y}=f;if(c){const S=g.array.has(c.name),C=await lt(f,u,ge,s.shouldUseNativeValidation&&!o,S);if(C[c.name]&&(l.valid=!1,o))break;!o&&(d(C,c.name)?S?lr(t.errors,C,c.name):_(t.errors,c.name,C[c.name]):T(t.errors,c.name))}y&&await G(y,o,l)}}return l.valid},w=()=>{for(const r of g.unMount){const o=d(a,r);o&&(o._f.refs?o._f.refs.every(l=>!Te(l)):!Te(o._f.ref))&&ke(r)}g.unMount=new Set},b=(r,o)=>(r&&o&&_(u,r,o),!te(qe(),n)),k=(r,o,l)=>ar(r,g,{...v.mount?u:D(o)?n:q(r)?{[r]:o}:o},l,o),R=r=>ye(d(v.mount?u:n,r,e.shouldUnregister?d(n,r,[]):[])),B=(r,o,l={})=>{const h=d(a,r);let f=o;if(h){const c=h._f;c&&(!c.disabled&&_(u,r,At(o,c)),f=me(c.ref)&&O(o)?"":o,bt(c.ref)?[...c.ref.options].forEach(y=>y.selected=f.includes(y.value)):c.refs?he(c.ref)?c.refs.length>1?c.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(S=>S===y.value):f===y.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(y=>y.checked=y.value===f):Ne(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||m.values.next({name:r,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&le(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ce(r)},z=(r,o,l)=>{for(const h in o){const f=o[h],c=`${r}.${h}`,y=d(a,c);(g.array.has(r)||!we(f)||y&&!y._f)&&!ne(f)?z(c,f,l):B(c,f,l)}},ee=(r,o,l={})=>{const h=d(a,r),f=g.array.has(r),c=Q(o);_(u,r,c),f?(m.array.next({name:r,values:{...u}}),(F.isDirty||F.dirtyFields)&&l.shouldDirty&&m.state.next({name:r,dirtyFields:Le(n,u),isDirty:b(r,c)})):h&&!h._f&&!O(c)?z(r,c,l):B(r,c,l),st(r,g)&&m.state.next({...t}),m.values.next({name:r,values:{...u}}),!v.mount&&i()},ue=async r=>{const o=r.target;let l=o.name,h=!0;const f=d(a,l),c=()=>o.type?Oe(f._f):er(r);if(f){let y,S;const C=c(),re=r.type===tt.BLUR||r.type===tt.FOCUS_OUT,Et=!hr(f._f)&&!s.resolver&&!d(t.errors,l)&&!f._f.deps||yr(re,d(t.touchedFields,l),t.isSubmitted,_e,M),De=st(l,g,re);_(u,l,C),re?(f._f.onBlur&&f._f.onBlur(r),A&&A(0)):f._f.onChange&&f._f.onChange(r);const Ee=le(l,C,re,!1),$t=!U(Ee)||De;if(!re&&m.values.next({name:l,type:r.type,values:{...u}}),Et)return F.isValid&&x(),$t&&m.state.next({name:l,...De?{}:Ee});if(!re&&De&&m.state.next({...t}),I(!0),s.resolver){const{errors:Ye}=await P([l]),jt=ut(t.errors,a,l),Je=ut(Ye,a,jt.name||l);y=Je.error,l=Je.name,S=U(Ye)}else y=(await lt(f,u,ge,s.shouldUseNativeValidation))[l],h=isNaN(C)||C===d(u,l,C),h&&(y?S=!1:F.isValid&&(S=await G(a,!0)));h&&(f._f.deps&&ce(f._f.deps),Se(l,S,y,Ee))}},ce=async(r,o={})=>{let l,h;const f=$e(r);if(I(!0),s.resolver){const c=await Z(D(r)?r:f);l=U(c),h=r?!f.some(y=>d(c,y)):l}else r?(h=(await Promise.all(f.map(async c=>{const y=d(a,c);return await G(y&&y._f?{[c]:y}:y)}))).every(Boolean),!(!h&&!t.isValid)&&x()):h=l=await G(a);return m.state.next({...!q(r)||F.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),o.shouldFocus&&!h&&Me(a,c=>c&&d(t.errors,c),r?f:g.mount),h},qe=r=>{const o={...n,...v.mount?u:{}};return D(r)?o:q(r)?d(o,r):r.map(l=>d(o,l))},He=(r,o)=>({invalid:!!d((o||t).errors,r),isDirty:!!d((o||t).dirtyFields,r),isTouched:!!d((o||t).touchedFields,r),error:d((o||t).errors,r)}),kt=r=>{r&&$e(r).forEach(o=>T(t.errors,o)),m.state.next({errors:r?t.errors:{}})},We=(r,o,l)=>{const h=(d(a,r,{_f:{}})._f||{}).ref;_(t.errors,r,{...o,ref:h}),m.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},Ct=(r,o)=>J(r)?m.values.subscribe({next:l=>r(k(void 0,o),l)}):k(r,o,!0),ke=(r,o={})=>{for(const l of r?$e(r):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(T(a,l),T(u,l)),!o.keepError&&T(t.errors,l),!o.keepDirty&&T(t.dirtyFields,l),!o.keepTouched&&T(t.touchedFields,l),!s.shouldUnregister&&!o.keepDefaultValue&&T(n,l);m.values.next({values:{...u}}),m.state.next({...t,...o.keepDirty?{isDirty:b()}:{}}),!o.keepIsValid&&x()},Ce=(r,o={})=>{let l=d(a,r);const h=oe(o.disabled);return _(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...o}}),g.mount.add(r),l?h&&_(u,r,o.disabled?void 0:d(u,r,Oe(l._f))):ae(r,!0,o.value),{...h?{disabled:o.disabled}:{},...s.progressive?{required:!!o.required,min:fe(o.min),max:fe(o.max),minLength:fe(o.minLength),maxLength:fe(o.maxLength),pattern:fe(o.pattern)}:{},name:r,onChange:ue,onBlur:ue,ref:f=>{if(f){Ce(r,o),l=d(a,r);const c=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=fr(c),S=l._f.refs||[];if(y?S.find(C=>C===c):c===l._f.ref)return;_(a,r,{_f:{...l._f,...y?{refs:[...S.filter(Te),c,...Array.isArray(d(n,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),ae(r,!1,void 0,c)}else l=d(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||o.shouldUnregister)&&!(rr(g.array,r)&&v.action)&&g.unMount.add(r)}}},Ge=()=>s.shouldFocusError&&Me(a,r=>r&&d(t.errors,r),g.mount),Ke=(r,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let h=Q(u);if(m.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:c}=await P();t.errors=f,h=c}else await G(a);T(t.errors,"root"),U(t.errors)?(m.state.next({errors:{}}),await r(h,l)):(o&&await o({...t.errors},l),Ge(),setTimeout(Ge)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Dt=(r,o={})=>{d(a,r)&&(D(o.defaultValue)?ee(r,d(n,r)):(ee(r,o.defaultValue),_(n,r,o.defaultValue)),o.keepTouched||T(t.touchedFields,r),o.keepDirty||(T(t.dirtyFields,r),t.isDirty=o.defaultValue?b(r,d(n,r)):b()),o.keepError||(T(t.errors,r),F.isValid&&x()),m.state.next({...t}))},Xe=(r,o={})=>{const l=r||n,h=Q(l),f=r&&!U(r)?h:n;if(o.keepDefaultValues||(n=l),!o.keepValues){if(o.keepDirtyValues||X)for(const c of g.mount)d(t.dirtyFields,c)?_(f,c,d(u,c)):ee(c,d(f,c));else{if(Ue&&D(r))for(const c of g.mount){const y=d(a,c);if(y&&y._f){const S=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(me(S)){const C=S.closest("form");if(C){C.reset();break}}}}a={}}u=e.shouldUnregister?o.keepDefaultValues?Q(n):{}:Q(f),m.array.next({values:{...f}}),m.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!v.mount&&i(),v.mount=!F.isValid||!!o.keepIsValid,v.watch=!!e.shouldUnregister,m.state.next({submitCount:o.keepSubmitCount?t.submitCount:0,isDirty:o.keepDirty?t.isDirty:!!(o.keepDefaultValues&&!te(r,n)),isSubmitted:o.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:o.keepDirtyValues?t.dirtyFields:o.keepDefaultValues&&r?Le(n,r):{},touchedFields:o.keepTouched?t.touchedFields:{},errors:o.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Qe=(r,o)=>Xe(J(r)?r(u):r,o);return{control:{register:Ce,unregister:ke,getFieldState:He,handleSubmit:Ke,setError:We,_executeSchema:P,_getWatch:k,_getDirty:b,_updateValid:x,_removeUnmounted:w,_updateFieldArray:W,_getFieldArray:R,_reset:Xe,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(r=>{Qe(r,s.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:m,_proxyFormState:F,get _fields(){return a},get _formValues(){return u},get _state(){return v},set _state(r){v=r},get _defaultValues(){return n},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ce,register:Ce,handleSubmit:Ke,watch:Ct,setValue:ee,getValues:qe,reset:Qe,resetField:Dt,clearErrors:kt,unregister:ke,setError:We,setFocus:(r,o={})=>{const l=d(a,r),h=l&&l._f;if(h){const f=h.refs?h.refs[0]:h.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:He}}function xr(e={}){const i=Y.useRef(),s=Y.useRef(),[t,a]=Y.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...vr(e,()=>a(u=>({...u}))),formState:t});const n=i.current.control;return n._options=e,or({subject:n._subjects.state,next:u=>{nr(u,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),Y.useEffect(()=>{e.values&&!te(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values):n._resetDefaultValues()},[e.values,n]),Y.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=ir(t,n),i.current}var ct=function(e,i,s){if(e&&"reportValidity"in e){var t=d(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},_t=function(e,i){var s=function(a){var n=i.fields[a];n&&n.ref&&"reportValidity"in n.ref?ct(n.ref,a,e):n.refs&&n.refs.forEach(function(u){return ct(u,a,e)})};for(var t in i.fields)s(t)},mr=function(e,i){i.shouldUseNativeValidation&&_t(e,i);var s={};for(var t in e){var a=d(i.fields,t);_(s,t,Object.assign(e[t]||{},{ref:a&&a.ref}))}return s};function br(e,i,s){return i===void 0&&(i={}),s===void 0&&(s={}),function(t,a,n){try{return Promise.resolve(function(u,v){try{var g=(i.context,Promise.resolve(e[s.mode==="sync"?"validateSync":"validate"](t,Object.assign({abortEarly:!1},i,{context:a}))).then(function(A){return n.shouldUseNativeValidation&&_t({},n),{values:s.raw?t:A,errors:{}}}))}catch(A){return v(A)}return g&&g.then?g.then(void 0,v):g}(0,function(u){if(!u.inner)throw u;return{values:{},errors:mr((v=u,g=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(v.inner||[]).reduce(function(A,V){if(A[V.path]||(A[V.path]={message:V.message,type:V.type}),g){var F=A[V.path].types,m=F&&F[V.type];A[V.path]=vt(V.path,g,A,V.type,m?[].concat(m,V.message):V.message)}return A},{})),n)};var v,g}))}catch(u){return Promise.reject(u)}}}const Ft=({$w:e,$h:i,$s:s,onClick:t,type:a="button",disabled:n,children:u})=>p.jsx(Lt,{$w:e,$h:i,$s:s,onClick:t,type:a,disabled:n,children:u});Ft.propTypes={$w:L.string,$h:L.string,$s:L.string,onClick:L.func,type:L.string,disabled:L.oneOfType([L.bool,L.number]),children:L.oneOfType([L.string,L.node,L.oneOf(["img","png","svg"])])};const wr=Ae`
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
`;const Vr=H.form`
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
`,Ar=H.input`
  ${ze}
  ${wr}
`,_r=H.input`
  ${ze}
`,Fr=H.div`
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
`,Sr=["common","study","work"],St=({clipboardText:e,setIsModal:i})=>{var g,A;const s=Be(),{register:t,handleSubmit:a,formState:{errors:n}}=xr({mode:"onBlur",resolver:br(Mt),defaultValues:{cluster:e}}),u=V=>{s(Ot(V)),i(!1)},v=V=>V.length<=50?V:V.substring(0,40).concat("...");return p.jsxs(Vr,{onSubmit:a(u),children:[p.jsxs(Re,{children:[v(e),p.jsx(Ar,{...t("cluster")})]}),p.jsxs(Re,{children:["Title: ",p.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),p.jsx(_r,{...t("title")})]}),p.jsxs(Re,{children:["Group: ",p.jsxs("span",{children:[" ",(A=n.group)==null?void 0:A.message]}),p.jsxs(Fr,{children:[p.jsx("select",{name:"pets",id:"pet-select",...t("group"),children:Sr.map(V=>p.jsx("option",{value:V,children:V},V))}),p.jsx("span",{})]})]}),p.jsx(Ft,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};St.propTypes={clipboardText:L.string.isRequired,setIsModal:L.func.isRequired};function kr(e){return Bt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}const de="30px",ft="16px",Cr=H.div`
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
`,Dr=H.button`
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
`,Er=()=>{const e=ie(dt),i=Be(),s=n=>n.target.previousElementSibling.focus(),t=n=>{const u=n.target.value.toLowerCase();i(Ze(u))},a=()=>i(Ze(""));return p.jsxs(Cr,{children:[p.jsx("input",{type:"text",name:"filter",placeholder:"Search",value:e,onChange:t}),p.jsx(Ut,{size:"16",onClick:s}),e&&p.jsx(Dr,{onClick:a,children:p.jsx(kr,{size:"16"})})]})},Mr=()=>{const[e,i]=xe.useState(!1),[s,t]=xe.useState(""),a=async n=>{const u=await Xt();try{await Nt.validate({cluster:u}),t(u),i(!0)}catch(v){n.target.blur(),pe.error(`Invalid cluster, ${v.message}`)}};return p.jsxs(Rt,{$p:`${E.indent.s} ${E.indent.m}`,children:[p.jsx(Zt,{}),p.jsxs(Pt,{$w:"60%",$x:"right",$y:"bottom",$gtc:"3fr 1fr 1fr 1fr",children:[p.jsx(Er,{}),p.jsx("span",{}),p.jsx(et,{$s:"m",onClick:a,children:"Add"}),p.jsx(et,{$s:"m",children:"Edit"})]}),e&&p.jsx(It,{onClick:()=>i(!1),children:p.jsx(St,{clipboardText:s,setIsModal:i})})]})};export{Mr as default};
