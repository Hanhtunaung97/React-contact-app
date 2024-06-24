import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './page/Register.page'
import LoginPage from './page/Login.page'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </main>
  )
}

export default App