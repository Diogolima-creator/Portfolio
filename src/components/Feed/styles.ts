import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;

  a{
    text-decoration:none;
    color:var(--roxo);
    font-weight:bold;
    cursor:pointer;
    font-style:italic;
    font-size:15px;
    
    &:hover{
      text-decoration:2px underline;
     }
  }

`;

export const Posts = styled.div`
  width:32.5%;
  height:100%;
  border-radius:10px;
  margin-top:40px;
  background-color: transparent;
  display:flex;
  flex-direction:column;
  align-items:center;
  transition:.3s;
  cursor:default;
  &:hover{
    background-color: rgba(255,255,255,0.1);
  }

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
    width:100%;
  }
`;

type PostType = {
  isPinned: boolean
}

export const Post = styled.div<PostType>`
  display:flex;
  ${props => props.isPinned ? "margin-top:0px" : "margin-top:10px" };
  width:95%;
  gap:4px;
`;

export const PostContent = styled.div`
  width:95%;
  display:flex;
  flex-direction:column;
  gap:2px; 
`;

export const PostImages = styled.div`
  height:100%;
`;

export const PostProfilePic = styled.img`
  height:40px;
  width:40px;
  border-radius:45px;
  object-fit:cover;
`;

export const NameDateAndMood = styled.div`
  margin-left:3px;
`;

export const Mood = styled.div`
  display:flex;
`;

export const NameDate = styled.div`
  display:flex;
  
  span{
    color:#868E96;
    font-size:14px;
    font-weight:500;
  }
`;

export const PostText = styled.div`
  width:100%;

  span{
    font-size:16px;
    font-weight:700;
    cursor:pointer;
    text-decoration:underline;
    color:var(--roxo);
    transition:0.3s;

    &:hover{
      opacity:.5;
    }
  }
`;

export const Title = styled.h1`
  margin:4px 0px;
  color:white;
  font-size:28px;
`;

export const PostImage = styled.img`
  width:100%;
  height:100%;
  max-height:450px;
  border-radius:10px;
  margin-top:20px;
  margin-bottom:20px;
  object-fit:cover;
`;

export const PostVideo = styled.video`
  width:100%;
  height:100%;
  max-height:450px;
  border-radius:10px;
  margin-top:20px;
  margin-bottom:20px;
  object-fit:cover;
`;