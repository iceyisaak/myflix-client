export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';

// Action setMovies takes in value
export function setMovies(value) {

  // return types and value
  return {
    type: SET_MOVIES,
    value
  };
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value
  };
}