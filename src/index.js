import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './Layout';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Events from './pages/events/Events';
import Catering from './pages/catering/Catering';
import Reservations from './pages/reservations/Reservations';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="events" element={<Events />} />
          <Route path="catering" element={<Catering />} />
          <Route path="reservations" element={<Reservations />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

