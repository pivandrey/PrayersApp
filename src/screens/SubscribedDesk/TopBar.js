import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

class TopBar extends React.Component {
  render() {
    return(
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.topBarBtn}
          onPress={this.props.handlePress}
        ><Text style={styles.topBarBtnText}>MY PRAYERS</Text></TouchableOpacity>
        <TouchableOpacity
          style={styles.topBarBtnActive}
        ><Text style={styles.topBarBtnTextActive}>SUBSCRIBED</Text></TouchableOpacity>
      </View>
    )
  }
};

export default TopBar;