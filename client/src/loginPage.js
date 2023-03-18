import LoginButton from './components/auth0/login';

const LoginPage = () => {
  return (
    <div className="LinkPage">
      <h1>Welcome to Time Expeditions Blog!</h1>
      <h2>Please login!</h2>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
