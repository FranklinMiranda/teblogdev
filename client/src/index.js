import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './components/utils/context';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-yfnh5rsri6uihrxp.us.auth0.com"
      clientId="fzqgnVurba26VOn2X3mtENcDECis00sE"
      authorizationParams={{ redirect_uri: 'http://localhost:3000' }}
    >
      <Context.Provider value='contextTest'>
        <App />
      </Context.Provider>
    </Auth0Provider>
  </BrowserRouter>
);



