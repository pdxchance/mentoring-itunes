import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  AlbumList  from './AlbumList';
import  AlbumDetails  from './AlbumDetails';
import Cat from './Cat'

const Stack = createStackNavigator(
);

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Albums"
            component={Cat}
          />
          <Stack.Screen
            name="Details"
            component={AlbumDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
