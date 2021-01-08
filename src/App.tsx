import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'


import { getDates } from './api/index'
import Calendar from './components/Calendar';


getDates()

const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Calendar />
          
        </header>
      </div>
    </Provider>
  );
}

export default App;
