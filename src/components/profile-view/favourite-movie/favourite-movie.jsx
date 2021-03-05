import React from 'react'

const FavouriteMovie = ({
  userInfo
}) => {


  return (
    <div>
      <h1 className="my-5">Favourite Movies</h1>
      <p>Listing all favourite</p>
      {userInfo.FavouriteMovies}
    </div>
  )
}

export default FavouriteMovie;
