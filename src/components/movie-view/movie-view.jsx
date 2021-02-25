import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './movie-view.scss';

export class MovieView extends React.Component{

  constructor(){
    super();
    this.state = {};
  }

  render(){

    // Take in the props
    const {
      movie,
      onClick
    } = this.props;

    if(!movie) {
      return null;
    }

    return (

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
              to={`/genres/${movie.Genre.Name}`}
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
              to={`/directors/${movie.Director.Name}`}
            >
            {movie.Director.Name}
            </Link>
          </Form.Text>
        </Form.Group>

         <Button 
          // When clicked, the onClick() method of <MainView/> is called
          onClick={() => onClick()}
          variant="light"
          className="mt-3"
          size="lg"
         >
           Back
         </Button>

      </Form>
    );
  }

}

MovieView.propTypes = {

  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired

}