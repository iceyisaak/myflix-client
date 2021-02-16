import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../main-view/main-view';

export class MainView extends React.Component {

  // Initialise all the states to be used in the component
  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null
    };
  }
 
  // When component is inserted into DOM
  componentDidMount(){

    // Get Data from API
    axios.get('https://myflix-20210211.herokuapp.com/movies/')

    // Then bring in the response from server
    .then(
      response => {
          // Assign result to the state
          this.setState({
            movies: response.data
          });
        }
      )
      .catch(
        (error) => {
        console.log(error);
      });
  }

  onMovieClick(movie){
    this.setState({
      selectedMovie: movie
    });
  }

  render(){

    const { movies, selectedMovie } = this.state;

    if(!movies) return <div className="main-view"></div>;

    return(
      <div className="main-view">
        {selectedMovie 
          ? <MovieView 
              movie={selectedMovie} 
            />
          : movies.map(
            movie => (
              <MovieCard 
                className="movie-card" 
                key={movie._id}
                movie={movie}
                onClick={
                  movie => this.onMovieClick(movie)
                }
              />
            )
          )
        }
      </div>
    );
  }
}