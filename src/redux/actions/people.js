import axios from 'axios';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionTypes';
import { extractId } from '../../common/utils';

const fetchRequest = () => {
  return {
    type: `PEOPLE/${FETCH_REQUEST}`,
  };
};

const fetchSuccess = (byId, ids, nextUrl) => {
  return {
    type: `PEOPLE/${FETCH_SUCCESS}`,
    byId,
    ids,
    nextUrl,
  };
};

const fetchError = (error) => {
  return {
    type: `PEOPLE/${FETCH_ERROR}`,
    error,
  };
};

export const fetchPeople = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchRequest());
      const { people } = getState();
      const response = await axios.get(people.nextUrl);
      const byId = {};
      const ids = [];
      response.data.results.forEach((result) => {
        const id = extractId(result.url);
        byId[id] = { id, ...result };
        ids.push(id);
      });
      dispatch(fetchSuccess(byId, ids, response.data.next));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};
