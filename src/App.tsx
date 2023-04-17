// App.tsx
import React from 'react';
import NavigationContainer from './navigators/NavigationContainer';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
};

export default App;
