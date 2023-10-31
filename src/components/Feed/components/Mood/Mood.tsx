import * as M from './styles'
import * as G from '../../../../globalStyles/globalStyles'

type MoodProps = {
  mood: string
}
export const Mood = ({mood}: MoodProps) => {

  return (
    <M.Mood>
        <G.Paragraph fs='14px' fw='bold'><span>{mood}</span></G.Paragraph>
    </M.Mood>
  )
}
