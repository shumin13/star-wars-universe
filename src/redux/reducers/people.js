import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_FROM_STORE,
  CLEAR_ERROR,
} from '../actions/actionTypes';

const initialState = {
  byId: {},
  ids: [],
  loading: false,
  error: null,
  nextUrl: 'https://swapi.dev/api/people',
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case `PEOPLE/${FETCH_REQUEST}`:
    case `PERSON/${FETCH_REQUEST}`:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case `PEOPLE/${FETCH_SUCCESS}`:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.byId,
        },
        ids: [...state.ids, ...action.ids],
        loading: false,
        error: null,
        nextUrl: action.nextUrl,
      };
    case `PERSON/${FETCH_SUCCESS}`:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.data,
        },
        loading: false,
        error: null,
      };
    case `PEOPLE/${FETCH_ERROR}`:
    case `PERSON/${FETCH_ERROR}`:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case `PERSON/${FETCH_FROM_STORE}`:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case `PERSON/${CLEAR_ERROR}`:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default peopleReducer;
