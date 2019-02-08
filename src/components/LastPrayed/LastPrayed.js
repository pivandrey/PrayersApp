import React from 'react';
import { Text, View } from 'react-native';

import styles from './style'

class LastPrayed extends React.Component {

  getDateAdded = () => {
    const lastPrayed = this.props.lastPrayed;
    const dateNow = Date.parse(new Date());
    const dateDifference = dateNow - Date.parse(lastPrayed);
    if (dateDifference < 60000) {
      return Math.round(dateDifference / 1000) + ' seconds ago'
    } else if (dateDifference < 3600000) {
      return Math.round(dateDifference / 60000) + ' minutes ago'
    } else if (dateDifference < 86400000) {
      return Math.round(dateDifference / 3600000) + ' hours ago'
    } else {
    return Math.round(dateDifference / 86400000) + ' days ago'
    }
  };

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.marker}></View>
        <Text style={styles.date}>Last prayed {this.getDateAdded()}</Text>
      </View>
    )
  }
};

export default LastPrayed;