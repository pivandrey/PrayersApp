import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  users: [
    {
      id: 'adsjghsds',
      name: 'Anna Barber',
      imgSrc: 'user1',
    },
    {
      id: 'artyrdd4sds',
      name: 'Hanna Barber',
      imgSrc: 'user2',
    },
    {
      id: 'aadssoio4sds',
      name: 'Gloria Barber',
      imgSrc: 'user3',
    },
    {
      id: 'asso321io4sds',
      name: 'New User',
      imgSrc: '',
    }
  ],
};

const userReducer = handleActions(
  {
    
  },
  initialState
 );

 export default userReducer;