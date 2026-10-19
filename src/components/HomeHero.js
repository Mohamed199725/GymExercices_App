import React from 'react';
import { Link } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner.png';

const generatedHero = '/manus-storage/async-images/44tal2YtW9jgiOr0pq4MTp/image-1.webp';

const HomeHero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <span className="eyebrow">Monster Gym / Built for the next set</span>
      <h1 id="hero-title" className="display">TRAIN WITH<br />INTENT.<br /><em>LEAVE STRONGER.</em></h1>
      <p className="lead">A focused guide to strength training, useful coaching cues and everyday fuel. No noise. No shortcuts. Just a stronger routine, built one good rep at a time.</p>
      <div className="hero-actions">
        <Link className="button button-dark" to="/training">Enter the training floor <span className="arrow" aria-hidden="true">↗</span></Link>
        <Link className="text-link" to="/tips">Read the playbook <span aria-hidden="true">→</span></Link>
      </div>
      <div className="hero-note"><span className="dot" aria-hidden="true" />Strength. Technique. Recovery.</div>
    </div>
    <div className="hero-visual">
      <img className="hero-image" src={generatedHero} alt="An athlete focused on a dumbbell strength exercise" loading="eager" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = HeroBannerImage; }} />
      <div className="image-caption"><div><span className="caption-kicker">01 / TRAIN WITH INTENT</span><strong>Earn the next rep.</strong></div><span className="caption-mark" aria-hidden="true">↗</span></div>
    </div>
  </section>
);

export default HomeHero;
