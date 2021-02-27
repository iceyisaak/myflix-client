import React from 'react';

export class DirectorView extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){

    const {
      movie
    } = this.props;

    console.log(movie);

    if(!movie) return 'Loading...';


    return(

      <div>
        <h1>
          {movie.Director.Name}
        </h1>
        <h3>
          Bio:
        </h3>
        <p>
          {movie.Director.bio}
        </p>
      </div>
    )
  }

}