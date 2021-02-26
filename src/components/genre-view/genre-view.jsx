import React from 'react';

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

    return(
      <div>
        GENRE VIEW
      </div>
    )
  }
}