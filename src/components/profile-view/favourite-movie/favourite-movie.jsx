import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FavouriteMovieCard from './favouritemovie-card/favouritemovie-card';

const FavouriteMovie = ({
  userInfo,
  movies
}) => {

  return (
    <div>
      <h1 className="my-5">Favourite Movies</h1>
      <Row>
        {
          userInfo.FavouriteMovies ?
            movies.map(
            (movie) => {
              if (userInfo.FavouriteMovies.find(
                (favMovie) => favMovie === movie._id)) {
                return (
                  <Col
                    md={4}
                    className="mb-5"
                    key={movie._id}
                  >
                  <FavouriteMovieCard
                    movie={movie}
                  />
                </Col>
                );
                }
              }
            )
        :
          <div>
            No Favourite Movie
          </div>
        }
      </Row>
    </div>
  )
  
}

export default FavouriteMovie;