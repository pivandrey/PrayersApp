import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import PrayerImg from '../../img/PrayerImg';

import { makePrayerAnswer, changePrayerTitle } from '../../actions/prayersActions';
import { addComment } from '../../actions/commentsActions';

import LastPrayed from '../../components/LastPrayed/LastPrayed';
import PrayerData from '../../components/PrayerData/PrayerData';
import PrayerMembers from '../../components/PrayerMembers/PrayerMembers';
import PrayerComments from '../../components/PrayerComments/PrayerComments';
import PrayerTitle from '../../components/PrayerTitle/PrayerTitle';

import styles from './style';

class PrayerDetails extends React.Component {
  
  static navigationOptions = ({ navigation} ) => {
    const prayerTitle = navigation.getParam('prayer').title;
    return {
      headerStyle: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        backgroundColor: '#BFB393',
      },
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnback}
        ><Text style={styles.back}>◀</Text></TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('answerPrayer')}
          style={styles.btnAdd}
        ><PrayerImg /></TouchableOpacity>
      ),
    }
  };

  addNewComment = (value) => {
    const prayerId = this.props.navigation.getParam('prayer').id;
    const date = new Date();
    this.props.addComment(
      { 
        prayerId: prayerId,
        title: value,
        dataAdded: date,
      }
    )
  };

  changeTitlePrayer = (value) => {
    const prayerId = this.props.navigation.getParam('prayer').id;
    this.props.changePrayerTitle({ title: value, prayerId: prayerId })
  }

  render() {
    const prayer = this.props.navigation.getParam('prayer');
    return (
      <View style={styles.container}>
        <PrayerTitle 
          title={prayer.title} 
          changeTitle={this.changeTitlePrayer}
        />
        <KeyboardAwareScrollView 
          scrollEnabled={true}
          keyboardShouldPersistTaps='handled'
        >
        <LastPrayed lastPrayed={prayer.lastPrayed}/>
        <PrayerData prayer={prayer}/>
        <PrayerMembers />
        <PrayerComments 
          data={this.props.commentsForPrayer} 
          handleSubmit={this.addNewComment}
        />
        </KeyboardAwareScrollView>
      </View>
    );
  };
};

PrayerDetails.propTypes = {
  comments: PropTypes.array,
  currentPrayer: PropTypes.string,
};

const getComments = (state) => state.comments.comments;
const getPrayerId = (state) => state.prayers.currentPrayer;

export const getCommentsForPrayer = createSelector(
  [getComments, getPrayerId],
  (comments, currentPrayer) => (
    comments.filter((comment) => comment.prayerId === currentPrayer)
  )
)

const mapStateToProps = state => {
  return {
    commentsForPrayer: getCommentsForPrayer(state),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    makePrayerAnswer,
    addComment,
    changePrayerTitle,
  },
  dispatch
);

export default (connect(
  mapStateToProps,
  mapDispatchToProps, 
)(PrayerDetails));