import { createAction } from 'redux-actions';
import * as TYPES from '../types';
import {AsyncStorage} from 'react-native';

const randomId = () => {
  return Math.random().toString(36).substr(2, 9)
};

export const addComment = (value) => async (dispatch, getState) => {
  try {
    const state = getState();
    const comments = state.comments.comments;
    const data = value;
      const newCommentsArray = [
        ...comments, 
        {
          ...data, 
          id: randomId(), 
          user: 'new User',
        }
      ];
    await AsyncStorage.setItem('comments', JSON.stringify(newCommentsArray));
    dispatch(addCommentFinish(newCommentsArray));
  } catch (e) {
    throw e
  }
}

export const addCommentFinish = createAction(TYPES.ADD_COMMENT);