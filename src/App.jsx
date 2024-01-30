import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='/:username' element={<ProfilePage />}/>
      </Routes>
      </PageLayout>
    </>
  );
};

export default App;
