import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import FavouriteMovieCard from './favouritemovie-card/favouritemovie-card';

const FavouriteMovie = ({
  userInfo,
  movies
}) => {

  console.log(userInfo);

  return (
    <div>
      <h1 className="my-5">Favourite Movies</h1>
      <Row>
        {userInfo.FavouriteMovies.length === 0 && 
          <div>
            No Favourite Movie
          </div>
        }
        {
          userInfo.FavouriteMovies.length > 0 &&
          movies.map(
            (movie) => {
              if (movie._id === userInfo.FavouriteMovies.find((favMovie) => favMovie === movie._id)) {
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
        }
      </Row>
    </div>
  )
}

export default FavouriteMovie;