import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LibraryDetails from './pages/LibraryDetails';



const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/library/:id" element={<LibraryDetails />} />
      </Routes>
      
      <Footer />
    
    </Router>
  );
};

export default App;

