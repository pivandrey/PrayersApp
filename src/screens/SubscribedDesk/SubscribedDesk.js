import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StrokeImg from '../../img/StrokeImg'
import TopBar from '../../components/TopBar'
import PrayersList from '../../components/PrayersList/PrayersList';
import ShowAnsweredPrayersBtn from '../../components/ShowAnsweredPrayersBtn/ShowAnsweredPrayersBtn';

import { makeSubPrayerAnswer } from '../../actions/prayersActions';
import { flagAnsweredPrayers } from '../../actions/deskActions';

import styles from './style';

class SubscribedDesk extends React.Component {
  static navigationOptions = ({ navigation} ) => {
    const itemTitle = navigation.getParam('item').title;
    const itemId = navigation.getParam('item').id;
    return {
      title: itemTitle,
      headerStyle: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
      },
      headerRight: (
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate('ModalDelete', {
            id: itemId,
          })}
        ><StrokeImg /></TouchableOpacity>
      ),
      headerLeft: null,
    }
  }

  navigateToMyPrayers = () => {
    this.props.navigation.navigate('MyPrayers', {
      item: this.props.navigation.getParam('item'),
    });
  }

  navigateToSubscribed = () => {
    this.props.navigation.navigate('Subscribed', {
      item: this.props.navigation.getParam('item'),
    });
  }
  
  filterDataToNotAnswerPrayers = () => {
    const data = this.props.prayers;
    return data.filter((prayer) => {
      return prayer.isAnswer === false
    })
  }

  handleChangeCheckOfPrayer = (prayerId) => {
    this.props.makeSubPrayerAnswer(prayerId);
  };

  openPrayerDetails = (values) => {
    this.props.navigation.navigate('PrayerDetails', {
      prayer: values,
      answerPrayer: this.handleChangeCheckOfPrayer(values.id)
    });
  };

  render() {
    const item = this.props.navigation.getParam('item');
    const filterPrayersForDesk = this.props.prayers
      .filter((prayerForDesk) => (prayerForDesk.deskId === item.id));
    const filterNonAnsweredPrayersForDesk = filterPrayersForDesk
      .filter((prayer) => (prayer.isAnswer === false))
    const filterAnsweredPrayersForDesk = filterPrayersForDesk
      .filter((prayer) => (prayer.isAnswer === true));
    return (
      <View style={styles.container}>
        <TopBar 
          item={item} 
          handlePressToMyPrayers={this.navigateToMyPrayers} 
          handlePressToSubscribed={this.navigateToSubscribed}
          countSubscribe={filterPrayersForDesk.length}
          isMyPrayers={false}
        />
        {filterPrayersForDesk.length === 0 || filterNonAnsweredPrayersForDesk.length > 0 ? 
        <PrayersList 
          data={filterNonAnsweredPrayersForDesk} 
          handleCheck={this.handleChangeCheckOfPrayer} 
          handlePressPrayer={this.openPrayerDetails} 
        /> : undefined}
        {filterPrayersForDesk.length !== 0 ? 
        <ShowAnsweredPrayersBtn 
          flagAnsweredPrayers={this.props.flagAnsweredPrayers}
          flagShow={this.props.flagShow}
        /> : undefined}
        {this.props.flagShow && filterAnsweredPrayersForDesk.length > 0 ? 
        <PrayersList 
          data={filterAnsweredPrayersForDesk} 
          handleCheck={this.handleChangeCheckOfPrayer} 
          handlePressPrayer={this.openPrayerDetails} 
        /> : undefined}
      </View>
    );
  };
};

const mapStateToProps = store => {
  return {
    prayers: store.prayers.subscribedPrayers,
    flagShow: store.desks.isShowAnsweredPrayers,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    makeSubPrayerAnswer,
    flagAnsweredPrayers,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(SubscribedDesk));;