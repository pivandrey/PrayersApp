import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import StrokeImg from '../../img/StrokeImg';
import TopBar from '../../components/TopBar';
import PrayersList from '../../components/PrayersList/PrayersList';
import ShowAnsweredPrayersBtn from '../../components/ShowAnsweredPrayersBtn/ShowAnsweredPrayersBtn';

import { makeSubPrayerAnswer, makeSubPrayerAnswerFromPrayerScreen } from '../../actions/prayersActions';
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
  };

  navigateToMyPrayers = () => {
    this.props.navigation.navigate('MyPrayers', {
      item: this.props.navigation.getParam('item'),
    });
  };

  navigateToSubscribed = () => {
    this.props.navigation.navigate('Subscribed', {
      item: this.props.navigation.getParam('item'),
    });
  };
  
  filterDataToNotAnswerPrayers = () => {
    const data = this.props.prayers;
    return data.filter((prayer) => {
      return prayer.isAnswer === false
    })
  };

  handleChangeCheckOfPrayer = (prayerId) => {
    const date = new Date();
    this.props.makeSubPrayerAnswer({ prayerId: prayerId, date: date });
  };

  handlePressAnswerPrayer = (prayerId) => {
    const date = new Date();
    this.props.makeSubPrayerAnswerFromPrayerScreen({ prayerId: prayerId, date: date });
  };

  openPrayerDetails = (values) => {
    this.props.navigation.navigate('PrayerDetails', {
      prayer: values,
      answerPrayer: (() => this.handlePressAnswerPrayer(values.id))
    });
  };

  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View style={styles.container}>
        <TopBar 
          item={item} 
          handlePressToMyPrayers={this.navigateToMyPrayers} 
          handlePressToSubscribed={this.navigateToSubscribed}
          countSubscribe={this.props.prayersForDesk.length}
          isMyPrayers={false}
        />
        <ScrollView 
          scrollEnabled={true}
        >
          {this.props.prayersForDesk.length === 0 || this.props.nonAnsweredPrayersForDesk.length > 0 ? 
          <PrayersList 
            data={this.props.nonAnsweredPrayersForDesk} 
            handleCheck={this.handleChangeCheckOfPrayer} 
            handlePressPrayer={this.openPrayerDetails} 
          /> : undefined}
          {this.props.prayersForDesk.length !== 0 ? 
          <ShowAnsweredPrayersBtn 
            flagAnsweredPrayers={this.props.flagAnsweredPrayers}
            flagShow={this.props.flagShow}
          /> : undefined}
          {this.props.flagShow && this.props.answeredPrayersForDesk.length > 0 ? 
          <PrayersList 
            data={this.props.answeredPrayersForDesk} 
            handleCheck={this.handleChangeCheckOfPrayer} 
            handlePressPrayer={this.openPrayerDetails} 
          /> : undefined}
        </ScrollView>
      </View>
    );
  };
};

SubscribedDesk.propTypes = {
  prayers: PropTypes.array.isRequired,
  flagShow: PropTypes.bool.isRequired,
}

const getPrayers = (state) => state.prayers.subscribedPrayers;
const getDeskId = (state) => state.desks.currentDeskId;

export const getPrayersForDesk = createSelector(
  [getPrayers, getDeskId],
  (prayers, currentDeskId) => (
    prayers.filter((prayerForDesk) => (prayerForDesk.deskId === currentDeskId))
  )
);

export const getNonAnsweredPrayersForDesk = createSelector(
  [getPrayers, getDeskId],
  (prayers, currentDeskId) => (
    prayers.filter((prayerForDesk) => (prayerForDesk.deskId === currentDeskId))
      .filter((prayer) => (prayer.isAnswer === false))
  )
);

export const getAnsweredPrayersForDesk = createSelector(
  [getPrayers, getDeskId],
  (prayers, currentDeskId) => (
    prayers.filter((prayerForDesk) => (prayerForDesk.deskId === currentDeskId))
      .filter((prayer) => (prayer.isAnswer === true))
  )
);

const mapStateToProps = state => {
  return {
    prayers: state.prayers.subscribedPrayers,
    flagShow: state.desks.isShowAnsweredPrayers,
    prayersForDesk: getPrayersForDesk(state),
    nonAnsweredPrayersForDesk: getNonAnsweredPrayersForDesk(state),
    answeredPrayersForDesk: getAnsweredPrayersForDesk(state),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    makeSubPrayerAnswer,
    makeSubPrayerAnswerFromPrayerScreen,
    flagAnsweredPrayers,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(SubscribedDesk));