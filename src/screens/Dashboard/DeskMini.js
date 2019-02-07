import React from 'react';
import { Text, View, Button, Image, TouchableHighlight } from 'react-native';


import styles from './stylesDeskMini'

class DeskMini extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }
};

export default DeskMini;