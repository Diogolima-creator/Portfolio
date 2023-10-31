import { useNavigate } from 'react-router-dom'
import { DarkTheme } from '../DarkTheme/DarkTheme';
import * as H from './styles'
import * as T from './types'

export const Header = ({DarkThemeProps, setDarkTheme}:T.HeaderProps) => {
  const navigate = useNavigate()
  
  return(
    <H.Header DarkTheme={DarkThemeProps}>
      <H.HeaderContent >
        <H.Img onClick={() => navigate('/')} src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/logo.png?alt=media&token=a8b0f549-4b54-4096-a7b3-01a42c2ef342" />
        <DarkTheme setDarkTheme={setDarkTheme}/>
      </H.HeaderContent>
    </H.Header>
  )
}