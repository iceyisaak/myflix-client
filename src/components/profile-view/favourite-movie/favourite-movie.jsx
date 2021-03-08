import React from 'react'

const FavouriteMovie = ({
  userInfo,
  movies
}) => {


  return (
    <div>
      <h1 className="my-5">Favourite Movies</h1>
      <p>Listing all favourite</p>
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
                
                  <Card style={{ width: '16rem' }} className="mb-5" key={movie._id}>
                    <Card.Img variant="top" width={256} height={414} src={movie.ImagePath} />
                    <Card.Body className="movie-card-body text-center">
                      <Card.Title className="movie-card-title">{movie.Title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <Button size="sm" block className="profile-button remove-favorite" variant="outline-danger" onClick={(e) => this.handleRemoveFavorite(e, movie._id)}>
                        Remove from Favorites
                      </Button>
                    </Card.Footer>
                  </Card>
                
              );
          }
          }
        )
      }
    </div>
  )
}

export default FavouriteMovie;