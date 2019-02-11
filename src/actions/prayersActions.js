import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import {AsyncStorage} from 'react-native';

export const openPrayer = createAction(TYPES.OPEN_PRAYER);

const randomId = () => {
  return Math.random().toString(36).substr(2, 9)
};

export const addPrayer = (value) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.prayers;
    const newPrayersArray = [
      ...prayers, 
      {
        ...value, 
        id: randomId(), 
        subscribers: '',
        isAnswer: false,
        countPrayedTotal: 0,
        countPrayedMe: 0,
        lastPrayed: '',
      }
    ];
    await AsyncStorage.setItem('prayers', JSON.stringify(newPrayersArray));
    dispatch(addPrayerFinish(newPrayersArray));
  } catch (e) {
    throw e
  }
};
export const addPrayerFinish = createAction(TYPES.ADD_PRAYER);

export const deletePrayer = (value) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.prayers;
    const prayersAfterDelete = prayers.filter((prayer) => {
      return prayer.id !== value
    })
    await AsyncStorage.setItem('prayers', JSON.stringify(prayersAfterDelete));
    dispatch(deletePrayerFinish(prayersAfterDelete));
  } catch(e) {
    throw e
  }
};
export const deletePrayerFinish = createAction(TYPES.DELETE_PRAYER);

export const makePrayerAnswer = (values) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.prayers;
    const prayerId = values.prayerId;
    const date = values.date;
    const prayersAfterChange = prayers.map((prayer) => {
      if (prayer.id === prayerId) {
        if (!prayer.isAnswer) {
          return {
            ...prayer, 
            isAnswer: !prayer.isAnswer, 
            countPrayedTotal: prayer.countPrayedTotal + 1,
            countPrayedMe: prayer.countPrayedMe + 1,
            lastPrayed: date,
          }
        } else {
          return {...prayer, isAnswer: !prayer.isAnswer}
        }
      } else {
        return prayer
      }
    })
    await AsyncStorage.setItem('prayers', JSON.stringify(prayersAfterChange));
    dispatch(makePrayerAnswerFinish(prayersAfterChange));
  } catch(e) {
    throw e
  }
};
export const makePrayerAnswerFinish = createAction(TYPES.MAKE_PRAYER_ANSWER);

export const makePrayerAnswerFromPrayerScreen = (values) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.prayers;
    const prayerId = values.prayerId;
    const date = values.date;
    const prayersAfterChange = prayers.map((prayer) => {
      if (prayer.id === prayerId) {
          return {
            ...prayer, 
            isAnswer: true, 
            countPrayedTotal: prayer.countPrayedTotal + 1,
            countPrayedMe: prayer.countPrayedMe + 1,
            lastPrayed: date,
          }
      } else {
        return prayer
      }
    })
    await AsyncStorage.setItem('prayers', JSON.stringify(prayersAfterChange));
    dispatch(makePrayerAnswerFromPrayerScreenFinish(prayersAfterChange));
  } catch(e) {
    throw e
  }
};
export const makePrayerAnswerFromPrayerScreenFinish = createAction(
  TYPES.MAKE_PRAYER_ANSWER_FROM_PRAYER_SCREEN);

export const makeSubPrayerAnswer = (values) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.subscribedPrayers;
    const prayerId = values.prayerId;
    const date = values.date;
    const prayersAfterChange = prayers.map((prayer) => {
      if (prayer.id === prayerId) {
        if (!prayer.isAnswer) {
          return {
            ...prayer, 
            isAnswer: !prayer.isAnswer, 
            countPrayedTotal: prayer.countPrayedTotal + 1,
            countPrayedMe: prayer.countPrayedMe + 1,
            lastPrayed: date,
          }
        } else {
          return {...prayer, isAnswer: !prayer.isAnswer}
        }
      } else {
        return prayer
      }
    })
    await AsyncStorage.setItem('subscribedPrayers', JSON.stringify(prayersAfterChange));
    dispatch(makeSubPrayerAnswerFinish(prayersAfterChange));
  } catch(e) {
    throw e
  }
};
export const makeSubPrayerAnswerFinish = createAction(TYPES.MAKE_SUB_PRAYER_ANSWER);

export const makeSubPrayerAnswerFromPrayerScreen = (values) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.subscribedPrayers;
    const prayerId = values.prayerId;
    const date = values.date;
    const prayersAfterChange = prayers.map((prayer) => {
      if (prayer.id === prayerId) {
          return {
            ...prayer, 
            isAnswer: true, 
            countPrayedTotal: prayer.countPrayedTotal + 1,
            countPrayedMe: prayer.countPrayedMe + 1,
            lastPrayed: date,
          }
      } else {
        return prayer
      }
    })
    await AsyncStorage.setItem('subscribedPrayers', JSON.stringify(prayersAfterChange));
    dispatch(makeSubPrayerAnswerFromPrayerScreenFinish(prayersAfterChange));
  } catch(e) {
    throw e
  }
};
export const makeSubPrayerAnswerFromPrayerScreenFinish = createAction(
  TYPES.MAKE_SUB_PRAYER_ANSWER_FROM_PRAYER_SCREEN);

export const changePrayerTitle = (value) => async (dispatch, getState) => {
  try {
    const state = getState();
    const prayers = state.prayers.prayers;
    const newTitle = value.title;
    const prayerId = value.prayerId;
    const prayersAfterChange = prayers.map((prayer) => {
      if (prayer.id === prayerId) {
          return {
            ...prayer, 
            title: newTitle,
          }
      } else {
        return prayer
      }
    })
    await AsyncStorage.setItem('prayers', JSON.stringify(prayersAfterChange));
    dispatch(changePrayerTitleFinish(prayersAfterChange));
  } catch (e) {
    throw e
  }
};
export const changePrayerTitleFinish = createAction(TYPES.CHANGE_PRAYER_TITLE);