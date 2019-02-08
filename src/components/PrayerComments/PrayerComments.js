import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';

import styles from './style'

class PrayerComments extends React.Component {

  _keyExtractor = (item, index) => item.id;

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.membersText}>Comments</Text>
        <View style={styles.commentsList}>

        </View>
        <View style={styles.addComment}>
          
        </View>
      </View>
    )
  }
};

export default PrayerComments;