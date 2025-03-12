import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header'; // On va créer un composant Header
import Footer from './components/Footer'; // On va créer un composant Footer

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Autres routes si besoin */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
