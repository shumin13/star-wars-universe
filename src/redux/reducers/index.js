import { combineReducers } from 'redux';
import { createReducer } from './createReducer';
import people from './people';

const reducers = combineReducers({
    people,
    films: createReducer('FILM'),
    planets: createReducer('PLANET'),
    species: createReducer('SPECIES'),
    starships: createReducer('STARSHIP'),
    vehicles: createReducer('VEHICLE'),
});

export default reducers;
