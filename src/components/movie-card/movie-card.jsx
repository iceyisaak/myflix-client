import React from 'react';

export class MovieCard extends React.Component{

  render(){

    // <MovieCard/> takes in the props from <MainView/>
    const {
      movie,
      onClick
    } = this.props;

    return (
      <div 
      className="movie-card"

      // When clicked, method of <MainView/> is called
      onClick={()=> onClick(movie)}
      >
        {movie.Title}
      </div>
    )
  }
}