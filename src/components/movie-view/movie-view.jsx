import React from 'react';

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

      <div className="movie-view">
        <img 
         className="movie-poster"
         src={movie.ImagePath}
         alt="Movie Poster" 
         />
         <div className="movie-title">
           <span className="label">
             Title: 
           </span>
           <span className="value">
             {movie.Title}
           </span>
         </div>
         <div className="movie-description">
           <span className="label">
             Description:
           </span>
           <span className="value">
             {movie.Description}
           </span>
         </div>
         <div className="movie-genre">
           <span className="label">
             Genre: 
           </span>
           <span className="value">
             {movie.Genre.Name}
           </span>
         </div>
         <div className="movie-director">
           <span className="label">
             Director:
           </span>
           <span className="value">
             {movie.Director.Name}
           </span>
         </div>
         <button 
          // When clicked, the onClick() method of <MainView/> is called
          onClick={() => onClick()}
         >
           Back
         </button>
      </div>
    );
  }

}