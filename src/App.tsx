/**
 * Dependencies
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

/**
 * Pages
 */
import Home from './pages/Home';
import Play from './pages/Play';
import Score from './pages/Score';

/**
 * Components
 */
import Header from './components/Header';

/**
 * Component
 */
const App: React.FC = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="play" element={<Play />} />
            <Route path="score" element={<Score />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
