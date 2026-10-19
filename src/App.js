import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import './site.css';
import './existing-app.css';
import About from './pages/About';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Welcome';
import Nutrition from './pages/Nutrition';
import Tips from './pages/Tips';
import Training from './pages/Training';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <main className="page-shell page-enter" key={location.pathname} id="main-content" tabIndex="-1">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="*" element={<section className="page-intro"><div className="page-intro-copy"><span className="eyebrow">Page not found</span><h1 className="page-title">Find your<br /><em>next rep.</em></h1><p className="lead">That route is outside the training floor. Head back to Monster Gym and choose another direction.</p><Link className="button button-dark" to="/">Back to the floor <span className="arrow" aria-hidden="true">↗</span></Link></div></section>} />
      </Routes>
    </main>
  );
};

const App = () => {
  const { pathname } = useLocation();
  const route = pathname.replace(/\/+$/, '') || '/';
  const showFooter = route === '/' || route === '/about';

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <SiteHeader />
      <AnimatedRoutes />
      {showFooter && <SiteFooter />}
    </div>
  );
};

export default App;
