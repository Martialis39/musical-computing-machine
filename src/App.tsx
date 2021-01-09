import React from 'react';
import "typeface-roboto";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'


import Calendar from './components/Calendar';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <main className="p-4 md:p-8 xl:p-12">
        <Calendar />
      </main>
    </Provider>
  );
}

export default App;
