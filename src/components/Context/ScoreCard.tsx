import { useContext } from 'react'
import { UserContext } from '../../Store/UserContext'

export const ScoreCard = () => {
  const context = useContext(UserContext)
  return (
    <div>
      <input
        type="number"
        placeholder="Score"
        value={context?.user.score}
        onChange={(ev) =>
          context?.updateUser({ score: parseInt(ev.target.value) })
        }
      />
    </div>
  )
}
