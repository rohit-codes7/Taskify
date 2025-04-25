import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/dashboard'


const App = () => {
  return (
  <>
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
  </>
  )
}

export default App
