import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  AlbumList  from './AlbumList';

const Stack = createStackNavigator(
);

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={AlbumList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
