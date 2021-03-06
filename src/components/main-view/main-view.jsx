import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

// Import actions
import { setMovies } from '../../actions/actions';

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Import all the children components to be used
import Navigation from '../Navigation/Navigation';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';
import MoviesList from '../movies-list/movies-list';

import { connect } from 'react-redux';


class MainView extends React.Component {

  // Construct the component
  constructor() {

    // Call on React.Component
    super();

    // Initialse the states for this component
    this.state = {  
      // movies: [],
      // user: null,
      // userInfo:[],
      // profile: {
      //   Username: '',
      //   Password: '',
      //   Email: '',
      //   Birthday: ''
      // }
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

      // Pass accessToken to other functions
      this.getMovies(accessToken);

      this.getUserInfo(accessToken);
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
    this.getUserInfo(authData.token);

  }

  // When user logs out
  onLoggedOut(){

    this.setState({
      user: null
    });

    // Remove token & user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    window.open(
      '/',
      '_self'
    );
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

          // Assign API response to the prop setMovies()
          this.props.setMovies(response.data);
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

  getUserInfo(token) {

    const username = localStorage.getItem('user');

    axios.get(
      `https://myflix-20210211.herokuapp.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(
      (response) => {
        this.setState({
          userInfo: response.data
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

    // Destructure the props
    const {
      movies
    } = this.props;

    // Destructure the states
    const { 
      user,
      userInfo,
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
                  <MoviesList movies={movies}/>
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
                    userInfo={userInfo}
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
              
                <Row className="w-100 h-100">
                  <Col sm={12}>
                    <ProfileView
                      userInfo={userInfo}
                      onLoggedOut={this.onLoggedOut}
                      movies={movies}
                    />
                  </Col>
                </Row>
            }
          />
        
      </Row>
    </Container>

    </Router>

    );
  }
}


const mapDispatchToProps = (dispatch) => {

  return{
    setMovies: () => dispatch(setMovies()),
    setUser: () => dispatch(setUser())
  }
}

// mapStateToProps to subscribe to store update
const mapStateToProps = (state) => {

  return {

    // Mapping 'movies' prop to the state
    movies: state.movies
    
  }
}

// export component + connecting it to store 
export default connect(

  // Take in the store state 
  mapStateToProps,

  // Dispatching Action
  {setMovies}

  // Name of this exported component
)(MainView);