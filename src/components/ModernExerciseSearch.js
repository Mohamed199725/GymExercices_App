import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const DEFAULT_BODY_PARTS = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'];

const ModernExerciseSearch = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState(DEFAULT_BODY_PARTS);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let active = true;
    const loadBodyParts = async () => {
      if (!process.env.REACT_APP_RAPID_API_KEY) return;
      try {
        const result = await fetchData(`${BASE_URL}/bodyPartList`, exerciseOptions);
        if (active && Array.isArray(result)) setBodyParts(['all', ...result]);
      } catch (error) {
        if (active) setBodyParts(DEFAULT_BODY_PARTS);
      }
    };
    loadBodyParts();
    return () => { active = false; };
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const term = search.trim().toLowerCase();
    if (!term) return;
    if (!process.env.REACT_APP_RAPID_API_KEY) {
      setMessage('The live exercise search is not configured yet. You can still use the starter movements above.');
      return;
    }
    setMessage('Searching the exercise library…');
    const query = encodeURIComponent(term);
    const matchedBodyParts = bodyParts.filter((part) => part !== 'all' && part.toLowerCase().includes(term));
    const bodyPartQueries = (matchedBodyParts.length ? matchedBodyParts : [term]).map((part) => fetchData(`${BASE_URL}/bodyPart/${encodeURIComponent(part)}`, exerciseOptions));
    try {
      const results = await Promise.all([
        fetchData(`${BASE_URL}/name/${query}`, exerciseOptions),
        fetchData(`${BASE_URL}/target/${query}`, exerciseOptions),
        fetchData(`${BASE_URL}/equipment/${query}`, exerciseOptions),
        ...bodyPartQueries,
      ]);
      const merged = results.filter(Array.isArray).flat();
      const unique = [...new Map(merged.map((item) => [item.id, item])).values()];
      setExercises(unique);
      setMessage(unique.length ? `${unique.length} matching exercise${unique.length === 1 ? '' : 's'} found.` : 'No matches yet. Try a muscle group, equipment type or exercise name.');
      setSearch('');
      window.setTimeout(() => document.getElementById('exercise-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    } catch (error) {
      setMessage('The live exercise service is unavailable right now. Try again later or use the starter movements above.');
    }
  };

  return (
    <section className="exercise-search-section" aria-labelledby="search-title">
      <div className="section-heading"><div><span className="eyebrow">Connected exercise library</span><h2 id="search-title">Explore by movement.</h2></div><p>Search by name, body part, target muscle or equipment.</p></div>
      <form className="search-form" onSubmit={handleSearch}>
        <label className="sr-only" htmlFor="exercise-search">Search exercises</label>
        <input id="exercise-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “squat”, “back” or “dumbbell”…" />
        <button className="button button-dark" type="submit">Search <span className="arrow" aria-hidden="true">↗</span></button>
      </form>
      {message && <p className="search-message" role="status">{message}</p>}
      <div className="bodypart-selector">
        <span className="eyebrow">Browse a body area</span>
        <div className="bodypart-chip-list" role="group" aria-label="Choose a body area">
          {bodyParts.map((part, index) => {
            const selected = bodyPart === part;
            return (
              <button
                key={part}
                type="button"
                className={`bodypart-chip${selected ? ' is-active' : ''}`}
                aria-pressed={selected}
                onClick={() => { setBodyPart(part); setExercises([]); setMessage(''); }}
              >
                <span className="bodypart-chip-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="bodypart-chip-label">{part === 'all' ? 'All areas' : part}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernExerciseSearch;
