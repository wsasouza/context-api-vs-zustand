import { useContext } from 'react'
import { UserContext } from '../../Store/UserContext'

export const Profile = () => {
  const context = useContext(UserContext)
  return (
    <div>
      <input
        type="text"
        placeholder="Nome completo"
        value={context?.user.fullname}
        onChange={(ev) => context?.updateUser({ fullname: ev.target.value })}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={context?.user.email}
        onChange={(ev) => context?.updateUser({ email: ev.target.value })}
      />
    </div>
  )
}
