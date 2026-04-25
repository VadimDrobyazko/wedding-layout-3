import { BrowserRouter } from 'react-router-dom'
import Router from '@router/Router'
import './App.css'

const App = () => {
  //   useEffect(() => {
  //     if (window.Telegram?.WebApp) {
  //       window.Telegram.WebApp.expand()
  //     }
  //   }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
