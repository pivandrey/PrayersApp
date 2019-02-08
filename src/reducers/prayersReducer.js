import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
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

const randomId = () => {
  return Math.random().toString(36).substr(2, 9)
}

const prayersReducer = handleActions(
  {
    [TYPES.ADD_PRAYER]: (state, action) => {
      const data = action.payload;
      const newPrayersArray = [
        ...state.prayers, 
        {
          ...data, 
          id: randomId(), 
          subscribers: '',
          isAnswer: false,
          countPrayedTotal: 0,
          countPrayedMe: 0,
        }
      ];
      return {
        ...state,
        prayers: newPrayersArray,
      }
    },
    [TYPES.DELETE_PRAYER]: (state, action) => {
      const prayerId = action.payload;
      const prayersAfterDelete = state.prayers.filter((prayer) => {
        return prayer.id !== prayerId
      })
      return {
        ...state,
        prayers: prayersAfterDelete,
      }
    },
    [TYPES.MAKE_PRAYER_ANSWER]:  (state, action) => {
      const prayerId = action.payload.prayerId;
      const date = action.payload.date;
      const prayersAfterChange = state.prayers.map((prayer) => {
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
      return {
        ...state,
        prayers: prayersAfterChange,
      }
    }, 
    [TYPES.MAKE_SUB_PRAYER_ANSWER]:  (state, action) => {
      const prayerId = action.payload;
      const prayersAfterChange = state.subscribedPrayers.map((prayer) => {
        if (prayer.id === prayerId) {
          if (!prayer.isAnswer) {
            return {
              ...prayer, 
              isAnswer: !prayer.isAnswer, 
              countPrayedTotal: prayer.countPrayedTotal + 1,
              countPrayedMe: prayer.countPrayedMe + 1,
            }
          } else {
            return {...prayer, isAnswer: !prayer.isAnswer}
          }
        } else {
          return prayer
        }
      })
      return {
        ...state,
        subscribedPrayers: prayersAfterChange,
      }
    }, 
  },
  initialState
 );

 export default prayersReducer;