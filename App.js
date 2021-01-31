import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumList from './AlbumList'

export default class App extends React.Component {
  render() {
    return (
      <AlbumList />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
