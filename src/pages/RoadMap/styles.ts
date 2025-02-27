import styled, { keyframes } from "styled-components";
import * as T from "./types";

export const Container = styled.div<T.ContainerProps>`
  height:100%;
  width:100%;
  background-color: ${props => props.DarkTheme === 'dark' ? '#15181C' : 'white'};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:-2;
`;

export const Level = styled.div`
  width:32.5%;
  margin-top:78px;
  display:flex;
  flex-direction:column;
`;

export const LevelHeader = styled.div`
  display:Flex;
  width:100%;
  justify-content:space-between;
  align-items:end;
`;

const bar = keyframes`
  0% {
    width:0%;   
  }
  100% {
    width:40%;
  }
`;

export const Bar = styled.div`
  border:2px solid #ccc;
  border-radius:5px;
  height:15px;
  margin-top:5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;

export const Progress = styled.div`
  background: rgb(201,39,147);
background: linear-gradient(59deg, rgba(201,39,147,1) 35%, rgba(255,51,187,1) 64%, rgba(157,4,106,1) 85%);
  width:40%;
  height:100%;
  animation: 3s ${bar} linear;
`;

export const Percent = styled.h2`
  margin:0;
  color: var(--roxo);
  font-size:36px;
`;

export const Map = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:32.5%;
  background-image: url(bonsai.png);
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;

  .locked{
    background-color: rgba(0,0,0, .95);
  }

  .locked-branch{
    background-color: rgba(0,0,0, .75);
    color: rgba(255,255,255, .5);
  }
  
  @media screen and (max-width: 426px) {
      width:100%;
  }

  @media screen and (max-width: 769px) {
      width:60%;
  }
`;

export const Leaf = styled.div`
  display:flex;
  flex-direction:column;
  width:30%;
  align-items:center;
  text-align:center;
`;

export const LeafHelper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:start;
  width:85%;
  height:10%;
`;

export const LeafMiddle = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
  height:14%;
  margin-top:165px;
`;

export const Branch = styled.p`
  font-weight:bold;
  font-size:14px;
  width:95%;
  letter-spacing:1px;
  margin:0;
  background-color:white;
  justify-content:space-around;
  display:flex;
  align-items:center;
  border-radius:5px;
`;

export const Source = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  height:35%;
`;

export const Fruits = styled.p`
  font-weight:700;
  font-size:13px;
  margin:0;
  letter-spacing:0.5px;
  color:White;
`;

export const Stem = styled.div`
  display:flex;
  flex-direction:column;
  width:30%;
  align-items:center;
  text-align:center;
`;

export const CardTree = styled.div`
  width:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  padding:5px 3px;
  max-width:250px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius:5px;
  background-color: #DB8308;
  min-width:150px;
`;

const LineAnimation = keyframes`
  0%{
    height:0%;
  }100%{
    height:100%;
  }
`;

export const Line = styled.div`
  height:100%;
  min-width:2px;
  background-color:white;
  animation: ${LineAnimation} 2s;
`;

export const LineHorizontal = styled.div`
  height:4px;
  width:100%;
  background-color:white;
  animation: ${LineAnimation} 2s;
`;