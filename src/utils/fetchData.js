export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '4f96d0f638mshbd55116b0691b98p1354a5jsn4b070a36e2d1',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  console.log(url, '->', res.status);
  const data = await res.json();
  if (!res.ok) console.error('API error:', data);
  return data;
};
// New helper: builds the correct image URL for the current ExerciseDB API
export const getExerciseImageUrl = (exerciseId) => {
  const resolution = '180'; // Free tier only supports 180
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;
  return `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}&rapidapi-key=${apiKey}`;
};
