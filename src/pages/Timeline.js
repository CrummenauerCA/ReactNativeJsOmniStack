import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Timeline extends Component {

  static navigationOptions = {
    title: 'Timeline',
    headerRight: (
      <TouchableOpacity onPress={() => { }}>
        <Icon
          style={{ marginRight: 20 }}
          name="add-circle-outline"
          size={24}
          color="#4bb0ee"
        />
      </TouchableOpacity>
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Timeline</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
