import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import AnimatedRoute from './AnimatedRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || ''}>
        <AnimatedRoute />
    </BrowserRouter>
  </React.StrictMode>
);


