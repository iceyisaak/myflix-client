import React from 'react';
import axios from 'axios';

// Import all the children components to be used
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {

  // Construct the component
  constructor() {

    // Call on React.Component
    super();

    // Initialse the states for this component
    this.state = {
      movies: null,
      selectedMovie: null
    };
  }

  // When Component is mounted to the DOM
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

  // Function to Select Movie: Take in the 'movie data'
  onMovieClick(movie) {

    // Set selectedMovie to that 'movie data'
    this.setState({
      selectedMovie: movie
    });
  }


  render() {

    // Destructure the states
    const { movies, selectedMovie } = this.state;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view"/>;

    // Return the component
    return (
     <div className="main-view">

       
      {
      // If a movie is selected, Return that selected <MovieView/>
      selectedMovie ?
        <MovieView
          movie={selectedMovie}
        />

        //Else 
         :
          // Return a list of <MovieCard/>
         movies.map(movie => (
           <MovieCard 

            // Assign a unique key to each <MovieCard/> using 'movie._id'  
            key={movie._id} 

            // Pass the 'movie data' as prop to each <MovieCard/>
            movie={movie} 

            // When <MovieCard/> is clicked, pass that 'movie data' to this function
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

