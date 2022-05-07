import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Api from './pages/Api';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ResetPassword from './pages/ResetPassword';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/api' exact element={<Api />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/log-in' exact element={<LogIn />} />
        <Route path='/reset-password' exact element={<ResetPassword />} />
        <Route path='/main-page' exact element={<MainPage />} />
      </Routes>
      <Footer />    
    </Router>
    </>
  );
}

export default App;
