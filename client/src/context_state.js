import Context from './components/utils/context';
import App from './App';

const ContextState = () => {
  return (
    <Context.Provider value="contextTest">
      <App />
    </Context.Provider>
  );
};

export default ContextState;