import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import image from './img/high-key.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          margin: 0;
          box-sizing: border-box;
        }
        .App {
          background-image: url(${image});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
