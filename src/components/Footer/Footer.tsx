import * as F from './styles'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {

  const socials = [
    {"icon":<TwitterIcon className="icon" />},
    {"icon":<InstagramIcon className="icon" />, "link": "https://www.instagram.com/diogodevlima/"},
    {"icon":<GitHubIcon className="icon" />, "link": "https://github.com/Diogolima-creator"},
    {"icon":<LinkedInIcon className="icon" />, "link": "https://www.linkedin.com/in/diogo-lima1408/"}
  ]

  return (
    <F.Container>
      <F.SocialsText>
        <F.Socials>
            {socials.map((item) => (
              <a href={item.link} target='_blank'>{item.icon}</a>
            ))}
        </F.Socials>
        <F.Text>
            diogolima © 2023
        </F.Text>
      </F.SocialsText>
    </F.Container>
  )
}
