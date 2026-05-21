import { useParams, Navigate } from 'react-router-dom'
import { WeddingConfigProvider } from '@context/WeddingConfigContext'
import { clients } from '@clients/index'
import Home from './Home'

export default function WeddingPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) return <Navigate to='/demo' replace />

  const config = clients[slug]
  if (!config) return <Navigate to='/demo' replace />

  return (
    <WeddingConfigProvider config={config}>
      <Home />
    </WeddingConfigProvider>
  )
}
