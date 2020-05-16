import axios from 'axios';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_FROM_STORE,
} from './actionTypes';

const fetchRequest = (name) => {
  return {
    type: `${name}/${FETCH_REQUEST}`,
  };
};

const fetchSuccess = (name, data) => {
  return {
    type: `${name}/${FETCH_SUCCESS}`,
    data,
  };
};

const fetchError = (name, error) => {
  return {
    type: `${name}/${FETCH_ERROR}`,
    error,
  };
};

const fetchFromStore = (name) => {
  return {
    type: `${name}/${FETCH_FROM_STORE}`,
  };
};

export const createAction = (name = '', reducerName) => {
  return (url, id) => {
    return async (dispatch, useState) => {
      dispatch(fetchRequest(name));
      const { [reducerName]: state } = useState();
      if (state['byId'][id]) {
        dispatch(fetchFromStore(name));
      } else {
        try {
          const response = await axios.get(url);
          const data = { [id]: { id, ...response.data } };
          dispatch(fetchSuccess(name, data));
        } catch (error) {
          dispatch(fetchError(name, error.message));
        }
      }
    };
  };
};
