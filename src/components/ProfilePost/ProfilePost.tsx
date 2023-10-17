import * as P from './styles'
import * as G from '../../globalStyles/globalStyles'
import VerifiedIcon from '@mui/icons-material/Verified';
import TwitterIcon from '@mui/icons-material/Twitter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useParams } from 'react-router-dom';
import { PostComponent } from '../PostComponent/PostComponent';

export const ProfilePost = () => {

  const { PostTitle } = useParams()

  const posts = [
    { postTitle: "Freela: Portal de noticias", post:  <P.Post>
  <G.Paragraph margin='10px 0' fw="bold" fs="25px">Apresentação do Projeto: Desenvolvimento do Portal de Notícias Diretriz</G.Paragraph>
  <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href="https://portal-diretriz.vercel.app" target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
  <P.ImageDescription>
    <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/portalDiretriz.png?alt=media&token=88a6d432-68b3-4562-b166-9e9a71ea768c"/>
    <G.Paragraph fStyle='italic' fs='13px'>Pagina Inicial na resolução ampliada (Printscreen feito em desenvolvimento)</G.Paragraph>
  </P.ImageDescription>
  <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Sou parte da equipe de desenvolvimento do Portal de Notícias Diretriz, e estou animado para compartilhar nossa jornada tecnológica. Estamos utilizando tecnologias de ponta, como React, Firebase e Styled Components, para criar um portal de notícias altamente funcional e escalável.</G.Paragraph>
  <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
  <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas. Isso nos permite fornecer uma experiência de usuário de alta qualidade.</G.Paragraph>
  <G.Paragraph fs="16px" margin='6px 0'>Firebase: O Firebase desempenha um papel fundamental em nosso projeto. Usamos o Firebase para gerenciar o banco de dados, autenticação de usuários e hospedagem. Ele oferece escalabilidade e segurança, economizando tempo e recursos.</G.Paragraph>
  <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso portal. Isso nos permite criar componentes reutilizáveis com estilos encapsulados, tornando o desenvolvimento mais eficiente e mantendo uma base de código limpa e organizada.</G.Paragraph>
  <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Desafios Técnicos</G.Paragraph>
  <P.ImageDescription>
    <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/portalDiretriz2.png?alt=media&token=e09324d4-d115-48ce-a489-8411afaa52f1"/>
    <G.Paragraph fStyle='italic' fs='13px'>Pagina de Topicos na resolução ampliada (Printscreen feito em desenvolvimento)</G.Paragraph>
  </P.ImageDescription>
  <G.Paragraph fs="16px" margin='3px 0'>Integração de Dados: Integrar dados de várias fontes para exibição em nosso portal, mantendo-os atualizados e precisos.</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Responsividade: Garantir que o portal seja totalmente responsivo em dispositivos móveis, tablets e desktops.</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Segurança: Implementar medidas robustas de segurança para proteger os dados dos usuários e garantir que o acesso seja controlado.</G.Paragraph>
  <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Metodologia</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Metodologia Ágil: Optamos por seguir uma abordagem ágil de desenvolvimento, permitindo-nos iterar rapidamente e adaptar-nos às mudanças nas necessidades do projeto.</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Colaboração: Trabalhamos em estreita colaboração com a equipe editorial para garantir que as necessidades e expectativas sejam atendidas.</G.Paragraph>
  <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Contribuição</G.Paragraph>
  <G.Paragraph fs="16px" margin='5px 0'>Estamos comprometidos em entregar um portal de notícias de alta qualidade, focando em:</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Desempenho: Otimizar o desempenho do portal para carregamento rápido e experiência do usuário fluida.</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Manutenibilidade: Escrever código limpo e documentado para facilitar futuras atualizações e expansões.</G.Paragraph>
  <G.Paragraph fs="16px" margin='3px 0'>Testes: Realizar testes rigorosos para garantir a estabilidade e a segurança do sistema.</G.Paragraph>
  <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Desafios Futuros</G.Paragraph>
  <P.ImageDescription>
    <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/portalDiretriz3.png?alt=media&token=df36dea2-8a7a-4948-9fe2-d51f459756a8"/>
    <G.Paragraph fStyle='italic' fs='13px'>Pagina de Noticia na resolução ampliada (Printscreen feito em desenvolvimento)</G.Paragraph>
  </P.ImageDescription>
  <G.Paragraph fs="16px" margin='5px 0'>Estamos ansiosos para enfrentar os desafios futuros, como a implementação de recursos avançados, a otimização de SEO e a integração com redes sociais para aumentar o alcance do portal e também com o aumento do alcance migrarmos para o NEXT.JS para trabalhar usando caching.</G.Paragraph>
  <G.Paragraph fs="16px" margin='5px 0'>O Projeto de Desenvolvimento do Portal de Notícias Diretriz é uma oportunidade emocionante para aplicar nossas habilidades e conhecimentos tecnológicos. Estamos comprometidos em fornecer uma solução de alta qualidade que atenda às expectativas da equipe editorial e, ao mesmo tempo, proporcione uma experiência excepcional aos usuários finais.</G.Paragraph>
  </P.Post>},
  { postTitle: "Sports API", post:  
  <P.Post>
    <G.Paragraph margin='10px 0' fw="bold" fs="25px">Sports API</G.Paragraph>
    <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href="https://sportsapi.vercel.app" target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/sportsapi.png?alt=media&token=ab199315-17ef-4938-93c1-cb8fa09a8d0f"/>
      <G.Paragraph fStyle='italic' fs='13px'>Media de confronto entre times(escanteios,cartões e gols)</G.Paragraph>
    </P.ImageDescription>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
    <G.Paragraph fs="16px" margin='3px 0'>Desenvolver um site com base em uma API de sports para consulta de dados e simulação de confronto.</G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas. Isso nos permite fornecer uma experiência de usuário de alta qualidade.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso portal. Isso nos permite criar componentes reutilizáveis com estilos encapsulados, tornando o desenvolvimento mais eficiente e mantendo uma base de código limpa e organizada.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>API Sports: Estamos utilizando a API publica do sportsradar que aceita até 1000 requisições diarias.</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/sportsapi2.png?alt=media&token=5b31330b-0461-4f32-87d1-795882382e01"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem recortada do Time 1 (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/sportsapi3.png?alt=media&token=57403d01-82d8-4422-9719-d72d62781f79"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem recortada do Time 2 (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/sportsapi4.png?alt=media&token=1a497a70-bfcd-4a5f-8ddc-94aec08bb52e"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem recortada dos jogadores do Time 1 (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/sportsapi5.png?alt=media&token=02b85289-9ed1-45c8-b1c7-f00c985cf8b6"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem recortada usando filtro dos jogadores (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Desafios Futuros</G.Paragraph>
    <G.Paragraph fs="16px" margin='5px 0'>Começar o processo de estilização e adicionar anuncios do google para monetização </G.Paragraph>
  </P.Post>},
  { postTitle: "Voice IA", post:  
  <P.Post>
    <G.Paragraph margin='10px 0' fw="bold" fs="25px">Voice IA</G.Paragraph>
    <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a>EM DESENVOLVIMENTO</a>👈</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia.png?alt=media&token=132f914c-8468-4b79-8d7b-b5af64ebb3fe"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina do modelo (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
    <G.Paragraph fs="16px" margin='3px 0'>Está na moda videos usando inteligencia artificial para usar a voz de algum famoso para fazer videos virais desse famoso cantando musicas do momento.</G.Paragraph>
    <G.Paragraph fs="16px" margin='3px 0'>Queremos com esse projeto que pessoas que não possuem acesso a informação de como manusear uma I.A possa facilmente criar seus proprios videos de forma gratuita e paga.</G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso app.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>AWS EC2: Criação do servidor onde a I.A estará alocada e se comunicará por meio uma API.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Spring Boot: Criação do servidor backEnd em JAVA para controle das contas.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Firebase Storage: Armazenamento dos audios gerados pela I.A e audios enviados.</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia2.png?alt=media&token=4a0392bd-51da-4a82-9cbf-4103ea0bb308"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da Pagina inicial (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia3.png?alt=media&token=90b09ab8-88d2-480f-9d21-427adbc58540"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da Pagina de busca dos modelos (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia4.png?alt=media&token=4fe1f28e-6775-46c1-bffc-6e28e4443dee"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da Pagina de cadastro (Printscreen feito em desenvolvimento)</G.Paragraph>
    </P.ImageDescription>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Desafios Futuros</G.Paragraph>
    <G.Paragraph fs="16px" margin='5px 0'>Estamos no momento em hiato visto que ambos os contribuentes estão atarefados com outros projetos mas continuaremos assim que possivel para podermos lançar esse site 
    na sua melhor forma.</G.Paragraph>
  </P.Post>},
  { postTitle: "Portfolio com animação 3D", post:  
  <P.Post>
    <G.Paragraph margin='10px 0' fw="bold" fs="25px">Portfolio com animação 3D</G.Paragraph>
    <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href="https://portfilio-mine.vercel.app" target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
    <G.Paragraph fs="16px" margin='3px 0'>Esse foi apenas um projeto pessoal que enquanto conversava com meus amigos um deles deu a ideia sobre um portfolio personalizado com o jogo minecraft
    e essa ideia ficou na minha cabeça e então resolvi por em pratica para ver como ficava e este foi o resultado: </G.Paragraph>
    <G.Paragraph fs="15px" margin='3px 0' fStyle='italic' color="grey">Existe um video contando como foi criado a função dessa animação segue o <a href="https://www.linkedin.com/feed/update/urn:li:activity:7095826204506624001/" target='_blank'><span>/link</span></a></G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso app.</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/mine.png?alt=media&token=3593b5a9-cb99-4e2c-8d1d-da8651e0f6b7"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da primeira Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/minegif.gif?alt=media&token=c6ace104-d074-4fe7-9e32-2d5194a344c5"/>
      <G.Paragraph fStyle='italic' fs='13px'>GIF do Modelo 3D </G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/mine2.png?alt=media&token=92dcc3f3-8beb-4850-8939-7a61c81eb923"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da segunda Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/mine3.png?alt=media&token=9000d3e0-c61b-4f45-befd-a3e6767a0673"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da terceira Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/mine4.png?alt=media&token=e6539858-15ba-4602-8a2a-7f0b389ea5f1"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da quarta Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/mine5.png?alt=media&token=3379c86b-4878-45f7-8a06-fb9a7bf0e6e0"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da quinta Section do portfolio</G.Paragraph>
    </P.ImageDescription>
  </P.Post>},
  { postTitle: "Finanças", post:  
  <P.Post>
    <G.Paragraph margin='10px 0' fw="bold" fs="25px">Finanças</G.Paragraph>
    <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href="finan-front.vercel.app" target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
    <G.Paragraph fs="16px" margin='3px 0'>Este foi um projeto que fiz com o intuito de organizar as finanças de casa e funcionou muito bem apesar de nao estar completo, a ideia do projeto era um 
    app com sistema de finanças somado a ideia de rede social.</G.Paragraph>
    <G.Paragraph fs="15px" margin='3px 0' fStyle='italic' color="grey">Existe alguns videos em meu linkedin sobre esse projeto confira clicando em <a href="https://www.linkedin.com/in/diogo-lima1408/recent-activity/all/" target='_blank'><span>/link</span></a></G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso app.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>NodeJS: Estamos utilizando Node JS para criar a API do backend que manipula,cria, modifica os dados do usuarios e também dos grupos de finanças.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>MongoDB: Estamos utilizando MongoDB para armazenamento dos dados dos usuarios.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Firebase Storage: Estamos utilizando Storage para armazenamento dos arquivos dos usuarios.</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/loginPAGE.png?alt=media&token=ec922b96-90f5-4074-b4bc-6a863c26d54a"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de login do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/budgetPage.png?alt=media&token=5ee0368c-a3f4-43d3-823a-93d081272d4e"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de budget do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/categoryPage.png?alt=media&token=657647ad-da7a-439e-b542-615c0db55d73"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de categorias do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/createGroup.png?alt=media&token=78ae3a5f-033c-43ad-80cc-aa42dd651791"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de criação de grupos do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/menuGroupPage.png?alt=media&token=20837a20-0491-444a-8c17-c2bbd631a7f9"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina do menu dos grupos do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/DashBoardPage.png?alt=media&token=77815796-557a-43b3-9c99-13f0de73593d"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem do DashBoard sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/FriendsPage.png?alt=media&token=ad3737bc-446d-430c-9584-096e90dc9677"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de Amigos do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/GroupPageConfig.png?alt=media&token=15601f13-faf4-4e06-8d46-38430443a81c"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de configuração de grupos do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/ProfilePage.png?alt=media&token=edc7821e-53d0-45bf-9bac-aea07585ceea"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de perfil do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/ReleasePage.png?alt=media&token=ea064c42-fe58-43ac-8c7b-8c792ed0635b"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina de atualização do sistema de finanças</G.Paragraph>
    </P.ImageDescription>
  </P.Post>},
  { postTitle: "Freela: Portfolio", post:  
  <P.Post>
    <G.Paragraph margin='10px 0' fw="bold" fs="25px">Freela: Portfolio Diretriz</G.Paragraph>
    <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href="https://portifolio-dad.vercel.app" target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
    <G.Paragraph fs="16px" margin='3px 0'>Esse projeto veio como uma proposta de um portfolio para um empresa de gestão politica atualmente estou esperando o cliente juntar mais informações para 
    preenchermos com mais conteudo. </G.Paragraph>
    <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas.</G.Paragraph>
    <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso app.</G.Paragraph>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/diretriz.png?alt=media&token=a0a6c1d7-6ea8-4b23-985c-bc37278aa79c"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da primeira Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/diretriz1.png?alt=media&token=5ef2f670-4f20-43fc-a07f-90dfd504f759"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da segunda Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/diretriz2.png?alt=media&token=f248f9d9-685a-4554-ac1e-b205e963fcb0"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da terceira Section do portfolio</G.Paragraph>
    </P.ImageDescription>
    <P.ImageDescription>
      <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/diretriz3.png?alt=media&token=afe4d382-4447-49da-b3c3-3d16c6251623"/>
      <G.Paragraph fStyle='italic' fs='13px'>Imagem da quarta Section do portfolio</G.Paragraph>
    </P.ImageDescription>
  </P.Post>}]

  const socials = [
    {"icon":<CalendarMonthIcon className="iconSocial"/>, "text": "08 Out 2023"},
    {"icon":<AccessTimeIcon className="iconSocial"/>, "text": "~5 min"},
    {"icon":<LocalOfferIcon className="iconSocial"/>, "text": <><a>CSS,</a><a> HTML,</a><a> JavaScript</a></>}
  ]

  return (
    <>
    <P.Profile>
      <P.Banner>
      </P.Banner>
      <P.ProfileDate>
        <P.ProfileHeader>
            <P.ProfilePicture src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/profile.jpg?alt=media&token=38662564-570f-4d05-b1f9-14174afac204"/>
            <P.ProfileButton>Seguir <TwitterIcon sx={{ width:'18px', height:'18px'}}/></P.ProfileButton>
        </P.ProfileHeader>
        <P.ProfileContent>
            <G.Paragraph fs="36px" fw="bold">{PostTitle?.replace(/-/g, ' ')}</G.Paragraph>
            <G.Paragraph margin="4px 0" fs="22px" fw="500" color="#ADB5BD">Diogo Lima <VerifiedIcon sx={{ color: "hsl(320 100% 60%)"}} /></G.Paragraph>
        </P.ProfileContent>
        <P.ProfileSocials>
              {socials.map((social) => (
                <P.ProfileSocial>{social.icon}  <G.Paragraph fw="300" fs="17px" color="#868E96">{social.text}</G.Paragraph></P.ProfileSocial>
              ))}
        </P.ProfileSocials>
      </P.ProfileDate>
    </P.Profile>
    <P.ProfilePostContent>
            {posts.filter((p) => p.postTitle === PostTitle).map((post) => (
              <PostComponent children={post.post}/>
            ))}
    </P.ProfilePostContent>
    </>
  )
}
