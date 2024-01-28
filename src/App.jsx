import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </>
  )
}

export default App
