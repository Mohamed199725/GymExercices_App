import React from 'react';
import { Link } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner.png';

import aboutImage from '../assets/images/about-image-4.webp';
const aboutPhoto = aboutImage;

const About = () => (
  <div className="about-page">
    <section className="page-intro"><div className="page-intro-copy"><span className="eyebrow">About / The training standard</span><h1 className="page-title">BUILT FOR<br /><em>LASTING STRENGTH.</em></h1><p className="lead">Monster Gym is a practical training guide built around good movement, clear information and progress you can sustain.</p></div><div className="page-index"><strong>MG</strong> Our approach</div></section>
    <section className="page-photo-row about-photo-row" aria-label="Monster Gym community feature">
      <img src={aboutPhoto} alt="A supportive group of adult gym members sharing a post-session moment with their coach" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = HeroBannerImage; }} />
      <div className="page-photo-caption"><span className="caption-kicker">THE MONSTER GYM STANDARD</span><strong>Strength is built together.</strong></div>
      <span className="photo-index" aria-hidden="true">MG / 03</span>
    </section>
    <section className="about-grid">
      <article className="about-panel"><span className="eyebrow">Our point of view</span><h2>Clear guidance. Serious intent.</h2><p>Monster Gym brings training search, practical cues and uncomplicated food guidance into one focused space. It is not a rigid program or a shortcut. It is a place to learn a movement, choose a next step and keep the work grounded in your real routine.</p></article>
      <div className="about-values">
        <div className="value-row"><span>01</span><p><strong>Precision over noise.</strong> Find the cue that improves the next rep.</p></div>
        <div className="value-row"><span>02</span><p><strong>Consistency over extremes.</strong> Build a routine that can return tomorrow.</p></div>
        <div className="value-row"><span>03</span><p><strong>Strength with perspective.</strong> Train hard, adapt intelligently and respect recovery.</p></div>
        <Link className="button button-dark" to="/training">Explore the training floor <span className="arrow" aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </div>
);

export default About;
