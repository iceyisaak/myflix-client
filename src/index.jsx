import React from 'react';
import ReactDOM from 'react-dom';

// Import scss file (and bundle it too)
import './index.scss';

class MyFlixApp extends React.Component{

  render() {
    return (
      <div className="my-flix">
        <div>
          Hello World - MyFlixApp
        </div>
      </div>
    )
  }

}

// Assign 'container' to this className
const container = document.getElementsByClassName('app-container')[0];

// Render this element where the 'container' is
ReactDOM.render(React.createElement(MyFlixApp), container);

