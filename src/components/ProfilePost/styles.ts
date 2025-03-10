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
      width:70%;
    }
  
    @media screen and (max-width: 480px) {
      width:100%;
    }
  
    @media screen and (max-width: 320px) {
      width:100%;
    }
`;

export const Banner = styled.video`
   height:60%;
   width:100%;
`;

export const ProfileDate = styled.div`
   display:flex;
   flex-direction:column;
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
    
   p{
    display:flex;
    gap:10px;
   }

`;

export const Title = styled.h1`
    margin:0;
    font-size:42px;
    color:white;
`;


export const ProfileSocials = styled.div`
   width:80%;
   display:flex;
   align-items:center;  
   gap:15px;
   margin-top:5px;

   a{
    text-decoration:none;
    color:var(--roxo);
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
  height:150px;
  width:150px;
  border-radius:90px;
  position:relative;
  top:-35px;
  object-fit: cover;
  z-index:2;
`;

export const ProfileButton = styled.button`
  border:none;
  padding: 8px 12px;
  border-radius:45px;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
  background-color:var(--roxo);
  color:white;
  border:3px solid transparent;
  transition:.15s;
  display:flex;
  align-items:center;
  &:hover{
    border:3px solid white;
  }
`;

export const ProfilePostContent = styled.div`
  height:100%;
  width:32.5%;
  margin-top:40px;
  display:flex;
  align-items:center;
  flex-direction:column;
  
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
    width:70%;
  }

  @media screen and (max-width: 480px) {
    width:100%;
  }

  @media screen and (max-width: 320px) {
    width:90%;
  }
`;

export const Post = styled.div`
  display:flex;
  align-items:center;
  flex-direction:Column;
  text-align:justify;
  height:100%;
  min-height:150px;
  a{
    cursor:pointer;
    color:#868E96;
    transition: 0.3s;
    opacity:.8;
    &:hover{
      opacity:1;
      text-decoration:2px underline;
    }
  }

  span{
    cursor:pointer;
    color:var(--roxo);
    transition: 0.3s;
    font-weight:bold;
    font-size:16px;
    opacity:1;
    &:hover{
      opacity:1;
      text-decoration:2px underline;
    }
  }
`;

export const Image = styled.img`
  max-width:100%;
`;

export const Video = styled.video`
  max-width:100%;
`;

export const ImageDescription = styled.div`
  display:Flex;
  flex-direction:Column;
  align-items:center;
  margin:20px 0;

  video{
   max-width:100%;
  }
`;


export const ProfilePostContentBack = styled.div`
  display:flex;
  width:100%;
`;

export const DateOfUpdate = styled.div`

  p{
    text-decoration:underline;
    cursor:pointer;
    transition: 0.5s;

    &:hover{
      opacity:.6;
    }
  }
`;