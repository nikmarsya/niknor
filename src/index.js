import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import AnimatedRoute from './AnimatedRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename={window.location.pathname || ''}>
        <AnimatedRoute />
    </HashRouter>
  </React.StrictMode>
);


