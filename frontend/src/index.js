import React from 'react';
import ReactDOM from 'react-dom';
import App from './torre/App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './torre/reducers';

const store = createStore(appReducer, applyMiddleware(
	thunkMiddleware
	));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
