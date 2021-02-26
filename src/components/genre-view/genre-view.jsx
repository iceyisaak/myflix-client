import React from 'react';

export class GenreView extends React.Component{

  constructor(){

    super();
    this.state = {};
  }

  render(){

    const {
      genre
    } = this.props;

    console.log([genre]);

    return(
      <div>
        GENRE VIEW {genre}
      </div>
    )
  }
}