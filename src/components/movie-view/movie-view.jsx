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
    };
  }

  handleAddToFavourite(movieId){
    console.log(`handleAddToFavourite(${movieId})`);

    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios
      .post(
        `https://myflix-20210211.herokuapp.com/users/${username}/movies/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(
        (response) => {
          const data = response.data;
          console.log(data);
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
      movie
    } = this.props;

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

        <Button 
          variant="primary"
          className="mt-3"
          size="lg"
          onClick={()=>this.handleAddToFavourite(movie._id)}
          >
          Add to Favourite
        </Button>
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