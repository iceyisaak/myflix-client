import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component{

  render(){

    // <MovieCard/> takes in the props from <MainView/>
    const {
      movie,
      onClick
    } = this.props;

    return (
      <Card 
      onClick={()=>onClick(movie)}
      className="card"
      >
        <Card.Img
          variant="top"
          src={movie.ImagePath}
        />
        <Card.Body>
        <Card.Title>
          {movie.Title}
        </Card.Title>
        <Card.Text>
          {movie.Description}
        </Card.Text>  
          <Button 
            onClick={()=>onClick(movie)}
            variant="link"
            >
            Open
          </Button>
        </Card.Body>
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
  .isRequired,

  // 'prop onClick' is a function. It's required.
  onClick: PropTypes.func.isRequired

};

