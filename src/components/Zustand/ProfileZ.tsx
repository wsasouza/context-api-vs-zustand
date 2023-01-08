import { useStore } from '../../Store/Zustand'

export const ProfileZ = () => {
  const fullname = useStore((s) => s.user.fullname)
  const email = useStore((s) => s.user.email)
  const updateUser = useStore((s) => s.updateUser)

  return (
    <div>
      <input
        type="text"
        placeholder="Nome completo"
        className="input"
        value={fullname}
        onChange={(ev) => updateUser({ fullname: ev.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="E-mail"
        className="input"
        value={email}
        onChange={(ev) => updateUser({ email: ev.target.value })}
      />
    </div>
  )
}
