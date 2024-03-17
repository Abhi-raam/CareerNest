import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './router/UserRouter'
import CareerGuidanceRouter from './router/CareerGuidanceRouter'
import { CookiesProvider } from 'react-cookie'

function App() {
  return (
    <div>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<UserRouter />} />
            <Route path='/career/*' element={<CareerGuidanceRouter />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  )
}

export default App