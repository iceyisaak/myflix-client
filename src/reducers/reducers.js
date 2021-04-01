import { combineReducers } from 'redux';
import {
  SET_FILTER,
  SET_MOVIES
} from '../actions/actions';

// reducer function
function visibilityFilter(
  // takes in initial state and action
  state = "",
  action
) {

  // Check for the action.type that matches
  switch (action.type) {

    case SET_FILTER:
      return action.value;

    // In case no match is found, return initial state
    default:
      return state;

  }
}

function movies(
  state = [],
  action
) {

  switch (action.type) {

    case SET_MOVIES:
      return action.value;

    default:
      return state;

  }
}

// Group the reducers together into 'movieApp' with combineReducers
const moviesApp = combineReducers({
  visibilityFilter,
  movies
});

// export the reducer functions
export default moviesApp;