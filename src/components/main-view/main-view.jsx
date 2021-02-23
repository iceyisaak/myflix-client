import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import all the children components to be used
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';


export class MainView extends React.Component {

  // Construct the component
  constructor() {

    // Call on React.Component
    super();

    // Initialse the states for this component
    this.state = {
      movies: null,
      user: null,
    };
  }

  // When Component is mounted to the DOM
  componentDidMount(){  

    // Define 'accessToken' as a way to getItem('token') in localStorage
    let accessToken = localStorage.getItem('token');

    // If token has a value
    if(accessToken !== null){

      // setState
      // set 'user' state to .getItem('user') in localStorage
      this.setState({

        user: localStorage.getItem('user')
      });

      // Pass accessToken to getMovies()
      this.getMovies(accessToken);
    }
  }


  // Function: log in, takes in 'authData'
  onLoggedIn(authData){

    // Log the value of `authData`
    console.log(authData);
    
    // setState of 'user' to the value of 'authData', assigning it to the Username
    this.setState({
      user: authData.user.Username
    });

    // setItem 'token' and 'user' in the localStorage
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);

    // Send 'authData.token' to .getMovies()
    this.getMovies(authData.token);
  }

  // When user logs out
  onLoggedOut(){

    this.setState({
      user: null
    });

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


  // Function: register, takes in data
  onRegister(user){

    this.setState({
      user
    })
  }


  // .getMovie() takes in token
  getMovies(token){

    // Fetch data from the Server side
    axios
      .get(
        'https://myflix-20210211.herokuapp.com/movies',
        {
          // Specify the headers - Authorization: Bearer Token
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      // Then, 
      .then(

        // take in 'response' data
        (response) => {

          // setState of 'movies' to be 'response.data'
          this.setState({
            movies: response.data
          });
        }
      )

      // Catch errors
      .catch(
        (err) => {

          // Log errors in the console
          console.log(err);
        }
      );
  }

  // Render the component
  render() {

    // Destructure the states
    const { 
      movies,
      selectedMovie,
      registration,
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

        // : 

        // <RegistrationView
        //   onRegister={
        //     (user)=>{this.onRegister(user)}
        //   }
        // />
        
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
      <Router>
        <Row className="main-view justify-content-md-center">
          <Route
            exact path="/"
            render={
              () => {
                movies.map(
                  (movie) => {
                    <Col md={3} key={movie._id}>
                      <MovieCard movie={movie}/>
                    </Col>
                  }
              )
            }
            }
          />
          <Route
            path="movies/:movieId"
            render={
              ({match})=> {
                <Col
                  md={8}
                  className="mb-5"
                >
                  <MovieView
                    movie={
                      movies.find(
                          (movie) => {
                            movie._id === match.params.movieId
                          }
                        )
                      }
                  />
                </Col>
              }
            }
          />   
      </Row>
     </Router>
    );
  }
}

