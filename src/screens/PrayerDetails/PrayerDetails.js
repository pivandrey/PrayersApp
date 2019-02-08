import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PrayerImg from '../../img/PrayerImg';

import { makePrayerAnswer } from '../../actions/prayersActions';

import styles from './style';
import LastPrayed from '../../components/LastPrayed/LastPrayed';
import PrayerData from '../../components/PrayerData/PrayerData';
import PrayerMembers from '../../components/PrayerMembers/PrayerMembers';


class PrayerDetails extends React.Component {
  
  static navigationOptions = ({ navigation} ) => {
    const prayerTitle = navigation.getParam('prayer').title;
    return {
      title: prayerTitle,
      headerTitleStyle: {
        textAlign: 'left',
      },
      headerStyle: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        height: 80,
        backgroundColor: '#BFB393',
      },
      headerLeftContainerStyle: {
        position: 'absolute',
        top: 5,
        left: 5,
      },
      headerLeft: null,
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.getParam('answerPrayer')}
          style={styles.btnAdd}
        ><PrayerImg /></TouchableOpacity>
      ),
    }
  }

  render() {
    const prayer = this.props.navigation.getParam('prayer');
    return (
      <View style={styles.container}>
        <LastPrayed lastPrayed={prayer.lastPrayed}/>
        <PrayerData prayer={prayer}/>
        <PrayerMembers data={this.props.users}/>
      </View>
    );
  };
};

const mapStateToProps = store => {
  return {
    users: store.users.users,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    makePrayerAnswer,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(PrayerDetails));;