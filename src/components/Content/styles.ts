import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;
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
  color:hsl(320 100% 60%);
  margin:0;
  cursor:pointer;
  font-size:17px;
  margin-top:5px;
  text-decoration:none;
  
  &:hover{
    text-decoration:2px underline;
   }
`;