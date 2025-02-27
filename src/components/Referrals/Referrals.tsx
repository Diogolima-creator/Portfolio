import * as R from './styles'
import * as G from '../../globalStyles/globalStyles'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useNavigate } from 'react-router-dom';

export const Referrals = () => {
  const navigate = useNavigate()

  return (
    <R.Container>
      <R.Referral>
        <R.People>
          <R.PeopleHelper>
            <R.ProfileImg src="liana.jpg"/>
            <div style={{display:'flex', alignItems:'start', flexDirection:'column', justifyContent: 'center' }}>
              <a href="https://sites.google.com/view/lianaduenha/" target="_blank" style={{ color: 'var(--roxo)', cursor:'pointer', fontWeight: 700, fontSize: 18}}>Liana</a>
              <G.Paragraph fs="11px" fw="500" style={{ color: 'grey'}}>Coordenadora - FACOM</G.Paragraph>
            </div>
            <R.ButtonRef>
              <R.Button>
                <CallMadeIcon onClick={() => navigate(`/post/Integra UFMS ⭐`, { state: { key: 'referral' } })}/>
              </R.Button>
            </R.ButtonRef>
          </R.PeopleHelper>
          <G.Paragraph fs="14px" fw="400" fStyle='italic'>" Fui professora do Diogo e ele sempre se destacou como um aluno excepcional. Tivemos a oportunidade de realizar um projeto juntos e, como profissional, mantém as mesmas qualidades que demonstrava em sala de aula: é extremamente dedicado, atencioso e competente. Sempre cumpriu os prazos e, a cada reunião,
            nos mantinha informados sobre o andamento do projeto. Recomendo-o sem ressalvas. "</G.Paragraph>
        </R.People>
      </R.Referral>
    </R.Container>
  )
}
