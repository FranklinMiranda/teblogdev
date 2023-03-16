import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

import ContextState from './context_state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-yfnh5rsri6uihrxp.us.auth0.com"
      clientId="mGc24ls7sPEKurfFLvGbUOqTxY4ON1e0"
      authorizationParams={{ redirect_uri: 'http://localhost:3000' }}
    >
      <ContextState/>
    </Auth0Provider>
  </BrowserRouter>
);



