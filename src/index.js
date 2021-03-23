import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import { Router,Route, Switch } from "react-router";
import {HashRouter,BrowserRouter} from "react-router-dom";


import App from './App';
import Test from './Pages/test';


ReactDOM.render(
  <React.StrictMode>
   
    
    <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/test" component={Test} />
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
