import React, { useState } from 'react';
import ModernExerciseSearch from '../components/ModernExerciseSearch';
import LiveExercises from '../components/LiveExercises';
import HeroBannerImage from '../assets/images/banner.png';

import trainingImage from '../assets/images/training-image-1.webp';
const trainingPhoto = trainingImage;

const starterMoves = [
  ['01', 'Incline push-up', 'Brace through the trunk and press from a stable surface.', 'UPPER BODY'],
  ['02', 'Box squat', 'Set the stance, sit toward the box, then drive up with control.', 'LOWER BODY'],
  ['03', 'Glute bridge', 'Keep the ribs quiet and lift the hips through a smooth range.', 'LOWER BODY'],
];

const Training = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div className="training-page">
      <section className="page-intro">
        <div className="page-intro-copy"><span className="eyebrow">Training / 01</span><h1 className="page-title">STRENGTH STARTS<br /><em>WITH THE NEXT REP.</em></h1><p className="lead">Choose a movement, set your focus and work through controlled reps. Use the starter ideas or search the connected exercise library.</p></div>
        <div className="page-index"><strong>01</strong> Strength / movement</div>
      </section>
      <section className="page-photo-row training-photo-row" aria-label="Strength-training feature">
        <img src={trainingPhoto} alt="Athlete performing a controlled barbell deadlift in a modern strength gym" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = HeroBannerImage; }} />
        <div className="page-photo-caption"><span className="caption-kicker">TRAINING FLOOR / 01</span><strong>Strength, by design.</strong></div>
        <span className="photo-index" aria-hidden="true">MG / 01</span>
      </section>
      <section aria-labelledby="starter-title">
        <div className="section-heading"><div><span className="eyebrow">Movement library</span><h2 id="starter-title">Build the basics.</h2></div><p>Start light, move with control and adapt each option to your ability.</p></div>
        <div className="movement-grid">
          {starterMoves.map(([number, title, description, tag]) => <article className="movement-card reveal" key={title}><div className="exercise-top"><span className="card-index">{number} / MOVE</span><span className="exercise-tag">{tag}</span></div><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>
      <ModernExerciseSearch setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      <LiveExercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  );
};

export default Training;
