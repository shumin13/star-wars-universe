import { createAction } from './createAction';

export { fetchPeople, clearError } from './people';

export const fetchPerson = createAction('PERSON', 'people');

export const fetchFilm = createAction('FILM', 'films');

export const fetchPlanet = createAction('PLANET', 'planets');

export const fetchSpecies = createAction('SPECIES', 'species');

export const fetchStarship = createAction('STARSHIP', 'starships');

export const fetchVehicle = createAction('VEHICLE', 'vehicles');
