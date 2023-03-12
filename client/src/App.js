import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
