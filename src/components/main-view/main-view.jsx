import React from 'react';
import axios from 'axios';

class MainView extends React.Component{

  constructor(){
    super();

    this.state ={};
  }
 
  componentDidMount(){
    axios.get('https://myflix-20210211.herokuapp.com/movies/')
    .then(
      response => {
        // Assign result to the state
        this.setState({
          movies: response.data
        });
      }
    )
    .catch(
      (error) => {
      console.log(error);
    });
  }

  // Render the component 
  render(){

    // If state is NOT initialised, error will be thrown on runtime before data is initially loaded
    const {movies} = this.state;

    // Before movies have been loaded 
    if(!movies){
      return <div className="main-view"></div>;
    }

    return(
      <div className="main-view">
        {
          movies.map(
            movie => (
              <div className="movie-card" key={movie._id}>
                {movie.Title}
              </div>
            )
          )
        }
      </div>
    );
  }
}

export default MainView;