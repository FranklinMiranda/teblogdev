import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import Home from './components/home';
import LoginPage from './components/loginPage';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  } else if (isAuthenticated) {
    axios
      .post('/api/userprofiletodb', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
