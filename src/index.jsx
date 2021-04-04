import React from 'react';
import ReactDOM from 'react-dom';

// Import createStore & Provider
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

// Import MainView Component
import MainView from './components/main-view/main-view';

// Import movieApp Reducer
import moviesApp from './reducers/reducers';

// Import scss file (and bundle it too)
import './index.scss';

// createStore for movieApp
const store = createStore(
  moviesApp,
  devToolsEnhancer()
);

// Main Component
class MyFlixApp extends React.Component{

  render() {
    return (

      // Wrap store around <MainView/> to give access to store for entire app
      <Provider store={store}>
        <MainView/>
      </Provider>

    );
  }
}

// Assign 'container' to the root className
const container = document.getElementsByClassName('app-container')[0];

// Render this element wherever the 'container' is
ReactDOM.render(React.createElement(MyFlixApp), container);