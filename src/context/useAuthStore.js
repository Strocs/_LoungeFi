import { create } from 'zustand'
import {
  loginWithEmailAndPassword,
  registerUserWithEmailAndPassword,
  signInWithGoogle
} from '@features/authentication'

export const useAuthStore = create((set, get) => ({
  userAuth: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },

  login: ({ uid, email, displayName, photoURL }) =>
    set({
      userAuth: {
        status: 'authenticated',
        uid,
        email,
        displayName,
        photoURL,
        errorMessage: null
      }
    }),

  logout: errorMessage => {
    set({
      userAuth: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage
      }
    })
  },

  checkingCredentials: () =>
    set(state => ({
      userAuth: {
        ...state.userAuth,
        status: 'checking'
      }
    })),

  startEmailAndPasswordSignIn: async userData => {
    get().checkingCredentials()

    const resp = await loginWithEmailAndPassword(userData)

    if (!resp.ok) return get().logout(resp.errorMessage)

    get().login(resp)
  },

  startCreatingUserWithEmailAndPassword: async userData => {
    get().checkingCredentials()

    const resp = await registerUserWithEmailAndPassword(userData)

    if (!resp.ok) return get().logout(resp.errorMessage)

    get().login(resp)
  },

  startGoogleSignIn: async () => {
    get().checkingCredentials()

    const resp = await signInWithGoogle()

    if (!resp.ok) return get().logout(resp.errorMessage)

    get().login(resp)
  }
}))
