import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import StrokeImg from '../../img/StrokeImg';
import TopBar from '../../components/TopBar';
import AddNewPrayer from '../../components/AddNewPrayer';
import PrayersList from '../../components/PrayersList/PrayersList';
import ShowAnsweredPrayersBtn from '../../components/ShowAnsweredPrayersBtn/ShowAnsweredPrayersBtn';

import { addPrayer, makePrayerAnswer, makePrayerAnswerFromPrayerScreen, openPrayer } from '../../actions/prayersActions';
import { flagAnsweredPrayers } from '../../actions/deskActions';

import styles from './style';


class MyPrayersDesk extends React.Component {
  static navigationOptions = ({ navigation} ) => {
    const itemTitle = navigation.getParam('item').title;
    const itemId = navigation.getParam('item').id;
    return {
      title: itemTitle,
      headerStyle: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
      },
      headerBackTitle: null,
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

  navigateToSubscribed = () => {
    this.props.navigation.navigate('Subscribed', {
      item: this.props.navigation.getParam('item'),
    });
  };

  navigateToMyPrayers = () => {
    this.props.navigation.navigate('MyPrayers', {
      item: this.props.navigation.getParam('item'),
    });
  };

  addNewPrayer = (value) => {
    const deskId = this.props.navigation.getParam('item').id;
    const date = new Date();
    this.props.addPrayer(
      { 
        deskId: deskId,
        title: value,
        dataAdded: date,
      }
    );
  };

  filterDataToNotAnswerPrayers = () => {
    const data = this.props.prayers;
    return data.filter((prayer) => {
      return prayer.isAnswer === false
    });
  };

  handleChangeCheckOfPrayer = (prayerId) => {
    const date = new Date();
    this.props.makePrayerAnswer({ prayerId: prayerId, date: date });
  };

  handlePressAnswerPrayer = (prayerId) => {
    const date = new Date();
    this.props.makePrayerAnswerFromPrayerScreen({ prayerId: prayerId, date: date });
  };

  openPrayerDetails = (values) => {
    this.props.openPrayer(values.id);
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
          countSubscribe={this.props.countOfSubscribedPrayers}
          isMyPrayers={true}
        />
        <ScrollView 
          scrollEnabled={true}
        >
          <AddNewPrayer handleSubmit={this.addNewPrayer}/>
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

MyPrayersDesk.propTypes = {
  prayers: PropTypes.array.isRequired,
  flagShow: PropTypes.bool.isRequired,
  subscribedPrayers: PropTypes.array.isRequired,
};

const getPrayers = (state) => state.prayers.prayers;
const getSubscribePrayer = (state) => state.prayers.subscribedPrayers;
const getDeskId = (state) => state.desks.currentDeskId;

export const getCountOfSubscribedPrayers = createSelector(
  [getSubscribePrayer, getDeskId],
  (subscribedPrayers, currentDeskId) => (
    subscribedPrayers.filter((subscribePrayer) => 
      (subscribePrayer.deskId === currentDeskId)).length
  )
);

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
    prayers: state.prayers.prayers,
    flagShow: state.desks.isShowAnsweredPrayers,
    subscribedPrayers: state.prayers.subscribedPrayers,
    countOfSubscribedPrayers: getCountOfSubscribedPrayers(state),
    prayersForDesk: getPrayersForDesk(state),
    nonAnsweredPrayersForDesk: getNonAnsweredPrayersForDesk(state),
    answeredPrayersForDesk: getAnsweredPrayersForDesk(state),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addPrayer,
    makePrayerAnswer,
    flagAnsweredPrayers,
    makePrayerAnswerFromPrayerScreen,
    openPrayer,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(MyPrayersDesk));