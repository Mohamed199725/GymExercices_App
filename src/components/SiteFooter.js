import React from 'react';
import { Link } from 'react-router-dom';
import MonsterCrest from '../assets/images/monster-gym-crest.svg';

const gymEmail = 'info@monster-gym.tn';
const socialProfiles = [
  { name: 'Instagram', href: '', icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" className="icon-fill" /></> },
  { name: 'YouTube', href: '', icon: <><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="m10 9 5 3-5 3z" className="icon-fill" /></> },
  { name: 'TikTok', href: '', icon: <path d="M14 3v11.2a4.1 4.1 0 1 1-3.5-4.05V6.6a7.1 7.1 0 1 0 6.5 7.1V9.4a9.3 9.3 0 0 0 4 1V6.9A5.9 5.9 0 0 1 15.2 3H14Z" className="icon-fill" /> },
];

const SocialMark = ({ name, icon, href }) => {
  const mark = <svg viewBox="0 0 24 24" role="img" aria-label={name} className="social-mark">{icon}</svg>;
  return href
    ? <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={`Monster Gym on ${name}`}>{mark}</a>
    : <span className="social-link social-link-pending" title={`${name} profile link not supplied`} aria-label={`${name} profile link not supplied`}>{mark}</span>;
};

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand-block">
        <Link className="footer-brand" to="/" aria-label="Monster Gym home">
          <img className="footer-crest" src={MonsterCrest} alt="" />
          <span className="footer-wordmark">MONSTER <strong>GYM</strong></span>
        </Link>
        <p>Strength. Skill. Fuel.<br />A focused guide for the work that lasts.</p>
      </div>
      <nav className="footer-group" aria-label="Explore our services">
        <h2>Explore our services</h2>
        <Link to="/training">Strength training <span aria-hidden="true">↗</span></Link>
        <Link to="/training#exercise-results">Exercise library <span aria-hidden="true">↗</span></Link>
      </nav>
      <nav className="footer-group" aria-label="Our nutrition">
        <h2>Our nutrition</h2>
        <Link to="/nutrition">Balanced plate <span aria-hidden="true">↗</span></Link>
        <Link to="/nutrition">Meal idea tool <span aria-hidden="true">↗</span></Link>
      </nav>
      <nav className="footer-group" aria-label="Our tips">
        <h2>Our tips</h2>
        <Link to="/tips">Training notes <span aria-hidden="true">↗</span></Link>
        <Link to="/about">About Monster Gym <span aria-hidden="true">↗</span></Link>
      </nav>
      <div className="footer-connect">
        <h2>Connect</h2>
        <div className="social-links" aria-label="Monster Gym social media">
          {socialProfiles.map((profile) => <SocialMark key={profile.name} {...profile} />)}
        </div>
        <span className="footer-label">CONTACT</span>
        {gymEmail
          ? <a className="footer-email" href={`mailto:${gymEmail}`}>{gymEmail}</a>
          : <span className="footer-pending">Gym email to be added</span>}
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Monster Gym</span><a href="#top" className="back-top">Back to top <span aria-hidden="true">↑</span></a></div>
  </footer>
);

export default SiteFooter;
