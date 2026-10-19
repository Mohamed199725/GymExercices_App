import React, { useState } from 'react';
import PlateIllustration from '../assets/images/plate-illustration.svg';
import nutritionImage from '../assets/images/nutrition-image-3.webp';

const Nutrition = () => {
  const [protein, setProtein] = useState('Beans or lentils');
  const [grain, setGrain] = useState('Brown rice');
  const [produce, setProduce] = useState('Leafy greens');
  const [idea, setIdea] = useState('Choose a few ingredients and we’ll build a straightforward plate idea.');

  const suggestMeal = (event) => {
    event.preventDefault();
    setIdea(`Pair ${protein} with ${grain} and ${produce}. Add seasoning you enjoy and adjust the portions to suit you.`);
  };

  const generatedFood = nutritionImage;

  return (
    <div className="nutrition-page">
      <section className="page-intro"><div className="page-intro-copy"><span className="eyebrow">Nutrition / 03</span><h1 className="page-title">FUEL THE WORK.<br /><em>KEEP IT BALANCED.</em></h1><p className="lead">Straightforward food guidance for everyday training. Combine produce, protein and a satisfying carbohydrate; choose ingredients that fit your routine.</p></div><div className="page-index"><strong>03</strong> Food / fuel</div></section>
      <section className="nutrition-layout" aria-label="Balanced plate guide and meal ideas">
        <div className="nutrition-photo"><img src={generatedFood} alt="A balanced meal with vegetables, grains and a protein source" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = PlateIllustration; }} /><span className="photo-tag">EVERYDAY FUEL / 03</span></div>
        <form className="plate-card" onSubmit={suggestMeal}><h2>Build a balanced plate</h2><p>A flexible starting point: include produce, a protein source and a satisfying carbohydrate. There is no single right plate.</p>
          <div className="plate-visual" role="img" aria-label="One half produce, one quarter protein and one quarter grains"><span>½ produce</span><span>¼ protein</span><span>¼ grains</span></div>
          <div className="plate-fields">
            <label>Choose a protein<select value={protein} onChange={(event) => setProtein(event.target.value)}><option>Beans or lentils</option><option>Eggs</option><option>Tofu</option><option>Fish</option><option>Chicken</option></select></label>
            <label>Choose a grain<select value={grain} onChange={(event) => setGrain(event.target.value)}><option>Brown rice</option><option>Potatoes</option><option>Wholegrain bread</option><option>Quinoa</option></select></label>
            <label>Add produce<select value={produce} onChange={(event) => setProduce(event.target.value)}><option>Leafy greens</option><option>Tomato and peppers</option><option>Broccoli</option><option>Seasonal vegetables</option></select></label>
          </div>
          <button className="button button-dark" type="submit">Build my plate <span className="arrow" aria-hidden="true">↗</span></button>
          <div className="meal-result" role="status" aria-live="polite">{idea}</div>
        </form>
      </section>
      <section className="nutrition-principles" aria-label="Nutrition principles">
        <article className="nutrition-point"><strong>Keep it varied</strong><p>Different colors and food groups bring different nutrients. Variety can happen across a day or week.</p></article>
        <article className="nutrition-point"><strong>Find what satisfies</strong><p>Combine foods you enjoy in a way that leaves you comfortably nourished and ready for your day.</p></article>
        <article className="nutrition-point"><strong>Drink to thirst</strong><p>Keep water available and adjust your fluids to the weather, your movement and personal needs.</p></article>
      </section>
      <p className="disclaimer">This page offers general educational ideas, not individual medical or nutrition advice. Personal needs vary; for tailored guidance, consult a qualified healthcare or nutrition professional.</p>
    </div>
  );
};

export default Nutrition;
