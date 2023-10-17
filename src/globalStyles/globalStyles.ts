import styled from 'styled-components';

type ParagraphType = {
  margin?: string 
  color?: string
  fs?: string
  fw?: string
  fStyle?: string
}

export const Paragraph = styled.p<ParagraphType>`
    margin:${props => props.margin ? props.margin : '0'};
    color:${props => props.color ? props.color : 'white'};
    font-weight:${props => props.fw ? props.fw : '300'};
    font-size:${props => props.fs ? props.fs : '18px'};
    font-style:${props => props.fStyle? props.fStyle : ''};

    @media screen and (max-width: 768px) {
      font-size:${props => props.fs ? `calc(${props.fs} - 2px)` : '16px'};
    }

    @media screen and (max-width: 320px) {
      font-size:${props => props.fs ? `calc(${props.fs} - 4px)` : '16px'};
    }

`;