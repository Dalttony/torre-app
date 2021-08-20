import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './torre/App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';
import appReducer from './torre/reducers';

const store = createStore(appReducer, applyMiddleware(
	thunkMiddleware, logger
	));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
