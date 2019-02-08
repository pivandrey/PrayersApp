import { combineReducers } from 'redux';
import deskReducer from './deskReducer';
import prayersReducer from './prayersReducer';

export const rootReducer = combineReducers ({
  desks: deskReducer,
  prayers: prayersReducer,
});