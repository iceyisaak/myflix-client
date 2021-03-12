import React from 'react';
import PropTypes from 'prop-types';
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
      favourited: null
    };
  }




  handleAddToFavourite(movieId){
    console.log(`handleAddToFavourite(${movieId})`);

    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios({
      method: 'post',
      url:`https://myflix-20210211.herokuapp.com/users/${username}/movies/${movieId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(
        (response) => {
          const data = response.data;
          console.log(data);
          this.setState({
            favourited: true
          })
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }
  
  handleRemoveFavourite(){
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios({
      method: 'put',
      url: `https://myflix-20210211.herokuapp.com/users/${username}/movies/${movie._id}`,
      headers: { 
        Authorization: `Bearer ${token}` 
      }
    })
    .then(
      (response) => {
        const data = response.data;
        console.log(data);
        this.setState({
          favourited: false
        })
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }

  render(){

    const {
      movie,
      userInfo
    } = this.props;

    if(!movie) return null;

    
    if(
      userInfo.FavouriteMovies.find((favMovie) => favMovie === movie._id)
    ){

      this.setState({
        favourited: true
      })

      }else{
        
      this.setState({
        favourited: false
      })
  
    }


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
              onClick={()=>this.handleAddToFavourite(movie._id)}
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

MovieView.propTypes = {

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
}