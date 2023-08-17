import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import "./css/index.css"

import store from './components/store/store';
import { Provider } from 'react-redux';

import Landing from './landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-yfnh5rsri6uihrxp.us.auth0.com"
      clientId="mGc24ls7sPEKurfFLvGbUOqTxY4ON1e0"
      authorizationParams={{ redirect_uri: 'https://timeexpeditions.com' }}
    >
      <Provider store={store}>
        <Landing />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>
);
