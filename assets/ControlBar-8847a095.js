import{s as l,t as c,P as i,j as u}from"./index-cbcfdf02.js";const{indents:s,shadows:x,breakpoints:f}=c,h=l.div`
  width: ${({$w:t})=>t};
  padding-block: ${({$pb:t=s.s})=>t};
  padding-inline: ${({$pi:t=s.m})=>t};
  position: ${({$pos:t="fixed"})=>t};
  ${({$side:t="left"})=>`${t}: 0`};
  ${({$high:t="top"})=>`${t}: 0`};

  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({$mm:t="300px"})=>t}, 1fr)
  );

  grid-row-gap: ${({$rg:t="10px"})=>t};
  grid-column-gap: ${({$cg:t="20px"})=>t};

  @media screen and (width >= ${f.tablet}) {
    grid-template-columns: ${({$gtc:t})=>t};
  }

  & > button {
    box-shadow: ${x.button};
  }
`,b=({$w:t,$pb:n,$pi:r,$pos:e,$side:o,$high:g,$rg:p,$cg:$,$mm:a,$gtc:d,children:m})=>u.jsx(h,{$w:t,$pb:n,$pi:r,$side:o,$high:g,$pos:e,$rg:p,$cg:$,$mm:a,$gtc:d,children:m});b.propTypes={$w:i.string,$pb:i.string,$pi:i.string,$pos:i.string,$side:i.string,$high:i.string,$rg:i.string,$cg:i.string,$mm:i.string,$gtc:i.string,children:i.oneOfType([i.string,i.node,i.oneOf(["img","png","svg"])]).isRequired};export{b as C};
