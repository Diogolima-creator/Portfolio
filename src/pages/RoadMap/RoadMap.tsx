import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockClockIcon from '@mui/icons-material/LockClock';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import * as G from '../../globalStyles/globalStyles';
import { getDarkTheme } from '../../http/localStorage/localStorage';
import * as R from './styles';

export const RoadMap = () => {
  const [darkTheme, setDarkTheme] = useState(getDarkTheme())
  const navigate = useNavigate()

  return (
    <R.Container DarkTheme={darkTheme}>
      <Header DarkThemeProps={darkTheme} setDarkTheme={setDarkTheme} />
      
             <div style={{ 
         display: 'flex', 
         justifyContent: 'center', 
         alignItems: 'center', 
         gap: '15px',
         marginTop: '80px',
         marginLeft: 'auto',
         marginRight: 'auto'
       }}>
         <div style={{ 
           display: 'flex', 
           justifyContent: 'center', 
           alignItems: 'center', 
           padding: '12px 24px',
           background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
           borderRadius: '8px',
           boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)',
           maxWidth: 'fit-content'
         }}>
           <G.Paragraph 
             fs="16px" 
             fw="bold" 
             color="white"
             style={{ margin: 0 }}
           >
             🚧 Em desenvolvimento!
           </G.Paragraph>
         </div>
         
         <button 
           onClick={() => navigate('/')}
           style={{
             display: 'flex',
             alignItems: 'center',
             gap: '8px',
             padding: '12px 20px',
             background: 'var(--roxo)',
             border: 'none',
             borderRadius: '8px',
             color: 'white',
             cursor: 'pointer',
             fontSize: '14px',
             fontWeight: 'bold',
             transition: 'all 0.3s ease',
             boxShadow: '0 2px 8px rgba(255, 51, 187, 0.3)'
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'translateY(-2px)';
             e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 51, 187, 0.4)';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'translateY(0)';
             e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 51, 187, 0.3)';
           }}
         >
           <ArrowBackIcon style={{ fontSize: '18px' }} />
           Voltar
         </button>
       </div>
      
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
