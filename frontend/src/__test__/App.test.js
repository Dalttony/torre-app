/**
 * @jest-environment jsdom
 */
import React from 'react';
import browser from './mock/browser'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../torre/App'
import JobComponent from '../torre/components/Job.react'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from '../torre/reducers';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'

const store = createStore(appReducer, applyMiddleware(
	thunkMiddleware
	));

describe("loading status", ()=>{
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
    await waitFor(()=>screen.getByText(/Torre app error/i))
    expect(screen.getByText(/Torre app error/i)).toBeInTheDocument()
  });
  
  test('render no job data',async ()=> {
    render(<Provider store={store}>
          <App />
        </Provider>
      );
      await waitFor(()=>screen.getByText(/No data to show/i))
      expect(await screen.getByText(/No data to show/i)).toBeInTheDocument()
  
  });
});


describe("react component", ()=>{
  test("render job compoenent", ()=> {
    const userData = {
      "id": "lWgKqVXW",
      "objective": "Angular Developer",
      "slug": "epam-angular-developer",
      "type": "full-time-employment",
      "organizations": [
        {
          "id": 419556,
          "name": "EPAM",
          "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1600527350/origin/bio/organizations/ogzpgggpxeegxsspm6er.jpg"
        }
      ],
      "locations": [
        "Colombia"
      ],
      "remote": true,
      "external": false,
      "deadline": "2021-09-17T20:30:00.000Z",
      "created": "2021-08-18T12:55:16.000Z",
      "status": "open",
      "compensation": {
        "data": null,
        "visible": false
      },
      "skills": [
        {
          "name": "Angular 6+",
          "experience": "2-plus-years",
          "proficiency": "proficient"
        },
        {
          "name": "Javascript",
          "experience": "2-plus-years",
          "proficiency": "proficient"
        },
        {
          "name": "TypeScript",
          "experience": "2-plus-years",
          "proficiency": "proficient"
        },
        {
          "name": "Scrum",
          "experience": "potential-to-develop",
          "proficiency": "potential-to-develop"
        },
        {
          "name": "HTML",
          "experience": "1-plus-year",
          "proficiency": "proficient"
        },
        {
          "name": "CSS3",
          "experience": "1-plus-year",
          "proficiency": "proficient"
        },
        {
          "name": "Software development",
          "experience": "2-plus-years",
          "proficiency": "proficient"
        }
      ],
      "members": [
        {
          "subjectId": "1150136",
          "name": "Marina Subbotina",
          "username": "marina_subbotina",
          "professionalHeadline": "Business Analyst",
          "picture": "https://starrgate.s3.amazonaws.com:443/users/e548affcd2cf0ea43410910943fc1b742efc8b42/profile_9xAnRlF.jpg",
          "member": true,
          "manager": true,
          "poster": true,
          "weight": 0
        },
        {
          "subjectId": "1156821",
          "name": "Valery Budkevich",
          "username": "valery_budkevich",
          "professionalHeadline": "Portfolio manager",
          "picture": null,
          "member": true,
          "manager": true,
          "poster": false,
          "weight": 0
        },
        {
          "subjectId": "1158141",
          "name": "Aleksandr Konnov",
          "username": "aleksandr_konnov",
          "professionalHeadline": "Technical Writer",
          "picture": "https://starrgate.s3.amazonaws.com:443/users/ac5031ca0267c2a335bfb5488684af1b333e3ead/profile_gUOPS7g.jpg",
          "member": true,
          "manager": true,
          "poster": false,
          "weight": 0
        }
      ],
      "questions": [],
      "context": {
        "signaled": []
      },
      "_meta": {
        "rank": {
          "position": 1,
          "value": 0.25,
          "boostedValue": 0.25
        },
        "scorer": {
          "@type": "and",
          "score": 1,
          "and": [
            {
              "@type": "concrete",
              "id": "completion",
              "input": {
                "criteria": null,
                "opportunity": {
                  "completion": 1
                }
              },
              "score": 1
            }
          ]
        },
        "filter": null,
        "boosters": []
      }
    }
    render(<JobComponent jobData={userData} showUserPerfil={()=>{console.log("exan")}} />);
    expect(screen.getByText(/Angular Developer/i)).toBeInTheDocument()
  })
  
  test("render job component", async ()=>{
      render(<Provider store={store}>
        <App />
      </Provider>
    );
  
    await waitFor(() => screen.getAllByText(/open/i));
    const expecteNodeList = 10;
    const nodeList =  screen.getAllByText(/open/i);
  
    expect(nodeList.length).toBe(expecteNodeList);
  }); 
  
  
})
