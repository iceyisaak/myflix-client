import React from 'react';
import axios from 'axios';

class MainView extends React.Component{

  // Construct the component
  constructor(){

    // Utilise 'React.Component'in order to use 'props'
    super();

    // Empty State to be later destructured
    this.state={

    }
  } 

  // Render the component 
  render(){

    return(
        <div className="main-view"></div>
    );
  }
}