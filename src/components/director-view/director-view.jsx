import React from 'react';

export class DirectorView extends React.Component {

  render(){

    const {
      director
    }= this.props;

    return(

      <div>
        DIRECTOR VIEW {director}
      </div>
    )
  }

}