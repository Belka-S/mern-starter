import{s as i,t as r,P as o,r as c,a as l,j as s}from"./index-c5dc3bf4.js";const p=i.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  background-color: ${r.colors.backdrop};
  backdrop-filter: blur(5px);

  & > div {
    min-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background-color: transparent; // ${r.colors.white};
    box-shadow: ${r.shadows.modal};
  }
`,u=document.querySelector("#modal"),f=({onClick:t,children:n})=>{c.useEffect(()=>{const e=d=>{d.key==="Escape"&&t()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t]);const a=e=>e.target===e.currentTarget&&t();return l.createPortal(s.jsx(p,{onClick:a,children:s.jsx("div",{children:n})}),u)};f.propTypes={onClick:o.func.isRequired,children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired};export{f as M};
