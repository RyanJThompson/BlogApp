/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationContainer from './navigators/NavigationContainer';

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer />;
    </SafeAreaView>
  );
}
