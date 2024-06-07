import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Principal from './pages/Principal';
import './index.css';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Login />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/home" element={<Principal />} />
    </Routes>
  );
}

export default App;
