/**
 * @jest-environment jsdom
 */
import React from 'react';
import browser from './mock/browser'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../torre/App'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from '../torre/reducers';

const store = createStore(appReducer, applyMiddleware(
	thunkMiddleware
	));

test("render progress loading", ()=>{
  render(<Provider store={store}>
    <App />
  </Provider>
  );
  expect(screen.getByText(/Loading\.\./i)).toBeInTheDocument()
})

test('render error loading data', ()=>{
 render(<Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText(/Torre app error/i)).toBeInTheDocument()
});

