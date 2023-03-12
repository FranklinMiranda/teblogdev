import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import LoginPage from './components/loginPage';
import Profile from './components/links/profile';
import Posts from './components/links/posts';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
 
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
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    );
  }
}

export default App;
