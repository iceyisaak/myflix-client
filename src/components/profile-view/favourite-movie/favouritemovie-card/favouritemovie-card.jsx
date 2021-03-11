import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const FavouriteMovieCard = ({
  movie
}) => {

  const handleRemoveFavourite = () => {
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
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }
  
  return (
    <Card
      className="FavouriteMovieCard h-100 mb-5"
      key={movie._id}
    >
      <Link
        to={`/movies/${movie._id}`}
      >
        <Card.Img
          variant="top"
          src={movie.ImagePath}
        />
        </Link>
      <Card.Body
        className="d-flex flex-column h-auto"
      >
        <Card.Title>
          {movie.Title}
        </Card.Title>
        <Badge
          className="text-xs align-self-start"
          variant="secondary"
          >
          {movie.Genre.Name}
        </Badge>
        <Button
          size="sm"
          block
          className="mt-auto"
          variant="outline-danger"
          onClick={(e) => handleRemoveFavourite(e, movie._id)}
          >
            Unfavorite
        </Button>
      </Card.Body>
    </Card>
  )
}
export default FavouriteMovieCard;