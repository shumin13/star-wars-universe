import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {
  clearError,
  fetchPerson,
  fetchPlanet,
  fetchFilm,
  fetchSpecies,
  fetchStarship,
  fetchVehicle,
} from '../redux/actions';
import {
  PROFILE,
  PLANET,
  FILM,
  SPECIES,
  STARSHIP,
  VEHICLE,
} from '../common/consts';
import Header from '../common/Header';
import Loader from '../common/Loader';
import Error from '../common/Error';
import Section from './Section';
import Content from './Content';
import Attribute from './Attribute';

const Profile = ({
  byId,
  loading,
  error,
  clearError,
  fetchPerson,
  fetchFilm,
  fetchPlanet,
  fetchSpecies,
  fetchStarship,
  fetchVehicle,
}) => {
  const { personId } = useParams();

  useEffect(() => {
    fetchPerson(`https://swapi.dev/api/people/${personId}/`, personId);
  }, [fetchPerson, personId]);

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const person = byId[personId];

  let content = (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
    </>
  );

  if (person) {
    content = (
      <>
        <Header text={person.name}></Header>
        <Grid container spacing={2}>
          <Section title='Profile'>
            {Object.keys(PROFILE).map((key) => (
              <Attribute key={key} attr={PROFILE[key]} value={person[key]} />
            ))}
          </Section>
          <Section title='Planet'>
            <Content
              key={person.homeworld}
              url={person.homeworld}
              domain='planets'
              fields={PLANET}
              fetch={fetchPlanet}
            />
          </Section>
          {person.species.length !== 0 && (
            <Section title='Species'>
              {person.species.map((url) => (
                <Content
                  key={url}
                  url={url}
                  domain='species'
                  fields={SPECIES}
                  fetch={fetchSpecies}
                />
              ))}
            </Section>
          )}
          {person.films.length !== 0 && (
            <Section title='Films'>
              {person.films.map((url) => (
                <Content
                  key={url}
                  url={url}
                  domain='films'
                  fields={FILM}
                  fetch={fetchFilm}
                />
              ))}
            </Section>
          )}
          {person.starships.length !== 0 && (
            <Section title='Starships'>
              {person.starships.map((url) => (
                <Content
                  key={url}
                  url={url}
                  domain='starships'
                  fields={STARSHIP}
                  fetch={fetchStarship}
                />
              ))}
            </Section>
          )}
          {person.vehicles.length !== 0 && (
            <Section title='Vehicles'>
              {person.vehicles.map((url) => (
                <Content
                  key={url}
                  url={url}
                  domain='vehicles'
                  fields={VEHICLE}
                  fetch={fetchVehicle}
                />
              ))}
            </Section>
          )}
        </Grid>
      </>
    );
  }
  return content;
};

const mapStateToProps = (state) => {
  return {
    byId: state.people.byId,
    loading: state.people.loading,
    error: state.people.error,
  };
};

export default connect(mapStateToProps, {
  clearError,
  fetchPerson,
  fetchPlanet,
  fetchFilm,
  fetchSpecies,
  fetchStarship,
  fetchVehicle,
})(Profile);
