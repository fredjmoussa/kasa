import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Fiche from './pages/Fiche';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


/*
import React, { Fragment } from "react"

import { BrowserRouter as Router, Route, Link, Routes, Navigate, } from "react-router-dom"

export default function App() {

  const logement = "Cozy loft on the Canal Saint-Martin"
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/fichelogement">Fiche Logement</Link>
            </li>
          </ul>
        </nav>
        ;<Routes>
            <Route path="/" exact element={Home} />          
            <Route path="/about" element={About} />
            <Route path="/fichelogement" element={FicheLogement} />
            <Route render={() => <h1>404 Oups! La page que vous demandez n'existe pas</h1>} />
        </Routes>
      </main>
    </Router>
  )
}
*/
