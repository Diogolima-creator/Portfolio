import * as A from './styles'
import { Header, Profile, Menu, Footer } from '../../components'
import { useState } from 'react'
import { getDarkTheme } from '../../http/localStorage/localStorage'
import { useParams } from 'react-router-dom';

export const App = () => {

  const { content } = useParams()
  const [menuSelected, setMenuSelected] = useState(content === 'about' ? 1 : content === 'content' ? 2 : 0 )
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())

  return(
    <A.Container DarkTheme={darkTheme}>
      <Header DarkThemeProps={darkTheme} setDarkTheme={setDarkTheme}/>
      <A.Img src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/logo2.png?alt=media&token=bbf79b6c-bbe6-4d20-96ba-d55ecbb351e7" />
      <Profile DarkThemeProps={darkTheme} menuSelected={menuSelected} setMenuSelected={setMenuSelected} />
      <Menu DarkThemeProps={darkTheme} menuSelected={menuSelected}/>
      <Footer DarkThemeProps={darkTheme}/>
    </A.Container>
  )
}
