import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './style'

class Comment extends React.Component {

  getDateAdded = () => {
    const dateAdded = this.props.data.dataAdded;
    const dateNow = Date.parse(new Date());
    const dateDifference = dateNow - Date.parse(dateAdded);
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
    const comment = this.props.data;
    return(
      <View style={styles.container}>
        <Image />
        <View style={styles.textContainer}>
          <View style={styles.textHeader}>
            <Text style={styles.userName}>{comment.user}</Text>
            <Text style={styles.dateAdded}>{this.getDateAdded()}</Text>
          </View>
          <Text style={styles.title}>{comment.title}</Text>
        </View>
      </View>
    )
  }
};

export default Comment;