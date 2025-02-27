import { useState } from 'react'
import { getDarkTheme } from '../../http/localStorage/localStorage'
import { Header } from '../../components'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockClockIcon from '@mui/icons-material/LockClock';
import * as R from './styles'
import * as G from '../../globalStyles/globalStyles';

export const RoadMap = () => {
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())

  return (
    <R.Container DarkTheme={darkTheme}>
      <Header DarkThemeProps={darkTheme} setDarkTheme={setDarkTheme} />
      <R.Level>
        <R.LevelHeader>
          <G.Paragraph>
            Level 22
          </G.Paragraph>
          <R.Percent>
            40%
          </R.Percent>
        </R.LevelHeader>
        <R.Bar>
          <R.Progress />
        </R.Bar>
      </R.Level>
      <R.Map>
        <R.LeafMiddle>
          <R.CardTree className="locked">
            <R.Branch className="locked-branch">CTO <span>+50</span> <LockClockIcon /></R.Branch>
          </R.CardTree>
        </R.LeafMiddle>
        <R.LeafHelper>
          <R.Leaf>
            <R.CardTree className="locked">
              <R.Branch className="locked-branch">Dev Senior <span>+44</span> <LockClockIcon /></R.Branch>
            </R.CardTree>
          </R.Leaf>
          <R.Leaf>
            <R.CardTree style={{marginTop: 40}} className="locked">
              <R.Branch className="locked-branch">Dev Pleno <span>+23</span> <LockClockIcon /></R.Branch>
            </R.CardTree>
          </R.Leaf>
        </R.LeafHelper>
        <R.Source>
          <R.Stem>
            <R.CardTree className="locked">
              <R.Branch className="locked-branch">Dev Junior <span>+12</span> <LockClockIcon /></R.Branch>
            </R.CardTree>
          </R.Stem>
          <R.Stem>
            <R.CardTree style={{marginRight: 250}} className="unlocked">
              <R.Branch>Estágio <span>+7</span> <ArrowDropDownIcon /></R.Branch>
            </R.CardTree>
          </R.Stem>
          <R.Stem>
            <R.CardTree style={{marginLeft: 200}} className="unlocked">
              <R.Branch>Estudos <span>+0</span> <ArrowDropDownIcon /></R.Branch>
            </R.CardTree>
          </R.Stem>
        </R.Source>
      </R.Map>
    </R.Container>
  )
}
