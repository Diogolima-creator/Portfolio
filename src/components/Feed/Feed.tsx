import { Pinned } from './components/Pinned/Pinned'
import * as F from './styles'
import * as G from '../../globalStyles/globalStyles'
import { Mood } from './components/Mood/Mood'

export const Feed = () => {
  
  const posts = [
    { isPinned: true, name: "Diogo ✨", 
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
    <G.Paragraph fs="16px">Como eu criei uma função para ditar os movimentos de um modelo 3D do minecraft.</G.Paragraph></>,
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
