import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  currentPrayer: '',
  prayers: [
    {
      id: 'adsadsadsds',
      title: 'first prayer',
      deskId: 'todoList',
      isAnswer: false,
      subscribers: '',
      countPrayedTotal: 0,
      countPrayedMe: 0,
      dataAdded: '2019-02-02T10:34:05.863Z',
      lastPrayed: '2019-02-02T06:34:05.863Z',
    },
    {
      id: 'adsadsasddsds',
      title: 'second prayer',
      deskId: 'todoList',
      isAnswer: false,
      subscribers: 2,
      countPrayedTotal: 3,
      countPrayedMe: 1,
      dataAdded: '2019-01-08T10:34:05.863Z',
      lastPrayed: '2019-02-08T03:34:05.863Z',
    }
  ],
  subscribedPrayers: [
    {
      id: 'adsad243sds',
      title: 'first sub prayer',
      deskId: 'todoList',
      isAnswer: false,
      subscribers: 2,
      countPrayedTotal: 0,
      countPrayedMe: 0,
      dataAdded: '2019-01-28T10:34:05.863Z',
      lastPrayed: '2019-02-01T10:34:05.863Z',
    },
    {
      id: 'adsadsas43ddsds',
      title: 'second sub prayer',
      deskId: 'todoList',
      isAnswer: false,
      subscribers: 2,
      countPrayedTotal: 3,
      countPrayedMe: 1,
      dataAdded: '2019-02-08T10:10:05.863Z',
      lastPrayed: '2019-02-08T09:34:05.863Z',
    }
  ]
};

const prayersReducer = handleActions(
  { 
    [TYPES.OPEN_PRAYER]: (state, action) => {
      return {
        ...state,
        currentPrayer: action.payload,
      }
    },
    [TYPES.ADD_PRAYER]: (state, action) => {
      return {
        ...state,
        prayers: action.payload,
      }
    },
    [TYPES.DELETE_PRAYER]: (state, action) => {
      return {
        ...state,
        prayers: action.payload,
      }
    },
    [TYPES.MAKE_PRAYER_ANSWER]: (state, action) => {
      return {
        ...state,
        prayers: action.payload,
      }
    }, 
    [TYPES.MAKE_PRAYER_ANSWER_FROM_PRAYER_SCREEN]: (state, action) => {
      return {
        ...state,
        prayers: action.payload,
      }
    }, 
    [TYPES.MAKE_SUB_PRAYER_ANSWER]: (state, action) => {
      return {
        ...state,
        subscribedPrayers: action.payload,
      }
    }, 
    [TYPES.MAKE_SUB_PRAYER_ANSWER_FROM_PRAYER_SCREEN]: (state, action) => {
      return {
        ...state,
        subscribedPrayers: action.payload,
      }
    },
    [TYPES.FETCH_PRAYERS_FROM_STORAGE]: (state, action) => {
      return {
        ...state,
        prayers: action.payload,
      }
    }, 
    [TYPES.FETCH_SUBSCRIBED_PRAYERS_FROM_STORAGE]: (state, action) => {
      return {
        ...state,
        subscribedPrayers: action.payload,
      }
    },
    [TYPES.CHANGE_PRAYER_TITLE]: (state, action) => {
      return {
        ...state,
        prayers: action.payload,
      }
    },
  },
  initialState
 );

 export default prayersReducer;