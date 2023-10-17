import styled from 'styled-components';

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