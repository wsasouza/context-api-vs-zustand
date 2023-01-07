import React, { createContext, useState } from 'react'

type User = {
  fullname: string
  email: string
  score: number
}

interface IUserContext {
  user: User
  updateUser: (updateData: Partial<User>) => void
}

export const UserContext = createContext<IUserContext | null>(null)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User>({
    fullname: '',
    email: '',
    score: 0,
  })

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }))
  }

  return (
    <UserContext.Provider value={{ updateUser, user }}>
      {children}
    </UserContext.Provider>
  )
}
