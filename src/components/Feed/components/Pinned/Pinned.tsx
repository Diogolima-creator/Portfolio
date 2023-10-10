import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as P from './styles'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

export const Pinned = () => {
  return (
    <P.Pinned>
      <FontAwesomeIcon color={'#868E96'} icon={faThumbtack} />
      <P.Text>Post fixado</P.Text>
    </P.Pinned>
  )
}
