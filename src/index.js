import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoute from './AnimatedRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={window.location.pathname || ''}>
        <AnimatedRoute />
    </Router>
  </React.StrictMode>
);


