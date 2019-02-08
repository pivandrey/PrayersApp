import { combineReducers } from 'redux';
import deskReducer from './deskReducer';
import prayersReducer from './prayersReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducers';

export const rootReducer = combineReducers ({
  desks: deskReducer,
  prayers: prayersReducer,
  comments: commentsReducer,
  users: userReducer,
});