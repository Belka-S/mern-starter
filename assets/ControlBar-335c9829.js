import{s as l,t as c,P as i,j as u}from"./index-f60d17e7.js";const{indents:s,shadows:x,breakpoints:f}=c,h=l.div`
  width: ${({$w:t})=>t};
  margin-block: ${({$mb:t=s.s})=>t};
  margin-inline: ${({$mi:t=s.m})=>t};
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
`,b=({$w:t,$mb:n,$mi:r,$pos:e,$side:o,$high:g,$rg:$,$cg:a,$mm:p,$gtc:m,children:d})=>u.jsx(h,{$w:t,$mb:n,$mi:r,$side:o,$high:g,$pos:e,$rg:$,$cg:a,$mm:p,$gtc:m,children:d});b.propTypes={$w:i.string,$mb:i.string,$mi:i.string,$pos:i.string,$side:i.string,$high:i.string,$rg:i.string,$cg:i.string,$mm:i.string,$gtc:i.string,children:i.oneOfType([i.string,i.node,i.oneOf(["img","png","svg"])]).isRequired};export{b as C};
