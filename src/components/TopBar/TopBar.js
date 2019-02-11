import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class TopBar extends React.Component {
  render() {
    const isMyPrayers = this.props.isMyPrayers;
    return(
      <View style={styles.topBar}>
        <TouchableOpacity
          style={!isMyPrayers ? styles.topBarBtn : styles.topBarBtnActive}
          onPress={this.props.handlePressToMyPrayers}
        >
          <Text style={!isMyPrayers ? styles.topBarBtnText : styles.topBarBtnTextActive}>MY PRAYERS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!isMyPrayers ? styles.topBarBtnActive : styles.topBarBtn}
          onPress={this.props.handlePressToSubscribed}
        >
          <Text style={!isMyPrayers ? styles.topBarBtnTextActive : styles.topBarBtnText}>SUBSCRIBED</Text>
          {this.props.countSubscribe ? 
            <View style={styles.countSubscribeContainer}>
              <Text style={styles.countSubscribe}>{this.props.countSubscribe}</Text>
            </View> 
          : undefined}
        </TouchableOpacity>
      </View>
    )
  }
};

TopBar.propTypes = {
  item: PropTypes.object.isRequired,
  handlePressToMyPrayers: PropTypes.func.isRequired,
  handlePressToSubscribed: PropTypes.func.isRequired,
  countSubscribe: PropTypes.number.isRequired,
  isMyPrayers: PropTypes.bool.isRequired,
};

export default TopBar;