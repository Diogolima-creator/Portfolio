import styled from "styled-components"
import * as T from "../../pages/App/types";

export const Container = styled.div<T.ContainerProps>`
  width:100%;
  height:100%;
  background-color: ${props => props.DarkTheme === 'dark' ? '#15181C' : 'white'};

  h1{
    color:${props => props.DarkTheme === 'dark' ? 'white' : 'black'};
  }

  p{
    color:${props => props.DarkTheme === 'dark' ? 'white' : 'black'};
  }
`;