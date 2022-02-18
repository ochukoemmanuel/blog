import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/index';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Single from './pages/Single';
import Dashboard from './pages/Dashboard';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [Nav, setNav] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      {!Nav ? <></> : <Navbar toggle={toggle} />}
      <Dropdown className='absolute' isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home Nav={() => setNav(true)} />} />
        <Route
          path='/dashboard'
          element={<Dashboard Nav={() => setNav(false)} />}
        />
        <Route
          path='/single/:id'
          element={<Single Nav={() => setNav(true)} />}
        />
        <Route path='/contact' element={<Contact Nav={() => setNav(true)} />} />
        <Route
          path='/*'
          element={
            <div>
              <h1 className='center-content my-20 text-5xl h-screen'>404</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
