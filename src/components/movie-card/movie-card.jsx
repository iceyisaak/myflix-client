import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './movie-card.scss';

export class MovieCard extends React.Component{

  render(){

    // <MovieCard/> takes in the props from <MainView/>
    const {
      movie
    } = this.props;

    return (
      <Card 
        className="card"
        >
          <Link
            to={`/movies/${movie._id}`}
          >
              <Card.Img
                variant="top"
                src={movie.ImagePath}
              />
              <Card.Body>
              <Card.Title>
                {movie.Title}
              </Card.Title>
              <Badge 
                className="text-xs"
                variant="secondary"
              >
                {movie.Genre.Name}
              </Badge>  
              {/* <Link
                to={`/movies/${movie._id}`}
                > */}
                  <Button 
                    variant="link"
                    size="lg"
                    block
                    >
                    See Details
                  </Button>
                {/* </Link> */}
              </Card.Body>
          </Link>
      </Card>
    );

  }

}

// Set propTypes for the component
MovieCard.propTypes = {

  // 'prop movie' is an Obj
  movie: PropTypes.shape({

    // 'key Title' is a string - required
    Title: PropTypes.string.isRequired,
    // 'key Description' is a string - required
    Description: PropTypes.string.isRequired,
    // 'key ImagePath' is a string - required
    ImagePath: PropTypes.string.isRequired,

    // 'key Genre' is an Obj
    Genre: PropTypes.shape({

      // 'Key Name' is a string
      Name: PropTypes.string
    })

  })
  // This prop is required
  .isRequired

};

