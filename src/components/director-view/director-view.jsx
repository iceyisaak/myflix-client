import React from 'react';
import Breadcrumb  from 'react-bootstrap/Breadcrumb';

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
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/movies/${movie._id}`}>
            {movie.Title}
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/directors/${movie.Director.Name}`}>
            {movie.Director.Name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1>
          {movie.Director.Name}
        </h1>
        <span>
          {movie.Director.Birth} - {movie.Director.Death}
        </span>
        <h3>
          Bio:
        </h3>
        <p>
          {movie.Director.Bio}
        </p>
    
      
      </div>
    )
  }

}