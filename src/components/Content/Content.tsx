import * as C from './styles'
import * as G from '../../globalStyles/globalStyles'
import { useNavigate } from 'react-router-dom'

export const Content = () => {

  const navigate = useNavigate()
  
  const lastPosts = [
    { link: "Trabalho - Eng Soft", date: "Jun 2024", from:"Diogo"},
    { link: "Integra UFMS ⭐", date: "Abr 2024", from:"Diogo"},
    { link: "Voice IA ⭐", date: "Abr 2024", from:"Diogo"},
]

  const lastCode = [
    { link: "Trabalho - Eng Soft", date: "Jun 2024", from:"Diogo"},
    { link: "Integra UFMS ⭐", date: "Abr 2024", from:"Diogo"},
    { link: "Freela: Portal de noticias", date: "Out 2023", from:"Diretriz"},
    { link: "Sports API", date: "Set 2023", from:"Diogo"},
    { link: "Portfolio com animação 3D", date: "Ago 2023", from:"Diogo"},
    { link: "Finanças ⭐", date: "Jul 2023", from:"Diogo"},
    { link: "Freela: Portfolio", date: "Jun 2023", from:"Diogo"}
  ]

  const lastVideo = [{ link: "Como eu fiz um objeto 3D seguir o mouse", from:"Linkedin"}]

  return (
    <C.Container>
      <C.Content>
        <G.Paragraph>Aqui estão alguns links para várias coisas que eu crio ou com as quais estive envolvido.</G.Paragraph>
        <G.Paragraph margin="5px 0" fw="700" fs="24px">Ultimas Publicações</G.Paragraph>
        <G.Paragraph margin="5px 0" fs="16px">Estes são meus ultimos projetos.</G.Paragraph>
        {lastPosts.map((post) => (
          <>
            <C.Link onClick={()=> navigate(`/post/${post.link}`, { state: { key: 'content' }})}>{post.link}</C.Link>
            <G.Paragraph fs="15px" color="#868E96">{post.from}{' - '}{post.date}</G.Paragraph>
          </>
        ))}
        <G.Paragraph margin="5px 0" fw="700" fs="24px">Codigo</G.Paragraph>
        <G.Paragraph margin="5px 0" fs="16px">Exercitando um pouco da criatividade e colocando em pratica conceitos estudados em projetos pessoais.</G.Paragraph>
        {lastCode.map((post) => (
          <>
            <C.Link onClick={()=> navigate(`/post/${post.link}`, { state: { key: 'content' }})}>{post.link}</C.Link>
            <G.Paragraph fs="15px" color="#868E96">{post.from}{' - '}{post.date}</G.Paragraph>
          </>
        ))}
        <G.Paragraph margin="5px 0" fw="700" fs="24px">Videos</G.Paragraph>
        <G.Paragraph margin="5px 0" fs="16px">Videos explicativos sobre a minha forma criativa e também dicas para quem quer começar a estudar WEB.</G.Paragraph>
        {lastVideo.map((post) => (
          <>
            <C.Link href="https://www.linkedin.com/feed/update/urn:li:activity:7095826204506624001/" target="_blank">{post.link}</C.Link>
            <G.Paragraph fs="15px" color="#868E96">{post.from.toUpperCase()}</G.Paragraph>
          </>
        ))}
      </C.Content>
    </C.Container>
  )
}
