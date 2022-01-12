import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { /*BrowserRouter,*/ HashRouter } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';

// ** HASH ROUTER is only being used because GitHub Pages. Use BrowserRouter
// in real life.

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
