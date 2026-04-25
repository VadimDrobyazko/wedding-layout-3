import { Navigate, Route, Routes } from 'react-router-dom'
import WeddingPage from '@modules/Home/page/WeddingPage'

const Router = () => {
  return (
    <Routes>
      <Route path='/:slug' element={<WeddingPage />} />
      <Route path='/' element={<Navigate to='/demo' replace />} />
      <Route path='*' element={<Navigate to='/demo' replace />} />
    </Routes>
  )
}

export default Router
