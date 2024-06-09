import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Principal from './pages/Principal';
import './index.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/home" element={<Principal />} />
    </Routes>
  );
}

export default App;
