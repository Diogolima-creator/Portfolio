import { useEffect, useState } from 'react'
import { Header, ProfilePost, Footer } from '../../components'
import { getDarkTheme } from '../../http/localStorage/localStorage'
import * as P from './styles'
import { useLocation } from 'react-router-dom'

export const Post = () => {
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())

  const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
  return (
    <P.Container DarkTheme={darkTheme}>
      <Header DarkThemeProps={darkTheme} setDarkTheme={setDarkTheme}/>
      <ProfilePost/>
      <Footer DarkThemeProps={darkTheme}/>
    </P.Container>
  )
}
