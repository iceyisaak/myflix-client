import React, {useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FavouriteMovieCard from './favouritemovie-card/favouritemovie-card';

const FavouriteMovie = ({
  userInfo,
  movies
}) => {

  const [favMovie, setFavMovie] = useState('');
  
  const getFavouriteMovie = () => {

    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

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
        const data = response.data
        setFavMovie = data.FavouriteMovies
        console.log(favMovie);
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }

  getFavouriteMovie();

  console.log(userInfo);

  return (
    <div>
      <h1 className="my-5">Favourite Movies</h1>
      <Row>
        {!userInfo && 
          <div>
            No Favourite Movie
          </div>
        }
        {
          userInfo &&
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
                    favMovie={favMovie}
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