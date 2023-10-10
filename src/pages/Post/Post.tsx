import { Header, ProfilePost, Footer } from '../../components'
import * as P from './styles'

export const Post = () => {
  return (
    <P.Container>
      <Header />
      <ProfilePost/>
      <Footer />
    </P.Container>
  )
}
