import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'


import { getDates } from './api/index'
import { WEEK } from './constants/index'

getDates()

const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {WEEK[0]}
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
