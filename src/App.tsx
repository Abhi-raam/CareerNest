import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './router/UserRouter'
import CareerGuidanceRouter from './router/CareerGuidanceRouter'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/*' element={<UserRouter/>} />
            <Route path='/career/*' element={<CareerGuidanceRouter/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App