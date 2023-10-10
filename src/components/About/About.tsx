import * as A from './styles'
import * as G from '../../globalStyles/globalStyles'

export const About = () => {
  return (
    <A.Container>
      <A.About>
        <G.Paragraph fs="32px">
        👨🏻‍💻💻📚💪
        </G.Paragraph>
        <G.Paragraph margin='7px 0' fs="32px" fw="700">Olá!</G.Paragraph> 
        <G.Paragraph margin='7px 0' fs="16px" fw="500">Meu nome é Diogo e tenho 21 anos.</G.Paragraph>
        <A.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/about.jpg?alt=media&token=ec040f2c-3cb4-4038-b01e-91ba7592e4fd"></A.Image>
        <G.Paragraph margin='7px 0' fs="16px" fw="500">Já estou há 4 anos estudando desenvolvimento web, com foco em React e suas modulações. </G.Paragraph>
        <G.Paragraph margin='7px 0' fs="16px" fw="500">Quando tinha 11 anos, fiquei curioso sobre programação e criei um servidor de Minecraft. </G.Paragraph>
        <G.Paragraph margin='7px 0' fs="16px" fw="500">Embora não tenha me dedicado totalmente aos estudos naquela época, essa experiência me despertou o interesse pela programação. </G.Paragraph>
        <G.Paragraph margin='7px 0' fs="16px" fw="500">Aos 17 anos, comecei a estudar C e me apaixonei por construir algoritmos que ajudam as pessoas em suas vidas. </G.Paragraph>
        <G.Paragraph margin='7px 0' fs="16px" fw="500">Estou determinado a conseguir experiência e crescer profissionalmente.</G.Paragraph>
        <G.Paragraph margin='7px 0' fs="16px" fw="500">
Aprendo com facilidade, procuro sempre me esforçar ao máximo para adquirir conhecimento, além de ser comunicativo e pró-ativo. Tenho domínio em HTML, JavaScript, CSS, React.js, Redux, Styled-components, Node.js, Express.js, MongoDB e MySQL (CRUD).
        </G.Paragraph>
      </A.About>
    </A.Container>
  )
}
