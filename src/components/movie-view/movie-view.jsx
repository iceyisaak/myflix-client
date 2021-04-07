import React from 'react';
/* import PropTypes from 'prop-types'; */
import axios from 'axios';
import { Link } from 'react-router-dom';


import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './movie-view.scss';

export class MovieView extends React.Component{

  constructor(){
    super();
    this.state = {
      favourited: false,     
    };
    this.username = localStorage.getItem('user');
    this.token = localStorage.getItem('token');
    this.movieId = localStorage.getItem('id');   
    
    console.log("constructor >> movieId : ",this.movieId)
  }

  getMovie(){
    axios.get({
      method:'get',
      url: `https://myflix-20210211.herokuapp.com/movies/${this.movieId}`,
      headers: {
          Authorization: `Bearer ${this.token}`
      }
  })
    .then(
      (response) => {
            const data = response.data;            
            this.getFavourited() 

            }
      )
    .catch(
      (err) => {
            console.log(err);
            }
      )      
  }
  
  getFavourited(){
    
  console.log('checkFavourited()',this.movieId);

    axios({
      method:'get',
      url: `https://myflix-20210211.herokuapp.com/users/${this.username}`,
      headers: {
          Authorization: `Bearer ${this.token}`
      }
    })
    .then(
      (response) => {
        const favMovie = response.data.FavouriteMovies;
        console.log("favMovie >> ",favMovie);
      
        const found = favMovie.find((fav) => fav === this.movieId)
      
        console.log("found : ",found)
        
        if(found !== this.movieId){
          this.setState({
            favourited: false
          })
        }else{
          this.setState({
            favourited: true
          })
        }        
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )  
  }

  handleAddToFavourite(){
 
    axios({
      method: 'post',
      url:`https://myflix-20210211.herokuapp.com/users/${this.username}/movies/${this.movieId}`,
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
      .then(
        (response) => {
 
            this.setState({favourited: true})
         
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }
  
  handleRemoveFavourite(){

    axios({
      method: 'put',
      url: `https://myflix-20210211.herokuapp.com/users/${this.username}/movies/${this.movieId}`,
      headers: { 
        Authorization: `Bearer ${this.token}` 
      }
    })
    .then(
      (response) => {
 
          this.setState({favourited: false})        
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }
 
  componentDidMount(){

   
console.log("ComponentDidMount movieId >> ", this.movieId)

     this.getMovie()        

  } 
  
  render(){
 
    const { movie } = this.props; 
    
    console.log('Props render : ',this.props);

    
   if(!movie) return null;
 
    
    return (

      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/movies/${movie._id}`}>
            {movie.Title}
          </Breadcrumb.Item>
        </Breadcrumb>

      <Form className="movie-view ">
        <h2 className="h2">
          {movie.Title}
        </h2>
        <Image 
          className="movie-poster mb-3"
          src={movie.ImagePath}
          alt="Movie Poster" 
        />

        <Form.Group controlId="formDescription">
          <Form.Label className="text-base font-weight-bold">
            Description:
          </Form.Label>
          <Form.Text className="text-base">
            {movie.Description}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formGenre">
          <Form.Label className="text-base font-weight-bold">
            Genre:
          </Form.Label>
          <Form.Text className="text-base">
            <Link
              to={`/${movie._id}/genres/${movie.Genre.Name}`}
              movie={movie}
            >
              {movie.Genre.Name}
            </Link>
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formDirector">
          <Form.Label className="text-base font-weight-bold">
            Director:
          </Form.Label>
          <Form.Text className="text-base">
            <Link 
              to={`/${movie._id}/directors/${movie.Director.Name}`}
              movie={movie}
            >
              {movie.Director.Name}
            </Link>
          </Form.Text>
        </Form.Group>

        <Form.Group>
          { this.state.favourited &&
            <Button
              variant="outline-danger"
              className="mt-3"
              size="lg"
              onClick={()=>this.handleRemoveFavourite()}
              >
                Unfavourite
            </Button>
          }
          { !this.state.favourited &&
            <Button
              variant="primary"
              className="mt-3"
              size="lg"
              onClick={()=>this.handleAddToFavourite()}
              >
              Add to Favourite
            </Button>
          }
        </Form.Group>

        {'   '}
        <Link to={'/'}>
          <Button 
            variant="light"
            className="mt-3"
            size="lg"
            >
            Back to Home
          </Button>
        </Link>

      </Form>
      </div>

    );
  }

}

/* MovieView.propTypes = {

  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string
    })
  }).isRequired
} */

