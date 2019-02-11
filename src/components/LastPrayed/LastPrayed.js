import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class LastPrayed extends React.Component {

  getDateAdded = () => {
    const lastPrayed = this.props.lastPrayed;
    const dateNow = Date.parse(new Date());
    const dateDifference = dateNow - Date.parse(lastPrayed);
    if (!dateDifference) return 'not';
    if (dateDifference < 60000) {
      return Math.round(dateDifference / 1000) + ' seconds ago'
    } else if (dateDifference < 3600000) {
      return Math.round(dateDifference / 60000) + ' minutes ago'
    } else if (dateDifference < 86400000) {
      return Math.round(dateDifference / 3600000) + ' hours ago'
    } else if (dateDifference < 2592000000) {
      return Math.round(dateDifference / 86400000) + ' days ago'
    } else {
      return Math.round(dateDifference / 2592000000) + ' months ago'
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

LastPrayed.propTypes = {
  lastPrayed: PropTypes.any.isRequired,
};

export default LastPrayed;