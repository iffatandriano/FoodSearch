import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Business Search">
        <stack.Screen
          name="Business Search"
          component={SearchScreen}
        />
        <stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;