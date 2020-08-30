import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_TITLE,
  SET_ERROR,
  SET_ITEM,
  SET_EDIT,
} from './actionTypes';

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item: item,
  };
};

export const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    item: item,
  };
};
export const setTitle = (title) => {
  return {
    type: SET_TITLE,
    title: title,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    error: error,
  };
};
export const setItem = (item) => {
  return {
    type: SET_ITEM,
    item: item,
  };
};
export const setEdit = () => {
  return {
    type: SET_EDIT,
  };
};
