import * as F from './styles'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {

  const socials = [
    <TwitterIcon className="icon" />,
    <InstagramIcon className="icon" />,
    <GitHubIcon className="icon" />,
    <LinkedInIcon className="icon" />
  ]

  return (
    <F.Container>
      <F.SocialsText>
        <F.Socials>
            {socials.map((icon) => (
              icon
            ))}
        </F.Socials>
        <F.Text>
            diogolima © 2023
        </F.Text>
      </F.SocialsText>
    </F.Container>
  )
}
