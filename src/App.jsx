import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
      </PageLayout>
    </>
  )
}

export default App
