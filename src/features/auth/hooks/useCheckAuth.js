import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { FirebaseAuth } from '@features/auth/firebase'
import { useAuthStore } from '@features/auth/store'
import { useTaskStore } from '@features/tasks/store'

export const useCheckAuth = () => {
  const { status } = useAuthStore((state) => state.userAuth)
  const logout = useAuthStore((state) => state.logout)
  const login = useAuthStore((state) => state.login)
  const setTasks = useTaskStore((state) => state.setTasks)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        return logout()
      }
      login(user)
      setTasks()
    })
  }, [logout, login, setTasks])

  return status
}
