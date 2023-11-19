import{s as l,t as n,P as i,j as c}from"./index-42fd413f.js";const x=l.div`
  width: ${({$w:t})=>t};
  padding-block: ${({$pb:t=n.indent.s})=>t};
  padding-inline: ${({$pi:t=n.indent.m})=>t};
  position: ${({$pos:t="fixed"})=>t};
  ${({$x:t="left"})=>`${t}: 0`};
  ${({$y:t="top"})=>`${t}: 0`};

  display: grid;
  justify-items: center;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({$mm:t="300px"})=>t}, 1fr)
  );

  grid-row-gap: ${({$rg:t="10px"})=>t};
  grid-column-gap: ${({$cg:t="20px"})=>t};

  @media screen and (width >= ${n.breakpoints.tablet}) {
    grid-template-columns: ${({$gtc:t})=>t};
  }

  & button {
    box-shadow: ${n.shadows.button};
  }
`,u=({$w:t,$pb:s,$pi:r,$pos:e,$x:o,$y:p,$rg:g,$cg:$,$mm:d,$gtc:a,children:m})=>c.jsx(x,{$w:t,$pb:s,$pi:r,$x:o,$y:p,$pos:e,$rg:g,$cg:$,$mm:d,$gtc:a,children:m});u.propTypes={$w:i.string,$pb:i.string,$pi:i.string,$pos:i.string,$x:i.string,$y:i.string,$rg:i.string,$cg:i.string,$mm:i.string,$gtc:i.string,children:i.oneOfType([i.string,i.node,i.oneOf(["img","png","svg"])]).isRequired};export{u as C};
