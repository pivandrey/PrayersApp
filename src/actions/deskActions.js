import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import {AsyncStorage} from 'react-native';

const randomId = () => {
  return Math.random().toString(36).substr(2, 9)
};

export const flagAnsweredPrayers = createAction(TYPES.FLAG_ANSWERED_PRAYERS);
export const openDesk = createAction(TYPES.OPEN_DESK);

export const addDesk = (value) => async (dispatch, getState) => {
  try {
    const state = getState();
    const desks = state.desks.desks;
    const newDesksArray = [...desks, {...value, id: randomId()}]
    await AsyncStorage.setItem('desks', JSON.stringify(newDesksArray));
    dispatch(addDeskFinish(newDesksArray));
  } catch (e) {
    throw e
  }
};
export const addDeskFinish = createAction(TYPES.ADD_DESK);

export const deleteDesk = (value) => async (dispatch, getState) => {
  try {
    const state = getState();
    const desks = state.desks.desks;
    const desksAfterDelete = desks.filter((desk) => {return desk.id !== value});
    await AsyncStorage.setItem('desks', JSON.stringify(desksAfterDelete));
    dispatch(deleteDeskFinish(desksAfterDelete));
  } catch (e) {
    throw e
  }
};
export const deleteDeskFinish = createAction(TYPES.DELETE_DESK);

export const loadAllDataFromStorage = () => async (dispatch, getState) => {
  try {
    const prayers = await AsyncStorage.getItem('prayers');
    const prayersParse = JSON.parse(prayers);
    const subscribedPrayers = await AsyncStorage.getItem('subscribedPrayers');
    const subscribedPrayersParse = JSON.parse(subscribedPrayers);
    const comments = await AsyncStorage.getItem('comments');
    const commentsParse = JSON.parse(comments);
    const desks = await AsyncStorage.getItem('desks');
    const desksParse = JSON.parse(desks);

    if (prayersParse) {
      dispatch(fetchPrayersFromStorage(prayersParse))
    };
    if (subscribedPrayersParse) {
      dispatch(fetchSubscribedPrayersFromStorage(subscribedPrayersParse))
    };
    if (commentsParse) {
      dispatch(fetchCommentsFromStorage(commentsParse))
    };
    if (desksParse) {
      dispatch(fetchDesksFromStorage(desksParse))
    };
  } catch (e) {
    throw e
  }
};

export const fetchPrayersFromStorage = createAction(TYPES.FETCH_PRAYERS_FROM_STORAGE);
export const fetchCommentsFromStorage = createAction(TYPES.FETCH_COMMENTS_FROM_STORAGE);
export const fetchDesksFromStorage = createAction(TYPES.FETCH_DESKS_FROM_STORAGE);
export const fetchSubscribedPrayersFromStorage = createAction(TYPES.FETCH_SUBSCRIBED_PRAYERS_FROM_STORAGE);