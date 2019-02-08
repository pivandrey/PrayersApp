import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StrokeImg from '../../img/StrokeImg';
import TopBar from './TopBar';
import AddNewPrayer from '../../components/AddNewPrayer';
import PrayersList from '../../components/PrayersList/PrayersList';
import ShowAnsweredPrayersBtn from '../../components/ShowAnsweredPrayersBtn/ShowAnsweredPrayersBtn';

import { addPrayer, makePrayerAnswer } from '../../actions/prayersActions';
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

  navigateToSubscribed = () => {
    this.props.navigation.navigate('Subscribed', {
      item: this.props.navigation.getParam('item'),
    });
  }

  addNewPrayer = (value) => {
    const deskId = this.props.navigation.getParam('item').id;
    const date = new Date();
    this.props.addPrayer(
      { 
        deskId: deskId,
        title: value,
        dataAdded: date,
      }
    )
  }

  filterDataToNotAnswerPrayers = () => {
    const data = this.props.prayers;
    return data.filter((prayer) => {
      return prayer.isAnswer === false
    })
  }

  handleChangeCheckOfPrayer = (prayerId) => {
    this.props.makePrayerAnswer(prayerId);
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
        <TopBar item={item} handlePress={this.navigateToSubscribed}/>
        <AddNewPrayer handleSubmit={this.addNewPrayer}/>
        {filterPrayersForDesk.length === 0 || filterNonAnsweredPrayersForDesk.length > 0 ? 
        <PrayersList 
          data={filterNonAnsweredPrayersForDesk} 
          handleCheck={this.handleChangeCheckOfPrayer} 
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
        /> : undefined}
      </View>
    );
  };
};

const mapStateToProps = store => {
  return {
    prayers: store.prayers.prayers,
    flagShow: store.desks.isShowAnsweredPrayers,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addPrayer,
    makePrayerAnswer,
    flagAnsweredPrayers,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(MyPrayersDesk));;