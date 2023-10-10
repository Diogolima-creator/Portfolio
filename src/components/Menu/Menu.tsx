import { About } from '../About/About'
import { Content } from '../Content/Content'
import { Feed } from '../Feed/Feed'
import * as M from './styles'

type MenuProps = {
  menuSelected: number
}
export const Menu = ({menuSelected}:MenuProps) => {
  return (
    <M.Container>
      {menuSelected === 0 && <Feed/>}
      {menuSelected === 1 && <About/>}
      {menuSelected === 2 && <Content/>}
      {menuSelected === 3 && <div>OI3</div>}
    </M.Container>
  )
}
