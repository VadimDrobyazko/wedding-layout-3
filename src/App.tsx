import { BrowserRouter } from 'react-router-dom'
import Router from '@router/Router'
import PageLoader from './components/PageLoader/PageLoader'
import { usePageLoader } from '@hooks/usePageLoader'
import { clients } from '@clients/index'
import './App.css'

function AppContent() {
  const { progress, done } = usePageLoader()

  const slug = window.location.pathname.replace(/^\//, '').split('/')[0]
  const couple = clients[slug]?.couple

  return (
    <>
      <PageLoader progress={progress} done={done} couple={couple} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

const App = () => <AppContent />

export default App
