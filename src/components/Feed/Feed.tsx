import { useNavigate } from 'react-router-dom'
import * as G from '../../globalStyles/globalStyles'
import { Attachment } from '../ProfilePost/components/Attachment'
import { Mood } from './components/Mood/Mood'
import { Pinned } from './components/Pinned/Pinned'
import * as F from './styles'

export const Feed = () => {
  const navigate = useNavigate()
  
    const posts = [
    { isPinned: true, name: "Diogo ✨", 
      date: "07 Jul 2025", 
      imageProfilePic:"profile5.png", 
      mood:"😍 Sentindo Animado", 
      paragraph: <><F.Title>Primeiro Semestre 2025</F.Title>
      <G.Paragraph fs="16px">
      Pessoal, acabei de publicar um novo post contando um pouco sobre como foi meu primeiro semestre de 2025 no projeto EVOP.
      Muita coisa rolou nesses meses — teve bastante aprendizado, desafios técnicos, melhorias importantes no sistema e evoluções no meu estágio também.
      Vem conferir todos os detalhes comigo no post <span onClick={() => navigate('/post/Estagio Evop 💎', { state: { key: 'feed' } })}>/Estágio</span>.
      </G.Paragraph>
      <G.Paragraph fs="16px" fw="bold" margin="10px 0">
        🚀 Nova Funcionalidade: Download de Relatórios
      </G.Paragraph>
      <G.Paragraph fs="16px">
        Acabei de implementar uma nova funcionalidade no portfólio! Agora vocês podem baixar/visualizar anexos diretamente dos posts. 
        Deixei aqui para testar a funcionalidade de download de anexos.
      </G.Paragraph>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
        <Attachment 
          text="Relatório EVOP 2025" 
          url="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/relatorio.pdf?alt=media&token=c93ad569-833c-4118-b5eb-8571613a1e63"
        />
      </div></>,
      image:"profile5.png"
    },
    { isPinned: false, name: "Diogo ✨", 
      date: "10 Jan 2025", 
      imageProfilePic:"profile4.jpg", 
      mood:"🙌Sentindo Grato", 
      paragraph: <><F.Title>Primeiro Emprego</F.Title>
      <G.Paragraph fs="16px">
        Pessoal eu consegui, embora eu esteja escrevendo este post em janeiro, hoje fazem 3 meses desde que consegui meu primeiro emprego. Não tive tempo para escrever sobre isso antes, mas durante essas férias consegui refletir sobre como têm sido esses meses, tudo o que venho aprendendo e as atividades que tenho realizado. 
        Vem conferir todos os detalhes comigo no post <span onClick={() => navigate('/post/Estagio Evop 💎', { state: { key: 'feed' } })}>/Estágio</span>.
      </G.Paragraph></>,
      image:"https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/images%2Flogo.png?alt=media&token=0d976418-ff14-4b47-ba80-3fae8959f649"
    },
    { isPinned: false, name: "Diogo ✨", 
      date: "18 Jul 2024", 
      imageProfilePic:"profile2.jpg", 
      mood:"😁Sentindo Feliz", 
      paragraph: <><F.Title>Primeiro Projeto Remunerado</F.Title>
      <G.Paragraph fs="16px">Estou extremamente feliz em poder compartilhar, que estou em um projeto na 
        faculdade onde recebo uma bolsa desde abril e está sendo uma experiência incrivel, vem conhecer um pouco mais sobre 
        em <span onClick={()=> navigate('/post/Integra UFMS ⭐', { state: {key: 'feed'}})}>/Integra UFMS</span></G.Paragraph></>,
      image:"https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Screenshot%202024-07-14%20230422.png?alt=media&token=21be23aa-59a1-4080-8b62-56aa8f954a6d"
    },
    { isPinned: false, name: "Diogo ✨", 
    date: "02 Abr 2024", 
    imageProfilePic:"profile2.jpg", 
    mood:"🔥Sentindo Animado", 
    paragraph: <><F.Title>Dia de atualização</F.Title>
    <G.Paragraph fs="16px">Atualizações para o novo projeto <span onClick={()=> navigate('/post/Voice IA ⭐', { state: {key: 'feed'}})}>/VoiceIA</span>, troca da foto de perfil, 
    e logo mais novidades para o projeto SportsAPI</G.Paragraph></>,
    image:"https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20121743.png?alt=media&token=9ee8f4db-77d4-44cb-bfa4-a2a27f1f3db2"
    },
    { isPinned: false, name: "Diogo ✨", 
    date: "06 Out 2023", 
    imageProfilePic:"https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/profile.jpg?alt=media&token=38662564-570f-4d05-b1f9-14174afac204", 
    mood:"🌴Sentindo Descolado", 
    paragraph: <><F.Title>Hello World!</F.Title>
    <G.Paragraph fs="16px">Este é o meu site usado como portfolio e vou fazer postagens sobre a minha vida profissional e estudos também, 
      quem sabe algumas dicas também de code. </G.Paragraph></>,
    image:"https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/profile.jpg?alt=media&token=38662564-570f-4d05-b1f9-14174afac2040"
    },
    { 
    isPinned: false, 
    name: "Diogo ✨", 
    date: "27 Set 2023", 
    imageProfilePic:"https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/profile.jpg?alt=media&token=38662564-570f-4d05-b1f9-14174afac204", 
    mood:"🙌 Animado", 
    paragraph: <><F.Title>Modelo 3D</F.Title>
    <G.Paragraph fs="16px">Como eu criei uma função para ditar os movimentos de um modelo 3D do minecraft em um projeto de <span onClick={()=> navigate('/post/Portfolio com animação 3D', { state: {key: 'feed'}})}>Portfolio.</span></G.Paragraph></>,
    image:undefined, 
    video: "https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/3d.mp4?alt=media&token=1efd0df8-8c4e-485c-a495-0d5cbcc3fe3c"
    }
  ]

  return (
    <F.Container>
      {posts.map((post) => (
        <F.Posts>
          {post.isPinned && <Pinned/>}
          <F.Post isPinned={post.isPinned}>
            <F.PostImages>
              <F.PostProfilePic src={post.imageProfilePic}/>
            </F.PostImages>
            <F.PostContent>
              <F.NameDateAndMood>
                  <F.NameDate>
                    <G.Paragraph fs='18px' fw='bold'>{post.name} <span style={{ margin:'0px 5px' }}>•</span> <span>{post.date}</span></G.Paragraph>
                  </F.NameDate>
                  <F.Mood>
                    <Mood mood={post.mood}/>
                  </F.Mood>
              </F.NameDateAndMood>
              <F.PostText>
                <G.Paragraph fs='16px'>{post.paragraph}</G.Paragraph>
              </F.PostText>
                { post.image ? <F.PostImage src={post.image}/> : ''}
                { post.video ? <F.PostVideo controls src={post.video}/> : ''}
            </F.PostContent>
          </F.Post>
        </F.Posts>
      ))}
    </F.Container>
  )
}
