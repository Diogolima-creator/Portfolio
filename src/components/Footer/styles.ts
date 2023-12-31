import styled from "styled-components"
import * as T from "../../pages/App/types";

export const Container = styled.div<T.ContainerProps>`
  width:100%;
  height:80px;
  margin-top:40px;
  display:flex;
  align-items:start;
  justify-content:center;
  padding-bottom:10px;

  .icon{
    width:24px;
    height:24px;
    padding:8px;
    color:${props => props.DarkTheme === 'dark' ? '#ADB5BD' : 'black'};
    cursor:pointer;
    transition: .3s;

    &:hover{
      border-radius:5px;
      background-color: rgba(255,255,255, .3);
    }
  }
`;

export const SocialsText = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Socials = styled.div`
  display:flex;
  gap: 5px;
`;

export const Text = styled.p`
  margin:0;
  color:#ADB5BD;
  font-size:13px;
`;