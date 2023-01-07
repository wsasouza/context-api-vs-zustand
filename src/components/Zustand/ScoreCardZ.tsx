import { useStore } from '../../Store/Zustand'

export const ScoreCardZ = () => {
  const score = useStore((s) => s.user.score)
  const updateUser = useStore((s) => s.updateUser)

  return (
    <div>
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(ev) => updateUser({ score: parseInt(ev.target.value) })}
      />
    </div>
  )
}
