import useSessionStore from 'store/session/store'

const useInitialFetch = () => useSessionStore((state) => state.initialFetch)

export const sessionSelectors = {
  useInitialFetch,
}
