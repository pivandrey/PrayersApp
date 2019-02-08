import { createAction } from 'redux-actions';
import * as TYPES from '../types';

export const addDesk = createAction(TYPES.ADD_DESK);
export const deleteDesk = createAction(TYPES.DELETE_DESK);
export const flagAnsweredPrayers = createAction(TYPES.FLAG_ANSWERED_PRAYERS);