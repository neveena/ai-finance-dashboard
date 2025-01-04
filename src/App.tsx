import React from 'react';
import { GlobalStateProvider } from './state/GlobalState';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <Dashboard />
    </GlobalStateProvider>
  );
};

export default App;
