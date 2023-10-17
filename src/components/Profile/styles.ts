import styled from 'styled-components';

export const Profile = styled.div`
    width:40%;
    z-index:1;
    margin-top:52px;
    
    .icon{
      margin-left:5px;
      width:18px;
      height:18px;
    }

    .iconSocial{
      color:#868E96;
      width:22px;
      height:22px;
    }

    @media screen and (max-width: 1600px) {
      width:45%;
    }

    @media screen and (max-width: 1366px) {
      width:50%;
    }

    @media screen and (max-width: 1024px) {
      width:60%;
    }

    @media screen and (max-width: 768px) {
      .iconSocial{
        color:#868E96;
        width:18px;
        height:18px; 
      }
    }

    @media screen and (max-width: 480px) {
      width:100%;
    }


    @media screen and (max-width: 320px) {
      .iconSocial{
        color:#868E96;
        width:16px;
        height:16px; 
      }
    }

`;

export const Banner = styled.video`
   height:60%;
   width:100%;
`;

export const ProfileDate = styled.div`
   height:100%;
   display:flex;
   flex-direction:column;
   width:100%;
   align-items:center;
`;

export const ProfileHeader = styled.div`
   width:80%;
   height:75px;
   display:flex;
   justify-content:space-between;
   align-items:center;  
`;

export const ProfileContent = styled.div`
   width:80%;
   height:125px;
`;

export const Title = styled.h1`
    margin:0;
    font-size:42px;
    color:white;

    @media screen and (max-width: 768px) {
      font-size:32px;
    }

    @media screen and (max-width: 480px) {
      font-size:24px;
    }

    @media screen and (max-width: 320px) {
      font-size:20px;
    }
`;


export const ProfileSocials = styled.div`
   width:80%;
   display:flex;
   align-items:center;  
   gap:15px;
   margin-top:5px;
   
   a{
    text-decoration:none;
    color:hsl(320 100% 60%);
    font-weight:bold;
    cursor:pointer;
    
    &:hover{
      text-decoration:4px underline;
     }
  }
`;

export const ProfileSocial = styled.div`
   display:flex;
   align-items:center;
   gap:5px;

`;

export const ProfilePicture = styled.img`
  border:4px solid white;
  height:140px;
  width:140px;
  border-radius:90px;
  position:relative;
  top:-35px;
  z-index:2;
`;

export const ProfileButton = styled.button`
  border:none;
  padding: 5px 12px;
  border-radius:45px;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
  background-color:hsl(320 100% 60%);
  color:white;
  border:3px solid transparent;
  transition:.15s;
  display:flex;
  align-items:center;

  &:hover{
    border:3px solid white;
  }

  @media screen and (max-width: 768px) {
    font-size:14px;
  }

  @media screen and (max-width: 480px) {
    font-size:14px;
  }

  @media screen and (max-width: 320px) {
    font-size:14px;
  }
`;

export const ProfileEmail = styled.div`
  height:175px;
  width:80%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const EmailContent = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  width:65%;

  @media screen and (max-width: 768px) {
    width:75%;
  }

  @media screen and (max-width: 480px) {
    width:80%;
  }

  @media screen and (max-width: 320px) {
    width:100%;
  }
`;

export const EmailInput = styled.div`
  display:flex;
  align-items:center;
  margin:8px 0;
  height:40px;
  width:100%;
`;

export const Input = styled.input`
  height:40px;
  border:none;
  border-radius: 9999px 0 0px 9999px;
  padding:2px 20px;
  width:70%;
  font-size:15px;
  background-color:#3B3B3B;
  color:white;
  

  &:focus-visible{
    outline:2px solid white;
    margin-right:1px;
  }

  @media screen and (max-width: 768px) {
    font-size:15px;
  }

  @media screen and (max-width: 480px) {
    font-size:15px;
  }

  @media screen and (max-width: 320px) {
    font-size:15px;
  }
`;

export const Button = styled.button`
  height:43px;
  border:none;
  padding:0px 20px;
  border-radius: 0px 9999px 9999px 0px;
  background-color:hsl(320 100% 60%);
  color:white;
  font-weight:bold;
  font-size:15px;
  cursor:pointer;
  border:3px solid transparent;

  &:hover{
    border:3px solid white;
  }

  @media screen and (max-width: 480px) {
    font-size:12px;
  }

  @media screen and (max-width: 320px) {
    font-size:12px;
  }
`;


export const MenuSelect = styled.div`
  width:80%;
  display:flex;
  height:50px;
  align-items:center;

  .disabled{
    opacity:0.1;
  }
`;

export const MenuItem = styled.div`
  width:25%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  transition:.2s;

  .selected{
    border-bottom:4px solid hsl(320 100% 60%);
  }

  &:hover{
    cursor:pointer;
    background-color:rgba(255,255,255, .05);
  }

  p{
    height:90%;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    
  }
`;