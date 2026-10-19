import React from 'react';
import { Link } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner.png';

import tipsImage from '../assets/images/tips-image-2.webp';
const tipsPhoto = tipsImage;

const tips = [
  ['01', 'Warm up with intent', 'Raise the pace gradually, then rehearse the movement pattern you are about to train.'],
  ['02', 'Control each rep', 'Choose a tempo and range you can own. Smooth execution makes the work more repeatable.'],
  ['03', 'Progress one variable', 'Add a small amount of time, load or repetitions—not everything in the same session.'],
  ['04', 'Respect recovery', 'Alternate demanding work with easier movement and regular rest days.'],
  ['05', 'Make consistency convenient', 'A shorter session you can repeat often is a better base than a plan you cannot sustain.'],
  ['06', 'Record the small wins', 'A completed session or a movement that felt smoother is useful evidence of progress.'],
  ['07', 'Set your position', 'Check your stance and brace before the first rep. A deliberate setup gives every set a clearer start.'],
  ['08', 'Finish with one in reserve', 'For most general strength work, end a set while you could still perform one controlled rep.'],
  ['09', 'Track one useful detail', 'Log the movement, reps or effort level. A small record makes the next session easier to plan.'],
  ['10', 'Close the session calmly', 'Use a few easy minutes to let your breathing settle before leaving the training floor.'],
];

const Tips = () => (
  <div className="tips-page">
    <section className="page-intro"><div className="page-intro-copy"><span className="eyebrow">Coaching notes / 02</span><h1 className="page-title">TRAIN SMART.<br /><em>RECOVER STRONG.</em></h1><p className="lead">Ten clear cues for better sessions: prepare well, keep your technique controlled and give recovery its place in the plan.</p></div><div className="page-index"><strong>10</strong> Practical cues</div></section>
    <section className="page-photo-row tips-photo-row" aria-label="Coaching and warm-up feature">
      <img src={tipsPhoto} alt="Coach demonstrating a shoulder-mobility warm-up with an adult trainee" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = HeroBannerImage; }} />
      <div className="page-photo-caption"><span className="caption-kicker">COACHING NOTES / 02</span><strong>Good form is a practice.</strong></div>
      <span className="photo-index" aria-hidden="true">MG / 02</span>
    </section>
    <section aria-labelledby="tips-title">
      <div className="section-heading"><div><span className="eyebrow">Technique / consistency / recovery</span><h2 id="tips-title">The details that hold.</h2></div><p>Choose one cue. Apply it to the next session. Keep what works.</p></div>
      <div className="tips-grid">{tips.map(([number, title, body]) => <article className="tip-card reveal" key={number}><span className="tip-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      <div className="tip-callout"><h3>One focused movement is enough to start a stronger session.</h3><Link className="button" to="/training">Explore training <span className="arrow" aria-hidden="true">↗</span></Link></div>
    </section>
  </div>
);

export default Tips;
