import { DarkThemeEnum } from '../../pages/App/types'
import { About } from '../About/About'
import { Content } from '../Content/Content'
import { Feed } from '../Feed/Feed'
import * as M from './styles'

type MenuProps = {
  menuSelected: number
  DarkThemeProps: keyof typeof DarkThemeEnum
}
export const Menu = ({menuSelected, DarkThemeProps}:MenuProps) => {
  return (
    <M.Container DarkTheme={DarkThemeProps}>
      {menuSelected === 0 && <Feed/>}
      {menuSelected === 1 && <About/>}
      {menuSelected === 2 && <Content/>}
    </M.Container>
  )
}
