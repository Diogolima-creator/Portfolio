import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;

  .aberto{
    transform: rotate(90deg);
  }
`;

export const Content = styled.div`
  width:32.5%;
  height:100%;
  margin-top:40px;
  background-color: transparent;
  display:flex;
  flex-direction:column;
  align-items:start;

  @media screen and (max-width: 1600px) {
    width:36.5%;
  }

  @media screen and (max-width: 1366px) {
    width:41.5%;
  }

  @media screen and (max-width: 1024px) {
    width:46.5%;
  }

  @media screen and (max-width: 768px) {
    width:51.5%;
  }

  @media screen and (max-width: 480px) {
    width:80%;
  }

  @media screen and (max-width: 320px) {
    width:95%;
  }
`;

export const Link = styled.a`
  color:var(--roxo);
  margin:0;
  cursor:pointer;
  font-size:17px;
  margin-top:5px;
  text-decoration:none;
  
  &:hover{
    text-decoration:2px underline;
   }
`;

const frontMenu = keyframes`
  0%{
    height:0;
    opacity:0;
  }
  99%{
  opacity:0.5;
  }
  100%{
    opacity: 1;
    height:352px;
  }
`;

const backMenu = keyframes`
  0%{
    height:0;
    opacity:0;
  }
  100%{
    opacity: 1;
    height:176px;
  }
`;

export const MenuFront = styled.div`
  animation: ${frontMenu} 1s;
  height: 352px; 
`;

export const MenuBack = styled.div`
  animation: ${backMenu} 1s;
  height: 176px; 
`;