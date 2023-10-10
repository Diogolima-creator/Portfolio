import * as A from './styles'
import { Header, Profile, Menu, Footer } from '../../components'
import { useState } from 'react'

export const App = () => {
  const [menuSelected, setMenuSelected] = useState(0)
  
  return(
    <A.Container>
      <Header />
      <A.Img src="https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/logo2.png?alt=media&token=bbf79b6c-bbe6-4d20-96ba-d55ecbb351e7" />
      <Profile menuSelected={menuSelected} setMenuSelected={setMenuSelected} />
      <Menu menuSelected={menuSelected}/>
      <Footer />
    </A.Container>
  )
}
