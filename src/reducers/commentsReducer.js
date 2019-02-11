import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  comments: [
    {
      id: 'adsa121231dsds',
      title: 'first comment',
      prayerId: 'adsadsadsds',
      dataAdded: '2019-02-08T09:34:05.863Z',
      user: 'Anna Barber',
    },
    {
      id: 'aads45asdd4sds',
      title: 'second comment',
      prayerId: 'adsadsadsds',
      dataAdded: '2019-01-08T10:34:05.863Z',
      user: 'Hanna Barber',
    },
    {
      id: 'aadss45jgdd4sds',
      title: 'Third comment',
      prayerId: 'adsadsadsds',
      dataAdded: '2019-01-07T10:34:05.863Z',
      user: 'Gloria Barber',
    }
  ],
};

const commentsReducer = handleActions(
  {
    [TYPES.ADD_COMMENT]: (state, action) => {
      return {
        ...state,
        comments: action.payload,
      }
    },
    [TYPES.FETCH_COMMENTS_FROM_STORAGE]: (state, action) => {
      return {
        ...state,
        comments: action.payload,
      }
    },
  },
  initialState
 );

 export default commentsReducer;