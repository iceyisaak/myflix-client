import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class GenreView extends React.Component{

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

        <Breadcrumb>
          <Breadcrumb.Item 
            href="/"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item 
            href={`/movies/${movie._id}`}
          >
            {movie.Title}
          </Breadcrumb.Item>
          <Breadcrumb.Item 
            href={`/${movie._id}/genres/${movie.Genre.Name}`}
          >
            {movie.Genre.Name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1>
          {movie.Genre.Name}
        </h1>
        <p>
          {movie.Genre.Description}
        </p>

      </div>
    )
  }
}