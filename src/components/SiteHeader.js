import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MonsterMark from '../assets/images/monster-gym-logo.svg';

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="site-header" id="top">
      <Link to="/" className="brand" onClick={closeMenu} aria-label="Monster Gym home">
        <img className="brand-mark" src={MonsterMark} alt="" />
        <span className="brand-name">MONSTER <span>GYM</span><small>STRENGTH / INTENT</small></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="primary-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        <span /><span />
      </button>
      <nav id="primary-nav" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/training" className={linkClass} onClick={closeMenu}>Training</NavLink>
        <NavLink to="/tips" className={linkClass} onClick={closeMenu}>Tips</NavLink>
        <NavLink to="/nutrition" className={linkClass} onClick={closeMenu}>Nutrition</NavLink>
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
        <NavLink to="/training" className="nav-cta" onClick={closeMenu}>Explore training <span aria-hidden="true">↗</span></NavLink>
      </nav>
    </header>
  );
};

export default SiteHeader;
