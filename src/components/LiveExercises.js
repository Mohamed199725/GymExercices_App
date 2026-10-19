import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const LiveExercises = ({ exercises, setExercises, bodyPart }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const perPage = 6;

  useEffect(() => {
    let active = true;
    const loadExercises = async () => {
      setLoading(true);
      setUnavailable(false);
      setPage(1);
      if (!process.env.REACT_APP_RAPID_API_KEY) {
        setExercises([]);
        setUnavailable(true);
        setLoading(false);
        return;
      }
      const url = bodyPart === 'all'
        ? 'https://exercisedb.p.rapidapi.com/exercises'
        : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${encodeURIComponent(bodyPart)}`;
      try {
        const data = await fetchData(url, exerciseOptions);
        if (!active) return;
        if (Array.isArray(data)) setExercises(data);
        else { setExercises([]); setUnavailable(true); }
      } catch (error) {
        if (active) { setExercises([]); setUnavailable(true); }
      } finally {
        if (active) setLoading(false);
      }
    };
    loadExercises();
    return () => { active = false; };
  }, [bodyPart, setExercises]);

  const totalPages = Math.ceil(exercises.length / perPage);
  const visible = exercises.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="live-results" id="exercise-results" aria-labelledby="results-title">
      <div className="section-heading"><div><span className="eyebrow">From the exercise database</span><h2 id="results-title">{bodyPart === 'all' ? 'Showing results' : `Focus: ${bodyPart}`}</h2></div><p>Open any movement for its details, video ideas and related exercises.</p></div>
      {loading && !visible.length ? <Loader /> : null}
      {!loading && visible.length > 0 && <>
        <div className="api-exercise-grid">{visible.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)}</div>
        {totalPages > 1 && <div className="pagination-wrap"><Pagination page={page} count={totalPages} onChange={(event, value) => { setPage(value); document.getElementById('exercise-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} color="standard" shape="rounded" size="large" /></div>}
      </>}
      {!loading && !visible.length && <div className="api-fallback" role="status"><span className="note-icon" aria-hidden="true">i</span><p>{unavailable ? 'Live search is not available in this preview yet. The starter movement ideas above are ready to explore.' : 'No exercises matched this search. Try another body area or search term.'}</p></div>}
    </section>
  );
};

export default LiveExercises;
