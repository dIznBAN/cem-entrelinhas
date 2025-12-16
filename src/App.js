import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Search from './components/Search';
import EpisodeDetails from './components/EpisodeDetails';
import Player from './components/Player';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/episode/:id" element={<EpisodeDetails />} />
            <Route path="/player/:id" element={<Player />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;