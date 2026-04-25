import { create } from 'zustand'
import { isAxiosError } from 'axios'
import { sessionService, TUser } from 'services/sessionService'

export type SessionStore = {
  isError: string | null | unknown
  isLoading: boolean
  isLoggedIn: boolean
  user: TUser | null
}

type SessionActions = {
  initialFetch: () => Promise<void>
}

const initialState: SessionStore = {
  isError: null,
  isLoading: false,
  isLoggedIn: false,
  user: null,
}

const useSessionStore = create<SessionStore & SessionActions>((set) => ({
  ...initialState,
  initialFetch: async () => {
    set({ isLoading: true })
    try {
      const { data } = await sessionService.getSession()
      set({ ...data, isLoading: false, isLoggedIn: true })
    } catch (error) {
      if (isAxiosError(error)) {
        set({ isError: { ...error.response?.data, location: 'User-> initialFetch' } })
        return
      }
      set({ isError: { error, location: 'User-> initialFetch' } })
      console.log(error)
    } finally {
      set({ isLoading: false })
    }
  },
}))

export default useSessionStore
