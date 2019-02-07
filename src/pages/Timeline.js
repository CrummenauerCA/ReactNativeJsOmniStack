import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';

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

  state = {
    tweets: [],
  }

  async componentDidMount() {
    const response = await api.get('tweets');
    this.setState({ tweets: response.data });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.tweets.map(tweet => (
          <Text>{tweet.author}</Text>
        ))}
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
