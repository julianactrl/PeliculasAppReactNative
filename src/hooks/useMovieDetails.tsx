import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {MovieDetail} from '../interfaces/movieInterface';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieDetail;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMovieDetail = async () => {
    const movieDetailPromise = movieDb.get<MovieDetail>(`/${movieId}`);
    const castPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`);
    const [movieDetailResponse, castPromiseResponse] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  return {...state};
};
