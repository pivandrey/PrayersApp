import React from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './style';
import UserImg from '../../img/UserImg';
import PrayerImg from '../../img/PrayerImg';

class PrayerMini extends React.Component {

  handleClickChange = () => {
    const prayerId = this.props.data.id;
    this.props.handleCheck(prayerId);
  };

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.marker}></View>
        <CheckBox 
          checked={this.props.data.isAnswer}
          checkedIcon='check-square'
          onPress={this.handleClickChange}
        />
        <Text 
          style={this.props.data.isAnswer ? styles.titleThroughLine : styles.title}
        >{this.props.data.title.length > 14 ? this.props.data.title.substring(0, 12) + '...' 
          : this.props.data.title}
        </Text>
        <UserImg />
        <Text style={styles.subscribers}>{this.props.data.subscribers ? this.props.data.subscribers : ' '}</Text>
        <PrayerImg />
        <Text style={styles.count}>{this.props.data.countPrayedTotal}</Text>
      </View>
    )
  }
};

PrayerMini.propTypes = {
  data: PropTypes.object.isRequired,
  handleCheck: PropTypes.func.isRequired,
}

export default PrayerMini;