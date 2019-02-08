import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style'

class PrayerFact extends React.Component {

  render() {
    const data = this.props.data;
    return(
      <View style={styles.container}>
        {data.dataAdded ? <Text style={styles.date}>{data.dataAdded()}</Text> : undefined}
        {data.number || data.number === 0 ? <Text style={styles.number}>{data.number}</Text> : undefined}
        <Text style={styles.text}>{data.text}</Text>
        {data.optional ? <Text style={styles.optional}>{data.optional}</Text> : undefined}
      </View>
    )
  }
};

export default PrayerFact;