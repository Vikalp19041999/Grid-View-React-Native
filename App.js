import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatGrid
          itemDimension={130}
          items={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => (<Text>{item}</Text>)}
        />
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})