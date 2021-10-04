import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9258ad30b9c02bcdc140cadcd8f72470',
    language: 'es-ES',
  },
});

export default movieDb;
