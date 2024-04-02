import { useState } from 'react'
import { Header, ProfilePost, Footer } from '../../components'
import { getDarkTheme } from '../../http/localStorage/localStorage'
import * as P from './styles'
import { useLocation } from 'react-router-dom'

export const Post = () => {
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())
  const location = useLocation()
  console.log(location.state)
  
  return (
    <P.Container DarkTheme={darkTheme}>
      <Header DarkThemeProps={darkTheme} setDarkTheme={setDarkTheme}/>
      <ProfilePost/>
      <Footer DarkThemeProps={darkTheme}/>
    </P.Container>
  )
}
