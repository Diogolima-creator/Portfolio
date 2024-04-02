import * as P from './styles'
import * as G from '../../globalStyles/globalStyles'
import VerifiedIcon from '@mui/icons-material/Verified';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkIcon from '@mui/icons-material/Link';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircularProgress from '@mui/material/CircularProgress';
import emailjs from '../../services/emailjs';
import { DarkThemeEnum } from '../../pages/App/types';
import { useState } from 'react';

type ProfileProps = {
  menuSelected: number
  setMenuSelected:React.Dispatch<React.SetStateAction<number>>
  DarkThemeProps: keyof typeof DarkThemeEnum
}

export const Profile = ({menuSelected, setMenuSelected, DarkThemeProps}:ProfileProps) => {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const socials = [
    {"icon":<BusinessCenterIcon className="iconSocial"/>, "text": "Disponivel"},
    {"icon":<LinkIcon className="iconSocial"/>, "text":<a href="https://linktr.ee/diogolimadev" target="_blank">/links</a>},
    {"icon":<CakeIcon className="iconSocial"/>, "text": "14 de Agosto"},
    {"icon":<CalendarMonthIcon className="iconSocial"/>, "text": "Entrou Out 2023"}
  ]

  const menu = ['Início', 'Sobre', 'Conteudo']

  async function handleSendEmail () {
    const serviceId = 'service_9vo3z8s'
    const templateId = 'template_j7jphqj'

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: 'Diogo',
        recipient: email
      });
      alert("email enviado com sucesso");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <P.Profile DarkTheme={DarkThemeProps}>
      <P.Banner autoPlay muted>
        <source src="mario.mp4" type="video/mp4"/>
      </P.Banner>
      <P.ProfileDate>
        <P.ProfileHeader>
            <P.ProfilePicture src="profile2.jpg"/>
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
            {!loading ? <P.EmailInput>
              <P.Input placeholder='Seu endereço de email' onChange={(e) => setEmail(e.target.value)}/>
              <P.Button onClick={() => handleSendEmail()}>Receber!</P.Button>
            </P.EmailInput> : <CircularProgress sx={{ color: "hsl(320 100% 60%);", margin:"15px 0" }} />}
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
