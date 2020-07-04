import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import reducer from './redux/reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
