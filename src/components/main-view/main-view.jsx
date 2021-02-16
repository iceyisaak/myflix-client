import React from 'react';
import axios from 'axios';

import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../main-view/main-view';

export class MainView extends React.Component{

  constructor(){
    super();

    // Initialise all the states to be used in the component
    this.state ={
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
      // Handle error
      .catch(
        (error) => {
        console.log(error);
      });
  }

  // When movie is clicked, take in 'the movie data'
  onMovieClick(movie){

    // setState for selectedMovie
    this.setState({
      selectedMovie: movie
    });
  }

  // Render the component 
  render(){

    // If state is NOT initialised, error will be thrown on runtime before data is initially loaded
    const {
      movies,
      selectedMovie
    } = this.state;

    // If movies are NOT found, return this 
    if(!movies){
      return <div className="main-view"></div>;
    }

    // Return the component
    return(
      <div className="main-view">
        {
          // If movie is selected, return <MovieView/>
          selectedMovie ?
          <MovieView
            movie={selectedMovie}
          />
          // Otherwise, return a list of <MovieCard/>
          :
          movies.map(
            movie => (
              <MovieCard 
                className="movie-card" 

                // Use movie._id as a unique key for each <MovieCard/>
                key={movie._id}

                // Pass 'movie data' as prop to each <MovieCard/>
                movie={movie}

                // When clicked,pass 'the movie data' to this function
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