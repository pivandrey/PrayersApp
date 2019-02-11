import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

class PrayerMembers extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.membersText}>Members</Text>
        <View style={styles.imageList}>
          <Image 
            source={require('../../img/user1.png')}
            style={styles.image}
          />
          <Image 
            source={require('../../img/user2.png')}
            style={styles.image}
          />
          <View style={styles.addMember}>
            <Text style={styles.addMemberText}>+</Text>
          </View>
        </View>
      </View>
    )
  }
};

export default PrayerMembers;