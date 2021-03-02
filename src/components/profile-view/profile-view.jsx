import React from 'react';

export class ProfileView extends React.Component{

  render(){

    const{
      user
    } = this.props;

    
    return(
      
      <div>
        PROFILE VIEW {user}
      </div>

    );
  }
}
