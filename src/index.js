import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

const root=createRoot(document.getElementById('root'));

root.render(
  <Router>
  <App/>
  </Router>
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


