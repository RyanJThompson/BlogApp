// App.tsx
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthScreen } from './screens';
import NavigationContainer from './navigators/NavigationContainer';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{isAuthenticated ? <NavigationContainer /> : <AuthScreen />}</>;
};

export default App;
