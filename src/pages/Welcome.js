import React from 'react';
import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero';

const Welcome = () => (
  <div className="home-page">
    <HomeHero />
    <section className="home-intro" aria-labelledby="intro-title">
      <div className="intro-label"><span className="eyebrow">The Monster Gym standard</span><span id="intro-title">Built for real training</span></div>
      <p className="intro-copy">Monster Gym brings <strong>strength, skill and everyday fuel</strong> into one focused training guide. Find your next movement, learn the cue that matters and keep progress practical.</p>
    </section>
    <section aria-labelledby="pathways-title">
      <div className="section-heading"><div><span className="eyebrow">Choose your focus</span><h2 id="pathways-title">Three ways forward.</h2></div><p>Pick the resource that fits today's session.</p></div>
      <div className="pathways">
        <Link className="pathway-card reveal" to="/training"><span className="card-index">01 / BUILD</span><div><h3>Strength training</h3><p>Explore movements, target areas and the connected exercise library.</p></div><span className="card-arrow" aria-hidden="true">↗</span></Link>
        <Link className="pathway-card reveal" to="/tips"><span className="card-index">02 / REFINE</span><div><h3>Training cues</h3><p>Practical reminders for technique, consistency and recovery.</p></div><span className="card-arrow" aria-hidden="true">↗</span></Link>
        <Link className="pathway-card reveal" to="/nutrition"><span className="card-index">03 / REFUEL</span><div><h3>Everyday nutrition</h3><p>Use the plate guide to build a flexible, satisfying meal idea.</p></div><span className="card-arrow" aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </div>
);

export default Welcome;
