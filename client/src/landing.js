import { useAuth0 } from '@auth0/auth0-react';

import LoginPage from './components/links/loginPage';
import App from './App';

const Landing = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  } else if (isAuthenticated) {
    return (
      <div className="App">
        <App />
      </div>
    );
  }
};


export default Landing;