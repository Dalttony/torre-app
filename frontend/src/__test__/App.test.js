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
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'

const store = createStore(appReducer, applyMiddleware(
	thunkMiddleware
	));

test("testing xmlhttprequest", async ()=>{
  //  axios.defaults.adapter = httpAdapter;
   axios.post("/api/search/").then((response) => console.log(response)).catch((error) => console.log(error));
});
/*
test("render progress loading", ()=>{
  render(<Provider store={store}>
    <App />
  </Provider>
  );
  expect(screen.getByText(/Loading\.\./i)).toBeInTheDocument()
});

test('render error loading data', async ()=>{
 render(<Provider store={store}>
      <App />
    </Provider>
  );
  expect(await screen.getByText(/Torre app error/i)).toBeInTheDocument()
});

test('render job data',async ()=> {
  render(<Provider store={store}>
        <App />
      </Provider>
    );
});
*/