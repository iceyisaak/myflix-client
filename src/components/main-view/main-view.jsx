import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import all the children components to be used
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';


export class MainView extends React.Component {

  // Construct the component
  constructor() {

    // Call on React.Component
    super();

    // Initialse the states for this component
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null
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


  // Function: Go back to <MainView/>
  onBackClick(){

    // setState of 'selectedMovie' back to 'null'
    this.setState({
      selectedMovie: null
    });
  }

  // Function: log in, takes in 'user data'
  onLoggedIn(user){

    // setState of 'user' to the 'user data'
    this.setState({
      user
    });
  }

  // Render the component
  render() {

    // Destructure the states
    const { 
      movies,
      selectedMovie,
      user
      } = this.state;

    // If user is NOT logged in, return <LoginView/>
    if(!user) {
      return (
        <LoginView 
          onLoggedIn={
            (user) => {this.onLoggedIn(user)}
          }
        />
      );
    }
    

    // Before the movies have been loaded

    // If movies are NOT found, return this
    if (!movies){
      return (
      <div className="main-view"/>
      );
    } 


    // Return the component
    return (

     <Row className="main-view justify-content-md-center">
        {
          // If a movie is selected, Return that selected <MovieView/>
          selectedMovie ?
            <Col md={8}>
            <MovieView

              // send 'selectedMovie state'  as 'movie prop'
              movie={selectedMovie}

              // send 'a function that returns this.onBackClick()' as the 'onClick prop'
              onClick={() => this.onBackClick()}
              />
            </Col>
            //Else 
          :
          // Return a list of <MovieCard/>
            
          movies.map(movie => (
            <Col md={3}>
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
            </Col>
          ))
                        
        }
     </Row>
     
    );
  }
}

