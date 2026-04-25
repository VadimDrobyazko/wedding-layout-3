import { createContext, useContext, FC, ReactNode } from 'react'
import type { WeddingConfig } from '@config/wedding.config'

const WeddingConfigContext = createContext<WeddingConfig | null>(null)

type Props = {
  config: WeddingConfig
  children: ReactNode
}

export const WeddingConfigProvider: FC<Props> = ({ config, children }) => (
  <WeddingConfigContext.Provider value={config}>{children}</WeddingConfigContext.Provider>
)

export function useWeddingConfig(): WeddingConfig {
  const ctx = useContext(WeddingConfigContext)
  if (!ctx) throw new Error('useWeddingConfig must be used inside WeddingConfigProvider')
  return ctx
}
