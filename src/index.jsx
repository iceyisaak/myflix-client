import React from 'react';
import ReactDOM from 'react-dom';

// Import MainView Component
import {MainView} from './components/main-view/main-view';

// Import scss file (and bundle it too)
import './index.scss';

// Main Component
class MyFlixApp extends React.Component{

  render() {
    return <MainView/>;
  }
}

// Assign 'container' to the root className
const container = document.getElementsByClassName('app-container')[0];

// Render this element wherever the 'container' is
ReactDOM.render(React.createElement(MyFlixApp), container);