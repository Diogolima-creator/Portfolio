import * as C from './styles'
import * as G from '../../globalStyles/globalStyles'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Content = () => {

  const navigate = useNavigate()
  const [showFront, setShowFront] = useState(false)
  const [showBack, setShowBack] = useState(false)

  const lastPosts = [
    { link: "Organizer Mobile", date: "Fev 2025", from: "Diogo" },
    { link: "Estagio Evop 💎", date: "Jan 2025", from: "Diogo" },
    { link: "Integra UFMS ⭐", date: "Abr 2024 / Dez 2024", from: "Diogo" },
  ]

  const lastExperiences = [
    { link: "Estagio Evop 💎", date: "Jan 2025", from: "Diogo" }
  ]

  const lastCodeFront = [
    { link: "Organizer Mobile", date: "Fev 2025", from: "Diogo" },
    { link: "LP - Finanças💰", date: "Ago 2024", from: "Diogo" },
    { link: "Ensina Game 🌟", date: "Ago 2022", from: "Diogo" },
    { link: "Trabalho - Eng Soft", date: "Jun 2024", from: "Diogo" },
    { link: "Integra UFMS ⭐", date: "Abr 2024 / Dez 2024", from: "Diogo" },
    { link: "FoodMenu", date: "Ago 2023", from: "Diogo" },
    { link: "Portfolio com animação 3D", date: "Ago 2023", from: "Diogo" },
    { link: "Finanças ⭐", date: "Jul 2023", from: "Diogo" },
  ]

  const lastCodeBackEnd = [
    { link: "Organizer Server", date: "Abr 2024 / Dez 2024", from: "Diogo" },
    { link: "Integra UFMS - Algoritmo", date: "Abr 2024 / Dez 2024", from: "Diogo" },
    { link: "Voice IA Server", date: "Mar 2023/Abr 2024", from: "Diogo" },
    { link: "Sports API", date: "Set 2023", from: "Diogo" }
  ]

  const lastVideo = [{ link: "Como eu fiz um objeto 3D seguir o mouse", from: "Linkedin" }]

  return (
    <C.Container>
      <C.Content>
        <G.Paragraph>Aqui estão alguns links para várias coisas que eu crio ou com as quais estive envolvido.</G.Paragraph>
        <G.Paragraph margin="5px 0" fw="700" fs="24px">Experiencias</G.Paragraph>
        {lastExperiences.map((post) => (
          <>
            <C.Link onClick={() => navigate(`/post/${post.link}`, { state: { key: 'content' } })}>{post.link}</C.Link>
            <G.Paragraph fs="15px" color="#868E96">{post.from}{' - '}{post.date}</G.Paragraph>
          </>
        ))}
        <G.Paragraph margin="5px 0" fw="700" fs="24px">Ultimas Publicações</G.Paragraph>
        <G.Paragraph margin="5px 0" fs="16px">Estes são meus ultimos projetos.</G.Paragraph>
        {lastPosts.map((post) => (
          <>
            <C.Link onClick={() => navigate(`/post/${post.link}`, { state: { key: 'content' } })}>{post.link}</C.Link>
            <G.Paragraph fs="15px" color="#868E96">{post.from}{' - '}{post.date}</G.Paragraph>
          </>
        ))}
        <G.Paragraph margin="5px 0" fw="700" fs="24px">Codigo</G.Paragraph>
        <G.Paragraph margin="5px 0" fs="16px">Exercitando um pouco da criatividade e colocando em pratica conceitos estudados em projetos pessoais.</G.Paragraph>
        <G.Paragraph margin="10px 0" fs="22px" fw="500">
          <span onClick={() => setShowFront(!showFront)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <KeyboardArrowRightIcon className={showFront ? "aberto" : ""} /> Front-End</span>
        </G.Paragraph>
        {showFront &&
          <C.MenuFront>
            {lastCodeFront.map((post) => (
              <>
                <C.Link onClick={() => navigate(`/post/${post.link}`, { state: { key: 'content' } })}>{post.link}</C.Link>
                <G.Paragraph fs="15px" color="#868E96">{post.from}{' - '}{post.date}</G.Paragraph>
              </>
            ))}
          </C.MenuFront>
        }
        <G.Paragraph margin="10px 0" fs="22px" fw="500">
          <span onClick={() => setShowBack(!showBack)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <KeyboardArrowRightIcon className={showBack ? "aberto" : ""} /> Back-End</span></G.Paragraph>
        {showBack &&
          <C.MenuBack>
            {lastCodeBackEnd.map((post) => (
              <>
                <C.Link onClick={() => navigate(`/post/${post.link}`, { state: { key: 'content' } })}>{post.link}</C.Link>
                <G.Paragraph fs="15px" color="#868E96">{post.from}{' - '}{post.date}</G.Paragraph>
              </>
            ))}
          </C.MenuBack>
        }
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
