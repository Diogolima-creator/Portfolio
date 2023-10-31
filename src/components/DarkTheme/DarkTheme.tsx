import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import * as D from './styles'
import { useState } from 'react';
import * as L from '../../http/localStorage/localStorage';
import { DarkThemeProps } from './types';
import { DarkThemeEnum } from '../../pages/App/types';

export const DarkTheme = ({setDarkTheme}:DarkThemeProps) => {
  const [darkTheme, setDarkThemeState] = useState(L.getDarkTheme())

  const handleDarkTheme = (DarkTheme:keyof typeof DarkThemeEnum) => {
      L.setDarkTheme(DarkTheme)
      setDarkTheme(DarkTheme)
      setDarkThemeState(DarkTheme)
  }

  return (
    <D.Container>
      {(darkTheme === 'dark') ? 
      <LightModeIcon onClick={()=>handleDarkTheme('light')} className="icon" sx={{ color: 'white'}}/>: 
      <NightsStayIcon onClick={()=>handleDarkTheme('dark')} className="icon" sx={{ color: 'grey'}}/>}
    </D.Container>
  )
}
