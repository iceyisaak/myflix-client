import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';

// Import MainView Component
import {MainView} from './components/main-view/main-view';
import Navigation from './components/Navigation/Navigation';

// Import scss file (and bundle it too)
import './index.scss';

// Main Component
class MyFlixApp extends React.Component{

  render() {
    return (
      <React.Fragment>
      <Navigation/>
      <Container>
       <MainView/>
      </Container>
      </React.Fragment>
    );
  }
}

// Assign 'container' to the root className
const container = document.getElementsByClassName('app-container')[0];

// Render this element wherever the 'container' is
ReactDOM.render(React.createElement(MyFlixApp), container);