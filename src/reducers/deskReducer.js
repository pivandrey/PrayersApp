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
};

const randomId = () => {
  return Math.random().toString(36).substr(2, 9)
}

const deskReducer = handleActions(
  {
    [TYPES.ADD_DESK]: (state, action) => {
      const value = action.payload;
      const newDesksArray = [...state.desks, {...value, id: randomId()}]
      return {
        ...state,
        desks: newDesksArray,
      }
    },
    [TYPES.DELETE_DESK]: (state, action) => {
      const deskId = action.payload.id;
      return {
        ...state,
        desks: state.desks,
      }
    }
  },
  initialState
 );

 export default deskReducer;