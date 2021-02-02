import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
  SafeAreaView
} from 'react-native';
import { SearchBar }  from 'react-native-elements';


const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#F3F3F3'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 3,
    height: 400,
  },
  cellLabel: {
    fontSize: 16,
    fontWeight: "normal",
    backgroundColor: '#000',
    color: '#fff'
  }
});

class AlbumList extends Component {
  state = {
    data: [],
    search: ''
  };

  loadData() {
    fetch('https://itunes.apple.com/search?term=' + this.state.search)
    .then(response => response.json())
    .then(data => this.setState({ data : data.results }));
  }

  componentDidMount(){
    this.loadData()
  }

  updateSearch = (search) => {
    this.setState({search})
    this.loadData()
  };

  render() {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <SearchBar
      round
        placeholder="Type artist name here..."
        onChangeText={this.updateSearch}
        value={this.state.search}
        />
      <FlatList
      key="flatlist"
      data={this.state.data}
      keyExtractor={data => String(data.trackId)}
      renderItem={({ item }) => (
        <View style = {{paddingBottom: 26}}>
          <Image
            style={styles.cell}
            source={{uri: item.artworkUrl100}}
            />
            <Text
              style={styles.cellLabel}>
              {item.collectionCensoredName}
            </Text>
        </View>
      )}
      />
      </SafeAreaView>


    );
  }
}

export default AlbumList;
