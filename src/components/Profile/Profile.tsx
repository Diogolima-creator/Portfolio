import * as P from './styles'
import * as G from '../../globalStyles/globalStyles'
import VerifiedIcon from '@mui/icons-material/Verified';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkIcon from '@mui/icons-material/Link';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


type ProfileProps = {
  menuSelected: number
  setMenuSelected:React.Dispatch<React.SetStateAction<number>>
}
export const Profile = ({menuSelected, setMenuSelected}:ProfileProps) => {

  const socials = [
    {"icon":<BusinessCenterIcon className="iconSocial"/>, "text": "Disponivel"},
    {"icon":<LinkIcon className="iconSocial"/>, "text":<a href="https://linktr.ee/diogolimadev" target="_blank">/links</a>},
    {"icon":<CakeIcon className="iconSocial"/>, "text": "14 de Agosto"},
    {"icon":<CalendarMonthIcon className="iconSocial"/>, "text": "Entrou Out 2023"}
  ]

  const menu = ['Início', 'Sobre', 'Conteudo']

  return (
    <P.Profile>
      <P.Banner autoPlay muted>
        <source src="mario.mp4" type="video/mp4"/>
      </P.Banner>
      <P.ProfileDate>
        <P.ProfileHeader>
            <P.ProfilePicture src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/profile.jpg?alt=media&token=38662564-570f-4d05-b1f9-14174afac204"/>
            <P.ProfileButton>Seguir <TwitterIcon /></P.ProfileButton>
        </P.ProfileHeader>
        <P.ProfileContent>
            <P.Title>Diogo Lima <VerifiedIcon sx={{ color: "hsl(320 100% 60%)"}} /></P.Title>
            <G.Paragraph>Brings ideas to life with code! ✨</G.Paragraph>
            <G.Paragraph margin='6px 0px'>Junior Web Engineer. Creative Developer.</G.Paragraph>
        </P.ProfileContent>
        <P.ProfileSocials>
              {socials.map((social) => (
                <P.ProfileSocial>{social.icon}  <G.Paragraph fw="300" fs="17px" color="#868E96">{social.text}</G.Paragraph></P.ProfileSocial>
              ))}
        </P.ProfileSocials>
        <P.ProfileEmail>
          <P.EmailContent>
            <G.Paragraph fs="16px">Para entrar em contato comigo, deixe seu email!</G.Paragraph>
            <P.EmailInput>
              <P.Input placeholder='Seu endereço de email'></P.Input>
              <P.Button>Receber!</P.Button>
            </P.EmailInput>
            <G.Paragraph fs="14px" color="#868E96">Sem spam. O email será enviado uma vez.</G.Paragraph>
          </P.EmailContent>
        </P.ProfileEmail>
        <P.MenuSelect>
          {menu.map((item, key) => (
            <P.MenuItem onClick={() => setMenuSelected(key)}>
              <G.Paragraph className={key === menuSelected ? 'selected' : key.toString()} fs="16px" fw="bold">{item}</G.Paragraph>
            </P.MenuItem>
          ))}
          <P.MenuItem className="disabled">
              <G.Paragraph  fs="16px" fw="bold">Indicações</G.Paragraph>
          </P.MenuItem>
        </P.MenuSelect>
      </P.ProfileDate>
    </P.Profile>
  )
}
