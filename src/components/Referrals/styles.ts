import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;
`;


export const Referral = styled.div`
  width:32.5%;
  height:100%;
  margin-top:40px;
  background-color: transparent;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

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

export const People = styled.div`
  background-color:rgba(127,127,127, 0.1);
  border-radius:10px;
  width:70%;
  display:flex;
  align-items:start;
  flex-direction:column;
  padding:12px 25px;
  height:auto;
  gap:8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
  p{
    margin:0;
    letter-spacing:0.5px;
  }
`;

export const ProfileImg = styled.img`
  width:50px;
  height:50px;
  border-radius:45px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  object-fit:cover;
`;

export const PeopleHelper = styled.div`
  display:flex;
  gap:8px;
  justify-content:space-between;
  width:100%;
  a{
    transition: 0.3s;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    } 
  }
`;

export const ButtonRef = styled.div`
  display:flex;
  width:55%;
  align-items:center;
  justify-content:end;
`;

export const Button = styled.button`
  height:70%;
  width:auto;
  box-shadow: rgba(0, 0, 0, 0.36) 0px 10px 36px 0px, rgba(255,255,255 , 0.3) 0px 0px 0px 1px;
  border-radius:4px;
  display:flex;
  align-items:center;
  cursor:pointer;
  color: var(--roxo);
  border:none;
  background-color:transparent;
  transition: 0.3s;

  &:hover{
    transform: scale(1.05);
  }
`;