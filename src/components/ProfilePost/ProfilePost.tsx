import * as P from './styles'
import * as G from '../../globalStyles/globalStyles'
import VerifiedIcon from '@mui/icons-material/Verified';
import TwitterIcon from '@mui/icons-material/Twitter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PostComponent } from '../PostComponent/PostComponent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import { Financas, FreelaPort, FreelaPortalNoticias, PortfolioComAnimação3D, SportApi, EngSoft, Evop, LPFinancas, FoodMenu, Organizer, OrganizerServer, IntegraServer, VoiceIAServer, EnsinaGame } from './posts/posts';

export const ProfilePost = () => {

  const { PostTitle } = useParams()
  const navigate = useNavigate()
  const [voiceIA, setVoiceIA] = useState<number | null>(null)
  const [integraUfms, setIntegraUfms] = useState<number | null>(null)
  const location = useLocation()

  const posts = [
    FreelaPortalNoticias,
    SportApi,
    Evop,
    {
      postTitle: "Voice IA ⭐", post:
        <><P.Post>
          <P.DateOfUpdate><G.Paragraph margin='2px 0' onClick={() => setVoiceIA(0)}>Atualizacao do dia: 04/10/2023</G.Paragraph></P.DateOfUpdate>
          <P.DateOfUpdate><G.Paragraph margin='2px 0' onClick={() => setVoiceIA(1)}>Atualizacao do dia: 02/04/2024</G.Paragraph></P.DateOfUpdate>
        </P.Post>
          {voiceIA === 0 &&
            <P.Post>
              <G.Paragraph margin='10px 0' fw="bold" fs="28px">Atualização selecionada do dia 04/10/2023</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="bold" fs="25px">Voice IA</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href='https://www.voice-ia.com.br' target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia.png?alt=media&token=132f914c-8468-4b79-8d7b-b5af64ebb3fe" />
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
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia2.png?alt=media&token=4a0392bd-51da-4a82-9cbf-4103ea0bb308" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da Pagina inicial (Printscreen feito em desenvolvimento)</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia3.png?alt=media&token=90b09ab8-88d2-480f-9d21-427adbc58540" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da Pagina de busca dos modelos (Printscreen feito em desenvolvimento)</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/voiceia4.png?alt=media&token=4fe1f28e-6775-46c1-bffc-6e28e4443dee" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da Pagina de cadastro (Printscreen feito em desenvolvimento)</G.Paragraph>
              </P.ImageDescription>
              <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Desafios Futuros</G.Paragraph>
              <G.Paragraph fs="16px" margin='5px 0'>Estamos no momento em hiato visto que ambos os contribuentes estão atarefados com outros projetos mas continuaremos assim que possivel para podermos lançar esse site
                na sua melhor forma.</G.Paragraph>
            </P.Post>}
          {voiceIA === 1 &&
            <P.Post>
              <G.Paragraph margin='10px 0' fw="bold" fs="28px">Atualização selecionada do dia 02/04/2023</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="bold" fs="25px">Voice IA</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="500" fs="16px">👉<a href='https://www.voice-ia.com.br' target='_blank'>Clique aqui para fazer uma visita</a>👈</G.Paragraph>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Sem%20t%C3%ADtulo.png?alt=media&token=b023a779-08f0-4557-a256-de25ff6f55d1" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da pagina do modelo</G.Paragraph>
              </P.ImageDescription>
              <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
              <G.Paragraph fs="16px" margin='5px 0'>Bom pessoal estamos proximos do lançamento do nosso projeto, tivemos muitas atualizações desde a ultima vez que nos vimos em 2023.</G.Paragraph>
              <G.Paragraph fs="18px" margin='3px 0'>Atualizações incriveis que tivemos:</G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Sistema de pagamento com API integrada do mercado pago</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Possibilidade de criação de contas pelo auth do google</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Novos modelos com treinos de ate 2k epocas</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Implementamos uma funcionalidade usando WebSocket para um sistema de fila, na hora de criar seu proprio audio</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Implementamos também a possibilidade de se escolher se o audio enviado é uma voz feminina ou masc.</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Disponibilizamos três audios possibilitando, o usuario ter a experiencia de como ficara seu audio antes de gastar sua energia.</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Foi mudado a forma que hospedamos o servidor, não mais usaremos o AWS EC, por motivos do valor que estavamos recebendo</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Sistema de Energia integrado ao sistema de planos</li></G.Paragraph>
              <G.Paragraph fs="15px" margin='3px 0'><li>Usuarios verificados e não verificados</li></G.Paragraph>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Sistema de Pagamentos usando MercadoPAGO</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20105328.png?alt=media&token=26c7c825-101e-41be-bb7f-f131d5b804c9" />
                  <G.Paragraph fStyle='italic' fs='13px'>Imagem do modal de quando se seleciona um plano</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20105416.png?alt=media&token=c9790bf3-3abe-4828-9481-9f5cf498be4b" />
                  <G.Paragraph fStyle='italic' fs='13px'>Inicio da compra do seu plano</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20105541.png?alt=media&token=15d7dcf1-abc2-43f0-92ba-b252f4115bb3" />
                  <G.Paragraph fStyle='italic' fs='13px'>Tudo certo para confirmação do plano</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20105552.png?alt=media&token=d6ff0ad5-b1de-4d0a-b4ac-caa6fdd1048a" />
                  <G.Paragraph fStyle='italic' fs='13px'>QRCode e Copia/Cola</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20105730.png?alt=media&token=45671c15-71f1-4bb7-bd7c-57dceef577e8" />
                  <G.Paragraph fStyle='italic' fs='13px'>Email que se recebe ao começar um pagamento</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20110104.png?alt=media&token=607ca495-c61b-4498-8b81-0704c2995f5e" />
                  <G.Paragraph fStyle='italic' fs='13px'>Confirmação de pagamento</G.Paragraph>
                </P.ImageDescription>
              </>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Possibilidade de criação de contas pelo auth do GOOGLE</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20110321.png?alt=media&token=038b341a-2641-4301-aff8-48d6ae49d6b4" />
                  <G.Paragraph fStyle='italic' fs='13px'>Modal de Login</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20110330.png?alt=media&token=ef74bd73-cb85-4078-858f-667d94f4b617" />
                  <G.Paragraph fStyle='italic' fs='13px'>Sistema de AUTH DO GOOGLE</G.Paragraph>
                </P.ImageDescription>
              </>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Novos modelos com treinos de ate duas mil epocas</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20110921.png?alt=media&token=ee5f032f-e8cb-47f4-9b4b-ed90af6ab6ba" />
                  <G.Paragraph fStyle='italic' fs='13px'>Novos Modelos</G.Paragraph>
                </P.ImageDescription>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20111022.png?alt=media&token=e2b1dd35-4303-4659-8160-4d990566c5e5" />
                  <G.Paragraph fStyle='italic' fs='13px'>Novos Modelos</G.Paragraph>
                </P.ImageDescription>
              </>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Implementamos uma funcionalidade usando WebSocket para um sistema de fila, na hora de criar seu proprio audio</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20111445.png?alt=media&token=9eeb533a-b0d5-4f83-b87b-8727d5cb061a" />
                  <G.Paragraph fStyle='italic' fs='13px'>Fila mostrando a posição que o usuario se encontra</G.Paragraph>
                </P.ImageDescription>
              </>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Implementamos também a possibilidade de se escolher se o audio enviado é uma voz feminina ou masc.</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20111741.png?alt=media&token=f79154e0-009d-40ae-bc64-fd01c87f45ec" />
                  <G.Paragraph fStyle='italic' fs='13px'>Imagem mostrando a possibilidade de escolher entre uma voz feminina ou masculina</G.Paragraph>
                </P.ImageDescription>
              </>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Disponibilizamos três audios possibilitando, o usuario ter a experiencia de como ficará seu audio antes de gastar sua energia.</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20112021.png?alt=media&token=1d6e6157-76f6-4459-b12c-e7f6c61d3741" />
                  <G.Paragraph fStyle='italic' fs='13px'>Imagem com os três audios gerados</G.Paragraph>
                </P.ImageDescription>
              </>
              <>
                <G.Paragraph margin='10px 0' fw='bold' fs='28px' ta='center' fStyle='italic'>Sistema de Energia integrado ao sistema de planos</G.Paragraph>
                <P.ImageDescription>
                  <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Captura%20de%20tela%202024-04-02%20112417.png?alt=media&token=1667ddb0-2d07-471b-9275-0d85306f494a" />
                  <G.Paragraph fStyle='italic' fs='13px'>Sistema de recarga de energia</G.Paragraph>
                </P.ImageDescription>
              </>

            </P.Post>}
        </>
    },
    PortfolioComAnimação3D,
    Financas,
    FreelaPort,
    EngSoft,
    LPFinancas,
    FoodMenu,
    Organizer,
    OrganizerServer,
    IntegraServer,
    VoiceIAServer,
    {
      postTitle: "Integra UFMS ⭐", 
      post:
        <><P.Post>
          <P.DateOfUpdate><G.Paragraph margin='2px 0' onClick={() => setIntegraUfms(0)}>Atualizacao do dia: 04/04/2024</G.Paragraph></P.DateOfUpdate>
          <P.DateOfUpdate><G.Paragraph margin='2px 0' onClick={() => setIntegraUfms(1)}>Atualizacao do dia: 02/12/2024</G.Paragraph></P.DateOfUpdate>
        </P.Post>
          {integraUfms === 0 &&
            <P.Post>
              <G.Paragraph margin='10px 0' fw="bold" fs="28px">Atualização selecionada do dia 04/04/2024</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="bold" fs="25px">Integra UFMS - Rooming List</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="500" fs="16px">❌<a target='_blank'>Projeto privado para acesso</a>❌</G.Paragraph>
              <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
              <G.Paragraph fs="16px" margin='3px 0'>Esse é um projeto de extensão da faculdade que estou fazendo em conjunto com minha
                coordenadora <a href='http://lattes.cnpq.br/8872648473020443' target='_blank'>Liana Duenha</a>, onde queremos deixar de usar a
                ferramenta excel para organização da reserva dos quartos dos bolsistas que virão de varias partes do estado, para um sistema próprio
                que será responsavel pela organização e automação e também para visualização e para distribuição dos quartos. </G.Paragraph>
              <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Tech Stack</G.Paragraph>
              <G.Paragraph fs="16px" margin='6px 0'>React: Escolhemos o React devido à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e responsivas.</G.Paragraph>
              <G.Paragraph fs="16px" margin='6px 0'>Styled Components: Estamos utilizando Styled Components para melhorar a estilização do nosso app.</G.Paragraph>
              <G.Paragraph fs="16px" margin='6px 0'>Firebase: Estamos utilizando os serviços do firebase para integração de um storage, autenticação e banco de dados.</G.Paragraph>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Screenshot%202024-07-14%20230422.png?alt=media&token=21be23aa-59a1-4080-8b62-56aa8f954a6d" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da área de login</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Screenshot%202024-07-14%20230446.png?alt=media&token=d6aa91f9-2aab-4a67-b7c1-8b316ce4ad1d" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da primeira Section do portfolio</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Screenshot%202024-07-14%20230454.png?alt=media&token=96c6e9b1-d40d-497e-bd04-90929f53cac0" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem dos quartos tabelados de um hotel</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Screenshot%202024-07-14%20230510.png?alt=media&token=4641527f-7ce0-407f-8004-e54967a643d5" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem da área de hospedes</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/Screenshot%202024-07-14%20230504.png?alt=media&token=5a21ca6d-4c8f-4653-a53f-f1e1471eb5f2" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem dos quartos com seus respectivos hóspedes</G.Paragraph>
              </P.ImageDescription>
            </P.Post>}
          {integraUfms === 1 &&
            <P.Post>
              <G.Paragraph margin='10px 0' fw="bold" fs="28px">Atualização selecionada do dia 02/12/2024</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="bold" fs="25px">Integra UFMS - Rooming List</G.Paragraph>
              <G.Paragraph margin='10px 0' fw="500" fs="16px">❌<a target='_blank'>Projeto privado para acesso</a>❌</G.Paragraph>
              <G.Paragraph margin='10px 0' fw='bold' fStyle='italic'>Visão Geral</G.Paragraph>
              <G.Paragraph fs="16px" margin='5px 0'>
              Demorei para fazer a atualização, mas vamos lá, pessoal. O evento já passou e nosso sistema foi um sucesso, funcionando da melhor forma possível. Além de economizar tempo, ele também ajudou bastante na organização das planilhas que usamos. Em breve, vou trazer uma última atualização sobre um algoritmo que desenvolvi para criar os anuários de quem participou do evento.

Voltando agora ao projeto: nessa segunda versão, adicionei o que faltava, que era a API do algoritmo implementada no front-end. Uma novidade foi a funcionalidade de backup para o administrador: a cada mudança, é feito um save na nuvem, que fica disponível para o usuário atualizar ou fazer o download do JSON.

Durante o processo, eu e minha coordenadora vimos algumas funcionalidades que poderiam ser implementadas, como desalocar todos os hóspedes, realizar um desalocamento inteligente e trocar hóspedes usando CSV.
              </G.Paragraph>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/integra-1.png?alt=media&token=14c2e698-b8cd-4c81-809d-182fcce50a23" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem do desalocar inteligente</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/integra-3.png?alt=media&token=52aced1e-e544-4cba-95d9-9b74e8568544" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem funcionalidade desalocar todos e desalocar inteligente</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/integra-5.png?alt=media&token=770dcd8c-b87e-4623-87ea-6f1024b4ddbb" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem distribuição automática</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/integra-4.png?alt=media&token=0ce8dd0b-96df-40fb-b9cd-7931ac871f47" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem distribuição automática</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/integra-6.png?alt=media&token=b6aa7585-d317-43fd-a724-ff8bed451e9a" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem novas funcionalidades distribuição automatica e trocar hospedes csv</G.Paragraph>
              </P.ImageDescription>
              <P.ImageDescription>
                <P.Image src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/integra-7.png?alt=media&token=53ffe941-b6af-4b38-a010-03a47a2851d0" />
                <G.Paragraph fStyle='italic' fs='13px'>Imagem do serviço de backup</G.Paragraph>
              </P.ImageDescription>
            </P.Post>}
        </>
    },
    EnsinaGame
  ]

  const socials = [
    { "icon": <CalendarMonthIcon className="iconSocial" />, "text": "08 Out 2023" },
    { "icon": <AccessTimeIcon className="iconSocial" />, "text": "~5 min" },
    { "icon": <LocalOfferIcon className="iconSocial" />, "text": <><a>CSS,</a><a> HTML,</a><a> JavaScript</a></> }
  ]

  return (
    <>
      <P.Profile>
        <P.Banner autoPlay muted loop poster="">
          <source src="../mario.mp4" type="video/mp4" />
        </P.Banner>
        <P.ProfileDate>
          <P.ProfileHeader>
            <P.ProfilePicture src="../../profile4.jpg" />
            <P.ProfileButton>Seguir <TwitterIcon sx={{ width: '18px', height: '18px' }} /></P.ProfileButton>
          </P.ProfileHeader>
          <P.ProfileContent>
            <G.Paragraph fs="36px" fw="bold">{PostTitle?.replace(/-/g, ' ')}</G.Paragraph>
            <G.Paragraph margin="4px 0" fs="22px" fw="500" color="#ADB5BD">Diogo Lima <VerifiedIcon sx={{ color: "var(--roxo);" }} /></G.Paragraph>
          </P.ProfileContent>
          <P.ProfileSocials>
            {socials.map((social) => (
              <P.ProfileSocial>{social.icon}  <G.Paragraph fw="300" fs="17px" color="#868E96">{social.text}</G.Paragraph></P.ProfileSocial>
            ))}
          </P.ProfileSocials>
        </P.ProfileDate>
      </P.Profile>
      <P.ProfilePostContent>
        <P.ProfilePostContentBack>
          <KeyboardBackspaceIcon onClick={() => navigate(`/${location.state.key}`)} sx={{
            color: 'white', width: '32px', height: '32px', cursor: 'pointer', '&:hover': {
              opacity: '0.6'
            }
          }} />
        </P.ProfilePostContentBack>
        {posts.filter((p) => p.postTitle === PostTitle).map((post) => (
          <PostComponent children={post.post} />
        ))}
      </P.ProfilePostContent>
    </>
  )
}
