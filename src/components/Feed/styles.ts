import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;

  a{
    text-decoration:none;
    color:hsl(320 100% 60%);
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

  &:hover{
    background-color: rgba(255,255,255,0.1);
  }
`;

type PostType = {
  isPinned: boolean
}

export const Post = styled.div<PostType>`
  display:flex;
  ${props => props.isPinned ? "margin-top:0px" : "margin-top:10px" };
  width:95%;
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