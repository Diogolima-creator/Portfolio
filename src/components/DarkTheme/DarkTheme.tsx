import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import * as D from './styles'
import { useState } from 'react';

export const DarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <D.Container>
      {!darkTheme ? <LightModeIcon onClick={()=>setDarkTheme(!darkTheme)} className="icon" sx={{ color: 'white'}}/>: <NightsStayIcon onClick={()=>setDarkTheme(!darkTheme)} className="icon" sx={{ color: 'white'}}/>}
    </D.Container>
  )
}
