import { useState } from 'react'
import { Header, ProfilePost, Footer } from '../../components'
import { getDarkTheme } from '../../http/localStorage/localStorage'
import * as P from './styles'

export const Post = () => {
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())

  return (
    <P.Container DarkTheme={darkTheme}>
      <Header DarkThemeProps={darkTheme} setDarkTheme={setDarkTheme}/>
      <ProfilePost/>
      <Footer DarkThemeProps={darkTheme}/>
    </P.Container>
  )
}
