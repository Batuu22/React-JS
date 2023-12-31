import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/style.css';
import reportWebVitals from './reportWebVitals';
import RouterBlog from './RouterBlog';

// BrowserRouter => http://localhost:3000/
// HashRouter => http://localhost:3000/#/

// BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Dil Seçeneği için ekledim
import './internationalization/i18nlanguage';

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));

//RENDER
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterBlog />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
