import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';
import { Navbar } from './Parts/Navigation';
import { Footer } from './Parts/Footer';
import './App.css';

/**
 * Главный компонент приложения, который отображает навигационную панель, сайт и футер.
 */

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;