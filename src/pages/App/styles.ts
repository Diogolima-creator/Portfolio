import styled from "styled-components";

export const Container = styled.div`
  height:100%;
  width:100%;
  background-color:#15181C;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:-2;
`;

export const Img = styled.img`
  position:absolute;
  right:0px;
  opacity:.03;
  width:600px;
  height:600px;
  z-index:1;
`;

export const Img2 = styled.img`
  position:absolute;
  right:10px;
  opacity:.1;
`;