import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Import all the children components to be used
import Navigation from '../Navigation/Navigation';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';


export class MainView extends React.Component {

  // Construct the component
  constructor() {

    // Call on React.Component
    super();

    // Initialse the states for this component
    this.state = {
      movies: [],
      user: [],
      isLoading: false
    };
  }

  // When Component is mounted to the DOM
  componentDidMount(){  

    // Define 'accessToken' as a way to getItem('token') from localStorage
    let accessToken = localStorage.getItem('token');

    // If token has a value
    if(accessToken !== null){

      // setState
      this.setState({

        // set 'user' state to .getItem('user') from localStorage
        user: localStorage.getItem('user')
      });

      // Pass accessToken to getMovies()
      this.getMovies(accessToken);
    }
  }


  // Function: log in, takes in 'authData'
  onLoggedIn(authData){
    
    // setState of 'user' to the value of 'authData', assigning it to the Username
    this.setState({
      user: authData.user.Username
    });

    // setItem 'token' and 'user' in the localStorage
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);

    // Send 'authData.token' to .getMovies()
    this.getMovies(authData.token);

    this.getUserInfo(authData);
  }

  // When user logs out
  onLoggedOut(){

    this.setState({
      user: null
    });

    // Remove token & user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }



  // .getMovie() takes in token
  getMovies(token){

    // Fetch data from the Server side
    axios
      .get(
        'https://myflix-20210211.herokuapp.com/movies',
        {
          // Specify the headers, set Authorization: Bearer Token
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      // Then, 
      .then(

        // take in 'response' data
        (response) => {

          // setState of 'movies' to be 'response.data' from API
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

  getUserInfo(token){

    axios
      .get(
        'https://myflix-20210211.herokuapp.com/users/:Username',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(
        (response) => {
          console.log(response);
          this.setState({
            user: response.data
          })
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }

  // Render the component
  render() {

    // Destructure the states
    const { 
      movies,
      user,
      isLoading
    } = this.state;


    // Before the movies have been loaded

    // If movies are NOT found, return this
    if (!movies) return <div className="main-view"/> 


    // Return the component
    return (
      
      <Router>

        <Navigation
          user={user}
          onLoggedOut={
            ()=>this.onLoggedOut()
          }
        />

        <Container>
        <Row className="main-view justify-content-md-center">
          <Route
            exact path="/"
            render={

              () => {
                  // If user is NOT logged in, return <LoginView/>
                if(!user) {
                  return (
                    
                    <LoginView 
                      onLoggedIn={
                        (user) => this.onLoggedIn(user)
                      }
                    />
                  );
                }
                  return (
                    movies.map(
                      (movie) => 
                        <Col 
                          md={3} 
                          key={movie._id}
                          className="my-4"
                        >
                          <MovieCard 
                            movie={movie}
                            isLoading={isLoading}
                          />
                        </Col>
                      
                    )
                  )
              }
            }
          />
        
          <Route
            exact path="/register"
            render={
              () => <RegistrationView/>
            }
          />

          <Route
            exact path="/movies/:movieId"
            render={
              ({match}) => 
              <Col
                md={8}
                className="mb-5"
              >
                  <MovieView
                    movie={
                      movies.find(
                        (movie) => movie._id === match.params.movieId
                      )
                    }
                  />
              </Col>
            }
          />   

          <Route
            exact path="/:movieId/genres/:name"
            render={
              ({match}) => {
                if(!movies) return <MainView/>;
                return(
                  
                  <GenreView
                    movie={
                      movies.find(
                        (movie) => movie.Genre.Name === match.params.name 
                        &&
                        movie._id === match.params.movieId
                      )
                    }
                  />

                )
              }
            }
          />

          <Route
            exact path="/:movieId/directors/:name"
            render={
              ({match}) => {
                if(!movies) return <MainView/>;
                return (

                  <DirectorView
                    movie={
                      movies.find(
                        (movie) => movie.Director.Name === match.params.name
                        &&
                        movie._id === match.params.movieId
                      )
                    }
                  />

                )
              }
            }
          />

          <Route
            exact path="/users/:username"
            render={
              () => 
                <ProfileView
                  user={
                    users.find(
                      (user) => {
                        user.Username === match.params.username
                      }
                    )
                  }
                />
            }
          />

        
      </Row>
    </Container>

    </Router>

    );
  }
}

