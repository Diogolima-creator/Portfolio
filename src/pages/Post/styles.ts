import styled from "styled-components";
import * as T from "../App/types";

export const Container = styled.div<T.ContainerProps>`
  height:100%;
  width:100%;
  background-color: ${props => props.DarkTheme === 'dark' ? '#15181C' : 'white'};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  h1{
    color:${props => props.DarkTheme === 'dark' ? 'white' : 'black'};
  }

  p{
    color:${props => props.DarkTheme === 'dark' ? 'white' : 'black'};
  }
`;