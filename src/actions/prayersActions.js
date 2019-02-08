import { createAction } from 'redux-actions';
import * as TYPES from '../types';

export const addPrayer = createAction(TYPES.ADD_PRAYER);
export const deletePrayer = createAction(TYPES.DELETE_PRAYER);
export const makePrayerAnswer = createAction(TYPES.MAKE_PRAYER_ANSWER);
export const makeSubPrayerAnswer = createAction(TYPES.MAKE_SUB_PRAYER_ANSWER);