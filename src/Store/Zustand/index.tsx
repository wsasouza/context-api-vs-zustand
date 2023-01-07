import create from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  fullname: string
  email: string
  score: number
}

interface IUserContext {
  user: User
  updateUser: (updateData: Partial<User>) => void
}

export const useStore = create<IUserContext>(
  persist(
    (set) => ({
      user: {
        fullname: '',
        email: '',
        score: 0,
      },
      updateUser: (newUserData) => {
        set((state) => {
          return {
            ...state,
            user: {
              ...state.user,
              ...newUserData,
            },
          }
        })
      },
    }),
    {
      name: 'user-store-persist',
    },
  ),
)
