import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import '../src/styling/Navbar.css';
import '../src/styling/About.css';
import '../src/styling/Contect.css';
import App from './App';
import {BrowserRouter} from  'react-router-dom';


ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
,document.getElementById('root')
);


