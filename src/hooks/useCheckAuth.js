import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { FirebaseAuth } from '@features/authentication'
import { useTaskStore, useAuthStore } from '@context'

export const useCheckAuth = () => {
  const { status } = useAuthStore((state) => state.userAuth)
  const logout = useAuthStore((state) => state.logout)
  const login = useAuthStore((state) => state.login)
  const setTasks = useTaskStore((state) => state.setTasks)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return logout()
      login(user)
      setTasks()
    })
  }, [])
  return status
}
