import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_FROM_STORE,
} from '../actions/actionTypes';

const initialState = {
  byId: {},
  loading: false,
  error: null,
};

export const createReducer = (name = '') => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `${name}/${FETCH_REQUEST}`:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case `${name}/${FETCH_SUCCESS}`:
        return {
          ...state,
          byId: {
            ...state.byId,
            ...action.data,
          },
          loading: false,
          error: null,
        };
      case `${name}/${FETCH_ERROR}`:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case `${name}/${FETCH_FROM_STORE}`:
        return {
          ...state,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  };
};
