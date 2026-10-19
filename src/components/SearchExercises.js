import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // Same as your original: only loads the body part list on mount
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${BASE_URL}/bodyPartList`, exerciseOptions);

      if (Array.isArray(bodyPartsData)) {
        setBodyParts(['all', ...bodyPartsData]);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    const term = search.trim().toLowerCase();
    if (!term) return;

    const q = encodeURIComponent(term);

    // Body parts that partially match the term (e.g. "legs" -> "upper legs", "lower legs")
    const matchedBodyParts = bodyParts.filter((part) => part !== 'all' && part.toLowerCase().includes(term));
    const bodyPartQueries = (matchedBodyParts.length ? matchedBodyParts : [term]).map((part) => fetchData(`${BASE_URL}/bodyPart/${encodeURIComponent(part)}`, exerciseOptions));

    // Search every category in parallel
    const results = await Promise.all([
      fetchData(`${BASE_URL}/name/${q}`, exerciseOptions),
      fetchData(`${BASE_URL}/target/${q}`, exerciseOptions),
      fetchData(`${BASE_URL}/equipment/${q}`, exerciseOptions),
      ...bodyPartQueries,
    ]);

    // Keep only valid arrays, merge them, and remove duplicates by id
    const merged = results.filter(Array.isArray).flat();
    const unique = [...new Map(merged.map((item) => [item.id, item])).values()];

    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    setSearch('');
    setExercises(unique);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
