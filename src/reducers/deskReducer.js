import { handleActions } from 'redux-actions';
import * as TYPES from '../types';

const initialState = {
  desks: [
    {
      title: "To Do",
      id: "todoList",
    },
    {
      title: "In Progress",
      id: "inprogresslist",
    },
    {
      title: "Completed",
      id: "completedList",
    },
  ],
  isShowAnsweredPrayers: true,
  currentDeskId: '',
};

const deskReducer = handleActions(
  {
    [TYPES.ADD_DESK]: (state, action) => {
      return {
        ...state,
        desks: action.payload,
      }
    },
    [TYPES.DELETE_DESK]: (state, action) => {
      return {
        ...state,
        desks: action.payload,
      }
    },
    [TYPES.FLAG_ANSWERED_PRAYERS]: (state, action) => {
      return {
        ...state,
        isShowAnsweredPrayers: !state.isShowAnsweredPrayers,
      }
    },
    [TYPES.OPEN_DESK]: (state, action) => {
      return {
        ...state,
        currentDeskId: action.payload,
      }
    },
    [TYPES.FETCH_DESKS_FROM_STORAGE]: (state, action) => {
      return {
        ...state,
        desks: action.payload,
      }
    },
  },
  initialState
 );

 export default deskReducer;