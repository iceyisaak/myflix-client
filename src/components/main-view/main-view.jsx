import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
// import { MovieView } from '../movie-view/movie-view';
import { MovieView2 } from '../movie-view/movie-view2';

export class MainView extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null
    };
  }

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

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }


  render() {
    const { movies, selectedMovie } = this.state;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view"/>;

    return (
    //  <div className="main-view">
    //   {selectedMovie
    //      ? <MovieView
    //         movie={selectedMovie}
    //       />
    //      : movies.map(movie => (
    //        <MovieCard 
    //         key={movie._id} 
    //         movie={movie} 
    //         onClick={
    //           movie => this.onMovieClick(movie)
    //         }
    //        />
    //      ))
    //   }
    //  </div>
     
     <div className="main-view">
      {selectedMovie
         ? <MovieView2
            movie={selectedMovie}
          />
         : movies.map(movie => (
           <MovieCard 
            key={movie._id} 
            movie={movie} 
            onClick={
              movie => this.onMovieClick(movie)
            }
           />
         ))
      }
     </div>
    );
  }
}
