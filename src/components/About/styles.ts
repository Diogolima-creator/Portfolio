import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;
`;

export const About = styled.div`
  width:32.5%;
  margin-top:40px;
  height:100%;

  p{
    text-align: justify-all;
  }

  @media screen and (max-width: 1600px) {
    width:36.5%;
  }

  @media screen and (max-width: 1366px) {
    width:41.5%;
  }

  @media screen and (max-width: 768px) {
    width:43.5%;
  }

  @media screen and (max-width: 480px) {
    width:80%;
  }

  @media screen and (max-width: 320px) {
    width:90%;
  }
`;

export const Image = styled.img`
  height:400px;
  width:90%;
  object-fit:scale-down;
  border-radius:15px;
  margin:8px 0;
`;

const pulsate = keyframes`
  0% {
    transform: scale(1);
    color: black;    
  }
  50% {
    transform: scale(1.05);
    color: transparent; 
  }
  100% {
    transform: scale(1);
    opacity: 1;
    color: black;  
  }
`;

export const Button = styled.button`
  background-color:var(--roxo);
  border:none;
  font-weight:bold;
  font-size:18px;
  padding:6px 14px;
  cursor:pointer;
  color:black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  letter-spacing:1px;
  animation: ${pulsate} 1.5s infinite ease-in-out;
  font-family: 'Assistant', sans-serif;
`;